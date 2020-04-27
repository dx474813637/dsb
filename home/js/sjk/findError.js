(function($){
	function FindError(config) {
		this.wrap = config.wrap;	//储存父级结构
		this.btn = config.btn; 		//触发反馈信息盒子的按钮 数据格式为Array 可制定多个
		this.address = config.address || "https://www.100ec.cn/newsemail.html";	
		this.boxTitle = config.title || "错误信息反馈表";
		this.formInput = config.formInput || [{ name: '错误信息反馈表', type: 'textarea', placeholder: '内容（300字内）'}]
		this.createDom()
		this.bindEvent()
	}

	FindError.prototype.createDom = function(){
		var self = this;
		var formDiy = '' ;
		self.formInput.forEach(function(ele, index){
			var row = ''
			if(ele['type'] == 'input') {
				row = '<input class="must" type="' + (ele['name'] == '邮箱' ? 'email' : 'text') + '" name="' + ele['name'] + '" id="diy' + index + '" value="" placeholder="' + ele['placeholder'] + '">'
			}else if(ele['type'] == 'textarea') {
				row = '<textarea class="must" name="' + ele['name'] + '" id="diy' + index + '" placeholder="' + ele['placeholder'] + '" ></textarea>'+
					'<span id="textCount">0/300</span>'
			}
			formDiy += ('<div class="upMistake-row">' + row + '</div>')
		})
		//渲染插件盒子dom结构
		self.wrap.append('<div id="moveArea"></div>' +
			'<form id="mistakeForm" action="' + self.address + '" method="post">'+
				'<p id="title">' + self.boxTitle + '</p>'+
				'<div class="upMistake-row">'+
					'<input type="text" class="must" name="提交所在页面" id="cpyName" readonly value="' + window.location.href + '">'+
				'</div>'+
				'<div class="upMistake-row">'+
					'<input class="must" type="text" id="verify" name="verify" placeholder="验证码" required/>'+
					'<img style="cursor:pointer;" alt="验证码" src="/Index/verify.html" title="点击刷新" name="code_img" id="code_img" />'+
				'</div>'+
				formDiy +
				'<div class="up-btn">在线提交</div>'+
			'</form>'+
			'<div id="close" title="关闭窗口">x</div>');

			self.wrap.css('height',(3+$('#mistakeForm input', self.wrap).size()) * 50 + $('#mistakeForm textarea', self.wrap).size()* 180 + 'px')

	}
	// '<div class="upMistake-row">'+
	// 	'<textarea name="' + self.boxTitle + '" id="upMistake" placeholder="内容（300字内）" ></textarea>'+
	// 	'<span id="textCount">0/300</span>'+
	// '</div>'+
	FindError.prototype.submitForm = function(){
		var self = this;
		var arr = $('#mistakeForm', self.wrap).find('.must');
		var flag = true
		arr.each(function(index, ele){
			if(!$(ele).val()) {
				$(ele).css('background', 'rgba(244, 67, 54, 0.19)')
				flag = false
			}
		})
		if(flag) {
			$('#mistakeForm', self.wrap).submit()
		}
	}
	FindError.prototype.bindEvent = function(){
		var self = this;
		var len, arr;
		//绑定验证码点击刷新事件
		self.wrap.on('click', '#code_img', function(){
			$(this).prop('src', $(this).prop('src') + '?' + Math.random())
		})
		//纠错反馈内容字数数量输入检测事件
		$('textarea', self.wrap).bind('input propertychange',function(){
			len = $(this).val().length;
			if($(this).val()) {
				$(this).removeAttr('style')
			}
			arr = $(this).val().split('');
			arr.forEach(function(ele){
				var code = ele.charCodeAt()
				code < 0 || code > 127 ? len++ : '';
			})
			len > 300 ? $('#textCount', self.wrap).css('color','red') : $('#textCount', self.wrap).css('color','#666')
			$('#textCount', self.wrap).html(len + '/300')
		})
		$('input', self.wrap).bind('input propertychange',function(){
			if($(this).val()) {
				$(this).removeAttr('style')
			}
		})
		//提交纠错信息按钮事件
		$('.up-btn', self.wrap).on('click', function(){
			self.submitForm()
			// $('#upMistake', self.wrap).val() && $('#verify', self.wrap).val() ? (len>300 ? alert('输入的内容不要大于300字') : $('#mistakeForm', self.wrap).submit() ) : alert('请输入您要验证码以及纠错的内容');
		})
		//关闭纠错盒子按钮事件
		$('#close', self.wrap).on('click', function(){
			self.wrap.removeClass('show')
		})
		//盒子拖拽事件 按下
		$('#moveArea', self.wrap).on('mousedown', function(e){
			var positionDiv = self.wrap.offset();
			var scorllTop = positionDiv.top - $(document).scrollTop();
			var distenceX = e.pageX - positionDiv.left;
	    	var distenceY = e.pageY - positionDiv.top;
	    	self.wrap.css({
	            'left': positionDiv.left,
	            'top': scorllTop + 'px',
	            'margin': 0,
	        });
	        //盒子拖拽事件 拖拽过程
	        $(document).mousemove(function(e){
		        var x = e.pageX - distenceX;
		        var y = e.pageY - distenceY - $(document).scrollTop();
		        if( (x + self.wrap.width()) >  $(document).width() ) {
		        	x = $(document).width() - self.wrap.width()
		        }else if( x < 0 ) {
		        	x = 0
		        }
		        if( (y + self.wrap.height()) >  $(window).height() ) {
		        	y = $(window).height() - self.wrap.height()
		        }else if( y < 0 ) {
		        	y = 0
		        }
		        self.wrap.css({
		            'left': x + 'px',
		            'top': y + 'px',
		            'margin': 0,
		        });
			});
			//盒子拖拽事件 点击抬起过程
			$(document).mouseup(function(){
				$(document).off('mousemove');
			});
		})
		//绑定触发盒子按钮事件
		$(self.btn.join(',')).on('click', function(){
			self.wrap.addClass('show')
		})
	}


	$.fn.extend({
		findErrorBox: function(config) {
			config.wrap = this;
			new FindError(config)
		}
	})
}(jQuery))