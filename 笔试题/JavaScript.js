function a(x, y) {
    return function() {
        var x = 3;
        y = function() {
            x = 2;
        };
        y();
        console.log(x);
    }.apply(this, arguments);
}
a(); // 2

var array1=[1,2];
var array2 = array1;
array1[0] =array2[1];
array2.push(3)
console.log(array1);// Array [ 2, 2, 3 ]
console.log(array2);// Array [ 2, 2, 3 ]

// 实现继承
Object.extend = function(destination, source) {
    for (property in source) {
        destination[property] = source[property];
    }
    return destination;
}

// 关于undefined
/**
 *  因为执行JS代码是从里到外,因此把全局变量window或jQuery对象传进来
 *  避免了到外层去寻找,提高效率
*/
undefined = (function(window,undefined){return undefined;})(window);
// 代码对比
var undefined = 8;  
(function( window ) {   
    alert(window.undefined); // 8  
    alert(undefined); // 8  
})(window);
-----------------------
var undefined = 8;  
(function( window, undefined ) {   
    alert(window.undefined);  // 8  
    // 此处undefined参数为局部的名称为undefined变量，值为undefined  
    alert(undefined); 
})(window); 
-----------------------


// 返回值与嵌套函数
function aa()
{
    alert("aaa");
    return function(){alert("bbb");};
}
alert(aa); // 弹出aa函数
alert(aa());//  弹出"aaa"然后弹出function(){alert("bbb");}
alert(aa()());// 弹出"aaa" 然后弹出"bbb"然后弹出undefined,弹出undefined是因为aa()里return的函数没有返回值

// this指针
function a(){};
a.b=function(){console.log(this)};
(a.b=a.b)(); // console -> window

// call
var fn=function(){console.log(this);}
var f1 = fn.call;
f1.call(fn); // console -> window
-----------------------
function fn(a,b){
    console.log(this); // 8
    this.a = a;
    this.b = b;
    console.log(this.a+":"+this.b);  // 7:undefined
}
fn.call.call(fn,8,7);
-----------------------
function f1(){
    console.log("this is function f1!");
}
function f2(){
    console.log("this is function f2!");
}
var f3 = f1.call;
f1.call(f2); // this is function f1!
f3.call(f2); // this is function f2!

// Array
var a = [0,1,2,3][[1]]; // a = 1
var arr = [0,1,2,3,4][0,1,[2,3,4],{1:1},1+1]; // arr = 2
[]+{}和{}+[]分别是啥 // "[object object]"   0

// function
~function(){}()  // -1
!function(){}()  // true

// toString,ValueOf,parseInt,Number,toString,String 

// 原型链

// Max
Math.max.apply(null, [10, -1, 5]);

// 扁平化数组
Array.prototype.concat.apply([], [["a"], ["b"]]); // [ 'a', 'b' ]
Array.prototype.concat.apply([], [[["a"]], ["b"]]);// [ [ 'a' ], 'b' ]
Array.prototype.push.apply(arr1,arr2)

// 判断数组
Object.prototype.toString.apply(new Array())=="[object Array]"

// json跨域问题 -同源策略

// 手写Ajax请求(封装成函数)
var xmlHttp = null;
if(window.ActiveXObject){
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
}else if(window.XMLHTTpRequest){
    xmlHttp = new XMLHttpRequest();
}
var callback = function(){
    if(xmlHttp.readyState == 4){
        if(xmlHttp.status == 200){
            console.log(xmlHttp.responseText);
        }
    }
}
xmlHttp.open("POST","./test.php",true);// 第三个参数代表异步,使用false为同步 
xmlHttp.onreadystatechange = callback;
xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); // 使用post需要制定Content-Type
xmlHttp.send(data);// 使用get就send(null)

// json格式
var x=[{
    "name":"Coral",
    "addr":"22_702",
    "IDnum":73,
    "class":
    {
        "class1":"computer",
        "class2":"math"
    }
},
{
    "name":"usr",
    "addr":"25_532",
    "IDnum":83,
    "class":
    {
        "class1":"english",
        "class2":"chinese"
    }
}];


// 
var A = function(){
        this.name = "111";
        return{
            name : "222"
        }
    }

    var B = function(){
        this.name = "111";
        return "222";
    }
    var a = new A();
    var b = new B();
    console.log(a.name, b.name);

// 线程问题
function f1(){
    console.time('time span');
}
function f2(){
    console.time('time span');
}
setTimeout(f1,100);
setTimeout(f2,200);
function waitForMs(n){
    var now = Date.now();
    while(Date.now() - now < n){}
}
waitForMs(500);
// 符合预期的是
// A.time span:700.077ms
// B.time span:0.066ms
// C.time span:500.077ms
// D.time span:100.077ms


// 写出下列执行结果
var a = 5;
function test(){
    a=0;
    alert(a);
    alert(this.a);
    var a;
    alert(a);
}
test();
new test();


//
<script type="text/javascript">
if (window == top) top.location.href = "index.aspx";
</script>