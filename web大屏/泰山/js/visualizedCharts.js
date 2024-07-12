 //定义图表对象
 var myChart1 = null;
 var myChart2 = null;
 var myChart4 = null;
 var myChart5 = null;
 var myChart6 = null;
 var myChart7 = null;

 $(function(){
	 industryBar();
	 changeChart();
	 skillAcquisitionChart();
	 playCounts();
	 roseChart();
	 moveMapChart();
	 clocknum(82500,'DailyrequiredPeople'); //执行
	 clocknum(52500,'MomentrequiredPeople'); 
	/* $(".digits").numScroll({
			time:5000
	 });*/
	  clocknum(82500,'DailyrequiredPeople');
 });
 /**
 *	上方山人类活动因子变化情况（人口密度）
 */
 function industryBar(){
	var xAxisData = ['2000年', '2001年', '2002年' , '2003年','2004年', '2005年', '2006年', '2007年', '2008年', '2009年', '2010年', '2011年', '2012年', '2013年', '2014年', '2015年','2016年','2017年','2018年', '2019年', '2020年', '2021年'];
	var yAxisData = [6.9834836,5.0009552,8.0668785,7.1280986,8.1072778,10.7097082,7.7675603,8.2098059,8.3857745,9.1043286,9.7142674,8.4136687,8.0125384,8.0156609,7.3948421,9.071064,9.2350729,10.3018411,10.6447563,11.3440365,12.4414466,12.4414466	];
	
	myChart1 =  echarts.init(document.getElementById('industryBar'));	// 基于准备好的dom，初始化echarts实例
	var option = {
		title: {
			text: '上方山人类活动因子变化情况（人口密度）',
			left: 'center',
			textStyle:{color:'#fff'},
			top:'4%',
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: '2%',
			right: '4%',
			top:'20%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: [
			{
				type: 'category',
				data: xAxisData,
				axisTick: {
					alignWithLabel: true
				},
				axisLabel: {		//x轴文字颜色
					color: '#fff'
				},
				axisLine: {		    //x轴线的颜色
					lineStyle:{
						 color: ['#fff'],
						 width: 1,
						 type: 'solid',
						 opacity: 1
					}
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '人/平方米',
				axisLabel: {	
					
					color: '#fff'   //y轴文字颜色
					
				},
				axisLine: {		    //y轴线的颜色
					lineStyle:{
						 color: ['#fff'],
						 width: 1,
						 type: 'solid',
						 opacity: 1
					}
				},
				splitLine: {        //网格样式
					show: true,
					lineStyle:{
						 color: 'rgba(255,255,255,0.1)',
						 width: 1,
						 type: 'dashed'
					}
				}
			}
		],
		series: [
			{
				name: 'Pop',
				type: 'bar',
				barWidth: '50%',
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: '#248ff7'
						}, {
							offset: 1,
							color: '#6851f1'
						}]),
					barBorderRadius: 11,
				}
			  },
				data:yAxisData 
			}
		]
	};
	myChart1.setOption(option,true);	    // 使用刚指定的配置项和数据显示图表。
   var app = {
	currentIndex: -1,
	
  };
 setInterval(function () {
	var dataLen = option.series[0].data.length;

	// 取消之前高亮的图形
	myChart1.dispatchAction({
	  type: 'downplay',
	  seriesIndex: 0,
	  dataIndex: app.currentIndex
	});
	app.currentIndex = (app.currentIndex + 1) % dataLen;
	//console.log(app.currentIndex);
	// 高亮当前图形
	myChart1.dispatchAction({
	  type: 'highlight',
	  seriesIndex: 0,
	  dataIndex: app.currentIndex,
	});
	// 显示 tooltip
	myChart1.dispatchAction({
	  type: 'showTip',
	  seriesIndex: 0,
	  dataIndex: app.currentIndex
	});
  }, 1000);
  	$(document).ready(function(){
	　　myChart1.resize();  
	})
	window.addEventListener("resize", function () {
	　　myChart1.resize();  
	});
}
/*
上方山地形地貌因子变化情况
*/
function changeChart() {
    myChart2 = echarts.init(document.getElementById('changeLine'));
    
    const colors = ['#2db7f5', '#ff6600'];
    var option = {
      color: colors,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      
      title: {
        top: '90%',
        left: 'center',
        text: '上方山人类活动因子变化（碳排放）',
        textStyle: {
          align: 'center',
          color: '#fff'
        }
      },
      grid: {
        left: '130',
        right: '100',
        bottom: '1'
      },
      grid: {
        right: '20%'
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
	  legend: {
        data: ['Carbon'],
        textStyle: {
          color: '#fff' // 设置图例文字的颜色为白色
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          data: ['2000', '2001', '2002','2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012','2013','2014','2015','2016','2017','2018','2019','2020','2021'],
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff' // 月份轴线的颜色
            }
          },
          axisLabel: {
            color: '#fff' // 月份文字的颜色
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: '单位：万人',
          position: 'left',
          alignTicks: true,
          axisLine: {
            show: true,
            lineStyle: {
              color: colors[1]
            }
          }
        }
      ],
      series: [
        {
          name: 'Carbon',
          smooth: true,
          type: 'line',
          yAxisIndex: 0, // 因为只有一个y轴，所以不需要yAxisIndex
          data: [0,0,0,0,11.54572201,0,0,0,0,0,11.06134415,12.25550079,12.68382931,12.98182964,12.93616104,12.80785751,12.72442818,12.84000778,13.10631371,13.51275158,14.41979408,15.22060108		  ]
        }
      ]
    };
    myChart2.setOption(option, true); // 使用刚指定的配置项和数据显示图表。
    $(document).ready(function() {
        myChart2.resize();
    });
    window.addEventListener("resize", function() {
        myChart2.resize();
    });
}

// 调用函数以生成图表
changeChart();


 
 /**
 *2021年各因子对生态敏感性的影响
 */
 function  skillAcquisitionChart(){
	var cost = [69, 78, 45.38,46.17, 8.45,3.56,9.55]//本期比上期（大于1按1处理）
	var totalCost = [ 100,100, 100, 100,100,100,100]//比例综合
	var visits = [ 3250.8,579.2, 1475.3, 1501.0,274.6,394.5,355.42]//本期占总的百分比*100
	var grade = ['DEM','Slope','Aspect','NDVI','FVC' ,'Pop','Carbon']
	var myColor = ['#21BF57','#56D0E3',  '#1089E7', '#F8B448','#F57474', ];
	var data = {
		grade: grade,
		cost: cost,
		totalCost: totalCost,
		//visits: visits
	};
	var option = {
		title: {
			top: '4%',
			left: 'center',
			text: '2021年各因子对生态敏感性的影响',
			textStyle: {
				align: 'center',
				color:'#fff'
			}
		},
		grid: {
			left: '200',
			right: '100',
			bottom: '20'
		},
		xAxis: {
			show: false,
		},
		yAxis: {
			type: 'category',
			axisLabel: {
				margin:30,
				show: true,
				color: '#4DCEF8',
				fontSize: 14
			},
			axisTick: {
				show: false,
			},
			axisLine: {
				show: false,
			},
			data: data.grade
		},
		series: [{//外层边框
			type: 'bar',
			barGap: '-65%',
			label: {
				normal: {
					show: true,
					position: 'right',
					color: '#fff',
					fontSize: 14,
					//formatter: 
					//function(param) {
					//	return data.visits[param.dataIndex];
					//},
				}
			},
			barWidth: '30%',
			itemStyle: {
				normal: {
					borderColor: '#4DCEF8',
					borderWidth: 2,
					barBorderRadius: 15,
					color: 'rgba(102, 102, 102,0)'
				},
			},
			z: 1,
			data: data.totalCost,
			// data: da
		}, {//柱形图占比
			type: 'bar',
			barGap: '-85%',
			barWidth: '30%',
			itemStyle: {
				 normal: {
					barBorderRadius: 16,
					color: function(params) {
						var num = myColor.length;
						return myColor[params.dataIndex % num]
					},
				}
			},
			max: 1,
			label: {
				normal: {
					show: true,
					position: 'inside',
					formatter: '{c}%'
				}
			},
			labelLine: {
				show: true,
			},
			z: 2,
			data: data.cost,
		}]
	}
	myChart4 = echarts.init(document.getElementById('skillAcquisitionBar'));
	myChart4.setOption(option,true);
	$(document).ready(function(){
	　　myChart4.resize();  
	})
	window.addEventListener("resize", function () {
	　　myChart4.resize();  
	});
}
/**
*上方山生态资源因子变化情况									
*/
function playCounts(){
	let bgColor = "#fff";
	let color = [
		"#0090FF",
		"#36CE9E",
		"#FFC005",
		"#FF515A",
		"#8B5CFF",
		"#00CA69"
	];
	let echartData = [{
			name: "2000",
			value1: 0.8405,
			value2: 0.9064
		},
		{
			name: "2001",
			value1: 0.8411,
			value2: 0.9583
		},
		{
			name: "2002",
			value1: 0.8199,
			value2: 1},
		

		{
			name: "2003",
			value1: 0.8462,
			value2: 0.8906
		},
		{
			name: "2004",
			value1: 0.833,
			value2: 0.9051
		},
		{
			name: "2005",
			value1: 0.7931,
			value2: 0.8768
		},
		{
			name: "2006",
			value1: 0.8263,
			value2: 0.9532
		},
		{
			name: "2007",
			value1: 0.8835,
			value2: 0.9522
		},
		{
			name: "2008",
			value1: 0.8125,
			value2: 0.9941
		},
		{
			name: "2009",
			value1: 0.8266,
			value2: 0.9544
		}, 
		{
			name: "2010",
			value1: 0.8053,
			value2: 0.9209
		},
		{
			name: "2011",
			value1: 0.8588,
			value2: 0.9881
		},
		{
			name: "2012",
			value1: 0.8751,
			value2: 1
		},
		{
			name: "2013",
			value1: 0.8797,
			value2: 1
		},
		{
			name: "2014",
			value1: 0.8536,
			value2: 0.9553
		},
		{
			name: "2015",
			value1: 0.8327,
			value2: 0.9531
		},
		{
			name: "2016",
			value1: 0.8227,
			value2: 1
		},
		{
			name: "2017",
			value1: 0.8573,
			value2: 1
		},
		{
			name: "2018",
			value1: 0.8432,
			value2: 0.9817
		},
		{
			name: "2019",
			value1: 0.8465,
			value2: 0.9275
		},
		{
			name: "2020",
			value1: 0.8341,
			value2: 0.9944
		},
		{
			name: "2021",
			value1: 0.8416,
			value2: 0.9701
		},
	];

	let xAxisData = echartData.map(v => v.name);
	//  ["1", "2", "3", "4", "5", "6", "7", "8"]
	let yAxisData1 = echartData.map(v => v.value1);
	// [100, 138, 350, 173, 180, 150, 180, 230]
	let yAxisData2 = echartData.map(v => v.value2);
	// [233, 233, 200, 180, 199, 233, 210, 180]
	const hexToRgba = (hex, opacity) => {
		let rgbaColor = "";
		let reg = /^#[\da-f]{6}$/i;
		if (reg.test(hex)) {
			rgbaColor = `rgba(${parseInt("0x" + hex.slice(1, 3))},${parseInt(
		  "0x" + hex.slice(3, 5)
		)},${parseInt("0x" + hex.slice(5, 7))},${opacity})`;
		}
		return rgbaColor;
	}

	var option = {
		title: {
			top: '4%',
			left: 'center',
			text: '上方山生态资源因子变化情况',
			textStyle: {
				align: 'center',
				color:'#fff'
			}
		},
		legend: {
			right: 10,
			top: 10,
			textStyle: {
				color: "#fff"
			}
		},
		tooltip: {
			trigger: "axis",
			formatter: function(params) {
				let html = '';
				params.forEach(v => {
					console.log(v)
					html += `<div style="color: #666;font-size: 14px;line-height: 24px">
					<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${color[v.componentIndex]};"></span>
					${v.seriesName}.${v.name}
					<span style="color:${color[v.componentIndex]};font-weight:700;font-size: 18px">${v.value}</span>
					万元`;
				})
				return html
			},
			extraCssText: 'border-radius: 0;box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);color: #333;',
			axisPointer: {
				type: 'shadow',
				shadowStyle: {
					color: '#ffffff',
					shadowColor: 'rgba(225,225,225,1)',
					shadowBlur: 5
				}
			}
		},
		grid: {
			top: 70,
			bottom:10,
			containLabel: true
		},
		xAxis: [{
			type: "category",
			boundaryGap: false,
			axisLabel: {
				formatter: '{value}',
				textStyle: {
					color: "#fff",
					opacity: 1
				}
			},
			axisLine: {
				lineStyle: {
					color: "#D9D9D9"
				}
			},
			data: xAxisData
		}],
		yAxis: [{
			type: "value",
			name: '',
			axisLabel: {
				textStyle: {
					color: "#fff",
					opacity: 1
				}
			},
			nameTextStyle: {
				color: "#fff",
				fontSize: 12,
				lineHeight: 40
			},
			splitLine: {        //网格样式
				show: true,
				lineStyle:{
					 color: 'rgba(255,255,255,0.1)',
					 width: 1,
					 type: 'dashed'
				}
			},
			
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			}
		}],
		series: [{
			name: "NDVI",
			type: "line",
			smooth: true,
			// showSymbol: false,/
			symbolSize: 8,
			zlevel: 3,
			lineStyle: {
				normal: {
					color: color[0],
					shadowBlur: 3,
					shadowColor: hexToRgba(color[0], 0.5),
					shadowOffsetY: 8
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[{
								offset: 0,
								color: hexToRgba(color[0], 0.3)
							},
							{
								offset: 1,
								color: hexToRgba(color[0], 0.1)
							}
						],
						false
					),
					shadowColor: hexToRgba(color[0], 0.1),
					shadowBlur: 10
				}
			},
			data: yAxisData1
		}, {
			name: "FVC",
			type: "line",
			smooth: true,
			// showSymbol: false,
			symbolSize: 8,
			zlevel: 3,
			lineStyle: {
				normal: {
					color: color[1],
					shadowBlur: 3,
					shadowColor: hexToRgba(color[1], 0.5),
					shadowOffsetY: 8
				}
			},
			areaStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0,
						0,
						0,
						1,
						[{
								offset: 0,
								color: hexToRgba(color[1], 0.3)
							},
							{
								offset: 1,
								color: hexToRgba(color[1], 0.1)
							}
						],
						false
					),
					shadowColor: hexToRgba(color[1], 0.1),
					shadowBlur: 10
				}
			},
			data: yAxisData2
		}]
	};
	
	myChart5 = echarts.init(document.getElementById('playCounts'));
	myChart5.setOption(option,true);
	$(document).ready(function(){
	　　myChart5.resize();  
	})
	window.addEventListener("resize", function () {
	　　myChart5.resize();  
	});
}    

/**
*	上方山敏感性区域面积占比
*/
function roseChart(){
	var option = {
		color:['#1d9dff','#ed8884','#8b78f6'],
		title: {
			text: '上方山敏感性区域面积占比',
			left: 'center',
			top:'4%',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		legend: {
			left: 'center',
			top: 'bottom',
			data: ['不敏感', '低敏感', '中度敏感','高敏感'],
			textStyle: {
				color: '#fff'
			}
		},
		toolbox: {
			show: true,
			feature: {
				mark: {show: true},
				dataView: {show: true, readOnly: false},
				magicType: {
					show: true,
					type: ['pie', 'funnel']
				},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		series: [
			{
				name: '半径模式',
				type: 'pie',
				radius: [0, 70],
				center: ['50%', '50%'],
				roseType: 'radius',
				label: {
					show: true
				},
				emphasis: {
					label: {
						show: true
					}
				},
				data: [
					{value: 274.6, name: '不敏感'},
					{value: 674.6, name: '低敏感'},
					{value: 1475.3, name: '中度敏感'},
					{value: 1501.0, name: '高敏感'},
				]
			}
		]
	};
	myChart6 = echarts.init(document.getElementById('roseChart'));
	myChart6.setOption(option);
	$(document).ready(function(){
	　　myChart6.resize();  
	})
	window.addEventListener("resize", function () {
	　　myChart6.resize();  
	});
}

/**
*	迁徙图
*/
function moveMapChart(){
	var geoCoordMap = {
    '上海': [121.4648,31.2891],
    '东莞': [113.8953,22.901],
    '东营': [118.7073,37.5513],
    '中山': [113.4229,22.478],
    '临汾': [111.4783,36.1615],
    '临沂': [118.3118,35.2936],
    '丹东': [124.541,40.4242],
    '丽水': [119.5642,28.1854],
    '乌鲁木齐': [87.9236,43.5883],
    '佛山': [112.8955,23.1097],
    '保定': [115.0488,39.0948],
    '兰州': [103.5901,36.3043],
    '包头': [110.3467,41.4899],
    '北京': [116.4551,40.2539],
    '北海': [109.314,21.6211],
    '南京': [118.8062,31.9208],
    '南宁': [108.479,23.1152],
    '南昌': [116.0046,28.6633],
    '南通': [121.1023,32.1625],
    '厦门': [118.1689,24.6478],
    '台州': [121.1353,28.6688],
    '合肥': [117.29,32.0581],
    '呼和浩特': [111.4124,40.4901],
    '咸阳': [108.4131,34.8706],
    '哈尔滨': [127.9688,45.368],
    '唐山': [118.4766,39.6826],
    '嘉兴': [120.9155,30.6354],
    '大同': [113.7854,39.8035],
    '大连': [122.2229,39.4409],
    '天津': [117.4219,39.4189],
    '太原': [112.3352,37.9413],
    '威海': [121.9482,37.1393],
    '宁波': [121.5967,29.6466],
    '宝鸡': [107.1826,34.3433],
    '宿迁': [118.5535,33.7775],
    '常州': [119.4543,31.5582],
    '广州': [113.5107,23.2196],
    '廊坊': [116.521,39.0509],
    '延安': [109.1052,36.4252],
    '张家口': [115.1477,40.8527],
    '徐州': [117.5208,34.3268],
    '德州': [116.6858,37.2107],
    '惠州': [114.6204,23.1647],
    '成都': [103.9526,30.7617],
    '扬州': [119.4653,32.8162],
    '承德': [117.5757,41.4075],
    '拉萨': [91.1865,30.1465],
    '无锡': [120.3442,31.5527],
    '日照': [119.2786,35.5023],
    '昆明': [102.9199,25.4663],
    '杭州': [119.5313,29.8773],
    '枣庄': [117.323,34.8926],
    '柳州': [109.3799,24.9774],
    '株洲': [113.5327,27.0319],
    '武汉': [114.3896,30.6628],
    '汕头': [117.1692,23.3405],
    '江门': [112.6318,22.1484],
    '沈阳': [123.1238,42.1216],
    '沧州': [116.8286,38.2104],
    '河源': [114.917,23.9722],
    '泉州': [118.3228,25.1147],
    '泰安': [117.0264,36.0516],
    '泰州': [120.0586,32.5525],
    '济南': [117.1582,36.8701],
    '济宁': [116.8286,35.3375],
    '海口': [110.3893,19.8516],
    '淄博': [118.0371,36.6064],
    '淮安': [118.927,33.4039],
    '深圳': [114.5435,22.5439],
    '清远': [112.9175,24.3292],
    '温州': [120.498,27.8119],
    '渭南': [109.7864,35.0299],
    '湖州': [119.8608,30.7782],
    '湘潭': [112.5439,27.7075],
    '滨州': [117.8174,37.4963],
    '潍坊': [119.0918,36.524],
    '烟台': [120.7397,37.5128],
    '玉溪': [101.9312,23.8898],
    '珠海': [113.7305,22.1155],
    '盐城': [120.2234,33.5577],
    '盘锦': [121.9482,41.0449],
    '石家庄': [114.4995,38.1006],
    '福州': [119.4543,25.9222],
    '秦皇岛': [119.2126,40.0232],
    '绍兴': [120.564,29.7565],
    '聊城': [115.9167,36.4032],
    '肇庆': [112.1265,23.5822],
    '舟山': [122.2559,30.2234],
    '苏州': [120.6519,31.3989],
    '莱芜': [117.6526,36.2714],
    '菏泽': [115.6201,35.2057],
    '营口': [122.4316,40.4297],
    '葫芦岛': [120.1575,40.578],
    '衡水': [115.8838,37.7161],
    '衢州': [118.6853,28.8666],
    '西宁': [101.4038,36.8207],
    '西安': [109.1162,34.2004],
    '贵阳': [106.6992,26.7682],
    '连云港': [119.1248,34.552],
    '邢台': [114.8071,37.2821],
    '邯郸': [114.4775,36.535],
    '郑州': [113.4668,34.6234],
    '鄂尔多斯': [108.9734,39.2487],
    '重庆': [107.7539,30.1904],
    '金华': [120.0037,29.1028],
    '铜川': [109.0393,35.1947],
    '银川': [106.3586,38.1775],
    '镇江': [119.4763,31.9702],
    '长春': [125.8154,44.2584],
    '长沙': [113.0823,28.2568],
    '长治': [112.8625,36.4746],
    '阳泉': [113.4778,38.0951],
    '青岛': [120.4651,36.3373],
    '韶关': [113.7964,24.7028]
	};

	var BJData = [
		[{name:'北京'}, {name:'上海',value:95}],
		[{name:'北京'}, {name:'广州',value:90}],
		[{name:'北京'}, {name:'大连',value:80}],
		[{name:'北京'}, {name:'南宁',value:70}],
		[{name:'北京'}, {name:'南昌',value:60}],
		[{name:'北京'}, {name:'拉萨',value:50}],
		[{name:'北京'}, {name:'长春',value:40}],
		[{name:'北京'}, {name:'包头',value:30}],
		[{name:'北京'}, {name:'重庆',value:20}],
		[{name:'北京'}, {name:'常州',value:10}]
	];

	var SHData = [
		[{name:'上海'},{name:'包头',value:95}],
		[{name:'上海'},{name:'昆明',value:90}],
		[{name:'上海'},{name:'广州',value:80}],
		[{name:'上海'},{name:'郑州',value:70}],
		[{name:'上海'},{name:'长春',value:60}],
		[{name:'上海'},{name:'重庆',value:50}],
		[{name:'上海'},{name:'长沙',value:40}],
		[{name:'上海'},{name:'北京',value:30}],
		[{name:'上海'},{name:'丹东',value:20}],
		[{name:'上海'},{name:'大连',value:10}]
	];

	var GZData = [
		[{name:'广州'},{name:'福州',value:95}],
		[{name:'广州'},{name:'太原',value:90}],
		[{name:'广州'},{name:'长春',value:80}],
		[{name:'广州'},{name:'重庆',value:70}],
		[{name:'广州'},{name:'西安',value:60}],
		[{name:'广州'},{name:'成都',value:50}],
		[{name:'广州'},{name:'常州',value:40}],
		[{name:'广州'},{name:'北京',value:30}],
		[{name:'广州'},{name:'北海',value:20}],
		[{name:'广州'},{name:'海口',value:10}]
	];

	var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

	var convertData = function (data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push([{
					coord: fromCoord
				}, {
					coord: toCoord
				}]);
			}
		}
		return res;
	};

	var color = ['#a6c84c', '#00eaff', '#ffde00'];
	var series = [];
	[['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
		series.push({
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 1,
			effect: {//波纹点样式
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 5
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'lines',
			zlevel: 2,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: planePath,
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0.4,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		},
		{
			name: item[0] + ' Top10',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				brushType: 'stroke'
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: '{b}'
				}
			},
			symbolSize: function (val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[i]
				}
			},
			data: item[1].map(function (dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});

	var option = {
		tooltip : {
			trigger: 'item'
		},
		legend: {
			orient: 'vertical',
			top: 'bottom',
			left: 'right',
			data:['北京 Top10', '上海 Top10', '广州 Top10'],
			textStyle: {
				color: '#fff'
			},
			selectedMode: 'single'
		},
		geo: {
			map: 'china',
			zoom:1.4,
			label: {
				emphasis: {
					show: true,
					color:'#fff'
				}
			},
			roam: true,
			itemStyle: {
				normal: {
					borderWidth: 1,
					areaColor:'rgba(7,16,44, 0.7)',
					borderColor: 'rgba(147, 235, 248, 1)'
				},
				emphasis: {
					areaColor: '#1d83e1'
				}
			}
		},
		series: series
	};
	myChart7 = echarts.init(document.getElementById('moveMapChart'));
	myChart7.setOption(option,true);
	$(document).ready(function(){
	　　myChart7.resize();  
	})
	window.addEventListener("resize", function () {
	　　myChart7.resize();  
	});
}

/**
*LED液晶屏数字字符效果
*/
function showLEDNumber(value,id){
	var htmlArr = [];
	var len = value.length;
	for(var i=0;i<len;i++){
		var number = value.charAt(i);
		htmlArr.push('<div class="clock c'+number+'" >');
		htmlArr.push('<div class="v n1"><div class="u"></div><div class="d"></div></div>');
		htmlArr.push('<div class="v n2"><div class="u"></div><div class="d"></div></div>');
		htmlArr.push('<div class="h n3"><div class="l"></div><div class="r"></div></div>');
		htmlArr.push('<div class="v n4"><div class="u"></div><div class="d"></div></div>');
		htmlArr.push('<div class="v n5"><div class="u"></div><div class="d"></div></div>');
		htmlArr.push('<div class="h n6"><div class="l"></div><div class="r"></div></div>');
		htmlArr.push('<div class="h n7"><div class="l"></div><div class="r"></div></div>');
		htmlArr.push('</div>');
	}
	$("#"+id).html(htmlArr.join(""));
}

function clocknum(num,id) {
       $('#'+id).empty();
       var html = '';
       var strarr = num.toString().split('');
       var digit_to_name = 'zero one two three four five six seven eight nine'.split(' ');
       for(var i=0; i<strarr.length; i++){
           if(strarr[i] == '.'){
               html += '<div class="dot"></div>'
           } else {
               var clasname = digit_to_name[strarr[i]];
               html += '<div class="'+clasname+'">' +
                       '<span class="d1"></span>' +
                       '<span class="d2"></span>' +
                       '<span class="d3"></span>' +
                       '<span class="d4"></span>' +
                       '<span class="d5"></span>' +
                       '<span class="d6"></span>' +
                       '<span class="d7"></span>' +
                   '</div>';
           }
       }
       $('#'+id).append(html);
   }
