(function($){
	var fin = {
		init: function(){
			var self = this;
			this.name = this.getURLString('name') || '中国';
			this.url = '/Index/global_json.html?cate=' + this.name ;
			this.category = '';
			this.dataArr = {};
			this.screenShot = false;
			this.data = [];
			this.curIndex = 0;
			this.coin = '';
			this.Edata ;
			$('.setting[data-type=font], #download').parent().hide()
			this.bindEvent();
			this.renderDom();
			this.myChart = echarts.init(document.getElementById('chart'));
			this.title = ''
			this.setting = {};
			this.settingFlag = false;
			this.syImg = '/Public/home/images/dsb-logo.png';
			
			$('#jiucuo-model-box').findErrorBox({btn: ['#jiucuo2', '#jiucuo1']})
		
		},
		initDom: function(){
			var self = this;
			cpyData.forEach(function(ele){
				$('#country').append('<li class="' + (self.name==ele['name'] ? 'active': '' ) + '" data-id="' + ele['name'] + '">' + ele['name'] + '</li>')
				$('#vsCpy').append('<li>' + ele['name'] + '</li>')
			})


		},
		renderDom: function (data) {
			var self = this;
			self.initDom()
			var title = '【' +self.name + '】'+ $(document).attr('title')
			$(document).attr('title', title);
			self.getData(self.url, function(data){
				self.data = data;
				self.xx(self.data, self.dataArr)
				self.showLi()
				$('.category-more .data').eq(0).trigger('click')
				// showEChart(self.dataArr, '营收', '营收同比增长率', self.dataArr['a100'] , self.dataArr['a101'], self.coin, '亿', self.myChart, self.screenShot, '', self.setting.bgImg || self.syImg);
				self.showData(self.data);

				$('.label .form-label').each(function(i){
					var text = $(this).html();
					
					if(text.indexOf('增长率') > -1) {
						$(this).css({color: '#0089a8',fontWeight: 'normal'})
					}
				})
				
				// self.renderFileDom(self.bg.reverse(), $('#bg'))
			})
			$('.chosen').append('<div class="company-name"><a href="https://www.100ec.cn/Home/Index/financialData.html?name='+ self.name + '" target="_blank">' + self.name + '</a><a href="javascript:;" class="del icon icon10"></a></div>')
			
			cpyData.forEach(function(ele){
				if(ele['name'] == self.name) {
					// ele['ipoUrl'] && $('.data-vs').prepend('<a href="' + ele['ipoUrl'] + '" target="_blank">IPO专题</a>')
					// ele['ztUrl'] && $('.data-vs').prepend('<a href="' + ele['ztUrl'] + '" target="_blank">相关专题</a>')
					self.category = ele['type'];
					
					// $('.category-item[data-category=' + self.category + ']').trigger('click')

					$('.cpy-name').html(self.name)
					
					// $('.cpy-stock').html(ele['code'])
				}

			})
		},
		// renderFileDom: function(data, tarDom) {
		// 	// console.log(data)
		// 	if(!data.length) {
		// 		tarDom.css('display', 'none').prev().css('display', 'none')
		// 	}else {

		// 		var oUl = $('<ul class="file"></ul>')
		// 		data.forEach(function(ele, index){
		// 			oUl.append('<li class="file-item"><a href="' + ele['href'] + '" target="_blank">' + (tarDom.is('#zgs')? ele['time'].slice(0, ele['time'].indexOf('年') + 1) :ele['time'])  + '</a></li>')
		// 		})
		// 		tarDom.append(oUl)
		// 	}
		// },
		showLi: function(){
			var self = this;
			$('.category-more .data').each(function(index, ele){
				var s = 0;
				var ydata = $(this).attr('data-num');
				s = count(self.Edata[ydata]);
				function count(obj, num){
					var num = 0;
					for(var i =0; i < obj.length; i++) {
						if(obj[i] == '') {
							num += 1;
						}
					}
					return num
				}
				if( s == self.Edata[ydata].length) {
					$(this).remove()
				}
			})
			
		},
		showLiEcharts: function(tar, data){
			var self = this;
			var ydata = tar.attr('data-num');
			var time = data['name']
			var ydata2 = calcydata2(data[ydata]);
			var classLi = tar;
			var len = ydata.length;
			
			var m = 0;
			var danwei;
			var coin = '';
			var title = tar.html();
			
			function calcydata2(data) {
				var arr = []
				var curValue, curTime, preValue
				// var pre
				// var cur
				data.forEach(function(ele, index){
					curTime = time[index]
					var number = parseInt(curTime)
					var str = curTime.slice(4)
					var i = time.indexOf(number - 1 + str)
					if( i == -1) {
						arr.push('');
					}else {
						curValue = Number(ele)
						preValue = data[i]
						if(preValue != 0 ) {
							if(preValue < 0 && curValue > 0) {
								var y = Math.round((curValue - preValue ) / (-preValue) * 1000)/10
							}else if(preValue < 0 && curValue < 0) {
								var y = Math.round((Math.abs(curValue) - Math.abs(preValue) ) / preValue * 1000)/10
							}else {
								var y = Math.round((curValue - preValue ) / preValue * 1000)/10
							}
							arr.push(y)
						}else {
							arr.push('');
						}
					}
					
				})
				return arr
			}

			danwei = dataType[ydata][2];
			var title2 = data['cate'] + dataType[ydata][0]
			if(!ydata2){
				self.curIndex = tar.index()
				self.title = self.setting.title || (title2 + '数据图')
				showEChart(data, dataType[ydata][0], '', data[ydata], data[ydata2], coin, danwei, self.myChart, self.screenShot, self.title, self.setting.bgImg || self.syImg, 'name');
			}else{

				self.curIndex = tar.index()
				self.title = self.setting.title || (title2 + '及同比增长率数据图')
				showEChart(data, dataType[ydata][0], '同比增长率', data[ydata], ydata2, coin, danwei, self.myChart, self.screenShot, self.title, self.setting.bgImg || self.syImg, 'name');
			}


		},
		xx: function(data,Edata) {
			// console.log(data)
			var self = this;
			if(data.length != 0) {
				for(var i in data[0]) {
					if(  i == 'cate'  ) {
						Edata[i] = data[0][i];
					}else {
						Edata[i] = self.bianli(data, i)
						
					}
					
				}

			}
			self.Edata = Edata
			// self.showLiEcharts(Edata)
		},
		bianli: function(data,target) {
			var arr = [];

			for(var i in data) {
				if(data[i][target] == null || data[i][target] == ''){
					arr.push('')
				}else if(data[i][target].indexOf('%') == -1){
					arr.push(data[i][target])
				}else {
					arr.push(data[i][target].substring(0,data[i][target].length-1))
				}
				
			}
			// console.log(arr)
			return arr
			
		},
		showData: function(data){
			//确认字段数据是否存在
			for( var i = 0; i < data.length; i++) {
				// $('.form-window .form-data').append('<div class="form-list"></div>')
				$.each(data[i],function(key, val){
					if(val && dataType[key]) {
						dataType[key][1] = true;
					}
				})
			}
			//将存在数据的字段名保存数组
			var arr = [];
			$.each(dataType,function(key, val){
				if(val[1]) {
					arr.push(key)
				}
			})
			//动态渲染存在数据的字段名以及数据list
			for( var n = 0; n < arr.length; n++) {
				if(dataType[arr[n]][2]) {
					$('.form-list.label').append('<div class="form-label">' + dataType[arr[n]][0] + '（' +  dataType[arr[n]][2] + '）'  + '</div>');
				}else{
					$('.form-list.label').append('<div class="form-label">' + dataType[arr[n]][0] + '</div>');
				}
				
			}

			data.forEach(function(ele, index){
				var count = 0;
				arr.forEach(function(item){
					ele[item] ? count++ : '';
				})
				if(count > 1) {
					$('.form-window .form-data').prepend('<div class="form-list"></div>')
					arr.forEach(function(item){
						$('.form-window .form-data .form-list').eq(0).append('<div class="form-label">' + (ele[item] ? ele[item] : '-') +'</div>')
					})
				}
			})
			
		},
		renderCpyNav: function(type, data, curCpy) {
			$('.cpy').empty()
			var arr = data.filter(function(item){
				return item['type'] == type
			})

			arr.forEach(function(item) {
				$('.cpy').append('<li><a class="' + (item['name'] == curCpy ? 'active' : '') + '" href="https://www.100ec.cn/Home/Index/newFinancialData.html?name='+ item['name'] + '">' + item['name'] + '</a></li>')
			})
		},
		bindEvent: function () {
			var self = this;
			$('#country').on('click', 'li', function() {
				if(!$(this).hasClass('active')) {
					window.location.href = location.origin + location.pathname + '?name=' + $(this).data('id');
				}
				// $(this).addClass('active').siblings().removeClass('active')
				// self.renderCpyNav($(this).data('category'), cpyData, self.name)
			})
			$('#dataVs').on('click',function(){
				$('.data-vs-wrapper').addClass('show');
				$('body').addClass('body-noScroll');
			})
			$('.close').on('click',function(){
				$('.data-vs-wrapper.show').removeClass('show')
				$('body.body-noScroll').removeClass('body-noScroll')
			})
			$('.chosen .del').on('click',function(){
				$(this).parent().remove();
			})
			$('#screenshotBtn').on('click', function(){
				if(self.screenShot) {
					$('body').removeClass('screenshot-open')
					self.screenShot = false;
				}else {
					$('body').addClass('screenshot-open')
					self.screenShot = true;
				}
				self.myChart.resize({
					width: $('.tu').width(),
				})
				$('.category-more .data').eq(self.curIndex).trigger('click')
			
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
					!self.settingFlag ? self.setting.oldtitle = $('#screenIndustry p').html(): '';
					self.setting.title = $('input[name=title]').val() 
					self.setting.title && settingTitle(self.setting.title, $('#screenIndustry p'))
					self.settingFlag = true
				}else if(type == 'font') {
					self.setting.font = $('input[name=titleSize]:checked').val()
					var dom = $('.screenshot-industry-title, .screenshot-industry-footer')
					self.setting.font && settingFont(self.setting.font, dom)
				}else if(type == 'color') {
					self.setting.color = $('input[name=color]').val()
					var dom1 = $('.screenshot-industry-title, .screenshot-industry-footer')
					// var dom4 = $('.screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer')
					self.setting.color && settingColor(self.setting.color,  dom1)
				}else if(type == 'bgImg') {
					if($('input[name=isBgImg]').is(':checked')) {
						self.setting.bgImg = 'none'
						
					}else {
						self.setting.bgImg = $('input[name=bgImg]').val() 
					}
					$('.category-more .data').eq(self.curIndex).trigger('click')
					// settingBgImg(self.setting.bgImg, $('.sjk-data-content'))
				}else {
					return 
				}
				$('.tools-close-btn').trigger('click')
			})
			$('.tools-close-btn, .mask').on('click', function() {
				$('.tools-wrap').removeClass('active').find('.tools-box').hide()
				
			})
			$('#init').on('click', function() {
				$('.screenshot-industry-title, .screenshot-industry-footer').removeAttr('style')
				$('#screenIndustry p').html(self.setting.oldtitle) 
				self.setting = {};
				self.settingFlag = false
				$('.category-more .data').eq(self.curIndex).trigger('click')
			})
			$('.category-more').on('click', '.data', function(){
				self.showLiEcharts($(this), self.Edata)
			})
		},
		//ajax获取数据
		getData: function(url, cb) {
			var self = this;
			$.when(
				$.ajax({
					dataType: 'json',
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
	}
	fin.init()
})(jQuery)