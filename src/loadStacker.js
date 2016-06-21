(function () {
	var stack = [],
		readyFired = false;

	window.ready = function(func) {
		if(readyFired) window.setTimeout(func,1);
		else {
			stack.push(func);
		}
	}

	function fireReady() {
		readyFired = true;
		for (var i = 0; i < stack.length; i++) {
			stack[i].call(window);
		};
	}

	window.onload = fireReady;
})();