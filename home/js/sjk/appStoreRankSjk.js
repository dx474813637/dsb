(function($){

	appStore = {
		init: function() {
			var self = this;
			this.type = {
				feedType: self.getAjaxUrlString('feed') || 'topfree',
				genreIds: self.getAjaxUrlString('genreIds') || '',
			}
			config.feedType = this.type.feedType
			config.genreIds = this.type.genreIds
			this.limit = config.limit || '20';
			this.eqpType = config.eqpType
			this.url = self.getAjaxUrl(config)
			this.dataArr = []
			this.setting = {};
			this.settingFlag = false;
			this.syImg = '';
			this.title = '';
			this.feedTime = '';
			this.cgy = '';
			this.screenShot = false;
			this.bindEvent()
			this.renderDom()
			this.getFeed(this.url)
		},
		renderDom: function() {
			var self = this;
			feedType.forEach(function(ele, index){
				$('#feedType').append('<li class="' + (self.type['feedType']==ele['feedIds'] ? 'active': '' ) + '" data-id="' + ele['feedIds'] + '">' + ele['feedName'] + '</li>')
			})
			genreType.forEach(function(ele, index){
				$('#genreType').append('<li class="' + (self.type['genreIds']==ele['genreIds'] ? 'active': '' ) + '" data-id="' + ele['genreIds'] + '">' + ele['genreName'] + '</li>')
			})
			$(document).attr('title', '【' + $('#feedType li.active').html() + '】' + $(document).attr('title'))
			
		},
		getFeed: function(url) {
			var self = this;
			self.getData(url, '', 'get', function(data){
				self.renderData(data)
			})
		},
		renderData: function (data) {
			var self = this;
			self.cgy = $('#genreType li.active').html()
			// self.title = 'AppStore中国' + $('#feedType li.active').html() + '（' + self.cgy + '）下载量' + 'TOP' + self.limit
			self.feedTime = new Date(data.feed.updated.label).toLocaleString()
			// $('#screenName').html(self.title)
			// $('#cgy').html('类别：' + $('#genreType li.active').html())
			$('#eqp').html('设备：' + $('#eqpType li.active').html())
			$('#feedTime').html('更新时间：' + self.feedTime)
			self.renderList(data)
		},
		renderList: function (data) {
			var self = this;
			$('#dataList').empty()
			var rs = data.feed.entry;
			var genre = ''
			rs.forEach(function(ele, index) {
				genre = genreType.filter(function(item){
					return item['genreIds'] == ele['category']['attributes']['im:id']
				})[0]['genreName']
				$('#dataList').append('<li class="app-store-row">'+
					'<div class="app-store-row-item item-small item-checkbox">'+
						'<label class="check-box">'+
							'<input type="checkbox" data-id="' + index + '" name="compare" class="compare-style" checked>'+
							'<span class="checkbox-style"></span>'+
						'</label>'+
					'</div>'+
					'<div class="app-store-row-item rank item-small" data-index="' + (index + 1) + '">' + (index + 1) + '</div>'+
					'<div class="app-store-row-item app-logo item-small"><a href="http://www.100ec.cn/Home/User/appStoreDetail.html?id=' + ele['id']['attributes']['im:id'] + '" target="_blank"><img class="app-rank-logo" src="' + ele['im:image'][0]['label'] + '" alt=""></a></div>'+
					'<div class="app-store-row-item info">'+
						'<div class="app-info-item name"><a href="http://www.100ec.cn/Home/User/appStoreDetail.html?id=' + ele['id']['attributes']['im:id'] + '" target="_blank" title="' + ele['im:name']['label'] + '">' + ele['im:name']['label'] + '</a></div>'+
						'<div class="app-info-item artist" title="' + ele['im:artist']['label'] + '">' + ele['im:artist']['label'] + '</div>'+
						'<div class="app-info-item genre item-small"><a href="' + location.origin + location.pathname + '?genreIds=' + ele['category']['attributes']['im:id'] + '" target="_blank">' + genre + '</a></div>'+
					'</div>'+
					'<div class="app-store-row-item time">' + ele['im:releaseDate']['attributes']['label'] + '</div>'+
					
				'</li>')
			})
			self.isShowLi()
		},
		bindEvent: function() {
			var self = this;
			$('#name').keypress(function(e){
				if(e.keyCode == 13) {
					$('#searchBtn').trigger('click')
				}
			})
			$('#searchBtn').on('click', function () {
				var val = $('#name').val();
				if(!val) {
					return
				}
				if(isNaN(val)) {
					//非数字
					window.location.href = '/User/appStoreSearch.html?kw=' + val

				}else {
					console.log(val)
				}
			})
			$('.search-type-list').on('click', 'li', function() {
				$(this).addClass('active').siblings().removeClass('active')
			})
			$('#feedType').on('click', 'li', function() {
				config.feedType = $(this).data('id')
				window.location.href = self.getUrl(config)
			})
			$('#genreType').on('click', 'li', function() {
				config.genreIds = $(this).data('id')
				window.location.href = self.getUrl(config)
			})
			$('#eqpType').on('click', 'li', function(){
				if(self.screenShot) {
					$('body').removeClass('screenshot-open')
					self.screenShot = false;
				}
				config.eqpType = $(this).data('eqptype')
				self.url = self.getAjaxUrl(config)
				self.getFeed(self.url)
			})
			$('#loadBtn').on('click', function() {
				config.limit += 20
				self.limit = config.limit
				self.url = self.getAjaxUrl(config)
				self.getFeed(self.url)
			})
			$('#screenshotBtn').on('click', function(){
				if(self.screenShot) {
					$('body').removeClass('screenshot-open')
					self.screenShot = false;
					self.isShowLi()
				}else {
					$('body').addClass('screenshot-open')
					self.screenShot = true;
					self.isShowLi()
					var bz = $('.sjk-form.bz-form p[data-type=' + $('#feedType li.active').data('id') + ']').html()
					$('#appSub').html('备注：'+ bz.slice(2))
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
					var dom = $('.screenshot-open .app-store-rank, .screenshot-open .sjk-data-title .s-d-t-item')
					self.setting.font && settingFont(self.setting.font, dom)
				}else if(type == 'color') {
					self.setting.color = $('input[name=color]').val()
					var dom1 = $('.screenshot-table-title, .screenshot-table-footer, .screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer, .screenshot-open .app-store-rank .sjk-data-title')
					var dom2 = $('.screenshot-open .app-store-rank #dataList, .screenshot-open .sjk-data-title .s-d-t-item, .screenshot-open .data-row, .screenshot-open .sjk-data-title')
					var dom3 = $('.screenshot-open .showLi-bg')
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
				$('.sjk-table div, .sjk-table ul, .sjk-table li, .sjk-table a, .sjk-table').removeAttr('style')
				$('.screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer').removeAttr('style')
				$('#screenName').html(self.setting.oldtitle) 
				self.setting = {};
				self.settingFlag = false
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
		},
		isShowLi: function(){
			var self = this;
			var num = 1
				console.log(self.screenShot)
			$('#dataList li').each(function(index, ele){
				var flag = $(this).find('input').is(':checked')
				if(!self.screenShot) {
					$(this).removeClass('hideLi showLi showLi-bg')
					$(this).find('.app-store-row-item.rank').html($(this).find('.app-store-row-item.rank').data('index'))
				}else {
					if(!flag) {
						$(this).addClass('hideLi')
					}else {
						$(this).find('.app-store-row-item.rank').html(num)
						$(this).removeClass('hideLi').addClass('showLi')
						num%2 == 0 ?$(this).addClass('showLi-bg') : ''
						num++
					}
				}
					
			})
			self.limit = num - 1
			self.title = 'AppStore中国' + $('#feedType li.active').html() + '（' + self.cgy + '）' + ($('#feedType li.active').html() == '畅销榜' ? '收入' :'下载量')  + 'TOP' + self.limit
			$('#screenName').html(self.title)
			

			
		},
		//ajax获取数据
		getData: function(url, postData, type, cb) {
			$('#dataList').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
			var self = this;
			$.when(
				$.ajax({
					dataType: 'json',
					type: type,
					url: url,
					data: postData,
				})
			).then(function(res){
				cb && cb(res)
			})
		},
		getUrl: function(obj) {
			var term = '?feed=' + obj.feedType;
			obj.genreIds ? term = term + '&genreIds=' + obj.genreIds : '';
			return location.origin + location.pathname + term
		},
		getAjaxUrl: function(obj) {
			var url = ''
			var baseUrl = obj.baseUrl || 'https://itunes.apple.com';
			var country = obj.country || 'cn';
			var feedType = obj.feedType || 'topfree';
			var genreIds = obj.genreIds || '';
			var limit = obj.limit || '20';
			var eqpType = obj.eqpType;
			var contentType = obj.contentType
			var feed = feedType + (eqpType == 'iphone' ? '' : 'ipad') + contentType;

			url = baseUrl + '/' + country + '/rss/' + feed + '/limit=' + limit + '/genre=' + genreIds + '/json'
			return url
		},
		getAjaxUrlString: function(name){
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURIComponent(r[2]); 
		    return null; 
		},
	}

	appStore.init()
})(jQuery)