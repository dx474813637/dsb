function showEchartsUnicorn (myChart, yKey, data, type, isScreenShot, ttitle, sy) {
	// console.log(data)
	myChart.clear();
	var keywords
	var yDw;
	var ytitle;
	var yData = [];
	var xData = [];
	var color = [];
	var color2 = ['#5B9BD5', '#D55B5B', '#635BD5', '#f90'];
	var keyStr = []
	if(yKey) {
		keywords = [yKey]
		dataType.forEach(function(ele) {
			if(ele['k'] == yKey){
				ytitle = ele['text'];
				yDw =  ele['dw'] ?  ele['dw'] : ''
			}
		})
	}else {
		ytitle = '评级';
		keywords = ['pre', 'feedback', 'score_ave', 'buy']
	}
	keywords.forEach(function(ele){
		dataType.forEach(function(item){
			ele == item['k'] ? keyStr.push(item['text']) : '';
		})
	})
	data.forEach(function(ele, index) {
		var dTime 

		if(ele['time'] == '618') {
			dTime = '618'
		}else{
			dataTime.forEach(function(item){item['id'] == ele['time'] ? dTime = item['text'] : ''})

		}
		xData.push(ele['year']+ '年' + dTime)
		keywords.forEach(function(item2, i){
			if(index == 0) {
				yData[i] = {}
				yData[i][item2] = []
			} 
			if(yKey) {
				yData[i][item2].push(ele[item2])
			}else{

				if(item2 == 'pre') {
					yData[i][item2].push(ele[item2]/100)
				}else if(item2 == 'score_ave') {
					yData[i][item2].push(ele[item2] * 1000/10000 )
					// console.log(yData[i][item2])
				}else {
					yData[i][item2].push(ele[item2])
				}
			}
		})
	})
	// console.log(xData, yData)
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	
	for(var i = 0 ; i < keywords.length ; i++) {
		color.push('hsla(' + 360*i /keywords.length + ', 100%, 62%, 1)')
	}
	option = {
		// color: [color[0],'#f90'],
		//标题
	    title: {
	        text: isScreenShot? '' : ttitle + '电商消费历年' + ytitle +'数据对比图',
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
        legend: {
        	show: yKey ? false : true,
            data: keyStr,
            right: $(window).width() > 768 ? ( isScreenShot? '100' : '10%' ): '10',
            top: isScreenShot? '80' : '40',
            textStyle: {
            	color: isScreenShot? '#666' :'#fff',
            },
        	// orient: isScreenShot? 'vertical' :'horizontal',
        },
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
                type: yKey ? 'cross' : 'shadow',
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

					if(params[i].seriesName == '平台回复率') {
						str += '<br/>' + colorC + params[i].seriesName + '：' + params[i].data*100 + '%' 
					}else if(params[i].seriesName == '用户满意度') {
						str += '<br/>' + colorC + params[i].seriesName + '：' + Math.floor(params[i].data* 10000)/1000
					}else {
						str += '<br/>' + colorC + params[i].seriesName + '：' + params[i].data 
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
	            end: $(window).width() > 768 ? (xData.length > 6 ? 6/xData.length * 100 : 100) : (xData.length > 3 ? 3/xData.length * 100 : 100),
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
	    series: []
	};

	for(var i = 0 ; i < keywords.length; i ++) {
		option.series.push({
            name: keyStr[i],
	        data: yData[i][keywords[i]], 
	        type: 'bar',
        	smooth: true,
            lineStyle: {
                normal: {
                    width: 2,
                    color: isScreenShot? color2[i] : (yKey ? '#00ffff' : color[i]),
                }
            },
            itemStyle: {
				normal: {
					color:  isScreenShot? color2[i] : (yKey ? '#00ffff' : color[i]),
					label: {
	                    show: true,
	                    position: "top",
		                formatter: function(params) {
		                	if(!yKey){
			                    if(params.seriesName == "平台回复率") {
			                    	return params.data * 100 + '%'
			                    } else if(params.seriesName == "用户满意度"){
			                    	return Math.floor(params.data* 10000)/1000
			                    } else {
			                    	return params.data
			                    }
		                	}else {
		                		return params.data
		                	}
		                },
	                }
				}
            }
		})
	}
	

	
	console.log(sy)
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