(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{204:function(t,s,e){"use strict";e.r(s);var a=e(5),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"渲染过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程"}},[t._v("#")]),t._v(" 渲染过程")]),t._v(" "),e("p",[t._v("主线程是 JS 发生的地方.也是渲染发生的地方，是DOM存在的地方。")]),t._v(" "),e("p",[t._v("网页上大部分活动都是有确定性的顺序，我们不会同时去运行多段代码去修改同一处DOM。")]),t._v(" "),e("p",[t._v("如果 一个任务运行200ms，用户就会感觉到，因为它阻止了加载 渲染 和交互")]),t._v(" "),e("p",[t._v("计算机中有主线程，但我们还需其他线程 比如网络请求  编码解码 加密监控输入设备。一旦这些线程有需要页面响应的相关操作，我们都需要通知主线程。")]),t._v(" "),e("p",[t._v("我们通过事件循环来协调这些活动，")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("//在主线程上运行，当我们需要等待5000ms，我们是在主线程上等待，阻止了主线程上的其他活动，\nsetTimeOut在主线程上运行，同时回调函数也会在主线程上执行。\nsetTimeOut(callback,ms)\n\n\n如果把setTiemOut移出主线程 会有大量并行运行的JS，编辑相同的DOM。\n")])])]),e("p",[t._v("解决方法\n创建一个任务加到任务队列，以便在某个时刻回到主线程继续执行，我们在js所有线程上调用js，这种方案都行的通。")]),t._v(" "),e("p",[t._v("当用户点击鼠标，操作系统如何通知js？\n通过向任务队列中添加任务，网络请求的数据也是向队列中添加任务，")]),t._v(" "),e("p",[t._v("所以主线程是在任务队列中读取任务的。")]),t._v(" "),e("h1",{attrs:{id:"settimeout不适合做动画"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#settimeout不适合做动画"}},[t._v("#")]),t._v(" setTimeOut不适合做动画，")]),t._v(" "),e("p",[t._v("因为一帧中，setTimeOut都会执行多次，假设每一帧 setTimeOut被执行四次，那么其中3次的任务都是无效，因为浏览器并不会渲染。\n而且可能存在当前这一帧没有任务执行，下一帧有几个setTimeOut执行，这样就造成了")]),t._v(" "),e("p",[t._v("requestAnimationFrame回调函数运行在处理css之前和绘制之前，")]),t._v(" "),e("p",[t._v("执行任务的阶段，浏览器不考虑css的变化，当它真正执行到渲染时，浏览器会看你到底改变了什么。")])])}),[],!1,null,null,null);s.default=n.exports}}]);