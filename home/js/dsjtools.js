$('#download').on('click', function() {
    $('body').addClass('preview-mode body-noScroll')
    if(!$('body').hasClass('screenshot-open')) {
      $('#screenshotBtn').trigger('click')
    }
    if(!$('body').hasClass('zhedie')) {
      $('#zhedieBtn').trigger('click')
    }
    $('.preview-wrap').addClass('active').find('.preview-box').fadeIn('fast')
    // setTimeout(function(){
    getCanvas($('.sjk-table'))
    // }, 1000)
  })

  $('.preview-close-btn, .mask', '.preview-wrap').on('click', function() {
    $('.preview-wrap').removeClass('active').find('.preview-box').hide()
    $('body').removeClass('preview-mode body-noScroll')
    $('#preview').empty()
  })
  function getCanvas (tar) {
    var width = tar[0].offsetWidth; //dom宽
    var height = tar[0].offsetHeight; //dom高
    // 解决图片模糊
    var scale = 1;//放大倍数
    var canvas = document.createElement('canvas');
    canvas.width = width ;
    canvas.height = height ;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    var context = canvas.getContext('2d');
    context.scale(scale, scale);
        //设置context位置，值为相对于视窗的偏移量负值，让图片复位(解决偏移的重点)
        var rect = tar.get(0).getBoundingClientRect();//获取元素相对于视察的偏移量
    // context.translate(-rect.left, -rect.top);
 
    var opts = {
      canvas: canvas,
      useCORS: true, // 【重要】开启跨域配置
      scrollY: 0, // 纵向偏移量 写死0 可以避免滚动造成偶尔偏移的现象
    };
    html2canvas(tar[0], {
        onrendered: function (canvas) {
            var url = canvas.toDataURL();
            // 显示图片隐藏dom（图片生成后的操作）
            newImg = document.createElement("img");
            newImg.src = url;
            newImg.crossOrigin = 'anonymous'
            $(newImg).on('load', function() {
                document.getElementById('preview').appendChild(newImg);
            });
            $('.preview-box-footer a#down').attr("href", url).attr("download", $('#screenName').html() + ".png")

        },useCORS:true
    });
    // html2canvas(tar[0], opts).then(canvas => {
    //   // 使用toDataURL方法将图像转换被base64编码的URL字符串
    //   var url = canvas.toDataURL();
    //   // 显示图片隐藏dom（图片生成后的操作）
    //   newImg = document.createElement("img");
    //       newImg.src = url;
    //       $(newImg).on('load', function() {
    //     document.getElementById('preview').appendChild(newImg);
    //   });
    //       $('.preview-box-footer a#down').attr("href", url).attr("download", $('#screenName').html() + ".png")

    // });

  }
function settingTitle (settingtitle, dom) {
	dom.html(settingtitle)
}
function settingFont (settingfont, dom) {
	dom.css('fontSize', settingfont + 'px')
}
function settingColor (color, dom1, dom2, dom3) {
	var contentColor = colorRgb(color, .1)
	dom1 && dom1.css('backgroundColor', color)
	dom2 && dom2.css('borderColor', color)
	dom3 && dom3.css('backgroundColor', contentColor)
}
function settingBgImg(settingImg, listDom) {
	$('.sy-diy').remove()
	if(!settingImg){
		listDom.css({
			backgroundImage: '',
		})
	}else {
		if(settingImg != 'none') {
			var h = listDom.height()
			var num = Math.floor(h / 400)
			num == 0 ? num = 1 : '';
			for(var i = 0; i < num; i++) {
				var oDiv = $('<div class="sy-diy"></div>').css({
					backgroundImage: 'url(' + settingImg + ')',
					backgroundRepeat: 'no-repeat',
   					backgroundPosition: 'center center',
   					position: 'absolute',
   					left: '0',
   					top:  300*i + 'px',
   					width: '100%',
   					height: h < 400 ? '100%' : '400px',
   					opacity: '.3',
				}).appendTo(listDom)
			}
		}
			
		listDom.css({
			backgroundImage: 'none',
		})

	}
	
}
function colorRgb (val, opacity) {
  // 16进制颜色值的正则
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 把颜色值变成小写
  var color = val.toLowerCase();
  if (reg.test(color)) {
    // 如果只有三位的值，需变成六位，如：#fff => #ffffff
    if (color.length === 4) {
      var colorNew = "#";
      for (var i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
      }
      color = colorNew;
    }
    // 处理六位的颜色值，转为RGB
    var colorChange = [];
    for (var i = 1; i < 7; i += 2) {
      colorChange.push(parseInt("0x" + color.slice(i, i + 2)));
    }
    colorChange.push(opacity)
    return "RGBA(" + colorChange.join(",") + ")";
  } else {
    return color;
  }
}
