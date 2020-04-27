function showEchartsUnicorn (myChart, yKey, xKey, data, type, isScreenShot, ttitle, sy) {

	myChart.clear();

	var yDw;
	var ytitle;
	dataType.forEach(function(ele) {
		if(ele['k'] == yKey){
			ytitle = ele['text'];
			yDw =  ele['dw'] ?  ele['dw'] : ''
		}
	})
	var yData = [];
	var xData = [];
	var color = [];
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	
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
	        text: isScreenShot? '' : ttitle + ytitle +'对比图',
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
	            end: $(window).width() > 768 ? (xData.length > 20 ? 20/xData.length * 100 : 100) : (xData.length > 10 ? 10/xData.length * 100 : 100),
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