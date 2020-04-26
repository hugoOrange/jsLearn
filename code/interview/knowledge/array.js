
// 空位处理：
// - forEach(), filter(), reduce(), every() 和some()都会跳过空位。
// - map()会跳过空位，但会保留这个值
// - join()和toString()会将空位视为undefined
// undefined/null 处理
// - join()和toString()会将undefined和null处理成空字符串。
// - 其他函数正常会将undefined和null处理成空字符串。 

function emptyArray(num) {
    var arr = new Array(num);
    arr[num] = num;
    return arr;
}
function testCase(method) {
    console.log("foreach")
    method(3).forEach(item => console.log(item));
    
    console.log("map")
    method(3).map(item => console.log(item));
    console.log(method(3).map((item, index) => index));
    
    console.log("filter")
    method(3).filter(item => console.log(item));
    console.log(method(3).filter(item => true));
    
    console.log("every")
    method(3).every(item => console.log(item));
    
    console.log("some")
    method(3).some(item => console.log(item));
    
    console.log("reduce")
    method(3).reduce(item => console.log(item));
    
    console.log("join")
    console.log(method(3).join(","));
    
    console.log("toString")
    console.log(method(3).toString());
}

console.log("emptyArray")
testCase(emptyArray);
console.log("%c[undefined, 1]", 'color:#0000ff');
testCase(function () {
    return [undefined, 1];
});
console.log("%c[null, 1]", 'color:#0000ff');
testCase(function () {
    return [null, 1];
});

