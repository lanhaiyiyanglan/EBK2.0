var files1=new Array();
var files2=new Array();
var files='';
var fileUploads={
	init:function(){
		$(".addImg").click(function(){
			$(this).parent().find('.upload_input').click();
		});
		$("#addBtn2 .upload_input").on('change',function(){
			fileUploads.videoChange(this);
		});
		$("#addBtn1 .upload_input,#addBtn3 .upload_input").on('change',function(){
			var id=$(this).parent().attr("id");
			fileUploads.changeImg(this,id);
		});
		$("#chooseUpload li").click(function(){
		   $(this).addClass("on").siblings().removeClass("on");
		   var index=$(this).index();
		   $(".fileBox").hide();
		   $(".fileBox").eq(index).show();
		});
	},
	changeImg:function(file,id){
		var temp=file.value;
		  if(id=="addBtn1"){
			 var doms = $('<li><img class="preview" /><input type="hidden" value="'+temp+'"><a onClick="fileUploads.showVr(this);"></a><i onClick="fileUploads.deleteImg(this);" class="closeBt1"></i></li>');
			 files=files1;
		  }else{  
		     var doms = $('<li><img class="preview" /><input type="hidden" value="'+temp+'"><i onClick="fileUploads.deleteImg(this);"></i></li>');
			 files=files2;
		  }
		  var pic=$(doms).find(".preview");
		  var hiddenInput=$(doms).find("input[type='hidden']");
		  var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();
		   // gif在IE浏览器暂时无法显示
		   if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
			  if (ext != '') {
				alert("图片的格式必须为png或者jpg或者jpeg格式！"); 
			  } 
			   return;
		   }
		   var tip = false;
		   for(var j=0; j<files.length; j++){
				if(files[j] == file.value){
					tip = true;
					alert("图片重复");
					break;
				}
			}
			if(!tip){
			    files.push(file.value);
			   //判断IE版本
			   var isIE = navigator.userAgent.match(/MSIE/)!= null,
				   isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;
				   isIE10 = navigator.userAgent.match(/MSIE 10.0/)!= null;
			   if(isIE && !isIE10) {
				  file.select();
				  var reallocalpath = document.selection.createRange().text;
				   // IE6浏览器设置img的src为本地路径可以直接显示图片
				   if (isIE6) {
					  pic.attr("src",reallocalpath);
				   }else{
					  // 非IE6版本的IE由于安全问题直接设置img的src无法显示本地图片，但是可以通过滤镜来实现             
					  pic.css("filter","progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='scale',src=\"" + reallocalpath + "\")");
					  // 设置img的src为base64编码的透明图片 取消显示浏览器默认图片
					  pic.attr('src','data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==');             
				   }
				   hiddenInput.val(reallocalpath);
			   }else {
				  fileUploads.html5Reader(file,pic,function(result){
					  hiddenInput.val(result);
				 });
			   }
			   $(doms).insertBefore("#"+id);	
			   
			   if(id=="addBtn1"){
				   $("#fileBox1 ul").append($(file).parent().clone(true));
			   }else{
				    $("#fileBox3 ul").append($(file).parent().clone(true));
			   }
			   $(file).parent().hide();
			}
	},
	html5Reader:function(file,pic,func){
		 var file = file.files[0];
		 var callFunction=func;
		 var reader = new FileReader();
		 reader.readAsDataURL(file);
		 reader.onload = function(e){
			 pic.attr("src",this.result);
			 callFunction(this.result);
		 }
		 return this.result;
   },

  deleteImg:function(obj){
	 $(obj).parent().parent().find(".upload_input").replaceWith('<input type="file" class="upload_input">');  
	 $(obj).parent().parent().find(".upload_input").on("change", function(){  
	   if($(obj).attr("class")=="closeBt1"){
		    fileUploads.changeImg(this,"addBtn1");
	   }else{
		    fileUploads.changeImg(this,"addBtn3");
	   }
	 });  
	 var tempIndex=$(obj).parent().index();
	 if($(obj).attr("class")=="closeBt1"){
		    files1.splice($(obj).parent().index(),1);
			var length=$("#fileBox1 ul li").length;
			var eqIndex=parseInt(length/2)+tempIndex;
			$("#fileBox1 ul li").each(function(i,item){
			  if(i==eqIndex){
				 item.remove();
			  }
			});
	 }else{
		    files2.splice($(obj).parent().index(),1);
			var length=$("#fileBox3 ul li").length;
			var eqIndex=parseInt(length/2)+tempIndex;
			$("#fileBox3 ul li").each(function(i,item){
			  if(i==eqIndex){
				 item.remove();
			  }
			});
	 }
	 $(obj).parent().remove();
   },

   videoChange:function(obj){
	    var files = obj.files,
		videoURL = null,
		windowURL = window.URL || window.webkitURL;;
		if (files && files[0]) { 
			videoURL = windowURL.createObjectURL(files[0]); 
			$('<li><video src="' + videoURL + '"></video><a class="play" onClick="fileUploads.showVideo(this);"></a><i onClick="fileUploads.deleteVideo(this);"></i></li>').insertBefore("#addBtn2"); 
		} 
		$("#fileBox2 ul").append($(obj).parent().clone(true));
		$(obj).parent().hide();
   },
   deleteVideo:function(obj){
	 $(obj).parent().parent().find(".upload_input").replaceWith('<input type="file" class="upload_input">');  
	 $(obj).parent().parent().find(".upload_input").on("change", function(){  
	   fileUploads.videoChange(this);
	 });  
	 var tempIndex=$(obj).parent().index();
	 var length=$("#fileBox2 ul li").length;
	 var eqIndex=parseInt(length/2)+tempIndex;
	 $("#fileBox2 ul li").each(function(i,item){
	  if(i==eqIndex){
		 item.remove();
	  }
	 });
	 $(obj).parent().remove(); 
   },
   showVr:function(obj){
	   var src=$(obj).parent().find("img").attr("src");
	   var html="<div><img src="+src+"></div>";
	   layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        area: ["500px", "500px"],
        content:html
      });
   },
   showVideo:function(obj){
	   var src=$(obj).parent().find("video").attr("src");
	   var html='<div><video src='+src+'  controls="controls" autoplay="true"></video></div>';
	   layer.open({
        type: 1,
        title: false,
        closeBtn:0,
        shadeClose: true,
        area: ["500px", "500px"],
        content:html
      });
   }
}
$(function(){
	fileUploads.init();
});