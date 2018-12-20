var addCaution={
	init:function(){
		$("#cautionTimeAll,#cautionWayAll").click(function(){
			addCaution.checkAll(this);
		});
		$("[name='cautionTime']:checkbox,[name='cautionWay']:checkbox").click(function(){//checkbox点击事件
		     var name=$(this).attr("name");
			 var length=$("[name="+name+"]:checkbox").length;
			 var ckLength=0;
			 $("[name="+name+"]:checkbox").each(function(){
				 if($(this).prop("checked")==true){
					ckLength=ckLength+1;
				}
			 });
			 if(length==ckLength){
				$("#"+name+"All").prop("checked",true);
			 }else{
				$("#"+name+"All").prop("checked",false); 
			 }
		});
		$("#resetCaution").click(function(){
			addCaution.resetCaution(this);
		});
	},
	checkAll:function(obj){//全选
		var flag=$(obj).prop("checked");
		var name='';
		if($(obj).attr("id")=="cautionTimeAll"){
			name="cautionTime";
		}else{
			name="cautionWay";
		}
		$("[name="+name+"]:checkbox").each(function(){
			$(this).prop("checked", flag);
		});
	},
	resetCaution:function(obj){
	  $(obj).parent().parent().parent().find(".selectUl input").val('');
	  $(obj).parent().parent().parent().find(".selectUl em").text("").removeClass("txtColor");	
	}
}
$(function(){
  addCaution.init();
});