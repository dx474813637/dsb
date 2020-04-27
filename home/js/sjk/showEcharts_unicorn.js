function showEchartsUnicorn (myChart, yKey, xKey, data, type, isScreenShot, tTitle, sy) {
	
	myChart.clear();

	var yDw;
	var ytitle;
	dataTypeUnicorn.forEach(function(ele) {
		if(ele['k'] == yKey){
			ytitle = ele['text'];
			yDw =  ele['dw'] ?  ele['dw'] : ''
		}
	})
	var yData = [];
	var xData = [];
	var color = [];
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	if(yKey == 'shares') {
		data.forEach(function(ele) {
			yData.push(ele[yKey])
			xData.push(ele[xKey])
		})
		for(var i = 0 ; i < xData.length ; i++) {
			color.push('hsla(' + 360*i /xData.length + ', 100%, 62%, 1)')
		}
		option = {
			// color: [color[0],'#f90'],
			//标题
		    title: {
		        text: isScreenShot? '' : tTitle ,
		        x: 'center',
		        textStyle: {
	                	color: '#fff',
	                	fontSize: 20,
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
		    //右上角数据标签种类
	        // legend: {
	        //     data: [title, '增长率'],
	        //     right: '10%',
	        //     top: '40',
	        //     textStyle: {
	        //     	color: '#fff',
	        //     },
	        // },
	        //图表定位
		    grid: {
		        left: '3%',
		        right: isScreenShot? '3%' : '8%',
		        top: isScreenShot? '140' : '100',
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
	            			str += '<br/>' + colorC + params[i].seriesName + '：' + params[i].data + (params[i].seriesIndex == 0 ? yDw : '%')
	            			
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
		                color: '#00c7ff',
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
		        name: ytitle + (yDw ? '/' + yDw : ''),
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
	            name: ytitle,
		        data: yData,
		        type: type,
	        	smooth: true,
	            lineStyle: {
	                normal: {
	                    width: 2,
	                    color: contentTextColor,
	                }
	            },
	            itemStyle: {
					normal: {
						color: function(params) {
							// console.log(params)
							return isScreenShot ? '#5B9BD5' : color[params.dataIndex]
						},
						label: {
	                        show: true,
	                        position: "top",
	                        
	                    }
					}
	            },
		    }]
		};

	}else if(yKey == xKey) {
		//计数统计模式
		var oData = []
		data.forEach(function(ele) {
			if( xData.indexOf(ele[xKey]) == -1 ) {
				xData.push(ele[xKey]);
				yData.push(1);
			}else {
				yData[xData.indexOf(ele[xKey])] ++
			}
		})
		xData.forEach(function(ele, index){
			oData.push({
				name: ele,
				value: yData[index],
			})
		})
		oData.sort(function(a, b) {
			return parseInt(a['value']) - parseInt(b['value'])
		})
		for(var i = 0 ; i < oData.length; i++) {
			color.push( isScreenShot ? 'hsla(' + 360*i /oData.length + ', 100%, 38%, 1)' : 'hsla(' + 360*i /oData.length + ', 100%, 62%, 1)')
		}
		option = {
			title: {
			        text:  isScreenShot?  '' : tTitle ,
			        textStyle: {
			            color: '#fff',
			            fontSize: '16'
			        },
			        left: 'center'
			},
		    color: color,
		    tooltip: {
		        trigger: 'item',
		        formatter: '{a} <br/>{b}: {c} 家({d}%)',
		    },
		    legend: {
		    	show: isScreenShot? false : true,
		         orient: $(window).width() > 768 ? "vertical" : 'horizontal',
		         top: $(window).width() > 768 ? "middle" : 'auto',
		         right:  $(window).width() > 768 ? "5%" : 'auto',
		         bottom:  $(window).width() > 768 ? "auto" : 0,
		         textStyle: {
		             color: '#f2f2f2',
		             fontSize: 14,

		         },
		         icon: 'roundRect',
		         data: oData,
		     },
		    series: [{
		        name: '所在地',
		        type: 'pie',
		        startAngle:45,
		        center: ['50%', '50%'] ,
		        radius:  $(window).width() > 768 ?['40%', '55%'] : ['30%', '45%'],
		        avoidLabelOverlap: true,
		        itemStyle: {
		            normal: {
		                borderColor: '#ccc',
		                borderWidth: 0
		            }
		        },
		        label: {
		            normal: {
		                show: true,
		                formatter: function(params){
		                	return params.name+ (!isNaN(params.name)? '年' : '' ) + '：' + params.value + '家 (' + params.percent + '%)'
		                },
		                // '{b}：{d}%',
		                textStyle: {
		                    fontSize: 14,
		                    fontWeight: 'bold',
		                    color: isScreenShot? '#666' : '#fff'
		                },
		            },
		            emphasis: {
		                show: true,
		                textStyle: {
		                    fontSize: '20',
		                },
		            }
		        },
		        labelLine: {
		            normal: {
	                    show: true,
	                    length: $(window).width() > 768 ? 30 : 10,
	                    length2: $(window).width() > 768 ? 25 :10,
	                },
	                emphasis: {
	                    show: true
	                }
		        },

		        data: oData
		    }]
		};
	}
	

	if(sy && sy != 'none') {

		option.graphic = [{
			id: 'logo',
			type: 'image',
			right: isScreenShot ? '10' : 'center',
			top: isScreenShot ?'75': 'center',
			z: '1000',
			style: {
		        image: sy,
		        width: 160,
		        height: 60,
		        opacity: 0.5
		    },
		    draggable: true
		}]
	}

	
	myChart.setOption(option ,true);	//生成图表
}