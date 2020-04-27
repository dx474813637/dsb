function showEchart(myChart, data, isScreenShot, info) {
	switch(info['key']) {
		case 'hotIndex':
			hotIndexEcharts(myChart, data, isScreenShot, info);
			break;
		case 'attention':
			attentionEcharts(myChart, data, isScreenShot, info);
			break;
		case 'areaHot':
			areaHotEcharts(myChart, data, isScreenShot, info);
			break;
		case 'themeWord':
			themeWordEcharts(myChart, data, isScreenShot, info);
			break;
		default :
			break;
	}
}

function areaHotEcharts (myChart, data, isScreenShot, info) {
	myChart.clear();
	 var nameColor = " rgb(255, 215, 0)"
	 var name_fontFamily = '宋体'
	 var name_fontSize = 35
	 var mapName = 'china';
	 var data = data['data']
	 var geoCoordMap = {};
	//  var toolTipData = [];

	var key = info['key']
	var keyName = info['keyName'];
	var appName = info['appName'] 
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	var echartsTitle = isScreenShot? '' : appName + 'APP' + keyName + '图';
	$('#screenName2 p').html(appName + 'APP' + keyName + '图')

	 /*获取地图数据*/
	 var mapFeatures = echarts.getMap(mapName).geoJson.features;
	//  console.log(mapFeatures)
	 mapFeatures.forEach(function(v) {
	     // console.info(v)
	     // 地区名称
	     var name = v.properties.name;
	     // 地区经纬度
	     geoCoordMap[name] = v.properties.cp;
	 });
	// console.log(geoCoordMap)
	console.log(data)
	 var max = 480,
	     min = 9; // todo 
	 var maxSize4Pin = 150,
	     minSize4Pin = 20;

	 var convertData = function(data) {
	     var res = [];
	     for (var i = 0; i < data.length; i++) {
	         var geoCoord = geoCoordMap[data[i].name];
	         if (geoCoord) {
	             res.push({
	                 name: data[i].name,
	                 value: geoCoord.concat(data[i].value),
	             });
	         }
	     }
	     return res;
	 };
	 console.log(convertData(data))
	 option = {
		 	title: {
		        text: echartsTitle,
		        itemGap: 30,
		        left: 'center',
		        textStyle: {
		            color: '#fff',
		            fontStyle: 'normal',
		            fontWeight: 'bold',
		            fontSize: 24
		        },

		    },
		    tooltip: {
		        trigger: 'item',
		        formatter: function (params) {
		            // console.log(params)
		          if(typeof(params.value)[2] == "undefined"){
		          	return params.name + ' : ' + params.value;
		          }else{
		          	return params.name + ' : ' + params.value[2];
		          }
		        }
		    },
		     legend: {
		         orient: 'vertical',
		         y: 'bottom',
		         x: 'right',
		         data: ['credit_pm2.5'],
		         textStyle: {
		             color: '#fff'
		         }
		     },
		     visualMap:
		     {
			        min: 0,
			        max: 100,
			        text: ['高', '低'], // 文本，默认为数值文本
			        calculable: true,
		        	// seriesIndex: [1],
			        inRange: {
			            color: ['#d94e5d','#eac736','#50a3ba'].reverse()
			        },
			        textStyle: {
			            color: contentTextColor
			        },
			        top: isScreenShot?  '50%' : 'auto',
			        left: isScreenShot?  '5%' : '5%',
			    }, 
		     // {
		     //     show: true,
		     //     min: 0,
		     //     max: 500,
		     //     left: 'left',
		     //     top: 'bottom',
		     //     text: ['高', '低'], // 文本，默认为数值文本
		     //     calculable: true,
		     //     seriesIndex: [1],
		     //     inRange: {
		     //         // color: ['#3B5077', '#031525'] // 蓝黑
		     //          // color: ['#ffc0cb', '#800080'] // 红紫
		     //         // color: ['#3C3B3F', '#605C3C'] // 黑绿
		     //          color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
		     //         // color: ['#23074d', '#cc5333'] // 紫红
		     //            // color: ['#00467F', '#A5CC82'] // 蓝绿
		     //        //   color: ['#1488CC', '#2B32B2'] // 浅蓝
		     //         // color: ['#00467F', '#A5CC82', '#ffc0cb'] // 蓝绿红
		     //         // color: ['#00467F', '#A5CC82'] // 蓝绿

		     //     }
		     // },
		     /*工具按钮组*/
		    //  toolbox: {
		    //      show: true,
		    //      orient: 'vertical',
		    //      left: 'right',
		    //      top: 'center',
		    //      feature: {

		    //          dataView: {
		    //              readOnly: false
		    //          },
		    //          restore: {},
		    //          saveAsImage: {}
		    //      }
		    //  },
		     geo: {
		         show: true,
		         zoom: $(window).width() > 768 ? (isScreenShot? 0.9 : 1.2 ) : 2.5,
		         map: mapName,
		         top: $(window).width() > 768 ? (isScreenShot? 50 : 60) : 150,
		         label: {
		             normal: {
		                 show: false
		             },
		             emphasis: {
		                 show: false,
		             }
		         },
		         roam: true,
		         itemStyle: {
		             normal: {
		                 areaColor: isScreenShot? '#5B9BD5' : '#031525',
		                 borderColor: '#097bba',
		             },
		             emphasis: {
		                 areaColor: '#2B91B7',
		             }
		         }
		     },
		     series: [
		         //散点
		         
		         // 气泡
		         
		         // {   
		         //     name: 'Top 5',
		         //     type: 'effectScatter',
		         //     coordinateSystem: 'geo',
		         //     data: convertData(data.sort(function(a, b) {
		         //         return b.value - a.value;
		         //     }).slice(0, 5)),
		         //     symbolSize: function(val) {
		         //         return 20;
		         //     },
		         //     showEffectOn: 'render',
		         //     rippleEffect: {
		         //         brushType: 'stroke'
		         //     },
		         //     hoverAnimation: true,
		         //     label: {
		         //         normal: { 
		         //             formatter: '{b}',
		         //             position: 'right',
		         //             show: false//bug：设置为true造成top5的省份名称重影
		         //         }
		         //     },
		         //     itemStyle: {
		         //         normal: {
		         //             color: 'yellow',
		         //             shadowBlur: 10,
		         //             shadowColor: 'yellow'
		         //         }
		         //     },
		         //     zlevel: 1
		         // },

		     ]
	 };
	 var point = {
		             name: '散点',
		             type: 'effectScatter',
		             coordinateSystem: 'geo',
		             data: convertData(data),
		             symbolSize: function(val) {
		                 return 10;
		             },
		             label: {
		                 normal: {
		                     formatter: '{b}',
		                     position: 'right',
		                     show: isScreenShot? false : true,
		                     textStyle: {
		                         color: '#00B8FF'
		                     }
		                 },
		                 emphasis: {
		                     show: true
		                 }
		             },
		             itemStyle: {
		                 normal: {
		                     color: '#05C3F9'
		                 }
		             }
		         }
	 var pointHot = {
		             name: '点',
		             type: 'heatmap',
		             coordinateSystem: 'geo',
		             data: convertData(data),
		         }
		         
	 var areaMapColor = {
		             type: 'map',
		             map: mapName,
		             geoIndex: 0,
		             aspectScale: 0.75, //长宽比
		             showLegendSymbol: false, // 存在legend时显示
		             label: {
		                 normal: {
		                     show: false
		                 },
		                 emphasis: {
		                     show: false,
		                     textStyle: {
		                         color: '#fff'
		                     }
		                 }
		             },
		             roam: true,
		             itemStyle: {
		                 normal: {
		                     areaColor: '#031525',
		                     borderColor: '#3B5077',
		                 },
		                 emphasis: {
		                     areaColor: '#2B91B7'
		                 }
		             },
		             animation: false,
		             data: data
		         };
	 var pointLabel = {
             name: '点',
             type: 'scatter',
             coordinateSystem: 'geo',
             symbol: 'pin', //气泡
             symbolSize: function(val) {
                 var a = (maxSize4Pin - minSize4Pin) / (max - min);
                 var b = minSize4Pin - a * min;
                 b = maxSize4Pin - a * max;
                 return 40  ;
             },
             label: {
                 normal: {
                     show: true,
                     formatter: function(params) {
                         return params.data.value[2]
                     },
                     textStyle: {
                         color: '#fff',
                         fontSize: 9,
                     }
                 }
              
             },
             itemStyle: {
                 normal: {
                     color: '#F62157', //标志颜色
                 }
             },
             zlevel: 6,
             data: convertData(data),
         }

	if(info.sy && info.sy != 'none') {

		option.graphic = [{
			id: 'logo',
			type: 'image',
			right: isScreenShot ? '10' : 'center',
			top: isScreenShot ?'75': 'center',
			z: '1000',
			style: {
		        image: info.sy,
		        width: 160,
		        height: 60,
		        opacity: 0.5
		    },
		    draggable: true
		}]
	}
	 isScreenShot? option.series.push(areaMapColor) : option.series.push(pointLabel, pointHot, point);
	myChart.setOption(option ,true);	//生成图表
}
function themeWordEcharts (myChart, data, isScreenShot, info) {
	myChart.clear();
	var key = info['key']
	var keyName = info['keyName'];
	var appName = info['appName'] 
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	var echartsTitle = isScreenShot? '' : appName + 'APP' + keyName + '图';
	$('#screenName2 p').html(appName + 'APP' + keyName + '图')
	var oData = data['records'];
	oData.forEach(function(ele, index){
		ele['itemStyle']['normal']['color'] = 'rgba(0, 87, 138, ' + (100-index)/100 + ')'
	})

	option = {
	    // backgroundColor: "#000",
	    title: {
	        text: echartsTitle,
	        left: '50%',
	        top: '30',
	        textAlign: 'center',
	        textStyle: {
	            color: "#fff",
	            fontWeight: 'bolder',
	        }
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: "{b}"
	    },
	    series: [{
	        type: 'treemap',
	        width: '100%',
	        height: '70%',
	        top: '15%',
	        bottom: '20%',
	        roam: false, //是否开启拖拽漫游（移动和缩放）
	        nodeClick: false, //点击节点后的行为,false无反应
	        breadcrumb: {
	            show: false
	        },
	        label: { //描述了每个矩形中，文本标签的样式。
	            normal: {
	                show: true,
	                position: ['10%', '50%']
	            }
	        },
	        itemStyle: {
	            normal: {
	                show: true,
	                textStyle: {
	                    color: '#fff',
	                    fontSize: 16,
	                },
	                borderWidth: 1,
	                borderColor: '#fff',
	            },

	            emphasis: {
	                label: {
	                    show: true
	                }
	            }
	        },
	        data: oData
	    }]
	};

	if(info.sy && info.sy != 'none') {

		option.graphic = [{
			id: 'logo',
			type: 'image',
			right: isScreenShot ? '10' : 'center',
			top: isScreenShot ?'75': 'center',
			z: '1000',
			style: {
		        image: info.sy,
		        width: 160,
		        height: 60,
		        opacity: 0.5
		    },
		    draggable: true
		}]
	}
	myChart.setOption(option ,true);	//生成图表
}
function attentionEcharts (myChart, data, isScreenShot, info) {
	myChart.clear();
	var key = info['key']
	var keyName1 = '媒体关注度';
	var keyName2 = '媒体文章数';
	var appName = info['appName'] 
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	var echartsTitle = isScreenShot? '' : appName + 'APP' + info['keyName'] + '图';
	$('#screenName2 p').html(appName + 'APP' + info['keyName'] + '图')
	var xData = [];
	var yData1 = [];
	var yData2 = [];
	xData = data['category'];
	yData1 = data['series'][0]['data']
	yData2 = data['series'][1]['data']
	var option = {
	    title: {
	        text: echartsTitle,
	        x: 'center',
	        textStyle: {
	        	color: '#fff',
	        	fontSize: 20,
	        },
	        top: 30,
	    },
        legend: {
	    	show:  $(window).width() > 768 ? (isScreenShot? false : true) : false ,
            data: [keyName1, keyName2],
            right: '10%',
            top: '40',
            textStyle: {
            	color: '#fff',
            },
        },
	    //右边栏操作选项
	    toolbox: {
	    	show: isScreenShot? false : true ,
	        feature: {
	            magicType: {
	            	show: true, 
	            	type: ['line', 'bar'],
	            },
	            restore: {},
	        },
	        orient: 'vertical',
	        top: '30%',
	        right: '3%',
	        iconStyle: {
	        	color: '#fff',
	        },
	    },
	    //图表定位
	    grid: {
	        left: isScreenShot? '5%' : '10%',
	        right: isScreenShot? '5%' : '10%',
	        top: isScreenShot? '150' : '140',
	        bottom: isScreenShot? '25%' : '22%',
	        containLabel: true
	    },
	    //鼠标悬停配置
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            label: {
	                backgroundColor: 'rgba(255,255,255,0.7)',
	                extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
	                textStyle: {
		                color: '#333',
	                },
	            },
	        },
	        backgroundColor: 'rgba(0,0,0,0.9)',
	        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
	        textStyle: {
	            color: '#00c7ff',
	        },
	        formatter: function(params) {
	        	var str = '';
	        	var strt = '';
	        	// console.log(params)
	        	for(var i in params) {
	        		var colorC = '<span style="background: ' + params[i].color +';width:10px;height:10px;display:inline-block;border-radius:5px;margin-right:5px;"></span>'
	        		strt = params[i].name;
	        		if(params[i].data){
	        			str += '<br/>' + colorC + params[i].seriesName + '：' + params[i].data
	        			
	        		}else {
	        			str += '<br/>' + colorC + params[i].seriesName + '： - '
	        		}
	        	}
	        	return strt+str
	        }
	    },
	    //x轴配置
	    xAxis: {
	        type: 'category',
	        data: xData,
	        "axisLine": {
	            lineStyle: {
	                color:  isScreenShot? '#5B9BD5' :'#00c7ff',
	                width: 1,
	                type: "solid"
	            }
	        },
	        //刻度以及文字配置
	        axisLabel: {
	            textStyle: {
	                color: contentTextColor
	            },
	            interval:0, //刻度间隔
	        	rotate: isScreenShot? 45 : 0,//倾斜45度
	        },
	        "axisTick": {
	            "show": false
	        },
	    },
	    //y轴配置
	    yAxis: [{
	        type: 'value',
	        "axisLine": {
	            show:false,
	            lineStyle: {
	                width: 1,
	                type: "solid"
	            },
	        },
	        //基准线
	        splitLine: {
	            show: true,
	            lineStyle: {
	                color: isScreenShot? '#eee' : '#262f44',
	            }
	        },
	        axisTick: {
	            show: false,
	        },
	        //刻度配置
	        axisLabel: {
	            textStyle: {
	                color: contentTextColor
	            }
	        },
	        name: keyName1,
	        nameTextStyle: {
	        	color: contentTextColor,
	        },
	        nameGap: 25,
	    },{
            name: keyName2,
            type: 'value',
            position: 'right',
            axisLabel: {
                textStyle: {
                    color: '#f90',
                }
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
	        splitLine: {
	            show: false,
	            lineStyle: {
	                // color: '#001738'
	            }
	        },
	        nameTextStyle: {
	        	color: '#f90',
	        },
        }],
	    dataZoom: [
	        {
	            show: true,
	            type: 'slider',
	            y: isScreenShot? '95%' : '90%',
	            start: 0,
	            end: $(window).width() > 768 ? (xData.length > 30 ? 30/xData.length * 100 : 100) : (xData.length > 10 ? 10/xData.length * 100 : 100),
	            dataBackground:{
	            	areaStyle: {
	            		color: contentTextColor
	            	}
	            },
	            textStyle: {
	            	color: contentTextColor
	            },
	            borderColor: 'rgba(62, 145, 193, 0.2)',
	        }
	    ],
	    //数据表成图配置;
	    series: [{
	        name: keyName1,
	        data: yData1,
	        type: 'line',
	    	smooth: true,
	        lineStyle: {
	            normal: {
	                width: 2,
	                color: isScreenShot? '#5B9BD5' : '#00ffff',
	            }
	        },
            areaStyle:{
                // color: "rgba(5,140,255, 0.2)"
                normal: {
                	//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                	color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: 'rgba(0,154,120,0.2)'
	                    },
	                    {
	                        offset: 1,
	                        color: 'rgba(0,0,0, 0)'
	                    }
	                ], false),
	                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
	                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
	            }
            },
	        itemStyle: {
				normal: {
					color: function(params) {
						// console.log(params)
						return isScreenShot ? '#5B9BD5' : '#00ffff'
					},
					label: {
	                    show: true,
	                    position: "top",
	                    
	                }
				}
	        },
	    },{
	        name: keyName2,
	        data: yData2,
            yAxisIndex: 1,
	        type: 'line',
	    	smooth: true,
	        lineStyle: {
	            normal: {
	                width: 2,
	                color: '#f90',
	            }
	        },
	        itemStyle: {
				normal: {
					color: '#f90',
					label: {
	                    show: true,
	                    position: "top",
	                    
	                }
				}
	        },
	    }]

	}



	if(info.sy && info.sy != 'none') {

		option.graphic = [{
			id: 'logo',
			type: 'image',
			right: isScreenShot ? '10' : 'center',
			top: isScreenShot ?'75': 'center',
			z: '1000',
			style: {
		        image: info.sy,
		        width: 160,
		        height: 60,
		        opacity: 0.5
		    },
		    draggable: true
		}]
	}
	myChart.setOption(option ,true);	//生成图表
}
function hotIndexEcharts (myChart, data, isScreenShot, info) {
	// console.log(data)
	myChart.clear();
	var key = info['key']
	var keyName = info['keyName']
	var appName = info['appName'] 
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	var echartsTitle = isScreenShot? '' : appName + 'APP' + keyName + '图';
	$('#screenName2 p').html(appName + 'APP' + keyName + '图')
	var xData = [];
	var yData = [];
	xData = data['category'];
	yData = data['series'][0]['data']
	option = {
	    title: {
	        text: echartsTitle,
	        x: 'center',
	        textStyle: {
	        	color: '#fff',
	        	fontSize: 20,
	        },
	        top: 30,
	    },
	    //右边栏操作选项
	    toolbox: {
	    	show: isScreenShot? false : true ,
	        feature: {
	            magicType: {
	            	show: true, 
	            	type: ['line', 'bar'],
	            },
	            restore: {},
	        },
	        orient: 'vertical',
	        top: '30%',
	        right: '3%',
	        iconStyle: {
	        	color: '#fff',
	        },
	    },
	    //图表定位
	    grid: {
	        left: isScreenShot? '5%' : '10%',
	        right: isScreenShot? '5%' : '10%',
	        top: isScreenShot? '150' : '140',
	        bottom: isScreenShot? '25%' : '22%',
	        containLabel: true
	    },
	    //鼠标悬停配置
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'cross',
	            label: {
	                backgroundColor: 'rgba(255,255,255,0.7)',
	                extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
	                textStyle: {
		                color: '#333',
	                },
	            },
	        },
	        backgroundColor: 'rgba(0,0,0,0.9)',
	        extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
	        textStyle: {
	            color: '#00c7ff',
	        },
	        formatter: function(params) {
	        	var str = '';
	        	var strt = '';
	        	// console.log(params)
	        	for(var i in params) {
	        		var colorC = '<span style="background: ' + params[i].color +';width:10px;height:10px;display:inline-block;border-radius:5px;margin-right:5px;"></span>'
	        		strt = params[i].name;
	        		if(params[i].data){
	        			str += '<br/>' + colorC + params[i].seriesName + '：' + params[i].data
	        			
	        		}else {
	        			str += '<br/>' + colorC + params[i].seriesName + '： - '
	        		}
	        	}
	        	return strt+str
	        }
	    },
	    //x轴配置
	    xAxis: {
	        type: 'category',
	        data: xData,
	        "axisLine": {
	            lineStyle: {
	                color:  isScreenShot? '#5B9BD5' :'#00c7ff',
	                width: 1,
	                type: "solid"
	            }
	        },
	        //刻度以及文字配置
	        axisLabel: {
	            textStyle: {
	                color: contentTextColor
	            },
	            interval:0, //刻度间隔
	        	rotate: 45,//倾斜45度
	        },
	        "axisTick": {
	            "show": false
	        },
	    },
	    //y轴配置
	    yAxis: [{
	        type: 'value',
	        "axisLine": {
	            show:false,
	            lineStyle: {
	                width: 1,
	                type: "solid"
	            },
	        },
	        //基准线
	        splitLine: {
	            show: true,
	            lineStyle: {
	                color: isScreenShot? '#eee' : '#262f44',
	            }
	        },
	        axisTick: {
	            show: false,
	        },
	        //刻度配置
	        axisLabel: {
	            textStyle: {
	                color: contentTextColor
	            }
	        },
	        name: '热度指数',
	        nameTextStyle: {
	        	color: contentTextColor,
	        },
	        nameGap: 25,
	    }],
	    dataZoom: [
	        {
	            show: true,
	            type: 'slider',
	            y: isScreenShot? '95%' : '90%',
	            start: 0,
	            end: $(window).width() > 768 ? (xData.length > 15 ? 15/xData.length * 100 : 100) : (xData.length > 10 ? 10/xData.length * 100 : 100),
	            dataBackground:{
	            	areaStyle: {
	            		color: contentTextColor
	            	}
	            },
	            textStyle: {
	            	color: contentTextColor
	            },
	            borderColor: 'rgba(62, 145, 193, 0.2)',
	        }
	    ],
	    //数据表成图配置;
	    series: [{
	        name: keyName,
	        data: yData,
	        type: 'line',
	    	smooth: true,
	        lineStyle: {
	            normal: {
	                width: 2,
	                color: isScreenShot? '#5B9BD5' : '#00ffff',
	            }
	        },
            areaStyle:{
                // color: "rgba(5,140,255, 0.2)"
                normal: {
                	//线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                	color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: 'rgba(0,154,120,0.2)'
	                    },
	                    {
	                        offset: 1,
	                        color: 'rgba(0,0,0, 0)'
	                    }
	                ], false),
	                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
	                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
	            }
            },
	        itemStyle: {
				normal: {
					color: function(params) {
						// console.log(params)
						return isScreenShot ? '#5B9BD5' : '#00ffff'
					},
					label: {
	                    show: true,
	                    position: "top",
	                    
	                }
				}
	        },
	    }]

	}


	if(info.sy && info.sy != 'none') {

		option.graphic = [{
			id: 'logo',
			type: 'image',
			right: isScreenShot ? '10' : 'center',
			top: isScreenShot ?'75': 'center',
			z: '1000',
			style: {
		        image: info.sy,
		        width: 160,
		        height: 60,
		        opacity: 0.5
		    },
		    draggable: true
		}]
	}

	myChart.setOption(option ,true);	//生成图表
}