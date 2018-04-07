###cookies sessionStorage localStorage

- cookies　是用来标识用户身份的，通常需要加密；并在始终在同源的http请求中携带；允许存储的数据量较小
- sessionStorage　存储持久化数据，不会在请求中携带，且一般不加密；在浏览器窗口关闭后自动删除
- localStorage　存储持久化数据，不会在请求中携带，且一般不加密，关闭浏览器也不会自动删除




###实现多标签页之间的通信

- **websocket**，有点小题大作
- **localStorage**，localStorage在被修改时会触发事件

```javascript
window.addEventListener('storage', event => {
    console.log(event.key, event.newValue);
})
```

注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常



###webSocket如何兼容低浏览器

- Adobe Flash Socket
- ActiveX HTMLFile (IE)
- 基于 multipart 编码发送 XHR
- 基于长轮询的 XHR




### 浏览器内核

- Trident(IE内核)，在IE4-IE11版本中使用。IE 从版本 11 开始，初步支持 WebGL 技术。IE8 的 JavaScript 引擎是 Jscript，IE9 开始用 Chakra，这两个版本区别很大，Chakra 无论是速度和标准化方面都很出色。国内很多的双核浏览器的其中一核便是 Trident，美其名曰 “兼容模式”。Window10 发布后，IE 将其内置浏览器命名为 Edge，Edge 最显著的特点就是新内核 EdgeHTML。
- Gecko(Firefox 内核)，是开源的。
- Webkit(Safri内核)
- chromium(chrome前内核)，由`Webkit` fork而来
- Blink(chrome现在内核)



###页面可见性（Page Visibility API）

- 通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等
- 在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；



###如何在页面上实现一个圆形的可点击区域？

- map+area或者svg
- border-radius
- 纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等


### 兼容性问题

- 事件对象

任何一个对象只要触发了事件，都传一个参数（event）
IE:默认参数  window.event
非IE：必须传递一个参数

兼容方法：
IE浏览器下，只要访问全局对象window的event属性即可，忽略该参数，用window.event来读取该event。
obj.onclick = function(e){e = e || window.event}

- 事件对象中的属性

IE下，even对象有x,y属性，但是没有pageX,pageY属性；
非IE下,event对象有pageX,pageY属性，但是没有x,y属性

兼容方法：
使用条件注释法：<!--[if IE]>...event.x...<![end if]-->
缺点是在IE浏览器下可能会增加额外的HTTP请求数。
或者：var x = (event.x ? event.x : event.pageX)

- innerHTML、innerText、textContent

IE支持innerHTML、innerText，不支持textContent属性
其他浏览器三种属性都支持

- DOM2级事件绑定
  - IE9以下(不包括9)只支持attachEvent,而FF和Chrome只支持addEventListener
  - IE9以下(不包括9)只支持detachEvent,而FF和Chrome只支持removeEventListener

把这个兼容写法封装成一个函数

```javascript
function myAddEvent(obj,ev,fn) {
//obj为要绑定事件的元素，ev为要绑定的事件，fn为绑定事件的函数
   if(obj.attachEvent){
     obj.attachEvent("on" + ev,fn);
   }else {
     obj.addEventListener(ev,fn,false);
   }
}
```

- 获取页面内所有元素的一个集合

IE：documen.all
非IE：document.getElementsByTagName("*")

- 获取对象的可视化区域的宽和高，滚动条距离顶端的距离

```javascript
var w = document.body.clientWidth || document.documentElement.clientWidth;
var t = document.body.scrollTop || document.documentElement.scrollTop;
```

- IE下,可以使用获取常规属性的方法来获取自定义属性,也可以使用getAttribute()获取自定义属性;Firefox下,只能使用getAttribute()获取自定义属性。解决方法:统一通过getAttribute()获取自定义属性。



###js有6中数据类型

6种原型数据类型Boolean null undefined number string **symbol**

以及Object对象

###js的几种创建对象的方法

- 对象字面量
- 工厂模式

```javascript
function Person(name) {
  var obj = new Object();
  obj.name = name;
  obj.say = function() {
    alert(obj.name);
  }
  return obj;
}
var p = Person("Black");
// 对象无法识别；方法重复构建，浪费资源
```

- 构造函数模式

```javascript
function Person(name) {
    this.name = name;
    this.say = function() {
        return this.name;
    }
}
var p = Person("Black");
// 
function PersonVer2(name) {
    this.name = name;
    this.say = say;
}
function say() {
    return this.name;
}
```

- 原型模式

```javascript
function Person() {}
Person.prototype.name = "Black";
Person.prototype.say = function() {
  output(obj.name);
};
var p = new Person();
// 能够识别对象
// 使用对象字面量对原型赋值时容易出错；对属性类型是对象的属性赋值容易出错；没封装
function PersonVer2() {}
PersonVer2.prototype = {
    name: "Black",
    say: function() {
      alert(obj.name);
    };
};
var p2= new PersonVer2();
// 重写原型丢失了constructor
function PersonVer3() {}
PersonVer3prototype = {
    constructor: PersonVer3
    name: "Black",
    say: function() {
      alert(obj.name);
    };
};
var p3= new PersonVer3();
// 没丢失constructor，还是有原型模式的缺点
```

- 组合模式

```javascript
function Person(name) {
    this.name = name;
}
Person.prototype = {
    constructor: Person,
    say: function() {
      alert(obj.name);
    };
}
var p = new Person("Black");
// 使用最广泛的方式，有些人觉得封装性不好
function PersonVer2(name) {
    this.name = name;
    if (typeof this.say !== "function") {
        PersonVer2.prototype.say = function() {
          alert(obj.name);
        };
    }
}
var p2 = PersonVer2("Black");
/* var p2S = Personver2("Black");
 * p2.say();  // 报错
 * p2S.say(); // 注释上一行，这句是可以执行的
 */
// 这里有个问题，就是第一次创建的对象访问say方法时会报错；因为在使用new操作符时是先进行对象的创建再进行原型的赋值，所以这个创建的对象的指针会被覆盖，找不到原来的属性，改进如下：
function PersonVer3(name) {
    this.name = name;
    if (typeof this.say !== "function") {
        PersonVer2.prototype.say = function() {
          alert(obj.name);
        };
    }
    return new PersonVer3(name);
}
```

- 其他模式，寄生构造函数，稳妥构造函数模式
- ES5的*create*方法

```javascript
// Object.create(proto[, propertiesObject])
o = Object.create(Object.prototype, {
  // 设置value，foo会成为所创建对象的数据属性
  foo: { 
    writable:true,
    configurable:true,
    value: "hello" 
  },
  // 不设置value，bar会成为所创建对象的访问器属性
  bar: {
    configurable: false,
    get: function() { return 10 },
    set: function(value) {
      console.log("Setting `o.bar` to", value);
    }
  }
});

// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })

// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p; // 42
delete o.p // false
```

- class关键字

这是es6的新特性，类声明和类表达式都执行在严格模式下。一个类定义里面有get和set方法。

```javascript
class Circle {
    // constructor方法，一个类里只能有一个constructor方法
    constructor(r) {
        this.radius = r;
    }
    // get方法
    get area() { return this.calcArea(); }
    // 成员方法
    calcArea() {
        return Math.PI * this.radius * this.radius;
    }
    // 静态方法
    static calcPerimeter(r) {
        return 2 * Math.PI * r;
    }
}

var c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(Circle.calcPerimeter(5)); // 31.41592653589793
var calcArea = c.calcArea;
calcArea(); // undefined
```

通过扩展获得新的类

```javascript
function Animal (name) {
  constructor() {
    this.age = 0;
  }
  this.name = name;
}
Animal.prototype.speak = function () { // 原型扩展
  console.log(this.name + ' makes a noise.');
}

// extend关键字继承类
class Dog extends Animal {
  constructor() {
    super(); // 在使用'this'前需要调用super
  }
  speak() {
    super.speak(); // 使用super调用超类
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak();
```

**Mix-ins**

使用一个超类作为输入的函数和一个继承该超类的子类作为输出

```javascript
var calculatorMixin = Base => class extends Base {
    calc() { }
};
var randomizerMixin = Base => class extends Base {
    randomize() { }
};
// 使用方法
class Foo { }
class Bar extends calculatorMixin(randomize(Foo)) { }
```

### New所致行操作

​	当执行`new Foo(...)`时：

1. 创建一个空对象；
2. 让`Foo`的`this`指向这个空对象；
3. 为空对象添加`__proto__`属性，该属性指向`Foo.prototype`；
4. 返回这个对象就是`new`表达式的结果。

### js继承

以下假设要继承：

```javascript
function Person(first, last, age, gender, intersts) {
    this.name = [first, last];
    this.age = age;
    this.gender = gender;
    this.intersts = intersts;
    this.workTime = 10;
}
```

**注意：为了避免构造函数的原型能够正确指回构造函数，每次修改完原型后需要进行以下操作：**

```
child.prototype = parent;
child.prototype.constructor = child;
```

#####构造函数绑定

```javascript
function Teacher(first, last, age, gender, intersts, subject) {
    Person.call(this, first, last, age, gender, intersts);
    this.subject = subject;
}
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
```

##### 构造函数的原型模式

注意，这里是原型链继承，用`hasOwnProperty()`或者直接打印是看不出来的，用'.'或'[]'还是能找到

```javascript
function Teacher(subject) { this.subject = subject; }
Teacher.prototype = new Person();
Teacher.prototype.constructor = Teacher;
// 不适合父类构造函数有参数输入时

/* 改进１ -- 直接覆盖prototype */
Person.prototype.workTime = "8h";
function Teacher(subject) { this.subject = subject; }
Teacher.prototype = Person.prototype;
Teacher.prototype.constructor = Teacher; // 效率高，不会重复创建Person实例
// 问题：对Teacher.prototype的修改也会引起对Person.prototype的修改

/* 改进２(YUI库的继承) -- 用空对象做中介 */
var middle = function() {};
middle.prototype = Person.prototype;
function Teacher(subject) { this.subject = subject; }
Teacher.prototype = new middle(); // 空对象不占内存
Teacher.prototype.constructor = Teacher;
```

##### 非构造函数的继承

```javascript
// 道格拉斯继承
function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}
// 
function shallowExtend(o, new_value) {
    var obj = {};
    for (key in o) {
        obj[key] = o[key];
    }
    
    obj.new_attri = new_value;
    return obj;
}
// 
function deepExtend(o, new_value) {
    var obj = {};
    for (key in o) {
    	obj[key] = typeof o[key] === "object" ? JSON.parse(JSON.stringify(o[key])) : obj[key];
    }
}
```

### 箭头函数

- 不绑定this，它使用封闭执行上下文的this值，通过call或apply调用不影响this值
- 不绑定arguments，而使用剩余参数
- 不能使用new操作符
- 没有prototype属性
- 不能使用yield关键字
- 运算符优先级解析规则特殊

### this对象

this总是指向直接调用者；如果有new关键字，则指向那个new的那个对象。

### ["1","2","3"].map(parseInt)答案是多少

结果为[1, NaN, NaN]，因为map的参数callbackfn会收到两个参数，一个是value，一个是index，也就是parseInt函数实际上会收到参数`("1", 0)("2", 1)("3", 2)`，也就是返回的结果分别是`1 NaN NaN`

### 闭包

###几种设计模式

MVC模式：分离视图与操作，操作换了个地方

MVVM模式：操作与视图进行双向绑定，减少出操作复杂度

重新渲染：如果操作更新视图则对视图重新渲染，Virtual DOM的做法

###`__proto__ `与`prototype`

**注意**：

- `__proto__`不是标准的属性，但大部分浏览器都支持这个属性
- 每个对象都有`__proto__`属性
- 只有函数对象才有`prototype`属性

```javascript
function Person(name) {
    this.name = name;
    this.age = 0;
}
var friend = new Person("Black");
friend.__proto__ === Person.prototype // true
friend.__proto__ === friend.constructor.prototype // true
```

可以这么理解，`__proto__`属性就是在不知道对象具体的构造函数的原型时候使用的。
### BOM

- 窗口的移动、新建和删除，但是往往会受到浏览器的控制--安全问题
- 超时调用（setTimeout），间歇调用（setInternel)
- 通过alert()、confirm()和prompt()可以调用系统对话框，还有print()和find()

### 关于JavaScript的event loop

![JavaScript Event Loop](../img/eventLoop.png)

JavaScript中包含一个主线程的任务执行栈和一个事件队列，当主线程的任务执行栈执行完之后就会执行事件队列里面的事件。

除了setTimeout()和setInternel()之外nodejs还提供两个函数[process.nextTick](http://nodejs.org/docs/latest/api/process.html#process_process_nexttick_callback)和[setImmediate](http://nodejs.org/docs/latest/api/timers.html#timers_setimmediate_callback_arg)。

HTML5标准规定了setTimeout()的第二个参数的最小值（最短间隔），不得低于4毫秒，如果低于这个值，就会自动增加。在此之前，老版本的浏览器都将最短间隔设为10毫秒。另外，对于那些DOM的变动（尤其是涉及页面重新渲染的部分），通常不会立即执行，而是每16毫秒执行一次。这时使用requestAnimationFrame()的效果要好于setTimeout()。

一般认为,使用超时调用来模拟间歇调用是一种最佳模式,因为后一个间歇调用可能在前一个间歇调用结束钱启动。

```javascript
var num = 0, max = 10;
var end = true, isEnd = false;
function mySetInternel() {
    num++;
    if (num < max && end) {
        setTimeout(mySetInternel, 6000);
    } else {
        isEnd = true;
    }
}
setTimeout(mySetInternel, 6000);
```

### DOM

- Node类型，有12种，常用的有`Node.ELEMENT_NODE(1)` `Node.TEXT_NODE(3)`两种，检测是否是节点：

```javascript
if (someNode && someNode.nodeType && someNode.nodeType === 1) { // IE不支持someNode.nodeType === Node.ELEMENT_NODE这种查询方式
    alert("It is a node.");
}
```

- 对NodeList访问，我们得到的节点常常是一个“类数组”，并且这个NodeList是有生命的，实时更新（关系指针）。可以通过`someNode.childNodes[i]`和`someNode.childNodes.item(i)`访问。常常需要转换成数组：

```javascript
function convertToArray(nodes) {
    var array = null;
    try {
        array = Array.prorotype.slice.call(nodes, 0);
    } catch (ex) { // IE中nodeList是一个COM对象
        array = new Array();
        for (var i = 0; i < nodes.length; i++) {
            array.push(nodes[i]);
        }
    }
    return array;
}
```

- appendChild insertBefore的操作，如果要插入的节点不是新创建的，则会变成节点移动
- 对于cloneNode，有深复制（参数为true）和浅复制两种。两者都不会复制节点的JavaScript属性（IE有个bug就是会复制事件处理程序）；且后者不会复制子节点

