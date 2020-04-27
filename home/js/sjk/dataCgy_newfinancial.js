var dataType = {
	dtime: ['时间',false, ''],
	shares: ['营收',false, '万元'],
	a100: ['净利润', false, '万元'],
	a101: ['总资产',false, '万元'],
	a102: ['净资产',false, '万元'],
};
var apiurl = '/Home/Index/newfinancial_json?name='

var cpyData = [
	{
		name: '壹玖壹玖',
		type: 'B2C',
		code: '830993',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '康泽药业',
		type: 'B2C',
		code: '831397',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '家电网',
		type: 'B2C',
		code: '836694',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '酒便利',
		type: 'B2C',
		code: '838883',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '猫诚股份',
		type: 'B2C',
		code: '834500',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '乐汇电商',
		type: 'B2C',
		code: '837989',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '喜宝动力',
		type: 'B2C',
		code: '832115',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '昆汀科技',
		type: 'B2C',
		code: '871115',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '他趣股份',
		type: 'B2C',
		code: '837472',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '优雅电商',
		type: 'B2C',
		code: '836093',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '全网数商',
		type: 'B2C',
		code: '430182 ',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '红酒世界',
		type: 'B2C',
		code: '834528',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '网娘电商',
		type: 'B2C',
		code: '839992',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '悦为电商',
		type: 'B2C',
		code: '833458',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '春水堂',
		type: 'B2C',
		code: '839466',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '唯车电商',
		type: 'B2C',
		code: '872019',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '茶人岭',
		type: 'B2C',
		code: '836369',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '奥斯马特',
		type: 'B2C',
		code: '831806',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '桃花坞',
		type: 'B2C',
		code: '838664',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '速普电商',
		type: 'B2C',
		code: '836998',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '钢银电商',
		type: 'B2B',
		code: '835092',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '钢宝股份',
		type: 'B2B',
		code: '834429',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '浩德钢圈',
		type: 'B2B',
		code: '870517',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '中钢网',
		type: 'B2B',
		code: '831727',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '中钢电商',
		type: 'B2B',
		code: '838537',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '报春电商',
		type: 'B2B',
		code: '835136',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '钢之家',
		type: 'B2B',
		code: '834583',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '锦桥电商',
		type: 'B2B',
		code: '872705',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '信立方',
		type: 'B2B',
		code: '831401',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '搜了网络',
		type: 'B2B',
		code: '834293',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '中塑在线',
		type: 'B2B',
		code: '833736',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '讯网网络',
		type: 'B2B',
		code: '839825',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '滨兴科技',
		type: 'B2B',
		code: '839880',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '神州优车',
		type: 'O2O',
		code: '838006',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '骏途网',
		type: 'O2O',
		code: '839202',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '差旅天下',
		type: 'O2O',
		code: '430578',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '虎凤蝶',
		type: 'O2O',
		code: '837815',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '留成网',
		type: 'O2O',
		code: '836400',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '淘车无忧',
		type: 'O2O',
		code: '870689',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '小马科技',
		type: 'O2O',
		code: '836827 ',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '爱车坊',
		type: 'O2O',
		code: '837300',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '世贸通',
		type: 'kj',
		code: '834896',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '渝欧股份',
		type: 'kj',
		code: '873017',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '遨森电商',
		type: 'kj',
		code: '873076',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '宝贝格子',
		type: 'kj',
		code: '834802',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '百事泰',
		type: 'kj',
		code: '833663',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '宝信环球',
		type: 'kj',
		code: '870961',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '理德铭',
		type: 'kj',
		code: '872560',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '跨境翼',
		type: 'kj',
		code: '838774',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '五五海淘',
		type: 'kj',
		code: '871840',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '择尚科技',
		type: 'kj',
		code: '834101',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '淘淘羊',
		type: 'kj',
		code: '871014',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},{
		name: '万方网络',
		type: 'kj',
		code: '870462',
		ztUrl: '',
		ipoUrl: '',
		color: '',
	},
]
