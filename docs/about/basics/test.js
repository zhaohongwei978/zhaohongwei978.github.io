// //重新定义数组原型
// const oldArrayProperty = Array.prototype;
// //创建新对象 原型指向oldArrayProperty 扩展的新方法不会影响原型
// const arrProto = Object.create(oldArrayProperty);
// // pop push shift unshift splice
//
// ['pop','push','shift','unshift','splice'].forEach(name=>{
//     arrProto[name] = function () {
//         updateView()
//         oldArrayProperty[name].call(this,...arguments)
//     }
// });
// arrProto.push = function () {
//
// };
//
// arrProto.pop = function () {
//
// };
//
// function updateView() {
//     console.log('更新视图')
// }


function a(a,b){
    console.log(arguments);
}
let test = ()=>{
    console.log(arguments )
}
a(1,2);


