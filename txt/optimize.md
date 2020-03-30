## js

### 减少DOM操作

- 减少现场更新
  - 使用`document.createDocumentFragment`进行插入操作
  - 先隐藏，在插入，仍然开销大，少用
- 使用事件委托

```html
<ul>
    <li data-id="1"></li>
    <li data-id="2"></li>
</ul>
```

```javascript
var ul = document.querySelector("ul");
ul.addEventListener("click", function(event) {
    var target = event.target;
    if (target.tagName === "LI") {
        switch(target.dataset.id) {
            case "1":
                break;
            case "2":
                break;
        }
    }
}, false);
```

### 使用setTimeout模拟setInternel



### 节流



### 减少查询



### 循环优化

- 减值迭代
- 展开循环

### 在DOM节点删除之前手动解绑事件



### 使用闭包之后要手动删除闭包变量

```javascript
function PersonCal() {
    var personNum = {
        man: 0,
        woman: 0
    };
    return {
        addMan: () => personNum.man++,
        addWoman: () => personNum.woman++,
        destory: () => personNum = null     // 把对象删除
    }
}
```

### 避免与null比较

null不容易确定代码的目的。

- 如果值是一个引用类型，用instanceOf检查其构造函数
- 如果值是一个基本类型，用typeof检查
- 如希望`Person`对象中有`add`方法：`if(typeof person.add === "function") {}`

### 减少HTTP请求



### 最小化语句数

- 多个变量声明
- 插入迭代值：`var name = values[i++];`
- 使用字面量

### 减少全局变量

### 不用with

### 解耦事件与逻辑

### 使用常量