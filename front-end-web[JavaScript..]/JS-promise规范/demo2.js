//所有异步操作都完成时，进入完成态，
//其中一项异步操作失败则进入失败态
all = function(requestArray) {
	// var some = Array.prototype.some;
	var def = new Deferred();
	var results = [];
	var total = 0;
	requestArray.some(function(r, idx) {
		//为数组中每一项注册回调函数
		r.then(function(data) {
			if (def.promise.isPending()) {
				total++;
				results[idx] = data;

				if (total === requestArray.length) {
					def.resolve(results);
				}
			}
		},  function(err) {
			def.reject(err);
		});
		//如果不是等待状态则停止，比如requestArray[0]失败的话，剩下数组则不用继续注册
		return !def.promise.isPending();
	});

	return def.promise;
}

all(
	[request('data1.json'),
	request('data2.json'),
	request('data3.json')]
	).then(
		function(results){
			console.log(results);// 处理data1,data2,data3
			alert('success');
	}, function(err) {
		console.error(err);
	});