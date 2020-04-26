// 需要用到的，最佳实践

// 1.　使用 const 定义常量
const COMMON_CONFIG = "xxx";

// 2. 使用 let 定义局部变量
let array = [];
for (let index = 0; index < array.length; index++) {
}

// 3. 模板字符串
let text = "the text";
let templateString = `text is: ${text}`;

// 4. 数组和对象的解构赋值(函数中)
let sourceArray = [1, 2, 3, 4, 5];
var [ele1, ele2] = [1, 2, 3, 4, 5];
var [ele1, ...otherArray] = [1, 2, 3, 4, 5];
let sourceObject = { a: 1, b: 2};
var { a, b } = { a: 1, b: 2};

// 5. 函数参数默认值，可与解构赋值一同使用
function aFunction(param1 = 1, param2 = 2) {
    console.log(param1, param2);
}
function aFuncWithDeconstruct(
    [ ele1 = 1, ele2 = 2 ],
    { attr1, attr2 },
    ...otherArgs
) {
    console.log(ele1, ele2);
    console.log(attr1, attr2);
    console.dir(otherArgs);
}

// 6. 箭头函数 [注意this指向]
let arrowFunction = () => {
    console.log("I'm a arrow function.")
};

// 7. 数组新方法 - find/findIndex/fill

// 8. 数组获取键/值/键值对 - entries/keys/values

// 9. reduce

// 10. 对象属性名简写
let something = "1";
let objectWithSingleName = {
    something,
    attr1() {}
};

// 11. 对象遍历
// for in / for + keys / for + Reflect.ownKeys /
// for + Object.getOwnPropertyNames /
// for + Object.getOwnPropertySymbols

// 12. super / __proto__

// 13. 