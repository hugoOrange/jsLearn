##JavaScript

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

