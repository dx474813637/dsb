(function($){
	var appDetail = {
		init: function(){
			var self = this
			this.appId = this.getAjaxUrlString('id');
			this.url = 'https://itunes.apple.com/lookup';
			
			this.page = 1;
			this.pData = {
				id: this.appId,
				country: 'cn'
			}
			this.data = [];
			this.feed = [];
			this.cUrl = 'https://itunes.apple.com/rss/customerreviews/page=' + this.page + '/id=' + this.appId + '/sortby=mostrecent/json?l=en&&cc=cn';
			this.bindEvent()
			self.getData(self.url, self.pData, 'POST', function(res){
				// console.log(res)
				self.data = res.results[0]
				self.renderDom()
				self.getReviewsData()
			})
				

		},
		getReviewsData: function(){
			var self = this

			self.getData(self.cUrl, '', 'POST', function(res){
				// console.log(res)
				self.feed = res.feed.entry
				self.rendercDom()
			})
		},
		bindEvent: function(){
			var self = this
			$('.app-group').on('click', '.more', function(){
				$(this).parents('.app-group.info-overflow').removeClass('info-overflow')
				$(this).remove()
			})
		},
		rendercDom: function(){
			var self = this
			self.feed.forEach(function(ele, index){
				$('#feedList').append('<li class="customerreviews">'+
					'<div class="customerreviews-header">'+
						'<div class="customerreviews-header-info">'+
							'<span class="customerreviews-title">' + ele['title']['label'] + '</span>'+
							'<span class="customerreviews-author">用户：' + ele['author']['name']['label'] + '</span>'+
						'</div>'+
						'<div class="customerreviews-rate">评级：<span id="rating' + index + '">' + (ele['im:rating']['label'] || '-') + '</span></div>'+
					'</div>'+
					'<div class="customerreviews-content">'+
						'<p>' + ele['content']['label'] + '</p>'+
					'</div>'+
				'</li>')
				myPlugin.rating({
					ele: '#rating' + index,
					rating: ele['im:rating']['label'],
					limit: 5
				})
			})

		},
		renderDom: function(){
			var self = this
			var logo = 'http://www.100ec.cn/Public/home/images/projectlogo.png';
			$('#appSwiper').append('<img src="http://www.100ec.cn/Public/home/images/dsb-logo.png" style="position: absolute;top: 0;left:0;right:0;bottom: 0;margin: auto;z-index: 20; opacity: .6" />')
			$('#logo').attr('src', self.data.artworkUrl100 || logo)
			$('#trackName').html(self.data.trackName)
			$(document).attr('title', '【' + self.data.trackName + '】' + $(document).attr('title'))
			$('#artist').html(self.data.artistName)
			var genreName = genreType.filter(function(ele){
				return ele['genreIds'] == self.data.primaryGenreId
			})[0].genreName
			$('#genre, #genre2').html('<a href="/User/appStoreRank.html?genreIds=' + self.data.primaryGenreId + (self.data.formattedPrice == '免费'? '': '&feed=toppaid') +'" target="_blank">' + genreName + '</a>')
			
			$('#trackId').html('<a href="' + self.data.trackViewUrl + '" target="_blank">' + self.data.trackId + '</a>')	

			$('#price, #price2').html(self.data.formattedPrice)
			$('#currentVersionReleaseDate').html(new Date(self.data.currentVersionReleaseDate).toLocaleString())
			$('#currentVersion').html(self.data.version)

			$('#description').html(self.data.description.replace(/\n/g,"<br/>"))
			$('.app-version-info').html('版本 ' + self.data.version)
			self.data.releaseNotes && $('#releaseNotes').html(self.data.releaseNotes.replace(/\n/g,"<br/>"))
			$('#sellerName').html(self.data.sellerName)
			$('#fileSizeBytes').html(Math.round(self.data.fileSizeBytes /100000)/10 + ' MB')
			$('#minimumOsVersion').html('需要 iOS ' + self.data.minimumOsVersion + ' 或更高版本。')
			var lang = '';
			self.data.languageCodesISO2A.forEach(function(ele){
				lang += (ele == 'ZH' ? '简体中文' : ele)
			})
			$('#lang').html(lang)
			$('#contentAdvisoryRating').html(self.data.contentAdvisoryRating)
			$('#bundleId').html(self.data.bundleId)
			$('#releaseDate').html(new Date(self.data.releaseDate).toLocaleString())

			var rate = self.data.averageUserRating || self.data.averageUserRatingForCurrentVersion
			if(self.data.averageUserRating) {
				var msg =  '所有版本：' + self.data.userRatingCount + '个用户评分，平均评分：' + rate + '星'
			}else if(self.data.averageUserRatingForCurrentVersion) {
				var msg =  '当前版本：' + self.data.userRatingCountForCurrentVersion + '个用户评分，平均评分：' + rate + '星'
			}
			
			
			//加载渲染头部评级插件
			myPlugin.rating({
				ele: '#rating',
				rating: rate,
				limit: 5,
				isShowMsg: true,
				msg: msg
			})

			var imgArr = self.data.screenshotUrls;
			//跟图片大小数量初始化部分swiper样式
			var arr = self.initSwiperStyle(imgArr)
			imgArr.forEach(function(ele, index){
				var img = document.createElement('img');
				img.src = ele;
				var slide = $('<div class="swiper-slide"></div>').css('width', arr[index][0] + 'px')
				$('#appSwiper .swiper-wrapper').append(slide)
				img.onload = function(){
					slide.append(img)
				}
				
			})
			//初始化swiper插件
			// self.initSwiper(obj.count)
			self.initSwiper()
			//隐藏高度过大的描述div
			self.addMoreDom([$('#description'), $('#releaseNotes')])

			self.renderRank(self.data.primaryGenreId, self.data.formattedPrice)
			
		},
		renderRank: function(id, price){
			var self = this
			var url
			if(price == '免费') {
				url = 'https://itunes.apple.com/cn/rss/topfreeapplications/limit=100/genre=' + id + '/json'
			}else {
				url = 'https://itunes.apple.com/cn/rss/toppaidapplications/limit=20/genre=' + id + '/json'
			}

			self.getData(url, '', 'POST', function(res){
				var rs = res.feed.entry
				var rank
				rs.forEach(function(ele, index){
					if(ele['id']['attributes']['im:id'] == self.appId) {
						rank = index + 1
						return
					}
				})
				if(!rank) {
					rank = '100名外'
				}else {
					rank = '第' + rank + '名'
				}
				$('#genre, #genre2').html($('#genre, #genre2').html() + rank)
			

			})
		},
		addMoreDom: function(dom){
			dom.forEach(function(ele){
				var h = ele.height()
				if(h > 180) {
					var btn = $('<div class="more">更多</div>').css({
						position: 'absolute',
						bottom: 0,
						left: 0,
						width: '100%',
						height: '30px',
						lineHeight: '30px',
						color: '#00ffff',
						textAlign: 'center',
						backgroundColor: 'rgba(17, 24, 43, .9)',
						cursor: 'pointer'
					})
					ele.parents('.app-group').addClass('info-overflow').append(btn)
				}
			})
		},
		initSwiperStyle: function(arr){
			var whArr = []
			var widthSum = 0
			var minH = 350
			arr.forEach(function(ele, index){
				var newArr = ele.split('/')
				var number = newArr[newArr.length - 1]
				var pWidth = number.substring(0, 3)
				var pHeight = number.split('x')[1].substring(0, 3)

				if(pHeight > 350) {
					pWidth = pWidth/pHeight*350
					pHeight = 350
				}
				whArr.push([pWidth, pHeight])
				widthSum += pWidth
				minH < pHeight ?  '' : minH = pHeight
			})
			
			// var box = $('#appSwiper').outerWidth()
			// var count = Math.floor(box / pWidth) 
			if( widthSum < $('#appSwiper .swiper-wrapper').outerWidth() && $(window).outerWidth() > 768) {
				$('#appSwiper .swiper-wrapper').css({
					display: 'flex',
					justifyContent: 'center'
				})
			}
			$('#appSwiper .swiper-wrapper').css('height', minH+'px')
			return whArr
			// return {
			// 	count: count,
			// 	width: pWidth
			// }
		},
		initSwiper: function(){
			var swiper = new Swiper('#appSwiper', {
		        slidesPerView: 'auto',
		        pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			    },
		        paginationClickable: true,
		        spaceBetween: 20,
		        navigation: {
			        nextEl: '.swiper-button-next',
			        prevEl: '.swiper-button-prev',
			    },
			    autoplay: {
			        delay: 5000,
			        disableOnInteraction: false,
			    },
		    });
		},
		//ajax获取数据
		getData: function(url, postData, type, cb) {
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
	appDetail.init()
})(jQuery)