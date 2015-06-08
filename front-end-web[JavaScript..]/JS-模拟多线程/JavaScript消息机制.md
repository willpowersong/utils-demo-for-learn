#JavaScript消息机制
```JavaScript
function test(){
	setTimeout(function(){
		console.log("time out 1!");
		loop(2000); //再死循环2秒
	},1000);
	setTimeout(function(){
		console.log("time out 2!");
	},1000);
	loop(5000); //死循环5秒
}

function　loop(milliSeconds) {
	var time = new Date();
	while(new Date() - time < milliSeconds);
}```

Event-Driven事件驱动。

	setTimeout,xhr.send,包括其他的异步函数,都是注册了一个事件回调,没有马上执行。
	当前js线程如果处于繁忙期,或者说当前有代码在运行,则这些回调只是一直在等待着。
	当js处理的代码完毕后,再检查事件队列,从队列取出一个,执行它。
	所以可以认为浏览器执行js,整个都是在执行事件队列(把定时器也看做是事件,定时触发的事件),
	除了全局的代码是一加载便开始执行,其他的js,都是在某个事件回调中执行的。
	setTimeout也有先来后到,谁排在队列前面,谁就先执行,这个和单线程不冲突。
	如上的例子,两个setTimeout都是1秒,
	第一个弄了个耗时的loop,结果第二个就要一直等到第一个的回调执行完毕,才有机会执行。

[JavaScript消息机制]:http://www.web-tinker.com/article/20294.html 

	setTimeout之类的函数来往消息队列中添加自己的消息，有时候也称他们为计时器事件。
	setTimeout的功能就是把一个函数作为一个新的消息放入消息队列中。