## 知识概要

```
HTML&CSS：
	对Web标准的理解（结构、表现、行为）、浏览器内核、渲染原理、依赖管理、兼容性、CSS语法、层次关系，常用属性、布局、选择器、权重、盒模型、
	Hack、CSS预处理器、CSS3、Flexbox、CSS Modules、Document flow、BFC、HTML5（离线 & 存储、Histoy,多媒体、WebGL\SVG\Canvas）；		
JavaScript：
    数据类型、运算、对象、Function、继承、闭包、作用域、事件、Prototype、RegExp、JSON、Ajax、DOM、BOM、
    内存泄漏、跨域、异步请求、模板引擎、模块化、Flux、同构、算法、ECMAScript6、Nodejs、HTTP、

其他：
    主流MVVM框架(React\Vue\Angular)、Hybrid App\React Native\Weex、TypeScript、RESTFul、WEB安全、前端工程化、依赖管理、性能优化、
    重构、团队协作、可维护、易用性、SEO、UED、前端技术选型、快速学习能力等；
```



## 基础

### 1、DOM结构 —— 两个节点之间可能存在哪些关系

​	可能存在的**关系**: 父(parent) 子(child) 兄(previousSibling) 弟(nextSibling)

### 2、DOM操作 —— 如何添加、移除、移动、复制、创建和查找节点等

​	**添加**

```javascript
// 原生方法 
referenceElement.innerHTML = "<ele></ele>"
referenceElement.appendChild(newElement);
parentElement.insertBefore(newElement, referenceElement);
// 插入到节点前面
referenceElement.parentNode.insertBefore(newElement, referenceElement)
// 插入到节点后面
if (referenceElement.nextSibling === null) {
  referenceElement.parentNode.appendChild(newElement);
} else {
	referenceElement.parentNode.insertBefore(newElement, referenceElement.nextSibling)
}
```

​	**移除**:

```javascript
parentNode.removeChild(removeNode)
parentNode.replaceChild(newChild, oldChild);
```

​	**移动**: 

```javascript
// 同一个父节点的上下移动,没有返回null
referenceElement.previousSibling
referenceElement.nextSibling
referenceElement.parentNode.lastChild
referenceElement.parentNode.firstChild
// 父子节点移动,没有返回null
referenceElement.parentNode // IE: parentElement
referenceElement.childNodes // IE: children
referenceElement.firstChild // other: referenceElement.firstElementsChild
referenceElement.lastChild // other: referenceElement.lastElementChild
```

​	**复制**: `node.cloneNode(deep) // deep为是否采用深复制,无默认值`

​	**创建**:

```javascript
document.createElement("ele")
referenceElement.innerHTML = "<ele></ele>"
```

​	**查找**:

```javascript
document.getElementsByTagName()
document.getElementsByName()
document.getElementsByClassName()
document.getElementById()
querySelector() // IE8以上
querySelectorAll() // IE8以上
```

### 3、事件 —— 如何使用事件，以及IE和标准DOM事件模型之间存在的差别

```javascript
// 通用模式: 通用性最强;但是只支持Bubbling，而不支持Capturing;且无法多次绑定
element.onEvent = eventFunc
// JavaScript标准事件模型事件绑定与解绑
element.addEventListener("eventName", eventFunc)
element.removeEventListener("eventName", eventFunc)
// IE事件模型事件绑定与解绑
element.attachEvent('onEvent', eventFunc)
element.detachEvent('onEvent', eventFunc)
```

![js事件捕获与事件冒泡原型](../img/eventModel.gif)

​	事件捕获: 从不特定到特定; 事件冒泡: 从特定到不特定

​	JavaScript标准事件模型的执行分为三个阶段: **捕获阶段->目标阶段->冒泡阶段**

- 可以使用Event的event对象的`stopPropagation()`方法来阻止事件冒泡；
- 以及使用`preventDefault()` 函数阻止元素的默认事件的执行，比如`<a>` 标签的链接跳转，submit的默认表单提交等。
- addEventListener函数第3个参数useCapture: 确定侦听器是运行于捕获阶段、目标阶段还是冒泡阶段。如果将useCapture设置为true，则侦听器只在捕获阶段处理事件，而不在目标或冒泡阶段处理事件。如果useCapture为false，则侦听器只在目标或冒泡阶段处理事件。要在所有三个阶段都侦听事件，请调用两次addEventListener，一次将useCapture设置为true；第二次再将useCapture设置为false。

  ​IE事件模型**没有捕获阶段**

- 同样也有阻止事件冒泡的方法：首先获得event对象，`e = window.event`（可见IE中的event对象是个全局属性)，然后设置event的cancelBubble属性为true即可`e.cancelBubble = true;`；

- 阻止默认事件发生：先也是获得event对象，设置returnValue属性为false即可，`e.returnValue = false;`

  两者差异:

（1）由于IE不支持事件捕获，所以在注册函数中只有两个参数，类型和处理函数；

（2）标准事件模型中，注册函数时，事件类型前不加on，IE中要加on；

（3）attachEvent注册的函数作为全局调用函数，而不是文档元素的方法，因此this引用的是window对象；

（4）标准事件模型和IE事件模型都允许对同一元素，针对同一事件类型注册多个处理函数。但在标准事件模型中若注册同一函数，与之同名的函数都会被忽略，以第一个为准；在IE中，同一函数可以被注册多次，即发生次数等于注册次数。

### 4、XMLHttpRequest —— 这是什么、怎样完整地执行一次GET请求、怎样检测错误

​	XMLHttpRequest 对象提供了在网页加载后与服务器进行通信的方法。

```JavaScript
// 基本用法
function reqListener () {
  console.log(this.responseText);
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://www.example.org/example.txt");
oReq.send();
// 监控:
// oReq.addEventListener("progress", updateProgress);
// oReq.addEventListener("load", transferComplete);
// oReq.addEventListener("error", transferFailed);
// oReq.addEventListener("abort", transferCanceled);

// 以前的用法:
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();

// 兼容性:
if (window.XMLHttpRequest) {
    // code for modern browsers
    xmlhttp = new XMLHttpRequest();
 } else {
    // code for old IE browsers
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
```

### 5、Doctype?严格模式与混杂模式 —— 如何触发这两种模式，区分它们有何意义

​	在标准模式中，浏览器根据规范呈现页面;在混杂模式中，页面以一种比较宽松的向后兼容的方式显示。

### 6、盒模型 —— 外边距、内边距和边框之间的关系，及IE8以下版本的浏览器中的盒模型

​	IE8以下版本的width和height不包括内边距和边框.

### 7、块级元素与行内元素与内联块元素 —— 怎么用CSS控制它们、以及如何合理的使用它们

​	使用`display:inline;`转行内,`display:block`转块级,`display:inline-block`转内联块

​	行内元素:

- 在一行内排布


- `text-align`有效

- 宽 高 内边距的顶和底 外边距的顶和底 不可改变.也就是**无法改变行内元素的大小,也无法用padding和margin改变元素的上下位置**

  块级元素:

- 元素结束后自动换行

- 可以设置宽 高 内边距的顶和底 外边距的顶和底

  内联块元素:

- 在一行内排布

- 可以设置宽 高 内边距的顶和底 外边距的顶和底

### 8、浮动元素 —— 怎么使用它们、它们有什么问题以及怎么解决这些问题

​	使用`float:left`可以控制为浮动元素。

​	浮动元素的问题:高度塌陷。

### 9、HTML与XHTML —— 二者有什么区别，你觉得应该使用哪一个并说出理由。

​	XHTML比HTML更严格

### 10、JSON —— 作用、用途、设计结构

​	json是一种轻量级数据交换格式，易于解析和生成。用于数据的存储，发送等等。

​	包含两种结构：

- 名称/值：不同的语言中被理解为对象，记录，结构等
- 值的有序表：即数组