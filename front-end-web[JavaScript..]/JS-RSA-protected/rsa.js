$(document).ready(function(){

	// RSA
	var RSA = function(){
		

		
	};


	// 由于需要先获得key然后才能提交post表单所以使用同步Ajax
 	$.ajaxSetup({  
    	async : false  
	});    

	var user = $('#user').val(),
		pass = $('#pass').val(),
		key,
		rsaKey;

	$("#submit").on('click',function(){
		$.post("server.php", {user: user ,task: "key"},
   		function(data){
    		key=data;
    		rsaKey=RSA(user,key);
    		// 发送post表单
    		$.post("post.php",{user:user,pass:rsaKey});
    		// 尽管在闭包中,还是销毁key
    		key='';
   		});
	});

});