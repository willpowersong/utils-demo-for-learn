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

// Max
Math.max.apply(null, [10, -1, 5]);

// 扁平化数组
Array.prototype.concat.apply([], [["a"], ["b"]]); // [ 'a', 'b' ]
Array.prototype.concat.apply([], [[["a"]], ["b"]]);// [ [ 'a' ], 'b' ]
Array.prototype.push.apply(arr1,arr2)

// 判断数组
Object.prototype.toString.apply(new Array())=="[object Array]"