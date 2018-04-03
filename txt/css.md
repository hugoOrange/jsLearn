#### @import和link标签的区别

`@import`是用来css文件里面导入其他css文件时使用的。无法导入其他类型的文件，而link可以定义其他属性；且对css2.1以下不支持；`@import`需要在执行到该语句时才开始加载，即比link标签延迟加载。



#### 属性继承的原则

- 所有元素可继承：visibility和cursor
- 内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction（大部分和字体有关）
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



  * Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决

  * 超链接访问过后hover样式就不出现了。被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:  L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}

  * IE浏览器给图片加超链接时,图片会自动加上边框(紫色两像素的边框)。解决方案：img{border:none}

  * IE6浮动元素横向margin加倍（产生因素：一个块元素、float：left、margin-left：5px时 ，显示的margin为10px；行内元素没有上下外边距，有左右外边距。）解决方案：display：inline；使浮动忽略IE下再解析为5px

  * margin:0 auto,对IE6不起作用。解决方案：给body{text-align:center}

  * 经典3像素bug：IE6浏览器，浮动块元素与未浮动块元素处于同一行，有默认的3px间距。解决方案：设置非浮动元素浮动

  * 高度自适应问题（最小高度）IE6不认识min-height，IE6里的内容会自动撑开。解决方案：div { height:auto!important; height:200px; min-height:200px; }

  * opacity 定义元素的透明度。解决方案：

    ```css
    filter：alpha（opacity=80）； /* ie支持该属性 */
    opacity：0.8；               /* 支持css3的浏览器 */
    ```

  * cursor。解决方案：cursor: pointer 可以同时在 IE Chrome 等中显示游标手指状， hand 仅 IE 可以

  * haslayout问题，haslayout是一个非标准属性，在IE7及更低版本支持，当它被触发时可能造成一些列未知的后果。

  * zoom的用法，ie专有，设置即可重新渲染，常用了解决ie下外边距的折叠，浮动的清楚，触发haslayout属性




#### 什么是CSS hack

由于不同厂商的流览器或某浏览器的不同版本（如IE6-IE11,Firefox/Safari/Opera/Chrome等），对CSS的支持、解析不一样，导致在不同浏览器的环境中呈现出不一致的页面展现效果。这时，我们为了获得统一的页面效果，就需要针对不同的浏览器或不同版本写特定的CSS样式，我们把这个针对不同的浏览器/不同版本写相应的CSS code的过程，叫做CSS hack!



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



####什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？

响应式设计指得是页面的流布局、可适应变化的图片和媒体查询。与自适应不同的是其布局可能会同时改动。

响应式设计基于CSS的媒体查询。常采用

涉及到**优雅降级**（先做好一个版本，再往低版本兼容），或**渐进增强**（先针对低版本进行构建，再对高级浏览器进行效果、交互等等进行追加改进）。对于低版本的IE，考虑*respond.js*。



####css有哪些单位

​	px，em，%，

- calc，eg: `width:calc(90%-100px);`（>=ie9,safari & chrome: -webkit,opera can't)
- rem 相对根元素（一般是html）的大小，(>=ie9)
- vw和vh，1vv = 1 viewport width / 100, 1 vh = 1 viewport height /100(support not well)
- vmin和vmax，vmin = min(viewport width, viewport height) / 100(support not well)
- ex和ch，ex = 当前字体的`x-height`或者一个`em`的一半，ch相当于em的rem版本。(ch: only >=ie9 & FF)




#### 视差滚动效果

让多层背景以不同速度滚动来形成立体的运动效果。

可以使用`background-attachement`这个属性来实现（ie6下不行）



####如何修改chrome记住密码后自动填充表单的黄色背景 ？

```css
input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  background-color: rgb(250, 255, 189); /* #FAFFBD; */
  background-image: none;
  color: rgb(0, 0, 0);
}
```



####position:fixed;在android下无效怎么处理？

 	fixed的元素是相对整个页面固定位置的，你在屏幕上滑动只是在移动这个所谓的viewport，原来的网页还好好的在那，fixed的内容也没有变过位置，所以说并不是iOS不支持fixed，只是fixed的元素不是相对手机屏幕固定的。

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
```



####如何除去display:inline-block产生的空隙

移除（html里的）空格的换行；使用负margin进行偏移；设置为0字体大小；letter-spacing；word-spacing



####各个display的百分比高度是相对于谁而言的

position有4个值  除了默认的static值外  被设置了其它值的称为‘positioned’元素。

而设置了position为absolute值的元素  其宽高的百分比是相对于距离它最近的祖先‘positioned’元素。

如果你想要你的div的宽高与父级关联  就把父级的position设置为relative或absolute或fixed



####css预处理器LESS、SASS，后处理器PostCSS



####行高属性line-height

- 行高才是撑起一行高度的属性而不是height
- 使用行高代替高度可避免haslayout的bug
- 所谓的基线（vertical-align / align-self /...）对齐就涉及到行高；由于“[幽灵空白字符](http://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/)”的存在，使得行高被撑开，造成vertical-align的baseline没有真正垂直居中，所以使用vertical-align:middle的同时还要加上line-height加以控制




#### BFC

BFC 即 Block Formatting Contexts (块级格式化上下文)，是 W3C CSS2.1 规范中的一个概念。它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。**不会在布局上影响到外部元素样式**。

只要元素满足下面任一条件即可触发 BFC 特性：

- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)

BFC作用：

- 不和浮动元素重叠
- 清除元素内部浮动
- 解决上下相邻两个元素重叠




#### 回流和重绘

html文件和css文件会分别先被解析成 Dom Tree 和 样式结构体；进而整合成 Render Tree，再进行界面的绘制。

**回流**是当界面的某一部分的尺寸（如width）、布局、隐藏等改变而需要进行重新构建；**重绘**是界面某一属性（如color）发生变化需要进行后才能更新绘制。

回流要比重绘开销大，所以尽量减少回流。方法：

- 直接改变className，如果动态改变样式，则使用cssText（考虑没有优化的浏览器）
- 让要操作的元素进行”离线处理”，处理完后一起更新
  - 使用DocumentFragment进行缓存操作,引发一次回流和重绘
  - 使用display:none技术，只引发两次回流和重绘
  - 使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；
- 不要经常访问会引起浏览器flush队列的属性，如果你确实要访问，利用缓存
- 让元素脱离动画流，减少回流的Render Tree的规模



