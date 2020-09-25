# arguments 参数传递

arguments 是一个对应于传递给函数的参数的类数组对象。不可以使用数组如 pop push 等方法。
arguments 对象是所有（非箭头）函数中都可用的局部变量。

- arguments 可以通过下标取值，如 arguments[0]
- arguments 可以通过 arguments.length 查看 len 长度

```
    function f() {
        console.log(arguments) // { '0': 1, '1': 2, '2': 3, '3': 4 }
    }
    f(1,2,3,4);

```

把类数组转换成数组的几种方法

- 通过...解构赋值
- Array.from()
- Array.prototype.slice.call()
- 通过循环遍历 arguments

```
function f() {
    let a = [...arguments];
    console.log(a); //[1,2,3,4]
    console.log(Array.from(arguments));//[1,2,3,4]
    console.log(Array.prototype.slice.call(arguments))[1,2,3,4]
    // for (let i =0;i<arguments.length;i++){
    //     console.log(i) //1,2,3,4
    // }
}
f(1,2,3,4);
```
