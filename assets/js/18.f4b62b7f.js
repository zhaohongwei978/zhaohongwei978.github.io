(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{226:function(a,n,t){"use strict";t.r(n);var e=t(5),s=Object(e.a)({},(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"generator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#generator"}},[a._v("#")]),a._v(" generator")]),a._v(" "),t("p",[a._v("生成器函数，主要作用就是可以暂停，我们利用yield的暂停机制，可以去获取接口。等接口返回数据在yield.next（）接着往下执行。")]),a._v(" "),t("p",[a._v("不使用async await")]),a._v(" "),t("div",{staticClass:"language-angular2 extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("//如果不使用async await想要实现异步调用，就需要嵌套。\n$ajax('url',function(){\n    $('ajax',function(){\n})\n})\n")])])]),t("p",[a._v("使用generator实现 async函数\nawait相当于是返回的的promise包裹的对象。")]),a._v(" "),t("div",{staticClass:"language-angular2 extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("async function a(){\n    \n    await ajax.('url') // 等待一个请求的返回结果，await会返回一个promise对象\n    console.log('111') // 当拿到返回结果时候 yield.next才会执行await之后的函数。\n}\n\nfunction *函数(){\n    yiled ajax('xxx')\n    console.log('111')\n}\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);