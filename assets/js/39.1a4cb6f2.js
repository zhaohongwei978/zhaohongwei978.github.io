(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{256:function(s,t,e){"use strict";e.r(t);var a=e(5),r=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"网页性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网页性能优化"}},[s._v("#")]),s._v(" 网页性能优化")]),s._v(" "),e("h2",{attrs:{id:"css放置的顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#css放置的顺序"}},[s._v("#")]),s._v(" css放置的顺序")]),s._v(" "),e("p",[s._v("css加载不会堵塞DOM tree的解析，但会堵塞DOM Tree渲染，会堵塞后面js的执行。\n在body元素之前，保证文档解析了所有css样式（内联和外联）。如果把css放置在底部，要等待最后一个css下载完成，此时会出现白屏。")]),s._v(" "),e("ul",[e("li",[s._v("尽量使用外联的css")])]),s._v(" "),e("p",[s._v("内联是在html文件内部的，css如果使用外链，可以放在cdn上，用户每次访问时候是有缓存的。这样可以减少页面体积的大小。")]),s._v(" "),e("ul",[e("li",[s._v("在css文件内部尽量少使用 @import")])]),s._v(" "),e("p",[s._v("使用import我们需要把所有import的文件都加载完成，这样才会浏览器才会接着往下渲染，")]),s._v(" "),e("ul",[e("li",[s._v("把字体文件部署到CDN上，或者把字体以base64形式在css中保存。")])]),s._v(" "),e("h2",{attrs:{id:"js放在页面底部"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js放在页面底部"}},[s._v("#")]),s._v(" js放在页面底部")]),s._v(" "),e("p",[s._v("防止js的加载 解析 执行 对阻塞页面后续元素的正常渲染。")]),s._v(" "),e("p",[s._v("let obj1 = {a:1,b:{c:1}}\nlet obj2 = {c:2,b:{a:1}}")]),s._v(" "),e("p",[s._v("function merge(obj1,obj2){\nfor(let key in obj2){\nif(a[key] && a[key].toString() === 'object Object'){\nmerge(a[key],b[key])\n}else{\na[key] = b[key]\n}\n}\n}")])])}),[],!1,null,null,null);t.default=r.exports}}]);