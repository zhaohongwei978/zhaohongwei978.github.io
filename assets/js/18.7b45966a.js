(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{203:function(n,t,a){"use strict";a.r(t);var s=a(5),e=Object(s.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"作用域和闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域和闭包"}},[n._v("#")]),n._v(" 作用域和闭包")]),n._v(" "),a("ul",[a("li",[n._v("全局作用域")]),n._v(" "),a("li",[n._v("函数作用域")]),n._v(" "),a("li",[n._v("块级作用域（ES6）")])]),n._v(" "),a("h2",{attrs:{id:"作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用域"}},[n._v("#")]),n._v(" 作用域")]),n._v(" "),a("div",{staticClass:"language-$xslt extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("let a =  0;\nfunction fn1() {\n   let a1 = 10;\n   function fn2(){\n       let a1 = 9;\n       let a2  =200;\n       // a2 a1 a 在使用时会在作用域内，从离调用最近的地方到离调用远的作用域内找。\n       console.log(a2 + a1 + a)\n   }\n   fn2()\n}\nfn1();\n")])])]),a("h2",{attrs:{id:"闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[n._v("#")]),n._v(" 闭包")]),n._v(" "),a("p",[n._v("利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。\n两种表现（既闭包就是函数定义的地方和函数执行的地方不一致）\n因为 js 是有作用域的，函数也拥有自己的作用域，如果我们要想访问到作用域内的变量，需要通过闭包。")]),n._v(" "),a("ul",[a("li",[n._v("函数作为参数被传递")]),n._v(" "),a("li",[n._v("函数作为返回值被返回")])]),n._v(" "),a("p",[n._v("闭包内的自由变量寻找的时候，是在函数定义的地方向上级作用域去寻找。")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("//函数作为返回值被返回\nfunction fn1(){\n    let a = 100;\n    return function(){\n        console.log(a)\n    }\n}\nlet a = 200\nlet result = fn1();\nconsole.log(result());// 打印结果是100\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("//函数作为参数被传递\nfunction fn2(fn){\n    let a = 100\n    fn()//打印结果是200\n}\nlet a = 200\nfunction fn(){\n    console.log(a)\n}\n")])])]),a("h2",{attrs:{id:"闭包在实际场景的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#闭包在实际场景的应用"}},[n._v("#")]),n._v(" 闭包在实际场景的应用")]),n._v(" "),a("ul",[a("li",[n._v("闭包隐秘数据只提供 API，我们通过调用闭包内提供的 API 来访问函数函数内的变量")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function fn(){\n    const data = {} //闭包内的数据，外部不可直接访问\n    return{\n        get(key){\n            return data[key]\n        },\n        set(key,val){\n            data[key] = val\n        }\n    }\n}\nconst c = fn();\nc.set('name','kira')\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("i 是全局作用域\nlet a,i\nfor(i=1,i<10,i++){\n    a = document.createElement('a')\n    a.innerHTML = i  +'<br>'\n    a.addEventListener('click',function(){\n        alert(i) // 十个标签弹出的结果都是 10，因为遍历先执行，每个a标签被click时，i早就变成来10，因为i是全局作用域\n    })\n}\ndocument.body.appendChild(a)\n\n改造\ni改为块级作用域,这样每次循环都会产生一个块级作用域。\nlet a\nfor(let =1,i<10,i++){\n    a = document.createElement('a')\n    a.innerHTML = i  +'<br>'\n    a.addEventListener('click',function(){\n        alert(i) // 十个标签弹出的结果都是 1，2，3，4.....\n    })\n}\n")])])]),a("h2",{attrs:{id:"this"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this"}},[n._v("#")]),n._v(" this")]),n._v(" "),a("p",[n._v("this 取出的值是在函数执行的时候定义的\nthis 的使用场景")]),n._v(" "),a("ul",[a("li",[n._v("作为普通函数（this 指向 window）")]),n._v(" "),a("li",[n._v("使用 call apply bind（传入什么 this 就指向什么）")]),n._v(" "),a("li",[n._v("作为对象方法被调用（this 指对象本身）")]),n._v(" "),a("li",[n._v("在 class 方法中调用（this 指当前实例）")]),n._v(" "),a("li",[n._v("箭头函数（箭头函数的取值是取它上级作用域的值）")])]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("   f.__proto__ == Function.prototype // true 所以 bind call apply 都在 Function.prototype 实现的。\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function fn1(){\n    console.log(this);\n}\nfn1(); //打印结果window\n\n//通过call改变了this的指向\nfn1.call({x:100}) //打印结果 {x:100}\n\n//通过bind改变了this的指向\nconst fn1 = fn1.bind({x;200})\nfn2() //{x:200}\n\nconst xx = {\n    name:'zhangsan',\n    play(){\n        //箭头函数中的this是取它上级作用域的值\n        setTimeOut(()=>{\n            console.log(this)//this指向xx对象\n        })\n    }\n    play(){\n        setTimeOut(function(){\n            console.log(this)//this指向window\n        })\n    }\n\n}\n\n")])])]),a("h2",{attrs:{id:"手写-bind"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写-bind"}},[n._v("#")]),n._v(" 手写 bind")]),n._v(" "),a("p",[n._v("bind 的使用")]),n._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("function f() {\n    console.log('执行了')\n}\n\nFunction.prototype.bind1 = function () {\n    const self = this; //指向f\n    //参数转化为数组\n    let args = Array.prototype.slice.call(arguments);\n    //把第一项,要执向的对象提取出来\n    const start = args.shift();\n    console.log(args);\n\n    //bind的执行是返回一个函数\n    return function () {\n       return  self.apply(start,args)\n    }\n\n};\nconst fn2  = f.bind1({},1,2,4);\n//接收返回的函数，并执行\nconst  res = fn2();\nconsole.log(res);\n\n")])])]),a("h2",{attrs:{id:"手写-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写-call"}},[n._v("#")]),n._v(" 手写 call")]),n._v(" "),a("h2",{attrs:{id:"手写-apply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手写-apply"}},[n._v("#")]),n._v(" 手写 apply")])])}),[],!1,null,null,null);t.default=e.exports}}]);