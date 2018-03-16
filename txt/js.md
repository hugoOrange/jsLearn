## cookies sessionStorage localStorage

- cookies　是用来标识用户身份的，通常需要加密；并在始终在同源的http请求中携带；允许存储的数据量较小
- sessionStorage　存储持久化数据，不会在请求中携带，且一般不加密；在浏览器窗口关闭后自动删除
- localStorage　存储持久化数据，不会在请求中携带，且一般不加密，关闭浏览器也不会自动删除



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




#### 浏览器内核

- Trident(IE内核)，在IE4-IE11版本中使用。IE 从版本 11 开始，初步支持 WebGL 技术。IE8 的 JavaScript 引擎是 Jscript，IE9 开始用 Chakra，这两个版本区别很大，Chakra 无论是速度和标准化方面都很出色。国内很多的双核浏览器的其中一核便是 Trident，美其名曰 “兼容模式”。Window10 发布后，IE 将其内置浏览器命名为 Edge，Edge 最显著的特点就是新内核 EdgeHTML。
- Gecko(Firefox 内核)，是开源的。
- Webkit(Safri内核)
- chromium(chrome前内核)，由`Webkit` fork而来
- Blink(chrome现在内核)



###页面可见性（Page Visibility API）

- 通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等
- 在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；



####如何在页面上实现一个圆形的可点击区域？

- map+area或者svg
- border-radius
- 纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等



