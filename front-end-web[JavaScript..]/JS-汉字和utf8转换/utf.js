var str2utf = function(str){
	try{
		eval(str);
	}catch(e){
		return e.toString().split(" ")[1];
	}
};
var utf2str = function(utf){
	var str;
	eval("str='"+utf+"'");
	return str;
};
