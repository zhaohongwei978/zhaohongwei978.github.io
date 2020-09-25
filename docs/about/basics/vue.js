const input1 = document.getElementById('txt')
let timer = null
    input1.addEventListener('keyup',debounce(function(){
        console.log('111')
    },1000))

    function debounce(fn,delay = 500){
        let timer = null;//闭包中返回 一个函数 
        return function (){
            
            if(timer){
                clearTimeout(timer)
            }
            timer =  setTimeout(function(){
                fn.apply(this,arguments)
                timer = null;
            },delay)
        }
    }