(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{236:function(t,n,e){"use strict";e.r(n);var r=e(5),a=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"节流防抖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节流防抖"}},[t._v("#")]),t._v(" 节流防抖")]),t._v(" "),e("h2",{attrs:{id:"节流防抖的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#节流防抖的区别"}},[t._v("#")]),t._v(" 节流防抖的区别")]),t._v(" "),e("ul",[e("li",[t._v("防抖函数：疯狂点击按钮，每次点击的时间间隔都小于规定时间，那么相应的方法不会执行")]),t._v(" "),e("li",[t._v("节流函数：疯狂点击按钮，规定的时间间隔内只触发一次相应的方法")])]),t._v(" "),e("h2",{attrs:{id:"throttle-节流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#throttle-节流"}},[t._v("#")]),t._v(" throttle 节流")]),t._v(" "),e("p",[t._v("比如drag拖拽事件，window.onresize()等。\n正常情况下 drag事件，onresize() 每秒都会触发很多次。但是实际上我们并不需要频繁的触发。此时可以使用节流固定频率触发函数。不然频繁触发会导致卡顿。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("    let timer = null;\n        window.addEventListener('drug',function () {\n                if(timer) {\n                    return\n                }\n                timer = setTimeout(function () {\n                    timer = null\n                },100)\n        })\n    }\n")])])]),e("h2",{attrs:{id:"debounce-防抖"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debounce-防抖"}},[t._v("#")]),t._v(" debounce 防抖")]),t._v(" "),e("ul",[e("li",[t._v("使用场景 监听一个输入框 文字变化就会触发 change事件")]),t._v(" "),e("li",[t._v("监听keyup 键盘只要打字就会触发change事件。\n防抖：用户输入完，才触发请求。 比如间断500ms才执行一次事件。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("const input1 = document.getElementById('txt') \nlet timer = null\ninput1.addEventListener('keyup',function(){\n    if(timer){\n        clearTimeout(timer)\n    }\n    timer = setTimeout(function(){\n        console.log('11')\n        timer = null\n    },2000)\n})\n//防抖函数封装\ninput1.addEventListener('keyup',debounce(function(){\n    console.log('111')\n},1000))\n\nfunction test(fn,delay = 500){\n    let timer = null;//闭包，使用 return的fn在闭包中定义。\n    return function (){\n        \n        if(timer){\n            clearTimeout(timer)\n        }\n        timer =  setTimeout(function(){\n            fn.apply(this,arguments)\n            timer = null;\n        },delay)\n    }\n}\n")])])])])}),[],!1,null,null,null);n.default=a.exports}}]);