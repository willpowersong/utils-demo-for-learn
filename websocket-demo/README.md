**webSocket**
====
>points
	
	webSocket是基于ws协议的
	webSocket支持4种消息[open,close,message,error]
	webSocket的存在是为了支持客户端与服务端双向通信
	http只能单向请求资源
	如果是一个不稳定频率更新的内容
	使用http要求客户定时发送请求进行检验
	或者是接收到请求后如果不需要更新就保持这个请求直到更新
	超时即重新发送求请求
	这种双向请求的需求在online chat中非常明显
	使用websocket需要搭建一个websocket的服务器
	可以使用WebSocket-Node
	https://github.com/Worlize/Websocket-Node