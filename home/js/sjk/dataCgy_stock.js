var stockData = [
	{
		name: '上证指数',
		code: '000001.SH',
		codeJs: hq_str_sh000001,
		type: ['A股'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '深证成指',
		code: '399001.SZ',
		codeJs: hq_str_sz399001,
		type: ['A股'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '生意宝',
		code: '002095.SZ',
		codeJs: hq_str_sz002095,
		type: ['A股', '产业电商'],
		yb: '研报 生意宝',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/wsjr/'
	},{
		name: '焦点科技',
		code: '002315.SZ',
		codeJs: hq_str_sz002315,
		type: ['A股', '产业电商'],
		yb: '研报 生意宝',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/jdkj/'
	},{
		name: '上海钢联',
		code: '300226.SZ',
		codeJs: hq_str_sz300226,
		type: ['A股', '产业电商'],
		yb: '研报 上海钢联',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/shgl/'
	},{
		name: '*ST欧浦',
		code: '002711.SZ',
		codeJs: hq_str_sz002711,
		type: ['A股', '产业电商'],
		yb: '研报 欧浦智网',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/opzwIPO/'
	},{
		name: '苏宁易购',
		code: '002024.SZ',
		codeJs: hq_str_sz002024,
		type: ['A股', '零售电商'],
		yb: '研报 苏宁易购',
		kp: '快评 苏宁',
		ztUrl: 'http://www.100ec.cn/zt/qy_snys/'
	},{
		name: '南极电商',
		code: '002127.SZ',
		codeJs: hq_str_sz002127,
		type: ['A股', '零售电商'],
		yb: '研报 苏宁易购',
		kp: '快评 苏宁',
		ztUrl: 'http://www.100ec.cn/zt/qy_snys/'
	},{
		name: '御家汇',
		code: '300740.SZ',
		codeJs: hq_str_sz300740,
		type: ['A股', '零售电商'],
		yb: '研报 御家汇',
		kp: '',
		ztUrl: ''
	},{
		name: '跨境通',
		code: '002640.SZ',
		codeJs: hq_str_sz002640,
		type: ['A股', '跨境电商'],
		yb: '研报 跨境通',
		kp: '快评 跨境通',
		ztUrl: ''
	},{
		name: '广博股份',
		code: '002103.SZ',
		codeJs: hq_str_sz002103,
		type: ['A股', '跨境电商'],
		yb: '研报 广博股份',
		kp: '',
		ztUrl: ''
	},{
		name: '天泽信息',
		code: '300209.SZ',
		codeJs: hq_str_sz300209,
		type: ['A股', '跨境电商'],
		yb: '研报 天泽信息',
		kp: '',
		ztUrl: ''
	},{
		name: '华鼎股份',
		code: '601113.SH',
		codeJs: hq_str_sh601113,
		type: ['A股', '跨境电商'],
		yb: '研报 华鼎股份',
		kp: '',
		ztUrl: ''
	},{
		name: '联络互动',
		code: '002280.SZ',
		codeJs: hq_str_sz002280,
		type: ['A股', '跨境电商'],
		yb: '研报 联络互动',
		kp: '',
		ztUrl: ''
	},{
		name: '顺丰控股',
		code: '002352.SZ',
		codeJs: hq_str_sz002352,
		type: ['A股', '物流科技'],
		yb: '研报 顺丰控股',
		kp: '快评 顺丰',
		ztUrl: 'http://www.100ec.cn/zt/qy_sf/'
	},{
		name: '圆通速递',
		code: '600233.SH',
		codeJs: hq_str_sh600233,
		type: ['A股', '物流科技'],
		yb: '研报 圆通速递',
		kp: '',
		ztUrl: ''
	},{
		name: '申通快递',
		code: '002468.SZ',
		codeJs: hq_str_sz002468,
		type: ['A股', '物流科技'],
		yb: '研报 申通快递',
		kp: '',
		ztUrl: ''
	},{
		name: '韵达股份',
		code: '002120.SZ',
		codeJs: hq_str_sz002120,
		type: ['A股', '物流科技'],
		yb: '研报 韵达股份',
		kp: '',
		ztUrl: ''
	},{
		name: '德邦股份',
		code: '603056.SH',
		codeJs: hq_str_sh603056,
		type: ['A股', '物流科技'],
		yb: '研报 德邦股份',
		kp: '',
		ztUrl: ''
	},{
		name: 'ST冠福',
		code: '002102.SZ',
		codeJs: hq_str_sz002102,
		type: ['A股', '产业电商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/gfgfIPO/'
	},{
		name: '歌力思',
		code: '603808.SH',
		codeJs: hq_str_sh603808,
		type: ['A股', '服务商'],
		yb: '研报 歌力思',
		kp: '',
		ztUrl: ''
	},{
		name: '三只松鼠',
		code: '300783.SZ',
		codeJs: hq_str_sz300783,
		type: ['A股', '零售电商'],
		yb: '研报 三只松鼠',
		kp: '快评 三只松鼠',
		ztUrl: 'http://www.100ec.cn/zt/szssIPO/'
	},{
		name: '什么值得买',
		code: '300785.SZ',
		codeJs: hq_str_sz300785,
		type: ['A股', '零售电商'],
		yb: '研报 什么值得买',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/smzdmIPO/'
	},{
		name: '国联股份',
		code: '603613.SH',
		codeJs: hq_str_sh603613,
		type: ['A股', '产业电商'],
		yb: '研报 国联股份',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/smzdmIPO/'
	},{
		name: '腾讯控股',
		code: '00700.HK',
		codeJs: hq_str_hk00700,
		type: ['港股'],
		yb: '研报 腾讯控股',
		kp: '快评 腾讯',
		ztUrl: 'http://www.100ec.cn/zt/qy_txjr/'
	},{
		name: '慧聪集团',
		code: '02280.HK',
		codeJs: hq_str_hk02280,
		type: ['港股', '产业电商'],
		yb: '研报 慧聪',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/HC/'
	},{
		name: '科通芯城',
		code: '00400.HK',
		codeJs: hq_str_hk00400,
		type: ['港股', '产业电商'],
		yb: '研报 科通芯城',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/ktxcIPO/'
	},{
		name: '卓尔智联',
		code: '02098.HK',
		codeJs: hq_str_hk02098,
		type: ['港股', '产业电商'],
		yb: '研报 卓尔集团',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/zezl/'
	},{
		name: '国美零售',
		code: '00493.HK',
		codeJs: hq_str_hk00493,
		type: ['港股', '零售电商'],
		yb: '研报 国美',
		kp: '快评 国美',
		ztUrl: 'http://www.100ec.cn/zt/qy_gm/'
	},{
		name: '新维国际',
		code: '08086.HK',
		codeJs: hq_str_hk08086,
		type: ['港股', '跨境电商'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '神州租车',
		code: '00699.HK',
		codeJs: hq_str_hk00699,
		type: ['港股'],
		yb: '研报 神州租车',
		kp: '',
		ztUrl: ''
	},{
		name: '阿里影业',
		code: '01060.HK',
		codeJs: hq_str_hk01060,
		type: ['港股', '生活服务电商'],
		yb: '研报 阿里影业',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/wyzz/'
	},{
		name: '阿里健康',
		code: '00241.HK',
		codeJs: hq_str_hk00241,
		type: ['港股', '生活服务电商'],
		yb: '研报 阿里健康',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/newrules/'
	},{
		name: '众安在线',
		code: '06060.HK',
		codeJs: hq_str_hk06060,
		type: ['港股', '金融科技'],
		yb: '研报 众安',
		kp: '快评 众安在线',
		ztUrl: ''
	},{
		name: '易鑫集团',
		code: '02858.HK',
		codeJs: hq_str_hk02858,
		type: ['港股', '金融科技'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '有赞',
		code: '08083.HK',
		codeJs: hq_str_hk08083,
		type: ['港股', '零售电商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/shejiao/'
	},{
		name: '平安好医生',
		code: '01833.HK',
		codeJs: hq_str_hk01833,
		type: ['港股', '生活服务电商'],
		yb: '研报 平安好医生',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/pahys/'
	},{
		name: '小米集团',
		code: '01810.HK',
		codeJs: hq_str_hk01810,
		type: ['港股', '零售电商'],
		yb: '研报 小米',
		kp: '快评 小米',
		ztUrl: 'http://www.100ec.cn/zt/qy_xm2/'
	},{
		name: '齐屹科技',
		code: '01810.HK',
		codeJs: hq_str_hk01810,
		type: ['港股', '生活服务电商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/qjw/'
	},{
		name: '汇付天下',
		code: '01806.HK',
		codeJs: hq_str_hk01806,
		type: ['港股', '金融科技'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '51信用卡',
		code: '02051.HK',
		codeJs: hq_str_hk02051,
		type: ['港股', '金融科技'],
		yb: '研报 51信用卡',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/51xyk/'
	},{
		name: '维信金科',
		code: '02003.HK',
		codeJs: hq_str_hk02003,
		type: ['港股', '金融科技'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '美团点评',
		code: '03690.HK',
		codeJs: hq_str_hk03690,
		type: ['港股', '生活服务电商'],
		yb: '研报 美团',
		kp: '快评 美团',
		ztUrl: 'http://www.100ec.cn/zt/mtIPO/'
	},{
		name: '同程艺龙',
		code: '00780.HK',
		codeJs: hq_str_hk00780,
		type: ['港股', '生活服务电商'],
		yb: '研报 同程艺龙',
		kp: '快评 同程艺龙',
		ztUrl: 'http://www.100ec.cn/zt/tcylIPO/'
	},{
		name: '宝宝树集团',
		code: '01761.HK',
		codeJs: hq_str_hk01761,
		type: ['港股', '零售电商'],
		yb: '研报 宝宝树',
		kp: '快评 宝宝树',
		ztUrl: 'http://www.100ec.cn/zt/BBS/'
	},{
		name: '微盟集团',
		code: '02013.HK',
		codeJs: hq_str_hk02013,
		type: ['港股', '服务商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/wbIPO/'
	},{
		name: '新东方在线',
		code: '01797.HK',
		codeJs: hq_str_hk01797,
		type: ['港股', '生活服务电商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/xdfzxIPO/'
	},{
		name: '猫眼娱乐',
		code: '01896.HK',
		codeJs: hq_str_hk01896,
		type: ['港股', '生活服务电商'],
		yb: '研报 猫眼娱乐',
		kp: '快评 猫眼娱乐',
		ztUrl: 'http://www.100ec.cn/zt/myIPO/'
	},{
		name: '网易',
		code: 'NTES.N',
		codeJs: hq_str_gb_ntes,
		type: ['美股'],
		yb: '研报 网易',
		kp: '快评 网易',
		ztUrl: 'http://www.100ec.cn/zt/qy_wy/'
	},{
		name: '百度',
		code: 'BIDU.N',
		codeJs: hq_str_gb_bidu,
		type: ['美股'],
		yb: '研报 百度',
		kp: '快评 百度',
		ztUrl: 'http://www.100ec.cn/zt/qy_bd/'
	},{
		name: '腾讯',
		code: 'TCEHY.N',
		codeJs: hq_str_gb_tcehy,
		type: ['美股'],
		yb: '研报 腾讯',
		kp: '快评 腾讯',
		ztUrl: 'http://www.100ec.cn/zt/qy_txjr/'
	},{
		name: '阿里巴巴',
		code: 'BABA.N',
		codeJs: hq_str_gb_baba,
		type: ['美股', '零售电商'],
		yb: '研报 阿里巴巴',
		kp: '快评 阿里巴巴',
		ztUrl: 'http://www.100ec.cn/zt/almt/'
	},{
		name: '京东',
		code: 'JD.N',
		codeJs: hq_str_gb_jd,
		type: ['美股', '零售电商'],
		yb: '研报 京东',
		kp: '快评 京东',
		ztUrl: 'http://www.100ec.cn/zt/qy_jd/'
	},{
		name: '唯品会',
		code: 'VIPS.N',
		codeJs: hq_str_gb_vips,
		type: ['美股', '零售电商'],
		yb: '研报 唯品会',
		kp: '快评 唯品会',
		ztUrl: 'http://www.100ec.cn/zt/qy_wph/'
	},{
		name: '寺库',
		code: 'SECO.N',
		codeJs: hq_str_gb_seco,
		type: ['美股', '零售电商'],
		yb: '研报 寺库',
		kp: '快评 寺库',
		ztUrl: 'http://www.100ec.cn/zt/skipo/'
	},{
		name: '聚美优品',
		code: 'JMEI.N',
		codeJs: hq_str_gb_jmei,
		type: ['美股', '零售电商'],
		yb: '研报 聚美优品',
		kp: '快评 聚美优品',
		ztUrl: 'http://www.100ec.cn/zt/jmyp2/'
	},{
		name: '宝尊电商',
		code: 'BZUN.N',
		codeJs: hq_str_gb_bzun,
		type: ['美股', '服务商'],
		yb: '研报 宝尊电商',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/bzIPO/'
	},{
		name: '兰亭集势',
		code: 'LITB.N',
		codeJs: hq_str_gb_litb,
		type: ['美股', '跨境电商'],
		yb: '研报 兰亭集势',
		kp: '快评 兰亭集势',
		ztUrl: 'http://www.100ec.cn/zt/anl_ltjs/'
	},{
		name: '携程',
		code: 'CTRP.N',
		codeJs: hq_str_gb_ctrp,
		type: ['美股', '生活服务电商'],
		yb: '研报 携程',
		kp: '快评 携程',
		ztUrl: 'http://www.100ec.cn/zt/qy_xc/'
	},{
		name: '途牛',
		code: 'TOUR.N',
		codeJs: hq_str_gb_tour,
		type: ['美股', '生活服务电商'],
		yb: '研报 途牛',
		kp: '快评 途牛',
		ztUrl: 'http://www.100ec.cn/zt/tn/'
	},{
		name: '58同城',
		code: 'WUBA.N',
		codeJs: hq_str_gb_wuba,
		type: ['美股', '生活服务电商'],
		yb: '研报 58同城',
		kp: '快评 58同城',
		ztUrl: 'http://www.100ec.cn/zt/58tc/'
	},{
		name: '房天下',
		code: 'SFUN.N',
		codeJs: hq_str_gb_sfun,
		type: ['美股', '生活服务电商'],
		yb: '研报 搜房网',
		kp: '',
		ztUrl: ''
	},{
		name: '前程无忧',
		code: 'JOBS.N',
		codeJs: hq_str_gb_jobs,
		type: ['美股', '生活服务电商'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '无忧英语',
		code: 'COE.N',
		codeJs: hq_str_gb_coe,
		type: ['美股', '生活服务电商'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '乐居',
		code: 'LEJU.N',
		codeJs: hq_str_gb_leju,
		type: ['美股', '生活服务电商'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '中通',
		code: 'ZTO.N',
		codeJs: hq_str_gb_zto,
		type: ['美股', '物流科技'],
		yb: '研报 中通',
		kp: '',
		ztUrl: ''
	},{
		name: '百世',
		code: 'BSTI.N',
		codeJs: hq_str_gb_bsti,
		type: ['美股', '物流科技'],
		yb: '研报 百世',
		kp: '快评 百世',
		ztUrl: ''
	},{
		name: '宜人贷',
		code: 'YRD.N',
		codeJs: hq_str_gb_yrd,
		type: ['美股', '金融科技'],
		yb: '研报 宜人贷',
		kp: '',
		ztUrl: ''
	},{
		name: '趣店',
		code: 'QD.N',
		codeJs: hq_str_gb_qd,
		type: ['美股', '零售电商'],
		yb: '研报 趣店',
		kp: '快评 趣店',
		ztUrl: 'http://www.100ec.cn/zt/qdipo/'
	},{
		name: '拍拍贷',
		code: 'PPDF.N',
		codeJs: hq_str_gb_ppdf,
		type: ['美股', '金融科技'],
		yb: '研报 拍拍贷',
		kp: '',
		ztUrl: ''
	},{
		name: '乐信',
		code: 'LX.N',
		codeJs: hq_str_gb_lx,
		type: ['美股', '零售电商'],
		yb: '研报 乐信',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/lx/'
	},{
		name: '简普科技',
		code: 'JT.N',
		codeJs: hq_str_gb_jt,
		type: ['美股', '金融科技'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '和信贷',
		code: 'HX.N',
		codeJs: hq_str_gb_hx,
		type: ['美股', '金融科技'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '信而富',
		code: 'XRF.N',
		codeJs: hq_str_gb_xrf,
		type: ['美股', '金融科技'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '优信',
		code: 'UXIN.N',
		codeJs: hq_str_gb_uxin,
		type: ['美股', '零售电商'],
		yb: '',
		kp: '快评 优信',
		ztUrl: 'http://www.100ec.cn/zt/yx/'
	},{
		name: '拼多多',
		code: 'PDD.N',
		codeJs: hq_str_gb_pdd,
		type: ['美股', '零售电商'],
		yb: '研报 拼多多',
		kp: '快评 拼多多',
		ztUrl: 'http://www.100ec.cn/zt/pddIPO/'
	},{
		name: '1药网',
		code: 'YI.N',
		codeJs: hq_str_gb_yi,
		type: ['美股', '零售电商'],
		yb: '',
		kp: '快评 1药网',
		ztUrl: 'http://www.100ec.cn/zt/ywIPO/'
	},{
		name: '品钛',
		code: 'PT.N',
		codeJs: hq_str_gb_pt,
		type: ['美股'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '微贷网',
		code: 'WEI.N',
		codeJs: hq_str_gb_wei,
		type: ['美股', '金融科技'],
		yb: '',
		kp: '快评 微贷网',
		ztUrl: 'http://www.100ec.cn/zt/wdwIPO/'
	},{
		name: '团车网',
		code: 'TC.N',
		codeJs: hq_str_gb_tc,
		type: ['美股', '零售电商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/tcwIPO/'
	},{
		name: '蘑菇街',
		code: 'MOGU.N',
		codeJs: hq_str_gb_mogu,
		type: ['美股', '零售电商'],
		yb: '研报 蘑菇街',
		kp: '快评 蘑菇街',
		ztUrl: 'http://www.100ec.cn/zt/mlleIPO/'
	},{
		name: '360金融',
		code: 'QFIN.N',
		codeJs: hq_str_gb_qfin,
		type: ['美股', '金融科技'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/360jrIPO/'
	},{
		name: '小赢科技',
		code: 'XYF.N',
		codeJs: hq_str_gb_xyf,
		type: ['美股', '金融科技'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '点牛金融',
		code: 'DNJR.N',
		codeJs: hq_str_gb_dnjr,
		type: ['美股', '金融科技'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '爱鸿森',
		code: 'AIHS.N',
		codeJs: hq_str_gb_aihs,
		type: ['美股', '金融科技'],
		yb: '',
		kp: '',
		ztUrl: ''
	},{
		name: '如涵',
		code: 'RUHN.N',
		codeJs: hq_str_gb_ruhn,
		type: ['美股', '零售电商'],
		yb: '研报 如涵',
		kp: '快评 如涵',
		ztUrl: 'http://www.100ec.cn/zt/rhIPO/'
	},{
		name: '云集',
		code: 'YJ.N',
		codeJs: hq_str_gb_yj,
		type: ['美股', '零售电商'],
		yb: '研报 云集',
		kp: '快评 云集',
		ztUrl: 'http://www.100ec.cn/zt/yjIPO/'
	},{
		name: '新氧',
		code: 'SY.N',
		codeJs: hq_str_gb_sy,
		type: ['美股', '生活服务电商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/xyIPO/'
	},{
		name: '瑞幸咖啡',
		code: 'LK.N',
		codeJs: hq_str_gb_lk,
		type: ['美股', '生活服务电商'],
		yb: '研报 瑞幸咖啡',
		kp: '快评 瑞幸咖啡',
		ztUrl: 'http://www.100ec.cn/zt/rxkfIPO/'
	},{
		name: '跟谁学',
		code: 'GSX.N',
		codeJs: hq_str_gb_gsx,
		type: ['美股', '生活服务电商'],
		yb: '研报 跟谁学',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/gsxIPO/'
	},{
		name: '小熊电器',
		code: '002959.SZ',
		codeJs: hq_str_sz002959,
		type: ['A股', '零售电商'],
		yb: '研报 小熊电器',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/xxdqIPO/'
	},{
		name: '品钛',
		code: 'PT.N',
		codeJs: hq_str_gb_pt,
		type: ['美股', '金融科技'],
		yb: '研报 品钛',
		kp: '',
		ztUrl: '',
	},{
		name: '壹网壹创',
		code: '300792.SZ',
		codeJs: hq_str_sz300792,
		type: ['A股', '服务商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/ywycIPO/'
	},{
		name: '房多多',
		code: 'DUO.N',
		codeJs: hq_str_gb_duo,
		type: ['美股', '生活服务电商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/sfwIPO/',
	},{
		name: '青客公寓',
		code: 'QK.N',
		codeJs: hq_str_gb_qk,
		type: ['美股', '生活服务电商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/qkgyIPO/',
	},{
		name: '网易有道',
		code: 'DAO.N',
		codeJs: hq_str_gb_dao,
		type: ['美股','生活服务电商'],
		yb: '研报 网易有道',
		kp: '快评 网易有道',
		ztUrl: 'http://www.100ec.cn/zt/wyydIPO/'
	},{
		name: '壹账通',
		code: 'OCFT.N',
		codeJs: hq_str_gb_ocft,
		type: ['美股','金融科技'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/yztIPO/'
	},{
		name: '摩贝',
		code: 'MKD.N',
		codeJs: hq_str_gb_mkd,
		type: ['美股','产业电商'],
		yb: '',
		kp: '',
		ztUrl: 'http://www.100ec.cn/zt/mbIPO/'
	},
]