var vrShow={
	init:function(){
		$(".vrShow").css({"height":($(window).height()-88)+'px'});
		$(".contentTxt > a").click(function(){/*播放视频*/
			 var html='<embed src="http://static.m-tu.com/upload/video/Mengtu.mp4" quality="high" width="100%" height="690" align="middle" allowscriptaccess="always" allowfullscreen="true" />';
		   	 layer.open({
				type:1,
				closeBtn:1,
				title:"萌兔旅行·芽庄海滩掠影",
				shadeClose: true,
				area: ["960px", "733px"],
				content:html
			  }); 
			   /*var flashvars = {
                f: "http://static.m-tu.com/upload/video/Mengtu.mp4",
                c: 0,
                p: 1
              };  
			  var params = { bgcolor: '#FFF', allowFullScreen: true, allowScriptAccess: 'always', wmode: 'transparent' };
			  CKobject.embedSWF('js/ckplayer/ckplayer.swf', 'videoDiv', 'ckplayer_a1', "960",  "690", flashvars, params);
			  layer.open({
				type: 1,
				title:"萌兔旅行·芽庄海滩掠影",
				closeBtn: 1,
				shadeClose: true,
				area: ["960px", "733px"],
				content: $("#videoDiv")
			 });*/
		});
		$(".contactUs i").click(function(){/*联系我们*/
		   	 layer.open({
				type:1,
				closeBtn:0,
				title:0,
				skin: 'layui-layer-nobg',
				shade: 0,
				area: ["418px", "286px"],
				content:$(".contactInfo")
			  });
		});
		$(".contactInfo h3 i").click(function(){
			layer.closeAll();
		});
	}
}
$(function(){
	vrShow.init();
});