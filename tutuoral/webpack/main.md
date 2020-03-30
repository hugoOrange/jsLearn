#Webpack

## 为什么用webpack

​	webpack是一个**模块打包机**，使用webpack能够帮助我们加载每一个脚本文件所需要的依赖，经常用于对一些脚本文件进行编译。

​	与`Grunt` `Gulp`的区别是webpack是根据一个起始文件（如index.js）不断查找项目的依赖，进而打包为一个（或多个）JavaScript文件。后者则是读取所有文件，进行压缩，组合再打包。

## 使用流程

#### 准备

```shell
$ mkdir my-project
$ cd my-project
$ npm init
```

​	这样操作之后会创建项目目录`my-project`，并在该目录下有一个`package.json`文件。

#### 安装webpack

```shell
$ npm install --save-dev webpack
```

#### 创建模块

```shell
$ mkdir app
$ mkdir public
$ touch public/index.html
$ touch public/main.js
```

​	其中，`app`文件存放服务器文件，`public`存放前端文件。

#### 编写模块

```javascript
// 引用
const configJs = require('./config.js');
// 到处
module.exports = function() {
    return {};
}
```

#### 打包

​	`webpack`使用

```shell
$ node_modules/.bin/webpack entry.js output.js
```

​	通过配置文件`webpack.config.js`来打包：

```javascript
module.exports = {
    // 入口文件，由此文件进行遍历寻找依赖，进行打包
    entry: __dirname + "/app/main.js",
    // 打包文件的输出属性
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    }
}
```

​	按如下方式配置`package.json`，就可以之使用命令行`npm start`代替`webpack`执行，因为这样执行`npm`会自动去`node_modules/.bin/`中寻找

```json
{
    "...": "...",
    "scripts": {
        "start": "webpack"
    }
}
```

##最佳实践

​	`webpack`配置：

```javascript
module.exports = {
    // 已多次提及的唯一入口文件
    entry: __dirname + "/app/main.js",
    output: {
        // 打包后的文件存放的地方
        path: __dirname + "/public",
        // 打包后输出文件的文件名
        filename: "bundle.js"
    },
    // 打包方式
    devtool: 'eval-source-map',
};
```

##一些常用的模块载入

### 本地服务器

````shell
$ npm install -D webpack-dev-server
````

```javascript
module.exports = {
    "...": "...",
    devServer: {
        // 本地服务器所加载的页面所在的目录
        contentBase: "./public",
        // 监听端口，默认"8080"
        port: "10000",
        // 不跳转
        historyApiFallback: true,
        // 实时刷新
        inline: true
    }
}
```

### loaders

##### Babel

​	`Babel`是一个编译`ES6`、`JSX`语法的编译器。

```shell
$ npm install -D babel-core babel-loader babel-preset-env babel-preset-react 
$ npm install -D react react-dom
```

```javascript
module.exports = {
    "..": "..",
    loaders: {
        rules: [{
            // 用以进行文件匹配的正则
        	test: /(\.jsx|\.js)$/,
            use: {
                // 使用的loader
                loader: "babel-loader",
                options: {
                    presets: [
                        "env",
                        "react"
                    ]
                },
            	// 不需处理的文件
                exclude: /node_modules/
            }
        }]
    }
}
```

​	其他的还有`css-loader`。

### plugins



##参考资料

[入门Webpack,看这篇就够了](https://segmentfault.com/a/1190000006178770)