# vue相关

## v-show && v-if区别？

- v-show通过css的display判断是否显示，不管是否显示DOM已经存在。
- v-if 是判断节点是否渲染，如果频繁切换不适合使用。


## 为什么v-for中用key？

必须有key 不能用index和random，应该用后台返回的id
diff算法通过tag和key来判断 是否sameNode 优化渲染次数，提升渲染性能。

## 描述vue父子组件生命周期？

- 父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
- 子组件更新过程
- 父beforeUpdate->子beforeUpdate->子updated->父updated
- 父组件更新过程
- 父beforeUpdate->父updated
- 销毁过程
- 父beforeDestroy->子beforeDestroy->子destroyed->父destroyed

## 描述组件间如何通讯？
    父子组件传值
    兄弟组件传值
    祖孙组件传值
    emitBus 和vuex的使用


## 描述组件渲染和更新的过程

## 双向数据绑定的实现原理

- 输入框 value 绑定 data中的key name
- 给输入框绑定input的事件  this.name = $event.target.value
- data更新触发render渲染


## v-model的实现原理
v-model传入数据，通过value或者自定义model接收
model:{
    prop:'text'//对应到 props text
    event:'change'
}
使用
<input type="text" :value="text" @input="$emit('change',$event.target.value)">


## 对MVVM的理解 

View  ViewModel Model

## computed 和 watch的区别？

- 缓存 data不变不会重新计算 提高性能




## 为什么data被设计一个函数？

vue文件实际被编译出来是一个class，每个地方使用组件相当于是对class的一个实例化，在实例化时候如果data不是函数，每个组件都会共享同一个data。
    
## ajax请求应该放在哪个生命周期？

    js是单线程，ajax异步获取数据。放在mounted之前没任何作用。
   正确姿势中获取数据。 mounted之前，要完成observe，render过程。即使提前获取数据也没有什么作用。

## 如何将组件所有props传递给子组件？
```
    - $props
    <User v-bind="$props" />
```

## 多个组件有相同逻辑，如何抽离？

使用mixin
mixin的一些缺点 

## 何时使用异步组件？

- 加载大组件 比如 加载编辑器组件 加载图表 
- 路由异步加载 切换路由异步加载

## keep-alive何时使用？

比如静态的tab页 header等。

## 什么是作用域插槽？

## Vuex中action 和 mutation有何区别？

- action中处理异步，mutation不可以
- mutation做原子操作
- action可以整合多个mutation 


## Vue-router常用路由模式 
- hash默认 
主要对onHashChange函数做一些处理
- history模式(需要服务端支持) 后端需要路径全覆盖返回前端index页  
history 根据 html5的 history.pushState 
- abstract
适用于所有JavaScript环境，例如服务器端使用Node.js。如果没有浏览器API，路由器将自动被强制进入此模式。

## 如何配置Vue-router异步加载

router:[
    {
        path:'/',
        component: ()=> import(
            '../src/heelo'
        )
    }
]

## 请用vnode描述一个DOM结构

```
<div id="div1" class="container" >
    <p>vdom</p>
    <ul style="font-size:10px">
        <li>111</li>
    </ul>
</div>

{
    tag:"div",
    props:{
        className:'container',
        id'div1'
    },
    children:[
        {
            tag:'p',
            children:'vdom'
        },{
            tag:'ul',
            props:{style:'font-size:20px;'},
            children:{
                tag:'li',
                children:'111 '
            }
        }
    ]
}
```

# vue监听data变化，响应式原理
- 监听数组
- 监听对象 

Object.defineProperty缺点  
不能监听数组变化。


## diff算法事件复杂度问题

o(n3次方) 降低到O(n) 并描述diff算法过程

## 简述 diff算法过程

- patch(elem,vnode) patch（vnode,newVnode）
- patchVnode 和 addVnodes 和 removeVnodes
- updateChildren(key 的重要性)

## Vue为何是异步渲染， $nextTick作用？

- 异步渲染 (以及合并data修改)，以提高渲染性能。
- $nextTick在DOM更新之后，触发回调。

## v-for为什么不能和v-if一起使用？
    因为在代码执行的时候，v-if会优先执行 每次循环都会进行一次 v-if的判断很浪费性能。所以v-if和v-for同时存在时候。vue会报错。

```
    <div v-for="item in list" v-if="">
```

## vue中为什么data被设计为函数?

为了让每个组件实例维护属于自己的一个data，如果data不是函数，会造成多个组件公用同一个data对象。                                       

## vue中如何使用 插件 Plugin？
```
let MyPlugin = {}
MyPlugin.install = function(Vue,options){
    //增加全局方法
    Vue.globalMethod = function (){
        console.log('全局方法   ')
    }
    //增加自定义指令
    Vue.directive('direct',{
        bind(){
            console.log('指令绑定成功')
        }
    })
    //增加过滤器
     Vue.filter('msgFormat', function(msg) {   
            return msg.replace(/单纯/g, 'xxx')
    })
    //mixin
    Vue.mixin({
        create(){
            console.log('公共mouted')
        }
    })
}
export default MyPlugin
vue.use(myPlugin)
```

## vue路由懒加载 和 全量加载？

如果不配置路由懒加载，路由会全量加载，既第一次请求首页就把所有的资源都加载回来。
如果配置路由懒加载切换到对应的路由才会加载到对应的路由下资源，可以减少首次请求资源的体积。

component:()=>{
    import('../view/about.vue')
}


## Vue常见性能优化

- 合理使用v-if v-show
- 合理使用computed
- v-for 增加key
- 自定义事件 DOM事件及时销毁 event.$off removeEventListener  清除timer
- 合理使用异步组件 
- 合理使用 keep-alive
- data层级不要太深
- webpack层的优化 
