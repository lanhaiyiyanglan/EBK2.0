var message={
	init:function(){
		$(".msLeft ul li,.msUl ul li").click(function(){
			$(this).addClass("on").siblings().removeClass("on");
		});
	}
}
$(function(){
	message.init();
})
