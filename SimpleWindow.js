
SimpleWindow.defaultOptions = {

	isVisible : true, 	// 是否可见
	isDragable : true,	// 是否可拖动
	isScalable : true,	// 是否可缩放大小
	isCollapse : false,	// 是否缩起
	isMaximize : false, // 是否最大化

	parent : document.body,

	width: 300,
    height: 300,
    left: 200,
    top: 200,

    header : "title",
    body : "body",
    footer : "footer"


}

function SimpleWindow(opts) {

	
	var options = this.constructor.defaultOptions;

	// 扩展默认参数
	this.options = Util.extend(options,opts);

	// 初始化
	this.init();
}



SimpleWindow.prototype = {

	constructor : SimpleWindow,

	// 初始化
	init : function() {
		this._create();
	},

	// 创建窗口
	_create : function () {

		// simple-window
		var winElement = this.winElement = document.createElement('div');
		winElement.className = "simple-window";

		// simple-window-container
		var winContainer = this.winContainer = document.createElement('div');
		winContainer.className = "simple-window-container";
		winElement.appendChild(winContainer);

		// simple-window-header
		var winHeader = this.winHeader = document.createElement('div');
		winHeader.className = "simple-window-header";
		winContainer.appendChild(winHeader);

		// simple-window-body
		var winBody = this.winBody = document.createElement('div');
		winBody.className = "simple-window-body";
		winContainer.appendChild(winBody);

		// simple-window-footer
		var winFooter = this.winFooter = document.createElement('div');
		winFooter.className = "simple-window-footer";
		winContainer.appendChild(winFooter);

		this.parent.appendChild(winElement);
	},

	// 销毁窗口
	destory : function() {
		
	},


	// 移动到指定位置
	moveTo : function(left, top) {
		
	},

	// 改变大小
	resizeTo : function(width, height) {
		
	},




	// 显示
	show : function() {
		
	},

	hide : function() {
		
	},

	// 切换显示状态
	toggle : function() {
		this[this.isVisible ? "hide" : "show"]()
	}




}






