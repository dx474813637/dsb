var companyConfig = {
	'阿里巴巴': {
		stockCode: 'gb_baba',
		category: '零售电商',
		type: '上市',
		zx: ['阿里巴巴', '支付宝', '淘宝', '天猫', '闲鱼', '飞猪', '考拉海购', '盒马', '钉钉'],
		cb: '阿里巴巴',
		pj: ['淘宝', '天猫', '考拉海购', '1688批发网', '飞猪', '闲鱼', '饿了么', '支付宝'],
		trz: ['阿里巴巴'],
		app: [
			{
				name: '阿里巴巴（1688）',
				appId: 507097717,
				// monthId: 1732,
			},{
				name: '支付宝',
				appId: 333206289,
				// monthId: 1124,
			},{
				name: '手机淘宝',
				appId: 387682726,
				// monthId: 1458,
			},{
				name: '手机天猫',
				appId: 518966501,
				// monthId: 1949,
			},{
				name: '淘宝特价版',
				appId: 1340376323,
			},{
				name: '淘宝直播',
				appId: 1448831879,
			},{
				name: '闲鱼',
				appId: 510909506,
				// monthId: 4148,
			},{
				name: '飞猪旅行',
				appId: 453691481,
				// monthId: 1000047,
			},{
				name: '一淘',
				appId: 451400917,
				// monthId: 1999
			},{
				name: '钉钉',
				appId: 930368978,
				// monthId: 6263
			},{
				name: '盒马',
				appId: 1063183999,
				// monthId: 1003215,
			},{
				name: '考拉海购',
				appId: 965789238,
				// monthId: 5630,
			},
		],
	},
	'京东': {
		stockCode: 'gb_jd',
		category: '零售电商',
		type: '上市',
		cb: '京东',
		zx: ['京东'],
		pj: ['京东', '京东金融', '京东到家'],
		trz: ['京东'],
		app: [
			{
				name: '京东',
				appId: 414245413,
			},{
				name: '京东金融',
				appId: 895682747,
			},{
				name: '京东到家',
				appId: 954995415,
			},{
				name: '京东钱包',
				appId: 832444218,
			},{
				name: '京喜',
				appId: 1453661340,
			},{
				name: '京东股票',
				appId: 1039748856,
			},{
				name: '京东掌柜宝',
				appId: 1094243477,
			},{
				name: '京东慧采',
				appId: 1119981658,
			},{
				name: '京东金融企业版',
				appId: 1220352270,
			},{
				name: '京东云配',
				appId: 792620353,
			},{
				name: '小京鱼',
				appId: 909585888,
			},{
				name: '叮咚音箱',
				appId: 1015301249,
			},{
				name: '京东云修',
				appId: 990531550,
			},{
				name: '京东万家',
				appId: 1321808568,
			},{
				name: '京东云',
				appId: 1456718109,
			},{
				name: '京东微工',
				appId: 1280382225,
			},{
				name: '京东地勤',
				appId: 1137015488,
			},{
				name: '京东医生',
				appId: 1252884668,
			},{
				name: '京东云无线宝',
				appId: 1483444279,
			},{
				name: '京东分销宝',
				appId: 1455322492,
			},{
				name: '乡亲',
				appId: 1137546250,
			},{
				name: '京东ME+',
				appId: 1324868351,
			},{
				name: '金融小站',
				appId: 1279692410,
			},{
				name: '京东快勤',
				appId: 1481530124,
			},{
				name: '么么照',
				appId: 1326582556,
			},
		],
	},
	'拼多多': {
		stockCode: 'gb_pdd',
		category: '零售电商',
		type: '上市',
		zx: ['拼多多'],
		cb: '拼多多',
		pj: ['拼多多'],
		trz: ['拼多多'],
		app: [
			{
				name: '拼多多',
				appId: 1044283059,
			},
			{
				name: '拼多多商家版',
				appId: 1229469444,
			},
		],
	},
	'唯品会': {
		stockCode: 'gb_vips',
		category: '零售电商',
		type: '上市',
		zx: ['唯品会'],
		cb: '唯品会',
		pj: ['唯品会'],
		trz: ['唯品会'],
		app: [
			{
				name: '唯品会',
				appId: 417200582,
			},
			{
				name: '唯品仓',
				appId: 1475066576,
			},
			{
				name: '唯品金融',
				appId: 1198400046,
			},
			{
				name: '唯享客',
				appId: 996355919,
			},
			{
				name: '唯代购',
				appId: 1419100271,
			},
			{
				name: '花海仓',
				appId: 995535374,
			},
		],
	},
	'苏宁易购': {
		stockCode: 'sz002024',
		category: '零售电商',
		type: '上市',
		zx: ['苏宁易购'],
		cb: '苏宁易购',
		pj: ['苏宁易购'],
		trz: ['苏宁易购'],
		app: [
			{
				name: '苏宁易购',
				appId: 424598114,
			},
			{
				name: '苏宁小店',
				appId: 1074632701,
			},
			{
				name: '苏宁金融',
				appId: 609358564,
			},
			{
				name: '苏宁消费金融',
				appId: 995184216,
			},
			{
				name: '苏宁拼购',
				appId: 1367136515,
			},
			{
				name: '苏宁广场',
				appId: 1039360532,
			},
			{
				name: '苏宁智能',
				appId: 993060304,
			},
		],
	},
	'国美零售': {
		stockCode: 'hk00493',
		category: '零售电商',
		type: '上市',
		zx: ['国美零售'],
		cb: '国美零售',
		pj: ['国美'],
		app: [
			{
				name: '国美',
				appId: 486744917,
			},
			{
				name: '国美易卡',
				appId: 1136585962,
			},
		],
	},
	'聚美优品': {
		stockCode: 'gb_jmei',
		category: '零售电商',
		type: '上市',
		zx: ['聚美优品'],
		cb: '聚美优品',
		pj: ['聚美优品'],
		trz: ['聚美优品'],
		app: [
			{
				name: '聚美优品',
				appId: 518611020,
			},
		],
	},
	'寺库': {
		stockCode: 'gb_seco',
		category: '零售电商',
		type: '上市',
		zx: ['寺库'],
		cb: '寺库',
		pj: ['寺库'],
		trz: ['寺库'],
		app: [
			{
				name: '寺库',
				appId: 644873678,
			},
			{
				name: '寺库艺术',
				appId: 1069751847,
			},
		],
	},
	'小米': {
		stockCode: 'hk01810',
		category: '零售电商',
		type: '上市',
		zx: ['小米'],
		cb: '小米',
		pj: ['小米商城'],
		trz: ['小米'],
		app: [
			{
				name: '小米商城',
				appId: 1024958046,
			},
			{
				name: '小米有品',
				appId: 1212182562,
			},
			{
				name: '小米贷款',
				appId: 1236629993,
			},
			{
				name: '小米运动',
				appId: 938688461,
			},
			{
				name: '小米金融',
				appId: 1098190972,
			},
			{
				name: '小米借条',
				appId: 1436139009,
			},
		],
	},
	'小熊电器': {
		stockCode: 'sz002959',
		category: '零售电商',
		type: '上市',
		zx: ['小熊电器'],
		cb: '小熊电器',
	},
	'1药网': {
		stockCode: 'gb_yi',
		category: '零售电商',
		type: '上市',
		zx: ['1药网'],
		cb: '1药网',
		pj: ['1药网'],
		trz: ['1药网'],
		app: [
			{
				name: '1药网',
				appId: 727578007
			},
			{
				name: '1诊医生端',
				appId: 1120567272
			},
		]
	},
	'有赞': {
		stockCode: 'hk08083',
		category: '零售电商',
		type: '上市',
		zx: ['有赞'],
		cb: '有赞',
		pj: ['有赞'],
		trz: ['有赞'],
		app: [
			{
				name: '有赞精选',
				appId: 954194491
			},
			{
				name: '有赞微商城',
				appId: 880579403
			},
			{
				name: '有赞微小店',
				appId: 883660425
			},
			{
				name: '有赞零售',
				appId: 1248696859
			},
			{
				name: '有赞餐饮',
				appId: 1215142512
			},
			{
				name: '有赞会议',
				appId: 1248679245
			},
			{
				name: '有赞美业',
				appId: 1445402990
			},
		]
	},
	'微盟集团': {
		stockCode: 'hk02013',
		category: '零售电商',
		type: '上市',
		zx: ['微盟集团'],
		cb: '微盟集团',
		pj: ['微盟'],
		app: [
			{
				name: '微盟旺铺',
				appId: 885775448
			},
			{
				name: '微盟商户助手',
				appId: 1294992924
			},
			{
				name: '商有云管家',
				appId: 1450772071
			},
		]
	},
	'蘑菇街': {
		stockCode: 'gb_mogu',
		category: '零售电商',
		type: '上市',
		zx: ['蘑菇街'],
		cb: '蘑菇街',
		pj: ['蘑菇街'],
		trz: ['蘑菇街'],
		app: [
			{
				name: '蘑菇街',
				appId: 452176796
			},
			{
				name: '蘑菇街商家',
				appId: 949322729
			},
		]
	},
	'如涵': {
		stockCode: 'gb_ruhn',
		category: '零售电商',
		type: '上市',
		zx: ['如涵'],
		cb: '如涵',
	},
	'云集': {
		stockCode: 'gb_yj',
		category: '零售电商',
		type: '上市',
		zx: ['云集'],
		cb: '云集',
		pj: ['云集'],
		trz: ['云集'],
		app: [
			{
				name: '云集',
				appId: 985919623
			},
		]
	},
	'什么值得买': {
		stockCode: 'gb_yj',
		category: '零售电商',
		type: '上市',
		zx: ['什么值得买'],
		cb: '什么值得买',
		pj: ['什么值得买'],
		trz: ['什么值得买'],
		app: [
			{
				name: '什么值得买',
				appId: 518213356
			},
		]
	},
	'宝宝树': {
		stockCode: 'hk01761',
		category: '零售电商',
		type: '上市',
		zx: ['宝宝树'],
		cb: '宝宝树',
		app: [
			{
				name: '宝宝树孕育',
				appId: 523063187
			},
			{
				name: '宝宝树小时光',
				appId: 628470263
			},
		]
	},
	'优信': {
		stockCode: 'gb_uxin',
		category: '零售电商',
		type: '上市',
		zx: ['优信'],
		cb: '优信',
		pj: ['优信'],
		app: [
			{
				name: '优信二手车全国购',
				appId: 1138302879
			},
		]
	},
	'团车网': {
		stockCode: 'gb_tc',
		category: '零售电商',
		type: '上市',
		zx: ['团车网'],
		cb: '团车网',
		trz: ['团车网'],
		app: [
			{
				name: '团车',
				appId: 907026289
			},
		]
	},
	'三只松鼠': {
		stockCode: 'sz300783',
		category: '零售电商',
		type: '上市',
		zx: ['三只松鼠'],
		cb: '三只松鼠',
		trz: ['三只松鼠'],
		app: [
			{
				name: '三只松鼠',
				appId: 993574065
			},
			{
				name: '松鼠小店',
				appId: 1428178349
			},
			{
				name: '松鼠云造',
				appId: 1464658232
			},
			{
				name: '松鼠廉洁',
				appId: 1463131412
			},
		]
	},
	'御家汇': {
		stockCode: 'sz300740',
		category: '零售电商',
		type: '上市',
		zx: ['御家汇'],
		cb: '御家汇',
		pj: ['御家汇'],
	},
	'南极电商': {
		stockCode: 'sz002127',
		category: '零售电商',
		type: '上市',
		zx: ['南极电商'],
		cb: '南极电商',
		trz: ['南极电商']
	},
	'歌力思': {
		stockCode: 'sh603808',
		category: '零售电商',
		type: '上市',
		zx: ['歌力思'],
		cb: '歌力思',
	},
	'乐信': {
		stockCode: 'gb_lx',
		category: '零售电商',
		type: '上市',
		zx: ['乐信'],
		cb: '乐信',
		app: [
			{
				name: '桔子理财',
				appId: 966823215
			}
		]
	},
	'趣店': {
		stockCode: 'gb_qd',
		category: '零售电商',
		type: '上市',
		zx: ['趣店'],
		cb: '趣店',
		pj: ['趣店'],
		trz: ['趣店'],
		app: [
			{
				name: '趣店',
				appId: 1465849421
			}
		]
	},
	'宝尊电商': {
		stockCode: 'gb_bzun',
		category: '零售电商',
		type: '上市',
		zx: ['宝尊电商'],
		cb: '宝尊电商',
	},
	'壹网壹创': {
		stockCode: 'sz300792',
		category: '零售电商',
		type: '上市',
		zx: ['壹网壹创'],
		cb: '壹网壹创',
	},
	'良品铺子': {
		category: '零售电商',
		stockCode: 'sh603719',
		type: '上市',
		zx: ['良品铺子'],
		trz: ['良品铺子'],
		app: [
			{
				name: '良品铺子',
				appId: 1207741092
			},
		],
	},
	'生意宝': {
		stockCode: 'sz002095',
		category: '产业电商',
		type: '上市',
		zx: ['生意宝'],
		cb: '生意宝',
		app: [
			{
				name: '生意宝',
				appId: 1465037055
			}
		]
	},
	'焦点科技': {
		stockCode: 'sz002315',
		category: '产业电商',
		type: '上市',
		zx: ['焦点科技'],
		cb: '焦点科技',
	},
	'上海钢联': {
		stockCode: 'sz300226',
		category: '产业电商',
		type: '上市',
		zx: ['上海钢联'],
		cb: '上海钢联',
		app: [
			{
				name: '我的钢铁',
				appId: 381230745
			},
			{
				name: '钢银助手',
				appId: 950932428
			},
			{
				name: '隆众数据',
				appId: 1440960124
			},
			{
				name: '隆众快讯',
				appId: 1440960333
			},
		]
	},
	'欧浦智网': {
		stockCode: 'sz002711',
		category: '产业电商',
		type: '上市',
		zx: ['欧浦智网'],
		cb: '欧浦智网',
	},
	'冠福股份': {
		stockCode: 'sz002102',
		category: '产业电商',
		type: '上市',
		zx: ['冠福股份'],
		cb: '冠福股份',
	},
	'科通芯城': {
		stockCode: 'hk00400',
		category: '产业电商',
		type: '上市',
		zx: ['科通芯城'],
		cb: '科通芯城',
	},
	'慧聪集团': {
		stockCode: 'hk02280',
		category: '产业电商',
		type: '上市',
		zx: ['慧聪集团'],
		cb: '慧聪集团',
		trz: ['慧聪集团'],
	},
	'卓尔智联': {
		stockCode: 'hk02098',
		category: '产业电商',
		type: '上市',
		zx: ['卓尔智联'],
		cb: '卓尔智联',
	},
	'国联股份': {
		stockCode: 'sh603613',
		category: '产业电商',
		type: '上市',
		zx: ['国联股份'],
		cb: '国联股份',
		trz: ['国联股份'],
	},
	'摩贝': {
		stockCode: 'gb_mkd',
		category: '产业电商',
		type: '上市',
		zx: ['摩贝'],
		cb: '摩贝',
		trz: ['摩贝'],
	},
	'携程': {
		stockCode: 'gb_tcom',
		category: '生活服务电商',
		type: '上市',
		zx: ['携程'],
		cb: '携程',
		pj: ['携程', '去哪儿'],
		trz: ['携程'],
		app: [
			{
				name: '携程旅行',
				appId: 379395415
			},
			{
				name: '去哪儿',
				appId: 395096736
			},
			{
				name: '携程租车',
				appId: 1271275207
			},
			{
				name: '旅拍星球',
				appId: 883168310
			},
			{
				name: '携程企业商旅',
				appId: 885401020
			},
			{
				name: '携程金融',
				appId: 1388731823
			},
		]
	},
	'同程艺龙': {
		stockCode: 'hk00780',
		category: '生活服务电商',
		type: '上市',
		zx: ['同程艺龙'],
		cb: '同程艺龙',
		pj: ['同程旅游', '艺龙'],
		trz: ['同程艺龙'],
		app: [
			{
				name: '同程旅游',
				appId: 475966832
			},
			{
				name: '同程旅游Pro',
				appId: 664392967
			},
			{
				name: '同程旅游精选',
				appId: 1134419742
			},
			{
				name: '同程艺龙商家',
				appId: 897874155
			},
			{
				name: '艺龙旅行',
				appId: 388089858
			},
			{
				name: '艺龙酒店',
				appId: 629502680
			},
			{
				name: '艺龙旅行青春版',
				appId: 1319745694
			},
			{
				name: '艺龙旅行Pro',
				appId: 1048018108
			},
		]
	},
	'途牛': {
		stockCode: 'gb_tour',
		category: '生活服务电商',
		type: '上市',
		zx: ['途牛'],
		cb: '途牛',
		pj: ['途牛旅游网'],
		trz: ['途牛'],
		app: [
			{
				name: '途牛旅游',
				appId: 447313708
			},
			{
				name: '途牛精选',
				appId: 1367037344
			},
		]
	},
	'美团点评': {
		stockCode: 'hk03690',
		category: '生活服务电商',
		type: '上市',
		zx: ['美团点评'],
		cb: '美团点评',
		pj: ['美团'],
		trz: ['美团点评'],
		app: [
			{
				name: '美团',
				appId: 423084029
			},
			{
				name: '猫眼',
				appId: 504274740
			},
			{
				name: '美团外卖',
				appId: 737310995
			},
			{
				name: '美团民宿',
				appId: 1204082699
			},
			{
				name: '美团众包',
				appId: 1067251466
			},
			{
				name: '美团跑腿',
				appId: 1252877377
			},
			{
				name: '美团开店宝',
				appId: 592673661
			},
			{
				name: '美团外卖商家版',
				appId: 869802614
			},
			{
				name: '点评管家',
				appId: 793755894
			},
			{
				name: '大众点评',
				appId: 351091731
			},
		]
	},
	'58同城': {
		stockCode: 'gb_wuba',
		category: '生活服务电商',
		type: '上市',
		zx: ['58同城'],
		cb: '58同城',
		pj: ['58同城'],
		trz: ['58同城'],
		app: [
			{
				name: '58同城',
				appId: 480079300
			},
			{
				name: '58同城租房',
				appId: 1442076597
			},
			{
				name: '58同城招聘',
				appId: 1444008840
			},
			{
				name: '招才猫直聘',
				appId: 1016820238
			},
			{
				name: '白菜二手车',
				appId: 1420407553
			},
		]
	},
	'齐屹科技': {
		stockCode: 'hk01739',
		category: '生活服务电商',
		type: '上市',
		zx: ['齐家'],
		cb: '齐屹科技',
		trz: ['齐屹科技'],
	},
	'前程无忧': {
		stockCode: 'bg_jobs',
		category: '生活服务电商',
		type: '上市',
		zx: ['前程无忧'],
		cb: '前程无忧',
		trz: ['前程无忧'],
		app: [
			{
				name: '前程无忧51Job',
				appId: 415443644
			},
			{
				name: '应届生求职',
				appId: 1232983203
			},
			{
				name: '前程无忧企业版',
				appId: 577414935
			},
		]
	},
	'新东方在线': {
		stockCode: 'hk01797',
		category: '生活服务电商',
		type: '上市',
		zx: ['新东方在线'],
		cb: '新东方在线',
		trz: ['新东方在线'],
		app: [
			{
				name: '新东方在线',
				appId: 731338442
			},
			{
				name: '新东方在线中小学',
				appId: 1335906824
			},
			{
				name: '新东方搜课',
				appId: 621958748
			},
			{
				name: '爱说口语',
				appId: 1074241367
			},
			{
				name: '酷学英语',
				appId: 937140470
			},
			{
				name: '新东方托福Pro',
				appId: 1470941866
			},
			{
				name: '新东方双语阅读',
				appId: 1335901663
			},
		]
	},
	'无忧英语': {
		stockCode: 'gb_gsx',
		category: '生活服务电商',
		type: '上市',
		zx: ['无忧英语'],
		cb: '无忧英语',
		pj: ['无忧英语', '51talk'],
		trz: ['无忧英语'],
		app: [
			{
				name: '51Talk成人英语',
				appId: 1356022357
			},
			{
				name: '51Talk青少儿英语',
				appId: 1336801326
			},
		]
	},
	'跟谁学': {
		stockCode: 'gb_gsx',
		category: '生活服务电商',
		type: '上市',
		zx: ['跟谁学'],
		cb: '跟谁学',
		app: [
			{
				name: '跟谁学',
				appId: 919947654
			},
		]
	},
	'网易有道': {
		stockCode: 'gb_dao',
		category: '生活服务电商',
		type: '上市',
		zx: ['网易有道'],
		cb: '网易有道',
		app: [
			{
				name: '网易有道词典',
				appId: 353115739
			},
			{
				name: '有道翻译官',
				appId: 576337924
			},
			{
				name: '有道精品课',
				appId: 990583137
			},
			{
				name: '网易云课堂',
				appId: 880452926
			},
			{
				name: '有道乐读',
				appId: 1390443078
			},
			{
				name: '有道少儿词典',
				appId: 1436930241
			},
			{
				name: '有道口语',
				appId: 1370367829
			},
			{
				name: '中国大学MOOC（慕课）',
				appId: 977883304
			},
		]
	},
	'乐居': {
		stockCode: 'gb_leju',
		category: '生活服务电商',
		type: '上市',
		zx: ['乐居'],
		cb: '乐居',
		app: [
			{
				name: '乐居二手房',
				appId: 1068806641
			},
			{
				name: '乐居买房找房版',
				appId: 1141778720
			},
			{
				name: '乐居财经',
				appId: 1374874110
			},
			{
				name: '乐居抢工长',
				appId: 924380831
			},
		]
	},
	'搜房网': {
		stockCode: 'gb_sfun',
		category: '生活服务电商',
		type: '上市',
		zx: ['搜房网'],
		cb: '搜房网',
		app: [
			{
				name: '搜房网',
				appId: 1193969192
			},
			{
				name: '搜房网经纪人',
				appId: 1131133406
			},
		]
	},
	'房多多': {
		stockCode: 'gb_duo',
		category: '生活服务电商',
		type: '上市',
		zx: ['房多多'],
		cb: '房多多',
		trz: ['房多多'],
		app: [
			{
				name: '房多多',
				appId: 843148930
			},
			{
				name: '多多卖房',
				appId: 1374069686
			},
		]
	},
	'青客公寓': {
		stockCode: 'gb_qk',
		category: '生活服务电商',
		type: '上市',
		zx: ['青客公寓'],
		cb: '青客公寓',
		pj: ['青客公寓'],
		trz: ['青客公寓'],
		app: [
			{
				name: '青客公寓',
				appId: 931474492
			},
			{
				name: '青客宝',
				appId: 1137837973
			},
		]
	},
	'平安好医生': {
		stockCode: 'hk01833',
		category: '生活服务电商',
		type: '上市',
		zx: ['平安好医生'],
		cb: '平安好医生',
		pj: ['平安好医生'],
		trz: ['平安好医生'],
		app: [
			{
				name: '平安好医生',
				appId: 923920872
			},
			{
				name: '平安好医生医生版',
				appId: 1012257355
			},
			{
				name: '平安好医生村医版',
				appId: 1358955625
			},
		]
	},
	'新氧': {
		stockCode: 'gb_sy',
		category: '生活服务电商',
		type: '上市',
		zx: ['新氧'],
		cb: '新氧',
		trz: ['新氧'],
		app: [
			{
				name: '新氧SoYoung',
				appId: 1322331084
			},
			{
				name: '新氧',
				appId: 688137161
			},
			{
				name: '新氧微整形',
				appId: 1234842691
			},
			{
				name: '新氧青春版',
				appId: 1229054315
			},
			{
				name: '新氧齿科',
				appId: 1476527797
			},
			{
				name: '新氧医生版',
				appId: 1436823024
			},
			{
				name: '尺颜',
				appId: 1460213037
			},
		]
	},
	'阿里健康': {
		stockCode: 'hk00241',
		category: '生活服务电商',
		type: '上市',
		zx: ['阿里健康'],
		cb: '阿里健康',
		trz: ['阿里健康'],
		app: [
			{
				name: '阿里健康',
				appId: 920305451
			},
			{
				name: '阿里健康掌柜',
				appId: 992733184
			},
		]
	},
	'阿里影业': {
		stockCode: 'hk01060',
		category: '生活服务电商',
		type: '上市',
		zx: ['阿里影业'],
		cb: '阿里影业',
		app: [
			{
				name: '淘票票',
				appId: 566813949,
			},
		]
	},
	'猫眼娱乐': {
		stockCode: 'hk01896',
		category: '生活服务电商',
		type: '上市',
		zx: ['猫眼娱乐'],
		cb: '猫眼娱乐',
		pj: ['猫眼电影'],
		app: [
			{
				name: '猫眼',
				appId: 504274740,
			},
			{
				name: '猫眼专业版',
				appId: 1020547107,
			},
		]
	},
	'瑞幸咖啡': {
		stockCode: 'gb_lk',
		category: '生活服务电商',
		type: '上市',
		zx: ['瑞幸咖啡'],
		cb: '瑞幸咖啡',
		trz: ['瑞幸咖啡'],
		app: [
			{
				name: '瑞幸咖啡',
				appId: 1296749505,
			},
			{
				name: '小鹿茶',
				appId: 1479537829,
			},
		]
	},
	'跨境通': {
		stockCode: 'sz002640',
		category: '跨境电商',
		type: '上市',
		zx: ['跨境通'],
		cb: '跨境通',
		trz: ['跨境通'],
		app: [
			{
				name: '跨境通商城',
				appId: 975792742,
			},
		]
	},
	'广博股份': {
		stockCode: 'sz002103',
		category: '跨境电商',
		type: '上市',
		zx: ['广博股份'],
		cb: '广博股份',
	},
	'兰亭集势': {
		stockCode: 'gb_litb',
		category: '跨境电商',
		type: '上市',
		zx: ['兰亭集势'],
		cb: '兰亭集势',
		trz: ['兰亭集势'],
	},
	'天泽信息': {
		stockCode: 'sz300209',
		category: '跨境电商',
		type: '上市',
		zx: ['天泽信息'],
		cb: '天泽信息',
	},
	'联络互动': {
		stockCode: 'sz002280',
		category: '跨境电商',
		type: '上市',
		zx: ['联络互动'],
		cb: '联络互动',
	},
	'华鼎股份': {
		stockCode: 'sh601113',
		category: '跨境电商',
		type: '上市',
		zx: ['华鼎股份'],
		cb: '华鼎股份',
	},
	'新维国际': {
		stockCode: 'hk08086',
		category: '跨境电商',
		type: '上市',
		zx: ['新维国际'],
		cb: '新维国际',
	},
	'瓜子二手车': {
		category: '零售电商',
		type: '独角兽',
		zx: ['瓜子二手车'],
		pj: ['瓜子二手车', '毛豆新车网'],
		app: [
			{
				name: '瓜子二手车',
				appId: 990531994
			},
			{
				name: '毛豆新车',
				appId: 1276437206
			},
			{
				name: '瓜子二手车(全国购版)',
				appId: 1489319769
			},
		],
	},
	'大搜车': {
		category: '零售电商',
		type: '独角兽',
		zx: ['大搜车'],
		pj: ['大搜车'],
		app: [
			{
				name: '大搜车家选',
				appId: 1458702514
			},
		],
	},
	'爱回收': {
		category: '零售电商',
		type: '独角兽',
		zx: ['爱回收'],
		pj: ['拍机堂'],
		app: [
			{
				name: '爱回收',
				appId: 1059930957
			},
			{
				name: '拍机堂',
				appId: 1369798264
			},
			{
				name: '爱机汇',
				appId: 1163582927
			},
		],
	},
	'小红书': {
		category: '零售电商',
		type: '独角兽',
		zx: ['小红书'],
		pj: ['小红书'],
		trz: ['小红书'],
		app: [
			{
				name: '小红书',
				appId: 741292507
			},
		],
	},
	'万达电商': {
		category: '零售电商',
		type: '独角兽',
		zx: ['万达电商'],
		trz: ['万达电商飞凡网'],
	},
	'每日优鲜': {
		category: '零售电商',
		type: '独角兽',
		zx: ['每日优鲜'],
		pj: ['每日优鲜'],
		trz: ['每日优鲜'],
		app: [
			{
				name: '每日优鲜',
				appId: 960158896
			},
		],
	},
	'荔枝': {
		category: '零售电商',
		type: '独角兽',
		zx: ['荔枝'],
		app: [
			{
				name: '荔枝',
				appId: 1093693053
			},
		],
	},
	'途虎养车': {
		category: '零售电商',
		type: '独角兽',
		zx: ['途虎养车'],
		pj: ['途虎养车'],
		trz: ['途虎养车'],
		app: [
			{
				name: '途虎养车',
				appId: 943708006
			},
			{
				name: '途虎养车-商户版',
				appId: 964426077
			},
		],
	},
	'孩子王': {
		category: '零售电商',
		type: '独角兽',
		zx: ['孩子王'],
		pj: ['孩子王'],
		trz: ['孩子王'],
		app: [
			{
				name: '孩子王',
				appId: 974534776
			},
			{
				name: '成长加',
				appId: 1140390853
			},
		],
	},
	'谊品生鲜': {
		category: '零售电商',
		type: '独角兽',
		zx: ['谊品生鲜'],
		trz: ['谊品生鲜'],
		app: [
			{
				name: '谊品到家',
				appId: 1358184592
			},
		],
	},
	'微店': {
		category: '零售电商',
		type: '独角兽',
		zx: ['微店'],
		trz: ['微店'],
		pj: ['微店'],
		app: [
			{
				name: '微店',
				appId: 860384719
			},
			{
				name: '微店店长版',
				appId: 672662544
			},
		],
	},
	'转转': {
		category: '零售电商',
		type: '独角兽',
		zx: ['转转'],
		trz: ['转转'],
		pj: ['转转'],
		app: [
			{
				name: '转转二手交易网',
				appId: 1002355194
			},
		],
	},
	'口袋购物': {
		category: '零售电商',
		type: '独角兽',
		zx: ['口袋购物'],
		trz: ['口袋购物'],
	},
	'贝贝': {
		category: '零售电商',
		type: '独角兽',
		zx: ['贝贝'],
		trz: ['贝贝网'],
		pj: ['贝贝'],
		app: [
			{
				name: '贝贝',
				appId: 863998476
			},
		],
	},
	'易果生鲜': {
		category: '零售电商',
		type: '独角兽',
		zx: ['易果生鲜'],
		pj: ['易果生鲜'],
		app: [
			{
				name: '易果生鲜',
				appId: 576978767
			},
		],
	},
	'百果园': {
		category: '零售电商',
		type: '独角兽',
		zx: ['百果园'],
		pj: ['百果园'],
		trz: ['百果园'],
		app: [
			{
				name: '百果园',
				appId: 1073503648
			},
			{
				name: '百果送货',
				appId: 1073503653
			},
		],
	},
	'我买网': {
		category: '零售电商',
		type: '独角兽',
		zx: ['中粮我买网'],
		pj: ['中粮我买网'],
		trz: ['中粮我买网'],
		app: [
			{
				name: '中粮我买网',
				appId: 528910047
			},
		],
	},
	'农信互联': {
		category: '零售电商',
		type: '独角兽',
		zx: ['农信互联'],
		trz: ['农信互联'],
		app: [
			{
				name: '智农通',
				appId: 966052215
			},
			{
				name: '渔联网',
				appId: 1225803462
			},
			{
				name: '中国农业平台',
				appId: 1205775477
			},
			{
				name: '农信互联直营店',
				appId: 1180304154
			},
			{
				name: '猪联网',
				appId: 1226933187
			},
		],
	},
	'蜜芽': {
		category: '零售电商',
		type: '独角兽',
		zx: ['蜜芽'],
		trz: ['蜜芽宝贝'],
		pj: ['蜜芽'],
		app: [
			{
				name: '蜜芽宝贝',
				appId: 973366293
			},
			{
				name: '蜜芽',
				appId: 960993760
			},
		],
	},
	'1919酒类直供': {
		category: '零售电商',
		type: '独角兽',
		zx: ['1919'],
		trz: ['1919酒类直供'],
		pj: ['1919'],
		app: [
			{
				name: '1919吃喝',
				appId: 1020572957
			},
			{
				name: '1919掌上门店',
				appId: 1052965398
			},
			{
				name: '1919丹露终端店',
				appId: 971492968
			},
			{
				name: '1919人力资源平台',
				appId: 1052973508
			},
			{
				name: '1919丹露经销商',
				appId: 1091985013
			},
			{
				name: '1919数据监控',
				appId: 1344723973
			},
			{
				name: '1919TMS',
				appId: 1163483194
			},
			{
				name: '1919掌上门店',
				appId: 1052965398
			},
		],
	},
	'洋码头': {
		category: '零售电商',
		type: '独角兽',
		zx: ['洋码头'],
		trz: ['洋码头'],
		pj: ['洋码头'],
		app: [
			{
				name: '洋码头海外购',
				appId: 668533031
			},
			{
				name: '洋码头卖家版',
				appId: 876300235
			},
			{
				name: '海淘直播',
				appId: 1376484950
			},
		],
	},
	'车易拍': {
		category: '零售电商',
		type: '独角兽',
		zx: ['车易拍'],
		trz: ['车易拍'],
		app: [
			{
				name: '二手车交易',
				appId: 592362969
			},
			{
				name: '车牛',
				appId: 1035541837
			},
			{
				name: '易置换',
				appId: 1440294431
			},
		],
	},
	'车猫二手车': {
		category: '零售电商',
		type: '独角兽',
		zx: ['车猫二手车'],
		trz: ['车猫二手车'],
		app: [
			{
				name: '车猫二手车',
				appId: 984854842
			},
		],
	},
	'毒APP': {
		category: '零售电商',
		type: '独角兽',
		zx: ['毒APP'],
		trz: ['毒APP'],
		pj: ['毒app'],
		app: [
			{
				name: '毒',
				appId: 1012871328
			},
		],
	},
	'酒仙网': {
		category: '零售电商',
		type: '独角兽',
		zx: ['酒仙网'],
		trz: ['酒仙网'],
		pj: ['酒仙网'],
		app: [
			{
				name: '酒仙网',
				appId: 543114016
			},
		],
	},
	'返利网': {
		category: '零售电商',
		type: '独角兽',
		zx: ['返利网'],
		trz: ['返利网'],
		pj: ['返利网'],
		app: [
			{
				name: '返利网',
				appId: 938607736
			},
		],
	},
	'人人车': {
		category: '零售电商',
		type: '独角兽',
		zx: ['人人车'],
		trz: ['人人车'],
		pj: ['人人车'],
		app: [
			{
				name: '人人车二手车',
				appId: 1271680206
			},
		],
	},
	'执御': {
		category: '零售电商',
		type: '独角兽',
		zx: ['执御'],
		trz: ['执御'],
	},
	'便利蜂': {
		category: '零售电商',
		type: '独角兽',
		zx: ['便利蜂'],
		trz: ['便利蜂'],
		app: [
			{
				name: '便利蜂',
				appId: 1191468822
			},
		],
	},
	'美菜网': {
		category: '产业电商',
		type: '独角兽',
		zx: ['美菜网'],
		trz: ['美菜网'],
		pj: ['美菜网'],
		app: [
			{
				name: '美菜商城',
				appId: 1067740478
			},
			{
				name: '美菜大客户',
				appId: 1436466298
			},
			{
				name: '美家通',
				appId: 1445997062
			},
		],
	},
	'汇通达': {
		category: '产业电商',
		type: '独角兽',
		zx: ['汇通达'],
		trz: ['汇通达'],
		app: [
			{
				name: '汇享购',
				appId: 1003666488
			},
			{
				name: '超级老板Pro版',
				appId: 1147979967
			},
			{
				name: '超级经理人',
				appId: 1030972841
			},
		],
	},
	'中商惠民': {
		category: '产业电商',
		type: '独角兽',
		zx: ['中商惠民'],
		trz: ['中商惠民'],
		app: [
			{
				name: '惠配通',
				appId: 1044992691
			},
			{
				name: '惠民物流',
				appId: 1079375964
			},
			{
				name: '惠智云管',
				appId: 1468468435
			},
		],
	},
	'找钢网': {
		category: '产业电商',
		type: '独角兽',
		zx: ['找钢网'],
		trz: ['找钢网'],
		app: [
			{
				name: '找钢网',
				appId: 1391023636
			},
		],
	},
	'欧冶云商': {
		category: '产业电商',
		type: '独角兽',
		zx: ['欧冶云商'],
		trz: ['欧冶云商'],
		app: [
			{
				name: '欧冶钢好',
				appId: 828323822
			},
			{
				name: '欧冶钢好Pro',
				appId: 1481752445
			},
			{
				name: '欧冶知钢',
				appId: 1121920757
			},
		],
	},
	'康众汽配': {
		category: '产业电商',
		type: '独角兽',
		zx: ['康众汽配'],
		trz: ['康众汽配'],
		app: [
			{
				name: '康众汽配',
				appId: 1031837789
			},
		],
	},
	'易久批': {
		category: '产业电商',
		type: '独角兽',
		zx: ['易久批'],
		trz: ['易久批'],
		app: [
			{
				name: '易久批',
				appId: 849615531
			},
		],
	},
	'巴图鲁': {
		category: '产业电商',
		type: '独角兽',
		zx: ['巴图鲁'],
		trz: ['巴图鲁'],
		app: [
			{
				name: '汽配铺',
				appId: 929508040
			},
			{
				name: '汽配铺-CRM',
				appId: 1017575378
			},
			{
				name: '中配保',
				appId: 1208902484
			},
		],
	},
	'鲸灵集团': {
		category: '产业电商',
		type: '独角兽',
		zx: ['鲸灵集团'],
		trz: ['鲸灵集团'],
	},
	'滴滴出行': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['滴滴出行'],
		trz: ['滴滴出行'],
		pj: ['滴滴出行'],
		app: [
			{
				name: '滴滴出行',
				appId: 554499054
			},
			{
				name: '滴滴车主',
				appId: 911699257
			},
			{
				name: '滴滴顺风车',
				appId: 1181738336
			},
			{
				name: '滴滴金融',
				appId: 1414081217
			},
			{
				name: '滴滴代驾司机',
				appId: 1011687876
			},
			{
				name: '滴滴企业版',
				appId: 1061542715
			},
			{
				name: '滴滴配送',
				appId: 1345341946
			},
			{
				name: '谷雨',
				appId: 1135792379
			},
			{
				name: '滴滴外卖',
				appId: 1428141203
			},
			{
				name: '滴滴司机助手',
				appId: 1286951647
			},
			{
				name: '滴滴商户',
				appId: 1345340612
			},
		]
	},
	'口碑、饿了么': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['口碑'],
		trz: ['饿了么', '口碑'],
		pj: ['饿了么', '口碑外卖'],
		app: [
			{
				name: '口碑',
				appId: 390860325
			},
			{
				name: '口碑掌柜',
				appId: 796778475
			},
			{
				name: '饿了么',
				appId: 507161324
			},
			{
				name: '饿了么星选',
				appId: 911686788
			},
			{
				name: '饿了么商家版',
				appId: 883096979
			},
		],
	},
	'贝壳找房': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['贝壳找房'],
		trz: ['贝壳找房'],
		app: [
			{
				name: '贝壳找房',
				appId: 1347663353
			},
		],
	},
	'链家': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['链家'],
		trz: ['链家'],
		app: [
			{
				name: '链家',
				appId: 405882753
			},
		],
	},
	'京东健康': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['京东健康'],
	},
	'微医': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['微医'],
		trz: ['微医'],
		app: [
			{
				name: '微医',
				appId: 595277934
			}
		]
	},
	'wifi万能钥匙': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['wifi万能钥匙'],
		app: [
			{
				name: 'wifi万能钥匙',
				appId: 919854496
			},
			{
				name: 'WiFi万能钥匙 (专业版)',
				appId: 1272083060
			},
		]
	},
	'自如': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['自如'],
		pj: ['自如'],
		app: [
			{
				name: '自如',
				appId: 685872176
			},
		]
	},
	'WeWork': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['WeWork'],
		app: [
			{
				name: 'WeWork 中国大陆',
				appId: 1095914688
			},
			{
				name: 'We Events',
				appId: 1445551173
			},
			{
				name: 'WeLive',
				appId: 1049636656
			},
		]
	},
	'VIPKID': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['VIPKID'],
		pj: ['vipkid'],
		trz: ['VIPKID'],
		app: [
			{
				name: 'VIPKID英语',
				appId: 1114459949
			},
			{
				name: 'VIPKID儿歌',
				appId: 1309422712
			},
		]
	},
	'哈啰出行': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['哈啰出行'],
		trz: ['哈啰出行'],
		app: [
			{
				name: '哈啰出行',
				appId: 1165227346
			},
		]
	},
	'优客工场': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['优客工场'],
		trz: ['优客工场'],
		app: [
			{
				name: '优鲜集',
				appId: 1034170822
			},
		]
	},
	'首汽租车': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['首汽租车'],
		trz: ['首汽租车'],
		app: [
			{
				name: '首汽租车',
				appId: 995243029
			},
		]
	},
	'猿辅导': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['猿辅导'],
		trz: ['猿辅导'],
		app: [
			{
				name: '猿辅导',
				appId: 974568444
			},
			{
				name: '猿题库',
				appId: 852188634
			},
			{
				name: '小猿口算',
				appId: 1325419855
			},
			{
				name: '猿辅导老师版',
				appId: 980546123
			},
			{
				name: '小猿搜题',
				appId: 906995758
			},
		]
	},
	'蛋壳公寓': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['蛋壳公寓'],
		trz: ['蛋壳公寓'],
		pj: ['蛋壳公寓'],
		app: [
			{
				name: '蛋壳公寓',
				appId: 1288486566
			},
		]
	},
	'惠民网': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['惠民网'],
		trz: ['中商惠民网'],
	},
	'土巴兔': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['土巴兔'],
		trz: ['土巴兔'],
		app: [
			{
				name: '土巴兔',
				appId: 915299335
			},
			{
				name: '土巴兔智能家居',
				appId: 1117306379
			},
			{
				name: '土巴兔极速版',
				appId: 1456593166
			},
			{
				name: '土巴兔建材通',
				appId: 1441088408
			},
			{
				name: '土巴兔商家版',
				appId: 1250294203
			},
			{
				name: '装修效果图库',
				appId: 588931181
			},
			{
				name: '设计本',
				appId: 778324884
			},
			{
				name: '新房装修',
				appId: 996838891
			},
			{
				name: '装修体验馆',
				appId: 610304054
			},
			{
				name: '装修计算器',
				appId: 625184663
			},
		]
	},
	'马蜂窝': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['马蜂窝'],
		trz: ['马蜂窝'],
		pj: ['马蜂窝旅游网'],
		app: [
			{
				name: '马蜂窝旅游',
				appId: 406596432
			},
			{
				name: '马蜂窝商家',
				appId: 1373191005
			},
		],
	},
	'氪空间': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['氪空间'],
		app: [
			{
				name: '氪空间',
				appId: 1236040196
			},
		],
	},
	'掌门1对1': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['掌门1对1'],
		trz: ['掌门1对1'],
		app: [
			{
				name: '掌门1对1辅导',
				appId: 1087718769
			},
		],
	},
	'猪八戒网': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['猪八戒网'],
		trz: ['猪八戒网'],
		pj: ['猪八戒网'],
		app: [
			{
				name: '猪八戒',
				appId: 597101749
			},
		],
	},
	'曹操出行': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['曹操出行'],
		trz: ['曹操出行'],
		pj: ['曹操出行'],
		app: [
			{
				name: '曹操出行',
				appId: 1034208598
			},
			{
				name: '绿色公务',
				appId: 1103619220
			},
			{
				name: '曹操加盟司机',
				appId: 1458314379
			},
			{
				name: '曹操出租车司机端',
				appId: 1163668978
			},
		],
	},
	'好大夫在线': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['好大夫在线'],
		trz: ['好大夫在线'],
		pj: ['好大夫在线'],
		app: [
			{
				name: '好大夫在线',
				appId: 919502358
			},
		],
	},
	'ETCP停车': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['ETCP停车'],
		trz: ['ETCP停车'],
		app: [
			{
				name: 'ETCP停车',
				appId: 906937001
			},
		],
	},
	'魔方公寓': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['魔方公寓'],
		trz: ['魔方公寓'],
		app: [
			{
				name: '魔方生活',
				appId: 1053056051
			},
		],
	},
	'辣妈帮': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['辣妈帮'],
		trz: ['辣妈帮'],
		app: [
			{
				name: '辣妈帮',
				appId: 517974337
			},
			{
				name: '辣妈帮Pro',
				appId: 675677286
			},
		],
	},
	'途家网': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['途家网'],
		trz: ['途家网'],
		app: [
			{
				name: '途家民宿',
				appId: 582934943
			},
		],
	},
	'小猪短租': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['小猪短租'],
		trz: ['小猪短租'],
		pj: ['小猪短租'],
		app: [
			{
				name: '小猪短租网',
				appId: 1404791965
			},
			{
				name: '小猪',
				appId: 952710115
			},
		],
	},
	'客路旅行': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['客路旅行'],
		app: [
			{
				name: 'KLOOK客路旅行',
				appId: 961850126
			},
			{
				name: '客路商户版',
				appId: 1049228786
			},
		],
	},
	'驴妈妈': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['驴妈妈'],
		trz: ['驴妈妈旅游'],
		pj: ['驴妈妈'],
		app: [
			{
				name: '驴妈妈旅游',
				appId: 443926246
			},
			{
				name: '驴妈妈E',
				appId: 954666221
			},
			{
				name: '店店赢',
				appId: 1157815277
			},
			{
				name: '驴妈妈分销',
				appId: 1139991543
			},
		],
	},
	'一起作业': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['一起作业'],
		trz: ['一起作业'],
		app: [
			{
				name: '一起小学学生',
				appId: 1004963943
			},
			{
				name: '一起学',
				appId: 913817574
			},
		],
	},
	'城家公寓': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['城家公寓'],
		app: [
			{
				name: '城家公寓',
				appId: 1024371010
			},
		],
	},
	'罗辑思维': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['罗辑思维'],
	},
	'春雨医生': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['春雨医生'],
		trz: ['春雨医生'],
		app: [
			{
				name: '春雨医生',
				appId: 478834039
			},
		],
	},
	'斑马快跑': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['斑马快跑'],
		trz: ['斑马快跑'],
		app: [
			{
				name: '斑马快跑V4',
				appId: 1040412314
			},
			{
				name: '斑马快跑司机',
				appId: 1058766992
			},
			{
				name: '斑马快跑物流司机',
				appId: 1257533653
			},
			{
				name: '斑马快跑物流',
				appId: 1255722058
			},
			{
				name: '斑马司机端',
				appId: 1478584444
			},
			{
				name: '斑马快跑司机国际版',
				appId: 1275319341
			},
		],
	},
	'沪江': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['沪江'],
		trz: ['沪江网校'],
		pj: ['沪江网校'],
		app: [
			{
				name: '沪江网校',
				appId: 738227542
			},
			{
				name: '沪江开心词场背单词学英语',
				appId: 635206028
			},
			{
				name: '沪江小D词典',
				appId: 481584414
			},
			{
				name: '沪江听力酷',
				appId: 561392074
			},
		],
	},
	'首汽约车': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['首汽约车'],
		app: [
			{
				name: '首汽约车',
				appId: 997586276
			},
			{
				name: '交运首汽约车',
				appId: 1166801951
			},
			{
				name: '首汽约车企业版',
				appId: 1439321104
			},
		],
	},
	'妙手医生': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['妙手医生'],
		trz: ['妙手医生'],
		app: [
			{
				name: '妙手医生(医生版)',
				appId: 1001911995
			},
			{
				name: '妙手医生患者版',
				appId: 987507394
			},
		],
	},
	'艾佳生活': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['艾佳生活'],
		app: [
			{
				name: '艾佳生活',
				appId: 964151928
			},
		],
	},
	'婚礼纪': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['婚礼纪'],
		trz: ['婚礼纪'],
		pj: ['婚礼纪'],
		app: [
			{
				name: '婚礼纪',
				appId: 594402673
			},
			{
				name: '婚礼纪商家版',
				appId: 950574460
			},
		],
	},
	'丁香园': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['丁香园'],
		trz: ['丁香园'],
		app: [
			{
				name: '丁香园',
				appId: 493466318
			},
			{
				name: '丁香医生',
				appId: 911261462
			},
			{
				name: '丁香医考',
				appId: 637445379
			},
			{
				name: '丁香智汇',
				appId: 538302463
			},
			{
				name: '用药助手',
				appId: 540999305
			},
		],
	},
	'58到家': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['58到家'],
		trz: ['58到家'],
		pj: ['58到家'],
		app: [
			{
				name: '58到家',
				appId: 897342825
			},
			{
				name: '58家政',
				appId: 1367325012
			},
		],
	},
	'禧云国际': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['禧云国际'],
		trz: ['禧云国际'],
		pj: ['禧云国际'],
		app: [
			{
				name: '袋鼠校园',
				appId: 1467843439
			},
			{
				name: '禧云商家',
				appId: 1436272241
			},
			{
				name: '嗨豹校园',
				appId: 1474188826
			},
			{
				name: '嗨豹Plus',
				appId: 1459833383
			},
			{
				name: '太空桥移动端',
				appId: 1457785290
			},
		],
	},
	'七乐康': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['七乐康'],
		trz: ['七乐康'],
		app: [
			{
				name: '七乐康医生',
				appId: 1101114001
			},
		],
	},
	'学霸君': {
		category: '生活服务电商',
		type: '独角兽',
		zx: ['学霸君'],
		trz: ['学霸君'],
		app: [
			{
				name: '学霸君',
				appId: 792598965
			},
			{
				name: '学霸君1对1',
				appId: 1390957449
			},
		],
	},
	'菜鸟网络': {
		category: '物流科技',
		type: '独角兽',
		zx: ['菜鸟网络'],
		trz: ['菜鸟网络'],
		pj: ['菜鸟裹裹'],
		app: [
			{
				name: '菜鸟裹裹',
				appId: 951610982
			},
			{
				name: '菜鸟包裹侠',
				appId: 1097678299
			},
			{
				name: '菜鸟驿站',
				appId: 1215541301
			},
			{
				name: '菜鸟橙运',
				appId: 1181257230
			},
			{
				name: '菜鸟乡村',
				appId: 1267694250
			},
			{
				name: '菜鸟智慧园区',
				appId: 1228143584
			},
			{
				name: '众配宝',
				appId: 1144051025
			},
			{
				name: '奔鸟司机',
				appId: 1480802503
			},
			{
				name: '经物门',
				appId: 1370382082
			},
			{
				name: 'CP运营管理',
				appId: 1345242092
			},
		],
	},
	'京东物流': {
		category: '物流科技',
		type: '独角兽',
		zx: ['京东物流'],
		trz: ['京东物流'],
		pj: ['京东物流'],
		app: [
			{
				name: '京管家',
				appId: 1140697512
			},
		],
	},
	'满帮集团': {
		category: '物流科技',
		type: '独角兽',
		zx: ['满帮集团'],
		trz: ['满帮集团'],
		pj: ['满帮集团'],
		app: [
			{
				name: '满帮家',
				appId: 1225841247
			},
		],
	},
	'跨越速运': {
		category: '物流科技',
		type: '独角兽',
		zx: ['跨越速运'],
		trz: ['跨越速运'],
		pj: ['跨越速运'],
		app: [
			{
				name: '跨越速运手机版',
				appId: 894331361
			},
			{
				name: '跨越司机',
				appId: 1449446131
			},
			{
				name: '跨越车管家',
				appId: 1459464146
			},
			{
				name: '跨声',
				appId: 1462563682
			},
		],
	},
	'日日顺': {
		category: '物流科技',
		type: '独角兽',
		zx: ['日日顺'],
		trz: ['日日顺物流'],
		pj: ['日日顺商城'],
		app: [
			{
				name: '日日顺到家',
				appId: 1419533363
			},
			{
				name: '日日顺通信',
				appId: 983262796
			},
			{
				name: '日日顺家居',
				appId: 1185395997
			},
			{
				name: '日日顺干线',
				appId: 1158776207
			},
			{
				name: '日日顺大盈家',
				appId: 1057483321
			},
			{
				name: '日日顺培训',
				appId: 1235940278
			},
			{
				name: '日日顺快线',
				appId: 1068089972
			},
			{
				name: '日日顺乐农',
				appId: 1123904788
			},
			{
				name: '一路顺',
				appId: 1065426050
			},
			{
				name: '日日顺好师傅',
				appId: 1395256166
			},
			{
				name: '小顺管家',
				appId: 1123904781
			},
		],
	},
	'驹马物流': {
		category: '物流科技',
		type: '独角兽',
		zx: ['驹马物流'],
		trz: ['驹马物流'],
		app: [
			{
				name: '驹马城配司机端',
				appId: 1473766684
			},
			{
				name: '驹马市场助手',
				appId: 1406221006
			},
			{
				name: '越好冷链',
				appId: 1370742809
			},
		],
	},
	'货拉拉': {
		category: '物流科技',
		type: '独角兽',
		zx: ['货拉拉'],
		trz: ['货拉拉'],
		pj: ['货拉拉'],
		app: [
			{
				name: '货拉拉',
				appId: 940562664
			},
			{
				name: '货拉拉司机版',
				appId: 940562798
			},
			{
				name: '货拉拉企业版',
				appId: 1315524645
			},
			{
				name: '货拉拉搬家小哥',
				appId: 1477591776
			},
		],
	},
	'安能物流': {
		category: '物流科技',
		type: '独角兽',
		zx: ['安能物流'],
		trz: ['安能物流'],
		pj: ['安能物流'],
		app: [
			{
				name: '快运令牌',
				appId: 1447595955
			},
			{
				name: '场区调度',
				appId: 1102033008
			},
			{
				name: '360智灵通',
				appId: 1211532804
			},
			{
				name: '能学堂',
				appId: 1450146165
			},
		],
	},
	'壹米滴答': {
		category: '物流科技',
		type: '独角兽',
		zx: ['壹米滴答'],
		trz: ['壹米滴答'],
		pj: ['壹米滴答'],
	},
	'新达达': {
		category: '物流科技',
		type: '独角兽',
		zx: ['达达'],
		trz: ['达达'],
		pj: ['达达'],
		app: [
			{
				name: '达达快送',
				appId: 929567933
			},
			{
				name: '达达骑士版',
				appId: 987425499
			},
		],
	},
	'安鲜达': {
		category: '物流科技',
		type: '独角兽',
		zx: ['安鲜达'],
		trz: ['安鲜达物流'],
		app: [
			{
				name: '安鲜达骑士',
				appId: 1345326610
			},
		],
	},
	'丰巢科技': {
		category: '物流科技',
		type: '独角兽',
		zx: ['丰巢科技'],
		trz: ['丰巢科技'],
		app: [
			{
				name: '丰巢',
				appId: 1259763050
			},
			{
				name: '丰巢管家',
				appId: 1030700715
			},
		],
	},
	'啦啦快送': {
		category: '物流科技',
		type: '独角兽',
		zx: ['啦啦快送'],
		trz: ['啦啦快送'],
	},
	'点我达': {
		category: '物流科技',
		type: '独角兽',
		zx: ['点我达'],
		trz: ['点我达'],
		pj: ['点我达'],
		app: [
			{
				name: '点我达骑手',
				appId: 1247370567 
			},
			{
				name: '点我达商家',
				appId: 1246646059 
			},
		]
	},
	'准时达': {
		category: '物流科技',
		type: '独角兽',
		zx: ['准时达'],
		trz: ['准时达'],
		app: [
			{
				name: '准时达司机助手',
				appId: 1484444797 
			},
		]
	},
	'云鸟配送': {
		category: '物流科技',
		type: '独角兽',
		zx: ['云鸟配送'],
		trz: ['云鸟配送'],
		app: [
			{
				name: '云鸟司机端',
				appId: 1042978929 
			},
			{
				name: '云鸟商户端',
				appId: 1043797536 
			},
		]
	},
	'汇通天下': {
		category: '物流科技',
		type: '独角兽',
		zx: ['汇通天下'],
		trz: ['汇通天下'],
		app: [
			{
				name: 'G7货运人管车',
				appId: 939494230 
			},
			{
				name: '手机管车',
				appId: 992421675 
			},
			{
				name: '货车司机宝',
				appId: 1026734536 
			},
			{
				name: '掌上佳吉',
				appId: 496791183 
			},
			{
				name: '手机工单',
				appId: 1108802511 
			},
			{
				name: '司小宝',
				appId: 1362478936 
			},
			{
				name: '数字签收APP',
				appId: 1477809062 
			},
			{
				name: 'G7 CRM',
				appId: 1436284974 
			},
			{
				name: 'G7EYE标定',
				appId: 1373665334 
			},
		]
	},
	'快狗打车': {
		category: '物流科技',
		type: '独角兽',
		zx: ['快狗打车'],
		trz: ['快狗打车'],
		pj: ['快狗打车'],
		app: [
			{
				name: '快狗打车',
				appId: 914882524 
			},
			{
				name: '快狗打车司机版',
				appId: 1271028379 
			},
			{
				name: '快狗打车企业版',
				appId: 1177900817 
			},
			
		]
	},
	'蚂蚁金服': {
		category: '金融科技',
		type: '独角兽',
		zx: ['蚂蚁金服'],
		trz: ['蚂蚁金服'],
		app: [
			{
				name: '蚂蚁财富',
				appId: 1025628019 
			},
		]
	},
	'陆金所': {
		category: '金融科技',
		type: '独角兽',
		zx: ['陆金所'],
		app: [
			{
				name: '陆金所',
				appId: 615961912 
			},
		]
	},
	'京东金融': {
		category: '金融科技',
		type: '独角兽',
		zx: ['京东金融'],
		trz: ['京东金融'],
		pj: ['京东金融'],
		app: [
			{
				name: '京东金融',
				appId: 895682747 
			},
			{
				name: '京东金融(抢鲜版)',
				appId: 1209316936 
			},
		]
	},
	'微众银行': {
		category: '金融科技',
		type: '独角兽',
		zx: ['微众银行'],
		app: [
			{
				name: '微众银行',
				appId: 994103968 
			},
			{
				name: '微众企业爱普',
				appId: 1455485724 
			},
		]
	},
	'聚宝匯': {
		category: '金融科技',
		type: '独角兽',
		zx: ['聚宝匯'],
		app: [
			{
				name: '聚宝匯',
				appId: 989680116 
			},
		]
	},
	'玖富': {
		category: '金融科技',
		type: '独角兽',
		zx: ['玖富'],
		trz: ['玖富'],
		app: [
			{
				name: '玖富万卡',
				appId: 1192163634 
			},
			{
				name: '玖富钱包',
				appId: 880967714 
			},
		]
	},
	'挖财': {
		category: '金融科技',
		type: '独角兽',
		zx: ['挖财'],
		trz: ['挖财'],
		app: [
			{
				name: '挖财记账',
				appId: 386756967 
			},
		]
	},
	'连连数字': {
		category: '金融科技',
		type: '独角兽',
		zx: ['连连数字'],
		trz: ['连连数字'],
	},
	'花生好车': {
		category: '金融科技',
		type: '独角兽',
		zx: ['花生好车'],
		trz: ['花生好车'],
		app: [
			{
				name: '花生好车',
				appId: 1340239642
			}
		]
	},
	'我来贷': {
		category: '金融科技',
		type: '独角兽',
		zx: ['我来贷'],
		trz: ['我来贷'],
		app: [
			{
				name: '我来贷白领版',
				appId: 1171319314
			},
			{
				name: '我来贷极速版',
				appId: 1136093340
			},
		]
	},
	'人人贷': {
		category: '金融科技',
		type: '独角兽',
		zx: ['人人贷'],
		app: [
			{
				name: '人人贷借款',
				appId: 1149186410
			},
			{
				name: '人人贷财富',
				appId: 883561142
			},
		]
	},
	'车置宝': {
		category: '零售电商',
		type: '千里马',
		zx: ['车置宝'],
		trz: ['车置宝'],
		pj: ['车置宝'],
		app: [
			{
				name: '车置宝二手车',
				appId: 1039631794
			},
			{
				name: '车置宝车商版',
				appId: 605665651
			},
			{
				name: '车置宝云检测',
				appId: 1129101513
			},
			{
				name: '车置宝渠道',
				appId: 1454610433
			},
		]
	},
	'本来生活': {
		category: '零售电商',
		type: '千里马',
		zx: ['本来生活'],
		trz: ['本来生活'],
		pj: ['本来生活'],
		app: [
			{
				name: '本来生活',
				appId: 640076621
			},
		]
	},
	'邮乐网': {
		category: '零售电商',
		type: '千里马',
		zx: ['邮乐网'],
		pj: ['邮乐网'],
		app: [
			{
				name: '邮乐商家版',
				appId: 684673362
			},
			{
				name: '邮掌柜',
				appId: 1001039504
			},
			{
				name: '邮助手',
				appId: 1005540948
			},
			{
				name: '邮配送',
				appId: 1105370828
			},
			{
				name: '邮仓库',
				appId: 989096653
			},
		]
	},
	'天天拍车': {
		category: '零售电商',
		type: '千里马',
		zx: ['天天拍车'],
		trz: ['天天拍车'],
		app: [
			{
				name: '天天拍车',
				appId: 1031138508
			},
			{
				name: '天天拍车经销商',
				appId: 1033068679
			},
			{
				name: '天天拍车二手车估价',
				appId: 1483562749
			},
		]
	},
	'YOHO!有货': {
		category: '零售电商',
		type: '千里马',
		zx: ['YOHO!有货'],
		trz: ['YOHO!有货'],
		app: [
			{
				name: 'Yoho!Buy 有货',
				appId: 490655927
			},
			{
				name: 'Yoho!Now潮流互动社区',
				appId: 530419467
			},
			{
				name: 'mars',
				appId: 1056487123
			},
		]
	},
	'万色城': {
		category: '零售电商',
		type: '千里马',
		zx: ['万色城'],
		trz: ['万色城'],
		app: [
			{
				name: '万色商城',
				appId: 1049609206
			},
			{
				name: '万色城商学院',
				appId: 1013778956
			},
			{
				name: '万色商家',
				appId: 1135012832
			},
			{
				name: '卡乐猫',
				appId: 1038716880
			},
			{
				name: '喵秘',
				appId: 1024877172
			},
		]
	},
	'每日优鲜便利购': {
		category: '零售电商',
		type: '千里马',
		zx: ['每日优鲜'],
		trz: ['每日优鲜'],
		pj: ['每日优鲜'],
		app: [
			{
				name: '每日优鲜',
				appId: 960158896
			},
		]
	},
	'猩便利': {
		category: '零售电商',
		type: '千里马',
		zx: ['猩便利'],
		trz: ['猩便利'],
		app: [
			{
				name: '猩便利',
				appId: 1251769749
			},
			{
				name: '猩石器',
				appId: 1361135952
			},
			{
				name: '猩管家',
				appId: 1321758977
			},
		]
	},
	'卖货郎': {
		category: '零售电商',
		type: '千里马',
		zx: ['卖货郎'],
		trz: ['卖货郎'],
		app: [
			{
				name: '卖货郎商城',
				appId: 1486126230
			},
		]
	},
	'生鲜传奇': {
		category: '零售电商',
		type: '千里马',
		zx: ['生鲜传奇'],
		trz: ['生鲜传奇'],
		app: [
			{
				name: '生鲜传奇',
				appId: 1255437743
			},
		]
	},
	'健客': {
		category: '零售电商',
		type: '千里马',
		zx: ['健客'],
		trz: ['健客'],
		pj: ['健客网'],
		app: [
			{
				name: '健客网上药店',
				appId: 984804729
			},
			{
				name: '健客医生',
				appId: 933076130
			},
			{
				name: '健客医院',
				appId: 1223819664
			},
			{
				name: '健客诊所',
				appId: 1178884010
			},
			{
				name: '健客行',
				appId: 1225946365
			},
			{
				name: '健客医生极速',
				appId: 1462038347
			},
		]
	},
	'爱库存': {
		category: '零售电商',
		type: '千里马',
		zx: ['爱库存'],
		trz: ['爱库存'],
		pj: ['爱库存'],
		app: [
			{
				name: '爱库存',
				appId: 1336929842
			},
		]
	},
	'爱库存': {
		category: '零售电商',
		type: '千里马',
		zx: ['爱库存'],
		trz: ['爱库存'],
	},
	'每日一淘': {
		category: '零售电商',
		type: '千里马',
		zx: ['每日一淘'],
		trz: ['每日一淘'],
		pj: ['每日一淘'],
		app: [
			{
				name: '每日一淘',
				appId: 1377939322
			},
		]
	},
	'卖好车': {
		category: '零售电商',
		type: '千里马',
		zx: ['卖好车'],
		trz: ['卖好车'],
		app: [
			{
				name: '卖好车',
				appId: 1109347285
			},
			{
				name: '卖好车物流',
				appId: 1212731400
			},
		]
	},
	'精真估': {
		category: '零售电商',
		type: '千里马',
		zx: ['精真估'],
		trz: ['精真估'],
		app: [
			{
				name: '精真估二手车评估',
				appId: 900393712
			},
			{
				name: '精真估云评估',
				appId: 1419461700
			},
			{
				name: '精真估专业版',
				appId: 1270611218
			},
		]
	},
	'5miles': {
		category: '零售电商',
		type: '千里马',
		zx: ['5miles'],
		trz: ['5miles'],
		app: [
			{
				name: '5miles',
				appId: 917554930
			},
		]
	},
	'天天果园': {
		category: '零售电商',
		type: '千里马',
		zx: ['天天果园'],
		trz: ['天天果园'],
		app: [
			{
				name: '天天果园',
				appId: 880977721
			},
		]
	},
	'贝店': {
		category: '零售电商',
		type: '千里马',
		zx: ['贝店'],
		trz: ['贝店'],
		app: [
			{
				name: '贝店',
				appId: 1263974711
			},
		]
	},
	'享物说': {
		category: '零售电商',
		type: '千里马',
		zx: ['享物说'],
		trz: ['享物说'],
		app: [
			{
				name: '享物说',
				appId: 1374074090
			},
		]
	},
	'波奇网': {
		category: '零售电商',
		type: '千里马',
		zx: ['波奇网'],
		trz: ['波奇网'],
		pj: ['波奇宠物商城'],
		app: [
			{
				name: '波奇宠物',
				appId: 1398653068
			},
		]
	},
	'小野售': {
		category: '零售电商',
		type: '千里马',
		zx: ['小野售'],
		trz: ['小野售'],
	},
	'食行生鲜': {
		category: '零售电商',
		type: '千里马',
		zx: ['食行生鲜'],
		trz: ['食行生鲜'],
		app: [
			{
				name: '食行生鲜',
				appId: 550928302
			},
		]
	},
	'闪电购': {
		category: '零售电商',
		type: '千里马',
		zx: ['闪电购'],
		trz: ['闪电购'],
		pj: ['闪电购'],
		app: [
			{
				name: '闪电购',
				appId: 1475892658
			},
		]
	},
	'呆萝卜': {
		category: '零售电商',
		type: '千里马',
		zx: ['呆萝卜'],
		trz: ['呆萝卜'],
		app: [
			{
				name: '呆萝卜',
				appId: 1118240209
			},
			{
				name: '呆萝卜合伙人',
				appId: 1457291387
			},
		]
	},
	'有车以后': {
		category: '零售电商',
		type: '千里马',
		zx: ['有车以后'],
		app: [
			{
				name: '有车以后',
				appId: 1094630132
			},
		]
	},
	'E宠商城': {
		category: '零售电商',
		type: '千里马',
		zx: ['E宠商城'],
		trz: ['E宠商城'],
		pj: ['E宠商城'],
		app: [
			{
				name: 'E宠',
				appId: 743561019
			},
		]
	},
	'会分期': {
		category: '零售电商',
		type: '千里马',
		zx: ['会分期'],
		app: [
			{
				name: '会分期',
				appId: 1022738655
			},
		]
	},
	'车王二手车': {
		category: '零售电商',
		type: '千里马',
		zx: ['车王二手车'],
		trz: ['车王二手车'],
		app: [
			{
				name: '车王ERP',
				appId: 1276905917
			},
			{
				name: '二手车行情价',
				appId: 1028215933
			},
		]
	},
	'可得眼镜网': {
		category: '零售电商',
		type: '千里马',
		zx: ['可得眼镜网'],
		pj: ['可得眼镜网'],
		app: [
			{
				name: '可得眼镜',
				appId: 1015323862
			},
		]
	},
	'铁甲二手机': {
		category: '零售电商',
		type: '千里马',
		zx: ['铁甲二手机'],
		trz: ['铁甲二手机'],
		app: [
			{
				name: '铁甲二手机',
				appId: 954189681
			},
			{
				name: '铁甲',
				appId: 989144923
			},
		]
	},
	'果小美': {
		category: '零售电商',
		type: '千里马',
		zx: ['果小美'],
		trz: ['果小美'],
		app: [
			{
				name: '宝贝仓',
				appId: 1385358983
			},
		]
	},
	'有好东西': {
		category: '零售电商',
		type: '千里马',
		zx: ['有好东西'],
		trz: ['有好东西'],
		app: [
			{
				name: '有好东西',
				appId: 1244669503
			},
		]
	},
	'回收宝': {
		category: '零售电商',
		type: '千里马',
		zx: ['回收宝'],
		trz: ['回收宝'],
		app: [
			{
				name: '回收宝',
				appId: 1174685101
			},
		]
	},
	'国药在线': {
		category: '零售电商',
		type: '千里马',
		zx: ['国药在线'],
		trz: ['国药在线'],
		app: [
			{
				name: '国药网',
				appId: 1207156238
			},
		]
	},
	'小红唇': {
		category: '零售电商',
		type: '千里马',
		zx: ['小红唇'],
		trz: ['小红唇'],
		app: [
			{
				name: '小红唇',
				appId: 931449079
			},
		]
	},
	'Plum红布林': {
		category: '零售电商',
		type: '千里马',
		zx: ['Plum红布林'],
		trz: ['Plum红布林'],
		app: [
			{
				name: '红布林',
				appId: 1347534835
			},
		]
	},
	'花卷商城': {
		category: '零售电商',
		type: '千里马',
		zx: ['花卷商城'],
		app: [
			{
				name: '花卷',
				appId: 1112123817
			},
		]
	},
	'永辉云创': {
		category: '零售电商',
		type: '千里马',
		zx: ['永辉云创'],
		trz: ['永辉云创'],
		pj: ['永辉超市'],
		app: [
			{
				name: '永辉生活',
				appId: 1061504496
			},
		]
	},
	'韩束': {
		category: '零售电商',
		type: '千里马',
		zx: ['韩束'],
		app: [
			{
				name: '韩束·必优兰',
				appId: 1147516937
			},
			{
				name: '韩束旗舰店',
				appId: 892775250
			},
		]
	},
	'韩束': {
		category: '零售电商',
		type: '千里马',
		zx: ['韩束'],
		app: [
			{
				name: '韩束旗舰店',
				appId: 892775250
			},
		]
	},
	'天使之橙': {
		category: '零售电商',
		type: '千里马',
		zx: ['天使之橙'],
		trz: ['天使之橙'],
	},
	'好车无忧': {
		category: '零售电商',
		type: '千里马',
		zx: ['好车无忧'],
		trz: ['好车无忧'],
	},
	'疯狂小狗': {
		category: '零售电商',
		type: '千里马',
		zx: ['疯狂小狗'],
		trz: ['疯狂小狗'],
		app: [
			{
				name: '宠芽',
				appId: 1421041830
			},
		]
	},
	'大V店': {
		category: '零售电商',
		type: '千里马',
		zx: ['大V店'],
		trz: ['大V店'],
		pj: ['大V店'],
		app: [
			{
				name: '大V店',
				appId: 1042582462
			},
		]
	},
	'360好药': {
		category: '零售电商',
		type: '千里马',
		zx: ['360好药'],
		trz: ['360好药'],
		app: [
			{
				name: '360健康',
				appId: 1042869384
			},
		]
	},
	'震坤行': {
		category: '产业电商',
		type: '千里马',
		zx: ['震坤行'],
		trz: ['震坤行'],
		app: [
			{
				name: '工邦邦',
				appId: 1471099311
			},
		]
	},
	'药师帮': {
		category: '产业电商',
		type: '千里马',
		zx: ['药师帮'],
		trz: ['药师帮'],
		app: [
			{
				name: '药师帮',
				appId: 941480129
			},
		]
	},
	'找油网': {
		category: '产业电商',
		type: '千里马',
		zx: ['找油网'],
		trz: ['找油网'],
		app: [
			{
				name: '老吕找油',
				appId: 1449808544
			},
			{
				name: '老吕加油',
				appId: 1436278220
			},
		]
	},
	'百布': {
		category: '产业电商',
		type: '千里马',
		zx: ['百布'],
		trz: ['百布'],
		app: [
			{
				name: '百布',
				appId: 1116321003
			},
		]
	},
	'车通云': {
		category: '产业电商',
		type: '千里马',
		zx: ['车通云'],
		trz: ['车通云'],
		app: [
			{
				name: '车通云',
				appId: 1467177028
			},
		]
	},
	'款多多': {
		category: '产业电商',
		type: '千里马',
		zx: ['款多多'],
		trz: ['款多多'],
	},
	'中驰车福': {
		category: '产业电商',
		type: '千里马',
		zx: ['中驰车福'],
		trz: ['中驰车福'],
		app: [
			{
				name: '中驰车福维修店',
				appId: 1023962509
			},
			{
				name: '中驰车福配件商',
				appId: 1437703564
			},
			{
				name: '中驰车福运营商',
				appId: 1465697641
			},
			{
				name: '中驰车福品牌商',
				appId: 1447946000
			},
			{
				name: '中驰车福车队端',
				appId: 1467881376
			},
			{
				name: '中驰驷惠4S店',
				appId: 1338634780
			},
			{
				name: '中驰驷惠维修店',
				appId: 1460938172
			},
			{
				name: '中驰轮保',
				appId: 1322291751
			},
			{
				name: '运营车',
				appId: 1423513975
			},
			{
				name: '门店端',
				appId: 1433890103
			},
		]
	},
	'行圆汽车': {
		category: '产业电商',
		type: '千里马',
		zx: ['行圆汽车'],
		trz: ['行圆汽车'],
		app: [
			{
				name: '行圆慧车通',
				appId: 1219617596
			},
			{
				name: '汽车大全',
				appId: 1219860884
			},
			{
				name: '车顾问',
				appId: 1438475450
			},
			{
				name: '慧商机',
				appId: 1217786602
			},
		]
	},
	'开思汽配': {
		category: '产业电商',
		type: '千里马',
		zx: ['开思汽配'],
		trz: ['开思汽配'],
		app: [
			{
				name: '开思汽配',
				appId: 1291624924
			},
		]
	},
	'西域机电': {
		category: '产业电商',
		type: '千里马',
		zx: ['西域机电'],
		trz: ['西域机电'],
		app: [
			{
				name: '西域科技',
				appId: 1063629472
			},
		]
	},
	'快塑网': {
		category: '产业电商',
		type: '千里马',
		zx: ['快塑网'],
		trz: ['快塑网'],
		app: [
			{
				name: '快塑网',
				appId: 1483582877
			},
		]
	},
	'好汽配': {
		category: '产业电商',
		type: '千里马',
		zx: ['好汽配'],
		trz: ['好汽配'],
		app: [
			{
				name: '好汽配',
				appId: 1042953092
			},
		]
	},
	'滚雷进口车': {
		category: '产业电商',
		type: '千里马',
		zx: ['滚雷进口车'],
		trz: ['滚雷进口车'],
		app: [
			{
				name: '滚雷',
				appId: 1033794556
			},
			{
				name: '滚雷云',
				appId: 1249898315
			},
		]
	},
	'大易有塑': {
		category: '产业电商',
		type: '千里马',
		zx: ['大易有塑'],
		trz: ['大易有塑'],
		app: [
			{
				name: '大易有塑',
				appId: 1445980956
			},
		]
	},
	'快准车服': {
		category: '产业电商',
		type: '千里马',
		zx: ['快准车服'],
		trz: ['快准车服'],
		app: [
			{
				name: '快准E站',
				appId: 1480823546
			},
			{
				name: '快准店管家',
				appId: 1257607200
			},
			{
				name: '快准供应链',
				appId: 1353330018
			},
		]
	},
	'店商互联': {
		category: '产业电商',
		type: '千里马',
		zx: ['店商互联'],
		trz: ['店商互联'],
	},
	'车主邦': {
		category: '产业电商',
		type: '千里马',
		zx: ['车主邦'],
		trz: ['车主邦'],
		app: [
			{
				name: '团油车主邦',
				appId: 1116025241
			},
			{
				name: '团油',
				appId: 1447211725
			},
			{
				name: '快电',
				appId: 1459596094
			},
		]
	},
	'贝登医疗': {
		category: '产业电商',
		type: '千里马',
		zx: ['贝登医疗'],
		trz: ['贝登医疗'],
		app: [
			{
				name: '贝登医疗',
				appId: 1473242549
			},
			{
				name: '医械购',
				appId: 1449136469
			},
		]
	},
	'链尚国际': {
		category: '产业电商',
		type: '千里马',
		zx: ['链尚国际'],
		trz: ['链尚国际'],
		app: [
			{
				name: '链尚掌柜',
				appId: 1043414263
			},
			{
				name: '链尚',
				appId: 1037309425
			},
			{
				name: '搜布',
				appId: 773024628
			},
		]
	},
	'锐锢商城': {
		category: '产业电商',
		type: '千里马',
		zx: ['锐锢商城'],
		trz: ['锐锢商城'],
		app: [
			{
				name: '锐锢商城',
				appId: 1024332321
			},
		]
	},
	'一亩田': {
		category: '产业电商',
		type: '千里马',
		zx: ['一亩田'],
		trz: ['一亩田'],
		app: [
			{
				name: '一亩田',
				appId: 882549448
			},
		]
	},
	'大丰收': {
		category: '产业电商',
		type: '千里马',
		zx: ['大丰收'],
		trz: ['大丰收'],
	},
	'爱便利': {
		category: '产业电商',
		type: '千里马',
		zx: ['爱便利'],
		trz: ['爱便利'],
		app: [
			{
				name: '爱便利',
				appId: 1276423444
			},
			{
				name: '爱便利订货助手',
				appId: 1163071058
			},
			{
				name: '爱便利供应商',
				appId: 1099022050
			},
			{
				name: '爱便利竞价宝',
				appId: 1369701313
			},
			{
				name: 'abl盘点助手',
				appId: 1485844379
			},
			{
				name: 'ABL业务经理',
				appId: 1390954450
			},
			{
				name: 'abl店务助手',
				appId: 1485853755
			},
		]
	},
	'天美联盟': {
		category: '产业电商',
		type: '千里马',
		zx: ['天美联盟'],
		trz: ['天美联盟'],
		app: [
			{
				name: '天美联盟全球购',
				appId: 1459822852
			},
			{
				name: '天美联盟订货',
				appId: 1390442966
			},
			{
				name: '天美联盟老板助手',
				appId: 1443688470
			},
		]
	},
	'工品一号': {
		category: '产业电商',
		type: '千里马',
		zx: ['工品一号'],
		trz: ['工品一号'],
		app: [
			{
				name: '工品一号',
				appId: 1436556409
			},
			{
				name: '工品小秘',
				appId: 1484909835
			},
		]
	},
	'51订货': {
		category: '产业电商',
		type: '千里马',
		zx: ['51订货'],
		trz: ['51订货'],
		app: [
			{
				name: '51订货网',
				appId: 1094569880
			},
			{
				name: '51订货蓝信',
				appId: 1181262491
			},
			{
				name: '51商客',
				appId: 1194931384
			},
			{
				name: '我要0元购',
				appId: 1197957965
			},
			{
				name: '无忧店佳',
				appId: 1192626996
			},
			{
				name: '无忧店佳员工版',
				appId: 1192627411
			},
		]
	},
	'Keep': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['Keep'],
		pj: ['Keep'],
		app: [
			{
				name: 'Keep',
				appId: 952694580
			},
			{
				name: '工品小秘',
				appId: 1484909835
			},
		]
	},
	'典典养车': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['典典养车'],
		trz: ['典典养车'],
	},
	'动因体育': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['动因体育'],
		app: [
			{
				name: '动因体育',
				appId: 1445513945
			},
			{
				name: '动因樱木',
				appId: 1454228081
			},
		]
	},
	'河狸家美甲': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['河狸家美甲'],
		trz: ['河狸家美甲'],
		app: [
			{
				name: '河狸家',
				appId: 1341255223
			},
		]
	},
	'优客逸家': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['优客逸家'],
		trz: ['优客逸家'],
		app: [
			{
				name: '喵了隔壁',
				appId: 1068805579
			},
		]
	},
	'美味不用等': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['美味不用等'],
		trz: ['美味不用等'],
		app: [
			{
				name: '美味不用等',
				appId: 979857479
			},
		]
	},
	'美餐网': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['美餐网'],
		trz: ['美餐网'],
		app: [
			{
				name: '美餐',
				appId: 501967712
			},
			{
				name: '美餐宴请',
				appId: 1102720301
			},
		]
	},
	'嘀嗒出行': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['嘀嗒出行'],
		trz: ['嘀嗒出行'],
		pj: ['嘀嗒出行'],
		app: [
			{
				name: '嘀嗒出行',
				appId: 921478733
			},
		]
	},
	'皇包车': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['皇包车'],
		trz: ['皇包车'],
		app: [
			{
				name: '皇包车',
				appId: 999773808
			},
			{
				name: '皇包车司导端',
				appId: 1041889164
			},
		]
	},
	'酷家乐': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['酷家乐'],
		trz: ['酷家乐'],
		app: [
			{
				name: '酷家乐装修(业主版)',
				appId: 953454755
			},
			{
				name: '酷家乐装修(设计师版)',
				appId: 1026768962
			},
			{
				name: '设计家(酷家乐家居装修方案)',
				appId: 1078143353
			},
		]
	},
	'e袋洗': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['e袋洗'],
		trz: ['e袋洗'],
		pj: ['e袋洗'],
		app: [
			{
				name: 'e袋洗',
				appId: 873474116
			},
			{
				name: '小e助手',
				appId: 1073526201
			},
		]
	},
	'掌通家园': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['掌通家园'],
		trz: ['掌通家园'],
		app: [
			{
				name: '掌通家园',
				appId: 914847333
			},
			{
				name: '掌通家园园丁',
				appId: 966806518
			},
		]
	},
	'阿凡题': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['阿凡题'],
		trz: ['阿凡题'],
		app: [
			{
				name: '阿凡题1对1',
				appId: 1234475581
			},
		]
	},
	'小站教育': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['小站教育'],
		trz: ['小站教育'],
		app: [
			{
				name: '小站雅思',
				appId: 1434054790
			},
			{
				name: '小站雅思单词',
				appId: 1421790118
			},
			{
				name: '小站托福单词',
				appId: 1459839779
			},
			{
				name: '小站托福TPO',
				appId: 1343175213
			},
			{
				name: '小站托福',
				appId: 1459476744
			},
			{
				name: '小站GRE',
				appId: 1416515184
			},
			{
				name: '小站雅思专业版',
				appId: 1478717837
			},
			{
				name: '小站雅思极速版',
				appId: 1464104036
			},
			{
				name: '小站GRE单词',
				appId: 1414774552
			},
			{
				name: '小站SAT',
				appId: 1438819197
			},
		]
	},
	'编程猫': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['编程猫'],
		trz: ['编程猫'],
		app: [
			{
				name: '编程猫Nemo',
				appId: 1394004806
			},
			{
				name: '编程猫Kids校园版',
				appId: 1275416252
			},
			{
				name: '编程猫社区',
				appId: 1193099957
			},
		]
	},
	'八爪鱼在线旅游': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['八爪鱼在线旅游'],
		trz: ['八爪鱼在线旅游'],
	},
	'真旅·智能旅库': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['真旅·智能旅库'],
		trz: ['真旅·智能旅库'],
		app: [
			{
				name: '真旅',
				appId: 892289638
			},
			{
				name: '真旅网商旅',
				appId: 1305612208
			},
			{
				name: '惠军机票',
				appId: 1140414065
			},
		]
	},
	'盒子鱼英语': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['盒子鱼英语'],
		trz: ['盒子鱼英语'],
		app: [
			{
				name: 'BOXFiSH盒子鱼英语',
				appId: 598853342
			},
			{
				name: 'BOXFiSH盒子鱼家长',
				appId: 1187149515
			},
			{
				name: 'BOXFiSH盒子鱼英语教师版',
				appId: 648821387
			},
		]
	},
	'好租网': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['好租网'],
		trz: ['好租网'],
		app: [
			{
				name: '好租网',
				appId: 1271314601
			},
		]
	},
	'穷游网': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['穷游网'],
		trz: ['穷游网'],
		app: [
			{
				name: '穷游',
				appId: 563467866
			},
			{
				name: '穷游最世界',
				appId: 658779759
			},
		]
	},
	'兰迪少儿英语': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['兰迪少儿英语'],
		trz: ['兰迪少儿英语'],
		app: [
			{
				name: '兰迪少儿英语',
				appId: 1186163978
			},
		]
	},
	'衣二三': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['衣二三'],
		trz: ['衣二三'],
		pj: ['衣二三'],
		app: [
			{
				name: '衣二三',
				appId: 991552878
			},
		]
	},
	'租租车': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['租租车'],
		trz: ['租租车'],
		app: [
			{
				name: '租租车',
				appId: 494216511
			},
			{
				name: '租租车-国内租车',
				appId: 1481323469
			},
		]
	},
	'火花思维': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['火花思维'],
		trz: ['火花思维'],
		app: [
			{
				name: '火花思维（学生端）',
				appId: 1358050032
			},
			{
				name: '火花思维（家长端）',
				appId: 1390432042
			},
		]
	},
	'凹凸租车': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['凹凸租车'],
		trz: ['凹凸租车'],
		app: [
			{
				name: '凹凸租车',
				appId: 870422896
			},
		]
	},
	'洋葱数学': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['洋葱数学'],
		trz: ['洋葱数学'],
		app: [
			{
				name: '洋葱学院',
				appId: 990959871
			},
		]
	},
	'爱乐奇': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['爱乐奇'],
		trz: ['爱乐奇'],
		app: [
			{
				name: '爱乐奇',
				appId: 1298433158
			},
			{
				name: '爱乐奇家长',
				appId: 843191884
			},
			{
				name: '爱乐奇老师',
				appId: 843198014
			},
			{
				name: '爱作业',
				appId: 1172201048
			},
		]
	},
	'悟空租车': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['悟空租车'],
		trz: ['悟空租车'],
		app: [
			{
				name: '悟空租车',
				appId: 964020326
			},
		]
	},
	'核桃编程': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['核桃编程'],
		trz: ['核桃编程'],
		app: [
			{
				name: '核桃编程家长端',
				appId: 1485826096
			},
		]
	},
	'乐刻运动': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['乐刻运动'],
		app: [
			{
				name: '乐刻运动',
				appId: 1116555378
			},
		]
	},
	'湾流国际': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['湾流国际'],
		app: [
			{
				name: '湾流',
				appId: 1381021192
			},
			{
				name: '湾流企业版',
				appId: 1435297411
			},
		]
	},
	'8天在线': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['8天在线'],
		trz: ['8天在线'],
		app: [
			{
				name: '8天',
				appId: 908289724
			},
		]
	},
	'熊猫星厨': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['熊猫星厨'],
		trz: ['熊猫星厨'],
		app: [
			{
				name: '熊猫星厨',
				appId: 1484652335
			},
		]
	},
	'更美APP': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['更美APP'],
		trz: ['更美APP'],
		app: [
			{
				name: '更美',
				appId: 639234809
			},
		]
	},
	'怪兽充电': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['怪兽充电'],
		trz: ['怪兽充电'],
	},
	'考虫英语': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['考虫英语'],
		trz: ['考虫英语'],
		app: [
			{
				name: '考虫',
				appId: 1095556423
			},
			{
				name: '考虫考研VIP',
				appId: 1300477182
			},
		]
	},
	'爱空间': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['爱空间'],
		trz: ['爱空间'],
		app: [
			{
				name: '爱空间装修',
				appId: 1441084878
			},
			{
				name: '爱空间家装',
				appId: 986683189
			},
		]
	},
	'我趣旅行': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['我趣旅行'],
		trz: ['我趣旅行'],
	},
	'杰睿教育': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['杰睿教育'],
		trz: ['杰睿教育'],
		app: [
			{
				name: '杰睿教育',
				appId: 1365000770
			},
			{
				name: '杰睿作业汇',
				appId: 1437471207
			},
			{
				name: '杰睿作业汇教师版',
				appId: 1437471311
			},
			{
				name: '对勾学堂',
				appId: 1466022925
			},
		]
	},
	'妈咪知道': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['妈咪知道'],
		trz: ['妈咪知道'],
		app: [
			{
				name: '妈咪知道',
				appId: 896355503
			},
		]
	},
	'瓜子租车': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['瓜子租车'],
		trz: ['瓜子租车'],
		app: [
			{
				name: '瓜子租车',
				appId: 721580564
			},
		]
	},
	'嗖嗖身边': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['嗖嗖身边'],
		trz: ['嗖嗖身边'],
		app: [
			{
				name: '嗖嗖身边',
				appId: 1023284276
			},
			{
				name: '嗖嗖商家',
				appId: 1061457758
			},
		]
	},
	'邢帅教育': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['邢帅教育'],
		trz: ['邢帅教育'],
		app: [
			{
				name: '邢帅企训',
				appId: 1212816897
			},
			{
				name: '学历帮',
				appId: 1058827904
			},
			{
				name: '灵通商学院',
				appId: 1248152056
			},
			{
				name: '阿拉丁教育',
				appId: 1269419559
			},
			{
				name: '方天大学',
				appId: 1259079841
			},
			{
				name: '技能侠',
				appId: 1374752392
			},
			{
				name: '企训讲师版',
				appId: 1273491201
			},
			{
				name: '南明税务网校',
				appId: 1360123623
			},
		]
	},
	'59store': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['59store'],
		app: [
			{
				name: '59store',
				appId: 933710338
			},
			{
				name: '59store-商家版',
				appId: 1134417108
			},
		]
	},
	'美术宝': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['美术宝'],
		trz: ['美术宝'],
		app: [
			{
				name: '美术宝',
				appId: 931184779
			},
			{
				name: '美术宝1对1',
				appId: 1362507427
			},
			{
				name: '美术宝1对1教师版',
				appId: 1443981182
			},
		]
	},
	'阿卡索': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['阿卡索'],
		trz: ['阿卡索'],
		pj: ['阿卡索外教网'],
		app: [
			{
				name: '阿卡索英语',
				appId: 1072713744
			},
			{
				name: '阿卡索少儿英语',
				appId: 1330589981
			},
			{
				name: '阿卡索英语乐园',
				appId: 1230405951
			},
			{
				name: '阿卡索口语秀',
				appId: 1263424911
			},
			{
				name: '阿卡索游戏英语',
				appId: 1477430630
			},
		]
	},
	'凯叔讲故事': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['凯叔讲故事'],
		app: [
			{
				name: '凯叔讲故事',
				appId: 998790080
			},
		]
	},
	'微车': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['微车'],
		trz: ['微车'],
		app: [
			{
				name: '微车查违章',
				appId: 693228373
			},
		]
	},
	'云纵': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['云纵'],
		app: [
			{
				name: '云纵商家',
				appId: 1252931668
			},
			{
				name: '掌上云雀',
				appId: 1432407714
			},
		]
	},
	'ENJOY': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['ENJOY'],
		trz: ['ENJOY'],
		app: [
			{
				name: 'ENJOY',
				appId: 943837902
			},
			{
				name: '掌上云雀',
				appId: 1432407714
			},
		]
	},
	'游心旅行': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['游心旅行'],
		trz: ['游心旅行'],
	},
	'安歆公寓': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['安歆公寓'],
		app: [
			{
				name: '安歆集团',
				appId: 1203111087
			},
			{
				name: '安歆移动办公',
				appId: 1445521801
			},
		]
	},
	'智课网': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['智课网'],
		trz: ['智课网SmartStudy'],
		app: [
			{
				name: '智课斩雅思',
				appId: 1126218840
			},
			{
				name: '智课斩托福',
				appId: 1140024057
			},
			{
				name: '智课批改',
				appId: 1144041362
			},
			{
				name: '选校帝',
				appId: 1230298344
			},
		]
	},
	'悟空找房': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['悟空找房'],
		trz: ['悟空找房'],
		app: [
			{
				name: '悟空找房',
				appId: 993127678
			},
		]
	},
	'美丽屋': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['美丽屋'],
		trz: ['美丽屋'],
		app: [
			{
				name: '美丽屋',
				appId: 1019419940
			},
		]
	},
	'连咖啡': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['连咖啡'],
		trz: ['连咖啡'],
	},
	'闪修侠': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['闪修侠'],
		trz: ['闪修侠'],
		app: [
			{
				name: '闪修侠',
				appId: 1488562817
			},
			{
				name: '闪修侠-工程师版',
				appId: 1247736110
			},
		]
	},
	'泰坦云': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['泰坦云'],
		trz: ['泰坦云'],
	},
	'德师傅': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['德师傅'],
		trz: ['德师傅'],
	},
	'河小象': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['河小象'],
		trz: ['河小象'],
		app: [
			{
				name: '河小象学生写字平台',
				appId: 1436282840
			},
			{
				name: '河小象少儿美术',
				appId: 1478075575
			},
			{
				name: '河小象大语文',
				appId: 1481527553
			},
			{
				name: '河小象趣味识字',
				appId: 1484907413
			},
		]
	},
	'未来域': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['未来域'],
		app: [
			{
				name: '未来域',
				appId: 1193502116
			},
			{
				name: '未来域管理端',
				appId: 1220793673
			},
		]
	},
	'安心医生': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['安心医生'],
		trz: ['安心医生'],
		app: [
			{
				name: '安心医生',
				appId: 995118720
			},
		]
	},
	'悦动圈': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['悦动圈'],
		trz: ['悦动圈'],
		app: [
			{
				name: '悦动圈',
				appId: 872341407
			},
			{
				name: '悦动圈Pro',
				appId: 1205358800
			},
			{
				name: '悦动圈健康',
				appId: 1462618458
			},
		]
	},
	'好慷在家': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['好慷在家'],
		trz: ['好慷在家'],
		pj: ['好慷在家'],
		app: [
			{
				name: '好慷在家',
				appId: 1076458506
			},
		]
	},
	'三节课': {
		category: '生活服务电商',
		type: '千里马',
		zx: ['三节课'],
		trz: ['三节课'],
		app: [
			{
				name: '有招get',
				appId: 1455294987
			},
		]
	},
	'福佑卡车': {
		category: '物流科技',
		type: '千里马',
		zx: ['福佑卡车'],
		trz: ['福佑卡车'],
		app: [
			{
				name: '福佑卡车货主版',
				appId: 1011695242
			},
			{
				name: '福佑车队',
				appId: 1066641680
			},
			{
				name: '福佑订单',
				appId: 1471592828
			},
		]
	},
	'卡行天下': {
		category: '物流科技',
		type: '千里马',
		zx: ['卡行天下'],
		trz: ['卡行天下'],
	},
	'运去哪': {
		category: '物流科技',
		type: '千里马',
		zx: ['运去哪'],
		trz: ['运去哪'],
		app: [
			{
				name: '运去哪',
				appId: 1456781466
			}
		]
	},
	'闪送': {
		category: '物流科技',
		type: '千里马',
		zx: ['闪送'],
		trz: ['闪送'],
		app: [
			{
				name: '闪送',
				appId: 895374634
			},
			{
				name: '闪送商家版',
				appId: 1438700286
			},
		]
	},
	'优速快递': {
		category: '物流科技',
		type: '千里马',
		zx: ['优速快递'],
		trz: ['优速快递'],
		pj: ['优速快递'],
	},
	'中铁物流': {
		category: '物流科技',
		type: '千里马',
		zx: ['中铁物流'],
		trz: ['中铁物流'],
	},
	'发网FineEx': {
		category: '物流科技',
		type: '千里马',
		zx: ['发网FineEx'],
		trz: ['发网FineEx'],
	},
	'快仓': {
		category: '物流科技',
		type: '千里马',
		zx: ['快仓'],
		trz: ['快仓'],
	},
	'易代储': {
		category: '物流科技',
		type: '千里马',
		zx: ['易代储'],
		trz: ['易代储'],
		app: [
			{
				name: '园小易',
				appId: 1231329183
			},
			{
				name: 'Espace',
				appId: 1270536031
			},
			{
				name: '园小易管理端',
				appId: 1461740903
			},
		]
	},
	'九曳供应链': {
		category: '物流科技',
		type: '千里马',
		zx: ['九曳供应链'],
		trz: ['九曳供应链'],
		app: [
			{
				name: '全直鲜',
				appId: 1440440251
			},
		]
	},
	'UU跑腿': {
		category: '物流科技',
		type: '千里马',
		zx: ['UU跑腿'],
		trz: ['UU跑腿'],
		app: [
			{
				name: 'UU跑腿',
				appId: 991522182
			},
			{
				name: 'UU飞人',
				appId: 991522191
			},
			{
				name: 'UU跑腿商家版',
				appId: 1259780596
			},
		]
	},
	'壹玖壹玖': {
		category: '零售电商',
		type: '新三板',
		zx: ['壹玖壹玖'],
		ncb: '壹玖壹玖',
	},
	'康泽药业': {
		category: '零售电商',
		type: '新三板',
		zx: ['康泽药业'],
		ncb: '康泽药业',
	},
	'家电网': {
		category: '零售电商',
		type: '新三板',
		zx: ['家电网'],
		ncb: '家电网',
	},
	'酒便利': {
		category: '零售电商',
		type: '新三板',
		zx: ['酒便利'],
		ncb: '酒便利',
	},
	'猫诚股份': {
		category: '零售电商',
		type: '新三板',
		zx: ['猫诚股份'],
		ncb: '猫诚股份',
	},
	'乐汇电商': {
		category: '零售电商',
		type: '新三板',
		zx: ['乐汇电商'],
		ncb: '乐汇电商',
	},
	'喜宝动力': {
		category: '零售电商',
		type: '新三板',
		zx: ['喜宝动力'],
		ncb: '喜宝动力',
	},
	'昆汀科技': {
		category: '零售电商',
		type: '新三板',
		zx: ['昆汀科技'],
		ncb: '昆汀科技',
	},
	'他趣股份': {
		category: '零售电商',
		type: '新三板',
		zx: ['他趣股份'],
		ncb: '他趣股份',
	},
	'优雅电商': {
		category: '零售电商',
		type: '新三板',
		zx: ['优雅电商'],
		ncb: '优雅电商',
	},
	'全网数商': {
		category: '零售电商',
		type: '新三板',
		zx: ['全网数商'],
		ncb: '全网数商',
	},
	'红酒世界': {
		category: '零售电商',
		type: '新三板',
		zx: ['红酒世界'],
		ncb: '红酒世界',
	},
	'网娘电商': {
		category: '零售电商',
		type: '新三板',
		zx: ['网娘电商'],
		ncb: '网娘电商',
	},
	'悦为电商': {
		category: '零售电商',
		type: '新三板',
		zx: ['悦为电商'],
		ncb: '悦为电商',
	},
	'春水堂': {
		category: '零售电商',
		type: '新三板',
		zx: ['春水堂'],
		ncb: '春水堂',
	},
	'唯车电商': {
		category: '零售电商',
		type: '新三板',
		zx: ['唯车电商'],
		ncb: '唯车电商',
	},
	'茶人岭': {
		category: '零售电商',
		type: '新三板',
		zx: ['茶人岭'],
		ncb: '茶人岭',
	},
	'奥斯马特': {
		category: '零售电商',
		type: '新三板',
		zx: ['奥斯马特'],
		ncb: '奥斯马特',
	},
	'桃花坞': {
		category: '零售电商',
		type: '新三板',
		zx: ['桃花坞'],
		ncb: '桃花坞',
	},
	'速普电商': {
		category: '零售电商',
		type: '新三板',
		zx: ['速普电商'],
		ncb: '速普电商',
	},
	'钢银电商': {
		category: '产业电商',
		type: '新三板',
		zx: ['钢银电商'],
		ncb: '钢银电商',
	},
	'钢宝股份': {
		category: '产业电商',
		type: '新三板',
		zx: ['钢宝股份'],
		ncb: '钢宝股份',
	},
	'浩德钢圈': {
		category: '产业电商',
		type: '新三板',
		zx: ['浩德钢圈'],
		ncb: '浩德钢圈',
	},
	'中钢网': {
		category: '产业电商',
		type: '新三板',
		zx: ['中钢网'],
		ncb: '中钢网',
	},
	'中钢电商': {
		category: '产业电商',
		type: '新三板',
		zx: ['中钢电商'],
		ncb: '中钢电商',
	},
	'报春电商': {
		category: '产业电商',
		type: '新三板',
		zx: ['报春电商'],
		ncb: '报春电商',
	},
	'钢之家': {
		category: '产业电商',
		type: '新三板',
		zx: ['钢之家'],
		ncb: '钢之家',
	},
	'锦桥电商': {
		category: '产业电商',
		type: '新三板',
		zx: ['锦桥电商'],
		ncb: '锦桥电商',
	},
	'信立方': {
		category: '产业电商',
		type: '新三板',
		zx: ['信立方'],
		ncb: '信立方',
	},
	'搜了网络': {
		category: '产业电商',
		type: '新三板',
		zx: ['搜了网络'],
		ncb: '搜了网络',
	},
	'中塑在线': {
		category: '产业电商',
		type: '新三板',
		zx: ['中塑在线'],
		ncb: '中塑在线',
	},
	'讯网网络': {
		category: '产业电商',
		type: '新三板',
		zx: ['讯网网络'],
		ncb: '讯网网络',
	},
	'滨兴科技': {
		category: '产业电商',
		type: '新三板',
		zx: ['滨兴科技'],
		ncb: '滨兴科技',
	},
	'神州优车': {
		category: '生活服务电商',
		type: '新三板',
		zx: ['神州优车'],
		ncb: '神州优车',
	},
	'骏途网': {
		category: '生活服务电商',
		type: '新三板',
		zx: ['骏途网'],
		ncb: '骏途网',
	},
	'差旅天下': {
		category: '生活服务电商',
		type: '新三板',
		zx: ['差旅天下'],
		ncb: '差旅天下',
	},
	'虎凤蝶': {
		category: '生活服务电商',
		type: '新三板',
		zx: ['虎凤蝶'],
		ncb: '虎凤蝶',
	},
	'留成网': {
		category: '生活服务电商',
		type: '新三板',
		zx: ['留成网'],
		ncb: '留成网',
	},
	'淘车无忧': {
		category: '生活服务电商',
		type: '新三板',
		zx: ['淘车无忧'],
		ncb: '淘车无忧',
	},
	'小马科技': {
		category: '生活服务电商',
		type: '新三板',
		zx: ['小马科技'],
		ncb: '小马科技',
	},
	'世贸通': {
		category: '跨境电商',
		type: '新三板',
		zx: ['世贸通'],
		ncb: '世贸通',
	},
	'渝欧股份': {
		category: '跨境电商',
		type: '新三板',
		zx: ['渝欧股份'],
		ncb: '渝欧股份',
	},
	'遨森电商': {
		category: '跨境电商',
		type: '新三板',
		zx: ['遨森电商'],
		ncb: '遨森电商',
	},
	'宝贝格子': {
		category: '跨境电商',
		type: '新三板',
		zx: ['宝贝格子'],
		ncb: '宝贝格子',
	},
	'百事泰': {
		category: '跨境电商',
		type: '新三板',
		zx: ['百事泰'],
		ncb: '百事泰',
	},
	'宝信环球': {
		category: '跨境电商',
		type: '新三板',
		zx: ['宝信环球'],
		ncb: '宝信环球',
	},
	'理德铭': {
		category: '跨境电商',
		type: '新三板',
		zx: ['理德铭'],
		ncb: '理德铭',
	},
	'跨境翼': {
		category: '跨境电商',
		type: '新三板',
		zx: ['跨境翼'],
		ncb: '跨境翼',
	},
	'五五海淘': {
		category: '跨境电商',
		type: '新三板',
		zx: ['五五海淘'],
		ncb: '五五海淘',
	},
	'择尚科技': {
		category: '跨境电商',
		type: '新三板',
		zx: ['择尚科技'],
		ncb: '择尚科技',
	},
	'淘淘羊': {
		category: '跨境电商',
		type: '新三板',
		zx: ['淘淘羊'],
		ncb: '淘淘羊',
	},
	'万方网络': {
		category: '跨境电商',
		type: '新三板',
		zx: ['万方网络'],
		ncb: '万方网络',
	},
		
}
