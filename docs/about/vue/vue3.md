# vue3

## Objecjt.defineProperty
- 深度监听 需要一次性递归
- 无法监听新增/删除属性(Vue.set Vue.delete)
- 无法原生监听数组，需要特殊处理

this.a = 1 //新增属性监听不到
delete this.a //删除属性

```
const proxyData = new Proxy(data,{
    get(target,key,receiver){
        const result = Reflect.get(target,key,receiver)
        return result
    },
    set(target,key,val,receiver){
        const result = Reflect.set(target,key,val,receiver)
    },
    deleteProperty(target,key){
        const result = Reflect.deleteProperty(target,key)
        return result;
    }
})
```