(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{230:function(t,r,s){"use strict";s.r(r);var e=s(5),a=Object(e.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[t._v("#")]),t._v(" 异步")]),t._v(" "),s("h2",{attrs:{id:"异步和同步的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步和同步的区别"}},[t._v("#")]),t._v(" 异步和同步的区别")]),t._v(" "),s("ul",[s("li",[t._v("异步基于js单线程")]),t._v(" "),s("li",[t._v("异步不会阻塞代码的执行")]),t._v(" "),s("li",[t._v("同步会阻塞代码的执行")])]),t._v(" "),s("h2",{attrs:{id:"为什么js是单线程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么js是单线程"}},[t._v("#")]),t._v(" 为什么js是单线程？")]),t._v(" "),s("p",[t._v("同一个时间只能做一件事。（如果是多线程 一个线程查找DOM，一个线程删除DOM）")]),t._v(" "),s("h2",{attrs:{id:"为什么js中存在异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么js中存在异步"}},[t._v("#")]),t._v(" 为什么js中存在异步？")]),t._v(" "),s("p",[t._v("因为如果所有js代码都是同步，一个同步任务padding了，后面的都需要等待，此时页面就会出现卡死，由于js单线程的机制才有了异步 。")]),t._v(" "),s("h2",{attrs:{id:"异步使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步使用场景"}},[t._v("#")]),t._v(" 异步使用场景？")]),t._v(" "),s("ul",[s("li",[t._v("网络请求 比如 ajax请求 图片加载onload处理回调")]),t._v(" "),s("li",[t._v("定时任务 setTimeOut")])]),t._v(" "),s("h2",{attrs:{id:"promise异步加载图片"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise异步加载图片"}},[t._v("#")]),t._v(" promise异步加载图片")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    function imgLoad(url) {\n        return new Promise(((resolve, reject) => {\n            const  img = document.createElement('img');\n            img.src = url;\n            img.onload =function () {\n            resolve(img)\n            };\n            img.onerror =function () {\n                const err = new Error(`发生错误${url}`);\n                reject(err)\n        }))\n    }\n    const  url = 'https://doc.yixiang.co/img/pc1.png';\n\n    imgLoad(url).then(function (res) {\n        console.log('res',res)\n    }).catch(function (err) {\n        console.log('发生错误',err)\n    });\n")])])])])}),[],!1,null,null,null);r.default=a.exports}}]);