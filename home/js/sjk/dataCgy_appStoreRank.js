var config = {
	baseUrl: 'https://itunes.apple.com',
	country: 'cn',
	feedType: 'topfree', //榜单类型
	genreIds: '', //领域分类
	limit: 20, //限制
	eqpType: 'iphone', //设备类型
	contentType: 'applications'
}

var feedType = [{
		feedName: '免费榜',
		feedIds: 'topfree'
	},{
		feedName: '付费榜',
		feedIds: 'toppaid'
	},{
		feedName: '畅销榜',
		feedIds: 'topgrossing'
	},
]

var genreType = [
	{
		genreName: '全部',
		genreIds: ''
	},{
		genreName: '购物',
		genreIds: '6024'
	},{
		genreName: '社交',
		genreIds: '6005'
	},{
		genreName: '儿童',
		genreIds: '6061'
	},{
		genreName: '生活',
		genreIds: '6012'
	},{
		genreName: '餐饮',
		genreIds: '6023'
	},{
		genreName: '旅游',
		genreIds: '6003'
	},{
		genreName: '教育',
		genreIds: '6017'
	},{
		genreName: '医疗',
		genreIds: '6020'
	},{
		genreName: '健康',
		genreIds: '6013'
	},{
		genreName: '金融',
		genreIds: '6015'
	},{
		genreName: '商务',
		genreIds: '6000'
	},{
		genreName: '天气',
		genreIds: '6001'
	},{
		genreName: '工具',
		genreIds: '6002'
	},{
		genreName: '体育',
		genreIds: '6004'
	},{
		genreName: '参考',
		genreIds: '6006'
	},{
		genreName: '效率',
		genreIds: '6007'
	},{
		genreName: '摄影与录音',
		genreIds: '6008'
	},{
		genreName: '新闻',
		genreIds: '6009'
	},{
		genreName: '导航',
		genreIds: '6010'
	},{
		genreName: '音乐',
		genreIds: '6011'
	},{
		genreName: '游戏',
		genreIds: '6014'
	},{
		genreName: '娱乐',
		genreIds: '6016'
	},{
		genreName: '图书',
		genreIds: '6018'
	},{
		genreName: '报刊杂志',
		genreIds: '6021'
	},
]
