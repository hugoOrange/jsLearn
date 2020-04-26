// 对象简写属性
console.log("%c/---- 对象简写属性 -----/", "color:#ada921");
const attr1 = "attr 1";
const attr2 = "attr 2";
var simpleAttributeObject = {
    attr1,
    attr2
};
console.log(simpleAttributeObject);

// 简写对象函数不能用作构造函数
try {
    var withConstructor = {
        con(name) {
            this.attr = name;
        }
    };
    console.log(new withConstructor.con("xx"));
} catch (error) {
    console.error(error)
}
// 箭头函数不能用作构造函数
try {
    var con = (name) => {
        this.attr = name;
    };
    console.log(new con("xx"));
} catch (error) {
    console.error(error)
}
var withConstructor = {
    con: function (name) {
        this.attr = name;
    }
};
console.log(new withConstructor.con("xx"));

// 属性名表达式
console.log("%c/---- 属性名表达式 -----/", "color:#ada921");
const keyA = {a: 1};
const keyB = {b: 2};
const myObject = {
  [keyA]: 'valueA',
  [keyB]: 'valueB'
};
console.log(myObject) // Object {[object Object]: "valueB"}

// object描述对象
console.log("%c/---- object描述对象 -----/", "color:#ada921");
var varObject = { a: 1 };
let letObject = { b: 2 };
const constObject = { c: 3 };
console.dir(Object.getOwnPropertyDescriptor(varObject, "a"))
console.dir(Object.getOwnPropertyDescriptor(letObject, "b"))
console.dir(Object.getOwnPropertyDescriptor(constObject, "c"))

// 对象遍历
console.log("%c/---- 对象遍历 -----/", "color:#ada921");
var plainObject = {
    a: 1
};
var factoryObject = new function () {
    this.a = 1;
};
var classObject = new class {
    constructor() {
        this.a = 1;
    }
};
var innerObject = Object;
var protoObject = {};
protoObject.constructor.prototype.a = 1;
class parentObject {
    constructor() {
        this.a = 1
    }
}
var extendObject = new class ExtendObject extends parentObject {};
var symbolObject = {
    [Symbol()]: 1
};
function testTraversalObject(obj) {
    // （1） for...in
    // for...in循环遍历对象自身的和继承的可枚举属性（不含 Symbol 属性）。
    console.log("%cfor...in...", "color:blue;");
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(obj[key]);
        }
    }
    
    // （2） Object.keys(obj)
    // Object.keys返回一个数组，包括对象自身的（不含继承的）所有可枚举属性（不含 Symbol 属性）的键名。
    console.log("%cObject.keys(obj)", "color:blue;");
    let keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        console.log(obj[keys[i]]);
    }
    
    // （3） Object.getOwnPropertyNames(obj)
    // Object.getOwnPropertyNames返回一个数组，包含对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名。
    console.log("%cObject.getOwnPropertyNames(obj)", "color:blue;");
    keys = Object.getOwnPropertyNames(obj);
    for (let i = 0; i < keys.length; i++) {
        console.log(obj[keys[i]]);
    }
    
    // （4） Object.getOwnPropertySymbols(obj)
    // Object.getOwnPropertySymbols返回一个数组，包含对象自身的所有 Symbol 属性的键名。keys = Object.getOwnPropertyNames(obj);
    console.log("%cObject.getOwnPropertySymbols(obj)", "color:blue;");
    keys = Object.getOwnPropertySymbols(obj);
    for (let i = 0; i < keys.length; i++) {
        console.log(obj[keys[i]]);
    }
    
    // （5） Reflect.ownKeys(obj)
    // Reflect.ownKeys返回一个数组，包含对象自身的所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举。
    console.log("%cReflect.ownKeys(obj)", "color:blue;");
    keys = Reflect.ownKeys(obj);
    for (let i = 0; i < keys.length; i++) {
        console.log(obj[keys[i]]);
    }
}
console.log("%cplainObject", "color:#ddaa11");
testTraversalObject(plainObject)
console.log("%cfactoryObject", "color:#ddaa11");
testTraversalObject(factoryObject)
console.log("%cclassObject", "color:#ddaa11");
testTraversalObject(classObject)
console.log("%cinnerObject", "color:#ddaa11");
testTraversalObject(innerObject)
console.log("%cprotoObject", "color:#ddaa11");
testTraversalObject(protoObject)
console.log("%cextendObject", "color:#ddaa11");
testTraversalObject(extendObject)
console.log("%csymbolObject", "color:#ddaa11");
testTraversalObject(symbolObject)

