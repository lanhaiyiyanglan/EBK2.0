var vrSearch={
	init:function(){
	   $("#operationVr input[type='reset']").click(function(){
		  $("#vrBox1").find("input").val('');
		  $("#vrBox1").find("em").text("全部/审核通过/审核未通过").removeClass("txtColor"); 
	   });	
	   $(".preview").click(function(){
		   var src=$(this).parent().parent().find("img").attr("src");
		   var html='';
		   html+='<img src='+src+'>';
		   layer.open({
			type: 1,
			title: false,
			closeBtn: 1,
			shadeClose: true,
			area: ["90%", "80%"],
			content:html
		  });
	   });
	   $("#uploadVr").click(function(){
			   layer.open({
				type: 1,
				title: false,
				closeBtn: 0,
				shadeClose: !0,
				btn: ["提交","取消"],
				area: ["930px", "630px"],
				content:$("#popVr")
			  });
			  $("#uploader").pluploadQueue({
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
	layerClose:function(){
	   layer.closeAll();	
	},
	resetChoose:function(obj){
		$(obj).parent().parent().find(".selectUl input").val('');
		$(obj).parent().parent().find(".selectUl em").text("酒店名称/酒店编码").removeClass("txtColor");
	}
}
$(function(){
	vrSearch.init();
});