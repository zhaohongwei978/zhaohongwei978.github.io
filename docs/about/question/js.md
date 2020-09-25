# js问题

## Oject.assign的浅拷贝问题？
Object.assign 只能拷贝第一层。
```
let a = {a:1,b:2}
let b= {c:3,d:{name:'kira'}};

let obj = Object.assign({},a,b);
console.log(obj);
//{ a: 1, b: 2, c: 3, d: { name: 'kira' } }

a.a = 66;
console.log(obj); //修改a发现obj并没有被改变。
// { a: 1, b: 2, c: 3, d: { name: 'kira' } }
b.d.name = 'test';
console.log(obj);//修改name时候，发现obj被改变了。
//{ a: 1, b: 2, c: 3, d: { name: 'test' } }
c
```

## requestAnimationFrame对比setTimeOut

- 没有办法保证，回调函数一定会在setTimeout()指定的时间执行。
- 把浏览器切换到后台，setTimeOut还会一直执行。
- 在页面渲染结束后才会开始执行。
- requestAnimationFrame 执行时机早，在重绘阶段 就开始执行了。
- 动画更加流畅 60帧/s，既16.67ms更新一次视图。这个时机是符合人眼的。频率是自己定的
- setTimeOut手动设置多少毫秒增加多少像素，requestAnimationFrame自动控制.
setTimeOut手动设置时间来执行，如果手动设置setTimeOut(fn,0)执行代码前等待的毫秒数为0，但并不是立即执行的，这是因为setTimeout有一个最小执行时间。

HTML5标准规定了setTimeout()的第二个参数的最小值（最短间隔）不得低于4毫秒。实际上可能为 4毫秒后才事件推入任务队列。如果此时主线程不为空，也不会读取推出异步队列的setTimeOut.

执行效率问题

```
虽然两段代码执行效果一样，但是第二段代码(16.7ms/3)就要执行一次函数，很浪费性能。
如果每次增加10或者更大，使用setTimeOut会有明显卡顿卡。
let currentWidth = 100
const maxWidth = 640
function animate()
    currentWidth + = 3;
    if(currentWidth<maxWidth){
        $div.css('left',currentWidth)
        setTimeOut(animate,16.7)
    }
}
animate();

//假设我们让每次增加1px
let currentWidth = 100
const maxWidth = 640
function animate()
    currentWidth + = 1;//每次增加1px
    if(currentWidth<maxWidth){
        $div.css('left',currentWidth)
        setTimeOut(animate,16.7/3) //增加setTimeOut的执行频率
    }
}
animate();
```

## DocumentFragement VS Document

- 区别:DocumentFragment 不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会导致性能等问题。

DocumentFragment节点代表一个文档的片段，本身是一个完整的DOM树结构。它没有父节点，不属于Document。但是可以插入任意数量的子节点。但是它不属于当前文档。比直接操作DOM树快。

```
//简单使用
var carInfoEl = document.querySelector('.car-info')
const fragment = document.createDocumentFragment() //创建fragement
carDetail.carInfo.map(item => {
      var li = document.createElement('li')
      li.innerHTML = '<span class="key">' + item.split(':')[0] + '</span > <span span class="value" >' + item.split(':')[1] + '</span>'
      fragment.appendChild(li)//把真实DOM append到 fragement上
})
carInfoEl.appendChild(fragment) //把fragement添加到真实DOM上。
```



## 在前端如何处理几万条数据的情况？
通过使用DocumentFragement。存储每次要插入的文档。
使用requestAnimationFragement动态 在真实DOM上添加 fragement。
```
    setTimeout(() => {
    // 插入十万条数据
    const total = 100000;
    // 一次插入的数据
    const once = 20;
    // 插入数据需要的次数
    const loopCount = Math.ceil(total / once);
    let countOfRender = 0;
    const ul = document.querySelector('ul');
    // 添加数据的方法
    function add() {
        const fragment = document.createDocumentFragment();
        for(let i = 0; i < once; i++) {
        const li = document.createElement('li');
        li.innerText = Math.floor(Math.random() * total);
        fragment.appendChild(li);
        }
        ul.appendChild(fragment);
        countOfRender += 1;
        loop();
    }
    function loop() {
        if(countOfRender < loopCount) {
        window.requestAnimationFrame(add);
        }
    }
    loop();
    }, 0)

```
