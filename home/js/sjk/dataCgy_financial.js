var dataTypeFinancial = {
	dtime: ['时间',false, ''],
	a100: ['营收', false, '亿'],
	a101: ['营收同比增长率',false, ''],
	a102: ['毛利润',false, '亿'],
	a103: ['毛利润同比增长率',false, ''],
	a104: ['净利润',false, '亿'],
	a105: ['净利润同比增长率',false, ''],
	a106: ['总资产',false, '亿'],
	a107: ['总资产同比增长率',false, ''],
	a108: ['净资产',false, '亿'],
	a109: ['净资产同比增长率',false, ''],
	a110: ['付费会员',false, '万'],
	a111: ['成交量',false, '万吨'],
	a112: ['GMV',false, '亿'],
	a113: ['GMV同比增长率',false, ''],
	a114: ['客户数',false, '位'],
	a115: ['客户数同比增长率',false, ''],
	a116: ['用户数',false, '亿'],
	a117: ['活跃用户数',false, '亿'],
	a118: ['活跃用户数同比增长率',false, ''],
	a119: ['现金流',false, '亿'],
	a120: ['现金流同比增长率',false, ''],
	a121: ['仓储面积',false, '万平方米'],
	a122: ['月活跃用户',false, '亿'],
	a123: ['订单量',false,'万份'],
	a124: ['币种',false, ''],
	a125: ['流动资产',false, '亿'],
	a126: ['流动负债',false, '亿'],
	a127: ['总负债',false, '亿'],
	a132: ['现金流量净额',false, '亿'],
	a133: ['自由现金流',false, '亿'],
	a134: ['归母净利率',false, ''],
	a135: ['毛利率',false, ''],
	a136: ['ARPU(每用户平均收入)',false, '元'],
	a137: ['研发费用',false, '百万'],
	a138: ['研发费用占收入百分比',false, ''],
	a139: ['美团外卖变现率',false, ''],
	a140: ['活跃买家数',false, '亿'],
	a141: ['广告收入',false, '亿'],
	a142: ['广告收入增长率',false, ''],
	a143: ['双11订单量峰值',false, '万笔/秒'],
	a144: ['总经营费用',false, '亿'],
	a145: ['经营费用率',false, ''],
	a146: ['客单价',false, '元/单'],
	a147: ['活跃用户人均GMV',false, '元/人'],
	a148: ['财年GMV',false, '亿'],
	a149: ['财年GMV同比增长率',false, ''],
	a150: ['用户数同比增长率',false, ''],
	a151: ['注册用户数',false, '亿'],
	a152: ['注册用户数同比增长率',false, ''],
	a153: ['电商包裹市场份额占比',false, ''],
	a154: ['B2C市场交易份额占比',false, ''],
	a155: ['年度营收',false, '亿'],
	a156: ['年度营收增长率',false, ''],
};

var apiurl = 'https://www.100ec.cn/Home/Index/financial_json?name='

var cpyData = [
	{
		name: '阿里巴巴',
		type: 'B2C',
		code: 'BABA.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/albbIPO/',
		color: '#ff7b00',
		tjUrl: '图解财报 阿里'
	},{
		name: '京东',
		type: 'B2C',
		code: 'JD.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/jdipo/',
		color: '#e31d1a',
		tjUrl: '图解财报 京东'
	},{
		name: '拼多多',
		type: 'B2C',
		code: 'PDD.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/pddIPO/',
		color: '#e02e24',
		tjUrl: '图解财报 拼多多'
	},{
		name: '唯品会',
		type: 'B2C',
		code: 'VIPS.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/2012wph/',
		color: '#e5007f',
		tjUrl: '图解财报 唯品会'
	},{
		name: '苏宁易购',
		type: 'B2C',
		code: '002024.SZ',
		ztUrl: 'http://www.100ec.cn/zt/sgjlf/',
		ipoUrl: '',
		color: '#ffaa00',
		tjUrl: '图解财报 苏宁'
	},{
		name: '国美零售',
		type: 'B2C',
		code: '00493.HK',
		ztUrl: 'http://www.100ec.cn/zt/gmzmr/',
		ipoUrl: '',
		color: '#f700ee',
		tjUrl: '图解财报 国美'
	},
	{
		name: '聚美优品',
		type: 'B2C',
		code: 'JMEI.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/jmipo/',
		color: '#d41350',
		tjUrl: '图解财报 聚美',
		isHide: true
	},
	{
		name: '网易电商',
		type: 'B2C',
		code: 'NTES.N',
		ztUrl: 'http://www.100ec.cn/zt/qy_wy/',
		ipoUrl: '',
		color: '#e02e24',
		tjUrl: '图解财报 网易电商',
		isHide: true
	},
	{
		name: '寺库',
		type: 'B2C',
		code: 'SECO.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/skipo/',
		color: '#ff9d01',
		tjUrl: '图解财报 寺库'
	},{
		name: '小米',
		type: 'B2C',
		code: '01810.HK',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/qy_xm2/',
		color: '#ff6700',
		tjUrl: '图解财报 小米'
	},{
		name: '小熊电器',
		type: 'B2C',
		code: '002959.SZ',
		ztUrl: 'http://www.100ec.cn/zt/xxdqIPO/',
		ipoUrl: '',
		color: '#EB9F51',
		tjUrl: '图解财报 小熊电器'
	},{
		name: '1药网',
		type: 'B2C',
		code: 'YI.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/ywIPO/',
		color: '#262d57',
		tjUrl: '图解财报 1药网'
	},{
		name: '有赞',
		type: 'B2C',
		code: '08083.HK',
		ztUrl: 'http://www.100ec.cn/zt/youzan/',
		ipoUrl: '',
		color: '#ee0000',
		tjUrl: '图解财报 有赞'
	},{
		name: '微盟集团',
		type: 'B2C',
		code: '02013.HK',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/wbIPO/',
		color: '#00aadc',
		tjUrl: '图解财报 微盟'
	},{
		name: '蘑菇街',
		type: 'B2C',
		code: 'MOGU.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/mlleIPO/',
		color: '#ff4466',
		tjUrl: '图解财报 蘑菇街'
	},{
		name: '如涵',
		type: 'B2C',
		code: 'RUHN.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/rhIPO/',
		color: '#791513',
		tjUrl: '图解财报 如涵'
	},{
		name: '云集',
		type: 'B2C',
		code: 'YJ.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/yjIPO/',
		color: '#e02e24',
		tjUrl: '图解财报 云集'
	},{
		name: '什么值得买',
		type: 'B2C',
		code: '300785.SZ',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/smzdmIPO/',
		color: '#d24543',
		tjUrl: '图解财报 什么值得买'
	},{
		name: '宝宝树',
		type: 'B2C',
		code: '01761.HK',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/BBS/',
		color: '#69b94f',
		tjUrl: '图解财报 宝宝树'
	},{
		name: '优信',
		type: 'B2C',
		code: 'UXIN.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/yx/',
		color: '#ff4d00',
		tjUrl: '图解财报 优信'
	},{
		name: '团车网',
		type: 'B2C',
		code: 'TC.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/tcwIPO/',
		color: '#e02e24',
		tjUrl: '图解财报 团车网'
	},{
		name: '三只松鼠',
		type: 'B2C',
		code: '300783.SZ',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/szssIPO/',
		color: '#60140A',
		tjUrl: '图解财报 三只松鼠'
	},{
		name: '御家汇',
		type: 'B2C',
		code: '300740.SZ',
		ztUrl: '',
		ipoUrl: '',
		color: '#f06c21',
		tjUrl: '图解财报 御家汇'
	},{
		name: '南极电商',
		type: 'B2C',
		code: '002127.SZ',
		ztUrl: '',
		ipoUrl: '',
		color: '#e70012',
		tjUrl: '图解财报 南极电商'
	},{
		name: '歌力思',
		type: 'B2C',
		code: '603808.SH',
		ztUrl: '',
		ipoUrl: '',
		color: '',
		tjUrl: '图解财报 歌力思'
	},{
		name: '乐信',
		type: 'B2C',
		code: 'LX.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/lx/',
		color: '#2568ac',
		tjUrl: '图解财报 乐信'
	},{
		name: '趣店',
		type: 'B2C',
		code: 'QD.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/qdipo/',
		color: '#fa6c41',
		tjUrl: '图解财报 趣店'
	},{
		name: '宝尊电商',
		type: 'B2C',
		code: 'BZUN.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/bzIPO/',
		color: '#014a7d',
		tjUrl: '图解财报 宝尊电商'
	},{
		name: '壹网壹创',
		type: 'B2C',
		code: '300792.SZ',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/ywycIPO/',
		color: '#EB9F51',
		tjUrl: '图解财报 壹网壹创'
	},{
		name: '酷特智能',
		type: 'B2C',
		code: '',
		ztUrl: '',
		ipoUrl: '',
		color: '#EB9F51',
		tjUrl: '图解财报 酷特智能'
	},{
		name: '携程',
		type: 'O2O',
		code: 'TCOM.N',
		ztUrl: '',
		ipoUrl: '',
		color: '#2577e3',
		tjUrl: '图解财报 携程'
	},{
		name: '同程艺龙',
		type: 'O2O',
		code: '00780.HK',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/tcylIPO/',
		color: '#ff6101',
		tjUrl: '图解财报 同程'
	},{
		name: '途牛',
		type: 'O2O',
		code: 'TOUR.N',
		ztUrl: 'http://www.100ec.cn/zt/tn/',
		ipoUrl: '',
		color: '#f08300',
		tjUrl: '图解财报 途牛'
	},{
		name: '美团点评',
		type: 'O2O',
		code: '03690.HK',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/mtIPO/',
		color: '#00c8b4',
		tjUrl: '图解财报 美团'
	},{
		name: '58同城',
		type: 'O2O',
		code: 'WUBA.N',
		ztUrl: 'http://www.100ec.cn/zt/58tc/',
		ipoUrl: '',
		color: '#0c96d9',
		tjUrl: '图解财报 58同城'
	},{
		name: '齐屹科技',
		type: 'O2O',
		code: '01739.HK',
		ztUrl: 'http://www.100ec.cn/zt/qjw/',
		ipoUrl: '',
		color: '#df0010',
		tjUrl: '图解财报 齐屹科技'
	},{
		name: '前程无忧',
		type: 'O2O',
		code: 'JOBS.N',
		ztUrl: '',
		ipoUrl: '',
		color: '#fce219',
		tjUrl: '图解财报 前程无忧'
	},{
		name: '新东方在线',
		type: 'O2O',
		code: '01797.HK',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/xdfzxIPO/',
		color: '#19ae63',
		tjUrl: '图解财报 新东方在线'
	},{
		name: '无忧英语',
		type: 'O2O',
		code: 'COE.N',
		ztUrl: '',
		ipoUrl: '',
		color: '#ffc800',
		tjUrl: '图解财报 无忧英语'
	},{
		name: '跟谁学',
		type: 'O2O',
		code: 'GSX.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/gsxIPO/',
		color: '#19ae63',
		tjUrl: '图解财报 跟谁学'
	},{
		name: '网易有道',
		type: 'O2O',
		code: 'DAO.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/wyydIPO/',
		color: '#EB000F',
		tjUrl: '图解财报 网易有道'
	},{
		name: '乐居',
		type: 'O2O',
		code: 'LEJU.N',
		ztUrl: '',
		ipoUrl: '',
		color: '#f2304a',
		tjUrl: '图解财报 乐居'
	},{
		name: '搜房网',
		type: 'O2O',
		code: 'SFUN.N',
		ztUrl: '',
		ipoUrl: '',
		color: '#f8d347',
		tjUrl: '图解财报 搜房网'
	},{
		name: '房多多',
		type: 'O2O',
		code: 'DUO.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/fddIPO/',
		color: '#E7410C',
		tjUrl: '图解财报 房多多'
	},{
		name: '青客公寓',
		type: 'O2O',
		code: 'QK.N',
		ztUrl: '',
		ipoUrl: '',
		color: 'green',
		tjUrl: '图解财报 青客公寓'
	},{
		name: '平安好医生',
		type: 'O2O',
		code: '01833.HK',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/pahys/',
		color: '#565757',
		tjUrl: '图解财报 平安好医生'
	},{
		name: '新氧',
		type: 'O2O',
		code: 'SY.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/xyIPO/',
		color: '#e02e24',
		tjUrl: '图解财报 新氧'
	},{
		name: '阿里健康',
		type: 'O2O',
		code: '00241.HK',
		ztUrl: '',
		ipoUrl: '',
		color: '#0ca55f',
		tjUrl: '图解财报 阿里健康'
	},{
		name: '阿里影业',
		type: 'O2O',
		code: '01060.HK',
		ztUrl: '',
		ipoUrl: '',
		color: '#ed6f01',
		tjUrl: '图解财报 阿里影业'
	},{
		name: '猫眼娱乐',
		type: 'O2O',
		code: '01896.HK',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/myIPO/',
		color: '#e02e24',
		tjUrl: '图解财报 猫眼'
	},{
		name: '瑞幸咖啡',
		type: 'O2O',
		code: 'LK.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/rxkfIPO/',
		color: '#e02e24',
		tjUrl: '图解财报 瑞幸'
	},{
		name: '蛋壳公寓',
		type: 'O2O',
		code: 'DNK.N',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/dkgyIPO/',
		color: '#0ca55f',
		tjUrl: '图解财报 蛋壳'
	},{
		name: '生意宝',
		type: 'B2B',
		code: '002095.SZ',
		ztUrl: '',
		ipoUrl: '',
		color: '#174d93',
		tjUrl: '图解财报 生意宝'
	},{
		name: '焦点科技',
		type: 'B2B',
		code: '002315.SZ',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/jdkj/',
		color: '#004674',
		tjUrl: '图解财报 焦点科技'
	},{
		name: '上海钢联',
		type: 'B2B',
		code: '300226.SZ',
		ztUrl: 'http://www.100ec.cn/zt/shgl/',
		ipoUrl: '',
		color: '#143282',
		tjUrl: '图解财报 上海钢联'
	},{
		name: '欧浦智网',
		type: 'B2B',
		code: '002711.SZ',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/opzwIPO/',
		color: '#002711',
		tjUrl: '图解财报 欧浦智网'
	},{
		name: '冠福股份',
		type: 'B2B',
		code: '002102.SZ',
		ztUrl: '',
		ipoUrl: '',
		color: '#ce2423',
		tjUrl: '图解财报 冠福股份'
	},{
		name: '科通芯城',
		type: 'B2B',
		code: '00400.Hk',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/ktxcIPO/',
		color: '#f94b00',
		tjUrl: '图解财报 科通芯城'
	},{
		name: '慧聪集团',
		type: 'B2B',
		code: '02280.Hk',
		ztUrl: 'http://www.100ec.cn/zt/HC/',
		ipoUrl: '',
		color: '#f39700',
		tjUrl: '图解财报 慧聪'
	},{
		name: '卓尔智联',
		type: 'B2B',
		code: '02098.Hk',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/zezl/',
		color: '#6cdedb',
		tjUrl: '图解财报 卓尔智联'
	},{
		name: '国联股份',
		type: 'B2B',
		code: '603613.SH',
		ztUrl: '',
		ipoUrl: 'http://www.100ec.cn/zt/glgfIPO/',
		color: '#e02e24',
		tjUrl: '图解财报 国联股份'
	},{
		name: '摩贝',
		type: 'B2B',
		code: 'MKD.N',
		ztUrl: '',
		ipoUrl: '',
		color: '#f94b00',
		tjUrl: '图解财报 摩贝'
	},{
		name: '跨境通',
		type: 'kj',
		code: '002640.SZ',
		ztUrl: 'http://www.100ec.cn/zt/anl_zmq/',
		ipoUrl: '',
		color: '#f12934',
		tjUrl: '图解财报 跨境通'
	},{
		name: '广博股份',
		type: 'kj',
		code: '002103.SZ',
		ztUrl: '',
		ipoUrl: '',
		color: '#084d9b',
		tjUrl: '图解财报 广博股份'
	},{
		name: '兰亭集势',
		type: 'kj',
		code: 'LITB.N',
		ztUrl: '',
		ipoUrl: '',
		color: '#bb2024',
		tjUrl: '图解财报 兰亭集势'
	},{
		name: '天泽信息',
		type: 'kj',
		code: '300209.SZ',
		ztUrl: '',
		ipoUrl: '',
		color: '#084d9b',
		tjUrl: '图解财报 天泽信息'
	},{
		name: '联络互动',
		type: 'kj',
		code: '002280.SZ',
		ztUrl: '',
		ipoUrl: '',
		color: '#3d3939',
		tjUrl: '图解财报 联络互动'
	},{
		name: '华鼎股份',
		type: 'kj',
		code: '601113.SH',
		ztUrl: '',
		ipoUrl: '',
		color: '#812b32',
		tjUrl: '图解财报 华鼎股份'
	},{
		name: '新维国际',
		type: 'kj',
		code: '08086.HK',
		ztUrl: '',
		ipoUrl: '',
		color: '#D49933',
		tjUrl: '图解财报 新维国际'
	},
]
