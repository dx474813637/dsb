var dataType = [{
		k: 'app_name',
		text: '应用'
	},{
		k: 'app_rate',
		text: '应用率'
	},{
		k: 'rank_ratio',
		text: '环比增幅'
	},{
		k: 'uv',
		text: '活跃人数'
	}]


var dataField = [
// {
// 	main_type: '0',
// 	name: '全部',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	}], 
// },
{
	main_type: '11',
	name: '网络零售',
	children: [{
		sub_type: '0',
		name: '全部',
	},{
		sub_type: '76',
		name: '进口跨境电商',
	},{
		sub_type: '138',
		name: '母婴电商',
	},{
		sub_type: '129',
		name: '垂直电商',
	},{
		sub_type: '132',
		name: '汽车电商',
	},{
		sub_type: '133',
		name: '生鲜电商',
	},{
		sub_type: '134',
		name: '医药电商',
	},{
		sub_type: '77',
		name: '导购电商',
	},{
		sub_type: '75',
		name: '综合电商',
	},], 
},{
	main_type: '12',
	name: '生活休闲',
	children: [{
		sub_type: '0',
		name: '全部',
	},{
		sub_type: '84',
		name: '本地生活',
	},
	// {
	// 	sub_type: '83',
	// 	name: '快递物流',
	// },{
	// 	sub_type: '80',
	// 	name: '美食',
	// },
	{
		sub_type: '82',
		name: '社区服务',
	},{
		sub_type: '131',
		name: '在线外卖',
	},{
		sub_type: '79',
		name: '在线票务',
	},{
		sub_type: '130',
		name: '在线租房',
	}], 
},{
	main_type: '3',
	name: '旅游出行',
	children: [{
		sub_type: '0',
		name: '全部',
	},{
		sub_type: '28',
		name: '地图导航',
	},
	// {
	// 	sub_type: '30',
	// 	name: '公交地铁',
	// },{
	// 	sub_type: '29',
	// 	name: '购票',
	// },{
	// 	sub_type: '34',
	// 	name: '违章查询',
	// },
	{
		sub_type: '32',
		name: '酒店住宿',
	},{
		sub_type: '31',
		name: '用车租车',
	},{
		sub_type: '125',
		name: '在线旅游',
	},], 
},
// {
// 	main_type: '135',
// 	name: '互联网招聘',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '136',
// 		name: '求职招聘',
// 	}], 
// },{
// 	main_type: '1',
// 	name: '互联网体育',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '21',
// 		name: '女性健康',
// 	},{
// 		sub_type: '18',
// 		name: '医疗健康',
// 	},{
// 		sub_type: '17',
// 		name: '运动健身',
// 	},], 
// },{
// 	main_type: '13',
// 	name: '办公商务',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '85',
// 		name: '办公软件',
// 	},{
// 		sub_type: '89',
// 		name: '电子邮箱',
// 	},{
// 		sub_type: '88',
// 		name: '记事笔记',
// 	},{
// 		sub_type: '86',
// 		name: '云盘存储',
// 	},], 
// },{
// 	main_type: '4',
// 	name: '金融理财',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '41',
// 		name: '保险',
// 	},{
// 		sub_type: '39',
// 		name: '彩票',
// 	},{
// 		sub_type: '36',
// 		name: '股票',
// 	},{
// 		sub_type: '42',
// 		name: '记账',
// 	},{
// 		sub_type: '40',
// 		name: '借贷',
// 	},{
// 		sub_type: '38',
// 		name: '投资理财',
// 	},{
// 		sub_type: '37',
// 		name: '银行',
// 	},{
// 		sub_type: '35',
// 		name: '支付',
// 	},], 
// },{
// 	main_type: '5',
// 	name: '考试学习',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '46',
// 		name: '翻译',
// 	},{
// 		sub_type: '47',
// 		name: '驾考',
// 	},{
// 		sub_type: '48',
// 		name: '普通学习',
// 	},{
// 		sub_type: '43',
// 		name: '题库',
// 	},{
// 		sub_type: '45',
// 		name: '语言学习',
// 	},{
// 		sub_type: '44',
// 		name: '在线课堂',
// 	},], 
// },{
// 	main_type: '9',
// 	name: '摄影图像',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '69',
// 		name: '美化加工',
// 	},{
// 		sub_type: '70',
// 		name: '相机',
// 	}], 
// },{
// 	main_type: '15',
// 	name: '手机美化',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '101',
// 		name: '壁纸',
// 	},{
// 		sub_type: '100',
// 		name: '桌面',
// 	},], 
// },{
// 	main_type: '8',
// 	name: '通讯社交',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '67',
// 		name: '婚恋',
// 	},{
// 		sub_type: '64',
// 		name: '聊天',
// 	},{
// 		sub_type: '68',
// 		name: '社区',
// 	},{
// 		sub_type: '65',
// 		name: '通讯',
// 	},], 
// },{
// 	main_type: '14',
// 	name: '系统工具',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '90',
// 		name: 'WiFi',
// 	},{
// 		sub_type: '95',
// 		name: '安全',
// 	},{
// 		sub_type: '127',
// 		name: '实用工具',
// 	},{
// 		sub_type: '92',
// 		name: '输入法',
// 	},{
// 		sub_type: '126',
// 		name: '天气日历',
// 	},{
// 		sub_type: '97',
// 		name: '文件管理',
// 	},{
// 		sub_type: '128',
// 		name: '移动搜索',
// 	},{
// 		sub_type: '93',
// 		name: '优化',
// 	},{
// 		sub_type: '91',
// 		name: '浏览器',
// 	},], 
// },{
// 	main_type: '10',
// 	name: '应用分发',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '73',
// 		name: '第三方应用商店',
// 	},{
// 		sub_type: '72',
// 		name: '手机厂商商店',
// 	},], 
// },{
// 	main_type: '6',
// 	name: '影音播放',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '53',
// 		name: 'K歌',
// 	},{
// 		sub_type: '137',
// 		name: '电视直播',
// 	},{
// 		sub_type: '51',
// 		name: '短视频',
// 	},{
// 		sub_type: '56',
// 		name: '网络直播',
// 	},{
// 		sub_type: '52',
// 		name: '音乐',
// 	},{
// 		sub_type: '55',
// 		name: '音频FM',
// 	},{
// 		sub_type: '50',
// 		name: '综合类视频',
// 	},], 
// },{
// 	main_type: '2',
// 	name: '育儿亲子',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '22',
// 		name: '儿童教育',
// 	},{
// 		sub_type: '23',
// 		name: '母婴类',
// 	}], 
// },{
// 	main_type: '7',
// 	name: '资讯阅读',
// 	children: [{
// 		sub_type: '0',
// 		name: '全部',
// 	},{
// 		sub_type: '59',
// 		name: '垂直类资讯',
// 	},{
// 		sub_type: '61',
// 		name: '电子书',
// 	},{
// 		sub_type: '60',
// 		name: '动漫',
// 	},{
// 		sub_type: '62',
// 		name: '搞笑',
// 	},{
// 		sub_type: '58',
// 		name: '综合类资讯',
// 	}], 
// },
]
