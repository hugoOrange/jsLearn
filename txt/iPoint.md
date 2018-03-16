# 关键点

## html5

### 定义

​	**HTML5** 是定义 [HTML](https://developer.mozilla.org/zh-CN/docs/HTML) 标准的最新的版本。 该术语表示两个不同的概念：

- 它是一个新版本的**HTML**语言，具有新的元素，属性和行为，
- 它有更大的**技术**集，允许更多样化和强大的网站和应用程序。这个集合有时称为HTML5和朋友，通常缩写为**HTML5**。

### 功能简介

- **语义**，增加了新的表示文档段落的标签`<article>`，音频和视频的标签`<video>`，新的表单`<input type="password">`。MathML可以嵌入数学公式。
- **通信**，*websocket*（也用[socketIO](https://socket.io/docs/)），允许在页面和服务器之间建立持久连接并通过这种方法来交换非 HTML 数据；[Server-sent events](https://developer.mozilla.org/zh-CN/docs/Server-sent_events/Using_server-sent_events)允许服务器向客户端推送事件，而不是仅在响应客户端请求时服务器才能发送数据的传统范式。[WebRTC](https://developer.mozilla.org/zh-CN/docs/WebRTC)这项技术，其中的 RTC 代表的是即时通信，允许连接到其他人，直接在浏览器中控制视频会议，而不需要一个插件或是外部的应用程序。

### 离线＆存储

- **离线资源**，未完全实现
- **在线和离线事件**
- [WHATWG 客户端会话和持久化存储 (又名 DOM 存储)](https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/Storage/Storage)，客户端会话和持久化存储让 web 应用程序能够在客户端存储结构化数据。即*Storage对象*。
- [IndexedDB](https://developer.mozilla.org/zh-CN/docs/IndexedDB)是一个为了能够在浏览器中存储大量结构化数据，并且能够在这些数据上使用索引进行高性能检索的 Web 标准。
- [自 web 应用程序中使用文件](https://developer.mozilla.org/zh-CN/docs/Using_files_from_web_applications)，*fileAPi*

### 多媒体

- `<audio>` `<video>`
- **WebRTC**
- **Camera API**，从摄像头获取图像

### 3D，图像，效果

- `<canvas>`
- **WebGL**
- **SVG**

### 性能，集成

- **Web Workers**，使js能够进行多线程运算。但是：

  - 子线程进行计算，不能进行 DOM BOM操作
  - 子线程不能跨域，文件需放在同路径中
  - 子线程不能套子线程
  - 子线程 不和主线程共享数据，而是复制一份儿 哪怕是对象

  也就是说，web workers可以用来进行多线程计算，或者进行发送服务端数据发送和接收

- **XMLHTTPRequest Level 2**，允许异步读取页面等。

  - ajax的两大特性：
    - 发送请求无需重新加载页面
    - 接收并处理来自服务器的数据
  - XMLHTTPRequest示例：

  ```javascript
  var httpRequest = new XMLHttpRequest();
  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }
  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', 'test.html');
  httpRequest.send();

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request.');
      }
    }
  }
  ```

  ​

- **即时编译的JavaScript引擎**

- **History API**，可以前进后退

- **contentEditable属性**，使非`input`元素也可以编辑

- **拖放**

- **HTML中的焦点管理**，仅Firefox

- **基于Web的协议处理程序**

- **requestAnimationFrame**，控制动画渲染来优化

- **全屏API**

- **指针锁定API**

- **在线和离线事件**


### 设备访问

​	**camera API**， **触控事件**，**地理位置定位**，**检测设备方向**，**指针锁定 API**。

### 样式 CSS3

- **背景样式**：box-shadow，多背景
- **边框**：border-radius，border-image
- **动画**：transition，animation

```css
/* animation */
@keyframes slidein {
  from { margin-left: 100%; width: 300%; }
  to { margin-left: 0%; width: 100%; }
}
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
```

- **排版**：文本内容溢出(text-overflow)，换行时单词的分段(hyphens)，阴影(text-shadow)，文本装饰线(text-decoration)；以上要注意兼容性
- **布局**：***multi-column layouts***，用来设置文本格式，可如何分段换行，***flex-box***



## H5：离线存储

​	使用：

```html
<!DOCTYPE HTML>
<html manifest="cache.manifest">
    ...
</html>
```

​	其中，cache.manifest如下：

```manifest
CACHE MANIFEST
#v0.1

CACHE:

js/app.js
css/style.css

NETWORK:

FALLBACK:

```



## cookies sessionStorage localStorage

- cookies　是用来标识用户身份的，通常需要加密；并在始终在同源的http请求中携带；允许存储的数据量较小
- sessionStorage　存储持久化数据，不会在请求中携带，且一般不加密；在浏览器窗口关闭后自动删除
- localStorage　存储持久化数据，不会在请求中携带，且一般不加密，关闭浏览器也不会自动删除



## label作用

​	自动聚焦到表单控件



## 实现多标签页之间的通信

- **websocket**，有点小题大作
- **localStorage**，localStorage在被修改时会触发事件

```javascript
window.addEventListener('storage', event => {
    console.log(event.key, event.newValue);
})
```

注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常



## webSocket如何兼容低浏览器

- Adobe Flash Socket
- ActiveX HTMLFile (IE)
- 基于 multipart 编码发送 XHR
- 基于长轮询的 XHR





