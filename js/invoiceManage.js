var invoiceManage={
	init:function(){
		$("#resetFp").click(function(){
			 invoiceManage.resetForm($(this));
		});
		$(".boHui").click(function(){
			layer.open({
				type: 1,
				title:"驳回提示",
				closeBtn: 1,
				btn: ["确定"],
				shadeClose: true,
				area: ["400px", "auto"],
				content:"<p class='bhTips'>我是驳回提示</p>"
			 });
		});
	},
	resetForm:function(obj){
		obj.parent().parent().find(".selectUl input").val('');
	    obj.parent().parent().find(".selectUl em").text("待审核/审核成功/审核驳回").removeClass("txtColor");
	}
}
$(function(){
  invoiceManage.init();	
});