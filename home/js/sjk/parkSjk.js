(function($){
	var park = {
		init: function(){
			var self = this;
// /b2bemail.html
			this.type = this.getURLString('type') || 'map';

			if(self.type == 'map') {
				$('.name-list').hide()
				$('.tools').hide()
				$('#screenshotBtn').hide()
			}
			this.screenShot = false;
			this.data;
			this.echartsData;
			this.listData;
			this.area = {
				province: '',
				city: ''
			}
			this.bindEvent()
			this.initEchart(this.type)
			this.myChart = echarts.init(document.getElementById('chart'));
			this.title = ''
			this.setting = {};
			this.settingFlag = false;
			this.syImg = '/Public/home/images/dsb-logo.png';

			$('#jiucuo-model-box').findErrorBox({
				btn: ['#jiucuo1'],
				address: '/b2bemail.html',
			})
			$('#jiucuo-model-box2').findErrorBox({
				btn: ['#addPark'],
				address: '/b2bemail.html',
				title: '提交园区名单',
				formInput: [{
					name: '园区名称',
					type: 'input',
					placeholder: '园区名称'
				},{
					name: '姓名',
					type: 'input',
					placeholder: '姓名'
				},{
					name: '单位',
					type: 'input',
					placeholder: '单位'
				},{
					name: '职务',
					type: 'input',
					placeholder: '职务'
				},{
					name: '电话',
					type: 'input',
					placeholder: '电话'
				},{
					name: '邮箱',
					type: 'input',
					placeholder: '邮箱'
				},{
					name: '所在地',
					type: 'input',
					placeholder: '所在地'
				},]
			})
			this.initDom()
			// $('.setting[data-type=font], #download').parent().hide()

		},
		initDom: function(){
			var self = this;
			$('#mainType li[data-type=' + self.type + ']').addClass('active');

			self.getData('/Index/new_data_json?dataid=7', {
				a102: '中国'
			}, 'POST', function(res){
				self.data = res
				self.renderEcharts(self.data, self.type)

				self.renderDataList(self.data)
				$('#areaP .area-box li').eq(0).trigger('click')
			})
		},
		renderEcharts: function(data, type){

			var self = this;
			var key
			if(type == 'map' || type == 'province') {
				key = 'cate'
			}else {
				key = 'a100'
			} 
			var name = $('#mainType li.active').html()
			self.echartsData = self.changeData(data, key)
			var sy = self.syImg
			if( self.setting.bgImg ) {
				sy = self.setting.bgImg
			}
			showData(self.myChart, self.echartsData, self.screenShot, {
				name: name,
				sy: sy,
				type: type
			})
		},
		renderList: function(){
			$('#dataList').empty()
			var self = this;
			var arr = self.listData.filter(function(ele){
				return ele['name'] == self.area.province
			})[0]['city']

			if(self.area.city) {
				arr = arr.filter(function(ele){
					return ele['name'] == self.area.city
				})
			}
			$('#screenName2 p').html('中国' + self.area.province + self.area.city + '电子商务产业园统计表')
			arr.forEach(function(ele){
				var oLi = $('<li class="park-item"><p class="park-label">' + ele['name'] + '（' + ele['park'].length + '）</p></li>')
				var oUl = $('<ul class="file"></ul>')
				ele['park'].forEach(function(item){
					oUl.append('<li class="file-item">' + item + '</li>')
				})
				oLi.append(oUl)
				$('#dataList').append(oLi)
			})

		},
		renderDataList: function(data){
			var self = this;
			$('#areaP .area-box').empty()
			self.listData = self.changeDataList(data)
			self.listData.forEach(function(ele){
				$('#areaP .area-box').append('<li>' + ele['name'] + '</li>')
			})
		},
		rendCity: function(name){
			var self = this;
			$('#areaC .area-box').empty()
			var arr = self.listData.filter(function(ele){
				return ele['name'] == name
			})[0]['city']
			arr.forEach(function(item){
				$('#areaC .area-box').append('<li>' + item['name'] + '</li>')
			})
			$('#areaC .area-label').html('城市')
		},
		changeDataList: function(data){
			var self = this;
			var arr = []
			data.forEach(function(ele){
				var flag = true
				arr.forEach(function(item){
					if(ele['cate'] == item['name']){
						var flagB = true
						item['city'].forEach(function(item2){
							if(item2['name'] == ele['a100']){
								item2['park'].push(ele['name'])
								flagB = false
								item2['num'] ++
							}
						})
						if(flagB) {
							item['city'].push({
								name: ele['a100'],
								park: [ele['name']],
								num: 1
							})
						}
						flag = false
						item['num'] ++
					}
				})
				if(flag) {
					arr.push({
						name: ele['cate'],
						city: [{
							name: ele['a100'],
							park: [ele['name']],
							num: 1
						}],
						num: 1
					})
				}
			})
			arr.sort(function(a, b){
				return b.num - a.num
			})
			arr.forEach(function(ele){
				ele['city'].sort(function(a, b){
					return b.num - a.num
				})
			})
			// console.log(arr)
			return arr
		},
		changeData: function(data, type){
			var arr = []
			data.forEach(function(ele){
				var name = ele[type] 
				
				var flag = true
				arr.forEach(function(item, index){
					if(name == item['name'] ) {
						item['value'] ++
						flag = false
						return
					}
				})
				if(flag) {
					arr.push({
						name: name,
						value: 1
					})
				}
				
			})
			return arr
		},
		initEchart: function (type) {
			$('#chart').css('width', $('.tu').width())
			if(type != 'map'){
				$('#chart').css('height', '550px')
			}
			
		},
		bindEvent: function(){
			var self = this;
			$('#areaP, #areaC').on('click', function(){
				$(window).width() < 768 ? $(this).find('.area-box').css('width', $(window).width()) : $(this).find('.area-box').removeAttr('style');
				$(this).find('.area-box').addClass('active')
			})
			$('.area').on('mouseleave', function(){
				$(this).find('.area-box').removeClass('active')
			})
			$('#mainType').on('click', 'li', function(){
				window.location.href = location.origin + location.pathname + '?type=' + $(this).data('type');
			})
			$('.area-box').on('click', 'li', function(e){
				e.stopPropagation()
				var name = $(this).html()
				if($(this).parents('.area').attr('id') == 'areaP') {
					self.area.province = name;
					self.area.city = ''
					self.rendCity(name)
				}else {
					self.area.city = name

				}
				$(this).parents('.area').find('.area-label').html(name)
				self.renderList()
				$('.area-box').removeClass('active')
			})
			$('#screenshotBtn').on('click', function(){
				if(self.screenShot) {
					$('body').removeClass('screenshot-open')
					self.screenShot = false;
				}else {
					$('body').addClass('screenshot-open')
					self.screenShot = true;
				}
				self.renderEcharts(self.data, self.type)
				$('#chart').width(self.screenShot? 800 :'100%');
				self.myChart.resize({
					width: $('.tu').width(),
				})
			
			})
			//根据窗口实时变动，ECharts图表实时变动大小
			window.onresize = function() {
				$('#chart').width(self.screenShot? 800 :'100%');
				self.myChart.resize({
					width: self.screenShot? 800 : $('.tu').width(),
					// height: self.screenShot? 620 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight() ,
				});

			};
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
					!self.settingFlag ? self.setting.oldtitle = $('#screenName p').html(): '';
					self.setting.title = $('input[name=title]').val() 
					self.setting.title && settingTitle(self.setting.title, $('#screenName p,#screenName2 p'))
					self.settingFlag = true
				}else if(type == 'font') {
					self.setting.font = $('input[name=titleSize]:checked').val()
					var dom = $('.file-item')
					self.setting.font && settingFont(self.setting.font, dom)
				}else if(type == 'color') {
					self.setting.color = $('input[name=color]').val()
					var dom1 = $('.screenshot-industry-title, .screenshot-industry-footer, .screenshot-table-title, .screenshot-table-footer')
					var dom2 = $('.screenshot-open .park .sjk-data-content')
					var dom3 = $('.screenshot-open .park .file .file-item')
					self.setting.color && settingColor(self.setting.color,  dom1, dom2, dom3)
				}else if(type == 'bgImg') {
					if($('input[name=isBgImg]').is(':checked')) {
						self.setting.bgImg = 'none'
						
					}else {
						self.setting.bgImg = $('input[name=bgImg]').val() 
					}
					self.renderEcharts(self.data, self.type)
					// $('.category-more .data').eq(self.curIndex).trigger('click')
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
				$('.screenshot-industry-title, .screenshot-industry-footer, .sjk-table.park div, .sjk-table.park ul, .sjk-table.park li').removeAttr('style')
				$('#screenName p, #screenName2 p').html(self.setting.oldtitle) 
				self.setting = {};
				self.settingFlag = false
				self.renderEcharts(self.data, self.type)
			})
		},
		//ajax获取数据
		getData: function(url, params, type, cb) {
			var self = this;
			$.when(
				$.ajax({
					dataType: 'json',
					type: type,
					data: params,
					url: url,
				})
			).then(function(res){
				// console.log(res.list)
				cb && cb(res.list)
			})
		},
		getURLString: function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURIComponent(r[2]); 
		    return null; 
		},
	}

	park.init()
})(jQuery)