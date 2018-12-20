var vrManage={
	init:function(){
		$(".qjBox ul li span").click(function(){
			layer.open({
				type: 1,
				title:"审核结果",
				closeBtn: 1,
				btn: ["确定"],
				shadeClose: true,
				area: ["400px", "auto"],
				content:"<p class='shTips'>我是审核结果</p>"
			 });
		});
	}
}
$(function(){
 	vrManage.init();
});