// apply
// 方法能劫持另外一个对象的方法，继承另外一个对象的属性.
// 使用apply判断object-array
var isArray = function(obj){
	return Object.prototype.toString.call(obj) === '[object Array]';
	// return toString.apply(obj) === '[object Array]';
};
---------------------------------------------------------------------
// JS函数的写法有什么不同
myfun：function(){}
	必须写在对象内部的声明方式

myfun = function(){}
	为window全局对象添加一个myfun函数(不好的写法)

function myfun(){}
	与myfun = function(){}作用差不多，差别是第二种只是提升变量声明
	这种方式包括函数声明都被提前了

var myfun = function(){}
	声明一个myfun的函数，与2相似，但不一定是全局的

myfun.prototype.myfunPro = function(){}
	在myfun的原型上添加一个myfunPro的方法
	new的新变量会自带这个方法
---------------------------------------------------------------------

// call函数
apply和call函数的作用都是修改上下文
来劫持目标对象的方法
而apply是给参数列表
而call是给具体的参数

// call和apply的区别在哪里,什么情况下用apply,什么情况下用call
/* 	在给对象参数的情况下
	如果参数的形式是数组的时候
	比如apply示例里面传递了参数arguments
	这个参数是数组类型
	并且在调用Person的时候参数的列表是对应一致的(也就是Person和Student的参数列表前两位是一致的)
	就可以采用 apply
	如果我的Person的参数列表是这样的(age,name)
	而Student的参数列表是(name,age,grade)
	这样就可以用call来实现了
	也就是直接指定参数列表对应值的位置(Person.call(this,age,name,grade));
*/
// 区分apply,call就一句话
foo.call(this, arg1,arg2,arg3) == foo.apply(this, arguments)==this.foo(arg1, arg2, arg3);

	// 继承
	Person.apply(this,arguments);
	// 找数组最大值
	Math.max.apply(null,arr);

// 区分apply,call就一句话
foo.call(this, arg1,arg2,arg3) == foo.apply(this, arguments)==this.foo(arg1, arg2, arg3)

// 使用call来劫持其他对象的方法
arguments 虽然和Array 很像，但是他没有Array的push之类的方法，怎么办？
Array.prototype.push.call(arguments);

// this的上下文问题
Javascript中this关键字通常指向当前函数的拥有者。在javascript中通常把这个拥有者叫做执行上下文。函数的执行上下文由当前的运行环境而定：
1.全局变量和全局函数附属于全局对象(window),因此使用"var"或"this"两种方法定义全局变量是等效的。
2.执行上下文和作用域不同。执行上下文在运行时确定，随时可能改变，而作用域则在定义时确定，永远不会变。
3.如果当前执行的是一个对象的方法，则执行上下文就是这个方法所附属的对象。
4.如果当前是一个创建对象的过程，则执行上下文就是这个正在被创建的对象。
5.如果一个方法在执行时没有明确指定附属对象，则这个方法的上下文为全局对象。
6.使用call和apply可以改变对象的执行上下文。

// 使用闭包实现私有方法

// bind方法
call和apply是立即调用劫持对象的函数
而bind是生成一个新的函数(return Function)
var m = {   
    "x" : 1
};
function foo(y) {
    alert(this.x + y);
}
foo.apply(m, [5]);
foo.call(m, 5);
var foo1 = foo.bind(m, 5);
foo1();// 可以随时使用

// 定义一个函数同时执行它
var a = fucntion(){}();
!function(){}();
~function(){}();
+function(){}();
void function(){}();
(fuction(){}());
(fuction(){})();


// arguments.callee  arguments.caller
http://www.cnblogs.com/fullhouse/archive/2011/07/17/2108710.html


//http://www.cnblogs.com/zhangle/archive/2010/07/01/1769435.html
this