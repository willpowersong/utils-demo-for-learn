$(document).ready(function(){

	(function(){

		$("#arcCanvas").attr("width",screen.width);
		$("#arcCanvas").attr("height",screen.height);

		var canvas = $("#arcCanvas")[0];
		var context = canvas.getContext('2d');
		var chars = '0123456789qwertyuiopasdfghjklzxcvbnm';
		chars = chars.split('');
		var font_size = 16;
		var columns = canvas.width / font_size;
		var drops = [];
		for (var x = 0;x < columns; x++){
			drops[x] = 1;
		}
		function draw(){
			context.fillStyle = 'rgba(0,0,0,0.1)';
			context.fillRect(0,0,canvas.width,canvas.height);//屏幕涂黑
			context.fillStyle = '#0F0';
			context.font = font_size + 'px arial';

			for(var i = 0; i < drops.length; i++){
				var text = chars[Math.floor(Math.random() * chars.length)];
				context.fillText(text, i * font_size, drops[i] * font_size);
				if(drops[i] * font_size > canvas.height || Math.random()>0.95){
				//超出屏幕或者产生随机数超过95%即消除这一个数
				drops[i] = 0;
				}
				drops[i]++;
			}
		}
		setInterval(draw,1000/40);
	})();//设置完自动运行
	
});