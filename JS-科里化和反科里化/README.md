#科里化和反科里化
[科里化与反科里化]:http://blog.csdn.net/xiongzhengxiang/article/details/8452132

>科里化
	
	它用于创建已经设置好了一个或多个参数的函数
	函数科里化的基本方法和函数绑定是一样的:
	使用一个闭包返回一个函数
	两者的区别在于
	当函数被调用时，返回的函数还需要设置一些传入的参数

>创建科里化函数

	科里化函数通常由以下步骤动态创建：
	调用另一个函数并为它传入要科里化的函数和必要参数

	function curry(fn){  
	    var args = Array.prototype.slice.call(arguments,1);//获取fn后面的参数列表  
	    return function(){  
	    	var innerArgs = Array.prototype.slice.call(arguments);//传入的剩余参数  
	    	var finalArgs = args.concat(innerArgs);  
	    	return fn.apply(null,finalArgs);  
		}  
	}
    var curriedName = curry(showFamilyName,'xiong');  
    curriedName('zhengxiang');

    科里化就是将参数绑定到函数上面的技术，如下是利用科里化，实现了绑定函数的功能，并且绑定函数中，能传递参数 
    function bind(fn,context){  
        var args = Array.prototype.slice.call(arguments,2);  
        return function(){  
            var innerArgs = Array.prototype.slice.call(arguments);  
            var finalArgs = args.concat(innerArgs);  
            return fn.apply(context,finalArgs);  
        }  
    }

    反科里化：
	把一个签名如下的方法:
	obj.foo(arg1, arg2)转换成另外一个签名如下的函数:
	foo(obj, arg1, arg2)想要知道这么做有什么用,我们首先得了解一下通用方法.
	