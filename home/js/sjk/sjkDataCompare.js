var list = {
	dataCompare: function(config) {
		this.url = config.url;
		this.jsonUrl = config.jsonUrl;
		this.curField = config.curField;
		this.curFieldStr = config.curFieldStr;
		this.keyArr = [];
		this.renderDom();
		this.dcBindEvent();
		this.showData = {};

	},
	renderDom: function() {
		var str = '';
		var str2 = '';
		dataType.forEach(function(ele, index){
			if(ele['k'] != 'dtime') {
				str += '<li data-dw="' + ele['dw'] + '" data-key="' + ele['k'] + '">' + ele['text'] + '</li>'
			}
		})
		$('.select-item.select-key ul').append(str);

		dataField.forEach(function(ele, index){
			str2 += '<li data-category="' + ele['id'] + '">' + ele['title'] + '</li>'
		})
		$('.select-item.select-category ul').append(str2);

		$('.choose.chosen').append('<div class="company-name" data-id="' + this.curField + '"><a href="' + this.url + this.curField +'" target="_blank">'+ this.curFieldStr +'</a><a href="javascript:;" class="del icon icon10"></a></div>')
		this.keyArr.push(this.curFieldStr)
	},
	dcBindEvent: function() {
		var self = this;
		$('.select-item.select-key ul').on('click', 'li', function(e){
			$(this).parent().prev().html($(this).html()).data({
				key: $(this).data('key'),
				dw: $(this).data('dw')
			});

			self.showData['keyword'] = $(this).html()
			self.showData['id'] = $(this).data('key')
		})
		$('.select-item.select-category ul').on('click', 'li', function(e){
			$(this).parent().prev().html($(this).html())
			var str = '';
			dataField[$(this).index()]['children'].forEach(function(ele, index){
				str += '<li data-field="' + ele['id'] + '">' + ele['title'] + '</li>'
			})
			$('.select-item.select-company').find('ul').empty().append(str).prev('span').html('选择领域');

		})
		$('.select-item.select-company ul').on('click', 'li', function(e){
			if(self.keyArr.indexOf($(this).html()) != -1 ) {
				alert('请不要添加相同的行业')
				return false
			}
			self.keyArr.push($(this).html())
			$(this).parent().prev().html($(this).html());
			$('.choose.chosen').append('<div class="company-name" data-id="' + $(this).attr('data-field') + '"><a href="' + self.url + $(this).attr('data-field') +'" class="t" target="_blank">'+ $(this).html() +'</a><a href="javascript:;" class="del icon icon10"></a></div>')
		})
		$('.choose.chosen').on('click', '.del', function(){
			$(this).parent().remove();
			var self_ = $(this)
			self.keyArr = self.keyArr.filter(function(ele){
				return ele != self_.prev().html()
			})
		})
		$('.close').on('click', function(){
			$('.data-vs-wrapper.show').removeClass('show');
			$('body').removeClass('body-noScroll')
		})
		$('#showBtn').on('click', function(){
			var len = $('.company-name').size()
			if(!$('.select-item.select-key span').data('key')) {
				alert('请选择对比字段')
				return false
			}else if(len < 2) {
				alert('请选择至少两个对比行业')
				return false
			}
			
			var arr = [];
			for(var i = 0 ; i < len ; i ++) {
				arr[i] = {};
				arr[i]['id'] = $('.company-name').eq(i).data('id');
				arr[i]['name'] = $('.company-name').eq(i).find('a').eq(0).html();
			}
			self.showData['xdata'] = [];
			self.showData['dw'] = $('.select-item.select-key span').data('dw');
			self.showData['field'] = [];
			self.showData['ydata'] = {};
			// console.log(self.showData)
			self.getData(arr, 0);
		
		})
	},
	getData: function (data, i) {
		var self = this;
		var flagX = true;
		$.when($.ajax({
			dataType: 'json',
			url: self.jsonUrl + data[i]['name'],
			success: function(res) {
				var num = 0;
				var name = res['list'][0]['name']
				self.showData['field'].push(name);
				self.showData['ydata'][res['list'][0]['name']] = {}
				if(i == 0) {
					res.list.forEach(function(ele) {
						self.showData['xdata'].push(ele['dtime']);
						self.showData['ydata'][name][ele['dtime']] = ele[self.showData['id']];
						ele[self.showData['id']] == '' || ele[self.showData['id']] == null ?  num++ : '';
					})
					if(num == Object.keys(self.showData['ydata'][name]).length ) {
						alert('暂无首选行业的字段数据')
						flagX = false
					}
				}else if(self.showData['xdata'].length > 0){
					self.showData['xdata'].forEach(function(item){
						var flag = false
						res.list.forEach(function(ele) {
							if(ele['dtime'] == item ) {
								self.showData['ydata'][name][item] = ele[self.showData['id']];
								flag = true
							}
						})
						if(!flag) {
							self.showData['ydata'][name][item] = '';
						}
					})
				}

			}
		})).done(function(res){
			i++;
			if(!flagX) return false
			if(i == data.length) {
				showEChart(self.showData)
			}else{
				self.getData(data, i)
			}
			
		}).fail(function(){
			console.log('数据有误')
		})

	},
	
}