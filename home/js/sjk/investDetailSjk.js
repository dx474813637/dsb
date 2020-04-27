(function($){
	var list = {
		init: function(){
			var self = this;
			this.name = this.getURLString('name')
			this.type = this.getURLString('type') || 'rz'
			this.url = '/Index/investment_json?name=' + this.name;
			this.urlTz = '/Index/investment_json?tz=' + this.name;
			this.dataArr = [];
			this.dataClone = [];
			this.lastSort = '';
			this.screenShot = false;
			this.pData = {
				name: '',
				cate: '',
				qujian: 1,
				ym1: new Date().getFullYear() + '0101',
				ym2: new Date().getFullYear() + '' + (new Date().getMonth() + 1 < 10 ?  new Date().getMonth() + 1 : new Date().getMonth() + 1 ) + '01',
			};
			this.curYear = new Date().getFullYear();
			this.yearData = [];

			this.chartType = 'bar';
			this.screenShot = false;
			this.pxKey = 'time';
			this.lastSort = 'time';
			this.eData = []
			// this.date = {
			// 	year: new Date().getFullYear(),
			// 	month: '01'
			// };
			// this.endDate = {
			// 	year: new Date().getFullYear(),
			// 	month: new Date().getMonth()+1
			// }; 
			this.date = {
				year: '2019',
				month: '01'
			};
			this.endDate = {
				year: '2019',
				month: '12'
			}; 
			this.timeChosen = {
				year: '2019',
				beginMonth: '01',
				endMonth: '12',
			};
			this.area = '';
			this.title = '';
			this.setting = {};
			this.settingFlag = false;
			this.syImg = 'http://www.100ec.cn/Public/home/images/dsb-logo.png';
			
			// this.keyArr = ['first_quarter', 'second_quarter', 'third_quarter', 'fourth_quarter', 'first_half', 'whole_year']
			// this.tableTitle = this.name + '电商消费历年评级数据';
			this.initRenderDom()
			this.bindEvent()
			this.ajaxData( this.type == 'rz' ? this.url : this.urlTz, function(data) {
				self.dataCb()
			})
			this.myChart = echarts.init(document.getElementById('showBox'));
			cityPlugin = new cityPlugin({
				el: '#area',
				done: function(res) {
					// console.log(res)
					self.area = res
					$('#area').val(self.area['data'].join(','))
					self.dataCb()
				}
			})
			laydate.render({
			  elem: $(window).width() > 768 ? '#ym' : '#ymView'
			  ,type: 'month'
			  ,range: true
			  ,theme: '#1E90FF'
			  ,btns: ['confirm']
			  ,trigger: 'click'
			  ,value: self.date['year'] + '-01' + ' - ' + self.endDate['year'] + '-' + self.endDate['month']
			  ,max: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
			  ,position: $(window).width() > 768 ? 'absolute' : 'static'
			  ,done: function(value, date, endDate){
			  	self.laydateChange(date, endDate)
			  	if( $(window).width() < 768) {
			  		$('#ym').val(value)
			  		$('#ymView').fadeOut()
			  	}
			  	// console.log(self.pData)//请求参数
			   //  // console.log(value); //得到日期生成的值，如：2017-08-18
			    // console.log(date); //得到日期时间对象：{year: 2017, month: 8, date: 18, hours: 0, minutes: 0, seconds: 0}
			    // console.log(endDate); //得结束的日期时间对象，开启范围选择（range: true）才会返回。对象成员同上。
			  }
			});
		},
		initRenderDom: function(){
			var self = this;
			$('#mainType li').each(function(index, ele) {
				$(this).data('id') == self.type ? $(this).addClass('active').siblings().removeClass('active'): '';
			})
			$('.categoryTwo-name, #screenName').html(self.name + (self.type == 'rz' ? '融资' : '投资') + '历史数据')
			$(document).attr('title', '【' + self.name + '】投融资历史数据 网经社 网络经济服务平台')
			
			for(var i = 2018; i < this.curYear + 1 ; i++) {
				this.yearData.unshift(i)
			}
			this.yearData.forEach(function(ele, index){
				if(index == 0){
					$('#year .sjk-choose-list').append('<li class="list-item" data-year="">全部</li>')
				}
				$('#year .sjk-choose-list').append('<li class="list-item" data-year="' + ele + '">' + ele + '年</li>')
			})
			if(self.type == 'tz') {
				$('#dropUl').empty().append('<li class="tz-li" data-x="cate" data-y1="money" data-y2="count">领域分布</li>' +
					'<li class="tz-li" data-x="a106" data-y1="money" data-y2="count">地区分布</li>' +
					'<li class="tz-li" data-x="a104" data-y1="money" data-y2="count">时间分布</li>' +
					'<li class="tz-li" data-x="shares" data-y1="shares" data-y2="count">轮次分布</li>' )
				$('#typeUl li').eq(2).hide()
				$('.address-row, .time-row').show()
				// cityPlugin = new cityPlugin({
				// 	el: '#area',
				// 	done: function(res) {
				// 		// console.log(res)
				// 		self.area = res
				// 		$('#area').val(self.area['data'].join(','))
				// 		self.dataCb()
				// 	}
				// })
			}
		},
		//获取url需要的平台名参数
		getURLString: function(name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURIComponent(r[2]); 
		    return null; 
		},
		dataCb: function(){
			var self = this;
			var area = self.area && self.area['data'].length>0 ? self.area['data'].join('') : '';
			self.title = '阿里巴巴' + self.date['year']+ '年' + parseInt(self.date['month'])+ '月' + 
						( self.endDate == self.date ? '' : ( self.endDate['year'] == self.date['year'] ?(self.endDate['month'] == self.date['month'] ? '' :'至' + parseInt(self.endDate['month'])+ '月')  :'至' + self.endDate['year']+ '年' + parseInt(self.endDate['month'])+ '月') ) + 
						area + '项目';

	  		self.type == 'tz' ? $('#screenName, .categoryTwo-name').html(self.title + '投资数据榜') : ''

			$('.sort').removeClass('down up')
			$('.sort[data-key=' + self.pxKey + ']').addClass('down')
			self.dataClone = self.cloneData(self.dataArr)
			self.px(self.dataClone, self.pxKey)
			self.renderDataList(self.dataClone, self.topNum, self.sub, self.round, self.date, self.endDate, self.area, self.type)
		},
		laydateChange: function(date, endDate){
			var self = this;
			self.pData['ym1'] = date['year'] + '' + (date['month'] < 10 ? '0' + date['month']: date['month']) + '01'
			self.pData['ym2'] = endDate['year'] + '' + (endDate['month'] < 10 ? '0' + endDate['month']: endDate['month']) + '01'
			
			self.date = {
				year: date['year'],
				month: date['month'] < 10 ? '0' + date['month']: date['month']
			};	
			self.endDate = {
				year: endDate['year'],
				month: endDate['month'] < 10 ? '0' + endDate['month']: endDate['month']
			};	
			// self.getData(self.url, self.pData, function(data){
			// 	// console.log(data)
		  		self.dataCb()
			// })

		},
		//ajax获取数据
		ajaxData: function(url, cb) {
			var self = this;
			$('#dataList').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
			$.when(
				$.ajax({
					url: url,
					type: 'GET',
					dataType: 'json',
				})
			).then(function(res){
				if(!res.list || res.list.length == 0) {
					$('.refresh-div').remove()
					$('#dataList').append('<div style="text-align: center;line-height: 60px;color:#fff;#font-weight: bolder;font-size: 16px">暂无数据</div>')
					return
				}
				self.dataArr = []
				self.dataTraversal(self.dataArr, res['list'], dataTypeInvest)
				self.dataArr = self.dataKeyExchange(self.dataArr)
				cb && cb(self.dataArr)
			})
			
		},
		renderDataList: function(data, num, sub, round, beginTime, endTime, area){
			var self = this;
			$('#dataList').empty()
			$('#unicorn-vs').fadeOut().find('#u-v-c-list').empty();
			var newData = data;
			if(self.type == 'tz') {
				if(beginTime && endTime) {
					console.log(beginTime,endTime)
					var begin = '' + beginTime.year + beginTime.month + '01'
					var end = '' + endTime.year + endTime.month + '31'
					newData = newData.filter(function(ele) {
						return ele.time >= begin && ele.time <= end
					})
				}
				if(area && area['data'].length > 0) {
					var key 
					if(area['name'] == 'province') {
						key = 'a106'
					}else {
						key = 'a107'
					}
					var arr = []
					newData.forEach(function(ele){
						var name
						area['data'].forEach(function(item){
							name = item
							if(ele[key].indexOf(name) != -1) {
								arr.push(ele)
							}
						})
					})
					newData = arr

				}	
			}
			
			self.eData = newData;
			newData.forEach(function(ele, index){
				var arr = ele['a102'].split(/\，|\、/);
				var cgy = '';
				var address = ''
				var sheng = ele['a106'].trim();
				var city = ele['a107'].trim()
				if( sheng == city ) {
					address = '<p>' + ele['a107'] + '</p>'
				}else {
					address = ( sheng? '<p>' + ele['a106'] + '</p>' : '' ) + ( city ? '<p>' + ele['a107'] + '</p>' : '');
				}
				arr.forEach(function(item){
					cgy += '<p title="' + item + '">' + item + '</p>'
				})
				
				$('#dataList').append('<li class="data-row">'+
					'<div class="data-row-item item-small item-checkbox">'+
						'<label class="check-box">'+
							'<input type="checkbox" data-id="' + index + '" name="compare" class="compare-style">'+
							'<span class="checkbox-style"></span>'+
						'</label>'+
					'</div>'+
					'<div class="data-row-item item-small">' + (index + 1) + '</div>'+
					'<div class="data-row-item n" title="' + ele['name'] + '">' + ele['name'] + '</div>'+
					'<div class="data-row-item">' + ele['a103'] + '</div>'+
					'<div class="data-row-item address">' + address + '</div>'+
					'<div class="data-row-item" data-time="' + ele['time'] + '">' + ele['dtime'] + '</div>'+
					'<div class="data-row-item round">' + ele['shares'] + '</div>'+
					'<div class="data-row-item money">' + ele['a100'] + ele['a101'] + '</div>'+
					'<div class="data-row-item investor" title="' + ele['a102'] + '">' + cgy + '</div>'+
				'</li>')
			})
		},
		chooseEvent: function(year, data){
			if(year == '') {
				return data
			}
			var newData = []
			data.forEach(function(ele) {
				if(ele['year'] == year){
					newData.push(ele)
				}
			})
			return newData
		},
		bindEvent: function(){
			var self = this;
			$('#mainType').on('click', 'li', function() {
				window.location.href = '/User/investDataDetail.html?name=' + self.name + '&type=' + $(this).data('id')
			})

			$('#emptyArea').on('click', function() {
				$('#area').val('')
				self.area = '';
				self.dataCb()
			})
			// $('#year').on('click', '.list-item', function(){
			// 	var data
			// 	// console.log(self.getData)
			// 	data = self.chooseEvent($(this).data('year'), self.getData);
			// 	self.cData = self.cloneData(data);
			// 	self.renderDataList(self.cData)
			// })
			//统一绑定排序的按钮，按钮唯一排序，当前项排序，同按钮点击第二次则为倒顺排序，不支持多按钮排序
			$('.sort').on('click', function(){
				self.pxKey = $(this).data('key')
				if(!$(this).hasClass('down') && !$(this).hasClass('up')) {
					$(this).addClass('down').siblings('.sort').removeClass('down up');
					self.dataClone = self.cloneData(self.dataArr);
					self.px(self.dataClone, self.pxKey);
					self.lastSort = $(this).data('key')
				}else {
					if(self.lastSort == $(this).data('key')) {
						self.dataClone.reverse()
						!$(this).hasClass('up') ? $(this).addClass('up').removeClass('down') : $(this).addClass('down').removeClass('up');
					}
				}
				
				//渲染页面dom
		  		// self.dataCb()
				self.renderDataList(self.dataClone, self.topNum, self.sub, self.round, self.timeChosen)
			})
			//可收缩下方弹出的对比公司列表tab
			$('#hideBtn').on('click', function(){
				if($('#hideBtn').hasClass('active')) {
					$('.unicorn-vs').addClass('small').find('#hideBtn').removeClass('active').html('展开')
					
				}else {
					$('.unicorn-vs').removeClass('small').find('#hideBtn').addClass('active').html('收起')
				}
				
			})
			//清除下方弹出的对比公司列表的数据，并且清空对比数据
			$('#removeDataBtn').on('click', function(){
				// $('#u-v-c-list').empty()
				$('#unicorn-vs').fadeOut().find('#u-v-c-list').empty();
				$('input.compare-style').removeAttr('checked')
			})

			//监听数据表中的多想框，如有改变，则根据选中状态分开处理增删数据，渲染dom
			$('#dataList').on('change', '.compare-style', function(e){
				var len = $('input[name=compare]:checked').length;
				$('#cpyNum').html("（" + len + "）")
				var cpyname = $('#dataList li').eq($(this).data('id')).find('.n').html();
				var time = $('#dataList li').eq($(this).data('id')).find('.n').next().next().data('time');
				var round = $('#dataList li').eq($(this).data('id')).find('.n').next().next().next().html();
				if($(this).is(':checked')) {
					$('<li data-id="' + $(this).data('id') + '" title="移除">' + (self.type=='rz' ? time : cpyname ) + '：' + round + '</li>').appendTo($('#u-v-c-list'))
				}else {
					$('#u-v-c-list li').each(function(){
						if($(this).html() == (time + '：' + round)) {
							$(this).remove();
						}
					})
				}
				if( len == 0 ) {
					$('.unicorn-vs').fadeOut('fast')
				}else {
					$('.unicorn-vs').fadeIn('fast')
				}
				
			})
			$('#u-v-c-list').on('click', 'li', function(){
				// $('#dataList li').eq($(this).data('id')).find('.compare-style').trigger('click');
				$('#dataList li input[data-id=' + $(this).data('id') + ']').trigger('click');
			})
			//全选事件，点击第一次，补全/全选多选框；第二次点击，取消所有多选框被选中状态
			$('#allChoose').on('click', function(){
				var num = 0;
				$('#dataList .compare-style').each(function(){
					if(!$(this).is(':checked')) {
						$(this).trigger('click')
					}else {
						num++
					}
				})
				if(num == $('#dataList .compare-style').length) {
					$('#dataList .compare-style').trigger('click')
				}
			})

			//生成对比ECharts图表按钮事件
			var eData;
			$('#showEChartsBtn').on('click', function(){
				eData = []
				//获取多选框被选中的id序列
				$('input[type=checkbox]:checked').each(function(ele){
					eData.push(self.eData[ $(this).data('id') ])
				})
				// 对被选中的数据进行id顺序排序，因为id的顺序已在开始ajax获取的时候默认排序过，因此id顺序就是默认排序，但是点击时候的顺序并非会按照id顺序选中可能会乱序选择
				// self.px(eData, 'buy');
				$('body').addClass('body-noScroll').find('#compareBox').fadeIn()
				
				self.myChart.resize({
					width: self.screenShot? 800 : $('.w').width(),
					height: self.screenShot? 620 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight(),
				})
				// $('#screenName2 p').html(self.name + '电商消费历年' + $(this).html() +'对比图')
				// //以估值统计对比图作为默认数据
				// showEchart(self.myChart, '', eData, 'bar', self.screenShot, self.name)
				// console.log(eData)
				$('.dropdown-box .dropdown ul li').eq(0).trigger('click')
				$('.unicorn-vs').addClass('small').find('#hideBtn').removeClass('active').html('展开')
			})
			//模态框事件
			$('.box-wrap-close, .mask').on('click', function() {
				$('body').removeClass('body-noScroll').find('#compareBox').fadeOut()
				$('.unicorn-vs').removeClass('small').find('#hideBtn').addClass('active').html('收起')
			})
			// 对模态框中的列表项绑定事件
			$('#dropUl').on('click', 'li', function(){
				$(this).addClass('active').siblings().removeClass('active')
				var newData
				var title = self.setting.title || (self.title + (self.type == 'tz' ?'投资' : '') + $(this).html() + '图') ;
				if(self.type == 'rz') {
					
					var info = {
						type: self.type,
						x: $(this).data('x'),
						y: $(this).data('y'),
						title: title,
						text: $(this).html(),
						dw: $(this).data('type') == 'count' ? '次': '元',
						sy: self.setting.bgImg || self.syImg,
						cpy: self.name
					}
					$('#screenName2 p').html(title)
					if(info['type'] == 'count'){
						newData = dataCount(eData, info, self.chartType)
					}else {
						newData = dataEcharts(eData, info, self.chartType)
					}
					showEchart(self.myChart, newData, self.chartType, self.screenShot, info)
				}else {
					var info = {
						type: self.type,
						x: $(this).data('x'),
						y1: $(this).data('y1'),
						y2: $(this).data('y2'),
						title: title,
						text: $(this).html(),
						dw: '',
						sy: self.setting.bgImg || self.syImg,
						cpy: self.name,
						begin: self.date,
						end: self.endDate
					}
					newData = tzEcharts(eData, info, self.chartType)
					showEchart(self.myChart, newData, self.chartType, self.screenShot, info)
				}		

			})
			$('#typeUl').on('click', 'li', function(){
				self.chartType = $(this).data('type')
				$('#dropUl li.active').trigger('click')
			})

			// 根据窗口实时变动，ECharts图表实时变动大小
			window.onresize = function() {
				$('#showBox').width(self.screenShot? 800 :'100%');
				self.myChart.resize({
					width: self.screenShot? 800 : $('.w').width(),
					height:  self.screenShot? 620 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight() ,
				});
			};
			$('#screenshotBtn').on('click', function(){
				if(self.screenShot) {
					$('body').removeClass('screenshot-open')
					self.screenShot = false;
					$('#showBox').width($('.sjk-table').width())
				}else {
					$('body').addClass('screenshot-open')
					self.screenShot = true;
					$('#showBox').width(800)
				}
				
			})
			$('.tools-item p.setting').on('click', function() {
				if($('.tools-wrap').hasClass('active')) {
					return
				} 
				$('.tools-wrap').addClass('active').find('.tools-box[data-type=' + $(this).data('type') + ']').fadeIn('fast').siblings('.tools-box').hide()
				// $('.tools-box[data-type=' + $(this).data('type') + '] input').val('')
				if(!$('body').hasClass('screenshot-open')) {
					$('#screenshotBtn').trigger('click')
				}
			})
			$('.tools-box .submit').on('click', function() {
				var type = $(this).parents('.tools-box').data('type')
				if(type == 'title') {
					!self.settingFlag ? self.setting.oldtitle = $('#screenName').html(): '';
					self.setting.title = $('input[name=title]').val() 
					self.setting.title && settingTitle(self.setting.title, $('#screenName'))
					self.settingFlag = true
				}else if(type == 'font') {
					self.setting.font = $('input[name=titleSize]:checked').val()
					var dom = $('.screenshot-open .data-row .data-row-item, .screenshot-open .data-row .data-row-item a')
					self.setting.font && settingFont(self.setting.font, dom)
				}else if(type == 'color') {
					self.setting.color = $('input[name=color]').val()
					var dom1 = $('.screenshot-table-title, .screenshot-table-footer, .screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer')
					var dom2 = $('.screenshot-open .data-row .data-row-item, .screenshot-open .sjk-data-title .s-d-t-item, .screenshot-open .data-row, .screenshot-open .sjk-data-title')
					var dom3 = $('.screenshot-open .data-row:nth-child(even) .data-row-item')
					// var dom4 = $('.screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer')
					self.setting.color && settingColor(self.setting.color,  dom1, dom2, dom3)
				}else if(type == 'bgImg') {
					if($('input[name=isBgImg]').is(':checked')) {
						self.setting.bgImg = 'none'
						
					}else {
						self.setting.bgImg = $('input[name=bgImg]').val() 
					}
					settingBgImg(self.setting.bgImg, $('.sjk-data-content'))
				}else {
					return 
				}
				$('.tools-close-btn').trigger('click')
			})
			$('.tools-close-btn, .mask').on('click', function() {
				$('.tools-wrap').removeClass('active').find('.tools-box').hide()
				
			})
			$('#init').on('click', function() {
				$('.sjk-table div, .sjk-table ul, .sjk-table li').removeAttr('style')
				$('.screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer').removeAttr('style')
				$('#screenName').html(self.setting.oldtitle) 
				self.setting = {};
				self.settingFlag = false
			})
		},
		//将请求回来的数据根据页面需求进行过滤
		dataTraversal: function(data, res, keyData){
			var keyArr = [];
			keyData.forEach(function(ele){
				keyArr.push(ele['k'])
			})
			res.forEach(function(ele, index){
				data[index] = {}
				keyArr.forEach(function(item){
					data[index][item] = ele[item]
				})
			})
		},
		//深度克隆源数据并返回新数据，方便后续数据处理
		cloneData: function(data){
			var conleData ;
			if(Object.prototype.toString.call(data) == "[object Object]") {
				conleData = {};
				conleData = $.extend(true, {}, data)
			}else {
				conleData = [];
				data.forEach(function(ele, index) {
					conleData[index] = $.extend(true, {}, ele)
				})
			}
			// console.log(conleData)
			return conleData
		},
		//对数据根据关键字进行排序
		px: function(data, key) {
			if(!data) { return false }
			// this.lastSort = key;
			data.sort(function(a, b){
				//默认情况从大到小
				return b[key] - a[key] 
			})
		},
		dataKeyExchange: function(data){
			data.forEach(function(ele){
				var year = parseInt(ele['a104']) + ''
				var month = parseInt(ele['a105']) < 10 ? '0' + parseInt(ele['a105']) : parseInt(ele['a105']);
				var day = ele['dtime'].slice(ele['dtime'].indexOf('月') + 1, ele['dtime'].length - 1) ;
				day = day < 10 ? '0' + day : day;
				ele['time'] = year + month + day;
				// console.log(ele['name'],ele['time'])
				var money = ele['a100'];
				var dw = ele['a101'];
				var reg = /[0-9]/g;
				var s = 1
				if( !reg.test(money) ) {
					dataMoney.forEach(function(item){

						if(item['title'].indexOf(money) != -1) {
							money = item['number']
						}
					})
				}
				if(dw.indexOf('美') != -1) {
					s = 6.85
				}else if(dw.indexOf('港') != -1) {
					s = 1.14
				}
				if(money.indexOf('万') != -1) {
					money = parseInt(money) * 10000
				}else if(money.indexOf('亿') != -1){
					money = parseInt(money) * 10000 * 10000
				}else {
					money = 0
				}

				ele['money'] = money * s;

			})
			return data
		},
	}
	list.init()
}(jQuery))