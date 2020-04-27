(function($){
	function CbModule () {

	}
	CbModule.prototype.getData = function(data, tt) {
		console.log(tt)
		data.forEach(function(ele) {
			for(var i in ele) {
				if(ele[i] && tt[i]) {
					tt[i][1] = true
				}
				
			}
		})
		var arr = this.hasKey(tt)
		console.log(arr)
		var dataArr = []
		var cbUrl = [];
		var zgsUrl = []
		data.forEach(function(ele) {
			var obj = {
				dtime: ele['dtime']
			};
			var num = 0
			for(var key in ele) {
				if(arr.arr.indexOf(key) != -1) {
					if(key != 'dtime') {
						if(ele[key]) {
							obj[key] = ele[key]
						}else {
							num++
							obj[key] = '-'
						}
					}
					
				}
				if(key == 'a128' && ele[key]) {
					zgsUrl.unshift({
						url: ele[key],
						name: ele['dtime'].split('Q')[0]
					})
				}
				if(key == 'a129' && ele[key]) {
					cbUrl.unshift({
						url: ele[key],
						name: ele['dtime']
					})

				}
			}
			if(num < arr.arr.length - 2) {
				dataArr.push(obj)
			}

			
		})
		dataArr.sort(function(a, b) {
			return parseInt(b.dtime.split('年')[0] + ( b.dtime.split('年Q')[1] || '5')) - parseInt(a.dtime.split('年')[0] + ( a.dtime.split('年Q')[1] || '5'))
		})
		return {
			keyArr: arr.arrName,
			data: dataArr,
			cbUrl: cbUrl,
			zgsUrl: zgsUrl
		}
	}
	CbModule.prototype.hasKey = function(data) {
		var arr = []
		var arrName = []
		for(var i in data) {
			if(data[i][1]) {
				arr.push(i)
				arrName.push(data[i][0] + (data[i][2] ? '（' + data[i][2] + '）' : '') )
			}
		}
		return {
			arr: arr,
			arrName: arrName
		}
	}
	CbModule.prototype.showEchartsMenuData = function(data, tt) {
		var obj = {};
		var prev = '';
		for(var key in tt) {
			if(key != 'dtime' && key != 'a124' && tt[key][1]) {
				var cur = tt[key][0]
				if(tt[prev] && cur.indexOf(tt[prev][0]) != -1 && cur.indexOf('增长') != -1) {
					obj[prev]['ydata2'] = []
					var time = obj[prev]['xdata']
					obj[prev]['name'] += '及同比增长率'
					obj[prev]['ydata2'] = this.getEchartsData(data, key, true, time)['ydata2']
					prev = '';
				}else {
					obj[key] = {}
					obj[key]['ydata1'] = []
					obj[key]['xdata'] = []
					obj[key]['name'] = cur
					obj[key]['dw'] = tt[key][2]
					var o = this.getEchartsData(data, key)
					obj[key]['ydata1'] = o['ydata1']
					obj[key]['xdata'] = o['xdata']
					prev = key
				}
			}
		}
		obj['coin'] = data[0]['a124'] || '人民币';
		return obj
	}
	CbModule.prototype.getEchartsData = function(data, key, isYdaya2, timeArr) {
		var obj = {}
		if(isYdaya2) {
			obj['ydata2'] = []
			timeArr.forEach(function(ele){
				var time = ele;
				data.forEach(function(item, index) {
					if(item['dtime'] == time) {
						obj['ydata2'].push(parseFloat(item[key]) )
					}
				})
			})
		}else {
			obj['xdata'] = []
			obj['ydata1'] = []
			data.forEach(function(ele, index) {
				if(ele[key]) {
					obj['ydata1'].push(parseFloat(ele[key]) )
					obj['xdata'].push(ele['dtime'])
				}
			})
		}
		return obj
	}

	window.cbModule = new CbModule()


})(jQuery)