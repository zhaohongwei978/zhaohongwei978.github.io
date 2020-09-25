# promise


promise 只有在padding状态才能改变状态，一旦promise的状态被改变就不可以在改变。

## then 和 catch 改变状态

- then 正常返回 resolved，里面有报错则返回 rejected。
- catch 正常返回 resolved, 里面有报错则返回 rejected。

```

const p2 = Promise.resolve().then(()=>{
    throw new Error('error') //会返回rejectred的promise，之后的回调是then
});


const p3 = Promise.reject('111').catch(()=>{
    console.log('catch');// reject执行完调用catch，catch会返回一个成功的promise，之后可以调用 then
}).then(()=>{
    console.log('111')//
})

//打印结果 1  2 3
Promise.resolve().then(()=>{
    console.log(1);
    throw new Error('error')
}).catch(()=>{
    console.log(2); // catch之后会返回一个成功的promise
}).then(()=>{
    console.log(3);
})

```

## async /await 和 Promise的关系

- 执行async函数，返回的是Promise对象
- await 相当于 Promise的then
- try...catch可以捕获异常,代替来Promise.catch 
- await后面的内容都是异步的内容

```
//执行aysnc函数,返回的是Promise对象
async function  fn1() {
    return  100; //相当于return Promise.resolve(100);
}
const res = fn1();
res.then((val)=>{
   console.log(val)
});

```

```
async function fn2(){
    const data = await Promise.resolve(3000)
    console.log(data) // 可以打印出300，await相当于 Promise.then的回调
}
```



```
async function fn2(){
    const data = await 3000 //相当于Promise.resolve(3000)
    console.log(data) // 可以打印出300，await相当于 Promise.then的回调
}
```

```
//try catch 相当于 Promise的catch

async function fn3){
    try{
        const res = await Promise.reject('error')
    }catch{
        console.log(res)
    }

}
```

```
async function fn4{
    const res = await Promise.reject('error');
    console.log(res);// 此时的res不会被执行，因为await相当于Promise的then，当reject 时候会执行catch不会执行then，所以此时必须要通过try catch 捕获。
}
```


```
async function async1(){
    console.log('fn start')
    await async2()
    //await后面当作异步代码来执行
    console.log('fn end')
}

console.log('script start');
async1()
console.log('script end');

async function async2(){
    console.log('async2')
}
打印顺序 
script start
fn start
async2
script end
fn end

```


### 场景题分析 

```
async function fn(){
    return 100
}

(async function(){
    const a  = fn();//a的值为 Promise.resolve(100)
    const b  = await fn();// b的值为100，await是promise.resolve的回调
})()    
```

```
(async function(){
    console.log('start')
    const a = await 100
    console.log(a) // a的值为100 
    const b = await Promise.resolve(200)
    console.log(b) // b的值为200
    const c = await Promise.reject(300) //此时会报错因为c是 Promise.resolve()的回调，此时拿不到reject的值，需要使用try catch不然报错。执行不下去了
    console.log(c) 
})()
```
