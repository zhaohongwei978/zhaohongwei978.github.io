(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{252:function(e,t,a){"use strict";a.r(t);var s=a(5),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"移动端问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端问题"}},[e._v("#")]),e._v(" 移动端问题")]),e._v(" "),a("h2",{attrs:{id:"rem-布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem-布局"}},[e._v("#")]),e._v(" Rem 布局")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("rem(root em)是一个相对单位，类似 em，但是 rem 基准 html 元素的字体大小。动态修改 html 文字大小改变页面中元素的大小。\n页面字体的变化可以随着视口的缩放而变化。")])]),e._v(" "),a("li",[a("p",[e._v("响应式布局的过程中，我们页面中的 rem 值是固定，如果想让页面可以根据不同的屏幕做适配。只需要让根元素的 font-size 根据不同视口宽度，发生变化。")])])]),e._v(" "),a("p",[e._v("假设 一个页面中 750 设计稿 盒子 w:100px h:100px\n在 750 设计稿中，假设根元素 html font-size 是 100px 该盒子的宽高是 1rem.盒子实际大小是 100px。\n若在 640 的屏幕中，盒子的根元素 html font-size: (640/750)*100px")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("视口宽度")]),e._v(" "),a("th",[e._v("html 的 fontSize 大小")]),e._v(" "),a("th",[e._v("在页面中的 rem 值")]),e._v(" "),a("th",[e._v("盒子实际大小")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("750")]),e._v(" "),a("td",[e._v("100px")]),e._v(" "),a("td",[e._v("1rem")]),e._v(" "),a("td",[e._v("1rem * 100px = 100px")])]),e._v(" "),a("tr",[a("td",[e._v("640")]),e._v(" "),a("td",[e._v("(640/750) *100px = 85.33px")]),e._v(" "),a("td",[e._v("1rem")]),e._v(" "),a("td",[e._v("1rem * 85.3px = 85.3px")])])])]),e._v(" "),a("h3",{attrs:{id:"rem-的实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem-的实现"}},[e._v("#")]),e._v(" REM 的实现")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('window.onresize = function(){\n    getRem(750,100)\n}\nfunction getRem(pageWidth,remValue){\n    var html = document.getElementsByTagName("html")[0];\n    currentWidth = document.body.clientWidth;\n    html.style.fontSize = (currentWidth/pageWidth)*remValue + "px";\n}\n')])])]),a("h3",{attrs:{id:"em-根据相邻父元素计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#em-根据相邻父元素计算"}},[e._v("#")]),e._v(" em 根据相邻父元素计算")]),e._v(" "),a("p",[e._v("em 是父元素的字体大小变化而变化。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('em 根据父元素font-size计算\n<div style="font-size:10px">\n    <p style="width:20em;height:20em;backgournd:red"> // 盒子实际是 宽高 200px\n</div>\n\n')])])]),a("h3",{attrs:{id:"media-根据屏幕范围切换引入资源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#media-根据屏幕范围切换引入资源"}},[e._v("#")]),e._v(" @media 根据屏幕范围切换引入资源")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<link ref="stylesheet" href="style320.css" media="screen and (min-width:320px)">\n<link ref="stylesheet" href="style640.css" media="screen and (min-width:640px)">\n')])])]),a("h2",{attrs:{id:"ios-平滑滚动问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-平滑滚动问题"}},[e._v("#")]),e._v(" ios 平滑滚动问题")]),e._v(" "),a("p",[e._v("原因：在 iOS 5.0 以及之后的版本，滑动有定义有两个值 auto 和 touch，默认值为 auto。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("-webkit-overflow-scrolling: touch; /* 当手指从触摸屏上移开，会保持一段时间的滚动 */\n\n-webkit-overflow-scrolling: auto; /* 当手指从触摸屏上移开，滚动会立即停止 */\n")])])]),a("h2",{attrs:{id:"移动端设置滚动条隐藏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端设置滚动条隐藏"}},[e._v("#")]),e._v(" 移动端设置滚动条隐藏")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(".container ::-webkit-scrollbar {display: none;}\n\n")])])]),a("h2",{attrs:{id:"弹出层事件穿透问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹出层事件穿透问题"}},[e._v("#")]),e._v(" 弹出层事件穿透问题")]),e._v(" "),a("p",[e._v("思路：js 打开弹框给根元素增加 overfow:hidden\njs 关闭弹框去掉 overfow:hidden")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/**\n    * 禁止穿透\n    **/\nstopScroll(){\n    let _scrollTop = document.scrollingElement.scrollTop;\n    this.scrollTop = _scrollTop;\n    document.body.style.overflow='hidden';\n    document.body.style.top = -_scrollTop + 'px';\n},\n/**\n    * 取消滑动限制\n    **/\ncanScroll(){\n    document.body.style.overflow='auto';\n    document.scrollingElement.scrollTop = this.scrollTop;\n},\n")])])]),a("h2",{attrs:{id:"ios-上拉边界下拉出现白色空白"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-上拉边界下拉出现白色空白"}},[e._v("#")]),e._v(" iOS 上拉边界下拉出现白色空白")]),e._v(" "),a("p",[e._v("手指按住屏幕下拉，屏幕顶部会多出一块白色区域。手指按住屏幕上拉，底部多出一块白色区域。")]),e._v(" "),a("p",[e._v("原因：手指按住屏幕上下拖动，会触发 touchmove 事件。这个事件触发的对象是整个 webview 容器，容器自然会被拖动，剩下的部分会成空白。")]),e._v(" "),a("ul",[a("li",[a("ol",[a("li",[e._v("touchstart ：手指放在一个 DOM 元素上。")])])]),e._v(" "),a("li",[a("ol",{attrs:{start:"2"}},[a("li",[e._v("touchmove ：手指拖曳一个 DOM 元素。")])])]),e._v(" "),a("li",[a("ol",{attrs:{start:"3"}},[a("li",[e._v("touchend ：手指从一个 DOM 元素上移开。")])])])]),e._v(" "),a("h2",{attrs:{id:"输入键盘遮挡不回弹问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入键盘遮挡不回弹问题"}},[e._v("#")]),e._v(" 输入键盘遮挡不回弹问题？")]),e._v(" "),a("ul",[a("li",[e._v("在键盘抬起时，给页面一个高度撑开。")]),e._v(" "),a("li",[e._v("Element.scrollIntoView()方法让当前的元素滚动到浏览器窗口的可视区域内。")]),e._v(" "),a("li",[e._v("Element.scrollIntoViewIfNeeded()方法也是用来将不在浏览器窗口的可见区域内的元素滚动到浏览器窗口的可见区域。")])]),e._v(" "),a("div",{staticClass:"language-angular2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<input type="text" @click="scrollEle" v-model="value">\nscrollEle (e) {\n　let ele = e.target\n  window.onresize = function () {\n    ele.scrollIntoViewIfNeeded(true)\n  }\n}\n\n\n')])])]),a("h2",{attrs:{id:"浏览器小于-12px-字体问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器小于-12px-字体问题"}},[e._v("#")]),e._v(" 浏览器小于 12px 字体问题")]),e._v(" "),a("p",[e._v("浏览器默认字体最小 12px，\n因为浏览器默认最小字体 12px，当小于 12px 的字体，浏览器会当作 12px 来处理。如果设计为 10px 应该如何来解决呢。\n通过 tranform:scale()缩放。tranform 缩放是视觉缩放，不会改变页面的排版位置。只会在盒子的可视范围内缩放。所以 tranform 不会带来重排问题，只会重绘。")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<div style="font-size: 20px;">20px</div>\n<div style="font-size: 12px;">12px</div>视觉上看到的是12px\n<div style="font-size: 10px;">10px</div>视觉上看到的仍然是12px\n')])])]),a("h2",{attrs:{id:"移动端-1px-问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动端-1px-问题"}},[e._v("#")]),e._v(" 移动端 1px 问题")]),e._v(" "),a("h3",{attrs:{id:"方法1-通过border-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法1-通过border-image"}},[e._v("#")]),e._v(" 方法1 通过border-image")]),e._v(" "),a("ul",[a("li",[e._v("优点：没有副作用")]),e._v(" "),a("li",[e._v("缺点：border颜色变了就得重新制作图片；圆角会比较模糊。")])]),e._v(" "),a("div",{staticClass:"language-angular2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("border: 1px solid transparent;\nborder-image: url('./../../image/96.jpg') 2 repeat;\n\n")])])]),a("h3",{attrs:{id:"方法2-使用box-shadow实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2-使用box-shadow实现"}},[e._v("#")]),e._v(" 方法2 使用box-shadow实现")]),e._v(" "),a("ul",[a("li",[e._v("box-shadow属性 x偏移量 | y偏移量 | 阴影模糊半径 | 阴影扩散半径 | 阴影颜色")])]),e._v(" "),a("div",{staticClass:"language-angular2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("box-shadow: \n0  -1px 1px -1px #e5e5e5,   //上边线\n1px  0  1px -1px #e5e5e5,   //右边线\n0  1px  1px -1px #e5e5e5,   //下边线\n-1px 0  1px -1px #e5e5e5;   //左边线\n")])])]),a("h3",{attrs:{id:"方法3-使用伪元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法3-使用伪元素"}},[e._v("#")]),e._v(" 方法3 使用伪元素")]),e._v(" "),a("div",{staticClass:"language-angular2 extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('.setBorderAll{\n     position: relative;\n       &:after{\n           content:" ";\n           position:absolute;\n           top: 0;\n           left: 0;\n           width: 200%;\n           height: 200%;\n           transform: scale(0.5);\n           transform-origin: left top;\n           box-sizing: border-box;\n           border: 1px solid #E5E5E5;\n           border-radius: 4px;\n      }\n    }\n')])])]),a("h3",{attrs:{id:"方法4-设置viewport的scale值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法4-设置viewport的scale值"}},[e._v("#")]),e._v(" 方法4 设置viewport的scale值")]),e._v(" "),a("ul",[a("li",[e._v("根据drp设置缩放比例")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("<script>\n  var viewport = document.querySelector(\"meta[name=viewport]\");\n  //下面是根据设备像素设置viewport\n  if (window.devicePixelRatio == 1) {\n      viewport.setAttribute('content', 'width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no');\n  }\n  if (window.devicePixelRatio == 2) {\n      viewport.setAttribute('content', 'width=device-width,initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no');\n  }\n  if (window.devicePixelRatio == 3) {\n      viewport.setAttribute('content', 'width=device-width,initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no');\n  }\n  var docEl = document.documentElement;\n  var fontsize = 32* (docEl.clientWidth / 750) + 'px';\n  docEl.style.fontSize = fontsize;\n<\/script>\n\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);