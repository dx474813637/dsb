(function($){

	function ComplaintMoreData (config) {
		this.url = config.url;
		this.diyTimeUrl = 'http://www.315.100ec.cn/api/index.php?_a=data&f=getrate'; //&website=&start_date=&end_date=
		this.website = config.website;
		this.year = config.year;
		this.time = config.time;
		this.screenShot = config.screenShot;
		this.title = config.title
		this.data = {};
		this.myChart = '';
		this.syImg = 'http://www.100ec.cn/Public/home/images/dsb-logo.png';
		this.key = [
			{
				money: '投诉金额占比'
			},
			{
				problem: '投诉问题类型占比'
			},
			{
				area: '投诉者地区占比'
			},
			{
				sex: '投诉者性别占比'
			},
		]

		this.init();
		
	}

	ComplaintMoreData.prototype = {
		init: function() {
			var self = this
			var data = {
				website: self.website,
				year: self.year,
				time: self.time
			}
			self.showModel()
			self.bindEvent()
			self.getData(self.url, data, function(res){
				self.data = res
				// console.log(self.data)
				$('#dropUl li').eq(0).trigger('click')
				$('.refresh-div').hide()
			})
		},
		showModel: function () {
			$('body').addClass('body-noScroll')
			var self = this
			var len = self.key.length

			$('body').append('<div class="c-model-container">' + 
				'<div class="mask" id="mask"></div>'+
				'<div class="c-model">'+
					'<div class="c-model-head">'+
						'<p id="headTitle">更多详细数据</p>' +
						'<p class="model-close"></p>' +
					'</div>'+
					'<div class="c-model-main">'+
						'<div class="dropdown-box">'+
							'<div class="dropdown">'+
								'<p>数据字段</p>'+
								'<ul id="dropUl">'+
								'</ul>'+	
							'</div>'+
							'<div class="dropdown">'+
								'<p><input name="dateScope" id="dateScope" readOnly value="" placeholder="点击选择时间范围" /></p>'+
							'</div>'+
						'</div>'+
						'<div class="screenshot-compare-ECharts-title" id="moreTitle">'+
							'<p>图表数据加载中...</p>'+
						'</div>'+
						'<div class="c-model-echarts">'+
							'<div id="moreDataEcharts"></div>'+
							'</div>'+
						'<div class="screenshot-compare-ECharts-footer clearfix">'+
							'<p>图表编制：电数宝</p>'+
							'<p>数据来源：WWW.100EC.CN</p>'+
						'</div>'+
						'<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>' +
					'</div>'+
				'</div>'+
				'</div>')
			$('#headTitle').html(self.title + '更多详细数据')

			laydate.render({
			  elem: '#dateScope'
			  ,type: 'month'
			  ,range: true
			  ,theme: '#1E90FF'
			  ,trigger: 'click'
			  ,max: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
			  ,done: function(value, date, endDate){
			  	// console.log(date)
			  	self.diyRender(value, date, endDate)
			  }
			});
			self.screenShot ? $('#moreDataEcharts').width(800) : $('#moreDataEcharts').width('100%');
			self.myChart = echarts.init(document.getElementById('moreDataEcharts'));
			self.key.forEach(function(ele){
				for(var i in ele) {
					$('#dropUl').append('<li data-key="' + i + '">' + ele[i] + '</li>')
				}
			})
		},
		bindEvent: function () {
			var self = this
			$('#mask, .model-close').on('click', function() {
				$('.c-model-container').remove()

				$('body').removeClass('body-noScroll')
			})
			$('#dropUl').on('click', 'li', function(){
				var key = $(this).data('key')
				var title = self.title + $(this).html() + '图'
				$(this).addClass('active').siblings().removeClass('active')
				self.myChart.resize({
					width: self.screenShot? 800 : $('#moreDataEcharts').width(),
				})
				$('#moreTitle p').html(title)
				self.renderDataEcharts(self.data[key], self.screenShot, title, self.myChart, $(this).html(), self.syImg)
			})
		},
		diyRender: function(date, startDate, endDate) {
			var self = this;
			$('.refresh-div').show()
			var sTime = '' + startDate.year + '-' + (startDate.month < 10 ? '0' + startDate.month : startDate.month) 

			var eTime
			if(endDate.month == 12) {
				eTime = '' + (endDate.year + 1) + '-01'
			} else if(endDate.month + 1 < 10) {
				eTime = '' + endDate.year + '-0' + (endDate.month + 1)
			} else {
				eTime = '' + endDate.year + '-' + (endDate.month + 1)
			}

			if(startDate.year == endDate.year) {
				self.title = self.website + startDate.year + '年'
				if(startDate.month == endDate.month) {
					self.title += startDate.month + '月'
				}else {
					self.title += startDate.month + '月至' + endDate.month +'月'
				}
			}else {
				self.title = self.website + startDate.year + '年' + startDate.month + '月至' + endDate.year + '年' + endDate.month + '月'
			}
			
			// var url = self.diyTimeUrl + '&website=' + self.website + '&start_date=' + date.split(' - ')[0] + '&end_date=' +date.split(' - ')[1];
			var data = {
				website: self.website,
				start_date: sTime ,
				end_date: eTime
			}
			self.getData(self.diyTimeUrl, data, function(res){
				self.data = res
				$('#dropUl li').eq(0).trigger('click')
				$('.refresh-div').hide()
			})
		},
		renderDataEcharts: function (data, isScreenShot, title, myChart, ytitle, sy) {
			myChart.clear()
			var self = this
			// console.log(data)
			var yData = [];
			var xData = [];
			data.forEach(function(ele){
				if(ele['pre'] != 0) {
					xData.push(ele['name'])
					yData.push(ele['pre'])
				}
			})
			var contentTextColor = isScreenShot ? '#333' : '#00c7ff';
	
			// console.log(xData, yData)
			option = {
				// color: [color[0],'#f90'],
				//标题
			    title: {
			        text: isScreenShot? '' : title,
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
			        right: isScreenShot? '5%' : '8%',
			        left: isScreenShot? '5%' : '8%',
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
		            			str += '<br/>' + colorC + params[i].seriesName + '：' + params[i].data 
		            			
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
			                color: isScreenShot ? '#999' : '#00c7ff',
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
			        name: '%',
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
			        type: 'bar',
		        	smooth: true,
		            lineStyle: {
		                normal: {
		                    width: 2,
		                    color: isScreenShot ? '#5B9BD5' : '#00c7ff',
		                }
		            },
		            itemStyle: {
						normal: {
							color: isScreenShot ? '#5B9BD5' : '#00c7ff',
							label: {
		                        show: true,
		                        position: "top",
		                        
		                    }
						}
		            },
			    }]
			};
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
			myChart.setOption(option ,true);
		},
		getData: function (url, data, cb){
			$.ajax({
				url: url,
				data: data,
				success: function(res) {
					// console.log(JSON.parse(res))
					cb && cb(JSON.parse(res))
				}
			})
		},
	}


	window.complaintMoreData = ComplaintMoreData
})(jQuery)

