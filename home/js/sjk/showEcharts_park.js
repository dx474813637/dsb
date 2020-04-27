function showData(myChart, data, isScreenShot, info) {
	console.log(data)
	var data = data.sort(function(a, b){
		return b.value - a.value 
	})
	if(info['type'] == 'map'){
		info.title = '中国电子商务产业园分布图'
		areaHotEcharts(myChart, data, isScreenShot, info)
	}else{
		info.title = '中国电子商务产业园' + info.name
		showEchart(myChart, data, isScreenShot, info)
		$('#screenName p').html(info.title)
	}

	
}
function showEchart(myChart, data, isScreenShot, info) {
	var color = ['#00c7ff','#f90','#333','#007fff','#ff7300'];
	var xData = [],
	yData = [];
	data.forEach(function(ele){
		xData.push(ele['name'])
		yData.push(ele['value'])
	})
	var t = ''
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	myChart.clear();
	var option = {
		// color: [color[0],'#f90'],
		//标题
	    title: {
	        text: info.title,
	        x: 'center',
	        textStyle: {
                	color: '#fff'
                },
	    },
	    //右边栏操作选项
	    toolbox: {
	    	show: isScreenShot? false : true ,
	        feature: {
	            // dataZoom: {
	            //     yAxisIndex: 'none',
	            //     emphasis: {
	            //     	iconStyle: {
	            //     		color: '#fff',
		           //      },
	            //     }
	            // },
	            magicType: {
	            	show: true, 
	            	type: ['line', 'bar']
	            },
	            restore: {},
	            // saveAsImage: {}
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
	        left:  isScreenShot? '8%' :'3%',
	        right: '8%',
	        top: isScreenShot? '130' : '100',
	        bottom:  isScreenShot? '30%' :'22%',
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
		                color: color[2],
                    },
                },
            },
            backgroundColor: 'rgba(0,0,0,0.9)',
            extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
            textStyle: {
                color: color[0],
            },
        },
        //x轴配置
	    xAxis: {
	        type: 'category',
	        data: xData,
	        "axisLine": {
	            lineStyle: {
	                color: color[0],
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
	                // color: "#00c7ff",
	                width: 1,
	                type: "solid"
	            },
	        },
	        //基准线
	        splitLine: {
	            show: true,
	            lineStyle: {
	                color: isScreenShot? '#eee' : '#001738'
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
	        name: '数量',
	        nameTextStyle: {
	        	color: contentTextColor
	        },
	    }],
        dataZoom: [
	        // {
	        //     type: 'inside',
	        //     start: 50,
	        //     end: 100
	        // },
	        {
	            show: true,
	            // backgroundColor: '#fff',
	            type: 'slider',
	            y: isScreenShot? '92%' : '90%',
	            start: 0 ,
	            end: xData.length < 20 ? 100 :(20/xData.length)  * 100,
	            dataBackground:{
	            	areaStyle: {
	            		color: '#00c7ff'
	            	}
	            },
	            textStyle: {
	            	color: '#fff'
	            },
	            borderColor: 'rgba(62, 145, 193, 0.2)',
	        }
	    ],
        //数据表成图配置;
	    series: [{
            name: '',
	        data: yData,
	        type: 'bar',
        	smooth: true,
        	barWidth: '60%',
	        label: {
                normal: {
                    show: true,
                    position: 'top',
                    color:  isScreenShot? '#5B9BD5' : '#00c7ff',
                }
            },
            lineStyle: {
                normal: {
                    width: 2,
                    color: color[0],
                }
            },
            itemStyle: {
				normal: {
					color: isScreenShot? '#5B9BD5' : '#00c7ff',
					label: {
                        show: true,
                        position: "top",
                        
                    }
				}
            },
	    }]
	};
	

	if(info.sy && info.sy != 'none') {

		option.graphic = [{
			id: 'logo',
			type: 'image',
			right: isScreenShot ? '10' : 'center',
			top: isScreenShot ?'75': '20%',
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
	myChart.setOption(option,true);	//生成图表
}
function areaHotEcharts (myChart, data, isScreenShot, info) {
	myChart.clear();
	 var nameColor = " rgb(255, 215, 0)"
	 var name_fontFamily = '宋体'
	 var name_fontSize = 35
	 var mapName = 'china';
	 var geoCoordMap = {};
	 
	 var toolTipData = [];
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	var categoryData = [],
		barData = [];
	data.forEach(function(ele){
		categoryData.push(ele['name'])
		barData.push(ele['value'])
	})
	categoryData.reverse()
	barData.reverse()
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
	 var maxCoord = geoCoordMap[data[0]['name']]
	// console.log(maxCoord)
	 var max = 480,
	     min = 9; // todo 
	 var maxSize4Pin = 150,
	     minSize4Pin = 20;
     var convertToLineData = function(data, gps) {
     	
	        var res = [];
	        for (var i = 0; i < data.length; i++) {
	            var dataItem = data[i];
	            var fromCoord = geoCoordMap[dataItem.name];
	            var toCoord = gps; //郑州
	            //  var toCoord = geoGps[Math.random()*3]; 
	            if (fromCoord && toCoord) {
	                res.push([{
	                    coord: fromCoord,
	                    value: dataItem.value
	                }, {
	                    coord: toCoord,
	                }]);
	            }
	        }
	        // console.log(res)
	        return res;
	    };
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
	 option = {
		 	title: {
		        text: info.title,
		        itemGap: 30,
		        left: 'center',
		        textStyle: {
		            color: '#fff',
		            fontStyle: 'normal',
		            fontWeight: 'bold',
		            fontSize: 28
		        },

		    },
		    tooltip: {
		        trigger: 'item',
		        formatter: function (params) {
		        	if(params.componentSubType == 'effectScatter') {
		        		return params.name + ' : ' + params.value[2];
		        	}else if(params.componentSubType == 'bar') {
		        		return params.name + ' : ' + params.value;
		        	}else {
		        		return
		        	}
		          	
		        }
		    },
		    grid: {
		        right: 20,
		        top: 20,
		        bottom: 20,
		        width: '200'
		    },
		    xAxis: {
                show: false,
            },
            yAxis: {
            	show: $(window).width() < 768 ? false : true ,
                type: 'category',
                //  name: 'TOP 20',
                nameGap: 16,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#00B8FF'
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
                        color: '#00B8FF'
                    }
                },
                data: categoryData
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
		     // visualMap:
		     // {
			    //     min: 0,
			    //     max: 100,
			    //     text: ['高', '低'], // 文本，默认为数值文本
			    //     calculable: true,
		     //    	// seriesIndex: [1],
			    //     inRange: {
			    //         color: ['#d94e5d','#eac736','#50a3ba'].reverse()
			    //     },
			    //     textStyle: {
			    //         color: contentTextColor
			    //     },
			    //     top: isScreenShot?  '50%' : 'auto',
			    //     left: isScreenShot?  '5%' : '5%',
			    // }, 
		     geo: {
		         show: true,
		         zoom: $(window).width() > 768 ? (isScreenShot? 0.9 : 1 ) : 2,
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
		         left: $(window).width() < 768 ? 'auto' : 'left' , 
        		 right: $(window).width() < 768 ? 'auto' : '300',
		         roam: true,
		         itemStyle: {
		             normal: {
		                 areaColor: isScreenShot? '#5B9BD5' : '#031525',
		                 borderColor: 'dodgerblue',
		             },
		             emphasis: {
		                 areaColor: '#031525',
		             }
		         }
		     },
		     series: []
	 };
	 var bar = {
            zlevel: 1.5,
            type: 'bar',
            symbol: 'none',
            itemStyle: {
                normal: {
                    color: '#00ffff',
                	barBorderRadius: [0,5,5,0]
                },
            },
            label: {
            	normal: {
            		show: true,
            		color: 'dodgerblue',
                    position: 'right',
            	}
            },
            data: barData
        }
	 var kuosan = {
	 	 name: 'Top 10',
         type: 'effectScatter',
         coordinateSystem: 'geo',
         data: convertData(data.sort(function(a, b) {
             return b.value - a.value;
         }).slice(0, 10)),
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
	 var lineAnimation = {
		 	type: 'lines',
	        zlevel: 0.9,
	        effect: {
	            show: true,
	            period: 4, //箭头指向速度，值越小速度越快
	            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
	            symbol: 'arrow', //箭头图标
	            symbolSize: 3, //图标大小
	        },
	        lineStyle: {
	            normal: {
	                color: '#00ffff',
	                width: 0.1, //尾迹线条宽度
	                opacity: 0.5, //尾迹线条透明度
	                curveness: .3 //尾迹线条曲直度
	            }
	        },
	        data: convertToLineData(data, maxCoord)
		 }
	 var point = {
		             name: '散点',
		             type: 'effectScatter',
		             coordinateSystem: 'geo',
		             data: convertData(data),
		             symbolSize: function(val) {
		                 return 15;
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
		                     color: '#1DE9B6'
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
			right: isScreenShot ? '10' : '25%',
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
	$(window).width() < 768 ? option.series.push(point, kuosan, lineAnimation)  : (isScreenShot? option.series.push(areaMapColor) : option.series.push(bar,point, kuosan, lineAnimation))
	 
	myChart.setOption(option ,true);	//生成图表
}