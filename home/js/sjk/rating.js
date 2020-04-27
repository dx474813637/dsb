if(!window.myPlugin) {
	window.myPlugin = {}
}

window.myPlugin.rating = function(config){
	if(!config.rating) {
		config.rating = 0
	}
	var defaultConfig = {
		ele: null,
		rating: 0,
		limit: 5,
		isShowMsg: false,
		msg: ''
	}

	var newConfig = Object.assign({}, defaultConfig, config)

	var tar = document.getElementById(newConfig.ele.slice(1))

	initStyle();

	createDom();

	

	function initStyle() {
		tar.innerHTML = '';
		var tarStyle = getComputedStyle(tar)
		if(tarStyle.position == 'static') {
			tar.style.position = 'relative'
		}
		if(newConfig.isShowMsg) {
			bindEvent()
		}
	}

	function bindEvent() {
		tar.addEventListener('mouseenter', function(){
			tar.children[tar.children.length - 1].style.display = 'block'
			
		})
		tar.addEventListener('mouseleave', function(){
			tar.children[tar.children.length - 1].style.display = 'none'
			
		})
	}

	function createDom() {
		var len = newConfig.limit;
		for(var i = 0; i < len ; i++) {
			var rateDiv = document.createElement('div')
			if(i < newConfig.rating) {
				if(newConfig.rating - i < 1) {
					rateDiv.style.backgroundImage = 'url("/Public/home/images/icon-rate5.png")'
				}else {
					rateDiv.style.backgroundImage = 'url("/Public/home/images/icon-rate.png")'
				}
				
			}else {
				rateDiv.style.backgroundImage = 'url("/Public/home/images/icon-rate2.png")';
			}
			rateDiv.style.backgroundRepeat = 'no-repeat';
			rateDiv.style.backgroundPosition = 'center';
			rateDiv.style.backgroundSize = '18px 18px'
			rateDiv.style.display = 'inline-block';
			rateDiv.style.width = '20px';
			rateDiv.style.height = '20px';
			rateDiv.style.verticalAlign = 'middle';
			tar.appendChild(rateDiv)
		}

		if(newConfig.isShowMsg) {
			createMsgDom(newConfig.msg)
		}

	}

	function createMsgDom(msg) {

		var msgBox = document.createElement('div')
		msgBox.innerHTML = msg;
		msgBox.style.position = 'absolute';
		msgBox.style.backgroundColor = '#fff';
		msgBox.style.top = '100%';
		msgBox.style.left = '0';
		msgBox.style.display = 'none';
		msgBox.style.zIndex = '200';
		msgBox.style.borderRadius = '3px';
		msgBox.style.padding = '5px';
		msgBox.style.boxShadow = '0 0 5px rgba(0,0,0,.5)';
		msgBox.style.whiteSpace = 'nowrap';
		msgBox.style.color = '#666';

		tar.appendChild(msgBox)

	}






}