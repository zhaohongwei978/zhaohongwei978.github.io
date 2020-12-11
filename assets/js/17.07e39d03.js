(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{223:function(t,a,e){"use strict";e.r(a);var s=e(5),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"arguments-参数传递"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#arguments-参数传递"}},[t._v("#")]),t._v(" arguments 参数传递")]),t._v(" "),e("p",[t._v("arguments 是一个对应于传递给函数的参数的类数组对象。不可以使用数组如 pop push 等方法。\narguments 对象是所有（非箭头）函数中都可用的局部变量。")]),t._v(" "),e("ul",[e("li",[t._v("arguments 可以通过下标取值，如 arguments[0]")]),t._v(" "),e("li",[t._v("arguments 可以通过 arguments.length 查看 len 长度")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    function f() {\n        console.log(arguments) // { '0': 1, '1': 2, '2': 3, '3': 4 }\n    }\n    f(1,2,3,4);\n\n")])])]),e("p",[t._v("把类数组转换成数组的几种方法")]),t._v(" "),e("ul",[e("li",[t._v("通过...解构赋值")]),t._v(" "),e("li",[t._v("Array.from()")]),t._v(" "),e("li",[t._v("Array.prototype.slice.call()")]),t._v(" "),e("li",[t._v("通过循环遍历 arguments")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("function f() {\n    let a = [...arguments];\n    console.log(a); //[1,2,3,4]\n    console.log(Array.from(arguments));//[1,2,3,4]\n    console.log(Array.prototype.slice.call(arguments))[1,2,3,4]\n    // for (let i =0;i<arguments.length;i++){\n    //     console.log(i) //1,2,3,4\n    // }\n}\nf(1,2,3,4);\n")])])]),e("h2",{attrs:{id:"箭头函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#箭头函数"}},[t._v("#")]),t._v(" 箭头函数")]),t._v(" "),e("ul",[e("li",[t._v("箭头函数没有 arguments 对象")]),t._v(" "),e("li",[t._v("箭头函数没有 this，this 查找规则自下往上查找")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);