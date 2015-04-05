
(function(){})();等价于(function(){}).call(this);

图片异步加载
var img = new Image();
img.src = './img.jpg';
img.onload = function(){
	document.getElementById("imgs").style.background = "url("+img.url+")";
};

Ajax请求
