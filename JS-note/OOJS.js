(function(){

// 跑题:apply
// 方法能劫持另外一个对象的方法，继承另外一个对象的属性.
// 使用apply判断object-array
var isArray = function(obj){
	return Object.prototype.toString.call(obj) === '[object Array]';
	// return toString.apply(obj) === '[object Array]';
};
// 跑题2: var fun=function(){} 和 var obj={fun:function(){}}的区别
// http://zhidao.baidu.com/link?url=8hg78GtJCOC312CtzjvRy3SopN6jgw-IUm_iw2DoQWPP5_Dy4SEIepjgMFBMKZrbf7slYvpKZHth1eFV8bqMBhYwMw1-6P5-wR6zqF8ULyO
myfun：function(){}
myfun = function(){}
function myfun(){}
var myfun =function(){}
myfun.prototype.myfunPro = function (){}
// 第二种,将函数写在对象内部,第一种不加var就成了windows的全部变量,应该避免这种方式

// 跑题3:call函数

// 跑题4:call和apply的区别在哪里
// 什么情况下用apply,什么情况下用call
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
	// 继承
	Person.apply(this,arguments);
	// 找数组最大值
	Math.max.apply(null,arr);



})();