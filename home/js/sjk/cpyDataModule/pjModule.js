(function($){
	function PjModule () {

	}
	PjModule.prototype.renderPjTimeData = function(data) {
		var arr = []
		// console.log(dataTime)
		for(var key in data) {
			var name = key.indexOf('618') == -1 ? key.slice(5) : key.slice(4);
			if(name != 'today' && name != 'second_half' && data[key].length != 0) {
				arr.push({
					key: key,
					text: this.dateToString(key, name),
					title: this.dateToString(key, name),
				})
			}
			
		}
		return arr
	}
	PjModule.prototype.dateToString = function(data, key) {
		var str = '';
		str = data.split('_')[0] + '年' + dataTime.filter(function(ele){
			return key == ele['id']
		})[0]['text']
		
		return str
	}

	window.pjModule = new PjModule()
})(jQuery)