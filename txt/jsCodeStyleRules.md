# javascript 编码规范

​	来源于[Google编码规范](https://google.github.io/styleguide/jsguide.html).有删减.

## 基本

### 文件名

​	全部小写,不包含除 `-` `_` 外的标点

### 编码

​	utf-8

### 空白字符

​	除行终止符序列外，ASCII水平空格字符（0x20）是唯一出现在源文件中任何位置的空白字符。也意味着`Tab`不用于缩进.

### 特殊字符

​	对于任何具有特殊转义序列,不使用数字转义和传统的八进制转义从不使用。

### 非ASCII字符

| Example                                  | Discussion                               |
| ---------------------------------------- | ---------------------------------------- |
| `const units = 'μs';`                    | Best: perfectly clear even without a comment. |
| `const units = '\u03bcs'; // 'μs'`       | Allowed, but there’s no reason to do this. |
| `const units = '\u03bcs'; // Greek letter mu, 's'` | Allowed, but awkward and prone to mistakes. |
| `const units = '\u03bcs';`               | Poor: the reader has no idea what this is. |
| `return '\ufeff' + content; // byte order mark` | Good: 无法打印的字符,使用合理的注释                    |

### 源码结构

​	按照顺序,依次为

1. License or copyright

2. `@fileoverview`文件概述
3. 命名空间(`google`里是`goog.module`语句),以及是否仅用于测试
4. 依赖导入,注意,**这里是唯一合法的依赖导入**

### 格式

#### 大括号

```javascript
class InnerClass {
  // 空大括号内不包含任何字符
  constructor() {}

  /** @param {number} foo */
  // 左大括号右边直接换行
  method(foo) {
    if (condition(foo)) {
      try {
        // Note: this might fail.
        something();
      // 右大括号在 else catch while 之前不用换行
      } catch (err) {
        recover();
      }
    }
  }
}
```

#### 块缩进

 	每一次缩进为2个空格.

#### 数组

```javascript
const a = [
  0,
  1,
  2,
];

const b =
    [0, 1, 2];

const c = [0, 1, 2];

someMethod(foo, [
  0, 1, 2,
], bar);
```

#### 对象

```javascript
const a = {
  a: 0,
  b: 1,
};

const b =
    {a: 0, b: 1};
const c = {a: 0, b: 1};

someMethod(foo, {
  a: 0, b: 1,
}, bar);
```

#### 类

```javascript
class Foo {
  constructor() {
    /** @type {number} */
    this.x = 42;
  }

  /** @return {number} */
  method() {
    return this.x;
  }
}  // 不加分号
Foo.Empty = class {};

/** @extends {Foo<string>} */
foo.Bar = class extends Foo {
  /** @override */
  method() {
    return super.method() / 2;
  }
};  // 要加分号

/** @interface */
class Frobnicator {
  /** @param {string} message */
  frobnicate(message) {}
}
```

#### switch

```javascript
switch (animal) {
  case Animal.BANDERSNATCH:
    handleBandersnatch();
    break;

  case Animal.JABBERWOCK:
    handleJabberwock();
    break;

  default:
    throw new Error('Unknown animal');
}
```

### 语句

​	每行要有分号,除url和一些模块导入语句,每行限制为80个字符.

#### 长语句打断换行

```javascript
// 推荐
currentEstimate =
    calc(currentEstimate + x * currentEstimate) /
        2.0f;
// 不推荐
currentEstimate = calc(currentEstimate + x *
    currentEstimate) / 2.0f;
```

​	一般换行从最高到最低的语法级别:赋值，除法，函数调用，参数，数字常量。

### 空格

#### 不推荐竖直对齐

```javascript
{
  tiny: 42, // this is great
  longer: 435, // this too
};

{
  tiny:   42,  // permitted, but future edits
  longer: 435, // may leave it unaligned
};	
```

