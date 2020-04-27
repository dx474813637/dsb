function dataCount(data, info, type){
	var newData = [];
	var xData = [];
	var obj = []
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
		// 有关月份数据统计
		// xData = []
		var monthArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
		var countArr = [0,0,0,0,0,0,0,0,0,0,0,0]
		data.forEach(function(ele){
			// console.log(ele[info['x']])
			// yData[Math.floor((ele[info['x']] - 1)/3)]++
			var index = monthArr.indexOf(ele[info['x']])
			if( index != -1 ) {
				countArr[index] ++ 
			}
		})
		if(info['text'].indexOf('月份') != -1) {
			countArr.forEach(function(ele, index){
				if(ele != 0) {
					xData.push(monthArr[index] + '月')
					yData.push(ele)
				}
			})
		}else {
			var y1 = countArr[0] + countArr[1] +countArr[2];
			var y2 = countArr[3] + countArr[4] +countArr[5];
			var y3 = countArr[6] + countArr[7] +countArr[8];
			var y4 = countArr[9] + countArr[10] +countArr[11];
			if(y1 != 0) {
				xData.push('第一季度');
				yData.push(y1)
			}
			if(y2 != 0) {
				xData.push('第二季度');
				yData.push(y2)
			}
			if(y3 != 0) {
				xData.push('第三季度');
				yData.push(y3)
			}
			if(y4 != 0) {
				xData.push('第四季度');
				yData.push(y4)
			}
		}
		
	}else if(info['x'] == 'a107' || info['x'] == 'a106') {
		var key = info['x'] == 'a107' ? '市' : '省'
		data.forEach(function(ele){
			var address = ele[info['x']]
			if( address[address.length - 1] == key) {
				address = address.slice(0, address.length - 1)
			}else if(info['x'] == 'a106' && address[address.length - 1] == '市') {
				address = address.slice(0, address.length - 1)
			}

			var i = xData.indexOf(address)
			if(i == -1 ) {

				obj.push({
					name: address,
					value: 1
				})
				xData.push(address)
			}else {
				obj[i]['value'] ++
				// yData[xData.indexOf(address)] += ele[info['y']]
			}
			// if(xData.indexOf(address) == -1 ){
			// 	xData.push(address);
			// 	yData.push(1);
			// }else {
			// 	yData[xData.indexOf(address)]++
			// }
		})
		xData = []
		obj.sort(function(a, b) {
			return b['value'] - a['value']
		}).forEach(function(ele){
			xData.push(ele['name'])
			yData.push(ele['value'])
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
	var newData = [];
	var obj = []
	var xData = [];
	var yData = [];
	if(info['x'] == 'a107' || info['x'] == 'a106') {
		var key = info['x'] == 'a107' ? '市' : '省'
		data.forEach(function(ele){
			if(ele[info['y']] != 0) {
				var address = ele[info['x']]
				if( address[address.length - 1] == key) {
					address = address.slice(0, address.length - 1)
				}else if(info['x'] == 'a106' && address[address.length - 1] == '市') {
					address = address.slice(0, address.length - 1)
				}
				var i = xData.indexOf(address)
				if(i == -1 ) {

					obj.push({
						name: address,
						money: ele[info['y']]
					})
					xData.push(address)
				}else {
					obj[i]['money'] += ele[info['y']]
					// yData[xData.indexOf(address)] += ele[info['y']]
				}
			}
			
		})
		xData = []
		obj.sort(function(a, b) {
			return b['money'] - a['money']
		}).forEach(function(ele){
			xData.push(ele['name'])
			yData.push(ele['money'])
		})

	}else {
		data.forEach(function(ele){
			if(ele[info['y']] != 0) {
				if(xData.indexOf(ele[info['x']]) == -1 ) {
					xData.push(ele[info['x']])
					yData.push(ele[info['y']])
				}else {
					yData[xData.indexOf(ele[info['x']])] += ele[info['y']]
				}
			}
			
		})
	}
	
	if( info['x'] == 'a105') {
		xData.forEach(function(ele, index){
			xData[index] = ele + '月'
		})
		xData.reverse()
		yData.reverse()
	}
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

function showEchart(myChart, data, type, isScreenShot, info) {
	myChart.clear();
	// var key = info['key'];
	// var time = info['time'];
	// var appName = info['appName'];
	// var keyName = info['keyName'];
	var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	var title =  isScreenShot? '' : info['title']
	// var echartsTitle = isScreenShot? '' : time + appName + 'APP' + keyName + '图';
	$('#screenName2 p').html(info['title'])
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

		option = {
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
		        	var v = params.value > 10000 ? (params.value >= 100000000 ? Math.floor(params.value/1000000)/100 + '亿': Math.floor(params.value/100)/100 + '万') : params.value;
		        	
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
				        	var v = params.value > 10000 ? (params.value >= 100000000 ? Math.floor(params.value/1000000)/100 + '亿': Math.floor(params.value/100)/100 + '万') : params.value;
				        	return params.name + '\n' + v +  dw + '/' + params.percent + '%'
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
	                    length: 15,
	                    length2: 15,
	                },
	                emphasis: {
	                    show: true
	                }
		        },

		        data: oData
		    }]
		};

	}else{
		var xData = data['xData'];
		var yData = data['yData'];
		option = {
			
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
	            	var v = ''
	            	for(var i in params) {
	            		var colorC = '<span style="background: ' + params[i].color +';width:10px;height:10px;display:inline-block;border-radius:5px;margin-right:5px;"></span>'
	            		v += colorC + params[i].name + '：' + (params[i].value >= 10000 ? (params[i].value >= 100000000 ? Math.floor(params[i].value/1000000)/100 + '亿': Math.floor(params[i].value/100)/100 + '万') : params[i].value) + dw;
		        		
	            	}
		        	
		        	return v 
	            	
	            }
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
		            formatter: function(value, index) {
		            	return value > 10000 ? Math.floor(value/100000000) + '亿' : value
		            }
		        },
		        name: dw,
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
	            name: '',
		        data: yData,
		        type: type,
	        	smooth: true,
	            lineStyle: {
	                normal: {
	                    width: 2,
	                    color: isScreenShot? '#5B9BD5' : '#00ffff',
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
	                        	
					        	var v = params.value >= 10000 ? (params.value >= 100000000 ? Math.floor(params.value/10000000)/10 + '亿': Math.floor(params.value/1000)/10 + '万') : params.value;
					        	
					        	return v 
					        	// + dw
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
	myChart.setOption(option ,true);	//生成图表
}
