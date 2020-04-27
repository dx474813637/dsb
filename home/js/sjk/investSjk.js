(function($){
	invest = {
		init: function(){
			var self = this;
			// this.cate = this.getURLString('cate') || '';
			this.type = {
				main: self.getURLString('main') || '',
				sub: self.getURLString('sub') || ''
			}
			this.url = '/Index/investment_json';
			this.dataArr = [];
			this.dataClone = []
			this.screenShot = false;
			this.pData = {
				name: '',
				cate: '',
				// year: '',
				// month: '',new Date().getFullYear()
				qujian: 1,
				ym1: '2019' + '0101',
				ym2: new Date().getFullYear() + '' + (new Date().getMonth() + 1 < 10 ? '0' + (new Date().getMonth() + 1) : new Date().getMonth() + 1 ) + '01',
				// rz: '',
			};
			this.chartType = 'bar';
			this.screenShot = false;
			this.pxKey = 'time'
			this.lastSort = 'time';
			this.topNum = 10;
			this.sub = '';
			this.round = '';
			this.timeChosen = {
				year: new Date().getFullYear(),
				beginMonth: '01',
				endMonth: '12',
			};
			this.eData = []
			this.date = {
				// year: new Date().getFullYear(),
				year: 2019,
				month: 1
			};
			this.endDate = {
				year: new Date().getFullYear(),
				month: new Date().getMonth()+1
			}; 
			this.area = '';
			this.title = '';
			this.setting = {};
			this.settingFlag = false;
			this.syImg = '/Public/home/images/dsb-logo.png';
			this.bindEvent();
			this.renderDom();
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
		renderDom: function(){
			var self = this;
			dataField.forEach(function(ele, index){
				$('#mainType').append('<li class="' + (self.type['main']==ele['id'] ? 'active': '' ) + '" data-id="' + ele['id'] + '">' + ele['title'] + '</li>')
			})
			dataRound.forEach(function(ele, index){
				$('#round').append('<li class="' + (self.round==ele['id'] ? 'active': '' ) + '" data-id="' + ele['id'] + '">' + ele['title'] + '</li>')
			})
			self.pData['cate'] = ( $('#mainType li.active').html() != '全部' ? $('#mainType li.active').html() : '');
			self.renderSub($('#mainType li.active').html())
			self.sub = self.type.sub && $('#subType li.active').html() 
			// $('#mainType li.active').trigger('click')
			self.getData(self.url, self.pData, function(data){
		  		self.dataCb()
			})
			// $('#yearList li[data-year=' + new Date().getFullYear() + ']').trigger('click')
			// $('#month1List li[data-month1=01]').trigger('click')
			// $('#month2List li[data-month2=12]').trigger('click')
			// $('#mainType li.active').trigger('click')
			// $('#year').val(self.timeChosen['year']+ '年')
			// $('#month1').val(self.timeChosen['beginMonth'] + '月')
			// $('#month2').val(self.timeChosen['endMonth'] + '月')
		},
		renderSub: function(cate){
			var self = this;
			$('#subType').empty()
			dataField.forEach(function(ele){
				if( ele['title'] == cate ){
					ele['children'].forEach(function(item, i){
						$('#subType').append('<li class="' + (item['id']==self.type.sub ? 'active': '' ) + '" data-id="' + item['id']  + '">' + item['title'] + '</li>')
					})
				}
			})

		},
		dataCb: function(s){
			var self = this;
			if(s){
				self.title = '关于“' + $('#name').val() + '”的搜索结果'
				$('#screenName').html(self.title)
			}else{
				var area = self.area && self.area['data'].length>0 ? self.area['data'].join('') : '中国';
				var mainType = $('#mainType li.active').html() == '全部'? '电商' : $('#mainType li.active').html();
				var subType = $('#subType li.active').html() == '全部'? '' : '（' + $('#subType li.active').html() + '）';
				self.title = self.date['year']+ '年' + self.date['month']+ '月' + 
							( self.endDate == self.date ? '' : ( self.endDate['year'] == self.date['year'] ?(self.endDate['month'] == self.date['month'] ? '' :'至' + self.endDate['month']+ '月')  :'至' + self.endDate['year']+ '年' + self.endDate['month']+ '月') ) + 
							area + mainType + subType;
		  		$('#screenName').html(self.title + '融资数据榜')
			}
			$('.sort').removeClass('down up')
			$('.sort[data-key=' + self.pxKey + ']').addClass('down')
			self.dataClone = self.cloneData(self.dataArr)
			self.px(self.dataClone, self.pxKey)
			self.renderDataList(self.dataClone, self.topNum, self.sub, self.round, self.timeChosen, self.area)
		},
		laydateChange: function(date, endDate){
			var self = this;
			self.pData['ym1'] = date['year'] + '' + (date['month'] < 10 ? '0' + date['month']: date['month']) + '01'
			self.pData['ym2'] = endDate['year'] + '' + (endDate['month'] < 10 ? '0' + endDate['month']: endDate['month']) + '01'
			
			self.date = date;	
			self.endDate = endDate;
			self.getData(self.url, self.pData, function(data){
				// console.log(data)
		  		self.dataCb()
			})

		},
		//ajax获取数据
		getData: function(url, postData, cb) {
			$('.data-error').hasClass('active') ? $('.data-error').removeClass('active') : '';
			$('#dataList').append('<div class="refresh-div"><img src="/Public/home/images/icon-loading.png"/></div>')
			var self = this;
			$.when(
				$.ajax({
					dataType: 'json',
					type: 'get',
					url: url,
					data: postData,
				})
			).then(function(res){
				self.dataArr = []
				self.dataTraversal(self.dataArr, res['list'], dataTypeInvest)
				self.dataArr = self.dataKeyExchange(self.dataArr)
				// console.log(self.dataArr)
				cb && cb(self.dataArr)
			})
		},
		getSearchData: function(url, name, mh, cb){
			$('.data-error').removeClass('active')
			$('#dataList').append('<div class="refresh-div"><img src="/Public/home/images/icon-loading.png"/></div>')
			var self = this;
			$.when(
				$.ajax({
					dataType: 'json',
					type: 'get',
					url: url,
					data: {
						mh: mh,
						name: name
					}
				}),
				$.ajax({
					dataType: 'json',
					type: 'get',
					url: url,
					data: {
						tz: name
					}
				})
			).done(function(res1, res2){
				self.dataArr = []
				var newArr = res1[0]['list'].concat(res2[0]['list'])
				self.dataTraversal(self.dataArr, newArr, dataTypeInvest)
				self.dataArr = self.dataKeyExchange(self.dataArr)
				cb && cb(self.dataArr)
			})
		},
		bindEvent: function(){
			var self = this;
			var eData;
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
				$('.sjk-table div, .sjk-table ul, .sjk-table li, .sjk-table a').removeAttr('style')
				$('.screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer').removeAttr('style')
				$('#screenName').html(self.setting.oldtitle) 
				self.setting = {};
				self.settingFlag = false
			})
			if($(window).width() < 768) {
				$('#ym').on('click', function() {
					$('#ymView').fadeIn()
				})		
			}
			$('#name').on('keypress', function(e){
				if(e.which === 13 && $(this).val()) {
					$('#searchBtn').trigger('click')
				}
			})
			$('#searchBtn').on('click', function(){
				var name = $('#name').val()
				name && self.getSearchData(self.url, name, 1, function(data){
			  		self.dataCb(true)
				})
			})
			$('#mainType').on('click', 'li', function(){
				window.location.href = location.origin + location.pathname + ($(this).data('id') ? '?main=' + $(this).data('id'): '')
				// self.topNum = 10;
				// self.sub = '';
				// $(this).addClass('active').siblings().removeClass('active')
				// self.renderSub($(this).html())
				// self.pData['cate'] = ( $(this).html() != '全部' ? $(this).html() : '');
				// self.getData(self.url, self.pData, function(data){
				// 	// console.log(data)
			 //  		self.dataCb()
				// })
			})

			$('#subType').on('click', 'li', function(){
				window.location.href = location.origin + location.pathname + 
									($('#mainType li.active').data('id') ? '?main=' + $('#mainType li.active').data('id'): '') + 
									($(this).data('id') ? '&sub=' + $(this).data('id'): '')
				// $(this).addClass('active').siblings().removeClass('active')
				// self.sub = $(this).html()
			  	// self.dataCb()
			})
			$('#round').on('click', 'li', function(){
				$(this).addClass('active').siblings().removeClass('active')
				self.round = $(this).data('id');
			  	self.dataCb()
			})

			$('#showEChartsBtn').on('click', function(){
				eData = []
				//获取多选框被选中的id序列
				// console.log(self.dataClone)
				$('#dataList input[type=checkbox]:checked').each(function(index, ele){
					eData.push(self.eData[ $(this).data('id') ])
				})
				// console.log(eData)
				$('body').addClass('body-noScroll').find('#compareBox').fadeIn()

				
				self.myChart.resize({
					width: self.screenShot? 800 : $('.box-wrap').width(),
					height: self.screenShot? 620 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight(),
				})
				//以估值统计对比图作为默认数据
				$('.dropdown-box .dropdown ul li').eq(0).trigger('click')
				// showEchart(self.myChart, eData, self.chartType, self.screenShot, title)
				$('.unicorn-vs').addClass('small').find('#hideBtn').removeClass('active').html('展开')
			})
			//模态框事件
			$('.box-wrap-close, .mask').on('click', function() {
				$('body').removeClass('body-noScroll').find('#compareBox').fadeOut()
				$('.unicorn-vs').removeClass('small').find('#hideBtn').addClass('active').html('收起')
			})
			// 对模态框中的列表项绑定事件
			$('#dropUl li').each(function(ele){
				$(this).on('click', function(){
					$(this).addClass('active').siblings().removeClass('active')
					var title = self.setting.title || (self.title + $(this).html() + '图') ;
					var info = {
						type: $(this).data('type'),
						x: $(this).data('x'),
						y: $(this).data('y'),
						title: title,
						text: $(this).html(),
						dw: $(this).data('type') == 'count' ? '次': '元',
						sy: self.setting.bgImg || self.syImg
					}
					$('#screenName2 p').html(title)
					var newData
					if(info['type'] == 'count'){
						newData = dataCount(eData, info, self.chartType)
					}else {
						newData = dataEcharts(eData, info, self.chartType)
					}
					// console.log(newData)
					showEchart(self.myChart, newData, self.chartType, self.screenShot, info)
				})
			})
			$('#typeUl li').each(function(ele){
				$(this).on('click', function(){
					self.chartType = $(this).data('type')
					$('#dropUl li.active').trigger('click')
				})
			})
			//根据窗口实时变动，ECharts图表实时变动大小
			window.onresize = function() {
				$('#showBox').width(self.screenShot? 800 :'100%');
				self.myChart.resize({
					width: self.screenShot? 800 : $('.box-wrap').width(),
					height: self.screenShot? 620 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight() ,
				});

			};
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
				self.renderDataList(self.dataClone, self.topNum, self.sub, self.round, self.timeChosen, self.area)
			})
			$('#loadBtn').on('click', function(){
				self.topNum += 20;
				self.topNum == 50 ? self.topNum = '' :'';
			  	self.dataCb()
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
				var cpyname = $('#dataList li').eq($(this).data('id')).find('.n a').html()
				if($(this).is(':checked')) {
					$('<li data-id="' + $(this).data('id') + '" title="移除">' + cpyname + '</li>').appendTo($('#u-v-c-list'))
				}else {
					$('#u-v-c-list li').each(function(){
						if($(this).html() == cpyname) {
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
				$('#dataList li').eq($(this).data('id')).find('.compare-style').trigger('click');
			})
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
			$('#emptyArea').on('click', function() {
				$('#area').val('')
				self.area = '';
				self.dataCb()
			})

		},
		renderDataList: function(data, num, sub, round, time, area){
			// console.log(area)
			var self = this;
			$('#dataList').empty();
			$('#unicorn-vs').fadeOut().find('#u-v-c-list').empty();
			var newData = data;
			// if(time) {
			// 	newData = self.dataTimeTraversal(time, newData)
			// }
			if(sub) {
				newData = newData.filter(function(ele){
					return ele['a103'] == sub 
				})
			}
			if(round) {
				newData = newData.filter(function(ele){
					return ele['shares'].indexOf(round) != -1
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
			self.eData = newData
			// console.log(newData)
			newData.length - (num || newData.length) > 0 ? $('#loadBtn').show() : $('#loadBtn').hide()
			if(newData.length > 0) {
				//根据数据长度与显示数量判断加载按钮是否显示
				//截取显示数量的数据
				newData = newData.slice(0, num || newData.length)
				//遍历数组
				newData.forEach(function(ele, index){
					//处理投资人数据格式
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
					arr.forEach(function(item, index){
						if(index == 2 && arr.length > 3) {
							cgy += '<p>' + item  + '...</p>'
							return 
						}
						cgy += '<p>' + item  + '</p>'
					})
					$('#dataList').append('<li class="data-row">'+
						'<div class="data-row-item item-small item-checkbox">'+
							'<label class="check-box">'+
								'<input type="checkbox" data-id="' + index + '" name="compare" class="compare-style">'+
								'<span class="checkbox-style"></span>'+
							'</label>'+
						'</div>'+
						'<div class="data-row-item item-small">' + (index + 1) + '</div>'+
						'<div class="data-row-item n" title="' + ele['name'] + '"><a href="/User/investDataDetail.html?name=' + ele['name'] + '" target="_blank">' + ele['name'] + '</a></div>'+
						'<div class="data-row-item">' + ele['a103'] + '</div>'+
						'<div class="data-row-item address">' + address + '</div>'+
						'<div class="data-row-item" data-time="' + ele['time'] + '">' + ele['dtime'] + '</div>'+
						'<div class="data-row-item round">' + ele['shares'] + '</div>'+
						'<div class="data-row-item money">' + ele['a100'] + ele['a101'] + '</div>'+
						'<div class="data-row-item investor" title="' + ele['a102'] + '">' + cgy + '</div>'+
					'</li>')
				})
			}else {
				$('#dataList').append('<div class="data-error active">暂无数据</div>')
			}
			
				
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
		getURLString: function(name){
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURIComponent(r[2]); 
		    return null; 
		},
		
	}
	invest.init()


})(jQuery)