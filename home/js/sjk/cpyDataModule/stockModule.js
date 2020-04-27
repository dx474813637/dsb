(function($){
	function StockModule (config) {
		if(!config.el) {
			return 
		}
		this.btn = $(config.el)
		this.code = config.stockCode
		this.name = config.stockName
		this.codeJs = window['hq_str_' + this.code]
		this.type = ''
		this.data = '';
		this.init()
	}

	StockModule.prototype = {
		init: function() {
			var self = this;
			if(self.code.indexOf('gb') != -1) {
				self.type = '美股';
			}else if(self.code.indexOf('hk') != -1) {
				self.type = '港股';
			}else {
				self.type = 'A股';
			}
			self.data = self.isType(self.type, self.codeJs)

			if(self.type == 'A股') {
				self.createDom()
				self.bindEvent()
				self.btn.parent().addClass('active')
				$('#stockTabs li').eq(0).trigger('click')
			}

		},
		createDom: function() {
			var self = this;
			$('body').prepend('<div class="stockImagWrap">'+
				'<div class="mask"></div>'+
				'<div class="stock-box">'+
					'<div class="close" title="关闭"></div>' +
					'<p class="stock-box-name">' + self.name + '</p>'+
					'<ul class="stock-box-tabs" id="stockTabs">'+
						'<li class="tabs-item" data-type="min">分时线走势图</li>'+
						'<li class="tabs-item" data-type="daily">日K线走势图</li>'+
						'<li class="tabs-item" data-type="weekly">周K线走势图</li>'+
						'<li class="tabs-item" data-type="monthly">月K线走势图</li>'+
					'</ul>'+
					'<ul class="stock-box-img" id="stockImg">'+
						'<li class="img-item" data-type="min"><img src="http://image.sinajs.cn/newchart/min/n/' + self.code + '.gif" /></li>'+
						'<li class="img-item" data-type="daily"><img src="http://image.sinajs.cn/newchart/daily/n/' + self.code + '.gif" /></li>'+
						'<li class="img-item" data-type="weekly"><img src="http://image.sinajs.cn/newchart/weekly/n/' + self.code + '.gif" /></li>'+
						'<li class="img-item" data-type="monthly"><img src="http://image.sinajs.cn/newchart/monthly/n/' + self.code + '.gif" /></li>'+
					'</ul>'+
				'</div>'+
			'</div>')
		},
		bindEvent: function() {
			var self = this;
			this.btn.on('click', function() {
				$('.stockImagWrap').addClass('active')
			})
			$('#stockTabs').on('click', 'li', function() {
				$(this).addClass('active').siblings().removeClass('active')
				var type = $(this).data('type')
				$('#stockImg li[data-type=' + type + ']').addClass('active').siblings().removeClass('active')
			})
			$('.stockImagWrap .mask').on('click', function() {
				$('.stockImagWrap').removeClass('active')
			})
			$('.close').on('click', function() {
				$('.stockImagWrap .mask').trigger('click')
			})
		},
		isType: function(type, codeJs) {
			var self = this;
			var arr 
			if(type.indexOf('A股') != -1) {
				arr = self.aStockData(codeJs)
				arr[0] = '￥' + arr[0]
				arr[1] = '￥' + arr[1]
				arr[4] = '￥' + arr[4]
			}else if(type.indexOf('港股') != -1) {
				arr = self.hkStockData(codeJs)
				arr[0] = 'HK$' + arr[0]
				arr[1] = 'HK$' + arr[1]
				arr[4] = 'HK$' + arr[4]
			}else {
				arr = self.nStockData(codeJs)
				arr[0] = '$' + arr[0]
				arr[1] = '$' + arr[1]
				arr[4] = '$' + arr[4]
			}

			return arr
		},
		aStockData: function(code) {
			var self = this;
			var arr = code.split(',')
			var jr, zr, zde, zdf, xj, res;
			jr = arr[1];
			zr = arr[2];
			xj = arr[3];
			zde = xj - zr;
			zdf = zde / zr * 100 ;
			isNaN(zdf) ? zdf = 0 : '';
			res = [jr, zr, zde, zdf, xj]
			res.forEach(function(ele, index){
				res[index] = self.toFixFun(ele)
			})
			return res
		},
		hkStockData: function(code) {
			var self = this;
			var arr = code.split(',')
			var jr, zr, zde, zdf, xj, res;
			jr = arr[2];
			zr = arr[3];
			xj = arr[6];
			zde = xj - zr;
			zdf = zde / zr * 100 ;
			isNaN(zdf) ? zdf = 0 : '';
			res = [jr, zr, zde, zdf, xj]
			res.forEach(function(ele, index){
				res[index] = self.toFixFun(ele)
			})
			return res
		},
		nStockData: function(code) {
			var self = this;
			var arr = code.split(',')
			var jr, zr, zde, zdf, xj, res;
			jr = arr[5];
			zr = arr[26];
			xj = arr[1];
			zde = xj - zr;
			zdf = zde / zr * 100 ;
			isNaN(zdf) ? zdf = 0 : '';
			res = [jr, zr, zde, zdf, xj]
			res.forEach(function(ele, index){
				res[index] = self.toFixFun(ele)
			})
			return res
		},
		toFixFun: function(data) {
			return (Math.floor(data * 1000) / 1000).toFixed(3)
		}
	}

	window.stockModule = StockModule

})(jQuery)