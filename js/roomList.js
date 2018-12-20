var roomList={
	init:function(){
		$("#manageReset3").click(function(){
			roomList.resetForm3();
		});
		$("#btnNextTime").click(function(){
		   roomList.nextTime();
	    });
		$("#btnPreviousTime").click(function(){
		   roomList.previousTime();
	    });
		roomList.wdatePick();
		$("p.shenghe").click(function(){
			roomList.audit($(this));
		});
	},
	resetForm3:function(){
		$("#fxBox1,#fxBox2,#fxBox3").find("input").val('');
		$("#fxBox1").find("em").text("物理房型/售卖房型").removeClass("txtColor");
		$("#fxBox3").find("em").text("全部/上线/下线").removeClass("txtColor");
	},
	wdatePick:function(){
		roomList.goTime();
	},
	previousTime:function() {//点击上一周
        var currentDate =common.StrtoDate($("#txtCurrentDate").val());
        var diff = -7;
        var newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + diff);
        if (newDate <= common.StrtoDate($("#txtCurrentDate").data("mindate"))) {//比最小时间还小则用最小时间
            currentDate = common.StrtoDate($("#txtCurrentDate").data("mindate"));
            $("#btnPreviousTime").addClass("disableGo");
            $("#btnPreviousTime").attr("disabled", "true");
        } else {
            currentDate = newDate;
        }
        $("#btnNextTime").removeClass("disableGo");
        $("#btnNextTime").removeAttr("disabled");
        $("#txtCurrentDate").val(common.DateFormat(currentDate, "yyyy-MM-dd"));
    },
	nextTime:function() {//点击下一周
       var currentDate =common.StrtoDate($("#txtCurrentDate").val());
        var diff = 7;
        var newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + diff);
        if (newDate >= common.StrtoDate($("#txtCurrentDate").data("maxdate"))) {//比最大时间还大则用最大时间
            currentDate = common.StrtoDate($("#txtCurrentDate").data("maxdate"));
            $("#btnNextTime").addClass("disableGo");
            $("#btnNextTime").attr("disabled", "true");
        } else {
            currentDate = newDate;
        }
        $("#btnPreviousTime").removeClass("disableGo");
        $("#btnPreviousTime").removeAttr("disabled");
        $("#txtCurrentDate").val(common.DateFormat(currentDate, "yyyy-MM-dd"));
    },
	goTime:function() {//初始化设置上一周/下一周是否可点击
        var currentDate =common.StrtoDate($("#txtCurrentDate").val());
        var newDate = currentDate;
        $("#btnPreviousTime").removeClass("disableGo");
        $("#btnPreviousTime").removeAttr("disabled");
        $("#btnNextTime").removeClass("disableGo");
        $("#btnNextTime").removeAttr("disabled");
        if (newDate <= common.StrtoDate($("#txtCurrentDate").data("mindate"))) {
            currentDate = common.StrtoDate($("#txtCurrentDate").data("mindate"))
            $("#btnPreviousTime").addClass("disableGo");
            $("#btnPreviousTime").attr("disabled", "true");
        }
        if (newDate >= common.StrtoDate($("#txtCurrentDate").data("maxdate"))) {
            currentDate = common.StrtoDate($("#txtCurrentDate").data("maxdate"));
            $("#btnNextTime").addClass("disableGo");
            $("#btnNextTime").attr("disabled", "true");
        }
    },
	audit:function(obj){
	  var status=obj.text();
	  var houseType=obj.parent().find(".houseType").text();
	  var html='';
	  html+='<div class="shBox"><i onclick="roomList.layerClose();"></i>';
          html+='<h3><i></i>酒店中文名（酒店英文名）</h3>';
		  html+='<div class="shengHeTxt">';
			html+='<p>房型名称：'+houseType+'<span>面积：50平方米</span></p>';
			html+='<p>房型描述：描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容</p>';
			if(status=="审核通过"){
				html+='<i class="status3"></i>';
			}else if(status=="审核未通过"){
				html+='<i class="status2"></i>';
			}else{
				html+='<i class="status1"></i>';
			}
		  html+='</div>';
		  html+='<ul>';
			 html+='<li class="on">房型VR场景</li>';
			 html+='<li>房型短视频</li>';
			 html+='<li>房型图片</li>';
		  html+='</ul>';
		  html+='<div class="shTable">';
		    html+='<table>';
			 html+='<tr>';
			   html+='<th>场景名称</th>';
			   html+='<th>审核状态</th>';
			   html+='<th>审核时间</th>';
			   html+='<th>未通过原因</th>';
			   html+='<th>操作</th>';
			 html+='</tr>';
			 html+='<tr>';
			   html+='<td>普吉盛泰乐<br>Centara Blue Marine</td>';
			   html+='<td class="red">审核未通过</td>';
			   html+='<td>2018-03-10 00:00:00</td>';
			   html+='<td>看不清</td>';
			   html+='<td><a href="#">预览</a></td>';
			 html+='</tr>';
			 html+='<tr>';
			   html+='<td>普吉盛泰乐<br>Centara Blue Marine</td>';
			   html+='<td class="red">审核未通过</td>';
			   html+='<td>2018-03-10 00:00:00</td>';
			   html+='<td>看不清</td>';
			   html+='<td><a href="#">预览</a></td>';
			 html+='</tr>';
			 html+='<tr>';
			   html+='<td>普吉盛泰乐<br>Centara Blue Marine</td>';
			   html+='<td class="green">审核通过</td>';
			   html+='<td>2018-03-10 00:00:00</td>';
			   html+='<td>看不清</td>';
			   html+='<td><a href="#">预览</a></td>';
			 html+='</tr>';
			 html+='<tr>';
			   html+='<td>普吉盛泰乐<br>Centara Blue Marine</td>';
			   html+='<td>待审核</td>';
			   html+='<td>2018-03-10 00:00:00</td>';
			   html+='<td>看不清</td>';
			   html+='<td><a href="#">预览</a></td>';
			 html+='</tr>';
			 html+='<tr>';
			   html+='<td>普吉盛泰乐<br>Centara Blue Marine</td>';
			   html+='<td class="red">审核未通过</td>';
			   html+='<td>2018-03-10 00:00:00</td>';
			   html+='<td>看不清</td>';
			   html+='<td><a href="#">预览</a></td>';
			 html+='</tr>';
			 html+='</table>';
		  html+='</div>';
		  html+='<div class="shTable" style="display:none;">';
			   html+='<table>我是第二个table</table>';
			html+='</div>';
			html+='<div class="shTable" style="display:none;">';
			   html+='<table>我是第三个table</table>';
			html+='</div>';
	  html+='</div>';
	  layer.open({
        type: 1,
        title: false,
        closeBtn: 0,
        shadeClose: true,
        area: ['925px', '600px'],
        content:html
      });
	  $(".shBox ul li").on('click',function(){
		  $(this).addClass("on").siblings().removeClass("on");
		  var index=$(this).index();
		  $(".shBox .shTable").hide();
		  $(".shBox .shTable").eq(index).show();  
	  });
	},
	layerClose:function(){//关闭弹出层
		layer.closeAll();
	}
}
$(function(){
	roomList.init();
	laypage({//分页插件调用
		cont: 'usuallyHotelPage',
		pages: 10,
		first: false,
		last: false,
		groups: 3,
		prev: '<', 
		next: '>' ,
		skin: 'molv',
		jump: function(obj){
			//document.getElementById('usuallyList').innerHTML = thisDate(obj.curr);
		}
   }) 
});