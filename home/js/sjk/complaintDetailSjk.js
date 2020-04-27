(function($){
	var list = {
		init: function(){
			var self = this;
			this.website = this.getURLString('website')
			this.url = '';
			this.getData = [];
			this.cData = [];
			this.lastSort = '';
			this.screenShot = false;
			this.curYear = new Date().getFullYear();
			this.yearData = [];
			this.setting = {};
			this.settingFlag = false;
			this.syImg = '';
			
			// this.keyArr = ['first_quarter', 'second_quarter', 'third_quarter', 'fourth_quarter', 'first_half', 'whole_year']
			this.tableTitle = this.website + '电商消费历年评级数据';
			// new complaintMoreData({
			// 	url: '',
			// 	website: self.website,
			// 	year: '2018',
			// 	time: 'whole_year',
			// 	screenShot: self.screenShot,
			// 	title: 'xx',
			// })
			this.initRenderDom()
			this.bindEvent()
			this.ajaxData(this.url, function(data) {
				self.dataTraversal(data)
				self.cData = self.cloneData(self.getData);
				self.renderListDom(self.cData)
			})
			this.myChart = echarts.init(document.getElementById('showBox'));

		},
		initRenderDom: function(){
			var self = this;
			$('.categoryTwo-name, #screenName').html(self.website + '电商消费历年评级数据')
			$(document).attr('title', '【' + self.website + '】电商消费历年评级数据 网经社 网络经济服务平台')
			
			for(var i = 2018; i < this.curYear + 1 ; i++) {
				this.yearData.unshift(i)
			}
			this.yearData.forEach(function(ele, index){
				if(index == 0){
					$('#year .sjk-choose-list').append('<li class="list-item" data-year="">全部</li>')
				}
				$('#year .sjk-choose-list').append('<li class="list-item" data-year="' + ele + '">' + ele + '年</li>')
			})
		},
		//获取url需要的平台名参数
		getURLString: function(name) {
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURIComponent(r[2]); 
		    return null; 
		},
		//ajax获取数据
		ajaxData: function(url, cb) {
			var self = this;
			// $('#dataList').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
			$.when(
				$.ajax({
					url: url,
					type: 'GET',
					dataType: 'json',
				})
			).then(function(res){
				// console.log(res)
				cb && cb(res)
			})
			
		},
		renderListDom: function(data, key){
			// console.log(data)
			$('#dataList').empty()
			$('#unicorn-vs').fadeOut().find('#u-v-c-list').empty();
			data.forEach(function(ele, index){
				
				if(ele['time'] != 'today' && ele['time'] != 'second_half' ) {
					var dTime 
					if(ele['time'] == '618') {
						dTime = '618'
					}else{
						dataTime.forEach(function(item){item['id'] == ele['time'] ? dTime = item['title'] : ''})

					}
					$('#dataList').append('<li class="data-row">'+
						'<div class="data-row-item item-small item-checkbox">'+
							'<label class="check-box">'+
								'<input type="checkbox" data-id="'+ index +'" name="compare" class="compare-style">'+
								'<span class="checkbox-style"></span>'+
							'</label>'+
						'</div>'+
						'<div class="data-row-item n1" data-year="' + ele['year'] + '">' + ele['year'] + '年</div>'+
						'<div class="data-row-item n2" data-time="' + ele['time'] + '">' + dTime + '</div>'+
						'<div class="data-row-item">' + ele['pre'] + '%</div>'+
						'<div class="data-row-item">' + ele['feedback'] + '</div>'+
						'<div class="data-row-item">' + ele['score_ave'] + '</div>'+
						'<div class="data-row-item">' + ele['buy'] + '</div>'+
						'<div class="data-row-item">' + ele['grade'] + '</div>'+
					'</li>')
				}
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
			$('#dataList').on('click', '.n2', function() {
				var year = $(this).siblings('.n1').data('year');
				var time = $(this).data('time');
				var str = $(this).html()
				new complaintMoreData({
					url: '',
					website: self.website,
					year: year,
					time: time,
					screenShot: self.screenShot,
					title: self.website + year + '年' + str,
				})
			})
			$('#year').on('click', '.list-item', function(){
				var data
				// console.log(self.getData)
				data = self.chooseEvent($(this).data('year'), self.getData);
				self.cData = self.cloneData(data);
				self.renderListDom(self.cData)
			})
			//统一绑定排序的按钮，按钮唯一排序，当前项排序，同按钮点击第二次则为倒顺排序，不支持多按钮排序
			$('.sort').on('click', function(){
				if(!$(this).hasClass('down') && !$(this).hasClass('up')) {
					$(this).addClass('down').siblings('.sort').removeClass('down up');
					self.cData = self.cloneData(self.getData);
					self.px(self.cData, $(this).data('key'));
					self.lastSort = $(this).data('key');
				}else {
					if(self.lastSort == $(this).data('key')) {
						self.cData.reverse()
						!$(this).hasClass('up') ? $(this).addClass('up').removeClass('down') : $(this).addClass('down').removeClass('up');
					}
				}
				//渲染页面dom
				self.renderListDom(self.cData, $(this).data('key'))
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
				

				// var cpyname = $('#dataList li').eq($(this).data('id')).find('.n1').html() + $('#dataList li').eq($(this).data('id')).find('.n2').html()
				var cpyname = $(this).parent().parent().siblings('.n1').html() + $(this).parent().parent().siblings('.n2').html()
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
				$('#dataList input[type=checkbox]:checked').each(function(ele){
					eData.push(self.cData[ $(this).data('id') ])
				})
				// 对被选中的数据进行id顺序排序，因为id的顺序已在开始ajax获取的时候默认排序过，因此id顺序就是默认排序，但是点击时候的顺序并非会按照id顺序选中可能会乱序选择
				// self.px(eData, 'buy');
				$('body').addClass('body-noScroll').find('#compareBox').fadeIn()
				self.myChart.resize({
					width: self.screenShot? 800 : $('.w').width(),
					height: self.screenShot? 620 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight(),
				})
				$('.dropdown-box .dropdown ul li').eq(0).trigger('click')
				// $('#screenName2 p').html(self.website + '电商消费历年全部指标对比图')
				// // //以估值统计对比图作为默认数据
				// showEchartsUnicorn(self.myChart, '', eData, 'bar', self.screenShot, self.website)
				// console.log(eData)
				$('.unicorn-vs').addClass('small').find('#hideBtn').removeClass('active').html('展开')
			})
			//模态框事件
			$('.box-wrap-close, .mask').on('click', function() {
				$('body').removeClass('body-noScroll').find('#compareBox').fadeOut()
				$('.unicorn-vs').removeClass('small').find('#hideBtn').addClass('active').html('收起')
			})
			// 对模态框中的列表项绑定事件
			$('.dropdown-box .dropdown ul li').each(function(ele){
				$(this).on('click', function(){
					var title = self.setting.title || self.tableTitle + $(this).html() +'对比图'
					console.log(title)
					// $('#screenName2 p').html(  ( $('#dataField .active').data('id') != 'all' ? $('#dataField .active').html() : '泛电商') + '“独角兽”' + $(this).html() + ($(this).html() != '估值' ? '分布图' : '对比图'))
					// self.px(eData, $(this).data('key'));
					$('#screenName2 p').html(title)
				
					showEchartsUnicorn(self.myChart, $(this).data('key'), eData, 'bar', self.screenShot, title, self.setting.bgImg || self.syImg)
				})
			})

			// 根据窗口实时变动，ECharts图表实时变动大小
			window.onresize = function() {
				$('#showBox').width(self.screenShot? 800 :'100%');
				self.myChart.resize({
					width: self.screenShot? 800 : $('.w').width(),
					height: self.screenShot? 620 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight() ,
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
				$('.sjk-table div, .sjk-table ul').removeAttr('style')
				$('.screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer').removeAttr('style')
				$('#screenName').html(self.setting.oldtitle) 
				self.setting = {};
				self.settingFlag = false
			})
		},
		//将请求回来的数据根据页面需求进行过滤
		dataTraversal: function(data){
			// console.log(data)
			var self = this;
			var i = 0;
			self.getData = [];
			for(var key in data) {
				if(data[key].length > 0) {

					self.getData[i] = {};
					var year = key.slice(0, key.indexOf('_'));
					var time = key.slice(key.indexOf('_') + 1)
					self.getData[i]['year'] = year;
					self.getData[i]['time'] = time;

					for(var item in data[key][0]) {
						self.getData[i][item] = data[key][0][item]
					}
					i++;
				}
			}
			// console.log(self.getData)
			// $('.sort').removeClass('down up')
			// $('.sort[data-key=buy]').addClass('down')
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
			this.lastSort = key;
			data.sort(function(a, b){
				return b[key] - a[key] 
			})
		},
	}
	list.init()
}(jQuery))