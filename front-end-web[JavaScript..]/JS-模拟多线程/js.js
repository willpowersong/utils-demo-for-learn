(function(){

	var thread1 = document.getElementById("thread1"),
		thread2 = document.getElementById("thread2"),
		thread3 = document.getElementById("thread3");

	function add(){
		this.innerHTML = Number(this.innerHTML)+1;
		console.log(this.getAttribute('id'));
	};

	setTimeout(function(){
		setInterval(function(){add.call(thread3)},500);
	},500); 
	setTimeout(function(){
		setInterval(function(){add.call(thread2)},500);
	},800);
	setTimeout(function(){
		setInterval(function(){add.call(thread1)},500);
	},1100); 
})();