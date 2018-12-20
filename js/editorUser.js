var editorUser={
   init:function(){  
		$("#quanxian").click(function(){
		   editorUser.quanxian();	
		});
		$("#chooseHotel").click(function(){
		   editorUser.openHotelList();	
		});
		$("#basicInfo .bottomBtn input[type='reset']").click(function(){
		   $("#superiorBox,#opendId").find("input").val('');
		   $("#superiorBox,#opendId").find("em").text("").removeClass("txtColor");	
		});
		$('#superiorBox,#opendId').searchableSelect();//选择上级
   },
   quanxian:function(){
	  var setting = {
			check: {enable: true},
			data: {
				simpleData: {enable: true}
			},
			view: {
				showIcon: false
			}
		};
		var zNodes =[
			{ id:"father01", pId:0, name:"一级菜单（1）", open:true},
			{ id:"child01", pId:"father01", name:"二级菜单（1）", open:true},
			{ id:"grandson01", pId:"child01", name:"功能按钮功能按钮功能按钮"},
			{ id:"grandson02", pId:"child01", name:"功能按钮功能按钮功能按钮"},
			{ id:"child02", pId:"father01", name:"二级菜单（2）", open:true},
			{ id:"grandson03", pId:"child02", name:"功能按钮功能按钮功能按钮"},
			{ id:"grandson04", pId:"child02", name:"功能按钮功能按钮功能按钮"},
			{ id:"father02", pId:0, name:"一级菜单（2）",open:true},
			{ id:"child03", pId:"father02", name:"二级菜单（1）",open:true},
			{ id:"grandson05", pId:"child03", name:"功能按钮功能按钮功能按钮1"},
			{ id:"grandson06", pId:"child03", name:"功能按钮功能按钮功能按钮"},
			{ id:"child04", pId:"father02", name:"二级菜单（2）", open:true},
			{ id:"grandson07", pId:"child04", name:"功能按钮功能按钮功能按钮1"},
			{ id:"grandson08", pId:"child04", name:"功能按钮功能按钮功能按钮"}
		];  
	  layer.open({
        type: 1,
        title: false,
		closeBtn: 0,
        btn: ["提交","取消"],
        shadeClose: true,
        area: ['540px', '675px'],
        content:$(".xqWrapper")
      }); 
	  $.fn.zTree.init($("#treeDemo"), setting, zNodes);
	  $("#quanxuan,#fanxuan").click(function(){
		 var flag='';
		 if($(this).attr("id")=="quanxuan"){
			flag=true; 
		 }else{
			flag=false;
		 }
		 var treeObj = $.fn.zTree.getZTreeObj("treeDemo");
         treeObj.checkAllNodes(flag);
	  });
   },
   layerClose:function(){//关闭弹出层
		layer.closeAll();
   },
   openHotelList:function(){
	  layer.open({
            type: 1,
            title: false,
            closeBtn: 0,
            shadeClose:false,
			btn: ["提交","取消"],
            area: ["930px", "630px"],
            content: $("#layerContent")
     });  
	 $("#checkAll").click(function(){
		editorUser.checkAll(this);
                editorUser.selectNumber();
	 }); 
	 $("[name='cityName']:checkbox").click(function(){//checkbox点击事件
			 var length=$("[name='cityName']:checkbox").length;
			 var ckLength=0;
			 $("[name='cityName']:checkbox").each(function(){
				 if($(this).prop("checked")==true){
					ckLength=ckLength+1;
				}
			 });
			 if(length==ckLength){
				$(".checkAll").prop("checked",true);
			 }else{
				$(".checkAll").prop("checked",false); 
			 }
			  editorUser.selectNumber();
	  });
   },
   checkAll:function(obj){//全选
		var flag=$(obj).prop("checked");
		$("[name='cityName']:checkbox").each(function(){
			$(this).prop("checked", flag);
		});
   },
   selectNumber:function(){//当前选中多少项
		var count=0;
		$("[name='cityName']:checkbox").each(function(){
			if($(this).prop("checked")==true){
				count=count+1;
			}
		});
		$(".selectNumber span").text(count);
	},
	resetChoose:function(obj){
	  $(obj).parent().parent().find(".selectUl input").val('');
	  $(obj).parent().parent().find(".selectUl em").text("酒店名称/酒店编码").removeClass("txtColor");	
	}
}
$(function(){
  editorUser.init();
});