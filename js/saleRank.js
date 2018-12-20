var saleRank={
	init:function(){
		$(".rightOperation input[type='reset']").click(function(){
		   $(this).parent().parent().parent().find(".selectUl input").val('');
	       $(this).parent().parent().parent().find(".selectUl em").text("全部/入住/离店/下单日期").removeClass("txtColor");	
		});
	}
}
$(function(){
	saleRank.init();
});