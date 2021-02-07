(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{280:function(e,a,t){"use strict";t.r(a);var s=t(5),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"webpack配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack配置"}},[e._v("#")]),e._v(" webpack配置")]),e._v(" "),t("h2",{attrs:{id:"webpack-打包后的内容简单版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack-打包后的内容简单版"}},[e._v("#")]),e._v(" webpack 打包后的内容简单版")]),e._v(" "),t("ul",[t("li",[e._v("1 新建a.js 和 b点js两个页面")]),e._v(" "),t("li",[e._v("2 在a.js中引入b.js的某个模块并输出，")]),e._v(" "),t("li",[e._v("3 查看webpack打包后的结果。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('a.js内容 \n\nimprot { goPlay  } from \'./b.js\'\nconsole.log(goPlay())\n\nb.js内容\n\nexport function goPlay(){\n    return \'hello\'\n}\n\nwebpack打包输出的结果 npm run build\n//发现webpack打包结果是通过一个自执行函数包裹。\n\n(() => { "use strict"; console.log("hello") })();\n\n "scripts": {\n    "build": "webpack"//实际查找的即是./node_modules/.bin/webpack\n  },\n')])])]),t("h2",{attrs:{id:"entry指定打包入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entry指定打包入口"}},[e._v("#")]),e._v(" entry指定打包入口")]),e._v(" "),t("p",[e._v("webpack是一个模块打包器，根据文件的依赖关系进行模块化打包。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//单入口\nmodule.exports = {\n    entry:'./path/file1.js'\n}\n\n//多入口\nmodule.exports = {\n    entry:{\n        file1:'./src/file1.js',\n        file2:'./src/file2.js'\n    }\n}\n")])])]),t("h2",{attrs:{id:"output指定打包入口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#output指定打包入口"}},[e._v("#")]),e._v(" output指定打包入口")]),e._v(" "),t("p",[e._v("指定结果代码输出的位置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//在weboack.config.js中配置 \n\n'use strict'\nconst path = require('path')\nconsole.log('path')\nmodule.exports ={\n    //entry配置多个入口\n    entry:{\n        file1:'./src/index.js',\n        file2:'./src/index.js'\n    },\n    output: {\n        path:path.join(__dirname,'dist'),\n        //'[name].js'占位符作用，代表输出的文件名\n        filename:'[name].js'\n    },\n    mode:'production'\n}\n\n//输出结果 在dist目录下会生成file1.js 和 file2.js两个文件 \n\n")])])]),t("h2",{attrs:{id:"loader相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#loader相关"}},[e._v("#")]),e._v(" loader相关")]),e._v(" "),t("h3",{attrs:{id:"常用loader"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用loader"}},[e._v("#")]),e._v(" 常用loader")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("loader名")]),e._v(" "),t("th",[e._v("作用")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("babel-loader")]),e._v(" "),t("td",[e._v("转换es6 es7")])]),e._v(" "),t("tr",[t("td",[e._v("css-loader")]),e._v(" "),t("td",[e._v("支持css文件加载和解析")])]),e._v(" "),t("tr",[t("td",[e._v("scss-loader")]),e._v(" "),t("td",[e._v("把scss转换为css")])]),e._v(" "),t("tr",[t("td",[e._v("ts-loader")]),e._v(" "),t("td",[e._v("把ts转换为js")])]),e._v(" "),t("tr",[t("td",[e._v("file-loader")]),e._v(" "),t("td",[e._v("文件字体相关处理")])]),e._v(" "),t("tr",[t("td",[e._v("thread-loader")]),e._v(" "),t("td",[e._v("多线程打包")])]),e._v(" "),t("tr",[t("td",[e._v("raw-loader")]),e._v(" "),t("td",[e._v("将文件以字符串形式导入")])])])]),e._v(" "),t("h3",{attrs:{id:"babel-loader的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#babel-loader的使用"}},[e._v("#")]),e._v(" babel-loader的使用")]),e._v(" "),t("p",[e._v("通过该方式就可以对es6语法进行支持")]),e._v(" "),t("p",[e._v("1 npm install  @babel/core @babel/preset-env babel-lader -d")]),e._v(" "),t("p",[e._v("2 配置.babellrc文件")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "presets": ["@babel/preset-env"],\n    "plugins": ["@babel/proposal-class-properties"]\n}\n')])])]),t("p",[e._v("3 babel-loader配置")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module:{\n    rules:[{\n        test: /.js$/,\n        use: 'babel-loader'\n    }]\n}\n")])])]),t("p",[e._v("4 babel增加对 react的支持")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 1 npm i react react-dom @babel/preset-react -d\n\n// 2 .babellrc中增加对react的babel\n\n{\n    "presets": ["@babel/preset-env","@babel/preset-react"],\n    "plugins": ["@babel/proposal-class-properties"]\n}\n\n// 3 在要build的文件中增加一段react结构\n\nimport React from \'react\'\nimport ReactDOM from \'react-dom\'\n\nclass Index extends React.Component{\n     render(){\n         return <div>121212</div>\n     }\n}\n\nReactDOM.render(\n    <Index/>,\n    document.getElementById(\'app\')\n)\n\n')])])]),t("h3",{attrs:{id:"css-loader相关处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#css-loader相关处理"}},[e._v("#")]),e._v(" css-loader相关处理")]),e._v(" "),t("p",[e._v("作用")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("css-loader 用于加载.css文件，并转换为commonjs对象")])]),e._v(" "),t("li",[t("p",[e._v("style-loader 将css插入到head中")])]),e._v(" "),t("li",[t("p",[e._v("1 npm i style-loader css-loader -d")])]),e._v(" "),t("li",[t("p",[e._v("2 loader解析scss")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("module:{\n        rules:[{\n            test: /.js$/,\n            use: 'babel-loader'\n        },{\n            test: /.css$/,\n            use: ['style-loader','css-loader']\n        },{\n            test: /.scss$/,\n            use: ['style-loader','css-loader','sass-loader']\n        }]\n    }\n")])])]),t("h3",{attrs:{id:"file-loader相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-loader相关"}},[e._v("#")]),e._v(" file-loader相关")]),e._v(" "),t("ul",[t("li",[e._v("通过使用file-loader可以解析 png jpg gif svg等的解析。用file-loader打包的图片会给每张图片都生成一个随机的hash值作为图片的名字")])]),e._v(" "),t("p",[e._v("使用过程")]),e._v(" "),t("ul",[t("li",[e._v("通过npm i file-loader -d 安装file-loader")]),e._v(" "),t("li",[e._v("file-loader配置")]),e._v(" "),t("li",[e._v("file-loader的常用配置项：\nname配置项是配置打包生成的文件的名字，使用的是placeholder语法， [name]   表示的是原文件的名字；[hash]  表示的是这次打包的hash值   [ext]表示的是原文件的后缀；")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("{\n    test:/.(png|jpg|gif|jpeg|svg)$/,\n    use:'file-loader'\n}\n\n")])])]),t("h2",{attrs:{id:"plugins相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#plugins相关"}},[e._v("#")]),e._v(" plugins相关")]),e._v(" "),t("p",[e._v("plugins作用于整个构建过程。用于bundle文件的优化，资源管理以及环境变量的注入等。")]),e._v(" "),t("h3",{attrs:{id:"常用plugins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用plugins"}},[e._v("#")]),e._v(" 常用plugins")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("plugins名")]),e._v(" "),t("th",[e._v("作用")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("commonChunkPlugin")]),e._v(" "),t("td",[e._v("将chunks相同的代码模块提取到公共")])]),e._v(" "),t("tr",[t("td",[e._v("clearWebpackPlugin")]),e._v(" "),t("td",[e._v("清理dist目录")])]),e._v(" "),t("tr",[t("td",[e._v("UglifyWebpackPlugin")]),e._v(" "),t("td",[e._v("压缩js")])]),e._v(" "),t("tr",[t("td",[e._v("HtmlWebpackPlugin")]),e._v(" "),t("td",[e._v("创建HTML结构并引入bundle")])]),e._v(" "),t("tr",[t("td",[e._v("ZipWebpackPlugin")]),e._v(" "),t("td",[e._v("将打包后的文件压缩为zip")])]),e._v(" "),t("tr",[t("td",[e._v("thread-loader")]),e._v(" "),t("td",[e._v("多线程打包")])]),e._v(" "),t("tr",[t("td",[e._v("ExtractTextWebpackPlugin")]),e._v(" "),t("td",[e._v("将css从bundle里提取出成为一个独立的css文件")])])])]),e._v(" "),t("h3",{attrs:{id:"热更新相关问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热更新相关问题"}},[e._v("#")]),e._v(" 热更新相关问题")]),e._v(" "),t("ul",[t("li",[e._v("方法1 通过watch参数配置更新（使用该方式需要每次修改完配置之后都需要刷新页面）")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('// 启动webpack 设置--watch 或者 在webpack.config.js中设置watch\n\nscripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "build": "webpack --watch",//增加watch 参数\n    "dev": "webpack-dev-server --open"\n}\n')])])]),t("ul",[t("li",[e._v("方法2  webpack-dev-server热更新\n"),t("ul",[t("li",[e._v("不需要刷新浏览器。")]),e._v(" "),t("li",[e._v("不需要输出文件，放在内存中。")]),e._v(" "),t("li",[e._v("可以使用HotModuleReplacementPlugin(webpack自带)")]),e._v(" "),t("li",[e._v("要将mode模式改为development")])])])]),e._v(" "),t("p",[e._v("使用")]),e._v(" "),t("ul",[t("li",[e._v("1 安装 sudo npm install webpack-dev-server -g")]),e._v(" "),t("li",[e._v("2 配置package.json")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(' "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "build": "webpack --watch",\n    "dev": "webpack-dev-server --open"\n },\n\n')])])]),t("ul",[t("li",[e._v("3 webpack.config.js配置")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//\nmodule.exports ={\n    entry:{\n        file1:'./src/index.js',\n    },\n    output: {\n        path:path.join(__dirname,'dist'),\n        filename:'[name].js'\n    },\n    mode:'development',\n    module:{\n        rules:[{\n            test:/.(png|jpg|gif|jpeg|svg)$/,\n            use:'file-loader'\n         }]\n    },\n    plugins:[\n        new webpack.HotModuleReplacementPlugin()\n    ],\n    devServer:{\n        contentBase:'./dist',\n        hot:true\n    }\n}\n")])])]),t("h3",{attrs:{id:"sliptchunksplugin进行公共脚本分离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sliptchunksplugin进行公共脚本分离"}},[e._v("#")]),e._v(" sliptChunksPlugin进行公共脚本分离")]),e._v(" "),t("h2",{attrs:{id:"文件指纹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件指纹"}},[e._v("#")]),e._v(" 文件指纹")]),e._v(" "),t("ul",[t("li",[e._v("hash跟整个项目的构建相关，只要项目有修改，整个项目构建的hash就会发生改变。")]),e._v(" "),t("li",[e._v("chunkhash 和webpack打包 的chunk有关，不同的entry对应的chunk不一样。")]),e._v(" "),t("li",[e._v("contenthash 根据文件内容定义hash，内容不同hash值不同。")])]),e._v(" "),t("h2",{attrs:{id:"html-css-js压缩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#html-css-js压缩"}},[e._v("#")]),e._v(" HTML CSS JS压缩")]),e._v(" "),t("ul",[t("li",[e._v("webpack内置uglifyjs-webpack-plugin")])]),e._v(" "),t("p",[e._v("(由于浏览器在生产环境默认开启了uglifyjs-webpack-plugin，js会被自动压缩)")]),e._v(" "),t("ul",[t("li",[e._v("optimize-css-assets-webpack-plugin + cssnano")])]),e._v(" "),t("p",[e._v("用来压缩css")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//第一步导入相关资源\nnpm i  optimize-css-assets-webpack-plugin -d\nnpm i cssnano -d \n//引入资源+配置，即可以把css压缩\nconst optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') \n\nplugins:[\n    new optimizeCssAssetsPlugin({\n        assetNameRegExp:/\\.css$/g,\n        cssProcessor:require('cssnano')\n    })\n],\n")])])]),t("ul",[t("li",[e._v("设置html-webpack-plugin设置压缩参数，压缩html文档")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("npm i html-webpack-plugin -d\n\n")])])]),t("h2",{attrs:{id:"mode内置函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mode内置函数"}},[e._v("#")]),e._v(" Mode内置函数")]),e._v(" "),t("p",[e._v("通过 process.en.NODE_ENV值为development/production")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("模式")]),e._v(" "),t("th",[e._v("描述")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("developement")]),e._v(" "),t("td",[e._v("会开启NamedChunksPlugin 和 NameModulesPlugin")])]),e._v(" "),t("tr",[t("td",[e._v("production")]),e._v(" "),t("td",[e._v("会开启FlagDependencyUsagePlugin，FlagIncluedChunksPlugin，ModuleConcatenationPlugin，NoEmitOnErrorsPlugin，OccurrenceOrderPlugin，SideEffectsFlagPlugin 和 TerserPlugin")])]),e._v(" "),t("tr",[t("td",[e._v("none")]),e._v(" "),t("td",[e._v("不开启任何优化")])])])]),e._v(" "),t("h2",{attrs:{id:"source-map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#source-map"}},[e._v("#")]),e._v(" source map")]),e._v(" "),t("p",[e._v("source map设置等级，可以方便开发环境的调试。")]),e._v(" "),t("h2",{attrs:{id:"简单webpack从0搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单webpack从0搭建"}},[e._v("#")]),e._v(" 简单webpack从0搭建")]),e._v(" "),t("p",[e._v("package.json")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('   {\n  "name": "webpackStudy",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n    "dev": "webpack-dev-server --config  config/webpack.dev.js"\n  },\n  "keywords": [],\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "html-webpack-plugin": "^4.5.0",\n    "webpack": "^4.44.2",\n    "webpack-cli": "^3.3.12",\n    "webpack-merge": "^4.2.2",\n    "webpack-dev-server": "^3.11.0"\n  },\n  "dependencies": {}\n}\n\n  },\n')])])]),t("p",[e._v("新建config")]),e._v(" "),t("p",[e._v("webpack是模块化打包工具，通过webpack可以把 .vue .sass .less .jsx .js等编译成 .js .css .png .jpg")]),e._v(" "),t("div",{staticClass:"language-angular2html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("##  全局安装webpack\nnpm i webpack  webpack-cli -g\n\n## 版本检查\nwebpack -v\n")])])]),t("h3",{attrs:{id:"webpack打包后的文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#webpack打包后的文件"}},[e._v("#")]),e._v(" webpack打包后的文件")]),e._v(" "),t("ul",[t("li",[e._v("首先打包后的结果，该函数是自执行函数")])]),e._v(" "),t("div",{staticClass:"language-angular2html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("(function(){\n\n})('key':function(){})\n\n// key 代表文件路径 value：是一个函数（执行当前文件的代码），通过eval执行字符串代码\nwebpack把相互依赖的多个文件，  打包成为一个文件。\n\n\n//多个文件打包成一个文件，通过__webpack_require__ 该函数通过递归自己调用自己，引入依赖的文件。  把所有文件打包形成一个文件。\nfunction __webpack_require__(moduleId){\n}\n\n")])])]),t("div",{staticClass:"language-angular2html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n (function(modules) { // webpackBootstrap\n \t// The module cache\n \tvar installedModules = {};\n\n \t// The require function\n \tfunction __webpack_require__(moduleId) {\n\n \t\t// Check if module is in cache\n \t\tif(installedModules[moduleId]) {\n \t\t\treturn installedModules[moduleId].exports;\n \t\t}\n \t\t// Create a new module (and put it into the cache)\n \t\tvar module = installedModules[moduleId] = {\n \t\t\ti: moduleId,\n \t\t\tl: false,\n \t\t\texports: {}\n \t\t};\n\n \t\t// Execute the module function\n \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n \t\t// Flag the module as loaded\n \t\tmodule.l = true;\n\n \t\t// Return the exports of the module\n \t\treturn module.exports;\n \t}\n    (function(module, exports) {\n    eval(\"console.log('hello')\\n\\n\\n\\n//# sourceURL=webpack:///./src/index.js?\");\n    })\n\n });\n\n")])])]),t("div",{staticClass:"language-angular2html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("webpack优化点，使用懒加载 热更新 不用的不引入 大的包放在CDN上\n速度优化\n体积优化\n自带的优化\n- treeSharking 不用的代码不打包 （生产环境有效）\n- scope-hoisting 作用域提升，用变量来计算一个结果，如果其他地方未使用到该变量，怎只会打印结果\n自己实现的优化\n\n比如moment插件，包含我们不需要语言包， 通过 ignorePlugin\n\n一些资源包如 jquery不打包，通过cdn引入。如果打包进来体积爆炸。\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);