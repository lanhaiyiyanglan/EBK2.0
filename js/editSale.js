var editSale={
	init:function(){
		$('#physicalRoom').searchableSelect();//选择物理房型
		$('input:checkbox[name="ckFx"]').change(function(){//房型标签checkbox
		   var txt=$("#RoomName").val();
		   if($(this).prop("checked") == true){
			 txt=txt+$(this).parent().text()+",";
			 $("#RoomName").val(txt);
		   }else{
			   txt='';
			   $("#RoomName").val(txt);
			   $('input:checkbox[name="ckFx"]').each(function(){
				   if($(this).prop("checked") == true){
					   txt=txt+$(this).parent().text()+",";
					   $("#RoomName").val(txt);
				   }
			   });
		   }
	   });
	   $("#RoomName").keyup(function(){
		  if($(this).val()==''){
			 $('input:checkbox[name="ckFx"]').each(function(){
				   if($(this).prop("checked") == true){
					  $(this).prop("checked",false);
				   }
			 }); 
		  }
	   });
	   $(".tagItems li:gt(6)").hide();
	   $("#moreTag").click(function(){//显示更多房型标签
		   editSale.forMore($(this)); 
	   });
	   $("#addBtn").click(function(){//新增退订政策
		   $(".addKfee").append('<p>此后至入住前<input type="text" class="wdInput wd2">天&nbsp;&nbsp;之前,扣费<input type="text" class="wdInput wd3">%<i class="jianBtn"></i></p>')
	   });
	   $(".addKfee").on("click",".jianBtn",function(){//减去新增的退订政策
		  $(this).parent().remove();   
	   });
	   $("#resetBtn").click(function(){
		  editSale.resetForm(); 
	   });
	    $(".selectUl span").click(function(){//所有下拉框箭头的变化
	       $(this).parent().parent().parent().siblings().find(".selectUl ul").hide();
	       $(this).parent().parent().parent().siblings().find(".selectUl i").removeClass("upDown");
		});
	},
	forMore:function(obj){
	   var txt=obj.text();
	   if(txt=="更多"){
		 obj.text("收起").addClass("down");   
	   }else{
		 obj.text("更多").removeClass("down");   
	   }
	   $(".tagItems li:gt(6)").toggle();
	},
	resetForm:function(){
	   $(".searchable-select-holder").text('');	
	   $("#addForm > dl > dd .selectUl").find("input").val('');
	   $("#addForm > dl > dd .selectUl").find("em").text('请输入').removeClass("txtColor");
	}
}
$(function(){
  editSale.init();
});