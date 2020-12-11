(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{256:function(e,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"vue3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue3"}},[e._v("#")]),e._v(" vue3")]),e._v(" "),a("h2",{attrs:{id:"objecjt-defineproperty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#objecjt-defineproperty"}},[e._v("#")]),e._v(" Objecjt.defineProperty")]),e._v(" "),a("ul",[a("li",[e._v("深度监听 需要一次性递归")]),e._v(" "),a("li",[e._v("无法监听新增/删除属性(Vue.set Vue.delete)")]),e._v(" "),a("li",[e._v("无法原生监听数组，需要特殊处理")])]),e._v(" "),a("p",[e._v("this.a = 1 //新增属性监听不到\ndelete this.a //删除属性")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("const proxyData = new Proxy(data,{\n    get(target,key,receiver){\n        const result = Reflect.get(target,key,receiver)\n        return result\n    },\n    set(target,key,val,receiver){\n        const result = Reflect.set(target,key,val,receiver)\n    },\n    deleteProperty(target,key){\n        const result = Reflect.deleteProperty(target,key)\n        return result;\n    }\n})\n")])])]),a("h2",{attrs:{id:"setup-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup-函数"}},[e._v("#")]),e._v(" setup 函数")]),e._v(" "),a("ul",[a("li",[e._v("setup()新语法，写了这个就不需要再写 data methods 这样的东西了。")]),e._v(" "),a("li",[e._v("setup() :开始创建组件之前，在 beforeCreate 和 created 之前执行。创建的是 data 和 method")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("setup(){\n    //在setup中定义变量\n    const girls = ref(['11','22','333']);\n    const selectGirl = ref('');\n    //在setup中定义方法\n    const clickMe = (index: number,item: object)=>{\n        selectGirl.value = girls.value[index]\n    };\n    //在setup中暴露方法和变量\n    return{\n      girls,\n      selectGirl,\n      clickMe\n    }\n}\n")])])]),a("h2",{attrs:{id:"reactive-函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactive-函数"}},[e._v("#")]),e._v(" reactive 函数")]),e._v(" "),a("ul",[a("li",[e._v("reactive 和 ref 都是为了定义响应式的数据。")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("interface DataProps {\n  girls: string[];\n  selectGirl: string;\n  clickMe: (index: number) => void;\n\n}\nexport default defineComponent({\n  name: 'Home',\n  setup(){\n    const data: DataProps = reactive({\n      girls:['11','22','333'],\n      selectGirl:'',\n      clickMe:(index: number)=>{\n       data.selectGirl = data.girls[index]\n      }\n    });\n    //使用toRefs目的是为了解构赋值，如果直接通过...获取属性\n    const refData = toRefs(data);\n    return{\n      ...refData\n    }\n  }\n});\n")])])]),a("h2",{attrs:{id:"生命周期"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[e._v("#")]),e._v(" 生命周期")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("- setup() :开始创建组件之前，在 beforeCreate 和 created 之前执行。创建的是 data 和 method。在 vue3 中 setup 生命周期替代了 beforeCreate 和 created。\n\n- onBeforeMount() : 组件挂载到节点上之前执行的函数。\n- onMounted() : 组件挂载完成后执行的函数。\n- onBeforeUpdate(): 组件更新之前执行的函数。\n- onUpdated(): 组件更新完成之后执行的函数。\n- onBeforeUnmount(): 组件卸载之前执行的函数。\n- nUnmounted(): 组件卸载完成后执行的函数\n- onActivated(): 被包含在<keep-alive>中的组件，会多出两个生命周期钩子函数。被激活时执行。\n- onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行。\n- onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数（以后用到再讲，不好展现）。\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);