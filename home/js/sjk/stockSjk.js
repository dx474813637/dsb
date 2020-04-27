(function($){
	var stock = {
		init: function() {
			var self = this;

			this.data = stockData;
			this.type = this.getURLString('name') || 'A股';
			this.bindEvent()
			this.renderList()
			// $('.stock-nav-item ul li').eq(0).trigger('click')
		},
		renderList: function() {
			var self = this;
			$('.stock-nav-item ul li').each(function(index, ele){
				if(self.type == $(this).html()) {
					$(this).addClass('active')
					return
				}
			})
			self.showList()
		},
		bindEvent: function() {
			var self = this;
			$('.stock-nav-item ul li').on('click', function() {
				window.location.href = location.origin + location.pathname + '?name=' + $(this).html()
				// $('.stock-nav-item ul li').removeClass('active')
				// $(this).addClass('active')
				// $('#list').append('<div class="refresh-div"><img src="/Public/home/images/icon-loading.png"/></div>')
				// self.type = $(this).html();
				// self.showList()
			})
			$('#list').on('click', '.show-btn', function() {
				var name = $(this).siblings('.stock-name').html();
				$('.model-cpy-name').html(name)
				var code = $(this).data('code')
				self.loadImg(code)
				$('.modelBox').addClass('active')
				$('body').addClass('body-noScroll')
			})
			$('.close, .mask').on('click', function() {
				$('.modelBox').removeClass('active')
				$('body').removeClass('body-noScroll')
			})
			$('.tabs').on('click', '.tabs-item', function() {
				var i = $(this).index()
				$('.chart-list .chart-item').eq(i).addClass('active').siblings().removeClass('active')
				$(this).addClass('active').siblings().removeClass('active')
			})

		},
		getURLString: function (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		    var r = window.location.search.substr(1).match(reg); 
		    if (r != null) return decodeURIComponent(r[2]); 
		    return null; 
		},
		loadImg: function(code){
			$('.chart-list .chart-item').each(function(index, ele) {
				$(this).html('<img src="http://image.sinajs.cn/newchart/' + $(this).data('type') + '/n/' + code + '.gif" />')
			})
		},
		showList: function() {
			var self = this;
			var newData;
			newData = self.renderData(self.type, self.data);
			// console.log(self.type, self.data, newData)
			self.renderDom(newData)
		},
		renderData: function(type, data){
			return data.filter(function(ele){
				return ele['type'].indexOf(type) != -1
			})
		},
		renderDom: function(data) {
			$('#list').empty()
			var self = this;
			var jr, zr, zde, zdf, xj, res, aDiv;
			data.forEach(function(ele){
				var iconStock = '';
				var code = '';
				if(ele['type'].indexOf('A股') != -1) {
					var arr = ele['code'].split('.')
					var code = arr[1].toLowerCase() + arr[0]
					iconStock = '<div class="show-btn" data-code="' + code + '" title="走势图"></div>'
				}
				// http://image.sinajs.cn/newchart/min/n/' + str + '.gif
				res = self.isType(ele['type'], ele['codeJs'])
				$('#list').append('<li class="stock-list-row ' + (res[2] < 0 ? 'green' : (res['2'] == 0 ? '' :'red')) + '">'+
                        '<div class="list-item ">'+
                            '<span class="stock-name" id="stockName">' + ele['name'] + '</span>'+
                            '<span class="stock-code" id="stockCode">' + ele['code'] + '</span>'+ 
                            iconStock +
                        '</div>'+
                        '<div class="list-item"><p>' + res[0] + '</p></div>'+
                        '<div class="list-item"><p>' + res[1] + '</p></div>'+
                        '<div class="list-item"><p class="' + (res[2] > 0 ? 'up' : (res['2'] == 0 ? '' :'down')) + '">' + (res[2] < 0 ? -res[2] : res[2]) + '</p></div>'+
                        '<div class="list-item"><p class="' + (res[2] > 0 ? 'up' : (res['2'] == 0 ? '' :'down')) + '">' + (res[3] < 0 ? -res[3] : res[3]) + '%</p></div>'+
                        '<div class="list-item"><p>' + res[4] + '</p></div>'+
                        '<div class="list-item"><p>' + 
                        	(ele['yb'] && '<a href="/search.php?p=1&f=search&terms=' + ele['yb'] + '" target="_blank">研报</a>') +
                        	(ele['kp'] && '<a href="/search.php?p=1&f=search&terms=' + ele['kp'] + '" target="_blank">快评</a>') + 
                        	(ele['ztUrl'] && '<a href="' + ele['ztUrl'] + '" target="_blank">专题</a>') + 
                        '</p></div>'+
                    '</li>')
			})
		},
		createDom: function(yb, kp, zt){
			var str = '';
			str = (yb && '<a href="/search.php?p=1&f=search&terms=' + yb+ '" target="_blank"></a>') + (kp && '<a href="/search.php?p=1&f=search&terms=' + kp + '" target="_blank"></a>') + (zt && '<a href="' + zt + '" target="_blank"></a>');
			return str
		},
		isType: function(type, codeJs) {
			var self = this;
			var arr 
			if(type.indexOf('A股') != -1) {
				arr = self.aStockData(codeJs)
				arr[4] = '￥' + arr[4]
			}else if(type.indexOf('港股') != -1) {
				arr = self.hkStockData(codeJs)
				arr[4] = 'HK$' + arr[4]
			}else {
				arr = self.nStockData(codeJs)
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
	stock.init()
}(jQuery))