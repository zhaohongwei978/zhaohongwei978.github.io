(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{231:function(e,a,t){"use strict";t.r(a);var n=t(5),s=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object"}},[e._v("#")]),e._v(" Object")]),e._v(" "),t("h2",{attrs:{id:"object-create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-create"}},[e._v("#")]),e._v(" Object.create")]),e._v(" "),t("p",[e._v("Object.create 创建一个对象并把这个对象的 [[Prototype]] 关联到指定的对象。")]),e._v(" "),t("p",[e._v("Object.create(proto, [propertiesObject])")]),e._v(" "),t("ul",[t("li",[e._v("proto : 必须。表示新建对象的原型对象，该参数可以是null， 对象， 函数的prototype属性 （创建空的对象时需传null , 否则会抛出TypeError异常）。")]),e._v(" "),t("li",[e._v("propertiesObject :  添加到新创建对象的可枚举属性。")])]),e._v(" "),t("div",{staticClass:"language-angular2html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let a = Object.create({name:'kira',info:{value:'111'}})\n\nconsole.log(a) //{info:'111'}\nconsole.log(a.__proto__) //打印结果{name:'kira'}\nconsole.log(a.__proto__.__proto__) //打印结果是Object的内容\n\n\n\n\n\n")])])]),t("h3",{attrs:{id:"object-create-和-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-create-和-区别"}},[e._v("#")]),e._v(" Object.create 和 {} 区别")]),e._v(" "),t("ul",[t("li",[e._v("Object.create自定义自己的原型")]),e._v(" "),t("li",[e._v("Object.create(null); //{} 没有原型")])]),e._v(" "),t("div",{staticClass:"language-angular2html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let a = {}\nconsole.log(a);// {}\nconsloe.log(a.__proto__)//打印的是Object的内容 \n")])])]),t("div",{staticClass:"language-$xslt extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("var anotherObject = { a:2};\n// 创建一个关联到 anotherObject 的对象\nvar myObject = Object.create( anotherObject );\nmyObject.a; // 2 实际上就是把a:2 挂载到了myObject上\n")])])]),t("h2",{attrs:{id:"object-assign-的用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-assign-的用法"}},[e._v("#")]),e._v(" Object.assign 的用法")]),e._v(" "),t("p",[e._v("Object.assign 可以实现对象的合并。Object.assign(target, ...sources)")]),e._v(" "),t("h3",{attrs:{id:"同名属性-source-替换-targe-属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#同名属性-source-替换-targe-属性"}},[e._v("#")]),e._v(" 同名属性 source 替换 targe 属性")]),e._v(" "),t("p",[e._v("Object.assign()方法只会合并替换对象的第一层 key，对于多层的，会当做值处理。(即 Object.assign 是浅拷贝的合并)")]),e._v(" "),t("p",[e._v("Object.assign 会将 source 里面的可枚举属性复制到 target。如果和 target 的已有属性重名，则会覆盖。同时后续的 source 会覆盖前面的 source 的同名属性。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('let obj1 = {\n  a: {\n    b: {\n      c: "111"\n    }\n  }\n};\n\nlet obj2 = {\n  a: {\n    b: {\n      d: "222"\n    }\n  }\n};\nObject.assign(obj1, obj2);\n//输出结果\na: {\n    b: {\n      d: "222"\n    }\n}\n')])])]),t("h3",{attrs:{id:"object-assign-浅拷贝问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#object-assign-浅拷贝问题"}},[e._v("#")]),e._v(" object.assign 浅拷贝问题")]),e._v(" "),t("p",[e._v("Object.assign 只能拷贝第一层。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let a = {a:1,b:2}\nlet b= {c:3,d:{name:'kira'}};\n\nlet obj = Object.assign({},a,b);\nconsole.log(obj);\n//{ a: 1, b: 2, c: 3, d: { name: 'kira' } }\n\na.a = 66;\nconsole.log(obj); //修改a发现obj并没有被改变。\n// { a: 1, b: 2, c: 3, d: { name: 'kira' } }\nb.d.name = 'test';\nconsole.log(obj);//修改name时候，发现obj被改变了。\n//{ a: 1, b: 2, c: 3, d: { name: 'test' } }\nc\n\n\n\n")])])]),t("h3",{attrs:{id:"深拷贝实现-merge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深拷贝实现-merge"}},[e._v("#")]),e._v(" 深拷贝实现 merge")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\nlet a = { a: {age:25}, b: 2, c: {}}\nlet b = { c: 3, a: { name: 'kira' },f: {} };\n\n\nfunction mergeDeep(a,b) {\n    for (key in b) {\n        if (a[key] && a[key].toString() === '[object Object]' ) {\n            mergeDeep(a[key],b[key])\n        } else {\n            a[key] = b[key];\n        }\n    }\n}\n\nmergeDeep(a, b)\nconsole.log('----a',a)\n\n")])])]),t("h3",{attrs:{id:"深比较判断两个对象是否相等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深比较判断两个对象是否相等"}},[e._v("#")]),e._v(" 深比较判断两个对象是否相等")]),e._v(" "),t("div",{staticClass:"language-angular2html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("const a = {a:10,b:{c:10,d:20}}\nconst b = {a:10,b:{c:10,d:20}}\n//\nfunction isEqual(a,b) {\n    let result = true ;\n    for (let key in b){\n        if(a[key] === undefined){\n            result = false\n        }\n        if(typeof b[key] == 'object' && b[key]!==null){\n            const res =  isEqual(a[key],b[key])\n            if(res === false) return  false;\n        }else{\n            if (a[key] !== b[key]){\n                result = false\n            }\n        }\n        console.log('11',result)\n    }\n    return result;\n}\n\n")])])]),t("h3",{attrs:{id:"什么是浅拷贝"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是浅拷贝"}},[e._v("#")]),e._v(" 什么是浅拷贝")]),e._v(" "),t("p",[e._v("新建一个对象，这个对象有原始对象属性值的一份精确拷贝。")]),e._v(" "),t("p",[t("strong",[t("font",{attrs:{color:"red"}},[e._v("浅拷贝只拷贝一层，如果属性是基本数据类型就拷贝值。如果属性是引用类型就拷贝地址。")])],1)]),e._v(" "),t("div",{staticClass:"language-angular2html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let a = {name:'kira',info:{age:25}}\nlet b = Object.assign({},a)\na.name = '123'\na.info.age = 23\nconsole.log(a) //{name:'123',info:{age:23}}\nconsole.log(b)//{name:'kira',info:{age:23}}\n\n")])])]),t("h3",{attrs:{id:"两个对象之间的比较"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两个对象之间的比较"}},[e._v("#")]),e._v(" 两个对象之间的比较")]),e._v(" "),t("div",{staticClass:"language-angular2html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("let a = {a:1}\nlet b = {a:1}\nlet c = new Object(a)\nconsole.log(a === b) // false 两个对象在堆中的指针地址不同\n\nconsole.log(a === c) // true 两个对象的指针地址相同\n")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);