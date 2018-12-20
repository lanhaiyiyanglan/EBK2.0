var manage={
	init:function(){
		$(".checkAll").click(function(){
			manage.checkAll($(this));
			manage.selectNumber();
		});
		$("[name='hotelName']:checkbox").click(function(){//checkbox点击事件
		 var length=$("[name='hotelName']:checkbox").length;
		 var ckLength=0;
		 $("[name='hotelName']:checkbox").each(function(){
			 if($(this).prop("checked")==true){
				ckLength=ckLength+1;
			}
		 });
		 if(length==ckLength){
			$(".checkAll").prop("checked",true);
		 }else{
			$(".checkAll").prop("checked",false); 
		 }
		  manage.selectNumber();
		});
		$("#manageReset").click(function(){
			manage.resetForm();
		});
		$("#manageReset2").click(function(){
			manage.resetForm2();
		});
	   $(".uploadVr").click(function(){
			   layer.open({
				type: 1,
				title: false,
				closeBtn: 0,
				shadeClose: !0,
				area: ["930px", "495px"],
				content:$(".uploader1")
			  });
			  $("#uploader1").pluploadQueue({
				runtimes: 'html5,flash,silverlight,html4',
				flash_swf_url : 'js/plupload/Moxie.swf',
				silverlight_xap_url : 'js/plupload/Moxie.xap',
				url: '/SceneManage/SceneUpload',
				chunk_size: '1mb',
				rename: true,
				dragdrop: true,
				multiple_queues: true,
				multipart: true,
	
				filters: {
					max_file_size: '1000mb',
					mime_types: [
						{ title : "Image files", extensions : "jpg,gif,png,jpeg"},
						{ title : "Zip files", extensions : "zip" }
					],
					prevent_duplicates: true
				},
			});
	   });
	   $(".uploadImg").click(function(){
			   layer.open({
				type: 1,
				title: false,
				closeBtn: 0,
				shadeClose: !0,
				area: ["930px", "495px"],
				content:$(".uploader2")
			  });
			  $("#uploader2").pluploadQueue({
				runtimes: 'html5,flash,silverlight,html4',
				flash_swf_url : 'js/plupload/Moxie.swf',
				silverlight_xap_url : 'js/plupload/Moxie.xap',
				url: '/SceneManage/SceneUpload',
				chunk_size: '1mb',
				rename: true,
				dragdrop: true,
				multiple_queues: true,
				multipart: true,
	
				filters: {
					max_file_size: '1000mb',
					mime_types: [
						{ title : "Image files", extensions : "jpg,gif,png,jpeg"},
						{ title : "Zip files", extensions : "zip" }
					],
					prevent_duplicates: true
				},
			});
	   });
	   $(".uploadVideo").click(function(){
			   layer.open({
				type: 1,
				title: false,
				closeBtn: 0,
				shadeClose: !0,
				area: ["930px", "495px"],
				content:$(".uploader3")
			  });
			  $("#uploader3").pluploadQueue({
				runtimes: 'html5,flash,silverlight,html4',
				flash_swf_url : 'js/plupload/Moxie.swf',
				silverlight_xap_url : 'js/plupload/Moxie.xap',
				url: '/SceneManage/SceneUpload',
				chunk_size: '1mb',
				rename: true,
				dragdrop: true,
				multiple_queues: true,
				multipart: true,
	
				filters: {
					max_file_size: '1000mb',
					mime_types: [
						{ title : "Image files", extensions : "jpg,gif,png,jpeg"},
						{ title : "Zip files", extensions : "zip" }
					],
					prevent_duplicates: true
				},
			});
	   });
	},
	checkAll:function(obj){//全选
		var flag=$(obj).prop("checked");
		$("[name='hotelName']:checkbox").each(function(){
			$(this).prop("checked", flag);
		});
	},
	selectNumber:function(){//当前选中多少项
		var count=0;
		$("[name='hotelName']:checkbox").each(function(){
			if($(this).prop("checked")==true){
				count=count+1;
			}
		});
		$(".selectNumber span").text(count);
	},
	resetForm:function(){//重置
	    $("#cityName,#hotelInfo").val('');	
		$("#hotelBox1,#hotelBox2,#hotelBox3").find("input").val('');
		$("#hotelBox1").find("em").text("酒店名称/酒店编码").removeClass("txtColor");
		$("#hotelBox2").find("em").text("全部/一星/二星/...").removeClass("txtColor");
		$("#hotelBox3").find("em").text("全部/在售/停售").removeClass("txtColor");  
	},
	resetForm2:function(){
		$("#wlBox1,#wlBox2,#wlBox3").find("input").val('');
		$("#wlBox1").find("em").text("房型名称/房型编码").removeClass("txtColor");
		$("#wlBox3").find("em").text("").removeClass("txtColor");
	},
	layerClose:function(){
	   layer.closeAll();	
	}
}
$(function(){
	manage.init();	
});

