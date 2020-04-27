(function($){
	var unicorn = {
		init: function(url) {
			var self = this;
			this.name = this.getURLString('name') || '';
			this.url = url;
			// this.arr = dataField.filter(function(ele){
			// 	return ele['id'] == self.name
			// })
			// this.cate = ''
			// this.arr.length > 0 ? this.cate = this.arr[0]['title'] : ''
			this.chen = this.getURLString('id') || '1';
			this.pData = {
				cate: '',
				time: new Date().getFullYear(),
				chen: '',
			}
			this.dataArr = [];
			this.newData = [];
			this.keyArr = [];
			this.lastSort = 'shares';
			this.curCate = 'all';
			this.screenShot = false;
			this.tableTitle = '泛电商';
			this.title = '';
			this.setting = {};
			this.settingFlag = false;
			this.syImg = '/Public/home/images/dsb-logo.png';
			this.renderDom();
			dataTypeUnicorn.forEach(function(ele, index){ self.keyArr.push(ele['k']) })
			
			this.bindEvent();
			this.initD()
			this.vsArr = [];	
			//在插件初始化前给ECharts图表定宽，以防插件渲染丢失宽度
			this.myChart = echarts.init(document.getElementById('showBox'));
		},
		initD: function(){
			var self = this;
			self.getData(self.url, self.pData, function(res){
				self.dataTraversal(res['list']);
				self.newData = self.cloneData(self.dataArr);
				self.px(self.newData, 'shares');
				self.renderDataList(self.newData, 'shares')
			})
		},
		//渲染一级分类导航栏
		renderDom: function() {
			var self = this;
			if(self.chen == 2) {
				$('.s-d-t-item[data-key=shares]').html('估值/亿元<span></span>')
				dataTypeUnicorn[4]['dw'] = '亿元'
			}
			chenType.forEach(function(ele, index){
				if(self.chen == ele['id']) {
					self.pData.chen = ele['name']
				}
				$('<li ' + (self.chen == ele['id'] ? 'class="active"' : '' ) + ' data-id="' + ele['id'] + '">' + ele['name'] + '</li>').appendTo($('#mainType'));
			})
			var t = 2019;
			var cur = new Date().getFullYear()
			while(true) {
				$('#time').prepend('<li class="' + (t == cur ? 'active' : '') + '" data-time="' + t + '">' + t + '年</li>')
				t++

				if(t == cur + 1) {
					break
				}
			}
			dataField.forEach(function(ele, index){
				if(index == 0) {
					$('<li data-id="all" ' + (self.name == '' ? 'class="active"' : '' ) + '>全部</li>').appendTo($('#dataField'));
				}

				if(self.name == ele['id']) {
					self.pData.cate = ele['title']
				}
				$('<li ' + (self.name == ele['id'] ? 'class="active"' : '' ) + ' data-id="' + ele['id'] + '">' + ele['title'] + '</li>').appendTo($('#dataField'));
			})
			self.tableTitle = $('#dataField .active').data('id') != 'all' ? $('#dataField .active').html() : '泛电商';
			$('#screenName').html( $('#time .active').html() + ( $('#dataField .active').data('id') != 'all' ? $('#dataField .active').html() : '泛电商') + '“' + $('#mainType .active').html() + '”数据榜单')
		},
		//ajax获取数据
		getData: function(url, params, cb) {
			var self = this;
			$('#dataList').append('<div class="refresh-div"><img src="/Public/home/images/icon-loading.png"/></div>')
			$.when(
				$.ajax({
					dataType: 'json',
					data: params,
					url: url,
				})
			).then(function(res){
				// console.log(res)
				cb && cb(res)
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
		dataTraversal: function(data){
			var self = this;
			self.dataArr = [];
			var cpy = []
			data.forEach(function(ele, index){
				var flag = false;
				cpy.forEach(function(item){
					//取最新的数据，重复则不要
					item == ele['name'] ? flag = true : ''
				})
				if(!flag) {
					self.dataArr[index] = {}
					for(var key in ele) {
						//遍历数据字段
						if(self.keyArr.indexOf(key) != -1) {
							self.dataArr[index][key] = ele[key]
						}
					}
					cpy.push(ele['name'])
				}
				
			})
			$('.sort').removeClass('down up')
			$('.sort[data-key=shares]').addClass('down')
		},
		//对数据根据关键字进行排序
		px: function(data, key) {
			if(!data) { return false }
			this.lastSort = key;
			data.sort(function(a, b){
				//关键字为成立时间，则默认从最新到最旧排列
				if(key == 'dtime') {
					return parseInt(b[key]) - parseInt(a[key])
				}
				//关键字为平台名称，则默认将字符串的ASC码从小到大
				if(key == 'name') {
					return b[key].localeCompare(a[key])
				}
				//默认情况从大到小
				return b[key] - a[key] 
			})
		},
		//渲染数据表格
		renderDataList: function(data, key) {
			// console.log(data)
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
				var oLi = $('<li class="data-row" ></li>');
				oLi.append('<div class="data-row-item item-small item-checkbox">'+
								'<label class="check-box">'+
									'<input type="checkbox" data-id="'+ index +'" name="compare" class="compare-style">'+
									'<span class="checkbox-style"></span>'+
								'</label>'+
							'</div>'+
							'<div class="data-row-item item-small">'+ ( ele[key] == lastItem ? lastRank : curRank ) +'</div>'+
							'<div class="data-row-item n">' + ele['name'] + '</div>'+
							'<div class="data-row-item">' + ele['a103'] + '</div>'+
							'<div class="data-row-item">' + ele['shares'] + '</div>'+
							'<div class="data-row-item">' + ( ele['dtime'].indexOf('年') == -1 ? ele['dtime'] + '年' : ele['dtime']) + '</div>'+
							'<div class="data-row-item">' + ele['a100'] + '</div>'+
							'<div class="data-row-item">'+
								'<a href="/search.php?p=1&f=search&terms=' + ele['name'] + '" target="_blank">动态</a> '+
								 ((ele['a101'] != null && ele['a101'] != '' ) ? '<a href="/search.php?p=1&f=search&terms=' + ele['a101'] + '" target="_blank">快评</a> ' : '') +
								((ele['a102'] != null && ele['a102'] != '' ) ? '<a href="' + ele['a102'] + '" target="_blank">专题</a> ' : '') +
							'</div>')
				lastItem = ele[key];

				oLi.appendTo($('#dataList'));
			})
		},
		getURLString: function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURIComponent(r[2]); 
		    return null; 
		},
		bindEvent: function() {
			var self = this;
			//统一绑定排序的按钮，按钮唯一排序，当前项排序，同按钮点击第二次则为倒顺排序，不支持多按钮排序
			$('.sort').on('click', function(){
				if(!$(this).hasClass('down') && !$(this).hasClass('up')) {
					$(this).addClass('down').siblings('.sort').removeClass('down up');
					self.newData = self.cloneData(self.dataArr);
					self.px(self.newData, $(this).data('key'));
					self.lastSort = $(this).data('key')
				}else {
					if(self.lastSort == $(this).data('key')) {
						self.newData.reverse()
						!$(this).hasClass('up') ? $(this).addClass('up').removeClass('down') : $(this).addClass('down').removeClass('up');
					}
				}
				//渲染页面dom
				self.renderDataList(self.newData, $(this).data('key'))
			})
			//一级分类按钮监听事件，根据名称进行数据请求重新渲染页面表格dom
			$('#dataField').on('click', 'li', function(){
				var _self = $(this)
				if(!$(this).hasClass('active')) {
					var baseUrl = '/User/unicornData.html';
					window.location.href = baseUrl + ('?id=' + $('#mainType li.active').data('id')) + ($(this).data('id') == 'all' ? '' : '&name=' + $(this).data('id') )
				}
			})
			$('#time').on('click', 'li', function(){
				var _self = $(this)
				if(!$(this).hasClass('active')) {
					self.pData.time = _self.data('time')
					_self.addClass('active').siblings().removeClass('active')
					self.initD()
					$('#screenName').html( $('#time .active').html() + ( $('#dataField .active').data('id') != 'all' ? $('#dataField .active').html() : '泛电商') + '“' + $('#mainType .active').html() + '”数据榜单')
				}
			})
			$('#mainType').on('click', 'li', function(){
				var _self = $(this)
				if(!$(this).hasClass('active')) {
					var baseUrl = '/User/unicornData.html';
					window.location.href = baseUrl + ('?id=' + $(this).data('id') ) + ($('#dataField li.active').data('id') == 'all' ? '' : '&name=' + $('#dataField li.active').data('id') )
					
				}
			})
			//搜索事件，先请求全部数据，再遍历数据搜索匹配，最后渲染页面dom
			$('#searchBtn').on('click', function(){
				var val = $('#name').val();
				// console.log(val)
				if(!val) { return false }
				self.getData(self.url, {time: self.pData.time}, function(res){
					self.dataTraversal(res['list']);
					self.dataArr = self.dataArr.filter(function(ele){
						return ele['name'].indexOf(val) != -1 ? ele : '' ;
					});
					self.newData = self.cloneData(self.dataArr)
					self.px(self.newData, 'shares');
					self.renderDataList(self.newData, 'shares')
					$('#dataField li').removeClass('active')
				})
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
					eData.push(self.newData[ $(this).data('id') ])
				})
				// 对被选中的数据进行id顺序排序，因为id的顺序已在开始ajax获取的时候默认排序过，因此id顺序就是默认排序，但是点击时候的顺序并非会按照id顺序选中可能会乱序选择
				self.px(eData, 'shares');
				$('body').addClass('body-noScroll').find('#compareBox').fadeIn()
				self.myChart.resize({
					width: self.screenShot? 800 : $('.w').width(),
					height: self.screenShot? 620 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight(),
				})
				$('.dropdown-box .dropdown ul li').eq(0).trigger('click')
				//以估值统计对比图作为默认数据
				// showEchartsUnicorn(self.myChart, 'shares', 'name', eData, 'bar', self.screenShot, self.tableTitle)
				// $('#screenName2 p').html(  self.tableTitle + '“独角兽”估值对比图')
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
					var title = self.setting.title || $('#time li.active').html() + self.tableTitle + '“' + $('#mainType li.active').html() + '”' + $(this).html() + ($(this).html() != '估值' ? '分布图' : '对比图')
					$('#screenName2 p').html( title )
					showEchartsUnicorn(self.myChart, $(this).data('key'), $(this).data('name'), eData, 'bar', self.screenShot, title, self.setting.bgImg || self.syImg)
				})
			})

			//根据窗口实时变动，ECharts图表实时变动大小
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
				$('.sjk-table div, .sjk-table ul, .sjk-table li').removeAttr('style')
				$('.screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer').removeAttr('style')
				$('#screenName').html(self.setting.oldtitle) 
				self.setting = {};
				self.settingFlag = false
			})

		},

	}
	unicorn.init('/Index/unicorn_json');
	$('#jiucuo-model-box').findErrorBox({btn: ['#jiucuo2', '#jiucuo1']})
}(jQuery))