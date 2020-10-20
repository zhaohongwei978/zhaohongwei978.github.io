(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{200:function(t,n,e){"use strict";e.r(n);var r=e(5),s=Object(r.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"ts学习"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ts学习"}},[t._v("#")]),t._v(" ts学习")]),t._v(" "),e("h2",{attrs:{id:"静态类型语言-vs-动态类型语言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#静态类型语言-vs-动态类型语言"}},[t._v("#")]),t._v(" 静态类型语言 vs 动态类型语言")]),t._v(" "),e("ul",[e("li",[t._v("静态类型语言： 在编译阶段确定所有变量的类型")]),t._v(" "),e("li",[t._v("动态类型语言: 在执行阶段确定所有变量的类型")])]),t._v(" "),e("p",[t._v("静态类型语言")]),t._v(" "),e("p",[t._v("在编译阶段确定所有变量的数据类型。")]),t._v(" "),e("ul",[e("li",[t._v("对类型极度严格")]),t._v(" "),e("li",[t._v("立即发现错误")]),t._v(" "),e("li",[t._v("运行时性能好")])]),t._v(" "),e("p",[t._v("动态类型语言")]),t._v(" "),e("p",[t._v("在执行阶段才能确定变量的数据类型。")]),t._v(" "),e("ul",[e("li",[t._v("对类型比较宽松")]),t._v(" "),e("li",[t._v("bug隐藏时间长")]),t._v(" "),e("li",[t._v("可读性差")]),t._v(" "),e("li",[t._v("动态语言性能可以改善 语言灵活度高 隐秘的错误可以通过单元测试发现 文档可以通过工具生成。")])]),t._v(" "),e("h2",{attrs:{id:"使用ts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用ts"}},[t._v("#")]),t._v(" 使用ts")]),t._v(" "),e("ul",[e("li",[t._v("1  npm i typescript -g 全局安装ts")]),t._v(" "),e("li",[t._v("2 tsc --init 创建tsconfig.json 文件。")])]),t._v(" "),e("h3",{attrs:{id:"原始数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原始数据类型"}},[t._v("#")]),t._v(" 原始数据类型")]),t._v(" "),e("ul",[e("li",[t._v("let bool:boolean  = true")]),t._v(" "),e("li",[t._v("let num:number = 123")]),t._v(" "),e("li",[t._v('let str:string = "123"')])]),t._v(" "),e("h3",{attrs:{id:"数组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),e("ul",[e("li",[t._v("let arr1:number[] = [1,2,3]")]),t._v(" "),e("li",[t._v("let arr2:Array<number|string> = [1,2,'3']")])]),t._v(" "),e("h3",{attrs:{id:"元组-不能改变数据类型和个数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#元组-不能改变数据类型和个数"}},[t._v("#")]),t._v(" 元组 不能改变数据类型和个数")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("let tuple:[number,string] = [1,'2']\ntuple.push(3)\n//虽然元组可以往里push元素，但是在实际的开发过程中是不建议这么操作的，并且push进去的值 不允许访问。\nconsole.log(tuple) //打印结果[1,'2',3] \ntuple[2] // 报错 push进去的值不允许访问\n")])])]),e("p",[t._v("//函数\nlet add = (x:number,y:number) number =x +y")]),t._v(" "),e("p",[t._v("//对象\nlet obj:object = {x:1,y:2}\nlet obj:{x:number,y:number} = {x:1,y:2}")]),t._v(" "),e("p",[t._v("//symbol\nlet s1:symbol = Symbol()\nlet s2 = Symbol()\nconsole.log(s1 === s2 ) //false")]),t._v(" "),e("p",[t._v("//underfind,null\nlet test1:unserfind = underfind\nlet test2:null = null")]),t._v(" "),e("p",[t._v("//never类型")]),t._v(" "),e("p",[t._v("let error =()=>{\nthrow new Error('error')\n}")]),t._v(" "),e("p",[t._v("let endless = ()=>{\n//死循环 never类型\nwhile(true){")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("}\n")])])]),e("p",[t._v("}")]),t._v(" "),e("h3",{attrs:{id:"es6数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#es6数据类型"}},[t._v("#")]),t._v(" ES6数据类型")]),t._v(" "),e("ul",[e("li",[t._v("Boolean Number String Array Function Object Symbal underfind null")])]),t._v(" "),e("h3",{attrs:{id:"ts-数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ts-数据类型"}},[t._v("#")]),t._v(" TS  数据类型")]),t._v(" "),e("ul",[e("li",[t._v("Boolean Number String Array Function Object Symbal underfind null")]),t._v(" "),e("li",[t._v("void any never 元祖 枚举 高级类型")])]),t._v(" "),e("h3",{attrs:{id:"类的概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类的概念"}},[t._v("#")]),t._v(" 类的概念")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Dog{\n    name: string;\n    constructor(name:string){\n        this.name = name;\n    }\n    run(){\n\n    }\n}\nlet dog = new Dog('kira')\nconsole.log(Dog.prototype) //打印类的原型\n//{run: ƒ, constructor: ƒ}\nconsole.log(dog)//打印类的实例，发现属性挂在实例上。\n//Dog {name: \"kira\"}\n")])])]),e("h3",{attrs:{id:"类成员修饰符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#类成员修饰符"}},[t._v("#")]),t._v(" 类成员修饰符")]),t._v(" "),e("ul",[e("li",[t._v("public 默认")]),t._v(" "),e("li",[t._v("private")]),t._v(" "),e("li",[t._v("static")]),t._v(" "),e("li",[t._v("readonly")]),t._v(" "),e("li",[t._v("protected")])]),t._v(" "),e("h4",{attrs:{id:"private特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#private特性"}},[t._v("#")]),t._v(" private特性")]),t._v(" "),e("ul",[e("li",[t._v("1 private定义的变量，只能通过Dog类访问")]),t._v(" "),e("li",[t._v("2 实例不能访问private修饰的变量")]),t._v(" "),e("li",[t._v("3 子类super不能调用父类private修饰的变量")]),t._v(" "),e("li",[t._v("4 如果用private 修饰constructor 该类既不能被继承 也不能被实例化。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Dog{\n    private name: string;\n    constructor(name:string){\n        this.name = name;\n    }\n     run(){\n        console.log('run=====')\n    }   \n}\nconsole.log(Dog.name);//正常\nconsole.log(dog.name);//\n//Property 'name' is private and only accessible within class 'Dog'.\n\n\nclass TT extends Dog{\n    color:string\n    constructor(name:string,color:string){\n        super(name)\n        this.color = color;\n    }\n    getColor(){\n        super.name//报错\n        return this.color;\n    }\n}\n\n\n")])])]),e("h4",{attrs:{id:"protected特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#protected特性"}},[t._v("#")]),t._v(" protected特性")]),t._v(" "),e("ul",[e("li",[t._v("protected 受保护的，受保护的成员只能在类中或者子类中访问，不能在实例中访问。")]),t._v(" "),e("li",[t._v("protected修饰 constructor，表示该类不能被实例化，只能被继承。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Dog{\n    protected name: string;\n    constructor(name:string){\n        this.name = name;\n    }\n     run(){\n        console.log('run=====')\n    }   \n}\n\nlet dog = new Dog('kira')\nconsole.log('dog',Dog.name) // 正常访问\nconsole.log('dog',dog.name) // 报错，protected成员不能在实例中访问\n\nclass TT extends Dog{\n    color:string\n    constructor(name:string,color:string){\n        super(name)//子类可以正常访问受保护成员\n        this.color = color;\n    }\n    getColor(){\n        return this.color;\n    }\n}\n\n")])])]),e("h4",{attrs:{id:"readonly特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#readonly特性"}},[t._v("#")]),t._v(" readonly特性")]),t._v(" "),e("ul",[e("li",[t._v("1 必须被初始化")]),t._v(" "),e("li",[t._v("2 只读不能被修改")])]),t._v(" "),e("h4",{attrs:{id:"static特性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#static特性"}},[t._v("#")]),t._v(" static特性")]),t._v(" "),e("ul",[e("li",[t._v("静态成员 可以被继承")]),t._v(" "),e("li",[t._v("静态成员 只能通过类名调用")]),t._v(" "),e("li",[t._v("实例对象 不能调用到静态成员")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("class Dog{\n    static test: string = ''; //静态成员\n    constructor(){\n    }\n     run(){\n        console.log('run=====')\n    }   \n}\n\nlet dog = new Dog()\nconsole.log('dog',Dog.test) //可以调用\nconsole.log('dog',dog.test) //实例不可以调用 会报错。\n\nclass TT extends Dog{\n    color:string\n    constructor(name:string,color:string){\n        super()\n        console.log(super.test) //不可以调用\n        console.log(TT.test) // 可以通过子类调用\n        this.color = color;\n    }\n    getColor(){\n        return this.color;\n    }\n}\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);