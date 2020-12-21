(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{240:function(n,a,e){"use strict";e.r(a);var t=e(5),s=Object(t.a)({},(function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"scss-使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scss-使用"}},[n._v("#")]),n._v(" SCSS 使用")]),n._v(" "),e("h2",{attrs:{id:"变量的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量的使用"}},[n._v("#")]),n._v(" 变量的使用")]),n._v(" "),e("ul",[e("li",[n._v("形式1 $bg:#ddd;")]),n._v(" "),e("li",[n._v("形式2 $font:{ s:12px,m:14px,l:16px }")])]),n._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(".bg{\n    background-color:$bg\n}\n\n.bg{\n    font-size: map-get('$font',m) //设置字体大小为14px\n}\n")])])]),e("h2",{attrs:{id:"嵌套书写"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#嵌套书写"}},[n._v("#")]),n._v(" 嵌套书写")]),n._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("//css \ndiv p { background-color:red }\n\n//scss嵌套书写\ndiv{\n    p{\n         background-color:red\n    }\n}\n")])])]),e("h2",{attrs:{id:"符号表示父节点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#符号表示父节点"}},[n._v("#")]),n._v(" &符号表示父节点")]),n._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("//scss\ndiv{\n    p{\n         background-color:red\n    }\n    \n    &.hover{\n        background-color:green\n    }\n}\n\n\n// 转换成css\ndiv p { background-color:red }\ndiv.hover{ background-color:green }\n")])])]),e("h2",{attrs:{id:"mixin混入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mixin混入"}},[n._v("#")]),n._v(" @mixin混入")]),n._v(" "),e("ul",[e("li",[n._v("通过混入可以把一些样式单独提出来，当使用@minx时，通过@include 引入,并且可以传递参数")])]),n._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\n@minx theme($color) {\n    background-color:$color;\n    font-size:30px;\n}\n\n\nx1{\n  @include theme(red);\n  border:10px solid #ddd;\n}\n\nx2{\n  @include theme(green);\n  border:10px solid #ddd;\n}\n\n")])])]),e("ul",[e("li",[n._v("使用mixin，如果 x1元素和@mixin theme拥有相同的样式，会出现冗余。")])]),n._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("\n@mixin n {\n    font-size:20px;\n}\n\n.x1{\n    @include n;\n    font-size:30px;\n    background-color:red;\n}\n\n\n//转换为css的效果\n.x1 {\n  font-size: 20px;\n  font-size: 30px; //所以此时会取font-size:30px\n  background-color: red;\n}\n")])])]),e("h2",{attrs:{id:"extends"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extends"}},[n._v("#")]),n._v(" @extends")]),n._v(" "),e("ul",[e("li",[n._v("定义基础类，被继承的子类，可以继承基础类，也可以覆盖父类")])]),n._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("//scss \n//定义父类\n.n {\n    font-size:20px;\n}\n\n//子类\n.x1{\n    @extend n;\n    font-size:30px;\n}\n.x2{\n    @extend n;\n}\n\n\n//转换为css\n\n.n, .x1,x2 {\n  font-size: 20px;\n}\n\n.x1 {\n  font-size:30px;\n}\n\n.x2{\n\n}\n")])])]),e("h2",{attrs:{id:"extend-vs-mixin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extend-vs-mixin"}},[n._v("#")]),n._v(" @extend VS @mixin")]),n._v(" "),e("p",[n._v("当样式和选择器之间的关系在某些方面比较紧密的时候，使用@extend。除此之外，你可以使用@mixin在任何地方。")]),n._v(" "),e("ul",[e("li",[n._v("@extend 不够灵活，不能传递参数")]),n._v(" "),e("li",[n._v("@extend增加了选择器之间的联系。能为一些相关的元素设置样式，让他们共享样式看起来合情合理。")]),n._v(" "),e("li",[n._v("@mixin主要的优势就是它能够接受参数。")]),n._v(" "),e("li",[n._v("minx混入的样式，会混入到选择器中，可能产生重复的代码。")])]),n._v(" "),e("h2",{attrs:{id:"dry编码方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dry编码方式"}},[n._v("#")]),n._v(" DRY编码方式")]),n._v(" "),e("p",[n._v("DRY就是Donot repeat youself 消除重复编码方法。")])])}),[],!1,null,null,null);a.default=s.exports}}]);