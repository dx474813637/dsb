function trzEchartsMap(myChart, data, data2, title) {
	// console.log(data)
	// console.log(data2)
	 // var nameColor = " rgb(255, 215, 0)"
	 // var name_fontFamily = '宋体'
	 // var name_fontSize = 35
	 var mapName = 'china';
	 var geoCoordMap = {};
	 // var toolTipData = [];
	var contentTextColor ='#00c7ff';
	 /*获取地图数据*/
	 var mapFeatures = echarts.getMap(mapName).geoJson.features;
	 mapFeatures.forEach(function(v) {
	     // 地区名称
	     var name = v.properties.name;
	     // 地区经纬度
	     geoCoordMap[name] = v.properties.cp;
	 });
	 var maxCoord = geoCoordMap[data[0]['name']]
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
	var pDataX = [];
	var pDataY = [];
	var pDataY2 = [];
	 var pData = convertData(data.sort(function(a, b) {
             return b.value - a.value;
         }))
	 data.forEach(function(ele, index){
	 	if(index < 8) {
	 		pDataX.push(ele['name'])
	 		pDataY.push(ele['value'])
	 		pDataY2.push(ele['money']/100000000)
	 	}
	 	
	 })
	var cDataX = [];
	var cDataY = [];
	var cDataY2 = [];
	var cData = data2.sort(function(a, b) {
             return b.value - a.value;
         })
	 cData.forEach(function(ele, index){
	 	if(index < 8) {
	 		cDataX.push(ele['name'])
	 		cDataY.push(ele['value'])
	 		cDataY2.push(ele['money']/100000000)
	 	}
	 })
	var option = {
			backgroundColor: '#001017',
		    legend: {
		        data: ['次数', '金额'],
		        bottom: $(window).width() < 768 ? '36%' :'34%',
		        right: '5%',
		        itemWidth: 30,
		        textStyle: {
		            color: "#20B5EF"
		        },
		    },
		 	title: [
		 		{
			        text: '2019年中国电商投融资分布图',
			        itemGap: 24,
			        left: 'center',
			        top: 20,
			        textStyle: {
			            color: '#20B5EF',
			            fontStyle: 'normal',
			            fontSize: 16
			        },

			    },{
			        text: '2019年中国各省份电商投融资次数及金额统计TOP8',
			        itemGap: 24,
			        left: '30',
			        bottom: '34%',
			        textStyle: {
			            color: '#20B5EF',
			            fontStyle: 'normal',
			            fontSize: 14
			        },

			    },{
			        text: '2019年中国各城市电商投融资次数及金额统计TOP8',
			        itemGap: 24,
			        bottom: '16%',
			        left: '30',
			        textStyle: {
			            color: '#20B5EF',
			            fontStyle: 'normal',
			            fontSize: 14
			        },

		    	},
		    ],
		    tooltip: {
		        trigger: 'axis',
		        axisPointer: {
		            type: 'shadow'
		        },
		        formatter: function (params) {
		        	return params[0].axisValueLabel + '<br>' + params[0].marker + '融资事件:' + params[0].value + '次<br>' +  params[1].marker + '融资金额:' + params[1].value + '亿人民币' ;

		          	
		        }
		    },
		    grid: [
		    	{
		    		width: '90%',
		    		height: '10%',
		    		x: '5%',
		    		y2: '23%',
		    		show: true,
		    		borderWidth: 1,
		    		borderColor: '#062A3C',
		    	},{
		    		width: '90%',
		    		height: '10%',
		    		x: '5%',
		    		y2: '5%',
		    		show: true,
		    		borderWidth: 1,
		    		borderColor: '#062A3C',
		    	},
		    ],
		    xAxis: [
		    	{
		    		gridIndex: 0,
		    		show: true,
		    		type: 'category',
		    		axisLine: {
	                    show: true,
	                    lineStyle: {
	                        color: '#062A3C'
	                    }
	                },
	                axisTick: {
	                    show: false,
	                    lineStyle: {
	                        color: '#ddd'
	                    }
	                },
	                axisLabel: {
	                    interval: 0,
	                    textStyle: {
	                        color: '#08FCFD'
	                    }
	                },
	                data: pDataX
		    	},{
		    		gridIndex: 1,
		    		show: true,
		    		type: 'category',
		    		axisLine: {
	                    show: true,
	                    lineStyle: {
	                        color: '#062A3C'
	                    }
	                },
	                axisTick: {
	                    show: false,
	                    lineStyle: {
	                        color: '#ddd'
	                    }
	                },
	                axisLabel: {
	                    interval: 0,
	                    textStyle: {
	                        color: '#08FCFD'
	                    }
	                },
	                data: cDataX
		    	},
		    ],
            yAxis: [
            	{
            		gridIndex: 0,
            		type: 'value',
            		axisLine: {
	                    show: false,
	                },
	                //基准线
			        splitLine: {
			            show: false,
			            lineStyle: {
			                color: '#001738'
			            }
			        },
			        axisTick: {
			            show: false,
			        },
			        axisLabel: {
			        	show: false,
			        	textStyle: {
			        		color: '#00B8FF'
			        	}
			        }
            	},{
            		gridIndex: 0,
            		type: 'value',
            		position: "right",
            		axisLine: {
	                    show: false,
	                },
	                //基准线
			        splitLine: {
			            show: false,
			            lineStyle: {
			                color: '#001738'
			            }
			        },
			        axisTick: {
			            show: false,
			        },
			        axisLabel: {
			        	show: false,
			        	textStyle: {
			        		color: '#00B8FF'
			        	}
			        }
            	},{
            		gridIndex: 1,
            		type: 'value',
            		axisLine: {
	                    show: false,
	                },
	                //基准线
			        splitLine: {
			            show: false,
			            lineStyle: {
			                color: '#001738'
			            }
			        },
			        axisTick: {
			            show: false,
			        },
			        axisLabel: {
			        	show: false,
			        	textStyle: {
			        		color: '#00B8FF'
			        	}
			        }
            	},{
            		gridIndex: 1,
            		position: "right",
            		axisLine: {
	                    show: false,
	                },
            		type: 'value',
	                //基准线
			        splitLine: {
			            show: false,
			            lineStyle: {
			                color: '#001738'
			            }
			        },
			        axisTick: {
			            show: false,
			        },
			        axisLabel: {
			        	show: false,
			        	textStyle: {
			        		color: '#00B8FF'
			        	}
			        }
            	}
            ],
		     geo: {
		         show: true,
		         zoom: 1.1,
		         map: mapName,
		         layoutCenter: ["50%", "30%"],
		         layoutSize: 550,
		         label: {
		             normal: {
		                 show: false
		             },
		             emphasis: {
		                 show: false,
		             }
		         },
		         roam: false,
		         itemStyle: {
		             normal: {
		                 areaColor: '#001621',
		                 borderColor: '#08FCFD',
		             },
		             emphasis: {
		                 areaColor: '#001017',
		             }
		         }
		     },
		     series: [{
			     	name: '次数',
			     	yAxisIndex: 0,
			     	xAxisIndex: 0,
		            zlevel: 1.5,
		            barWidth: '10',
		            type: 'bar',
		            itemStyle: {
		                normal: {
		                    color: '#08FCFD',
		                },
		            },
		            label: {
		            	normal: {
		            		show: false,
		            		color: 'dodgerblue',
		            	}
		            },
		            data: pDataY
		        },{
		        	name: '金额',
			     	yAxisIndex: 1,
			     	xAxisIndex: 0,
            		gridIndex: 0,
		            zlevel: 1.5,
		            barWidth: '10',
		            type: 'bar',
		            itemStyle: {
		                normal: {
		                    color: '#024753',
		                },
		            },
		            label: {
		            	normal: {
		            		show: false,
		            		color: 'dodgerblue',
		            	}
		            },
		            data: pDataY2
		        },{
		        	name: '次数',
			     	yAxisIndex: 2,
			     	xAxisIndex: 1,
            		gridIndex: 1,
		            zlevel: 1.5,
		            barWidth: '10',
		            type: 'bar',
		            itemStyle: {
		                normal: {
		                    color: '#08FCFD',
		                },
		            },
		            label: {
		            	normal: {
		            		show: false,
		            		color: 'dodgerblue',
		            	}
		            },
		            data: cDataY
		        },{
		        	name: '金额',
			     	yAxisIndex: 3,
			     	xAxisIndex: 1,
            		gridIndex: 1,
		            zlevel: 1.5,
		            barWidth: '10',
		            type: 'bar',
		            itemStyle: {
		                normal: {
		                    color: '#024753',
		                },
		            },
		            label: {
		            	normal: {
		            		show: false,
		            		color: 'dodgerblue',
		            	}
		            },
		            data: cDataY2
	        	},]
		 };
	 // var bar = ]
	 
	 var kuosan = {
	 	 name: 'Top 10',
         type: 'effectScatter',
         coordinateSystem: 'geo',
         data: pData.slice(0, 10),
         symbolSize: function(val) {
             return 25;
         },
         showEffectOn: 'render',
         rippleEffect: {
             brushType: 'stroke'
         },
         hoverAnimation: true,
         label: {
             normal: { 
                 formatter: '{b}',
                 position: 'right',
                 show: false//bug：设置为true造成top5的省份名称重影
             }
         },
         itemStyle: {
             normal: {
                 color: '#1DE9B6',
                 shadowBlur: 10,
                 shadowColor: '#1DE9B6'
             }
         },
         zlevel: 1
	 }
	 var point = {
		             name: '散点',
		             type: 'effectScatter',
		             coordinateSystem: 'geo',
		             data: pData,
		             symbolSize: function(val) {
		                 return 15;
		             },
		             label: {
		                 normal: {
		                     formatter: '{b}',
		                     position: 'right',
		                     show: true,
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
		                     color: '#1DE9B6'
		                 }
		             }
		         }
	 var pointHot = {
		             name: '点',
		             type: 'heatmap',
		             coordinateSystem: 'geo',
		             data: pData,
		         }
		         
	 // var areaMapColor = {
		//              type: 'map',
		//              map: mapName,
		//              geoIndex: 0,
		//              aspectScale: 0.75, //长宽比
		//              showLegendSymbol: false, // 存在legend时显示
		//              label: {
		//                  normal: {
		//                      show: false
		//                  },
		//                  emphasis: {
		//                      show: false,
		//                      textStyle: {
		//                          color: '#fff'
		//                      }
		//                  }
		//              },
		//              roam: true,
		//              itemStyle: {
		//                  normal: {
		//                      areaColor: '#031525',
		//                      borderColor: '#3B5077',
		//                  },
		//                  emphasis: {
		//                      areaColor: '#2B91B7'
		//                  }
		//              },
		//              animation: false,
		//              data: data
		//          };
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
                     color: '#2069EF', //标志颜色
                 }
             },
             zlevel: 6,
             data: pData,
         }

	// if(info.sy && info.sy != 'none') {

	// 	option.graphic = [{
	// 		id: 'logo',
	// 		type: 'image',
	// 		right: isScreenShot ? '10' : '25%',
	// 		top: isScreenShot ?'75': 'center',
	// 		z: '1000',
	// 		style: {
	// 	        image: info.sy,
	// 	        width: 160,
	// 	        height: 60,
	// 	        opacity: 0.5
	// 	    },
	// 	    draggable: true
	// 	}]
	// }
	option.series.push(point, pointLabel) 
	 
	myChart.setOption(option ,true);
}