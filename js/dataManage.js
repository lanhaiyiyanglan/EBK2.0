var dataManage={
   init:function(){
	    var maxWidth = 340;
		$(".serviceZb .zb .line").each(function() {
			var dataLength = $(this).find("i").attr("data-leng");
			$(this).find("i").css({ "width": (maxWidth / 100) * dataLength + "px" });
		});  
		$(".serviceZb .zb .line .smallLine").each(function() {
			var dataLength = $(this).attr("data-leng");
			console.log(dataLength);
			$(this).css({ "left": (maxWidth / 100) * dataLength + "px" });
		});  
   }
}
$(function(){
   dataManage.init();	
});