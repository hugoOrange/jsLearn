#### @import和link标签的区别

`@import`是用来css文件里面导入其他css文件时使用的。无法导入其他类型的文件，而link可以定义其他属性；且对css2.1以下不支持；`@import`需要在执行到该语句时才开始加载，即比link标签延迟加载。



#### 属性继承的原则

- 所有元素可继承：visibility和cursor
- 内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction
- 块状元素可继承：text-indent和text-align
- 列表元素可继承：list-style、list-style-type、list-style-position、list-style-image
- 表格元素可继承：border-collapse
- 完全不可继承：display、margin、border、padding、background、height、min-height、max- height、width、min-width、max-width、overflow、position、left、right、top、 bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、 page-bread-before和unicode-bidi




#### 垂直居中

- 绝对定位

  - 设置`top:50%;transform:translateY(-50%);`
- 两层嵌套：
  - 外层：
    - writing-mode: vertical-lr
    - text-align: center;
  - 中间层：
    - writing-mode: horizontal-tb;
    - display: inline-block;
    - text-align: center;
    - width: 100%;
  - 居中元素：
    - display: inline-block;
    - margin: auto;
    - text-align: left;
- line-height
  - 外层：
    - line-height: 300px;
    - text-align: center;
  - 居中元素：
    - display: inline-block;
    - vertical-align: middle;
    - line-height: initial;
- flex，外部使用`display:flex;justify-content:center;align-items:center;`
- grid，外部使用`display:grid`，内部使用`align-self:center;justify-self:center;`




#### 多列等高

​	设置父容器`overflow:hidden`，然后对子元素设置超出正负相抵的padding-bottom（如2000px)和margin-bottom（-2000px），这样子元素高度一变化，就会被撑住。



#### 常见浏览器兼容性问题

- png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8

  * 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。



  *  Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决
  *  超链接访问过后hover样式就不出现了。被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:  L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}
  *  IE浏览器给图片加超链接时,图片会自动加上边框(紫色两像素的边框)。解决方案：img{border:none
  *  IE6浮动元素横向margin加倍（产生因素：一个块元素、float：left、margin-left：5px时 ，显示的margin为10px；行内元素没有上下外边距，有左右外边距。）解决方案：display：inline；使浮动忽略IE下再解析为5px
  *  margin:0 auto,对IE6不起作用。解决方案：给body{text-align:center}
  *  经典3像素bug：IE6浏览器，浮动块元素与未浮动块元素处于同一行，有默认的3px间距。解决方案：设置非浮动元素浮动
  *  高度自适应问题（最小高度）IE6不认识min-height，IE6里的内容会自动撑开。解决方案：div { height:auto!important; height:200px; min-height:200px; }
  *  opacity 定义元素的透明度。解决方案：filter：alpha（opacity=80）；/*ie支持该属性*/                     opacity：0.8；/*支持css3的浏览器*/
  *  cursor。解决方案：cursor: pointer 可以同时在 IE Chrome 等中显示游标手指状， hand 仅 IE 可以




#### 外边距合并

​	块级元素的[上外边距](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-top)和[下外边距](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin-bottom)有时会合并（或折叠）为一个外边距，其大小取其中的最大者，这种行为称为**外边距折叠**（margin collapsing），有时也翻译为**外边距合并**。注意[浮动元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/float)和[绝对定位元素](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position#absolute)的外边距不会折叠。

​	防止方法：

- 被非空内容、padding、border 或 clear 分隔开。
- 不在一个普通流中或一个BFC中。
- margin在垂直方向上不毗邻。
  例外的情况：
- 根元素的外边距不会参与折叠
- 不设置任何属性的空span和空div不影响任何布局，可以无视之。




#### 浏览器解析css选择器

从右往左匹配直到和规则匹配或者因不匹配而放弃。



#### 元素竖向的百分比设定是相对于容易的宽度而不是高度



#### 在网页中的应该使用奇数还是偶数的字体？为什么呢？

​	兼容性问题；有些浏览器会把奇数字体渲染成偶数字体；有些字体缺少奇数字体；奇数字体文本段落不好对齐



#### 如果需要手动写动画，你认为最小时间间隔是多久，为什么

多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60*1000ms ＝ 16.7ms





