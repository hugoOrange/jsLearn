##JavaScript

关于JavaScript的兼容性问题，常常有3种解决办法：

- 能力检测，常采用
- 怪癖检查
- 浏览器检测，应该尽可能避免

### page size

```javascript
var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;
if (typeof pageWidth !== "number") {
    if (document.compatMode == "CSS1Compat") {
        // 混杂模式的IE
        pageWidth = document.documentElement.clientWidth;
        pageHeight = document.documentElement.clientHeight;
    } else {
        pageWidth = document.body.clientWidth;
        pageHeight = document.body.clientHeight;
    }
}
```

### event

```javascript
function bind(element, eventName, handleFunc) {
    if (element.addEventListener) {
        element.addEventListener(eventName, handleFunc, false);
    } else if (element.attachEvent) { // IE
        element.attachEvent("on" + eventName, handleFunc);
    } else { // others, DOM 0 Level
        element["on" + eventName] = handleFunc;
    }
}
function unbind(element, eventName, handleFunc) {
    if (element.removeEventListener) {
        element.removeEventListener(eventName, handleFunc, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + eventName, handleFunc);
    } else {
        element["on" + eventName] = null;
    }
}
function getEvent(event) {
    return event ? event : window.event;
}
function getTarget(event) {
    return event.target || event.srcElement;
}
function preventDefaule(event) {
    if (event.preventDefault) {
        event.preventDefault();
    } else {
        event.returnValue = false;
    }
}
function stopPropagation(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    } else {
        event.cancelBubble = true;
    }
}
```

###click position

```javascript
// client position
event.clientX
event.clientY
// page position
function getPagePos(event) {
    return {
        pageX: event.pageX || event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft)
        pageY: event.pageY || event.clientY + (docuemnt.body.scrollTop || document.documentElement.scrollTop)
    }
}
// screen position
event.screenX
event.screenY
### plugin testing

```javascript
function hasPlugin(pluginName) {
    var result = hasPlugin(pluginName);
    if (!result) {
        result = hasIEPlugin(pluginName);
    }
    return result;
}
```

