request = function(url) {
	var def = new Deferred();

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if ((xhr.status >=200 && xhr.status < 300) || xhr.status === 304) {
				def.resolve(xhr.responseText)
			} else {//简化ajax，没有提供错误回调
				def.reject(new Error({
					message: xhr.status
				}));
			}
		}
	};
	xhr.open('get', url, true);
	xhr.send(null);

	return def.promise;
}

request('data1.json').then(function(data1) {
	console.log(data1);//处理data1
	return request('data2.json');
}).then(function(data2) {
	console.log(data2);//处理data2
	return request('data3.json');
}, function(err) {
	console.error(err);
}).then(function(data3) {
	console.log(data3);
	alert('success');
}, function(err) {
	console.error(err);
});