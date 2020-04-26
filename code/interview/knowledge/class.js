// 基本用法
// 相当于组合继承的语法糖
class Animal {
    constructor(name) {
        this.name = name
    }

    eat(food) {
        console.log(food);
    }
}

let cat = new Animal("cat");
cat.eat("apple");

console.log("typeof Animal: ", typeof Animal);
console.log("cat.constructor === Animal: ", cat.constructor === Animal);
console.log("cat.constructor === Animal.prototype.constructor: ",
    cat.constructor === Animal.prototype.constructor);

let dog = new Animal("dog");
console.log("cat.eat === dog.eat:", cat.eat === dog.eat);

function T() {
    this.foo = function () {};
}
let a = new T();
let b = new T();
console.log(a.foo === b.foo);

// 静态方法

// 1. 全部都是严格模式
// 2. 没有变量提升
// 3. 不使用new调取会报TypeError错误
