>Node的特点
	
	异步I/O
	事件与回调函数
	单线程
	跨平台

>Node的应用场景
	
	I/O密集型
	不是很擅长CPU密集型业务,但是可以合理调度
	与遗留系统问题和平共处
	分布式应用

>Node的使用者
	
	前后端统一
	Node带来的高性能的I/O用于实时应用:Voxer和腾讯
	并行I/O,有效利用稳定接口提升web渲染能力:雪球财经和LinkedLin
	云计算平台提供Node支持
	游戏开发领域:网易的pomelo实时框架
	工具类应用

====
Node正是依靠构建了一套完善的高性能异步I/O框架
打破了JavaScript在服务器止步不前的局面

>Node的异步I/O
	
>>为什么要异步I/O
	
	用户体验
	资源分配,让单线程远离阻塞

>>异步I/O实现现状
	
	异步I/O与非阻塞I/O  轮询技术(read,select,poll,epoll,kqueue)
	理想的非阻塞异步I/O 应用程序发起非阻塞调用,无需通过遍历或者事件唤醒等方式轮询
	现实中的异步I/O [*nix平台下采用libeio配合libev实现I/O部分] [windows平台采用IOCP实现异步I/O]

>>Node的异步I/O
	
	Node的异步I/O [事件循环,观察者,请求对象,执行回调]

>>非I/O的异步API
	
	非I/O的异步API [定时器:setTimeout,setInterval] [process.nextTick操作比较轻量高效] [setImmediate与前者类似,优先低于前者]

>>事件驱动和高性能服务器
	
	经典模型 [同步式] [每进程/每请求] [每线程/每请求]
	知名事件驱动实现 [Ruby的Event Machine] [Perl的AnyEvent] [Python的Twisted] [Node异步I/O]

	