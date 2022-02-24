(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{199:function(t,s,a){t.exports=a.p+"assets/img/http_huancun.9b9d8560.jpg"},272:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#缓存"}},[t._v("#")]),t._v(" 缓存")]),t._v(" "),e("p",[t._v("哪些资源可以被缓存？\n静态资源（js css img） （webpack打包配置的hash值是根据 资源来算的。如果资源内容有更改，webpack打包的hash值会发生变化。）")]),t._v(" "),e("p",[e("img",{attrs:{src:a(199),alt:"1599408879599.jpg"}})]),t._v(" "),e("h2",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[t._v("#")]),t._v(" 强缓存")]),t._v(" "),e("p",[t._v("强缓存，初次请求，后端 返回资源 和Cache-Control （Cache-Control: max-age=60）。")]),t._v(" "),e("p",[t._v("再次请求，浏览器判断是否Cache-Control，如果命中走缓存。（强缓存状态码200）。 如果缓存失效，走协商缓存或者向服务端请求资源。")]),t._v(" "),e("ul",[e("li",[t._v("public 可向任意方提供响应的缓存")]),t._v(" "),e("li",[t._v("private 仅向特定用户返回响应")]),t._v(" "),e("li",[t._v("no-cache 不用强制缓存,走协商缓存")]),t._v(" "),e("li",[t._v("no-store 不进行任何缓存")])]),t._v(" "),e("h2",{attrs:{id:"在nginx上配置开启强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在nginx上配置开启强缓存"}},[t._v("#")]),t._v(" 在nginx上配置开启强缓存")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("location "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    location "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \\"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("jpg"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jpeg"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("png"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("gif"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ico"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("css"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            # expires "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启cache-control max-age缓存时间，在时间范围内在缓存中读资源")]),t._v("\n            add_header Cache"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control max"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("age"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    root   html"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    index  index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"协商缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[t._v("#")]),t._v(" 协商缓存")]),t._v(" "),e("p",[t._v("服务端缓存策略，服务端判断是否需要缓存。服务端判断客户端资源，是否和服务端资源一样。一致返回304，否则返回200和最新资源。")]),t._v(" "),e("p",[t._v("后端的静态资源不断更新，浏览器默认使用强缓存，会默认从浏览器缓存中取到过时的资源。我们希望浏览器每次获取资源的时候都向后端确认资源是否更新，就要设置浏览器使用协商缓存。后端如何判断资源是否更新了呢？这时就要用到Etag和Last-Modified两项响应头。")]),t._v(" "),e("ul",[e("li",[t._v("last-Modifed资源最后的修改时间。")]),t._v(" "),e("li",[t._v("Etag资源的唯一标识。")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初次请求,返回状态码200，服务端在响应头返回 ETag 和 Last-Modified")]),t._v("\n    状态代码"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OK")]),t._v("\n\n    响应头：\n    ETag"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"616d4f66-cee8"')]),t._v(" \n    Last"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" Oct "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 二次请求，服务端收到当前请求头的If-Modified-Since和If-None-Match会")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         和资源生成的etag和last-modified对比。若两者一致资源未改动（Not Modified")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//         资源会被重定向到浏览器缓存，这种情况下网络请求对应的状态码是 304")]),t._v("\n    状态代码"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("304")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OK")]),t._v("\n\n    请求头：\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//首次请求后的每次请求，会带上一个叫 If-Modified-Since 的时间戳字段，它的值正是上一次 response 返回给它的 last-modified ")]),t._v("\n    If"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Since"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" Oct "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n    If"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("None"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Match"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"616d4f66-cee8"')]),t._v("\n    \n    响应头：\n    ETag"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"616d4f66-cee8"')]),t._v("\n    Last"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" Oct "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n\n\n")])])]),e("h2",{attrs:{id:"etag-vs-last-modifed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-vs-last-modifed"}},[t._v("#")]),t._v(" Etag vs last-Modifed")]),t._v(" "),e("p",[t._v("last-Modifed弊端：")]),t._v(" "),e("ul",[e("li",[t._v("1我们编辑了文件，但文件的内容没有改变。服务端并不清楚我们是否真正改变了文件，它仍然通过最后编辑时间进行判断。所以这种情况不能命中缓存。")]),t._v(" "),e("li",[t._v("2修改文件过快，比如300ms修改了一个文件，If-Modified-Since 只能检查到以秒为最小计量单位的时间差，所以此时浏览器会错误命中缓存。")])]),t._v(" "),e("p",[t._v("Etag")]),t._v(" "),e("p",[t._v("优势：精准地感知文件的变化 ，Etag 是由服务器为每个资源生成的唯一的标识字符串，这个标识字符串是基于文件内容编码的，只要文件内容不同，它们对应的 Etag 就是不同的。\n弊端：生成过程需要服务器额外付出开销，会影响服务端的性能。")]),t._v(" "),e("p",[t._v("优先级：Etag 在感知文件变化上比 Last-Modified 更加准确，优先级也更高。当 Etag 和 Last-Modified 同时存在时，以 Etag 为准。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 首次请求 服务端返回Etag")]),t._v("\n状态码："),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n响应头：\nTag"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"616d4f66-cee8"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 再次请求，在请求头携带 If-None-Match")]),t._v("\n状态码："),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("304")]),t._v("\n请求头：\nIf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Since"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" Oct "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\nIf"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("None"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Match"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"616d4f66-cee8"')]),t._v("\n响应头：\nETag"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"616d4f66-cee8"')]),t._v("\nLast"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Modified"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Mon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),t._v(" Oct "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GMT")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"cdn"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),e("p",[t._v("CDN作用： 存放静态资源JS、CSS、图片等不需要业务服务器进行计算即得的资源。静态资源本身具有访问频率高、承接流量大的特点。必须要走CDN。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("缓存: 把资源 copy 一份到 CDN 服务器上这个过程")])]),t._v(" "),e("li",[e("p",[t._v("回源: CDN 发现自己没有这个资源（一般是缓存的数据过期了），转头向根服务器（或者它的上层服务器）去要这个资源的过程")])])]),t._v(" "),e("p",[t._v("CDN使用的优化")]),t._v(" "),e("p",[t._v("（Cookie 是紧跟域名的）CDN和主页使用不同的域名，主页请求一般需要携带cookie信息，将CDN静态资源和主页面置于不同的域名下，完美地避免了不必要的 Cookie 的出现。")])])}),[],!1,null,null,null);s.default=n.exports}}]);