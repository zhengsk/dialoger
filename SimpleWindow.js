
SimpleWindow.defaultOptions = {

	isVisible : true, 	// 是否可见
	isDragable : true,	// 是否可拖动
	isScalable : true,	// 是否可缩放大小
	isCollapse : false,	// 是否缩起
	isMaximize : false, // 是否最大化

	zIndex : 1000,

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
		var opts = this.options;

		this._create(); // 创建窗口元素

		this.moveTo(opts.left, opts.top);
		this.resizeTo(opts.width, opts.height);
	},

	// 创建窗口
	_create : function () {
		var opts = this.options;

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
		winHeader.innerHTML = opts.header;
		winContainer.appendChild(winHeader);

		// simple-window-body
		var winBody = this.winBody = document.createElement('div');
		winBody.className = "simple-window-body";
		winBody.innerHTML = opts.body;
		winContainer.appendChild(winBody);

		// simple-window-footer
		var winFooter = this.winFooter = document.createElement('div');
		winFooter.className = "simple-window-footer";
		winFooter.innerHTML = opts.footer;
		winContainer.appendChild(winFooter);

		this.options.parent.appendChild(winElement);
	},

	


	// 移动到指定位置
	moveTo : function(left, top) {
		var style = this.winElement.style;
		left !== null && (style.left = left + "px");
		top !== null && (style.top = top + "px");
	},

	// 改变大小
	resizeTo : function(width, height) {
		var style = this.winElement.style;
		width !== null && (style.width = width + "px");
		height !== null && (style.height = height + "px");
	},




	// 显示
	show : function() {
		this.winElement.style.display = "block";
		this.isVisible = false;
	},

	hide : function() {
		this.winElement.style.display = "none";
		this.isVisible = true;
	},

	// 切换显示状态
	toggle : function() {
		this[this.isVisible ? "hide" : "show"]()
	},


	// 销毁窗口
	destory : function() {
		this.winElement.parentNode.removeChild(this.winElement);
	}

}






