// name -- 二级细分领域
// cate -- 所属一级分类
// shares -- 交易规模
// a100 --	用户规模
// a101 -- 渗透率
// a102 --	营收规模
// a103 --	市场规模
// a104 -- 商家数（万家）
// a105 --	企业规模
// a106 --	直接从业人员规模
// a107 --	间接从业人员规模
// a108 --	业务量
// a109 --	营收规模
// dtime -- 时间年份
// 

var field = getURLString('name'); //获取网址后缀参数 领域名称（简写）
var fieldStr ;
var curTitle = $('title').html();
var screenShot = false;
var setting = {};
var settingFlag = false;
var curIndex = 0;
var title = ''
var syImg = '/Public/home/images/dsb-logo.png';
			
var myChart = echarts.init(document.getElementById('chart'));

//转化成中文字符串，对照dataCategory --> dataField
dataField.forEach(function(ele, index){
	ele['children'].forEach(function(e, i){
		if(e['id'] == field) {
			fieldStr = e['title']
			mainTypeStr = ele['title']
		}
	})
})
//js启动函数
function init() {

	$('.setting[data-type=font], #download').parent().hide()
	//请求数据
	getAjax (fieldStr)
	//部分公共数据渲染
	renderPublic(field);
	//事件绑定
	bindEvent();
	//对比工具插件执行
	list.dataCompare({
		url: 'https://www.100ec.cn/Home/Index/industryData.html?name=', //跳转网址
		jsonUrl: '/Index/industry_json?name=',		//ajax请求路径
		curField: field,
		curFieldStr: fieldStr,
	});
	$('#jiucuo-model-box').findErrorBox({btn: ['#jiucuo2', '#jiucuo1']})
}
init();
function bindEvent() {
	$('.category').on('click', '.category-item', function(e){
		// mainType = $(this).data('type')
		$(this).addClass('active').siblings().removeClass('active')
		$('.categoryTwo').empty();
		//渲染导航栏
		renderNav2($(this).index(), field)	
	})
	$('.data-vs').on('click', function(e){
		$('.data-vs-wrapper').addClass('show')
		$('body').addClass('body-noScroll')
	})

	$('#screenshotBtn').on('click', function(){
		if(screenShot) {
			$('body').removeClass('screenshot-open')
			screenShot = false;
		}else {
			$('body').addClass('screenshot-open')
			screenShot = true;
		}
		myChart.resize({
			width: $('.tu').width(),
		})
		$('.category-more .data').eq(curIndex).trigger('click')
	
	})
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
			!settingFlag ? setting.oldtitle = $('#screenIndustry p').html(): '';
			setting.title = $('input[name=title]').val() 
			setting.title && settingTitle(setting.title, $('#screenIndustry p'))
			settingFlag = true
		}else if(type == 'font') {
			setting.font = $('input[name=titleSize]:checked').val()
			var dom = $('.screenshot-industry-title, .screenshot-industry-footer')
			setting.font && settingFont(setting.font, dom)
		}else if(type == 'color') {
			setting.color = $('input[name=color]').val()
			var dom1 = $('.screenshot-industry-title, .screenshot-industry-footer')
			// var dom4 = $('.screenshot-compare-ECharts-title, .screenshot-compare-ECharts-footer')
			setting.color && settingColor(setting.color,  dom1)
		}else if(type == 'bgImg') {
			if($('input[name=isBgImg]').is(':checked')) {
				setting.bgImg = 'none'
				
			}else {
				setting.bgImg = $('input[name=bgImg]').val() 
			}
			$('.category-more .data').eq(curIndex).trigger('click')
			// settingBgImg(setting.bgImg, $('.sjk-data-content'))
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
		$('#screenIndustry p').html(setting.oldtitle) 
		setting = {};
		settingFlag = false
		$('.category-more .data').eq(curIndex).trigger('click')
	})
	//根据窗口实时变动，ECharts图表实时变动大小
	window.onresize = function() {
		$('#chart').width(screenShot? 800 :'100%');
		myChart.resize({
			width: screenShot? 800 : $('.tu').width(),
			// height: self.screenShot? 620 : $('.box-wrap').innerHeight() - $('.box-wrap-head').innerHeight() - $('.dropdown-box').innerHeight() ,
		});
	};
}
function getAjax (str) {
	var url = '/Index/industry_json?name=' + str;
	$.ajax({
		url: url,
        dataType: 'json',
		success: function(rs) {
			//数据过滤处理
			dataTraversal (rs.list)
		}
	})
}
function getURLString(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); 
    if (r != null) return decodeURIComponent(r[2]); 
    return null; 
}
//部分公共数据渲染
function renderPublic (field) {
	var oCgyIndex;
	dataField.forEach(function(ele, index){
		var oCgy = $('<div class="category-item" data-type="' + ele['id'] + '">'+ ele['title'] +'</div>').appendTo($('.category'))
		ele['children'].forEach(function(e, i){
			if(e['id'] == field) {
				oCgyIndex = index;
				$('.category').find('.category-item').eq(oCgyIndex).addClass('active')
			}
		})
	});
	//渲染二级导航栏
	renderNav2(oCgyIndex, field);
	//渲染数据表标题名以及分类名
	$('.categoryTwo-name').html(fieldStr).next('.category-name').html(dataField[oCgyIndex]['title'])
	//渲染网站title属性名
	$('title').html('【' + fieldStr + '】' + curTitle)
}
//渲染导航栏
function renderNav2(oIndex, str) {
	//根据dataCategory.js 中的 dataField 遍历渲染二级导航
	dataField[oIndex]['children'].forEach(function(ele, index){
		var oCgy2 = $('<li><a href="https://www.100ec.cn/Home/Index/industryData.html?name=' + ele['id'] + '" class="' + (ele['id'] == str ? 'active' : '') + '">' + ele['title'] + '</a></li>').appendTo($('.categoryTwo'))
	})
}
//将ajax get回来的数据进行过滤处理
function dataTraversal (data) {
	// console.log(data)
	if(!data) { return false }
	var dataObj = [];  	//定义根据keyArr字段过滤后的最终数组
	var keyArr = [];	//定义行业数据库所有拥有的字段参照（有序）
	var arr2 = [];		//定义本次请求的数据中有数据的字段（无序）
	var showArr = [];	//定义最终有序的有数据的字段数组
	dataType.forEach(function(ele, index){ keyArr.push(ele['k']) })
	console.log(fieldStr)
	data = data.filter(function(ele){
		return ele['name'] == fieldStr
	})
	console.log(data)
	data.forEach(function(ele, index){
		dataObj[index] = {}
		for(var key in ele) {
			if(keyArr.indexOf(key) != -1) {
				dataObj[index][key] = ele[key];
			}
		}
	})
	dataObj.forEach(function(ele, index){
		for(var key in ele) {
			if(ele[key] && arr2.indexOf(key) == -1) {
				arr2.push(key)
			}
		}
	})
	keyArr.forEach(function(ele, index){
		arr2.indexOf(ele) != -1 ? showArr.push(ele) : '';
	})
	//渲染表格数据dom结构
	renderDataTable (dataObj, showArr);
	//渲染Echarts-dom结构
	renderEchartsData(dataObj, showArr)
}
//渲染表格数据dom结构
function renderDataTable (data, data2) {
	//遍历data渲染表格中的数据 ： 一年数据 = 一列数据
	data.forEach(function(ele, index){
		var oList = $('<div class="form-list"></div>');
		data2.forEach(function(e, i){
			for(var key in ele) {
				if(key == e) {
					var oListData = $('<div class="form-label">'+ (ele[key] ? ele[key] : '-') +'</div>').appendTo(oList)
				}
			}
		})
		oList.prependTo($('#dataTable').find('.form-data'))
	})
	//遍历data渲染表格中的字段标题列
	data2.forEach(function(ele, index){
		dataType.forEach(function(e, i){
			if(e['k'] == ele) {
				var oTitle = $('<div class="form-label">' + e['text'] + (e['dw'] ? '（'+ e['dw'] +'）' : '') + '</div>').appendTo($('#dataTable').find('.form-list.label'))
			}
		})
	})
}
//遍历出Echarts插件所需的数据结构 
function renderEchartsData (data, data2){
	console.log(data, data2)
	//根据字段数量渲染图表导航小列表dom结构
	var navLen = data2.length - 1;
	if(navLen > 0) {
		// $('<div class="tu"><div class="sjk-chart" id="chart"></div><img src="/Public/home/images/dhlogo.png" alt="" class="shuiyin"></div>').prependTo($('#showPic'))
		var navBox = $('<div class="sjk-category"></div>').prependTo($('#showPic'))
		navBox.append('<span>数据字段</span><ul class="category-more"></ul>')
		data2.forEach(function(ele){
			dataType.forEach(function(e) {
				if(ele == e['k'] && ele != 'dtime') {
					$('<li class="data" data-key="'+ ele +'">' + e['text'] + '</li>').appendTo(navBox.find('.category-more'))
				}
			})
		})
	}

	var myChart = echarts.init(document.getElementById('chart'));
	// 动态绑定导航小列表点击生成图表事件
	$('#showPic').on('click', '.data', function(e){
		//获取关键字字段
		var key = $(this).attr('data-key');
		curIndex = $(this).index()
		//获取x轴时间数据
		var data1 = [];
		//获取y轴数据
		var data2 = [];
		data.forEach(function(ele){
			if(ele[key]) {
				data1.push(ele['dtime']);
				key == 'a101' ? data2.push(parseFloat(ele[key])) : data2.push(ele[key]);
			}
		})
		// console.log(data1, data2)
		//y轴数据单位
		var ydw = '';
		//关键字对照的中文文本
		var keyStr;
		dataType.forEach(function(ele){
			if(ele['k'] == key){
				keyStr = ele['text'];
				if(ele['dw']){
					ydw = ele['dw'];
				}
			} 
		})
		var t = fieldStr + '行业' + keyStr + '及其增长率数据图'
		title = setting.title || t
		$('#screenIndustry p').html(title)
		// console.log(data1, data2, ydw, keyStr)
		// 渲染Echarts图表插件
		renderShowEcharts(data1, data2, ydw, keyStr, fieldStr, myChart, screenShot, title, setting.bgImg || syImg);
	})
	//手动触发第一次进入页面的图表生成
	$('.data').eq(curIndex).trigger('click')		
}




