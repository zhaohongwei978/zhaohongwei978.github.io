(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{186:function(t,a,e){t.exports=e.p+"assets/img/WX20200914-234458@2x.eda50cf6.png"},187:function(t,a,e){t.exports=e.p+"assets/img/WX20200914-234528@2x.743205df.png"},234:function(t,a,e){"use strict";e.r(a);var n=e(5),s=Object(n.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"数据类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),n("h2",{attrs:{id:"值类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#值类型"}},[t._v("#")]),t._v(" 值类型")]),t._v(" "),n("ul",[n("li",[t._v("let a;//underfind (const 的定义的常量必须有初始值)")]),t._v(" "),n("li",[t._v("const a = '' //string")]),t._v(" "),n("li",[t._v("const a= 1 //number")]),t._v(" "),n("li",[t._v("const a = true //boolean")]),t._v(" "),n("li",[t._v("const a = Symbal('s')")])]),t._v(" "),n("h2",{attrs:{id:"引用类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#引用类型"}},[t._v("#")]),t._v(" 引用类型")]),t._v(" "),n("ul",[n("li",[t._v("数组")]),t._v(" "),n("li",[t._v("对象")]),t._v(" "),n("li",[t._v("null")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let a = 100\nlet b = a\na =200\nconsole.log(b) // 100\n")])])]),n("p",[t._v("值在栈中存储。")]),t._v(" "),n("p",[n("img",{attrs:{src:e(186),alt:"QQ截图20200128111606.png"}})]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let a = {age:20}\nlet b = a\na.age = 21\nconsole.log(b) // {age:21}\n")])])]),n("p",[t._v("引用类型，变量在栈中存储，对应的值存储的是引用地址，引用的值存储在堆中。\n值在栈中存储。\n"),n("img",{attrs:{src:e(187),alt:"QQ截图20200128111606.png"}})]),t._v(" "),n("p",[t._v("深拷贝和浅拷贝都是针对的引用类型，JS 的变量类型分为值类型和引用类型；\n值类型：存在栈中，对值类型拷贝会对值进行复制。\n引用类型：会进行地址的拷贝，最终两个变量会指向同一个地址。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// 引用类型指向同一份数据,会导致a b指向同一份数据，此时如果对其中一个进行修改，就会影响到另外一个\nvar a = {c: 1};\nvar b = a;\na.c = 2;\nconsole.log(a.c, b.c); // 2, 2 全是2，a b指向同一份数据\n")])])]),n("h3",{attrs:{id:"深拷贝-vs-浅拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝-vs-浅拷贝"}},[t._v("#")]),t._v(" 深拷贝 VS 浅拷贝")]),t._v(" "),n("p",[t._v("深拷贝和浅拷贝都是针对引用类型来的，")]),t._v(" "),n("ul",[n("li",[t._v("浅拷贝只拷贝一层数据。")]),t._v(" "),n("li",[t._v("深拷贝递归遍历对象。")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var a1 = {b: {c: {}};\n\nvar a2 = shallowClone(a1); // 浅拷贝\na2.b.c === a1.b.c // true\n\nvar a3 = clone(a1); // 深拷贝\na3.b.c === a1.b.c // false\n")])])]),n("h3",{attrs:{id:"浅拷贝实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#浅拷贝实现"}},[t._v("#")]),t._v(" 浅拷贝实现")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function shallowClone(source) {\n    var target = {};\n    for(var i in source) {\n        if (source.hasOwnProperty(i)) {\n            target[i] = source[i];\n        }\n    }\n\n    return target;\n}\n")])])]),n("h2",{attrs:{id:"为什么设计引用类型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#为什么设计引用类型"}},[t._v("#")]),t._v(" 为什么设计引用类型？")]),t._v(" "),n("p",[t._v("性能和存储的问题，值类型占用空间小，可以存在栈中。引用类型数据大，存在栈中不好管理。如果复制栈中的对象会很慢。")]),t._v(" "),n("h2",{attrs:{id:"typeof-运算符"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typeof-运算符"}},[t._v("#")]),t._v(" typeof 运算符")]),t._v(" "),n("p",[t._v("可以判断的类型 可以识别所有值类型\nunderfind string number boolean symbal\n判断函数\ntypeof funcation a(){} // function")]),t._v(" "),n("h2",{attrs:{id:"深拷贝实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝实现"}},[t._v("#")]),t._v(" 深拷贝实现")]),t._v(" "),n("h3",{attrs:{id:"递归遍历对象或者数组"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#递归遍历对象或者数组"}},[t._v("#")]),t._v(" 递归遍历对象或者数组")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function deepClone(json = {}) {\n    if(typeof  json !== 'object'||json == null){\n        return json;\n    }\n    let result;\n    if(json instanceof Array){\n        result = []\n    }else{\n        result = {}\n    }\n    for(let key in json){\n        //保证key是json自身的属性\n        if(json.hasOwnProperty(key)){\n            result[key] = deepClone(json[key])\n        }\n    }\n\n    return  result;\n}\n\n")])])]),n("h3",{attrs:{id:"序列化和反序列化实现深拷贝"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#序列化和反序列化实现深拷贝"}},[t._v("#")]),t._v(" 序列化和反序列化实现深拷贝")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("JSON.stringify 是将一个 JavaScript 值转成一个 JSON 字符串。")])]),t._v(" "),n("li",[n("p",[t._v("JSON.parse 是将一个 JSON 字符串转成一个 JavaScript 值或对象。")])]),t._v(" "),n("li",[n("p",[t._v("JSON.parse(JSON.stringify(test))")])]),t._v(" "),n("li",[n("p",[t._v("问题 1 如果 obj 中包含 Date 类型转换回来之后 Date 会变成字符串")])])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("var test = {\nname: 'a',\ndate: [new Date(1536627600000), new Date(1540047600000)],\n};\n\nlet b;\nb = JSON.parse(JSON.stringify(test))\n")])])]),n("ul",[n("li",[t._v("问题 2 如果 obj 里有函数，undefined，则序列化的结果会把函数或 undefined 丢失；\n（原因：string 转 obj 时候，undefined、function、symbol 会在转换过程中被忽略。。。）")])]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const test = {\n        name: null,\n        date: function hehe() {\n          console.log('fff')\n        },\n      };\n// debugger\nconst copyed = JSON.parse(JSON.stringify(test));\ntest.name = 'test'\nconsole.error('ddd', test, copyed)\nddd {name: \"test\", date: ƒ} {name: \"a\"}\n\n")])])]),n("ul",[n("li",[t._v("问题 3 如果 obj 里有 NaN、Infinity 和-Infinity，则序列化的结果会变成 null")])]),t._v(" "),n("h2",{attrs:{id:"判断是引式类型的几种方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#判断是引式类型的几种方法"}},[t._v("#")]),t._v(" 判断是引式类型的几种方法")]),t._v(" "),n("ul",[n("li",[t._v("Object.prototype.toString.call()\nObject.prototype.toString.call([]) //[object Array]\nObject.prototype.toString.call({}) //[object Object]\nObject.prototype.toString.call(function(){}) //[object Function]")]),t._v(" "),n("li",[t._v("Array.isArray")])]),t._v(" "),n("h2",{attrs:{id:"instanceof-实现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-实现"}},[t._v("#")]),t._v(" instanceof 实现")]),t._v(" "),n("p",[t._v("寻找左边的对象的原型链中是否存在右边对象的原型对象。")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("function instanceof(left,right) {\n    let l = left.__proto__;\n    let r = right.prototype;\n    while (true){\n        if(l === null){\n            return false;\n        }\n        if(l === r){\n            return  true;\n        }\n        l = r.__proto__;\n    }\n\n}\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);