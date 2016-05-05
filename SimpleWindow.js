
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

		this._setStatus();
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

	
	_setStatus : function(argument) {
		var opts = this.options;

		this.moveTo(opts.left, opts.top);
		this.resizeTo(opts.width, opts.height);

		this.show();

		this.maximize();

		this.collapse();

		this.setDragAble();
	},

	// 设置可拖动
	setDragAble : function(argument) {
		var _self = this;

		Util.event.on(_self.winHeader, "mousedown", dragDown);

		var startPosition, // 窗口起始位置
			startAxis	// 鼠标起始位置

		// 点击拖动绑定
		function dragDown(e) {
			e = Util.event.getEvent(e);

			startAxis = Util.event.getPageAxis(e);
			startPosition = {
				left : _self.options.left,
				top : _self.options.top
			}

			Util.event.on(document, 'mousemove', dragMove);
			Util.event.on(document, 'mouseup', dragStop);
		}

		// 移动过程
		function dragMove(e) {
			e = Util.event.getEvent(e);
			var endAxis =  Util.event.getPageAxis(e);

			var changedAxis = {
				x : endAxis.x - startAxis.x,
				y : endAxis.y - startAxis.y
			}

			_self.moveTo(
				startPosition.left + changedAxis.x,
				startPosition.top + changedAxis.y
			);
		}

		// 停止拖动
		function dragStop(e){
			e = Util.event.getEvent(e);
			Util.event.off(document, 'mousemove', dragMove)
			Util.event.off(document, 'mouseup', dragStop)
		}
	},


	// 移动到指定位置
	moveTo : function(left, top) {
		var style = this.winElement.style;
		left !== null && (style.left = left + "px", this.options.left = left);
		top !== null && (style.top = top + "px", this.options.top = top);
	},

	// 改变大小
	resizeTo : function(width, height) {
		var style = this.winElement.style;
		width !== null && (style.width = width + "px");
		height !== null && (style.height = height + "px");
	},


	// 设置显示状态
	show : function(isShow) {
		isShow = isShow === undefined ? this.options.isVisible : isShow;
		this.winElement.style.display = (isShow ? "block" : "none");
		this.isVisible = isShow;
	},

	// 切换显示状态
	toggle : function() {
		this.show[!this.isVisible]()
	},

	// 最大化窗口
	maximize : function() {
		
	},

	// 恢复窗口大小
	restore : function() {
		// body...
	},

	// 折叠窗口
	collapse : function() {
		
	},

	// 销毁窗口
	destory : function() {
		this.winElement.parentNode.removeChild(this.winElement);
	}

}






