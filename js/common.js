/*用于所有的有select样式的下拉框*/
var common={
   init:function(){
	    $(".selectUl span").click(function(){//所有下拉框箭头的变化
	       common.updown($(this));
		});
		$(".selectUl ul li").click(function(){//所有下拉框选中填充文字
		   common.textChange($(this));
		});
		/*侧边栏功能项*/
		$(".helpBar").css({right : ($(window).width() - 1200)/2-270});
		$("#goTop").click(function(){
		  $('body, html').animate({ scrollTop: 0 }, 1000); 
		});
		$("#zXun").click(function(){
		  var aa=parseInt(($(window).height()-$(".kfBox").height())/2);
		  $(".tipKuang").height($(window.document).height()).show();
		  $(".tipKuang").width($(window.document).width());
		  $(".kfBox").css("top",aa);
		});
		$(".kfInfo i,.closeLine").click(function(){
		   if($(this).attr("class")=="closeLine"){
			  $(this).parent().parent().hide(); 
		   }else{
			  $(this).parent().parent().parent().hide(); 
		   }
		});
		$("#feedBack").click(function(){
		   layer.open({
			type: 1,
			title: "&nbsp;",
			closeBtn: 1,
			shadeClose: true,
			area: ["610px", "430px"],
			btn: ["提交反馈"],
			content:$(".feedKuang")
		  });
		});
   },
   StrtoDate:function(n){
		if (!/^\d{4}-\d{2}-\d{2}/.test(n))
            return new Date;
        var t = parseInt(n.substr(0, 4), 10)
          , i = parseInt(n.substr(5, 2), 10) - 1
          , r = parseInt(n.substr(8, 2), 10);
        return new Date(t,i,r)
	},
	DateFormat:function(n, t) {
        var i = t;
        return i = i.replace(/yyyy|YYYY/, n.getFullYear()),
        i = i.replace(/yy|YY/, n.getYear() % 100 > 9 ? (n.getYear() % 100).toString() : "0" + n.getYear() % 100),
        i = i.replace(/MM/, n.getMonth() > 8 ? (n.getMonth() + 1).toString() : "0" + (n.getMonth() + 1)),
        i = i.replace(/M/g, n.getMonth() + 1),
        i = i.replace(/dd|DD/, n.getDate() > 9 ? n.getDate().toString() : "0" + n.getDate()),
        i.replace(/d|D/g, n.getDate())
    },
   updown:function(obj){
	   $(obj).parent().find("ul").toggle();
	   $(obj).find("i").toggleClass("upDown");	
   },
   textChange:function(obj){
	   var text=$(obj).parent().parent().find("span em").text();
	   $(obj).parent().parent().find("span em").text($(obj).text());
	   $(obj).parent().parent().find("span em").addClass("txtColor");
	   $(obj).parent().parent().find("input[type='hidden']").val($(obj).attr("data"));
	   $(obj).parent().parent().find("i").removeClass("upDown");
	   $(obj).parent().hide();	
   }
}
$(function(){
	common.init();
	$(document).click(function (e) {//点击其他区域下拉框和搜索框隐藏
		var e=$(e.target);
		if(e.parent().attr("class")!="selectUl"&&e.parent().parent().attr("class")!="selectUl"&&e.attr("id")!="hotelQueryValue"){
			$(".selectUl").find("ul").hide();
			$(".selectUl span i").removeClass("upDown");
			$("#hotelQueryValue").parent().find(".hotelSearch").hide();
		}
   })
});
