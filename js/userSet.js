var userSet={
	init:function(){
		$(".checkAll").click(function(){
			userSet.checkAll($(this));
			userSet.selectNumber();
		});
		$("[name='loginName']:checkbox").click(function(){//checkbox点击事件
			 var length=$("[name='loginName']:checkbox").length;
			 var ckLength=0;
			 $("[name='loginName']:checkbox").each(function(){
				 if($(this).prop("checked")==true){
					ckLength=ckLength+1;
				}
			 });
			 if(length==ckLength){
				$(".checkAll").prop("checked",true);
			 }else{
				$(".checkAll").prop("checked",false); 
			 }
			  userSet.selectNumber();
		});
		$("#userReset").click(function(){
			userSet.resetForm();
		});
	},
	checkAll:function(obj){//全选
		var flag=$(obj).prop("checked");
		$("[name='loginName']:checkbox").each(function(){
			$(this).prop("checked", flag);
		});
	},
	selectNumber:function(){//当前选中多少项
		var count=0;
		$("[name='loginName']:checkbox").each(function(){
			if($(this).prop("checked")==true){
				count=count+1;
			}
		});
		$(".selectNumber span").text(count);
	},
	resetForm:function(){
	 $("#userSetBox1").find("input").val("");
	 $("#userSetBox1").find("em").text("全部/禁用/启用").removeClass("txtColor");	
	}
}
$(function(){
  userSet.init();
});