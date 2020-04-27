
$('#dsjNav').on('click', '.dsj-nav-list-item', function (event) {
	event.stopPropagation();
	var h = ulAnimation($(this))
	isScrollBar(h)
})
function ulAnimation (tar) {
	var tarUl = tar.find('ul')[0];
	var num = tarUl.children.length;
	var h = tarUl.children[0].offsetHeight;
	var H = h * num;
	if(tar.hasClass('more')) {
		tar.addClass('open').removeClass('more').children('.dsj-nav-list').addClass('active')
		tarUl.style.height = H + 'px';
		var tarParent = $(tarUl).parents('.dsj-nav-list')[0]
		$(tarParent).css({
			'overflow':'visible',
			'height': 'auto'
		})
		return $('#dsjNav').find('.dsj-nav-list').height() + H
	}else if(tar.find('ul').length != 0){
		tar.removeClass('open').addClass('more').children('.dsj-nav-list').removeClass('active')
			.find('.dsj-nav-list-item.open').removeClass('open').addClass('more')
			.find('.dsj-nav-list.active').css({
				'height': '',
				'overflow': ''
			}).removeClass('active')
		$(tarUl).removeAttr('style')
		return $('#dsjNav').find('.dsj-nav-list')[0].offsetHeight - H
	}

}
$('#zhedieBtn').on('click', function() {
	if($('body').hasClass('zhedie')) {
		$('body').removeClass('zhedie')
	}else {
		$('body').addClass('zhedie')
	}
	
})
$('.dsj-nav-box').on('mousedown', '.bar', function(event) {
	var curTop = $('.bar').offset().top - $(window).scrollTop() - 45;

	var y = event.pageY
	var disY;
	$(document).bind("selectstart",function(){return false;});
	$(document).on('mousemove', function(e){
		var disY = e.pageY - y
		var scrollH = $('.scrollBarBox').height() - $('.bar').height()
		var maxdownScroll = scrollH - curTop
		var t = curTop + disY
		if(t < 0) {
			t = 0
		}
		if(t > scrollH) {
			t = scrollH
		}
		$('#dsjNav')[0].scrollTop = t / scrollH * ($('#dsjNav').children(':first').outerHeight() - $('.dsj-nav-box').height())
		$('.bar').css({
			'top':  t+ 'px',
		})
	})
	$(document).on('mouseup', function(e) {
		$(document).unbind('mousemove')
		$(document).unbind("selectstart");
	})
})
function isScrollBar(h) {
	var boxH = $('.data-item.left').height()
	var navH = h || $('#dsjNav').children(':first').outerHeight()
	if(navH > boxH) {
		if($('.scrollBarBox').length > 0 ) {
			changeScrollBar(navH, boxH)
		}else {
			addScrollBar(navH, boxH)
		}
		
	}else {
		removeScrollBar()
	}
}
function addScrollBar(zongH, barH) {
	var barBox = $('<div class="scrollBarBox"></div>')
	var h = barH / zongH * barH

	var bar = $('<div class="bar"></div>').css({
		'height': h + 'px',
		backgroundColor: '#024753'
	})
	barBox.append(bar)
	$('.dsj-nav-box').append(barBox)
}
function removeScrollBar() {
	$('.scrollBarBox').remove()
}
function changeScrollBar(zongH, barH) {
	var h = barH / zongH * barH;
	var t = ($('#dsjNav')[0].scrollTop / (zongH - barH)) * (barH - h);
	$('.bar').css({
		'height': h + 'px',
		'top': t + 'px',
	})
}

preventScroll($('#dsjNav'))

function preventScroll (dom, change, top){
    if(dom.jquery){
        dom = dom.get(0);
    }
    if(navigator.userAgent.indexOf('Firefox') >= 0){   //firefox
        dom.addEventListener('DOMMouseScroll',function(e){
        	isScrollBar()
        	dom.scrollTop += e.detail > 0 ? 30 : -30;
            e.preventDefault();
        },false);
    }else{
        dom.onmousewheel = function(e){
        	isScrollBar()
            e = e || window.event;
        	dom.scrollTop += e.wheelDelta > 0 ? -30 : 30;
            return false;
        };
    }
};
function showUl(data, tar, baseUrl) {
	var flag = true
	if(data.children) {
		flag = false

	}

	var oLi = $('<li class="dsj-nav-list-item ' + (flag? '' : 'more') + '"></li>')
	var oP = $('<p></p>')
	if(flag) {
		oP.append('<a href="' + (baseUrl || '') + data.href + '" target="_blank"><i class="icon-sjk"></i>' + data.name + '</a>')
		oLi.append(oP)
	}else {
		oP.append('<i class="icon-sjk"></i>' + data.name)

		oLi.append(oP)
		renderUl(data.children, oLi, data.baseUrl || baseUrl )
	}
	
	oLi.appendTo(tar)
}

	dbInit()
	function dbInit() {
		var data1, data2
		db.forEach(function(ele){
			if(ele['name'] == '基础数据库') {
				return data1 = ele
			}
			if(ele['name'] == '领域数据库') {
				return data2 = ele
			}
		})

		addChildrenData(data1, data2)
		db.forEach(function(ele){
			ele['name'] == '领域数据' ? ele['children'] = data2 : ''
		})
		renderUl(db, $('#dsjNav'))

	}
	function addChildrenData (data1, data2) {
		if(data2.children.length == 0) {
			return
		}
		data2.children.forEach(function(ele){
			var name = ele['name'];
			initData(ele, data1.children, name)
		})

	}

	function initData (target, data, name, dataParent, sjkName) {
		if(data instanceof Array) {
			data.forEach(function(ele) {
				initData(target, ele, name, dataParent, sjkName)
			})
		}
		if(data['name'] == name ) {
			if(data['children'] && data['children'].length > 0) {
				target.children.push({
					name: sjkName,
					baseUrl: dataParent['baseUrl'] || data['baseUrl'],
					children: data['children']
				})
			}else {
				var href = ''
				if(dataParent['baseUrl']) {
					href = dataParent['baseUrl']
				}
				href += data['href']
				
				target.children.push({
					name: sjkName == '零售电商'? '电商评级数据库' : sjkName,
					href: href
				})
			}
		}else {
			if(data['children'] && data['children'].length > 0) {
				initData(target, data['children'], name, data, data['name'])
			}
		}

	}
function renderUl(data, tar, baseUrl) {
	var oUl = $('<ul class="dsj-nav-list ' + (tar.is('#dsjNav') ? 'active': '' ) + '"></ul>')
	data.forEach(function(ele) {
		showUl(ele, oUl, baseUrl)
	})
	tar.append(oUl)
}

$('#dsjNav').children().children().each(function(index, ele) {
	$(this).trigger('click')
})