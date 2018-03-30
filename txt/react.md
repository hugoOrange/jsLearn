###构造函数

必须先调用super: `super()`



#### Virtual DOM

为了优化DOM操作，react用了VIrtual DOM算法，所以不会实际用到真正的DOM，需要访问DOM的时候需要访问元素的ref属性：

```javascript
<input ref={input => this.inputELe = input}/>
```



#### Virtual DOM 算法

在DOM和JavaScript之间做一个缓存，用JavaScript对象来存储DOM树结构，当JavaScript对象更新完之后再更新DOM树。



###组件事件绑定

用`onXX`绑定，绑定this

```javascript
render() {
    return (
        <button onClick={this.btnClick.bind(this)}>
        </button>
	)
}
```



### 组件生命周期

- constructor 构造阶段
- componentWillMount、componentDidMount 第一次渲染阶段
- shouldComponentUpdate、componentWillReceiveProps、componentWillUpdate、componentDidUpdate 重新渲染阶段
- componentWillUnMount、componentDidUnMount 元素删除阶段