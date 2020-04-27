(function($){
	function TrzModule () {

	}
	TrzModule.prototype.addData = function(data) {
		data.forEach(function(ele){
			ele['date'] = '';
			var day = parseInt(ele['dtime'].split('月')[1])
			ele['date'] += ele['a104'] + ( ele['a105'] < 10? '0' + ele['a105']: ele['a105'] ) + ( day < 10? '0' + day: day ) ;
			
			var money = ele['a100'];
			var dw = ele['a101'];
			var reg = /[0-9]/g;
			var s = 1
			if( !reg.test(money) ) {
				dataMoney.forEach(function(item){

					if(item['title'].indexOf(money) != -1) {
						money = item['number']
					}
				})
			}
			if(dw.indexOf('美') != -1) {
				s = 6.85
			}else if(dw.indexOf('港') != -1) {
				s = 1.14
			}
			if(money.indexOf('万') != -1) {
				money = parseInt(money) * 10000
			}else if(money.indexOf('亿') != -1){
				money = parseInt(money) * 10000 * 10000
			}else {
				money = 0
			}

			ele['money'] = money * s;
		})

		return data
	}

	window.trzModule = new TrzModule()

})(jQuery)