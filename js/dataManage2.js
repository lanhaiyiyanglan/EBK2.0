var dataManage2={
   init:function(){
   	  $("#dataManageTable tr th>span em").text("↑");
   	  $("#dataManageTable tr th>span.down em").text("↓");
	  $("#dataManageTable tr th>span").click(function(){//表格根据选择的筛选项排序
	  	 $(this).toggleClass("down");
	  	 if($(this).attr("class")=="down"){
	  	 	$(this).find("em").text("↓");
	  	 	$(this).parent().siblings().find("em").text("↑");
	  	 }else{
	  	 	$(this).find("em").text("↑");
	  	 	$(this).parent().siblings().find("em").text("↓");
	  	 }
	  });
	  $(".dataSearch input[type='reset']").click(function(){
	  	dataManage2.resetChoose(this);
	  });
   },
   resetChoose:function(obj){
	  $(obj).parent().parent().find(".selectUl input").val('');
	  $(obj).parent().parent().find(".selectUl em").text("酒店名称/酒店编码").removeClass("txtColor");	
   }
}
$(function(){
   dataManage2.init();	
});

