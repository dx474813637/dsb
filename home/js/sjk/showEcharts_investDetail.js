function dataCount(data, info, type){
	// console.log(data)
	var newData = [];
	var xData = [];
	var yData = [];
	var arr = []
	if(info['x'] == 'shares') {
		dataRound.slice(1).forEach(function(ele){
			xData.push(ele['title']);
			yData.push(0)
			arr.push(ele['id']);
		})
		data.forEach(function(ele){
			arr.forEach(function(item, index){
				if(ele[info['x']].indexOf(item) != -1) {
					yData[index] ++
				}
			})
		})
		var data1 = [];
		var data2 = [];
		yData.forEach(function(ele, index){
			if(ele != 0) {
				data1.push(xData[index])
				data2.push(ele)
			}
		})
		xData = data1;
		yData = data2;
	}else if(info['x'] == 'a105'){
		xData = ['第一季度', '第二季度', '第三季度', '第四季度'];
		yData = [0,0,0,0]
		data.forEach(function(ele){
			// console.log(ele[info['x']])
			yData[Math.floor((ele[info['x']] - 1)/3)]++
		})
	}else {
		data.forEach(function(ele){
			if(xData.indexOf(ele[info['x']]) == -1 ){
				xData.push(ele[info['x']]);
				yData.push(1);
			}else {
				yData[xData.indexOf(ele[info['x']])]++
			}
		})
	}
	// console.log(xData, yData)
	

	if(type == 'pie') {
		xData.forEach(function(ele, index){
			newData.push({
				name: ele,
				value: yData[index],
			})
		})
		return newData
	}else{

		return {
			xData: xData,
			yData: yData
		}
	}
	
		
}
function dataEcharts(data, info, type) {
	// console.log(data)
	var newData = [];
	var xData = [];
	var yData = [];
	data.forEach(function(ele){
		if(ele[info['y']] != 0) {
			// if(xData.indexOf(ele[info['x']]) == -1 ) {
				xData.push(ele[info['x']])
				yData.push(ele[info['y']])
			// }else {
				// yData[xData.indexOf(ele[info['x']])] += ele[info['y']]
			// }
		}
		
	})

	if(type == 'pie') {
		xData.forEach(function(ele, index){
			newData.push({
				name: ele,
				value: yData[index],
			})
		})
		return newData
	}else{

		return {
			xData: xData,
			yData: yData
		}
	}
	
}
function tzEcharts (data, info, type) {
	// console.log(data)
	var x = [];
	var y1 = [];
	var y2 = [];
	var key = info['x'];

	var arr = [];

	data.forEach(function(ele, index){
		if(key == 'a106') {
			ele[key] = ele[key].replace('省', '').replace('市', '').replace('特别行政区', '')
		}
		if(index == 0) {
			arr.push({
				name: ele[key],
				y1: ele['money'],
				y2: 1
			})
		}else {
			var x ;

			var num = -1;
			arr.forEach(function(item, i){
				if(item.name == ele[key]) {
					num = i 
				}
			})
			if(num != -1) {
				arr[num].y1 += ele['money'];
				arr[num].y2 ++
			}else {
				arr.push({
					name: ele[key],
					y1: ele['money'],
					y2: 1
				})
			}
		}
	})

	arr.sort(function(a, b){
		return a.y2 - b.y2
	}).forEach(function(ele, index){
		x.push(ele['name']);
		y1.push(ele['y1']);
		y2.push(ele['y2'])
	})

	// data.forEach(function(ele, index){
	// 	if(key == 'a106') {
	// 		ele[key] = ele[key].replace('省', '').replace('市', '').replace('特别行政区', '')
	// 	}
	// 	var i = x.indexOf(ele[key])
	// 	if(i == -1) {
	// 		x.push(ele[key]);
	// 		y1.push(ele['money']);
	// 		y2.push(1)
	// 	}else {
	// 		y1[i] += ele['money'];
	// 		y2[i] ++
	// 	}
	// })
	return {
		xData: x,
		yData: y1,
		yData2: y2
	}
}

function showEchart(myChart, data, type, isScreenShot, info) {
	// console.log(info)
	myChart.clear();
	// var key = info['key'];
	// var time = info['time'];
	// var appName = info['appName'];
	// var keyName = info['keyName'];
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	if(info['type'] == 'rz') {
		var title =  isScreenShot? '' : info['cpy'] +  '融资' + info['title']
		$('#screenName2 p').html(info['cpy'] + '融资' + info['title'])
	}else {
		var title =  isScreenShot? '' :  info['title']
		$('#screenName2 p').html(info['title'] )

	}
	
	var text = info['text'];
	var dw = info['dw'];
	var color = [];
	if(type == 'pie'){
		var oData = data;
		// data[key].forEach(function(ele){
		// 	oData.push({
		// 		name: ele['attr_name'],
		// 		value: Math.floor(ele['ratio']*100)/100,
		// 	})
		// })
		for(var i = 0 ; i < oData.length; i++) {
			color.push( isScreenShot ? 'hsla(' + 360*i /oData.length + ', 100%, 38%, 1)' : 'hsla(' + 360*i /oData.length + ', 100%, 62%, 1)')
		}

		var option = {
			title: {
		        text: title,
		        textStyle: {
		            color: '#fff',
		            fontSize: '20'
		        },
		        left: 'center',
		        top: 30,
			},
		    color: color,
		    tooltip: {
		        trigger: 'item',
                formatter: function(params){
		        	var v = params.value > 10000 ? (params.value > 100000000 ? params.value/100000000 + '亿': params.value/10000 + '万') : params.value;
		        	
		        	return params.name + '：' + v + dw + '（' + params.percent + '%）'
                },
		    },
		    legend: {
		    	show: isScreenShot ? false : true,
		         orient: $(window).width() > 768 ? "vertical" : 'horizontal',
		         top: $(window).width() > 768 ? "middle" : 'auto',
		         right:  $(window).width() > 768 ? "5%" : 'auto',
		         bottom:  $(window).width() > 768 ? "auto" : 0,
		         textStyle: {
		             color: isScreenShot ? '#333' :'#f2f2f2',
		             fontSize: 14,

		         },
		         icon: 'roundRect',
		         data: oData,
		     },
		    series: [{
		        name: text,
		        type: 'pie',
		        startAngle: 45,
		        center: ['50%', '50%'] ,
		        radius:  $(window).width() > 768 ? ['40%', '55%'] : ['20%', '35%'] ,
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
				        	var v = params.value > 10000 ? (params.value > 100000000 ? Math.floor(params.value/10000000)/10 + '亿': Math.floor(params.value/1000)/10 + '万') : params.value;
				        	return params.name + '：' + v +  dw + '（' + params.percent + '%）'
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
	                    length: $(window).width() > 768 ? 20 : 5,
	                    length2: $(window).width() > 768 ? 20 : 5,
	                },
	                emphasis: {
	                    show: true
	                }
		        },

		        data: oData
		    }]
		};

	}else{
		// console.log(data)
		var xData = data['xData'];
		var yData = data['yData'];
		var yData2 = data['yData2'];
		var option = {
		    title: {
		        text: title,
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
		        bottom: isScreenShot? '20%' : '22%',
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
		            },
		            formatter: function(param) {
		            	return param >= 10000 ? (param >= 100000000 ? param/100000000 + '亿': param/10000 + '万') : param
		            }
		        },
		        name: '金额/人民币',
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
	            name: '金额',
		        data: yData,
				yAxisIndex: 0,
		        type: type,
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
	                	color:isScreenShot? 'transparent' :  new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgba(0,154,120,0.5)'
		                    },
		                    {
		                        offset: 1,
		                        color: 'rgba(0,0,0, 0)'
		                    }
		                ], false),
		                shadowColor: 'rgba(53,142,215, 0.4)', //阴影颜色
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
	                        formatter: function(params){
	                        	
					        	var v = params.value >= 10000 ? (params.value >= 100000000 ? params.value/100000000 + '亿': params.value/10000 + '万') : params.value;
					        	if(v == 0) {
					        		return '未透露'
					        	}
					        	return v + dw
	                        }
	                        
	                    }
					}
	            },
		    }]

		}
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
	if(yData2 && yData2.length > 0) {
		option.yAxis.push({
	        type: 'value',
	        position: 'right',
	        "axisLine": {
	            show:false,
	            lineStyle: {
	                width: 1,
	                type: "solid"
	            },
	        },
	        //基准线
	        splitLine: {
	            show: false,
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
	                color: isScreenShot? '#f90' : '#E635D8'
	            }
	        },
	        name: '数量',
	        nameTextStyle: {
	        	color: isScreenShot? '#f90' : '#E635D8',
	        },
	        nameGap: 25,
		})
		option.series.push({
			yAxisIndex: 1,
            name: '数量',
	        data: yData2,
	        type: type,
        	smooth: true,
            lineStyle: {
                normal: {
                    width: 2,
                    color: isScreenShot? '#f90' : '#E635D8',
                }
            },
            itemStyle: {
                normal: {
                    color: isScreenShot? '#f90' : '#E635D8',
					label: {
                        show: false,
                        position: "top",
	                    // color: '#E635D8',
                        
                    },
		            areaStyle: { 
						//color: '#94C9EC'
						color: isScreenShot? 'transparent' :  new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
							offset: 0,
							color: 'rgba(230,53,216,0.1)'
						}, {
							offset: 1,
							color: 'rgba(230,53,216,0.1)'
						}]),
		            }
                },
            },
	    })
	}

	myChart.setOption(option ,true);	//生成图表
}
