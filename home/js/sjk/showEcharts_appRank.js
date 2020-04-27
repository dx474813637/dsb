function showEchartsUnicorn (myChart, yKey, xKey, data, type, isScreenShot, tTitle, sy) {
	
	myChart.clear();

	// console.log(data)
	var xData = []
	var yData1 = []
	var yData2 = []
	data.forEach(function(ele){
		xData.push(ele['app_name'])
		yData1.push(Math.floor(ele['uv'] / 100)/100)
		yData2.push(Math.floor(ele['rank_ratio']*100)/100)

	})
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	var option = {
		title: {
	        text: tTitle,
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
	            	type: ['line', 'bar']
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
        legend: {
	    	show: isScreenShot? false : true ,
            data: ['UV/活跃人数', '环比增幅'],
            right: '10%',
            top: '40',
            textStyle: {
            	color: '#fff',
            },
        },
        //图表定位
	    grid: {
	        left:  isScreenShot? '5%' :'3%',
	        right: '5%',
	        top: isScreenShot? '190' : '100',
	        bottom:  '22%',
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
	        name: 'UV/活跃人数（万）',
	        nameTextStyle: {
	        	color: contentTextColor,
	        },
	    },{
            name: '环比增幅（%）',
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
	            end:  $(window).width() > 768 ? (xData.length > 10 ? 10/xData.length * 100 : 100) : (xData.length > 8 ? 8/xData.length * 100 : 100),
	            dataBackground:{
	            	areaStyle: {
	            		color: '#00c7ff'
	            	}
	            },
	            textStyle: {
	            	color: '#00c7ff'
	            },
	            borderColor: 'rgba(62, 145, 193, 0.2)',
	        }
	    ],
        //数据表成图配置;
	    series: [{
            name: 'UV/活跃人数',
	        data: yData1,
	        type: 'bar',
        	smooth: true,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#00c7ff',
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
	    }, {
            name: '环比增幅',
            yAxisIndex: 1,
            type: 'line',
        	smooth: true,//弧线
            data: yData2,//数据
            itemStyle: {
                normal: {
                    color: isScreenShot? '#E28904' : '#f90'
                },
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

	if(sy && sy != 'none') {

		option.graphic = [{
			id: 'logo',
			type: 'image',
			right: isScreenShot ? '10' : 'center',
			top: isScreenShot ?'130': 'center',
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