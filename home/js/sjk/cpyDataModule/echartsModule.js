function echartsModule (config) {
	config.el.clear();
	// console.log(config)
	var y1name = config.data.name.split('及')[0]
	var y2name = config.data.name.split('及')[1]
	var y1data = config.data.ydata1
	var xdata = config.data.xdata
	var option = {
		title: {
	        text: config.cpy + config.data.name + '数据图',
	        x: config.eq == 'pc' ? '30' : 'center' ,
	        textStyle: {
            	color: '#fff'
            },
	    },
	    legend: {
        	// show: isScreenShot? false : true ,
            data: [y1name, y2name],
            right: config.eq == 'pc' ?  '20' : 'center',
            top: config.eq == 'pc' ?  '0' : '30',
            textStyle: {
            	color: '#fff',
            },
        },
        grid: {
	        left: '3%',
	        right: '3%',
	        top: '80',
	        bottom: '10%',
	        containLabel: true
	    },
        //鼠标悬停配置
	    tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                	color: 'dodgerblue',
                },
                lineStyle: {
                	color: 'dodgerblue',
                },
                label: {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                    textStyle: {
		                color: '#00ffff',
                    },
                },
            },
            backgroundColor: 'rgba(0,0,0,0.9)',
            extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
            textStyle: {
                color: '#00ffff',
            },
        },
        graphic: [{
        	id: 'logo',
			type: 'image',
			right: '8%',
			bottom: '15%',
			z: '1000',
			style: {
		        image: 'http://www.100ec.cn/Public/home/images/dsb-logo.png',
		        width: 200,
		        height: 60,
		        opacity: 0.1
		    },
		    draggable: true
        }],
        //x轴配置
	    xAxis: {
	        type: 'category',
	        data: xdata,
	        "axisLine": {
	            lineStyle: {
	                color: '#1A2139',
	                width: 1,
	                type: "solid"
	            }
	        },
	        //刻度以及文字配置
	        axisLabel: {
	            textStyle: {
	                color: '#8798D6'
	            },
	            interval: config.eq == 'mb' ? xdata.length - 2 : (xdata.length > 14 ? (xdata.length > 20 ? 3 : 1) : 0), //刻度间隔
            	// rotate: 45,//倾斜45度
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
	                color: "#00c7ff",
	                width: 1,
	                type: "solid"
	            },
	        },
	        //基准线
	        splitLine: {
	            show: true,
	            lineStyle: {
	                color: '#1A2139'
	            }
	        },
	        axisTick: {
	            show: false,
	        },
	        //刻度配置
	        axisLabel: {
	            textStyle: {
	                color: '#0BC4E2'
	            }
	        },
	        name: y1name + '/' + config.data.dw,
	        nameTextStyle: {
	        	color: '#8798D6',
	        	align: 'right'
	        },
	    },
	    ],
        //数据表成图配置;
	    series: [{
            name: y1name,
	        data: y1data,
	        type: 'line',
        	smooth: true,
        	z: 2,
	        label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#0BC4E2',
                }
            },
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#0BC4E2',
                }
            },
            itemStyle: {
				normal: {
					color: '#0BC4E2',
					label: {
                        show: true,
                        position: "top",
                        
                    },
		            areaStyle: { 
						//color: '#94C9EC'
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(7,46,101,0.1)'
						}, {
							offset: 1,
							color: 'rgba(0,166,246,0.7)'
						}]),
		            }
				}
            },
	    }, ]
	}

	if(config.data.ydata2 && config.data.ydata2.length > 0) {
		var y2data = config.data.ydata2
		option.yAxis.push({
			name: '%',
            type: 'value',
            position: 'right',
            axisLabel: {
                textStyle: {
                    color: '#E635D8',
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
	        	color: '#8798D6',
	        	align: 'right'
	        },
		})
		option.series.push({
			name: y2name,
            yAxisIndex: 1,
            type: 'line',
            z: 1,
        	smooth: true,//弧线
            data: y2data,//数据
            itemStyle: {
                normal: {
                    color: '#E635D8',
					label: {
                        show: true,
                        position: "top",
	                    // color: '#E635D8',
                        
                    },
		            areaStyle: { 
						//color: '#94C9EC'
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(230,53,216,0.1)'
						}, {
							offset: 1,
							color: 'rgba(230,53,216,0.1)'
						}]),
		            }
                },
            },
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#E635D8',
                }
            },
		})
	}
	

	config.el.setOption(option,true);
}

function pjEchartsModule (config) {
	config.myChart.clear();
	var grade = config.data1.grade //评级
	var buy = config.data1.buy //综合指数 * 100
	var pre = config.data1.pre //反馈率 + %
	var feedback = config.data1.feedback //回复时效性 * 100
	var score = config.data1['score_ave'] //满意度 * 10
	var sexData = [];//性别分布饼图数据
	config.data2.sex.forEach(function(ele) {
		sexData.push({
			name: ele['name'] + '性占比',
			value: ele['pre']
		})
	})
	var moneyDataX = []; //投诉涉及金额分布数据
	var moneyDataY = []; //投诉涉及金额分布数据
	config.data2.money.forEach(function(ele) {
		if(ele['pre'] != 0) {
			moneyDataX.push(ele['name'])
			moneyDataY.push(ele['pre'])
		}
	})
	var problemDataX = []; //投诉问题分布数据
	var problemDataY = []; //投诉问题分布数据
	config.data2.problem.forEach(function(ele) {
		if(ele['pre'] != 0) {
			problemDataX.push(ele['name'])
			problemDataY.push(ele['pre'])
		}
		
	})
	var areaDataX = []; //投诉所在地分布数据
	var areaDataY = []; //投诉所在地分布数据
	config.data2.area.forEach(function(ele) {
		if(ele['pre'] != 0) {
			if(ele['name'].indexOf('省') != -1) {
				areaDataX.push(ele['name'].replace('省', ''))
			}else if(ele['name'].indexOf('市') != -1) {
				areaDataX.push(ele['name'].replace('市', ''))
			}else if(ele['name'].indexOf('回族自治区') != -1) {
				areaDataX.push(ele['name'].replace('回族自治区', ''))
			}else if(ele['name'].indexOf('维吾尔自治区') != -1) {
				areaDataX.push(ele['name'].replace('维吾尔自治区', ''))
			}else if(ele['name'].indexOf('壮族自治区') != -1) {
				areaDataX.push(ele['name'].replace('壮族自治区', ''))
			}else if(ele['name'].indexOf('自治区') != -1) {
				areaDataX.push(ele['name'].replace('自治区', ''))
			}else {
				areaDataX.push(ele['name'])
			}
			
			areaDataY.push(ele['pre'])
		}
		
	})
	
	var option = {
		title: [
			{
		        text: '评级等级：' + config.data1.grade,
		        // itemGap: 24,
		        left: '40',
		        top: config.eq == 'pc' ?  '2%' : '4%',
		        textStyle: {
		            color: '#00ffff',
		            fontStyle: 'normal',
		            fontSize: 16
		        },	 			
	 		},
			{
		        text: '投诉涉及金额占比',
		        // itemGap: 24,
		        left: config.eq == 'pc' ? '51%' : 'center',
		        top: config.eq == 'pc' ? '2%' : '23%',
		        textStyle: {
		            color: '#00ffff',
		            fontStyle: 'normal',
		            fontSize: 16
		        },	 			
	 		},
			{
		        text: '投诉问题占比',
		        // itemGap: 24,
		        left: config.eq == 'pc' ? '40' : 'center',
		        top: config.eq == 'pc' ? '30%' : '50%',
		        textStyle: {
		            color: '#00ffff',
		            fontStyle: 'normal',
		            fontSize: 16
		        },	 			
	 		},
			{
		        text: '投诉者所在地占比',
		        // itemGap: 24,
		        left: config.eq == 'pc' ? '40' : 'center',
		        top: config.eq == 'pc' ? '63%' : '75%',
		        textStyle: {
		            color: '#00ffff',
		            fontStyle: 'normal',
		            fontSize: 16
		        },	 			
	 		},
 		],
 		graphic: [{
 		 	id: 'logo',
			type: 'image',
			right: 'center',
			top: 'center',
			z: '1000',
			style: {
		        image: 'http://www.100ec.cn/Public/home/images/dsb-logo.png',
		        width: 160,
		        height: 60,
		        opacity: 0.2
		    },
		    draggable: true		
 		},],
        //鼠标悬停配置
	    tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                	color: 'dodgerblue',
                },
                lineStyle: {
                	color: 'dodgerblue',
                },
                label: {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                    textStyle: {
		                color: '#00ffff',
                    },
                },
            },
            formatter: function(param) {
            	if(param[0].axisIndex == 0) {
            		return '评级等级：' + config.data1.grade
            	}
            	return param[0].seriesName + '<br />' + param[0].marker + param[0].axisValue + '：' + param[0].data + '%'
            },
            backgroundColor: 'rgba(0,0,0,0.9)',
            extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
            textStyle: {
                color: '#00ffff',
            },
        },
		grid: [
	    	{
	    		width:  config.eq == 'pc' ?'15%' : '30%',
	    		height: config.eq == 'pc' ? '20%' : '14%',
	    		x:  config.eq == 'pc' ? '8%' : '17%',
	    		y: '7%',
	    	},
	    	{
	    		width: config.eq == 'pc' ? '45%' : '85%',
	    		height: config.eq == 'pc' ? '16%' : '14%' ,
	    		x2: config.eq == 'pc' ? '4%' : 'center',
	    		y: config.eq == 'pc' ? '8%' : '28%',
	    	},
	    	{
	    		width: config.eq == 'pc' ? '92%' : '85%',
	    		height: config.eq == 'pc' ? '20%' : '14%',
	    		x: 'center',
	    		y: config.eq == 'pc' ? '37%' : '55%',
	    	},
	    	{
	    		width: config.eq == 'pc' ? '92%' : '85%' ,
	    		height: config.eq == 'pc' ? '20%' : '14%',
	    		x: 'center',
	    		y: config.eq == 'pc' ? '70%' : '80%',
	    	},
	    ],
	    xAxis: [
	    	{
	    		gridIndex: 0,
	    		show: false,
	    	},
	    	{
	    		gridIndex: 1,
	    		show: true,
	    		name: '类型',
	    		boundaryGap: false,
        		type: 'category',
	    		data: moneyDataX,
	    		"axisLine": {
		            lineStyle: {
		                color: '#1A2139',
		                width: 1,
		                type: "solid"
		            }
		        },
		        //刻度以及文字配置
		        axisLabel: {
		            textStyle: {
		                color: '#8798D6'
		            },
		            interval:  0, //刻度间隔
	            	rotate: config.eq == 'pc' ?  0 : 45,//倾斜45度
		        },
		        "axisTick": {
		            "show": false
		        },
	    	},
	    	{
	    		gridIndex: 2,
	    		show: true,
	    		boundaryGap: false,
	    		name: '类型',
        		type: 'category',
	    		data: problemDataX,

	    		"axisLine": {
		            lineStyle: {
		                color: '#1A2139',
		                width: 1,
		                type: "solid"
		            }
		        },
		        //刻度以及文字配置
		        axisLabel: {
		            textStyle: {
		                color: '#8798D6'
		            },
		            interval:  0, //刻度间隔
	            	rotate: config.eq == 'pc' ?  0 : 45,//倾斜45度
		        },
		        "axisTick": {
		            "show": false
		        },
	    	},
	    	{
	    		gridIndex: 3,
	    		show: true,
	    		boundaryGap: false,
	    		name: '类型',
        		type: 'category',
	    		data: areaDataX,

	    		"axisLine": {
		            lineStyle: {
		                color: '#1A2139',
		                width: 1,
		                type: "solid"
		            }
		        },
		        //刻度以及文字配置
		        axisLabel: {
		            textStyle: {
		                color: '#8798D6'
		            },
	            	interval: 0, //刻度间隔
	            	rotate: config.eq == 'pc' ?  0 : 45,//倾斜45度
		        },
		        "axisTick": {
		            "show": false
		        },
	    	}
	    ],
        yAxis: [
        	{
        		gridIndex: 0,
        		type: 'category',
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
		        	textStyle: {
		        		color: '#8798D6'
		        	}
		        },
		        data: [ '用户满意度', '反馈时效性', '平台反馈率','综合指数']
        	},
        	{
        		gridIndex: 1,
	            type: "value",
	            name: "%",
	            nameTextStyle: {
	                color: "#8798D6"
	            },
	            "axisLine": {
		            show:false,
		            lineStyle: {
		                color: "#00c7ff",
		                width: 1,
		                type: "solid"
		            },
		        },
		        //基准线
		        splitLine: {
		            show: true,
		            lineStyle: {
		                color: '#1A2139'
		            }
		        },
		        axisTick: {
		            show: false,
		        },
		        //刻度配置
		        axisLabel: {
		            show: false,
		            textStyle: {
		                color: '#8798D6'
		            }
		        },
	        },
        	{
        		gridIndex: 2,
	            type: "value",
	            name: "%",
	            nameTextStyle: {
	                color: "#8798D6"
	            },
	            "axisLine": {
		            show:false,
		            lineStyle: {
		                color: "#00c7ff",
		                width: 1,
		                type: "solid"
		            },
		        },
		        //基准线
		        splitLine: {
		            show: true,
		            lineStyle: {
		                color: '#1A2139'
		            }
		        },
		        axisTick: {
		            show: false,
		        },
		        //刻度配置
		        axisLabel: {
		            show: false,
		            textStyle: {
		                color: '#8798D6'
		            }
		        },
	        },
        	{
        		gridIndex: 3,
	            type: "value",
	            name: "%",
	            nameTextStyle: {
	                color: "#8798D6"
	            },
	            "axisLine": {
		            show:false,
		            lineStyle: {
		                color: "#00c7ff",
		                width: 1,
		                type: "solid"
		            },
		        },
		        //基准线
		        splitLine: {
		            show: true,
		            lineStyle: {
		                color: '#1A2139'
		            }
		        },
		        axisTick: {
		            show: false,
		        },
		        //刻度配置
		        axisLabel: {
		            show: false,
		            textStyle: {
		                color: '#8798D6'
		            }
		        },
	        }
    	],
    	series: [
    		{
	            name: '分数',
	            type: 'bar',
    			yAxisIndex: 0,
    			gridIndex: 0,
    			data: [score*10, feedback*100, pre*1, buy*100, ],
    			label: {
	                normal: {
	                    show: true,
	                    position: 'right',
	                    textStyle: {
	                        color: '#0BC4E2',
	                        fontSize: '12',
	                    },
	                    formatter: function(param) {
	                    	if(param.dataIndex == 0) {
	                    		var data = Math.floor(param.value*100)/1000
	                    	}else if(param.dataIndex == 1 || param.dataIndex == 3) {
	                    		var data = Math.floor(param.value*10)/1000
	                    	}else {
	                    		var data = param.value
	                    	}
	                    	return data
	                    }
	                }
	            },
	            barWidth: 12,
	            itemStyle: {
	                normal: {
	                    color: '#00ffff',
		            	barBorderRadius: [5,5,5,5]
	                }
	            },

    		},
    		{
	            name: '性别分布',
                type: 'pie',
                clockWise: false,
                radius: [0, 80],
                color: ['dodgerblue', '#E635D8'],
                center:  config.eq == 'pc' ?  ['37%', '16%'] : ['77%', '14%'],
		        label: {
		            normal: {
		                position: 'inner',
		                formatter: function(param) {
		                	// console.log(param)
		                	return param.name + '\r\n\r\n' + param.percent + '%'
		                },
		                textStyle: {
		                    color: '#fff',
		                    fontSize: 14,
		                }
		            }
		        },
		        itemStyle: {
		            normal: {
		                borderWidth: 4,
		                borderColor: '#11182B',
		            },
		        },
                data: sexData

    		},
    		{
	            name: '投诉金额占比',
	            type: 'line',
        		yAxisIndex: 1,
    			xAxisIndex: 1,
    			data: moneyDataY,
	            smooth: true,
				z: 2,
		        label: {
	                normal: {
	                    show: true,
	                    position: 'top',
	                    color: '#0BC4E2',
	                }
	            },
	            lineStyle: {
	                normal: {
	                    width: 3,
	                    color: '#0BC4E2',
	                }
	            },
	            itemStyle: {
					normal: {
						color: '#0BC4E2',
						label: {
	                        show: true,
	                        position: "top",
	                        
	                    },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,46,101,0.1)'
							}, {
								offset: 1,
								color: 'rgba(0,166,246,0.7)'
							}]),
			            }
					}
	            },

    		},
    		{
	            name: '投诉问题分布',
	            type: 'line',
        		yAxisIndex: 2,
    			xAxisIndex: 2,
    			data: problemDataY,
	            smooth: true,
				z: 2,
		        label: {
	                normal: {
	                    show: true,
	                    position: 'top',
	                    color: '#0BC4E2',
	                }
	            },
	            lineStyle: {
	                normal: {
	                    width: 3,
	                    color: '#0BC4E2',
	                }
	            },
	            itemStyle: {
					normal: {
						color: '#0BC4E2',
						label: {
	                        show: true,
	                        position: "top",
	                        
	                    },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,46,101,0.1)'
							}, {
								offset: 1,
								color: 'rgba(0,166,246,0.7)'
							}]),
			            }
					}
	            },

    		},
    		{
	            name: '用户所在地分布',
	            type: 'line',
        		yAxisIndex: 3,
    			xAxisIndex: 3,
    			data: areaDataY,
	            smooth: true,
				z: 2,
		        label: {
	                normal: {
	                    show: true,
	                    position: 'top',
	                    color: '#0BC4E2',
	                }
	            },
	            lineStyle: {
	                normal: {
	                    width: 3,
	                    color: '#0BC4E2',
	                }
	            },
	            itemStyle: {
					normal: {
						color: '#0BC4E2',
						label: {
	                        show: true,
	                        position: "top",
	                        
	                    },
			            areaStyle: { 
							//color: '#94C9EC'
							color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
								offset: 0,
								color: 'rgba(7,46,101,0.1)'
							}, {
								offset: 1,
								color: 'rgba(0,166,246,0.7)'
							}]),
			            }
					}
	            },

    		},
    	]

	}

	config.myChart.setOption(option,true);
}

function rzEchartsModule(config) {
	config.el.clear();
	var data = config.data.sort(function(a,b){
		return a.date - b.date
	})
	var xData = []
	var yData = []
	var y2Data = []
	data.forEach(function(ele){
		xData.push(ele['shares'])
		yData.push(ele['money'])
		y2Data.push(ele['a100'] + ele['a101'])
	})
	var option = {

		title: {
	        text: config.cpy + '融资数据统计',
	        x: 'center',
	        textStyle: {
            	color: '#fff'
            },
	    },
	    legend: {
        	// show: isScreenShot? false : true ,
            data: ['融资金额'],
            right: '20',
            top: '0',
            textStyle: {
            	color: '#fff',
            },
        },
        grid: {
	        left: '3%',
	        right: '3%',
	        top: '80',
	        bottom: '10%',
	        containLabel: true
	    },
        graphic: [{
        	id: 'logo',
			type: 'image',
			right: '8%',
			bottom: '15%',
			z: '1000',
			style: {
		        image: 'http://www.100ec.cn/Public/home/images/dsb-logo.png',
		        width: 200,
		        height: 60,
		        opacity: 0.1
		    },
		    draggable: true
        }],
        //x轴配置
	    xAxis: {
	        type: 'category',
	        data: xData,
	        "axisLine": {
	            lineStyle: {
	                color: '#1A2139',
	                width: 1,
	                type: "solid"
	            }
	        },
	        //刻度以及文字配置
	        axisLabel: {
	            textStyle: {
	                color: '#8798D6'
	            },
	            interval: xData.length > 14 ? 1 : 0, //刻度间隔
            	// rotate: 45,//倾斜45度
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
	                color: "#00c7ff",
	                width: 1,
	                type: "solid"
	            },
	        },
	        //基准线
	        splitLine: {
	            show: true,
	            lineStyle: {
	                color: '#1A2139'
	            }
	        },
	        axisTick: {
	            show: false,
	        },
	        //刻度配置
	        axisLabel: {
	            show: false,
	            textStyle: {
	                color: '#8798D6'
	            }
	        },
	        name: '融资金额',
	        nameTextStyle: {
	            show: false,
	        	color: '#8798D6',
	        	align: 'right'
	        },
	    },
	    ],
        //数据表成图配置;
	    series: [{
            name: '融资金额',
	        data: yData,
	        type: 'line',
        	smooth: true,
        	z: 2,
	        label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#0BC4E2',
                }
            },
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#0BC4E2',
                }
            },
            itemStyle: {
				normal: {
					color: '#0BC4E2',
					label: {
                        show: true,
                        position: "top",
                        formatter: function(param){
                        	return y2Data[param.dataIndex]
                        	
                        }
                    },
		            areaStyle: { 
						//color: '#94C9EC'
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(7,46,101,0.1)'
						}, {
							offset: 1,
							color: 'rgba(0,166,246,0.7)'
						}]),
		            }
				}
            },
	    }, ]
	}

	config.el.setOption(option,true);
}

function tzEchartsModule (config) {
	config.el.clear();
	var arr = [
		{
			name: '行业',
			key: 'cate',
			xdata: [],
			ydata1: [],
			ydata2: []
		},{
			name: '地区',
			key: 'a106',
			xdata: [],
			ydata1: [],
			ydata2: []
		},{
			name: '时间',
			key: 'a104',
			xdata: [],
			ydata1: [],
			ydata2: []
		},{
			name: '轮次',
			key: 'shares',
			xdata: [],
			ydata1: [],
			ydata2: []
		},
	]
	config.data = config.data.sort(function(a, b){
		return a.date - b.date
	})
	// console.log(config.data)
	arr.forEach(function(ele){
		var newD = []
		config.data.forEach(function(item, i){
			var d = -1

			if(i != 0) {
				newD.forEach(function(x, index){
					
					if(x.name == item[ele['key']]) {
						d = index
					}
				})
			}
			
			if(d != -1) {
				newD[d].ydata1 += item['money']
				newD[d].ydata2 += 1
			}else {
				newD.push({
					name: item[ele['key']],
					ydata1: item['money'],
					ydata2: 1
				})
			}
		})
		newD.sort(function(a, b){
			return a.ydata2 - b.ydata2
		}).forEach(function(item) {
			if(ele.name == '地区') {
				var address
				address = item['name'].replace('省', '').replace('市', '').replace('特别行政区', '')
				ele['xdata'].push(address)
			}else {
				ele['xdata'].push(item['name'])
			}
			
			ele['ydata1'].push(item['ydata1'])
			ele['ydata2'].push(item['ydata2'])
		})


	})


	var option = {
		
 		graphic: [{
 		 	id: 'logo',
			type: 'image',
			right: 'center',
			top: 'center',
			z: '1000',
			style: {
		        image: 'http://www.100ec.cn/Public/home/images/dsb-logo.png',
		        width: 160,
		        height: 60,
		        opacity: 0.2
		    },
		    draggable: true		
 		},],
		title: [
			{
		        text: config.cpy + '投资领域分布',
		        y: '0',
		        x: config.eq == 'pc' ? '15%' : '10',
		        textStyle: {
	            	color: '#fff',
	            	fontSize: 16,
	            	fontWeight: 'normal'
	            },
			},
			{
		        text: config.cpy + '投资地区分布',
		        y: config.eq == 'pc' ? '0' : '210',
		        x: config.eq == 'pc' ? '65%' : '10',
		        textStyle: {
	            	color: '#fff',
	            	fontSize: 16,
	            	fontWeight: 'normal'
	            },
			},
			{
		        text: config.cpy + '投资时间分布',
		        y: config.eq == 'pc' ? '180' : '400',
		        x: config.eq == 'pc' ? '15%' : '10',
		        textStyle: {
	            	color: '#fff',
	            	fontSize: 16,
	            	fontWeight: 'normal'
	            },
			},
			{
		        text: config.cpy + '投资轮次分布',
		        y: config.eq == 'pc' ? '180' : '600',
		        x: config.eq == 'pc' ? '65%' : '10',
		        textStyle: {
	            	color: '#fff',
	            	fontSize: 16,
	            	fontWeight: 'normal'
	            },
			},
		],
		grid: [
	    	{
	    		width: config.eq == 'pc' ? '45%' : '90%',
	    		height:config.eq == 'pc' ? '30%': '18%',
	    		x: config.eq == 'pc' ? '2.5%': 'center',
	    		y: config.eq == 'pc' ? '8%' : '5%',
	    	},
	    	{
	    		width:  config.eq == 'pc' ? '45%' : '90%',
	    		height: config.eq == 'pc' ? '30%': '18%',
	    		x2: config.eq == 'pc' ? '2.5%': 'center',
	    		y: config.eq == 'pc' ? '8%' : '28%',
	    	},
	    	{
	    		width:  config.eq == 'pc' ? '45%' : '90%',
	    		height: config.eq == 'pc' ? '30%': '18%',
	    		x: config.eq == 'pc' ? '2.5%': 'center',
	    		y: config.eq == 'pc' ? '55%' : '53%',
	    	},
	    	{
	    		width:  config.eq == 'pc' ? '45%' : '90%',
	    		height: config.eq == 'pc' ? '30%': '18%',
	    		x2: config.eq == 'pc' ? '2.5%': 'center',
	    		y:  config.eq == 'pc' ? '55%' : '78%',
	    	},
	    ],
	    legend: {
        	// show: isScreenShot? false : true ,
            data: ['金额/人民币', '数量'],
            right: config.eq == 'pc' ?'center': 10,
            top: '0',
            textStyle: {
            	color: '#fff',
            },
        },
        //鼠标悬停配置
	    tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                	color: 'dodgerblue',
                },
                lineStyle: {
                	color: 'dodgerblue',
                },
                label: {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
                    textStyle: {
		                color: '#00ffff',
                    },
                },
            },
            backgroundColor: 'rgba(0,0,0,0.9)',
            extraCssText: 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);',
            textStyle: {
                color: '#00ffff',
            },
        },
	    xAxis: [],
	    yAxis: [],
	    series: []
	}
	arr.forEach(function(ele, index) {
		option.xAxis.push({
			gridIndex: index,
    		show: true,
    		name: ele['name'],
    		boundaryGap: false,
    		type: 'category',
    		data: ele['xdata'],
    		"axisLine": {
	            lineStyle: {
	                color: '#1A2139',
	                width: 1,
	                type: "solid"
	            }
	        },
	        //刻度以及文字配置
	        axisLabel: {
	            textStyle: {
	                color: '#8798D6'
	            },
	            interval:  0, //刻度间隔
            	// rotate: 45,//倾斜45度
	        },
	        "axisTick": {
	            "show": false
	        },
		})
		option.yAxis.push({
			gridIndex: index,
	        type: 'value',
	        "axisLine": {
	            show:false,
	            lineStyle: {
	                color: "#00c7ff",
	                width: 1,
	                type: "solid"
	            },
	        },
	        //基准线
	        splitLine: {
	            show: true,
	            lineStyle: {
	                color: '#1A2139'
	            }
	        },
	        axisTick: {
	            show: false,
	        },
	        //刻度配置
	        axisLabel: {
	            show: false,
	        },
	        name: '',
	        nameTextStyle: {
	        	color: '#8798D6',
	        	align: 'right'
	        },
	    },{
			gridIndex: index,
	    	name: '',
            type: 'value',
            position: 'right',
            axisLabel: {
	            show: false,
                textStyle: {
                    color: '#8798D6',
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
	        },
	        nameTextStyle: {
	        	color: '#8798D6',
	        	align: 'right'
	        },
		})
		option.series.push({
            name: '金额/人民币',
	        data: ele['ydata1'],
	        // gridIndex: index,
	        yAxisIndex: index * 2,
	        xAxisIndex: index,
	        type: 'line',
        	smooth: true,
        	z: 2,
	        label: {
                normal: {
                    show: true,
                    position: 'top',
                    color: '#0BC4E2',
                    formatter: function(param) {
                    	if(param.value == 0){
                    		return '未透露'
                    	}else if(param.value < 10000) {
                    		return param.value
                    	}else if(param.value < 100000000) {
                    		return Math.floor(param.value / 10000) + '万'
                    	}else {
                    		return Math.floor(param.value/100000000)+ '亿'
                    	}
                    }
                }
            },
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#0BC4E2',
                }
            },
            itemStyle: {
				normal: {
					color: '#0BC4E2',
					label: {
                        show: true,
                        position: "top",
                        
                    },
		            areaStyle: { 
						//color: '#94C9EC'
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(7,46,101,0.1)'
						}, {
							offset: 1,
							color: 'rgba(0,166,246,0.7)'
						}]),
		            }
				}
            },
	    },{
			name: '数量',
	        // gridIndex: index,
	        xAxisIndex: index,
            yAxisIndex: index * 2 + 1,
            type: 'line',
            z: 1,
        	smooth: true,//弧线
            data: ele['ydata2'],//数据
            itemStyle: {
                normal: {
                    color: '#E635D8',
					label: {
                        show: false,
                        position: "top",
	                    // color: '#E635D8',
                        
                    },
		            areaStyle: { 
						//color: '#94C9EC'
						color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(230,53,216,0.1)'
						}, {
							offset: 1,
							color: 'rgba(230,53,216,0.1)'
						}]),
		            }
                },
            },
            lineStyle: {
                normal: {
                    width: 3,
                    color: '#E635D8',
                }
            },
		})
	})


	config.el.setOption(option,true);
}