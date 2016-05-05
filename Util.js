var Util = {

	event : {

		on : function(element, type, handler) {
			if (element.addEventListener) {
				element.addEventListener(type, handler, false);
			} else if (element.attachEvent) {
			} else {
				element['on' + type] = handler;
			}
		},
		off : function(element, type, handler){
	        if (element.removeEventListener){
	            element.removeEventListener(type, handler, false);
	        } else if (element.detachEvent){
	            element.detachEvent('on' + type, handler);
	        } else {
	            element['on' + type] = null;
	        }
	    },
		getEvent : function (e) {
			return e || window.event;
		},

		getPageAxis: function(event) {

		    if(event.pageX || event.pageY){
		        return {
		            x : event.pageX,
		            y : event.pageY
		        }
		    }

		    var doc = document.documentElement;
		    var body = document.body;

		    return {
		        x : event.clientX +
		            ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
		            ( doc && doc.clientLeft || body && body.clientLeft || 0 ),
		        y : event.clientY +
		            ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
		            ( doc && doc.clientTop  || body && body.clientTop  || 0 )
		    }
		}
	},

	extend : function () {
		var result = {}
		for(var i = 0, j = arguments.length; i < j; i++){
			for (var p in arguments[i]) {
		        if (arguments[i].hasOwnProperty(p)) {
		            result[p] = arguments[i][p];
		        }
		    }
		}
	    return result;
	}

}