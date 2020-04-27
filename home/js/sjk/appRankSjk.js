(function($){
	var appRank = {
		init: function(url) {
			// this.name = this.getURLString('name');
			this.url = url;
			this.dataArr = [];
			// this.newData = [];
			this.lastSort = 'shares';
			this.curCate = 'all';
			this.screenShot = false;
			this.curYear = new Date().getFullYear() - 1;
			this.curMonth = '';
			this.type = ''
			this.tableTitle = '';
			this.title = '';
			this.setting = {};
			this.settingFlag = false;
			this.syImg = '';
			var self = this;
			this.renderDom();
			this.renderTimeBox();
			this.bindEvent();
			this.chooseTime = {
				year: this.curYear,
				month: '',
			}
			this.pData = {
				url: 'http://bjx.iimedia.cn/applicationRank',
				// time: this.chooseTime['year'] + (this.chooseTime['month'] < 10 ? '0' + this.chooseTime['month'] : this.chooseTime['month']),
				offset: '0',	
				limit: '20',	//限制数量
				main_type: '0',	//领域
				sub_type: '0',	//行业
				orderBy: '0',	//环比增幅排序
				order: '0',		//活跃人数排序
			}
			this.clonePostData = this.cloneData(this.pData)
			
			this.syImg = 'http://www.100ec.cn/Public/home/images/dsb-logo.png';
			//在插件初始化前给ECharts图表定宽，以防插件渲染丢失宽度
			this.myChart = echarts.init(document.getElementById('showBox'));
		},
		//渲染一级分类导航栏
		renderDom: function() {
			$('#download').parent().hide()
			dataField.forEach(function(ele, index){
				$('#mainType').append('<li class="' + (ele['main_type'] == 0 ? 'active' : '') + '" data-main="' + ele['main_type'] + '">' + ele['name'] + '</li>')
			})
			$('#subType').append('<li class="active" data-sub="0">全部</li>')
			// for(var i = this.curYear; i > 2017 ; i--) {
			// 	$('#yearUl').append('<li data-year="' + i + '">' + i + '</li>')
			// }
		},
		renderTimeBox: function(){
			var self = this
			$.when($.ajax({
				dataType: 'json',
				type: 'post',
				url: self.url,
				data: {
					url:'http://bjx.iimedia.cn/applicationMonth'
				},
			})).then(function(res){
				console.log(res)
				res.forEach(function(ele, index){
					$('#yearUl').append('<li data-year="' + ele['year'] + '">' + ele['year'] + '</li>')
					if(ele['year'] == self.curYear) {
						self.curMonth = +ele['month'][ele['month'].length - 1]
						// console.log(self.curMonth)
					}
				})

				$('#time').html(self.curYear + '年' + self.curMonth + '月')
				self.chooseTime['month'] = self.curMonth
				// self.getData(this.url, self.clonePostData, function(data){
				// 	self.renderDataList(data)
				// })
				$('#mainType li').eq(0).trigger('click')
			})
			
		},
		//渲染数据表格
		renderDataList: function(data) {
			$('#unicorn-vs').fadeOut().find('#u-v-c-list').empty();
			// this.type = ($('#mainType').find('.active').data('main') != '0' ? $('#mainType').find('.active').html() || '' : '' ) + ($('#subType').find('.active').data('sub') != '0' ? $('#subType').find('.active').html() || ''  : '' );
			this.type = $('#subType').find('.active').data('sub') != '0' ? $('#subType').find('.active').html() || ''  : ($('#mainType').find('.active').data('main') != '0' ? $('#mainType').find('.active').html() || '' : '' ) 
			var title = this.chooseTime['year'] + '年' + this.chooseTime['month'] + '月' + this.type + '互联网产品用户活跃人数TOP' + data.length + '排行榜'
			this.tableTitle = title;
			var self = this;
			$('#screenName').html(self.tableTitle)
			if(this.pData['offset'] == 0) {
				$('#dataList').empty()
			}	
			// data.forEach(function(ele, index){
			for(var i = this.pData['offset']; i < data.length ; i++ ){
				var subName
				dataField.forEach(function(ele){
					if(ele['main_type'] ==  data[i]['main_type']){
						ele['children'].forEach(function(item){
							if(item['sub_type'] ==  data[i]['sub_type']){
								subName = item['name']
							}
						})
					}
				})
				// var url = 'http://www.100ec.cn/Index/app_user_data.html?appId=' + data[i]['app_id'] + '&time=' + data[i]['time_m'];
				$('#dataList').append('<li class="data-row">' +
					'<div class="data-row-item item-small item-checkbox">' +
						'<label class="check-box">' +
							'<input type="checkbox" data-id="' + i + '" name="compare" class="compare-style">' +
							'<span class="checkbox-style"></span>' +
						'</label>' +
					'</div>' +
					'<div class="data-row-item item-small">' + parseInt(i + 1) + '</div>' +
					// '<div class="data-row-item"><img class="app-rank-logo" src="' + ele['avator'] + '" /><span>' + ele['app_name'] + '</span></div>' +
					'<div class="data-row-item item-small"><img class="app-rank-logo" id="img' + i + '" src="' + data[i]['avator'] + '" /></div>' +
					'<div class="data-row-item n"><a href="/search.php?p=1&f=search&terms=' + data[i]['app_name'] + '" target="_blank">' + data[i]['app_name'] + '</a></div>' +
					'<div class="data-row-item">' + subName + '</div>' +
					'<div class="data-row-item">' + (Math.floor(data[i]['uv'] / 100)/100) + '</div>' +
					'<div class="data-row-item' + (data[i]['rank_ratio'] > 0 ? ' red' : ' green') + '">' + (data[i]['rank_ratio'] > 0 ? '+' : '') + (Math.floor(data[i]['rank_ratio']*100)/100) + '%</div>' +
					
				'</li>')
			}
				
			// })
		},
		bindEvent: function() {
			var self = this;
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
			//搜索事件，先请求全部数据，再遍历数据搜索匹配，最后渲染页面dom
			$('#searchBtn').on('click', function(){
				var val = $('#name').val();
				if(!val) { return false }
				self.search(self.url, val, function(res){
					$('#mainType li').removeClass('active')
					$('#subType').empty()
					self.renderDataList(self.dataArr)
				})
			})
			$('#mainType').on('click', 'li', function(){
				if(!$(this).hasClass('active')){
					$(this).addClass('active').siblings().removeClass('active');
					self.clonePostData = self.cloneData(self.pData)
					self.clonePostData['main_type'] = $(this).data('main');
					var _self = this;
					dataField.forEach(function(ele){
						if(ele['main_type'] == $(_self).data('main')){
							$('#subType').empty();
							ele['children'].forEach(function(item){
								$('#subType').append('<li class="' + (item['sub_type'] == 0 ? 'active' : '') + '" data-sub="' + item['sub_type'] + '">' + item['name'] + '</li>')
							})
							self.getData(self.url, self.clonePostData, function(data){
								self.renderDataList(data);
							})
						}
					})
				}
			})
			$('#subType').on('click', 'li', function(){
				if(!$(this).hasClass('active')){
					$(this).addClass('active').siblings().removeClass('active');
					
					self.clonePostData = self.cloneData(self.pData)
					self.clonePostData['main_type'] = $('#mainType').find('.active').data('main');
					self.clonePostData['sub_type'] = $(this).data('sub');

					self.getData(self.url, self.clonePostData, function(data){
						self.renderDataList(data);

					})
				}
			})

			$('#loadBtn').on('click', function(){
				self.clonePostData['offset'] = self.dataArr.length
				self.getData(self.url, self.clonePostData, function(data){
					self.renderDataList(data)

				})
			})

			$('#time').on('click', function(){
				if(!$('.time-list').is(':visible')) {

					$('.time-list').fadeIn()
					$('#yearUl li[data-year=' + self.chooseTime['year'] + ']').trigger('click')
			
				}else {
					$('.time-list').fadeOut()
				}
			})
			$('#yearUl').on('click', 'li', function(){
				if(!$(this).hasClass('active')) {
					$(this).addClass('active').siblings().removeClass('active');
					$('#monthUl').empty();
					var monthLen
					if($(this).data('year') == self.curYear){
						len = self.curMonth;
					}else {
						len = 12
					}
					for(var i = 0; i < len; i++) {
						$('#monthUl').append('<li' + ($(this).data('year') == self.chooseTime['year'] ? (i == (self.chooseTime['month'] - 1) ? ' class="active"' : '') : '') + ' data-month="' + (i + 1) + '">' + (i + 1) + '月</li>')
					}
				}
			})
			$('#monthUl').on('click', 'li', function(){
				if(!$(this).hasClass('active')) {
					$(this).addClass('active').siblings().removeClass('active');
					self.chooseTime['year'] = $('#yearUl').find('.active').data('year');
					self.chooseTime['month'] = $(this).data('month');
					self.clonePostData['time'] = self.chooseTime['year'] + (self.chooseTime['month'] < 10 ? '0' + self.chooseTime['month'] : self.chooseTime['month'])
					self.clonePostData['offset'] = 0;
					$('#time').html(self.chooseTime['year'] + '年' + (self.chooseTime['month'] < 10 ? '0' + self.chooseTime['month'] : self.chooseTime['month']) + '月')
					self.getData(self.url, self.clonePostData, function(data){
						self.renderDataList(data);

					})
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
				// console.log(1)
				// console.log($(this).data('id'))
				// console.log(self.newData[$(this).data('id')])
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
				var title = self.chooseTime['year'] + '年' + self.chooseTime['month'] + '月' + self.type + '互联网产品用户活跃人数TOP' + $('input[type=checkbox]:checked').length + '排行榜'
				
				$('#screenName2 p').html(title)
				// console.log(self.newData)
				eData = []
				//获取多选框被选中的id序列
				$('input[type=checkbox]:checked').each(function(ele){
					eData.push(self.dataArr[ $(this).data('id') ])
				})
				// 对被选中的数据进行id顺序排序，因为id的顺序已在开始ajax获取的时候默认排序过，因此id顺序就是默认排序，但是点击时候的顺序并非会按照id顺序选中可能会乱序选择
				// self.px(eData, 'shares');
				$('body').addClass('body-noScroll').find('#compareBox').fadeIn()
				self.myChart.resize({
					width: self.screenShot? 800 : $('.w').width(),
					height: self.screenShot? 680 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight(),
				})
				//以估值统计对比图作为默认数据
				showEchartsUnicorn(self.myChart, 'uv', 'name', eData, 'bar', self.screenShot, title, self.syImg)
				// $('#screenName2 p').html(  self.tableTitle + '“独角兽”估值对比图')
				// console.log(eData)
				$('.unicorn-vs').addClass('small').find('#hideBtn').removeClass('active').html('展开')
			})
			//模态框事件
			$('.box-wrap-close, .mask').on('click', function() {
				$('body').removeClass('body-noScroll').find('#compareBox').fadeOut()
				$('.unicorn-vs').removeClass('small').find('#hideBtn').addClass('active').html('收起')
			})
			//根据窗口实时变动，ECharts图表实时变动大小
			window.onresize = function() {
				$('#showBox').width(self.screenShot? 800 :'100%');
				self.myChart.resize({
					width: self.screenShot? 800 : $('.w').width(),
					height: self.screenShot? 680 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight() ,
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

		},
		//ajax获取数据
		getData: function(url, postData, cb) {
			$('#dataList').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
			var self = this;
			postData['time'] = '' + self.chooseTime['year'] + (self.chooseTime['month'] < 10 ? '0' + self.chooseTime['month'] : self.chooseTime['month'])
			postData['appName'] = $('#name').val()
			// console.log(postData)
			$.when(
				$.ajax({
					dataType: 'json',
					type: 'post',
					url: url,
					data: postData,
				})
			).then(function(res){
				$('#loadBtn').show()
				if(res.length == 0) {
					$('#loadBtn').html('已无更多数据')
				}else {
					$('#loadBtn').html('查看更多数据')
				}

				if(postData['offset'] == 0) {
					self.dataArr = res
				}else {
					self.dataArr = self.dataArr.concat(res)
				}
				
				// console.log(self.dataArr)
				cb && cb(self.dataArr)
			})
		},
		search: function(url, name, cb){
			$('#dataList').append('<div class="refresh-div"><img src="http://www.100ec.cn/Public/home/images/icon-loading.png"/></div>')
			var self = this;
			$.when(
				$.ajax({
					dataType: 'json',
					type: 'post',
					url: url,
					data: {
						url: 'http://bjx.iimedia.cn/applicationRankSearch',
						appName: name,
						time: '' + self.chooseTime['year'] + (self.chooseTime['month'] < 10 ? '0' + self.chooseTime['month'] : self.chooseTime['month']),
						orderBy: '0',	//环比增幅排序
						order: '0',		//活跃人数排序
					},
				})
			).then(function(res){
				$('#loadBtn').hide()
				self.dataArr = res
				// console.log(self.dataArr)
				cb && cb(self.dataArr)
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
		//将请求回来的数据根据页面需求进行过滤
		// dataTraversal: function(data){
		// 	var self = this;
		// 	self.dataArr = [];
		// 	var cpy = []
		// 	data.forEach(function(ele, index){
		// 		var flag = false;
		// 		cpy.forEach(function(item){
		// 			//取最新的数据，重复则不要
		// 			item == ele['name'] ? flag = true : ''
		// 		})
		// 		if(!flag) {
		// 			self.dataArr[index] = {}
		// 			for(var key in ele) {
		// 				//遍历数据字段
		// 				if(self.keyArr.indexOf(key) != -1) {
		// 					self.dataArr[index][key] = ele[key]
		// 				}
		// 			}
		// 			cpy.push(ele['name'])
		// 		}
				
		// 	})
		// 	$('.sort').removeClass('down up')
		// 	$('.sort[data-key=shares]').addClass('down')
		// },
		//对数据根据关键字进行排序
		// px: function(data, key) {
		// 	if(!data) { return false }
		// 	this.lastSort = key;
		// 	data.sort(function(a, b){
		// 		//关键字为成立时间，则默认从最新到最旧排列
		// 		if(key == 'dtime') {
		// 			return parseInt(b[key]) - parseInt(a[key])
		// 		}
		// 		//关键字为平台名称，则默认将字符串的ASC码从小到大
		// 		if(key == 'name') {
		// 			return b[key].localeCompare(a[key])
		// 		}
		// 		//默认情况从大到小
		// 		return b[key] - a[key] 
		// 	})
		// },
		

	}
	appRank.init('/Index/url_json');
}(jQuery))