function renderShowEcharts (xData, yData, yDw, title, fieldS, tar, isScreenShot, t, sy) {
	// console.log(xData, yData, yDw, title, fieldS, tar, isScreenShot)
	// var myChart = echarts.init(document.getElementById('chart'));
	tar.clear();
	var ydata2 = [];
	var prevData;
	yData.forEach(function(ele, index) {
		if(index == 0) {
			ydata2.push('')
		}else {
			ydata2.push(Math.floor((ele - prevData) / prevData * 10000) / 100 )
		}
		prevData = ele
	})
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	// EChart图表配置选项
	option = {
		// graphic:[{
		// 	type: 'image',
		// 	left: 'center',
		// 	top: 'center',
		// 	 style: {
		//         image: 'https://www.100ec.cn/Public/home/images/dhlogo.png',
		//         width: 180,
		//         height: 70
		//     }
		// }],
		// color: [color[0],'#f90'],
		//标题
	    title: {
	        text: ( fieldS != '电商人员' ? fieldS + '行业' + title + '及其增长率数据图' : t ) ,
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
            data: [title, '增长率'],
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
            	for(var i in params) {
            		var colorC = '<span style="background: ' + params[i].color +';width:10px;height:10px;display:inline-block;border-radius:5px;margin-right:5px;"></span>'
            		strt = params[i].name + fieldS;
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
	        name: yDw,
	        nameTextStyle: {
	        	color: contentTextColor,
	        },
	    },{
            name: '%',
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
	            y: isScreenShot? '92%' : '90%',
	            start: 5,
	            end: 100,
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
            name: title,
	        data: yData,
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
            name: '增长率',
            yAxisIndex: 1,
            type: 'line',
        	smooth: true,//弧线
            data: ydata2,//数据
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
	tar.setOption(option,true);	//生成图表
}

function showEChart (data) {
	// console.log(data)
	var myChart2 = echarts.init(document.getElementById('chart2'));
	myChart2.clear();
	var showColor = ['#4A266B', '#3D61C7', '#3DA7C7', '#E910F7', '#CC0B38', '#F37C16', '#48E2FB', '#480F06', '#29E207', '#9CA09C'];

	var title = '【' + data['field'].join('-') + '】' + data['keyword'] + '数据对比图';
	// console.log(title)
	// EChart图表配置选项
	option = {
		// color: [color[3],'#f90'],
		//标题
	    title: {
	        text: title,
	        x: 'center',
	        top: '20',
	        textStyle: {
                	color: '#000'
                },
	    },
	    //右边栏操作选项
	    toolbox: {
	        feature: {
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
	        	color: '#666'
	        },
	    },
	    //右上角数据标签种类
        legend: {
            data: data['field'],
            right: '8%',
            top: '60',
            textStyle: {
            	color: '#000'
            },
        },
        //图表定位
	    grid: {
	        left: '3%',
	        right: '8%',
	        top: '140',
	        bottom: '20%',
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
		                color: '#000',
                    },
                },
            },
            backgroundColor: 'rgba(0,0,0,0.75)',
            extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
            textStyle: {
                color: '#fff',
            },
            formatter: function(params) {
            	var str = '';
            	var strt = '';
            	// console.log(params)
            	for(var i in params) {
            		var colorC = '<span style="background: ' + params[i].color +';width:10px;height:10px;display:inline-block;border-radius:5px;margin-right:5px;"></span>'
            		strt = params[i].name + data['keyword'];
            		if(params[i].data){
            			str += '<br/>' + colorC + params[i].seriesName + '：' + params[i].data + data['dw']
            			
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
	        data: data['xdata'],
	        "axisLine": {
	            lineStyle: {
	                color: '#007fff',
	                width: 1,
	                type: "solid"
	            }
	        },
	        "axisPointer": {
	          "type": "shadow"
	        },
	        //刻度以及文字配置
	        axisLabel: {
	            textStyle: {
	                color: '#007fff',
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
	                color: '#eee'
	            }
	        },
	        axisTick: {
	            show: false,
	        },
	        //刻度配置
	        axisLabel: {
	            textStyle: {
	                color: '#007fff',
	            }
	        },
	        name: data['dw'],
	        nameTextStyle: {
	        	color: '#007fff',
	        },
	    }],
	    dataZoom: [
	        {
	            show: true,
	            // backgroundColor: '#fff',
	            type: 'slider',
	            y: '90%',
	            start: 5,
	            end: 100,
	            dataBackground:{
	            	areaStyle: {
	            		color: '#00c7ff'
	            	}
	            },
	            textStyle: {
	            	color: '#262f44'
	            }
	        }
	    ],
        //数据表成图配置
	    series: []
	};

	for(var i in data['ydata']) {
		var yd = [];
		data['xdata'].forEach(function(ele){
			yd.push(parseInt(data['ydata'][i][ele]))
		})
		option.series.push({
            name: i,
	        data: yd, 
	        type: 'bar',
            lineStyle: {
                normal: {
                    width: 2,
                    color: showColor[Object.keys(data['ydata']).indexOf(i) % Object.keys(data['ydata'])],
                }
            },
            itemStyle: {
				normal: {
                    color: showColor[Object.keys(data['ydata']).indexOf(i) % Object.keys(data['ydata'])],
				}
            }
		})
	}
	

	myChart2.setOption(option,true);
}