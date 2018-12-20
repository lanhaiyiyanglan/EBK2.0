var turnover={
   init:function(){
	   $("#after").click(function(){
		   turnover.afterMonth();
	   });
	    $("#before").click(function(){
		   turnover.beforeMonth();
	   });
	   $("#thisMonth").click(function () {
		   turnover.thisMonth();
	   });
	   $(".dateGo > a").click(function () {
		  $(this).addClass("on").siblings().removeClass("on");
	   });
	   $(".chooseRank ul li").click(function () {
			$(this).addClass("on").siblings().removeClass("on");
			if($(this).index()==1&&$(this).attr("class")=="on"){
			  $(".chooseRank ul li:eq(0)").addClass("noRight");
			  $(".chooseRank ul li:eq(2)").addClass("noLeft");
			}else{
			  $(".chooseRank ul li:eq(0)").removeClass("noRight");
			  $(".chooseRank ul li:eq(2)").removeClass("noLeft");
			}
	   });
   },
   afterMonth:function(){//向后一个月 
	    var datestr = $(".dateGo input").val();
		var nyear = datestr.substr(0, 4);
		var nmonth = datestr.substr(5);
		var dd = new Date(nyear, nmonth, 1); 
		var y = dd.getFullYear();
		var m = dd.getMonth()+1;
		if (m < 10) { m = '0' + m; }
		$(".dateGo input").val(y + "-" + m);
   },
   beforeMonth:function(){//向前一个月
	    var y, m, dd;
		var datestr = $(".dateGo input").val();
		var nyear = datestr.substr(0, 4);
		var nmonth = datestr.substr(5);
		if (nmonth == "01") {
			nyear = Number(nyear) - 1;
			nmonth = 12;
			$(".dateGo input").val(nyear + "-" + nmonth);
		}
		else {
			nmonth = Number(nmonth) - 1;
			if (nmonth < 10) { nmonth = '0' + nmonth; }
			$(".dateGo input").val(nyear + "-" + nmonth); 
		}
   },
   thisMonth:function(){//本月
	    var date=new Date();
		var y=date.getFullYear(); 
		var m=date.getMonth()+1;
		if (m < 10) { m = '0' + m; }
		$(".dateGo input").val(y + "-" + m);
   }
}
$(function(){
  turnover.init();	
});
/*----------绘制表-------------*/
// 路径配置
require.config({
	paths: {
		echarts: 'http://echarts.baidu.com/build/dist'
	}
});
// 使用
require(
	[
		'echarts',
		'echarts/chart/bar',// 使用柱状图就加载bar模块，按需加载
		'echarts/chart/line',
		'echarts/chart/pie'
	],
	function (echarts) {
		// 基于准备好的dom，初始化echarts图表
		var zzTu = echarts.init(document.getElementById('zzTu')); 
		var yBing =echarts.init(document.getElementById('yBing')); 
		var zzTu2 = {//柱状图
			   title : {subtext: '               万(元)'},
			   tooltip : {trigger: 'item',formatter: "{b} : {c}万",},
			   calculable : true,
			   xAxis: [
				   {
					   type: "category",
					   data: ["第一周", "第二周", "第三周", "第四周"]
				   }
			   ],
			   yAxis: [
				   {
					   type: "value",
					   axisLabel : {
							formatter: '{value}'
						}
				   }
			   ],
			   calculable: true,
			   series: [
				   {
					   name: "营业额",
					   type: "line",
					   data: [8, 13, 11, 17],
				   },
				   {
						name:'营业额',
						type:'bar',
						itemStyle: {
							normal: {
								color:'#0974e8',
								label: {
									show: true,
									position: 'top',
									formatter: '{c}万'
								}
							}
						},
						barWidth : 30,
						data: [8, 13, 11, 17],
					}
			   ]
			};
		var yBing2 = {
			calculable : false,
			series : [
				{
					type:'pie',
					radius : [65,110],
					x: '60%',
					width: '40%',
					selectedMode: 'single',
					funnelAlign: 'left',
					itemStyle: {
						normal: {
							color: function(params) {
								var colorList = ['#0974e8','#ffb039','#2dce6a'];
								return colorList[params.dataIndex]
							},
							label: {
								show: true,
								position: 'top',
								formatter: '{b}\n{c}万\n({d}%)'
							}
						}
					},
					data:[
						{value:10, name:'下单'},
						{value:4, name:'取消'},
						{value:6, name:'拒单'}
					]
				}
			]
		};
		var ecConfig = require('echarts/config');
		yBing.on(ecConfig.EVENT.PIE_SELECTED, function (param) {
			var selected = param.selected;
			var serie;
			var str = '当前选择： ';
			for (var idx in selected) {
				serie = yBing2.series[idx];
				for (var i = 0, l = serie.data.length; i < l; i++) {
					if (selected[idx][i]) {
						str +=  serie.data[i].name;
					}
				}
			}
			document.getElementById('wrong-message').innerHTML = str;
		})
		// 为echarts对象加载数据 
		zzTu.setOption(zzTu2);
		yBing.setOption(yBing2); 
	}
);
