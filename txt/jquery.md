##JQuery

##问题

### define的模块化编程原理



###jQuery.fn = jQuery.prototype = ... ?



###JQuery为什么要有一个空函数`noop: function () {}`





## 最佳实践

###设置默认值

`target = arguments[i] || {};`

####类型判断

**Object.prototype.toString.call(target)** [效率较差]:

```javascript
Object.prototype.toString.call("2")
// "[object String]"
Object.prototype.toString.call([])
// "[object Array]"
Object.prototype.toString.call({})
// "[object Object]"
Object.prototype.toString.call(2)
// "[object Number]"
Object.prototype.toString.call(()=>{})
// "[object Function]"
Object.prototype.toString.call(true)
// "[object Boolean]"
Object.prototype.toString.call(null)
// "[object Null]"
Object.prototype.toString.call(undefined)
// "[object Undefined]"
Object.prototype.toString.call(Symbol(0))
// "[object Symbol]"
```

