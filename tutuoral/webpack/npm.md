# npm

​	参考自[JavaScript标准参考教程](http://javascript.ruanyifeng.com/nodejs/npm.html)

##介绍

​	npm，一层含义是Node的开放式模块登记和管理系统，网址为[npmjs.org](http://npmjs.org/)。另一层含义是Node默认的模块管理器，是一个命令行下的软件，用来安装和管理Node模块。

## 安装

​	一般来说，在安装`node`的时候就默认安装了`npm`，但是也可以用下面的命令安装最新版：

```shell
$ npm install npm@lastest -g
```

##使用

###初始化

​	使用下面的命令可以初始化，会在项目生成`package.json` `package-lock.json`文件。其中`-f` `-y`可以跳过询问直接生成文件。

```shell
$ npm init
```

###配置

####默认配置

​	使用`set`可以设置初始化时的默认值，设置成功后这些信息会保存在`~/.npmrc`文件中。

```shell
$ npm set init-author-name 'hugoOrange'
$ npm set init-author-email 'hugohaohao@qq.com'
$ npm set init-author-url 'http://github.com/hugoOrange'
$ npm set init-license 'MIT'
```

​	同时我们还可以设置全局模块全局安装时的目录，如果这个目录有写权限，就不用每次都`sudo`了。

```shell
$ npm config set prefix "./module"
```

​	其他设置：

```shell
# 限制使用"--save"或"--save-dev"时只能进行小版本更新
$ npm config set save-prefix ~
# 类似与用"set"进行设置
$ npm config set init.author.name "hugoOrange"
```

####查看配置信息

​	假设一个这样的`json`文件。

```json
{
    "name": 'underscore',
  	"description": 'JavaScript\'s functional programming helper library.',
  	"dist-tags": {
        latest: '1.5.2',
        stable: '1.5.2'
    },
  	"repository":{
        type: 'git',
     	url: 'git://github.com/jashkenas/underscore.git'
    },
    "homepage": 'http://underscorejs.org',
  	"main": 'underscore.js',
  	"version": '1.5.2',
  	"devDependencies": {
        "phantomjs": '1.9.0-1'
    },
  	"licenses":{
        type: 'MIT',
     	url: 'https://raw.github.com/jashkenas/underscore/master/LICENSE'
    },
  	"files": [
        'underscore.js',
     	'underscore-min.js',
     	'LICENSE'
    ],
  	"readmeFilename": 'README.md'
}
```

```shell
# 使用info查看字段信息
$ npm info underscore description
JavaScript's functional programming helper library.

$ npm info underscore homepage
http://underscorejs.org
# 查看已安装的模块
$ npm list
$ npm list -global
$ npm list underscore
```

###安装模块

​	使用`npm install`安装模块。安装后生成`node_modules`目录，用于存放模块。默认情况下，`npm install`只在当`node_modules`目录中模块不存在时才会安装，并且安装最新版本。

```shell
# 本地安装
$ npm install socket.io
# 全局安装
$ npm install -global socket.io
$ npm install -g socket.io
# 安装某个特定模块
$ npm install git://github.com/package/path.git#0.1.0
# 强制重装某一模块
$ npm install socket.io --force
$ npm install socket.io -f
#　安装某一版本模块
$ npm install socket.io@lastest
$ npm install socket.io@1.2.3
$ npm install socket.io@">=0.1.1 < 2.0.0"
# 根据"package.json"安装某一版本模块
$ npm install socket.io --save-exact
#　模块名分别添加到"dependencies"中"devDenpendencies"
$ npm install socket.io --save
$ npm install socket.io --save-dev
$ npm install socket.io -S
$ npm install socket.io -D
# 安装测试版本beta版本（开发者会在发布时打上"beta"标签）
$ npm install socket.io@beta (latest beta)
$ npm install socket.io@1.3.1-beta.3
# 直接安装自"package.json"中的模块，下面的只安装"dependencies"中的模块，上面的还会安装"devDependencies"中的模块
$ npm install
$ npm install --production
```

### 模块管理

```shell
# 升级当前项目的指定模块
$ npm update socket.io
$ npm update -global socket.io
# 卸载模块
$ npm uninstall socket.io
$ npm uninstall socket.io -global
```

###运行脚本

​	`npm`不仅提供了模块管理的功能，还运行用户运行预置的脚本。

```json
{
	"name": "myproject",
	"devDependencies": {
		"jshint": "latest",
		"browserify": "latest",
		"mocha": "latest"
	},
	"scripts": {
		"lint": "jshint **.js",
		"test": "mocha test/",
		// 先后操作用"&&"，平行操作用"&"
		// "build": "npm run build-js && npm run build-css"
	}
}
```

​	上述的`package.json`可运行的脚本包括

```shell
$ npm run test  # npm test
# $ npm run start # npm start
$ npm run lint
# 接收参数，使用"--"连接
$ npm test -- xxx
```

##最佳实践

​	先安装`npm-run-all`模块：`npm install npm-run-all --save-dev`，该模块可用于运行多个`scripts`命令。如`npm-run-all build:html build:js`。

```json
{
    // 使用内部变量，在scripts引用时"npm_package_config_input"
    // 或 "npm_package_config_version"
    "config": {
        "input": "xxx",
        "version": "0.1"
	},
    "script": {
        // 启动程序
        "start": "node app",
        // 用于开发阶段的处理，如编译sass
        "dev": "npm-run-all dev:*",
        "dev:sass": "node-sass --source-map src/css/hoodie.css.map --watch --output-style nested src/sass/base.scss src/css/hoodie.css",
        "dev:sass": "node-sass --source-map src/css/hoodie.css.map --watch --output-style nested src/sass/base.scss src/css/hoodie.css",
		"dev:autoprefix": "postcss --use autoprefixer --autoprefixer.browsers \"> 5%\" --output src/css/hoodie.css src/css/hoodie.css",
        // 启动服务器        
        "serve": "live-server dist/ --port=9090",
		// 进行测试
        "test": "npm run-all test:*",
        "test:lint": "sass-lint --verbose --config .sass-lint.yml src/sass/*",
        // 使用"pre-"或"post-"钩子，进行预处理或后处理
        "pretest": "",
        "posttest": "",
        // 生产
        "prod": "npm-run-all prod:*",
        "prod:sass": "node-sass --output-style compressed src/sass/base.scss src/css/prod/hoodie.min.css",
		// 帮助信息
		"help": "markdown-chalk --input DEVELOPMENT.md",
        // 生成文档
		"docs": "kss-node --source src/sass --homepage ../../styleguide.md"
    }
}
```

##发布自己的模块

### 引入自己的模块

###发布自己的模块

###管理更新自己的模块

##其他用法