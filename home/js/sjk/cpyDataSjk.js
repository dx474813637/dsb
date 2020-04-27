(function($){
	list = {
		init: function() {
			var self = this
			this.name = this.getURLString('name');
			this.data = this.getURLString('data') || 'zx';
			this.eq = $(window).width() < 768 ? 'mb' : 'pc';
			this.stock = '';
			this.api = {
				zx: '/searchjson.html',
				cb: '/Index/financial_json',
				ncb: '/Index/newfinancial_json',
				pj: 'http://www.315.100ec.cn/api/index.php?_a=data&f=website',
				pjMore: 'http://www.315.100ec.cn/api/index.php?_a=data&f=getrate',
				trz: '/Index/investment_json',
				app: 'https://itunes.apple.com/lookup'
			}
			this.zxData = {
				nameList: '',
				name: '',
				n: this.eq == 'mb' ? 15 : 30,
				p: 1
			}
			this.cbData = {
				name: ''
			}
			this.ncbData = {
				name: ''
			}
			this.pjData = {
				nameList: '',
				name: ''
			}
			this.trzData = {
				nameList: '',
				name: ''
			}
			this.appData = {
				nameList: '',
				key: '',
				monthId: ''
			}
			this.myChart = '';
			this.flag = true
			this.renderInfo()
			this.bindEvent()
			this.load()

		},
		renderInfo: function() {
			var self = this
			$('.cpy-name').html(self.name)
			$('.zx-tab').show()
			$(document).attr('title', '【' + self.name + '】' + $(document).attr('title'))
			if(companyConfig[self.name].cb ) {
				$('.cb-tab').show()
				$('#cbDataListTitle').html(self.name + '财报核心数据')
			}
			if(companyConfig[self.name].ncb ) {
				$('.ncb-tab').show()
				$('#cbDataListTitle').html(self.name + '财报核心数据')
			}
			if(companyConfig[self.name].pj && companyConfig[self.name].pj.length > 0) {
				$('.pj-tab').show()
			}
			if(companyConfig[self.name].trz && companyConfig[self.name].trz.length > 0) {
				$('.trz-tab').show()
			}
			if(companyConfig[self.name].app && companyConfig[self.name].app.length > 0) {
				$('.app-tab').show()
			}
		},
		load: function() {
			var self = this
			self.renderStockData()
			$('#tabsModule .' + self.data + '-tab').addClass('active').siblings().removeClass('active')
			if(self.data == 'ncb') {
				$('.data-module-item.cb').addClass('active').siblings().removeClass('active')		
			}else {
				$('.data-module-item.' + self.data).addClass('active').siblings().removeClass('active')

			}
			
			if(this.data == 'zx') {
				self.loadZxModule()
			}else if(this.data == 'cb') {
				self.loadCbModule()
			}else if(this.data == 'ncb') {
				self.loadCbModule('new')
			}else if(this.data == 'pj') {
				self.loadPjModule()
			}else if(this.data == 'trz') {
				self.loadTrzModule()
			}else if(this.data == 'app') {
				self.loadAppModule()
			}

		},
		renderStockData: function() {
			var self = this
			var stockCode = companyConfig[self.name]['stockCode']
			if(stockCode) {
				$('#stockModule').parent().show()
				loadScript('https://hq.sinajs.cn/list=' + stockCode, function() {

					self.stock = new stockModule({
						el: '#zst',
						stockCode: stockCode,
						stockName: self.name
					})
					$('#tday').html(self.stock.data[0])
					$('#yday').html(self.stock.data[1])
					$('#rate1').html(self.stock.data[2])
					$('#rate2').html(self.stock.data[3] + '%')
					$('#now').html(self.stock.data[4])
					var arr = stockCode.split('_')
					$('.stock-code').html('股票代码：'+ arr[arr.length - 1].toUpperCase())
					if(self.stock.data[2] < 0) {
						$('#stockModule').addClass('down')
					}else if(self.stock.data[2] > 0) {
						$('#stockModule').addClass('up')
					}else {

					}
					
				})
				
			}
		},
		loadZxModule: function() {
			var self = this
			var key = self.name;
			var zx = companyConfig[self.name]['zx'] || [self.name]
			self.zxData.nameList = zx;
			self.renderCpyMenu(self.zxData.nameList, '#zxMenu', function(key) {
				self.zxData.name = key;
				self.zxData.p = 1
				self.render(key)
				
			})
			$('#zxMenu li').eq(0).trigger('click')
			
		},
		render: function(key) {
			var self = this
			$('#zxList').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
			
			self.getData(self.api['zx'], {
				terms: self.zxData.name,
				n: self.zxData.n,
				p: self.zxData.p
			}, 'GET', function(res) {
				self.zxData.pageCount = res.to_page;
				self.zxData.count = res.total;
				self.zxData.list = res.list;
				self.renderZxData(self.zxData.list)
				$('.refresh-div', '#zxList').remove()
			})
		},
		renderZxData: function(data) {
			var self = this
			$('#dataList').empty()
			data.forEach(function(ele){
				$('#dataList').append('<li>'+
					'<a href="/detail--' + ele.id + '.html" target="_blank">' + ele.title + '</a>'+
					'<span>' + ele.post_date.split('T')[0] + '</span>'+
				'</li>')
			})
			console.log(data)
			if(self.zxData.count > self.zxData.n) {
				self.loadPageModule(self.zxData.p, self.zxData.pageCount)
			}
		},
		loadPageModule: function(curPage, pageCount){
			$('#page').empty()
			// $('#page').append('')
			if(curPage > 1) {
				$('#page').append('<li data-page="1">首页</li>')
			}
			if(curPage != 1) {
				$('#page').append('<li data-page="pre">上一页</li>')
			}
			if(curPage > 2) {
				$('#page').append('<li data-page="' +( curPage -2) + '">' + (curPage - 2) + '</li><li data-page="' +( curPage -1) + '">' + (curPage - 1) + '</li>')
			}
			$('#page').append('<li class="active" data-page="' + curPage + '">' + curPage + '</li>')

			if(pageCount - curPage >= 2) {
				$('#page').append('<li data-page="' +( curPage +1) + '">' + (curPage + 1) + '</li><li data-page="' +( curPage +2) + '">' + (curPage +2) + '</li>')
			}
			if(curPage != pageCount) {
				$('#page').append('<li data-page="next">下一页</li>')
			}

		},
		loadCbModule: function(key) {
			var self = this
			if(!key) {
				var cb = companyConfig[self.name]['cb']
				if(!cb) {
					$('#tabsModule li[data-type=zx]').trigger('click')
					return
				}
				self.cbData.name = cb;
				
				loadScript('/Public/home/js/sjk/dataCgy_financial.js', function() {
					$('.data-module-item.cb').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
					self.getData(self.api.cb, {
						name: self.cbData.name,
					}, 'GET', function(res) {
						var dataList = cbModule.getData(res.list, dataTypeFinancial)
						var dataMenu = cbModule.showEchartsMenuData(res.list, dataTypeFinancial)
						// var dataUrl = cbModule.getUrlData(res.list)
						
						self.renderCbInfo()
						self.renderMenu(dataMenu)
						self.renderCbData(dataList)
						self.renderFileUrl(dataList)
						$('.refresh-div', '.data-module-item.cb').remove()
						// dataTypeFinancial
					})
				})
			}else if(key == 'new') {
				var cb = companyConfig[self.name]['ncb']
				if(!cb) {
					$('#tabsModule li[data-type=zx]').trigger('click')
					return
				}
				self.ncbData.name = cb;
				loadScript('/Public/home/js/sjk/dataCgy_newfinancial.js', function() {
					var code = cpyData.filter(function(ele){
						return ele['name'] == self.name
					})[0].code
					$('.stock-code').html('股票代码：'+ code)
					$('.data-module-item.cb').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
					self.getData(self.api.ncb, {
						name: self.ncbData.name,
					}, 'GET', function(res) {
						var dataList = cbModule.getData(res.list, dataType)
						var dataMenu = cbModule.showEchartsMenuData(res.list, dataType)
						// var dataUrl = cbModule.getUrlData(res.list)
						// console.log(dataList, dataMenu)
						self.renderCbInfo(key)
						self.renderMenu(dataMenu)
						self.renderCbData(dataList)
						self.renderFileUrl(dataList)
						$('.refresh-div', '.data-module-item.cb').remove()
						// dataTypeFinancial
					})
				})
			}
				
		},
		renderFileUrl:function(data) {
			var self = this
			var zgs = data.zgsUrl
			var cb = data.cbUrl

			if(zgs && zgs.length > 0) {
				$('#zgsUrl').show()
				zgs.forEach(function(ele) {
					$('#zgsUrl .cb-url-tables').append('<li><a href="' + ele.url + '" target="_blank">' + ele.name + '</a></li>')
				})
				
			}
			if(cb && cb.length > 0) {
				$('#cbUrl').show()
				cb.forEach(function(ele) {
					$('#cbUrl .cb-url-tables').append('<li><a href="' + ele.url + '" target="_blank">' + ele.name + '</a></li>')
				})
				
			}

		},
		renderCbInfo: function(key) {
			var self = this
			$('#moreInfo').empty()
			var a
			key == 'new' ? a = companyConfig[self.name]['ncb']  : a = companyConfig[self.name]['cb'];
			var tar = cpyData.filter(function(ele){
				return ele['name'] == a
			})[0]

			if(key == 'new') {
				$('#moreInfo').append('<a href="/User/newFinancialData.html?name=' + companyConfig[self.name]['ncb'] + '" target="_blank">数据对比</a>')	
			}else {

				$('#moreInfo').append('<a href="/User/financialData.html?name=' + companyConfig[self.name]['cb'] + '" target="_blank">数据对比</a>')	
			}

			if(tar['ipoUrl']) {
				$('#moreInfo').append('<a href="' + tar['ipoUrl'] + '" target="_blank">IPO专题</a>')
			}
			if(tar['ztUrl']) {
				$('#moreInfo').append('<a href="' + tar['ztUrl'] + '" target="_blank">专题</a>')
			}
			if(tar['tjUrl']) {
				$('#moreInfo').append('<a href="/zt/tjcb" target="_blank">图解财报</a>')
			}
			
		},
		renderMenu: function(data) {
			var self = this
			var arr = [];
			for(var key in data) {
				arr.push({
					key: key,
					text: data[key]['name'],
					title: data[key]['name'] && data[key]['name'].split('及')[0]
				})
			}
			self.myChart = echarts.init(document.getElementById('cbEcharts'));
			var a = new tabsModule({
				el: '#cbEchartsMenu',
				data: arr,
				clickEvent: function (key) {
					// console.log(echartData)
					echartsModule({
						el: self.myChart,
						cpy: self.name,
						data: data[key],
						coin: data['coin'],
						eq: self.eq
					})
				}
			})
			$('#cbMenu li').eq(0).trigger('click')
		},
		renderCbData: function(data) {
			data.keyArr.forEach(function(ele) {
				$('#cbKeyList').append('<li>' + ele + '</li>')
			})
			data.data.forEach(function(ele) {
				var ul = $('<ul class="cb-data-item"></ul>')
				for(var key in ele) {
					ul.append('<li>' + ele[key] + '</li>')
				}
				$('#cbDataList').append(ul)
			})
		},
		loadPjModule: function() {
			var self = this
			var pj = companyConfig[self.name]['pj']
			if(!pj && pj.length == 0) {
				$('#tabsModule li[data-type=zx]').trigger('click')
				return
			}
			self.pjData.nameList = pj
			loadScript('/Public/home/js/sjk/dataCgy_complaint.js', function() {
				self.renderCpyMenu(self.pjData.nameList, '#pjMenu', function(key) {
					$('#pjCpy').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
					self.pjData.name = $('#pjMenu .cb-menu li.active').data('key')
					$('#pjDataVs').attr('href', 'http://www.100ec.cn/Index/complaintDataDetail.html?website=' + self.pjData.name)
					// console.log(key)
					self.getData(self.api.pj,{
						website: key
					}, 'GET', function(data) {
						// console.log(res)
						var dataMenu = pjModule.renderPjTimeData(data)
						// console.log(dataMenu)
						self.renderPjTimeMenu(dataMenu, data)


						$('#pjTime li').eq(0).trigger('click')
					})
				})

				$('#pjMenu li').eq(0).trigger('click')
				// console.log(dataType)
			})

		},
		renderPjTimeMenu: function(dataMenu, data) {
			// console.log(data)
			var self = this
			$('#pjCpy .cpy-menu, #pjCpy .cb-data-echarts').remove();
			$('#pjCpy').append('<div class="cpy-menu" id="pjTime"></div>'+
					'<div class="cb-data-echarts" id="pjEcharts">'+
				'</div>')
			//重新初始化图表实例！
			this.myChart = echarts.init(document.getElementById('pjEcharts'));
			var a = new tabsModule({
				el: '#pjTime',
				data: dataMenu,
				clickEvent: function (key) {
					$('#pjTitle').html($('#pjMenu .cb-menu li.active').html() + $('#pjTime .cb-menu li.active').html() + '评级数据分析')
					// console.log(data[key][0])
					self.getMorePjCpyData(key, data[key][0])

				}
			})
			
		},
		getMorePjCpyData: function(time, data1) {
			if( $('#pjCpy').find('.refresh-div').length == 0) {
				$('#pjCpy').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
			}
			
			var self = this
			self.getData(self.api.pjMore, {
				website: self.pjData.name,
				year: time.slice(0, 4),
				time: time.slice(5)
			}, 'GET', function(res) {
				// console.log(data1)//初始数据
				// console.log(res)//更多数据
				//传输数据生成初始数据+更多数据的综合图表
				
				pjEchartsModule({
					data1: data1,
					data2: res,
					myChart: self.myChart,
					eq: self.eq
				})
				$('.refresh-div', '#pjCpy').remove()

			})
		},
		renderCpyMenu: function(arrList, el, success) {
			var self = this
			var arr = [];
			arrList.forEach(function(ele){
				if(ele instanceof Object) {
					arr.push({
						key: ele['appId'],
						text: ele['name'],
						title: ele['name'],
					})
				}else {
					arr.push({
						key: ele,
						text: ele,
						title: ele
					})
				}
				
			})
			var a = new tabsModule({
				el: el,
				data: arr,
				clickEvent: function (key) {
					success && success(key)
				}
			})
			if(arr.length == 1) {
				$(el).parent().hide()
			}
		},
		loadTrzModule: function() {
			var self = this 
			var trz = companyConfig[self.name]['trz']
			if(!trz && trz.length == 0) {
				$('#tabsModule li[data-type=zx]').trigger('click')
				return
			}
			self.trzData.nameList = trz;
			loadScript('/Public/home/js/sjk/dataCgy_invest.js', function() {
				self.renderCpyMenu(self.trzData.nameList, '#trzMenu', function(key) {
					// $('#trzCpy').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
					self.trzData.name = $('#trzMenu .cb-menu li.active').data('key')
					
					self.renderTrzLabelsMenu()

					if(self.trzData.name == '阿里巴巴') {
						$('#trzTabs li').eq(1).trigger('click')
					}else {
						$('#trzTabs li').eq(0).trigger('click')
					}
				})

				$('#trzMenu li').eq(0).trigger('click')
				
				
			})

		},
		renderTrzLabelsMenu: function() {
			var self = this
			$('#trzCpy .cpy-menu, #trzCpy .cb-data-echarts').remove();
			$('#dataTables').before('<div class="cpy-menu" id="trzTabs"></div>'+
					'<div class="cb-data-echarts" id="trzEcharts">'+
				'</div>')
			var dataMenu = [{
				key: 'rz',
				text: '融资数据',
				title: '融资数据',
			},{
				key: 'tz',
				text: '投资数据',
				title: '投资数据',
			},]
			this.myChart = echarts.init(document.getElementById('trzEcharts'));
			var a = new tabsModule({
				el: '#trzTabs',
				data: dataMenu,
				clickEvent: function (key) {

				if(key == 'tz' && self.eq == 'mb') {
					$('#trzEcharts').css('height', 800)
					self.myChart.resize({
						height: 800
					})
				}else {
					$('#trzEcharts').css('height', 400)
					self.myChart.resize({
						width: $('#trzTabs').width(),
						height: 400
					})
				}
					$('#trzTitle').html($('#trzMenu .cb-menu li.active').html() + $('#trzTabs .cb-menu li.active').html() + '图表')
					// console.log(data[key][0])
					self.getTrzData(key)

				}
			})
		},
		getTrzData: function(key) {
			$('#trzEcharts').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
					
			var self = this
			if(key == 'rz') {
				var obj = {
					name: self.trzData.name
				}

				
			}else if(key == 'tz') {
				var obj = {
					tz: self.trzData.name,
				}
			}
			self.getData(self.api.trz, obj, 'GET', function(res) {
				
				$('#warn').remove()
				if(!res.list || res.list.length == 0) {
					$('#trzEcharts, #dataTables').hide()
					$('#trzCpy').append('<div id="warn" style="text-align: center;line-height: 60px;color:#fff;#font-weight: bolder;font-size: 16px">暂无数据</div>')
					return 
				}

				$('#trzEcharts, #dataTables').show()
				var data = trzModule.addData(res.list).sort(function(a,b){
						return b.date - a.date
					})
				self.renderTrzTable(data)
				if(key == 'rz') {
					$('#trzMoreA').attr('href', '/User/investDataDetail.html?name=' + self.trzData.name)
					rzEchartsModule({
						el: self.myChart,
						cpy: self.name,
						data: data,
						eq: self.eq
					})
				}else if( key == 'tz') {
					$('#trzMoreA').attr('href', '/User/investDataDetail.html?name=' + self.trzData.name + '&type=tz')
					tzEchartsModule({
						el: self.myChart,
						cpy: self.name,
						data: data,
						eq: self.eq
					})
				}
				$('.refresh-div', '#trzEcharts').remove()
				
			})

		},
		renderTrzTable: function(data) {
			if(data.length == 0) {
				$('#dataTables').hide()
				return
			}
			$('#trzDataList').empty()
			data.forEach(function(ele, index){
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
				$('#trzDataList').append('<li class="trz-data-item">'+
						'<div class="trz-item small">' + (index + 1) + '</div>'+
						'<div class="trz-item"><a href="/User/investDataDetail.html?name=' + ele['name'] + '" target="_blank">' + ele['name'] + '</a></div>'+
						'<div class="trz-item">' + ele['a103'] + '</div>'+
						'<div class="trz-item">' + address + '</div>'+
						'<div class="trz-item">' + ele['dtime'] + '</div>'+
						'<div class="trz-item">' + ele['shares'] + '</div>'+
						'<div class="trz-item">' + ele['a100'] + ele['a101'] + '</div>'+
						'<div class="trz-item large" title="' + ele['a102'] + '">' + cgy + '</div>'+
					'</li>')
			})
		},
		loadAppModule: function() {
			var self = this 
			var app = companyConfig[self.name]['app']
			if(!app && app.length == 0) {
				$('#tabsModule li[data-type=zx]').trigger('click')
				return
			}
			self.appData.nameList = app;
			loadScript('/Public/home/js/sjk/dataCgy_appStoreRank.js', function() {

				self.renderCpyMenu(self.appData.nameList, '#appMenu', function(key) {
					$('#appData').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
					// window.open('/Index/appStoreDetail.html?id=' + key)
					self.appData.key = $('#appMenu .cb-menu li.active').data('key')
					self.monthId = self.appData.nameList.filter(function(ele){
						return self.appData.key == ele['appId']
					})[0].monthId
					self.getData(self.api.app, {
						id: self.appData.key,
						country: 'cn',
					}, 'POST', function(res) {
						self.renderAppData(res.results[0])
						$('.refresh-div', '#appData').remove()
					})
					

				})
				$('#appMenu li').eq(0).trigger('click')
			})
		},	
		renderAppData: function(data) {
			var self = this
			var href = (self.monthId ?  '/User/app_user_data.html?appId=' + self.monthId : 'javascript:;')
			$('#appMonthData').attr('href', href).css('display',self.monthId ? 'inline' : 'none' )
			var logo = 'http://www.100ec.cn/Public/home/images/projectlogo.png';
			$('#logo').attr('src', data.artworkUrl100 || logo)
			$('#trackName').html(data.trackCensoredName)
			$('#artist').html(data.artistName)
			var genreName = genreType.filter(function(ele){
				return ele['genreIds'] == data.primaryGenreId
			})[0].genreName
			$('#genre').html('<a href="/User/appStoreRank.html?genreIds=' + data.primaryGenreId + (data.formattedPrice == '免费'? '': '&feed=toppaid') +'" target="_blank">' + genreName + '</a>')
			
			$('#trackId').html('<a href="' + data.trackViewUrl + '" target="_blank">' + data.trackId + '</a>')	
			$('#price').html(data.formattedPrice)
			$('#currentVersionReleaseDate').html(new Date(data.currentVersionReleaseDate).toLocaleString())
			$('#currentVersion').html(data.version)

			var rate = data.averageUserRating || data.averageUserRatingForCurrentVersion
			if(data.averageUserRating) {
				var msg =  '所有版本：' + data.userRatingCount + '个用户评分，平均评分：' + rate + '星'
			}else if(data.averageUserRatingForCurrentVersion) {
				var msg =  '当前版本：' + data.userRatingCountForCurrentVersion + '个用户评分，平均评分：' + rate + '星'
			}
			
			
			//加载渲染头部评级插件
			myPlugin.rating({
				ele: '#rating',
				rating: rate,
				limit: 5,
				isShowMsg: true,
				msg: msg
			})
			$('#appMoreInfo').attr( 'href', '/User/appStoreDetail.html?id=' + self.appData.key)

		},
		bindEvent: function() {
			var self = this
			$('#tabsModule').on('click', 'li', function() {
				if(!$(this).hasClass('active')) {
					// self.data = $(this).data('type');
					// self.load()
					location.href = location.origin + location.pathname + '?name=' + self.name + '&data=' + $(this).data('type')
				}
				
			})
			$('#page').on('click', 'li', function() {
				var page = $(this).data('page');

				if( !isNaN(page) ) {
					self.zxData.p = page
				}else if(page == 'pre') {
					self.zxData.p--
				}else if(page == 'next') {
					self.zxData.p++
				}
				self.render()
				
			})
			$('#zhedieBtn').click(function(){
				var el = self.myChart.getDom()
				// $(el).find('div').eq(0).css('margin', '0 auto')
				self.myChart.resize({
					width: !$('body').hasClass('zhedie') ? parseInt($('.cb-data-echarts', '.data-module-item.active').width()) -150 : parseInt($('.cb-data-echarts', '.data-module-item.active').width()) + 150
				})
			})

			window.onresize = function() {
				self.myChart && self.myChart.resize({
					width: $('.cb-data-echarts', '.data-module-item.active').width()
				})
			}
		},
		getData: function(url, postData, method, cb) {
			$.ajax({
				dataType: 'json',
				type: method,
				url: url,
				data: postData,
				success: function(res) {
					cb && cb(res)
				}
			})
		},
		getURLString: function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURIComponent(r[2]); 
		    return null; 
		},

	}

	list.init();
})(jQuery)