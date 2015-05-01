// JS的面向对象
// JS实现继承、多态、封装(闭包)
// JS实现私有方法、共有方法、特权方法
// 工厂模式
// 构造函数
// 组合使用构造函数模式和原型模式
// 组合模式

//-----------------------------
// javascript的5种面向对象的写法
//定义Circle类，拥有成员变量r，常量PI和计算面积的成员函数area() 
1----// 优点:体现了OO的继承特性. 每次初始化Circle对象,都只设置了必须的值(r). 
function Circle(r){
	this.r = r;
}
Circle.PI = 3.14;
Circle.prototype.area = function(){
	return Circle.PI * this.r * this.r;
}
var c = new Circle(1.0);
alert(c.area());

2----// 缺点:每次都必须初始化很多变量,时间成本+内存成本,相比第一种高昂了点.  为area分配了对象(浪费资源)
var Circle = function(){
	var obj = new Object();
	obj.PI = 3.14;

	obj.area = function(r){
		return this.PI * r * r;
	}
	return obj;
}
var c = new Circle();
alert(c.area(1.0));

3----// 缺点:虽然实现了封装,但貌似Circle只是一个包名,对于OO的继承好像发挥不大. (不适用new,单例) 为area分配了对象(浪费资源)
var Circle = new Object();
Circle.PI = 3.14;
Circle.Area = function(r){
	return this.PI * r * r;
}
alert(Circle.Area(1.0));

4----// 缺点:同第3种. 只是用了Object Literal方式初始化了对象.  (不适用new,单例) 为area分配了对象(浪费资源)
var Circle = {
	PI:3.14,
	area:function(r){
		return this.PI * r * r;
	}
};
alert(Circle.area(1.0));

5----// 缺点:代码编写,确实不方便.没体现更好的分离. Function效率很低。
var Circle = new Function("this.PI = 3.14;this.area = function(r){return this.PI * r * r;}");
alert((new Circle()).area(1.0));

