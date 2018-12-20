var orderDetail={
	init:function(){
		$("#beizhu").click(function(){
			 layer.open({
				type:1,
				closeBtn:1,
				title:"&nbsp;",
				btn: ["提交","取消"],
				shadeClose: true,
				area: ['640px', '350px'],
				content:$("#bzPop"),
				yes:function(){
					alert("提交");
					orderDetail.layerClose();
				},cancel: function(){  
                   console.log("取消");
				   orderDetail.layerClose();
                } 
			  }); 
		});
		$(".dtItem .right dl dd >a").click(function(){
			 layer.open({
				type: 1,
				title: false,
				closeBtn: 0,
				btn: ["提交","取消"],
				shadeClose: true,
				area: ['640px', '250px'],
				content:$("#updatePop"),
				yes:function(){
					console.log("提交");
				},cancel: function(){  
                   console.log("取消");
                } 
			  }); 
		});
	},
	layerClose:function(){
		layer.closeAll();
	}
}
$(function(){
	orderDetail.init();
});