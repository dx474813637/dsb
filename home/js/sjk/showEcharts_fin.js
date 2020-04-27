function showEChart(data, title1, title2, ydata1, ydata2, coin, danwei, myC, isScreenShot, t, sy, xDKey) {
		var color = ['#00c7ff','#f90','#333','#007fff','#ff7300'];
		var dataColor = ['#007fff','#4d00ff','#ff005d','#bf00ff', '#ff9d00','#04f', '#59ff00','#ff4800','#00ffa6'];
	
		var y1 = [];
		var y2 = [];
		var xD = [];
		ydata1.forEach(function(ele, index){
			if(ele) {
				y1.push(ele)
				xD.push(data[xDKey || 'dtime'][index])
				ydata2 && y2.push(ydata2[index])
			}
		})
		// console.log(data)

		myC.clear();
		var titleX;
		// if(!title2) {
		// 	titleX = data['name'] + title1 + '数据图';
		// }else {
		// 	titleX = data['name'] + title1 + '及同比增长率数据图';
		// }
		$('#screenIndustry p').html(t)
		
		var contentTextColor = isScreenShot ? '#333' : color[0];
		// EChart图表配置选项
		option = {
			// color: [color[0],'#f90'],
			//标题
		    title: {
		        text: t,
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
		    //右上角数据标签种类
	        legend: {
	        	show: isScreenShot? false : true ,
	            data: [title1, title2],
	            right: '10%',
	            top: '40',
	            textStyle: {
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
		        data: xD,
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
		        name: danwei,
		        nameTextStyle: {
		        	color: contentTextColor
		        },
		    },
		    //右边y轴配置 
		    ],
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
		            start: xD.length < 15 ? 0 :(1 - 15/xD.length)  * 100 ,
		            end: 100,
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
	            name: title1,
		        data: y1,
		        type: 'bar',
	        	smooth: true,
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
		    }, ]
		};
		
		if(sy && sy != 'none') {

			option.graphic = [{
				id: 'logo',
				type: 'image',
				right: isScreenShot ? '10' : 'center',
				top: isScreenShot ?'75': '20%',
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
		if( y2.length > 0) {
			option.yAxis.push({
	            name: '%',
	            type: 'value',
	            position: 'right',
	            axisLabel: {
	                textStyle: {
	                    color: color[1],
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
		        	color: color[1],
		        },
	        })

	        option.series.push({
	            name: title2,
	            yAxisIndex: 1,
	            type: 'line',
	        	smooth: true,//弧线
	            data: y2,//数据
	            itemStyle: {
	                normal: {
	                    color: isScreenShot? '#E28904' : color[1],
	                	
						label: {
	                        show: true,
	                        position: "top",
	                        
	                    }
	                },
	            },
	        })
		}
		
		myC.setOption(option,true);	//生成图表
	}	