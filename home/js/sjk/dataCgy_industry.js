var dataType = [{
		k: 'dtime',
		text: '时间'
	},{
		k: 'shares',
		text: '交易规模',
		dw: '亿元'
	},{
		k: 'a100',
		text: '用户规模',
		dw: '亿人'
	},{
		k: 'a101',
		text: '渗透率',
		dw: '%'
	},{
		k: 'a102',
		text: '营收规模',
		dw: '亿元'
	},{
		k: 'a103',
		text: '市场规模',
		dw: '亿元'
	},{
		k: 'a104',
		text: '社会消费品零售总额',
		dw: '亿元'
	},{
		k: 'a105',
		text: '商家数',
		dw: '万家'
	},{
		k: 'a106',
		text: '企业规模',
		dw: '万家'
	},{
		k: 'a107',
		text: '直接从业人员规模',
		dw: '万人'
	},{
		k: 'a108',
		text: '间接从业人员规模',
		dw: '万人'
	},{
		k: 'a109',
		text: '业务量',
		dw: '亿元'
	},{
		k: 'a110',
		text: '规模',
		dw: ''
	},{
		k: 'a111',
		text: '交易量',
		dw: '亿元'
	},{
		k: 'a112',
		text: '淘宝村数量',
		dw: '个'
	},{
		k: 'a113',
		text: '双11成交总额',
		dw: '亿元'
	},{
		k: 'a115',
		text: '双11包裹订单量',
		dw: '亿'
	},{
		k: 'a117',
		text: '双11包裹签收破亿时间',
		dw: '小时'
	},{
		k: 'a118',
		text: '双11包裹发货破亿时间',
		dw: '小时'
	},{
		k: 'a119',
		text: '双11支付宝总笔数',
		dw: ''
	},{
		k: 'a121',
		text: '交易峰值',
		dw: ''
	},{
		k: 'a122',
		text: '双11客单价',
		dw: '元'
	},{
		k: 'a125',
		text: '在线旅游市场GMV',
		dw: '亿元'
	},{
		k: 'a126',
		text: '平均单价',
		dw: '元'
	},{
		k: 'a127',
		text: '城镇居民食品消费支出',
		dw: '元'
	},{
		k: 'a128',
		text: '生鲜电商占比',
		dw: '%'
	},{
		k: 'a129',
		text: '融资事件数量',
		dw: '次'
	},{
		k: 'a130',
		text: '融资金额',
		dw: '亿元'
	},{
		k: 'a131',
		text: '订单规模',
		dw: '亿元'
	},{
		k: 'a132',
		text: '冷链物流行业占比',
		dw: '%'
	},{
		k: 'a133',
		text: '总费用',
		dw: '亿元'
	},{
		k: 'a134',
		text: 'GDP',
		dw: '亿元'
	},{
		k: 'a135',
		text: 'GDP占比率',
		dw: '%'
	},{
		k: 'a136',
		text: '跨境进口零售电商市场规模',
		dw: '亿元'
	},{
		k: 'a137',
		text: '跨境进口总额',
		dw: '亿元'
	},{
		k: 'a138',
		text: '跨境进口在进口总额中的占比 ',
		dw: '%'
	},{
		k: 'a139',
		text: '出境旅游人数',
		dw: '百万'
	},{
		k: 'a140',
		text: '出国留学人数',
		dw: '万人'
	},{
		k: 'a141',
		text: '留学人员回国人数',
		dw: '万人'
	},{
		k: 'a142',
		text: '母婴产品服务规模',
		dw: '万亿元'
	},{
		k: 'a143',
		text: '我国母婴消费占家庭消费比例 ',
		dw: '%'
	},{
		k: 'a144',
		text: '中国母婴移动端用户规模',
		dw: '亿人'
	},{
		k: 'a145',
		text: '母婴行业市场规模',
		dw: '亿元'
	},{
		k: 'a146',
		text: '母婴用品市场规模',
		dw: '万亿元'
	},{
		k: 'a147',
		text: '婴儿纸尿裤市场规模',
		dw: '亿元'
	},{
		k: 'a148',
		text: '婴儿奶粉市场规模',
		dw: '亿元'
	},{
		k: 'a149',
		text: '快递柜组数',
		dw: '万组'
	},{
		k: 'a150',
		text: '箱递率',
		dw: '%'
	},{
		k: 'a151',
		text: '国内旅游总人数',
		dw: '亿人'
	},{
		k: 'a152',
		text: '国内旅游总收入',
		dw: '万亿元'
	},{
		k: 'a153',
		text: '双11移动端订单占比',
		dw: '%'
	},{
		k: 'a154',
		text: '网络零售额',
		dw: '万亿元'
	},{
		k: 'a155',
		text: '双11订单峰值',
		dw: '笔/秒'
	},{
		k: 'a156',
		text: '双11网联、银联网络支付业务笔数',
		dw: '亿笔'
	},{
		k: 'a157',
		text: '双11网联、银联网络支付业务金额',
		dw: '万亿元'
	},{
		k: 'a158',
		text: '快递业务平均单价',
		dw: '元'
	},]
var dataField = [{
		title: '电商整体',
		id: 'ec',
		children: [{
			title: '电子商务',
			id: 'dzsw',
		},{
			title: '移动电商',
			id: 'ydds',
		},{
			title: '电商人员',
			id: 'cyry',
		},{
			title: '电商服务业',
			id: 'dsfwy',
		},{
			title: '品牌电商服务',
			id: 'ppdsfw',
		},{
			title: '网络经济',
			id: 'wljj',
		},{
			title: '移动支付',
			id: 'ydzf',
		},{
			title: '在线直播',
			id: 'zxzb',
		},],
	},{
		title: '产业电商',
		id: 'b2b',
		children: [{
			title: '产业电商',
			id: 'b2bds',
		},{
			title: '大宗电商',
			id: 'dzds',
		},{
			title: '快消品B2B',
			id: 'kxpb2b',
		},{
			title: '钢铁电商',
			id: 'gtds',
		},{
			title: '医药B2B',
			id: 'yyb2b',
		},{
			title: '企业采购',
			id: 'qycg',
		},{
			title: '工业电商',
			id: 'gyds',
		},],
	},{
		title: '零售电商',
		id: 'lsds',
		children: [{
			title: '网络零售',
			id: 'wlls',
		},{
			title: '社交电商',
			id: 'sjds',
		},{
			title: '农村电商',
			id: 'ncds',
		},{
			title: '生鲜电商',
			id: 'sxds',
		},{
			title: '母婴电商',
			id: 'myds',
		},{
			title: '奢侈品电商',
			id: 'scpds',
		},{
			title: '微商',
			id: 'wx',
		},{
			title: '二手电商',
			id: 'esds',
		},{
			title: '二手车电商',
			id: 'escds',
		},{
			title: '社区团购',
			id: 'sqtg',
		},{
			title: '家电电商',
			id: 'jdds',
		},{
			title: '食品电商',
			id: 'spds',
		},{
			title: '医药电商',
			id: 'yyds',
		},{
			title: '海外代购',
			id: 'hwdg',
		},{
			title: '美妆电商',
			id: 'mzds',
		},{
			title: '导购电商',
			id: 'dgds',
		},{
			title: '个护美妆',
			id: 'ghmz',
		},{
			title: '天猫双11',
			id: 'tmsh11',
		},{
			title: '全网双11',
			id: 'qwsh11',
		},{
			title: '京东双11',
			id: 'jdsh11',
		},{
			title: '代运营',
			id: 'dyy',
		},{
			title: '家居建材',
			id: 'jjjc',
		},{
			title: 'B2C电商',
			id: 'b2cds',
		},{
			title: '服装电商',
			id: 'fzds',
		},],
	},{
		title: '生活服务电商',
		id: 'o2o',
		children: [{
			title: '生活服务电商',
			id: 'shfwds',
		},{
			title: '在线外卖',
			id: 'zxwm',
		},{
			title: '在线旅游',
			id: 'zxly',
		},{
			title: '在线教育',
			id: 'zxjy',
		},{
			title: '互联网医疗',
			id: 'hlwyl',
		},{
			title: '互联网家装',
			id: 'hlwjz',
		},{
			title: '互联网餐饮',
			id: 'hlwcy',
		},{
			title: '医美电商',
			id: 'ymds'
		},
		],
	},{
		title: '跨境电商',
		id: 'kj',
		children: [{
			title: '跨境电商',
			id: 'kjds',
		},{
			title: '出口跨境电商',
			id: 'ckkjds',
		},{
			title: '进口跨境电商',
			id: 'jkkjds',
		},{
			title: '跨境支付',
			id: 'kjzf',
		},],
	},{
		title: '共享经济',
		id: 'gxjj',
		children: [{
			title: '共享经济',
			id: 'gxjj',
		},{
			title: '共享单车',
			id: 'gxdc',
		},{
			title: '共享住宿',
			id: 'ggzs',
		},{
			title: '网约车',
			id: 'wyc',
		},{
			title: '共享办公',
			id: 'gxbg',
		},{
			title: '共享充电宝',
			id: 'gxcdb',
		},{
			title: '共享汽车',
			id: 'gxqc',
		},{
			title: '共享出行',
			id: 'gxcx',
		},],
	},{
		title: '物流科技',
		id: 'wlkj',
		children: [{
			title: '电商物流',
			id: 'dswl',
		},{
			title: '全球电商物流',
			id: 'qqdswl',
		},{
			title: '即时物流',
			id: 'jswl',
		},{
			title: '同城O2O',
			id: 'tcO2O',
		},{
			title: '智慧物流',
			id: 'zhwl',
		},{
			title: '冷链物流',
			id: 'llwl',
		},{
			title: '社区O2O',
			id: 'sqO2O',
		},{
			title: '社会物流',
			id: 'shwl',
		},{
			title: '同城货运',
			id: 'tchy',
		},],
	},]