var financial={
	init:function(){
		$("#express").searchableSelect();//快递公司下拉加搜索
		$("input[name='fapiaoStyle']").click(function(){
			 if($("input[name='fapiaoStyle']:checked").val()=="1"){
				 $(".byDian").show();
				 $(".byZhi").hide();
			 }else{
				 $(".byDian").hide();
				 $(".byZhi").show();
			 }
		});
		 $(".fapiao").click(function(){//填写发票
			 financial.fpOpen();
		 });
		 $("#add").click(function(){//增加发票信息
			 financial.add();
		 });
		 $(".fpaBox").on("click",".jian",function(){//减去新增的发票信息
		  $(this).parent().remove();   
		  financial.totalPrice();
	     });
		$(".fpaBox").on("keyup",".price",function(){//统计发票总价
		    var temp=$(this).val().replace(/[^\d]/g,'');
    		$(this).val(temp);
		    financial.totalPrice();
	    });
		$(".input-fileup").on("change","input[type='file']",function(){//显示上传文件的文件名
                var filePath=$(this).val();
				var arr=filePath.split('\\');
				var fileName=arr[arr.length-1];
				$(".showFileName1").html(fileName);
        })
		$(".fpaBox").on("click",".selectUl",function(){//减去新增的发票信息
		    common.init();
	     });
		$("#resetZd").click(function(){
			 financial.resetForm($(this));
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
	  obj.parent().parent().find(".selectUl#zdIput1 em").text("周结/月结").removeClass("txtColor");
	  obj.parent().parent().find(".selectUl#zdIput2 em").text("全部/待结算/已结算").removeClass("txtColor");
	},
	fpOpen:function(){
		layer.open({
			type: 1,
			title:"提交发票信息",
			closeBtn: 1,
			btn: ["提交","取消"],
			shadeClose: true,
			area: ["auto", "600px"],
			content:$(".fapiaoBox")
		 });
	},
	add:function(){
		     var html='';
			 html+='<div class="fpItem">';
                 html+='<input type="text" placeholder="输入发票代码">';       
                 html+='<input type="text" placeholder="输入发票号码">'; 
                 html+='<div class="selectUl">';
                         html+='<span><em>发票内容</em><i></i><input type="hidden"></span>';
                         html+='<ul>';
                            html+='<li data="0">全部</li>';
                            html+='<li data="1">待结算</li>';
                            html+='<li data="2">已结算</li>';
                         html+='</ul>';
                  html+='</div>';
                  html+='<input type="text" placeholder="输入发票金额" class="price"><span class="jian">—删除</span>';      
              html+='</div>';
			 $(".fpaBox").append(html);
	},
	totalPrice:function(){
		    var total=0;
		    $(".fpaBox .price").each(function() {
				console.log($(this).val());
                total+=parseFloat($(this).val());
            });
			$(".countM span").html(total);
	}
}
$(function(){
  	financial.init();
});