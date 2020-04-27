(function($){
	var search = {
		init: function() {
			var self = this;
			this.kw = this.getAjaxUrlString('kw')
			this.url =  location.protocol + '//itunes.apple.com/search';
			this.data = [];
			this.screenShot = false;
			this.setting = {};
			this.settingFlag = false;
			this.syImg = 'http://www.100ec.cn/Public/home/images/dsb-logo.png';
			this.title = '';
			this.bindEvent();
			this.getValue(this.kw)
		},
		getValue: function(val){
			var self = this;
			if(!val) {
				return
			}else {
				$('.app-store-mask').fadeOut()
				$('.search-box').fadeIn()
				self.getData(self.url, {
					term: val,
					entity: 'software',
					country: 'cn'
				}, 'POST', function(res){
					console.log(res)
					self.data = res.results
					self.renderDom(self.data)
				})
			}
		},
		renderDom: function(data){
			var self = this;
			$('#dataList').empty()
			var genre
			data.forEach(function(ele, index) {
				genre = genreType.filter(function(item){
					return item['genreIds'] == ele['primaryGenreId']
				})[0]['genreName']
				// ele['genreIds'].forEach(function(item, index){
				// 	var str = genreType.filter()
				// 	genreDiv += '<a href="/Index/appStoreRank.html?genreIds=' + item + '" target="_blank">' + item + '</a>'
				// })
				var rate = ele['averageUserRating'] || ele['averageUserRatingForCurrentVersion'] ;
				$('#dataList').append('<li class="app-store-row">'+
					'<div class="app-store-row-item item-small item-checkbox">'+
						'<label class="check-box">'+
							'<input type="checkbox" data-id="' + index + '" name="compare" class="compare-style" checked>'+
							'<span class="checkbox-style"></span>'+
						'</label>'+
					'</div>'+
					'<div class="app-store-row-item rank item-small" data-id="' + (index + 1) + '">' + (index + 1) + '</div>'+
					'<div class="app-store-row-item item-small"><a href="http://www.100ec.cn/Home/Index/appStoreDetail.html?id=' + ele['trackId'] + '" target="_blank" title="' + ele['artworkUrl60'] + '"><img class="app-rank-logo" src="' + ele['artworkUrl60'] + '" alt=""></a></div>'+

					'<div class="app-store-row-item name"><a href="http://www.100ec.cn/Home/Index/appStoreDetail.html?id=' + ele['trackId'] + '" target="_blank">' + ele['trackName'] + '</a></div>'+
					'<div class="app-store-row-item item-small">' + ele['version'] + '</div>'+
					'<div class="app-store-row-item genre"><a href="/Index/appStoreRank.html?genreIds=' + ele['primaryGenreId'] + '" target="_blank">' + genre + '</a></div>'+
					'<div class="app-store-row-item ">' + ele['artistName'] + '</div>'+
					'<div class="app-store-row-item " id="rating' + index + '">' + rate + '</div>'+
				'</li>')

				myPlugin.rating({
					ele: '#rating' + index,
					rating: rate,
					limit: 5
				})
			})
			self.isShowLi()
		},
		bindEvent: function(){
			var self = this;
			$('#nameMask').keypress(function(e){
				if(e.keyCode == 13) {
					$('#searchMaskBtn').trigger('click')
				}
			})
			$('#name').keypress(function(e){
				if(e.keyCode == 13) {
					$('#searchBtn').trigger('click')
				}
			})
			$('#searchMaskBtn').on('click', function(){
				$('#name').val($('#nameMask').val())
				$('#searchBtn').trigger('click')
			})
			$('#searchBtn').on('click', function(){
				self.kw = $('#name').val()
				self.getValue(self.kw)
				if(self.screenShot) {
					// self.isShowLi()
					$('body').removeClass('screenshot-open')
					self.screenShot = false;
				}

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
				}
				
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
				$('.sjk-table ul, .sjk-table li, .sjk-table a, .sjk-table, .sjk-table .screenshot-table-title, .sjk-table .screenshot-table-footer ').removeAttr('style')
				$('.screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer').removeAttr('style')
				$('#screenName').html(self.setting.oldtitle) 
				self.setting = {};
				self.settingFlag = false
			})
		},
		isShowLi: function(){
			var self = this;
			var num = 1
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
		getAjaxUrlString: function(name){
		    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURIComponent(r[2]); 
		    return null; 
		},
	}
	search.init()
})(jQuery)