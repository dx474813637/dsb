
$('.select-key ul').on('click', 'li',function(){
	$('.select-key span').attr('data-key',$(this).attr('data-key')) 
	$('.select-key span').html($(this).html()) ;

})
$('.select-category ul').on('click', 'li',function(){
 		$('.select-category span').html($(this).html());
 		$('.select-company ul').empty();
 		$('.select-company span').html('选择公司')
 		var cgy = $(this).attr('data-category')
 		var arr = cpyData.filter(function(ele) {
 			return ele['type'] == cgy
 		})
 		arr.forEach(function(ele){
 			$('.select-company ul').append('<li>' + ele['name'] + '</li>');
 		})
 })

$('.select-company ul').on('click', 'li',function(){
	var arr = [];
	for(var i = 0; i < $('.company-name').length ; i++) {
		arr.push($('.company-name').eq(i).find('a').eq(0).html())
	}
	if(arr.indexOf($(this).html()) != -1 ){
		alert('请不要重复选择相同的公司')
	
	}else {
		$('.select-company span').html($(this).html());
		$('.chosen').append('<div class="company-name"><a href="https://www.100ec.cn/Home/Index/financialData.html?name='+ $(this).html() + '" target="_blank">' + $(this).html() + '</a><a href="javascript:;" class="del icon icon10"></a></div>')
		$('.chosen .del').on('click',function(){
			$(this).parent().remove();
		})
	}
		
}) 	


$('.show-pic-btn div').on('click',function(){
	var vsEdata = {};
	var key;
	var cpy = [];
	var timeArr = [];
	var url = apiurl;
	key = $('.select-key span').attr('data-key');
	vsEdata[key] = {};
	// console.log(vsEdata);
	if($('.select-key span').attr('data-key') == '') {
		alert('请选择需要对比数据的字段')
	}else if($('.company-name').length < 2) {
		alert('请选择至少两个需要对比数据的对象')
	}else {
		for(var s = 0; s < $('.company-name').length ; s++) {
			(function(s){
				cpy.push($('.company-name').eq(s).find('a').eq(0).html())

				$.ajax({
					type: 'get',
					url: url + cpy[s],
					dataType:'json',
					async: false,
					success: function(data) {
						// console.log(data)
						if($.isEmptyObject(vsEdata[key])) {
							for(var i = 0; i < data.list.length ; i++){
								if(data.list[i][key]) {
									vsEdata[key][data.list[i].name] = {};
									vsEdata[key][data.list[i].name][data.list[i].cate] = {};
									vsEdata[key][data.list[i].name][data.list[i].cate]['data'] = data.list[i][key];
									vsEdata[key][data.list[i].name][data.list[i].cate]['coin'] = data.list[i]['a124'] || '';
									vsEdata[key][data.list[i].name][data.list[i].cate]['danwei'] = dataType[key][2];
								}
								
							}
						}else {
							var arr = [];
							for(var j in vsEdata[key]) {
								arr.push(j)
							}
							for(var m in data.list) {
								var n = arr.indexOf(data.list[m]['name'])
								if( n != -1) {
									vsEdata[key][arr[n]][data.list[m]['cate']] = {}
									vsEdata[key][arr[n]][data.list[m]['cate']]['data'] = data.list[m][key]
									vsEdata[key][arr[n]][data.list[m]['cate']]['coin'] = data.list[m]['a124'] || ''
									vsEdata[key][arr[n]][data.list[m]['cate']]['danwei'] = dataType[key][2]
								}
							}


							for(var year in vsEdata[key]) {
								if(Object.keys(vsEdata[key][year]).length != (s+1)) {
									vsEdata[key][year][cpy[s]] = {}
									vsEdata[key][year][cpy[s]]['data'] = '';
									vsEdata[key][year][cpy[s]]['coin'] = data.list[0]['a124'] || ''
									vsEdata[key][year][cpy[s]]['danwei'] = dataType[key][2]

									// console.log(Object.keys(vsEdata[key][year]).length)
									// delete vsEdata[key][year]
								}
							}
							
							
						}

						
					}
				})
			}(s))
		}
		// console.log(vsEdata)
		
		var years = [];
		for(var i in vsEdata[key]) {
			years.push(i)
		}
		var ydata = {};
		var coin = {};
		var danwei = {};
		for(var i = 0; i < cpy.length; i ++) {
			ydata[cpy[i]] = [];
			coin[cpy[i]] = '';
			danwei[cpy[i]] = '';
			(function(i){
				for(var n = 0; n < years.length; n++) {
					if(vsEdata[key][years[n]][cpy[i]]['data'] != null) {
						ydata[cpy[i]].push(parseFloat(vsEdata[key][years[n]][cpy[i]]['data']))
					}else {
						ydata[cpy[i]].push('')
					}
					if(key == 'a117') {
						coin[cpy[i]] = '';
					}else {
						coin[cpy[i]] = vsEdata[key][years[n]][cpy[i]]['coin']
					}
					danwei[cpy[i]] = dataType[key][2]
				}
			}(i))
			
		}
		// console.log(ydata)
		var num = 0;
		for(var i in ydata[cpy[0]]) {
			if(ydata[cpy[0]][i]) {
				num++
			}
		}
		if(!num) {
			alert('无数据对比')
			return false
		}else{
			console.log(vsEdata)
			showVsData(vsEdata, key, cpy, dataType[key][0], years, ydata, coin, danwei, cpyData)
		}

		

	}

	
})

function randomNumber(min, max) {
	return Math.floor(min + Math.random()*(max - min) )
}

function showVsData(data, key, cpy, label, years, ydata, coin, danwei, type) {
		console.log(data)
		var myChart2 = echarts.init(document.getElementById('chart2'));
		var color = ['#00c7ff','#f90','#333','#007fff','#ff7300'];
		var showColor = [];
		for(var i = 0; i < cpy.length; i++) {
			showColor.push('rgb(' + randomNumber(8, 158) + ', ' + randomNumber(8, 158) + ', ' + randomNumber(8, 158) + ')')
		}
		// console.log(showColor)
		// cpy.forEach(function(ele){
		// 	type.forEach(function(item){
		// 		item['name'] == ele ?  showColor.push(item['color'] ? item['color'] : '#007fff') : '';
		// 	})
		// })
		// for(var i = 0; i < cpy.length;i++) {
		// 	showColor.push(cpyColor[cpy[i]]['color']);
		// }

		// console.log(showColor)
		var title = '';
		for(var i = 0 ; i < cpy.length; i ++) {
			if(i == cpy.length - 1) {
				title = title + cpy[i]
			}else {
				title = title + cpy[i] + '-';
			}
			
		}
		title = '【' + title + '】' + label + '数据对比图';
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
                    	color: color[2]
                    },
		    },
		    //右边栏操作选项
		    toolbox: {
		        feature: {
		            // dataZoom: {
		            //     yAxisIndex: 'none',
		            //     emphasis: {
		            //     	iconStyle: {
		            //     		color: color[2],
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
		        	color: color[2],
		        },
		    },
		    //右上角数据标签种类
	        legend: {
	            data: cpy,
	            right: '8%',
	            top: '60',
	            textStyle: {
	            	color: color[2],
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
			                color: color[2],
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
	            	
	            	for(var i in params) {
	            		var colorC = '<span style="background: ' + params[i].color +';width:10px;height:10px;display:inline-block;border-radius:5px;margin-right:5px;"></span>'
	            		strt = params[i].name + label;
	            		if(params[i].data){
	            			str += '<br/>' + colorC + params[i].seriesName + '：' + params[i].data + danwei[params[i].seriesName] + (coin[params[i].seriesName] || '')
	            			
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
		        data: years,
		        "axisLine": {
		            lineStyle: {
		                color: color[3],
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
		                color: color[3]
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
		                color: color[3]
		            }
		        },
		        name: danwei[cpy[0]],
		        nameTextStyle: {
		        	color: color[3],
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
		            y: '90%',
		            start: 10,
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
		    series: [
		    // {
	    //         name: cpy[0],
		   //      data: yData1,
		   //      type: 'bar',
	    //     	smooth: true,
	    //         lineStyle: {
	    //             normal: {
	    //                 width: 2,
	    //                 color: color[3],
	    //             }
	    //         },
	    //         itemStyle: {
					// normal: {
					// 	color: color[3],
					// }
	    //         },
		   //  }, {
	    //         name: cpyname[1],
	    //         // yAxisIndex: 1,
	    //         type: 'bar',
	    //     	smooth: true,//弧线
	    //         data: yData2,//数据
	    //         itemStyle: {
	    //             normal: {
	    //                 color: color[1]
	    //             },
	    //         },
	        // }
	        ]
		};
		for(var i = 0 ; i < cpy.length; i ++) {
			option.series.push({
	            name: cpy[i],
		        data: ydata[cpy[i]], 
		        type: 'bar',
	        	smooth: true,
	            lineStyle: {
	                normal: {
	                    width: 2,
	                    color: showColor[i],
	                }
	            },
	            itemStyle: {
					normal: {
						color: showColor[i],
					}
	            }
			})
		}

	myChart2.setOption(option,true);	//生成图表
}
