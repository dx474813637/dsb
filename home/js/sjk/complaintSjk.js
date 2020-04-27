(function($){
	var complaint = {
		init: function(){
			var self = this;
			this.type = {
				main: self.getURLString('main') || 'all',
				sub: self.getURLString('sub') || ''
			}
			// this.url = '/Index/json_315_post.html';
			this.url = '/api/index.php?_a=data',
			this.getData = [];
			this.cData = [];
			this.lastSort = 'buy';
			this.screenShot = false;
			this.curYear = new Date().getFullYear();
			this.postData = {
				type: self.type.sub || self.type.main,
				year: this.curYear,
				time: '',
				// total: '9'
			};
			this.yearData = [];
			this.tableTitle = ''; 
			this.title = '';
			this.setting = {};
			this.settingFlag = false;
			this.syImg = '/Public/home/images/dsb-logo.png';
			
			this.bindEvent();
			this.renderInitDom();
			// this.ajaxData(this.url, this.postData, function(data) {
			// 	// $('#field').find('p').data('type', '');
			// 	self.dataTraversal(data['list']);
			// 	self.cData = self.cloneData(self.getData);
			// 	self.renderListDom(self.cData, 'buy');
			// })
			$('#year ul li').eq(1).trigger('click')
			this.myChart = echarts.init(document.getElementById('showBox'));

		},
		renderInitDom: function() {
			var self = this;
			dataField.forEach(function(ele, index){
				// index == 0 ? $('#field .sjk-choose-list').append('<li class="list-item data-type="">全部</li>') : '';
				// $('#field .sjk-choose-list').append('<li class="list-item" data-type="' + ele['id'] + '">' + ele['title'] + '</li>')
				
				if(index == 0) {
					$('#mainType').append('<li ' + (self.type.main != 'all'  ? '' : 'class="active"') + ' data-type="all">全部</li>')
					$('#subType').append('<li ' + (self.type.sub  ? '' : 'class="active"') + ' data-type="all">全部</li>')
				}
				if(ele['id'] == self.type.main && ele['children']) {
					ele['children'].forEach(function(item) {
						$('#subType').append('<li ' + (self.type.sub == item['id'] ? 'class="active"' : '') + ' data-type="' + item.id + '">' + item.title + '</li>')
					})
					
				}
				$('#mainType').append('<li ' + (self.type.main == ele['id'] ? 'class="active"' : '') + ' data-type="' + ele['id'] + '">' + ele['title'] + '</li>')
			})
			for(var i = 2018; i < this.curYear + 1 ; i++) {
				this.yearData.unshift(i);
			}
			this.yearData.forEach(function(ele, index){
				$('#year .sjk-choose-list').append('<li class="list-item" data-year="' + ele + '">' + ele + '年</li>');
			})
			dataTime.forEach(function(ele, index){
				index == 0 ? $('#time .sjk-choose-list').append('<li class="list-item" data-time=""  data-end="101">至今</li>') : '';
				$('#time .sjk-choose-list').append('<li class="list-item" data-time="' + ele['id'] + '" data-text="' + ele['text'] + '" data-end="' +  ele['end']+ '">' + ele['title'] + '</li>')
				
			})
			$('#year').find('p').data('year', this.postData['year']).html(this.curYear + '年');

			$('#time').find('p').data('time', this.postData['time']).html('至今');

			this.timeData(self.postData['year']);
			// $('#mainType li').eq(0).trigger('click')
			self.tableTitle = $('#year p').html() + 
							($('#time p').html() != '全年' ? ($('#time p').data('text') ? $('#time p').data('text') : $('#time p').html()) : '') + 
							'全国' + 
							($('#mainType li.active').html() != '全部' ? $('#mainType li.active').html() : '电子商务') +
							($('#subType li.active').html() != '全部' ? '（' + $('#subType li.active').html() + '）' : '')
			$('#screenName').html(this.tableTitle + '消费评级榜');

		},
		chooseEvent: function(tar, keywords, pxKey, tarP){

			var self = this;
			if($('.refresh-div').length == 0) {
				var self = this;
				tarP && tarP.find('p').data(keywords, tar.data(keywords)).data('text', tar.data('text')).html(tar.html());
				self.postData[keywords] = tar.data(keywords);
				self.tableTitle = $('#year p').html() + 
							($('#time p').html() != '全年' ? ($('#time p').data('text') ? $('#time p').data('text') : $('#time p').html()) : '') + 
							'全国' + 
							($('#mainType li.active').html() != '全部' ? $('#mainType li.active').html() : '电子商务') +
							($('#subType li.active').html() != '全部' ? '（' + $('#subType li.active').html() + '）' : '')
				$('#screenName').html(this.tableTitle + '消费评级榜')
						
				self.ajaxData(self.url, self.postData, function(data){
					self.dataTraversal(data['list']);
					self.cData = self.cloneData(self.getData);
					self.renderListDom(self.cData, pxKey);
				})
			}

		},
		getURLString: function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURIComponent(r[2]); 
		    return null; 
		},
		bindEvent: function() {
			var self = this;
			// $('#field').on('click', '.list-item', function(){
  
			// 	self.chooseEvent($(this), 'type', 'buy')
				
			// })
			$('#mainType').on('click', 'li', function(){
				if(!$(this).hasClass('active')) {
					window.location.href = '/Index/complaintData.html' + '?main=' + $(this).data('type') 
				}
				// $(this).addClass('active').siblings().removeClass('active')
				// self.chooseEvent($(this), 'type', 'buy')
				// self.renderNavSub($(this).data('type'))
			})
			$('#subType').on('click', 'li', function(){

				if(!$(this).hasClass('active') && self.type.main && self.type.main != 'all') {
					window.location.href = '/Index/complaintData.html' + '?main=' + $('#mainType .active').data('type')  + (  $(this).data('type') != 'all' ? '&sub=' + $(this).data('type') : '' )
				}
				// $(this).addClass('active').siblings().removeClass('active')
				// self.chooseEvent($(this), 'type', 'buy')
			})
			$('#year').on('click', '.list-item', function(){
				if($(this).data('year') != self.curYear ) {
					self.postData['time'] = 'whole_year';
					$('#time p').data({
						time: 'whole_year',
						text: '全年',
					}).html('全年')
				}else {
					self.postData['time'] = '';
					$('#time p').data({
						time: '',
						text: '',
					}).html('至今')
				}
				self.chooseEvent($(this), 'year', 'buy', $('#year'))
				$('#time .list-item').removeClass('hide')
				self.timeData(self.postData['year'])
			})
			$('#time').on('click', '.list-item', function(){
				$(this).data('time') != self.curYear? self.postData['time'] = 'whole_year' : self.postData['time'] = '';
				self.chooseEvent($(this), 'time', 'buy', $('#time'))
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
				

				var cpyname = $('#dataList li').eq($(this).data('id')).find('.n').html()
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
				// console.log(self.newData)
				eData = []
				//获取多选框被选中的id序列
				$('#dataList input[type=checkbox]:checked').each(function(ele){
					eData.push(self.cData[ $(this).data('id') ])
				})
				// 对被选中的数据进行id顺序排序，因为id的顺序已在开始ajax获取的时候默认排序过，因此id顺序就是默认排序，但是点击时候的顺序并非会按照id顺序选中可能会乱序选择
				self.px(eData, 'buy');
				$('body').addClass('body-noScroll').find('#compareBox').fadeIn()
				self.myChart.resize({
					width: self.screenShot? 800 : $('.w').width(),
					height: self.screenShot? 620 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight(),
				})

				$('.dropdown-box .dropdown ul li').eq(0).trigger('click')
				// $('#screenName2 p').html(self.tableTitle + '综合指数对比图')
				// // //以估值统计对比图作为默认数据
				// showEchartsUnicorn(self.myChart, 'buy', 'company', eData, 'bar', self.screenShot, self.tableTitle)
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
					// $('#screenName2 p').html(  ( $('#dataField .active').data('id') != 'all' ? $('#dataField .active').html() : '泛电商') + '“独角兽”' + $(this).html() + ($(this).html() != '估值' ? '分布图' : '对比图'))
					self.px(eData, $(this).data('key'));
					$('#screenName2 p').html(title)
				
					showEchartsUnicorn(self.myChart, $(this).data('key'), $(this).data('name'), eData, 'bar', self.screenShot, title, self.setting.bgImg || self.syImg)
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
					$('#bzContent').css('display', 'block')
				}else {
					$('body').addClass('screenshot-open')
					self.screenShot = true;
					$('#showBox').width(800)
					$('#bzContent').css('display', 'none')
				}
				
			})

			//统一绑定排序的按钮，按钮唯一排序，当前项排序，同按钮点击第二次则为倒顺排序，不支持多按钮排序
			$('.sort').on('click', function(){
				if(!$(this).hasClass('down') && !$(this).hasClass('up')) {
					$(this).addClass('down').siblings('.sort').removeClass('down up');
					self.cData = self.cloneData(self.getData);
					self.px(self.cData, $(this).data('key'));
					self.lastSort = $(this).data('key')
				}else {
					if(self.lastSort == $(this).data('key')) {
						self.cData.reverse()
						!$(this).hasClass('up') ? $(this).addClass('up').removeClass('down') : $(this).addClass('down').removeClass('up');
					}
				}
				//渲染页面dom
				self.renderListDom(self.cData, $(this).data('key'))
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
					var dom2 = $('.screenshot-open .data-row .data-row-item, .screenshot-open .sjk-data-title .s-d-t-item, .screenshot-open .data-row, .screenshot-open .sjk-data-title, .screenshot-table-bz, .screenshot-table-bz-wrap')
					var dom3 = $('.screenshot-open .data-row:nth-child(even) .data-row-item, .screenshot-table-bz')
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
		timeData: function(year){
			var self = this;
			$('#time .list-item').each(function(index, ele){
				if(year == self.curYear) {
					var curDate = new Date().getMonth() + 1 + '' + (new Date().getDate() < 10 ? '0' + new Date().getDate(): new Date().getDate());
					// console.log($(ele).data('end') ,curDate)
					if($(ele).data('end') > curDate) {
						$(ele).addClass('hide')
					}else {
						$(ele).removeClass('hide')
					}
				}else {
					$(ele).html() == '至今' ? $(ele).addClass('hide') : '';
				}

			})
		},
		//ajax获取数据
		ajaxData: function(url, pData, cb) {
			var self = this;
			$('#dataList').append('<div class="refresh-div"><img src="/Public/home/images/icon-loading.png"/></div>')
			// console.log(pData)
			$.when(
				$.ajax({
					url: url,
					type: 'POST',
					data: pData,
					dataType: 'json',
				})
			).then(function(res){
				// console.log(res)
				cb && cb(res)
			})
			
		},
		//将请求回来的数据根据页面需求进行过滤
		dataTraversal: function(data){
			// console.log(data)
			var self = this;
			self.getData = [];
			data.forEach(function(ele, index){
				if(ele['company'] != '1') {
					
					self.getData[index] = {}
					for(var key in ele) {
						self.getData[index][key] = ele[key]
					}
				}
			})
			$('.sort').removeClass('down up')
			$('.sort[data-key=buy]').addClass('down')
		},
		renderListDom: function(data, key){
			$('#dataList').empty()
			$('#unicorn-vs').fadeOut().find('#u-v-c-list').empty();
			var lastRank ;
			var lastItem;
			var curRank;
			data.forEach(function(ele, index){
				curRank = index + 1
				if(ele[key] != lastItem) {
					lastRank = curRank
				}

				$('#dataList').append('<li class="data-row">'+
					'<div class="data-row-item item-small item-checkbox">'+
						'<label class="check-box">'+
							'<input type="checkbox" data-id="'+ index +'" name="compare" class="compare-style">'+
							'<span class="checkbox-style"></span>'+
						'</label>'+
					'</div>'+
					'<div class="data-row-item item-small">'+ ( ele[key] == lastItem ? lastRank : curRank ) +'</div>'+
					'<div class="data-row-item n" title="' + ele['company'] + '">' + ele['company'] + '</div>'+
					'<div class="data-row-item">' + ele['pre'] + '%</div>'+
					'<div class="data-row-item">' + ele['feedback'] + '</div>'+
					'<div class="data-row-item">' + ele['score_ave'] + '</div>'+
					'<div class="data-row-item">' + ele['buy'] + '</div>'+
					'<div class="data-row-item">' + ele['grade'] + '</div>'+
					'<div class="data-row-item">'+
						'<a href="/Index/complaintDataDetail.html?website=' + ele['company'] + '" target="_blank">数据详情</a>'+
					'</div>'+
				'</li>')
				lastItem = ele[key];
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
			this.lastSort = key;
			data.sort(function(a, b){
				return b[key] - a[key] 
			})
		},
		renderNavSub: function(typeId){
			// console.log(typeId)
			dataField.forEach(function(ele){
				if(ele['id'] == typeId) {
					$('#subType').empty()
					$('#subType').append('<li class="active" data-type="all">全部</li>')
					if(ele['children']) {

						ele['children'].forEach(function(item, index){
							$('#subType').append('<li data-type="' + item['id']+ '">' + item['title']+ '</li>')
						})
					}
				}
			})
		},

	}
	complaint.init()
}(jQuery))