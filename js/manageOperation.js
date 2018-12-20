var manageOperation={
	init:function(){
		$(".resetBtn").click(function(){
			manageOperation.resetForm($(this));
		});
		$("#setSpecail").click(function() {
            manageOperation.setSpecialDate()
        });
		$('#handlePeople').searchableSelect();//选择处理人
	},
	resetForm:function(obj){
	  obj.parent().parent().find(".selectUl input").val('');
	  obj.parent().parent().find(".selectUl em").text("全部").removeClass("txtColor");
	},
	setSpecialDate:function(){
		layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			shadeClose: !0,
			btn: ["提交","取消"],
			area: ["600px", "300px"],
			content:$("#setSpecial")
      });
	},
	layerClose:function(){
	  layer.closeAll();	
	}
}
$(function(){
	manageOperation.init();
});