(function($){
	function TabsModule (config) {
		if(!config.el) {
			return 
		}
		this.wrap = config.el;
		this.data = config.data;
		this.done = config.clickEvent
		this.init()
	}

	TabsModule.prototype = {
		init: function() {
			var self = this;
			this.createDom()
			this.bindEvent()
		},
		createDom: function() {
			var self = this;
			var ul = $('<ul class="cb-menu" id="cbMenu"></ul>')
			self.data.forEach(function(ele) {
				if(ele.key != 'coin') {
					ul.append('<li title="' + ele['text'] + '" data-key="' + ele['key'] + '">' + ele['title'] + '</li>')
				}
			})
			// for(var key in self.data) {
			// 	if(key != 'coin') {
			// 		ul.append('<li title="' + self.data[key]['name'] + '" data-key="' + key + '">' + self.data[key]['name'].split('及')[0] + '</li>')
			// 	}
				
			// }
			ul.appendTo(self.wrap)
			if(ul.height() > 35) {
				var icon = $('<div class="icon-down" title="下拉" id="iconDown"></div>')
				icon.appendTo(self.wrap)
			}
			
		},
		bindEvent: function() {
			var self = this;
			$('.cb-menu', self.wrap).on('click', 'li', function() {
				if($(this).hasClass('active')) {
					return
				}
				$(this).addClass('active').siblings().removeClass('active')
				self.done($(this).data('key'))
			})
			$('.icon-down', self.wrap).on('click', function() {
				if($(this).hasClass('active')) {
					$(self.wrap).removeAttr('style')
					$(this).removeClass('active')
				}else {
					$(this).addClass('active')
					var h = $('.cb-menu', self.wrap).height()
					$(self.wrap).css('height', h + 'px')
				}
				
			})
		},
	}


	window.tabsModule = TabsModule
})(jQuery)