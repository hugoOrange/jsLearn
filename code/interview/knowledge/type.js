// 七大数据类型
// Number String Boolean null undefined Object Symbol
// Symbol　类似于字符串类型的数据类型，保证"独一无二"
let s = Symbol();
console.log(typeof Symbol);
console.log(typeof s);

// !!error:
// try {
//     let sWithNew = new Symbol();
// } catch (e) {
//     console.error(e);
// }

console.log("%c/---- symbol描述 -----/", "color:#ada921");

// 创建Symbol时候的传参表示其描述，用于区分
// 简单数据类型，Symbol值就是对应的值，是对象的话就调用toString方法
let numberSymbol = Symbol(1);
let stringSymbol = Symbol("1");
let booleanSymbol = Symbol(true);
let nullSymbol = Symbol(null);
let undefinedSymbol = Symbol(undefined);
let objectSymbol = Symbol({});
let objectWithToStringSymbol = Symbol({
    toString() {
        return "I'm a string.";
    }
});
console.log("Symbol(1) is: ", numberSymbol);
console.log("Symbol(\"1\") is: ", stringSymbol);
console.log("Symbol(true) is: ", booleanSymbol);
console.log("Symbol(null) is: ", nullSymbol);
console.log("Symbol(undefined) is: ", undefinedSymbol);
console.log("Symbol({}) is: ", objectSymbol);
console.log("Symbol({\
    toString: \"I'm a string.\"\
});\ is: ", objectWithToStringSymbol);

console.log("%c/---- symbol比较 -----/", "color:#ada921");

// 注意，这里的传参是描述，所以哪怕描述相同的Symbol也是不相等的
let a = Symbol();
let b = Symbol();
console.log("Symbol() == Symbol() : ", a == b);
console.log("Symbol() === Symbol() : ", a === b);
let c = Symbol("foo");
let d = Symbol("foo");
console.log("Symbol(\"foo\") == Symbol(\"foo\") : ", c == d);
console.log("Symbol(\"foo\") === Symbol(\"foo\") : ", c === d);

console.log("%c/---- symbol类型转换 -----/", "color:#ada921");
// 虽然Symbol类型和String类型相似，但是不能等同，也不存在隐式的强制类型转换
let priSymbol = Symbol();
let priObject = {};
//-- TypeError: Cannot convert a Symbol value to a string
// let symbolToString = `symbol to ${priSymbol}`;
//-- TypeError: Cannot convert a Symbol value to a string
// let symbolToString = "symbol to" + priSymbol;


// 例外：可用作属性名
priObject[priSymbol] = 1;
priObject[priSymbol] = {
    [priSymbol]: 2 // []必须
};
Object.defineProperty(priObject, priSymbol, 3);

// 强制转换成String
// 强制转换成Number会报错
console.log(String(stringSymbol))
// console.log(Number(numberSymbol))

