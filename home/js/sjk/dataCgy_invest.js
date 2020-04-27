var dataTypeInvest = [
		{
			k: 'name',
			text: '融资方',
		},{
			k: 'cate',
			text: '行业',
		},{
			k: 'shares',
			text: '融资轮次',
		},{
			k: 'a100',
			text: '融资金额',
		},{
			k: 'a101',
			text: '币种',
		},{
			k: 'a102',
			text: '投资方',
		},{
			k: 'a103',
			text: '领域',
		},{
			k: 'a104',
			text: '年份',
		},{
			k: 'a105',
			text: '月份',
		},{
			k: 'a106',
			text: '省份',
		},{
			k: 'a107',
			text: '城市',
		},{
			k: 'dtime',
			text: '融资时间',
		},
	]


var dataField = [
		{
			title: '全部',
			id: '',
			children: [{
				title: '全部',
				id: '',
			},]
		},{
			title: '零售电商',
			id: 'b2c',
			children: [{
				title: '全部',
				id: '',
			},{
				title: '综合电商',
				id: 'zh',
			},{
				title: '社交电商',
				id: 'sj',
			},{
				title: '社区电商',
				id: 'sq',
			},{
				title: '农村电商',
				id: 'nc',
			},{
				title: '医药电商',
				id: 'yy',
			},{
				title: '生鲜电商',
				id: 'sx',
			},{
				title: '无人零售',
				id: 'wrls',
			},{
				title: '奢侈品电商',
				id: 'scp',
			},{
				title: '汽车电商',
				id: 'qc',
			},{
				title: '母婴电商',
				id: 'my',
			},{
				title: '二手电商',
				id: 'es',
			},{
				title: '导购电商',
				id: 'dg',
			},{
				title: '食品电商',
				id: 'sp',
			},{
				title: '宠物电商',
				id: 'cw',
			},{
				title: '众筹电商',
				id: 'zc',
			},{
				title: '分期电商',
				id: 'fq',
			},{
				title: '服装电商',
				id: 'fz',
			},{
				title: '电商服务商',
				id: 'fws',
			},{
				title: '美妆电商',
				id: 'mz',
			},{
				title: '酒水电商',
				id: 'js',
			},]
		},{
			title: '产业电商',
			id: 'b2b',
			children: [{
				title: '全部',
				id: '',
			},{
				title: '综合B2B',
				id: 'zhb2b',
			},{
				title: '钢铁电商',
				id: 'gt',
			},{
				title: '塑化电商',
				id: 'sh',
			},{
				title: '农业B2B',
				id: 'ny',
			},{
				title: '汽车B2B',
				id: 'qc',
			},{
				title: '纺服B2B',
				id: 'ff',
			},{
				title: '能源电商',
				id: 'ny',
			},{
				title: '建材电商',
				id: 'jc',
			},{
				title: '印包电商',
				id: 'yb',
			},{
				title: '医疗电商',
				id: 'yl',
			},{
				title: '餐饮电商',
				id: 'cy',
			},{
				title: '快消品B2B',
				id: 'kxp',
			},{
				title: '工业品电商',
				id: 'gyp',
			},{
				title: '元器件电商',
				id: 'yqj',
			},{
				title: '其他电商',
				id: 'qt',
			},]
		},{
			title: '跨境电商',
			id: 'kj',
			children: [{
				title: '全部',
				id: '',
			},{
				title: '进口电商',
				id: 'jk',
			},{
				title: '出口电商',
				id: 'ck',
			},{
				title: '跨境服务商',
				id: 'kjfws',
			},]
		},{
			title: '生活服务电商',
			id: 'o2o',
			children: [{
				title: '全部',
				id: '',
			},{
				title: '在线教育',
				id: 'zxjy',
			},{
				title: '在线住宿',
				id: 'zxzs',
			},{
				title: '在线医疗',
				id: 'zxyl',
			},{
				title: '在线旅游',
				id: 'zxly',
			},{
				title: '社区服务',
				id: 'sqfw',
			},{
				title: '在线票务',
				id: 'zxpw',
			},{
				title: '交通出行',
				id: 'jtcx',
			},{
				title: '餐饮外卖',
				id: 'cywm',
			},{
				title: '家政服务',
				id: 'jzfw',
			},{
				title: '美业服务',
				id: 'myfw',
			},{
				title: '共享经济',
				id: 'gxjj',
			},{
				title: '运动健身',
				id: 'ydjs',
			},{
				title: '其他',
				id: 'qt',
			},]
		},{
			title: '物流科技',
			id: 'wl',
			children: [{
				title: '全部',
				id: '',
			},{
				title: '物流网络',
				id: 'wlwl',
			},{
				title: '电商自建物流',
				id: 'zjwl',
			},{
				title: '第三方快递',
				id: 'dsfkd',
			},{
				title: '智能快递柜',
				id: 'znkdg',
			},{
				title: '众包物流',
				id: 'zbwl',
			},{
				title: '仓储物流',
				id: 'ccwl',
			},{
				title: '货运O2O',
				id: 'hyo2o',
			},{
				title: '同城配送',
				id: 'tcps',
			},{
				title: '跨境物流',
				id: 'kjwl',
			},{
				title: '智能物流',
				id: 'znwl',
			},]
		},
		// {
		// 	title: '在线教育',
		// 	id: 'jy',
		// 	children: [{
		// 		title: '',
		// 		id: '',
		// 	},]
		// },
	]


var dataRound =[
		{
			title: '全部',
			id: ''
		},
		{
			title: '未透露',
			id: '未透露'
		},
		{
			title: '天使轮',
			id: '天使'
		},
		{
			title: '种子轮',
			id: '种子'
		},
		// {
		// 	title: '首轮',
		// 	id: '首轮'
		// },
		{
			title: 'A级',
			id: 'A'
		},
		{
			title: 'B级',
			id: 'B'
		},
		{
			title: 'C级',
			id: 'C'
		},
		{
			title: 'D级',
			id: 'D'
		},
		{
			title: 'E级',
			id: 'E'
		},
		{
			title: 'F级',
			id: 'F'
		},
		{
			title: 'H级',
			id: 'H'
		},
		{
			title: 'IPO上市',
			id: 'IPO'
		},
		{
			title: '战略投资',
			id: '战略投资'
		},
		{
			title: '并购',
			id: '并购'
		},
	]

var dataMoney = [
		{
			title: ['数十万'],
			number: '20万'
		},
		{
			title: ['千万元', '千万级', '千万', '近千万', '近千万元'],
			number: '1000万'
		},
		{
			title: ['数千万', '千万元', '千万级', '数千万元', '千万', '近千万'],
			number: '2000万'
		},
		{
			title: ['数百万', '百万级', '数百万元'],
			number: '200万'
		},
		{
			title: ['未透露', '暂未透露', '金额未透露'],
			number: '0'
		},
		{
			title: ['亿元及以上', '数亿', '超亿元', '近亿', '数亿元', '近亿元', '亿级'],
			number: '1亿'
		},
		{
			title: ['数十亿'],
			number: '20亿'
		},
		{
			title: ['数百亿'],
			number: '200亿'
		},
		{
			title: ['数千亿'],
			number: '2000亿'
		},
	]