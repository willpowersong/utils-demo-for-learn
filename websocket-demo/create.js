// 建立webSocket连接
(function(){

	var Server = 'ws://localhost:8080/ws',
		Socket = new WebSocket(Server);
	Socket.onopen = function(event){
		console.log("成功连接webSocket服务器");
	};
	Socket.onclose = function(event){
		console.log("连接webSocket失败");
	};
	Socket.onmessage = function(event){
		console.log("检测到来自服务端的数据"+event.data);
	};
	Socket.onerror = function(event){
		console.log("发生错误:"+event.data);
	};

})();