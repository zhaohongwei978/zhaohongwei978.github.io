/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a1fe4681daf8e04ea94de0ba84c159a7"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "37a2368f78b93445758d9e23edcd5704"
  },
  {
    "url": "about/basics/跨域.html",
    "revision": "b4e8c8d8bd3fe7089755dd1595cd16a4"
  },
  {
    "url": "about/basics/垃圾回收机制.html",
    "revision": "0226e2f1f2016470dc7ae2dfdfa0b4f1"
  },
  {
    "url": "about/basics/模块化.html",
    "revision": "ed33cb6e289c55bd48ec325000b6fd7b"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "fdeb03bad4c339d99bf5c3424f0cce39"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "d9ca0dc6b0d75c6c94e404a5749592ed"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "07037ca3bd918343e2b699588059823a"
  },
  {
    "url": "about/basics/循环相关函数.html",
    "revision": "9516bee9b4e17211ab7dd1fe2cdebb67"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "d22e78c3e236f49bfd3485a34066a11e"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "76aa5b67d3ecf687f8e23e67a3f2aa7f"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "7bb9ea31d20400b615eed4674b0a7174"
  },
  {
    "url": "about/basics/dsBridge.html",
    "revision": "2ea831dc92133c14a9739c12cad0a3f0"
  },
  {
    "url": "about/basics/generator.html",
    "revision": "8711aec12a48d97c555caf5a8d31172c"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "24f79c676b2a56c85ddfc4d467feba7d"
  },
  {
    "url": "about/basics/Object.html",
    "revision": "b7660789890b39b37f6f465eb37bf187"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "dd099e9c60220a0706dc142690716d76"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "d579be9f240be198888113a8ef80cdf4"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "26e87191b053bab1c884a957c8cafa60"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "f6b637b7920db72e17a4a813ebe6e736"
  },
  {
    "url": "about/css/盒子布局.html",
    "revision": "a8ecb53825658c44e2a163b55eb83f23"
  },
  {
    "url": "about/css/盒子模型.html",
    "revision": "6bac080c2dcd4dd035903aae33d1e970"
  },
  {
    "url": "about/css/清除浮动的几种方式.html",
    "revision": "9935d495570de64035585ddd12bbc1db"
  },
  {
    "url": "about/css/BFC介绍和解决的问题.html",
    "revision": "b3aed33289a8ae6b5df448bb3baa6ad4"
  },
  {
    "url": "about/css/scss使用.html",
    "revision": "bcfb8af193c7ea315c87d666c0d138de"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "f60270219c4a7475d1adb0c608cb453d"
  },
  {
    "url": "about/http/HTTP基础知识.html",
    "revision": "6d3e1f7ee9f63dea28fe892eecbfa265"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "7e3064386373623382b9135ea040e73d"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "e50f5a97058eb7b6e519a8ce39e90afc"
  },
  {
    "url": "about/nature/网页性能优化.html",
    "revision": "9909662c5bc354b50e07e3be09252070"
  },
  {
    "url": "about/nature/性能优化总结.html",
    "revision": "82adf0ef0839f039f3b633209bad5192"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "5573112c4a79fb713ab017ce9ee3b2b9"
  },
  {
    "url": "about/node/io.html",
    "revision": "f1b60a22356e12a45a9106f5b3adf356"
  },
  {
    "url": "about/node/koa.html",
    "revision": "a92e3bc70060ede4622b6d822a0f1c97"
  },
  {
    "url": "about/project/微前端.html",
    "revision": "90b6db9dd5fb2c7b43f4855f45487ada"
  },
  {
    "url": "about/project/项目总结.html",
    "revision": "377b290100b4fd33d1f49b0108cf9b7e"
  },
  {
    "url": "about/project/小程序架构设计.html",
    "revision": "39b7eb15adbd8eb58c8a1455004d9cd4"
  },
  {
    "url": "about/project/性能监控.html",
    "revision": "7ab4978e216a028ce117174cae4a135d"
  },
  {
    "url": "about/question/移动端问题.html",
    "revision": "b8ad7a2f46c444f61c4a344beed07d3e"
  },
  {
    "url": "about/question/js.html",
    "revision": "c69251f11be3eb07cf1174a6b10a6726"
  },
  {
    "url": "about/question/vue.html",
    "revision": "33ddcf5611473a77209d52e2ad4b3fde"
  },
  {
    "url": "about/react/react.html",
    "revision": "6cf634b550c31086ce73cdded1afc547"
  },
  {
    "url": "about/tools/mysql.html",
    "revision": "e8562541539ccc5fd727a069cbed0be9"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "678813b471af4012709dce7ecb209286"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "9963272d4db62ededb7261254dd7eddd"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "0b54e770eb6122448927be8cbdd2f6bf"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "1e38af185e664b57f3203980e443c8c9"
  },
  {
    "url": "about/vue/响应式observe.html",
    "revision": "e3a5a099403f523ac4ef53923dd1c1df"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "d419d796939ed0445a8f0ecbe505e5ea"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "20871902260acbdb846564953f60ed32"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "3a6d1f9a33649cbfa30e3f74876cb167"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "29c04fc3dd796a14cf2bc7b133a98487"
  },
  {
    "url": "about/vue/newVue时候都做了什么.html",
    "revision": "e30461a83cc523cd03b3005f84b4afa6"
  },
  {
    "url": "about/vue/nextTick.html",
    "revision": "fac32e253c29ada3dfcaa7bed0ab1d1e"
  },
  {
    "url": "about/vue/render函数.html",
    "revision": "e8d953a73707e09f4935ce106a087c3b"
  },
  {
    "url": "about/vue/update.html",
    "revision": "afc1bd6e028ad1abdc4db1e709cce05c"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "d70c8778548862976e0f8150cf60987a"
  },
  {
    "url": "about/vue/vue实例挂载.html",
    "revision": "4c58b5273bbc9b20df0065062d2fec4e"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "e37cbfb3f92c6076f14eb49002f8974f"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "42066811786fd6f669e1376de82f5ede"
  },
  {
    "url": "assets/css/0.styles.8877e4ba.css",
    "revision": "6fe6a431b1acfb4ae1fe685332f04433"
  },
  {
    "url": "assets/img/1492200-20181023200852131-291342969.e681c247.png",
    "revision": "e681c24702efc742404ac94f5f57a1a5"
  },
  {
    "url": "assets/img/1599408879599.efe5515c.jpg",
    "revision": "efe5515cddcadb63ec5fa471359aa3d0"
  },
  {
    "url": "assets/img/20191022172607993.56f26a00.png",
    "revision": "56f26a00e8d4520c04f289c4be880525"
  },
  {
    "url": "assets/img/b01.01e71ab5.jpg",
    "revision": "01e71ab5eb3b6a2dad48ca90026f5938"
  },
  {
    "url": "assets/img/b02.3f98fb9c.jpg",
    "revision": "3f98fb9c926260255fb59eb91f98dd91"
  },
  {
    "url": "assets/img/b03.eccad24f.jpg",
    "revision": "eccad24fac81211d6281ac158283a10e"
  },
  {
    "url": "assets/img/b04.40624ce6.jpg",
    "revision": "40624ce63fb798c0e31a57e6f15925c4"
  },
  {
    "url": "assets/img/bragin01.410064b8.jpg",
    "revision": "410064b87853d7a76aa54e90af514beb"
  },
  {
    "url": "assets/img/bragin02.b79c6fce.jpg",
    "revision": "b79c6fce3a59216523e7ca314b77b217"
  },
  {
    "url": "assets/img/bragin03.20cf5265.jpg",
    "revision": "20cf52658e7fc77cc892e9806f0e9468"
  },
  {
    "url": "assets/img/http_huancun.9b9d8560.jpg",
    "revision": "9b9d85605da9b241bf793d87de05cae8"
  },
  {
    "url": "assets/img/koa-yangcong.0a1112a8.png",
    "revision": "0a1112a89f445bee4c87dbb083ca0282"
  },
  {
    "url": "assets/img/question01.9c09e534.jpg",
    "revision": "9c09e53430e548413ec5b34ec690d350"
  },
  {
    "url": "assets/img/question02.6a4d232f.jpg",
    "revision": "6a4d232f324d8dba83c725804699080a"
  },
  {
    "url": "assets/img/screen01.139c277c.jpg",
    "revision": "139c277c96fff78238d3163ea1068a89"
  },
  {
    "url": "assets/img/screen02.2b5cdbdc.png",
    "revision": "2b5cdbdc813231d264f70a89b116d367"
  },
  {
    "url": "assets/img/screen03.6c7f210e.png",
    "revision": "6c7f210e697019b48a61d8e7defa330f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/smallApp02.aab1c20a.png",
    "revision": "aab1c20ac468be6295b0f17817ad2b42"
  },
  {
    "url": "assets/img/smallApp03.62fa484f.png",
    "revision": "62fa484f43607dd071a7fa66c6faa6dc"
  },
  {
    "url": "assets/img/smallApp04.6a90d53d.png",
    "revision": "6a90d53dbf202eaa58c83981f4c6f62c"
  },
  {
    "url": "assets/img/smallApp06.f710e603.png",
    "revision": "f710e60330e7c7b2fa7f93d15f283ec6"
  },
  {
    "url": "assets/img/testCar01.67eda150.jpg",
    "revision": "67eda1507b6d9cf6e6357cc402c2a5ad"
  },
  {
    "url": "assets/img/testCar02.cf0aa2b2.jpg",
    "revision": "cf0aa2b2df22d1562c38a9b00474ca32"
  },
  {
    "url": "assets/img/v2-a98ec85570158e7eb8601534984bb22c_1440w.a98ec855.jpg",
    "revision": "a98ec85570158e7eb8601534984bb22c"
  },
  {
    "url": "assets/img/WX20200914-234458@2x.eda50cf6.png",
    "revision": "eda50cf66152f212786f4bcc8e797aa0"
  },
  {
    "url": "assets/img/WX20200914-234528@2x.743205df.png",
    "revision": "743205dfc5173e1e421e7e9463b442ba"
  },
  {
    "url": "assets/img/WX20201103-193946@2x.edd716bf.png",
    "revision": "edd716bfa24faefcc9128498b81df267"
  },
  {
    "url": "assets/img/WX20201118-201742@2x.cc047fa1.png",
    "revision": "cc047fa195b49ee745018bf52402e8a5"
  },
  {
    "url": "assets/img/yun01.5dbe9215.jpg",
    "revision": "5dbe9215808df8dc8e297e250294df5c"
  },
  {
    "url": "assets/img/yun02.21440ee6.jpg",
    "revision": "21440ee6d3ac48278602d7c34171d877"
  },
  {
    "url": "assets/img/yun03.1c782c24.jpg",
    "revision": "1c782c244a113165d3297927dee426f0"
  },
  {
    "url": "assets/img/yun04.98563617.jpg",
    "revision": "98563617387d2ac30c797f7f5985371f"
  },
  {
    "url": "assets/js/10.675d1f55.js",
    "revision": "3a4422390116388ebcc9bf67da0ce231"
  },
  {
    "url": "assets/js/11.2d0c45ed.js",
    "revision": "14155493a3d0c9c80e05a8e0846c2afc"
  },
  {
    "url": "assets/js/12.8deb03aa.js",
    "revision": "bb26eed240cc91662948419d669158bb"
  },
  {
    "url": "assets/js/13.fe0068ef.js",
    "revision": "5633cf3e3d538598348e15df58fdf507"
  },
  {
    "url": "assets/js/14.7136c411.js",
    "revision": "ac4ab6293e6ef81388c4257971e4955d"
  },
  {
    "url": "assets/js/15.15c81bd6.js",
    "revision": "7c8b79586e08501cd343a350ee243c7d"
  },
  {
    "url": "assets/js/16.8fc5ffaf.js",
    "revision": "3de0a15073dcb18661164fdf8185103b"
  },
  {
    "url": "assets/js/17.7e4d51d8.js",
    "revision": "cb49f611a3604584d5dce5739636b5d5"
  },
  {
    "url": "assets/js/18.dfbd277e.js",
    "revision": "53c75a6686472539147e2cbc08a1aec0"
  },
  {
    "url": "assets/js/19.f5c60ab5.js",
    "revision": "3e064dc7fe77d2b1e4e818317134d5f9"
  },
  {
    "url": "assets/js/2.53bcdd8f.js",
    "revision": "93e7fe510df106abc20f63ca3ca0bd1f"
  },
  {
    "url": "assets/js/20.defc19db.js",
    "revision": "edce1dabac3ef5e30553de928843cafd"
  },
  {
    "url": "assets/js/21.b3bbb785.js",
    "revision": "53814bda419d2470eecbb6c1dbf32647"
  },
  {
    "url": "assets/js/22.4323fa5f.js",
    "revision": "4317b4b1830e39dd514bd3718510c016"
  },
  {
    "url": "assets/js/23.2c6d7e16.js",
    "revision": "19849928a0e52ead3b583cead63f773e"
  },
  {
    "url": "assets/js/24.0bcfcbb6.js",
    "revision": "a073f6a91cbe15a666d632f78113638c"
  },
  {
    "url": "assets/js/25.20b6a981.js",
    "revision": "a21d722582eb54aaaf27ef72136deb8e"
  },
  {
    "url": "assets/js/26.ba0a3f99.js",
    "revision": "a085c0ee4adb6a640ffb34a7ee6187c9"
  },
  {
    "url": "assets/js/27.55a25610.js",
    "revision": "a339c1c237c083c1ef72b9da7d714082"
  },
  {
    "url": "assets/js/28.d98f17b0.js",
    "revision": "b4e99c8a6b298677d92198b0521f40e4"
  },
  {
    "url": "assets/js/29.3c74e390.js",
    "revision": "699f88463fef63cdc2a3dbc52809e402"
  },
  {
    "url": "assets/js/3.f5ecc680.js",
    "revision": "73c75df9fd398d940b836a6552682636"
  },
  {
    "url": "assets/js/30.b572a145.js",
    "revision": "e320f0f46345f16ececf535731727a4e"
  },
  {
    "url": "assets/js/31.0196fbd1.js",
    "revision": "4be4d0d9bc81cb05d4d73c8e4797ad0b"
  },
  {
    "url": "assets/js/32.e39cbf4d.js",
    "revision": "410858c4600ce9b1a67f5404e61757d5"
  },
  {
    "url": "assets/js/33.fcd348c4.js",
    "revision": "ca11c1aac79ac9e509856ee55704b5ad"
  },
  {
    "url": "assets/js/34.ba24683b.js",
    "revision": "4def93602577b02d47824a73a5d09188"
  },
  {
    "url": "assets/js/35.ded5991a.js",
    "revision": "3a67c23e1e8ad42924a02ec8b4b41b29"
  },
  {
    "url": "assets/js/36.ca58d2f1.js",
    "revision": "39c34d8509f5a4c092baf8c71040f3ea"
  },
  {
    "url": "assets/js/37.663284f9.js",
    "revision": "256c86a7333ae976ad189c976cfec340"
  },
  {
    "url": "assets/js/38.a9a90b5e.js",
    "revision": "2c53cf9ff5e41b1cb3a0347dc846f0d7"
  },
  {
    "url": "assets/js/39.6111125d.js",
    "revision": "adcd7cf3e6504cae26bcb3f6a7c299f9"
  },
  {
    "url": "assets/js/4.e9acd722.js",
    "revision": "22e14660889f58a24235684e99424a53"
  },
  {
    "url": "assets/js/40.072bdc93.js",
    "revision": "ef1658acc3d31ecbe098b7996176b252"
  },
  {
    "url": "assets/js/41.a89d4128.js",
    "revision": "5c1b4b4066e206b7c0397822729a9d84"
  },
  {
    "url": "assets/js/42.d8bc7dda.js",
    "revision": "8100a0d17dc17d54d4d4b451b2c986c3"
  },
  {
    "url": "assets/js/43.aa13d0e9.js",
    "revision": "d6d8b06fff99f0ac944f40d221705555"
  },
  {
    "url": "assets/js/44.dc30511a.js",
    "revision": "c69d909c1bcee905ec689fb3999f7a26"
  },
  {
    "url": "assets/js/45.77a645f2.js",
    "revision": "57b859392e390cdd68e8e4a17a078891"
  },
  {
    "url": "assets/js/46.518d43d3.js",
    "revision": "4dd26fdd33339d25f58c371a840a3048"
  },
  {
    "url": "assets/js/47.da43d42d.js",
    "revision": "99d15462b3890b7938b4ef5bc573f042"
  },
  {
    "url": "assets/js/48.c0d2ec59.js",
    "revision": "d5d9b179fa3ed2f6092911c87a6710c3"
  },
  {
    "url": "assets/js/49.788f312c.js",
    "revision": "03d55eed731e52aa099affda67f5097b"
  },
  {
    "url": "assets/js/5.e13b5350.js",
    "revision": "1e019f25c2b5cf53c462644288cb020a"
  },
  {
    "url": "assets/js/50.5c07cf0a.js",
    "revision": "eb3affa382b627911f3380e56d0415e9"
  },
  {
    "url": "assets/js/51.671eb16e.js",
    "revision": "6712f6ef7d48f1f0a1ca905247887334"
  },
  {
    "url": "assets/js/52.af2ed7f8.js",
    "revision": "028f00059fee9b1f00a2dfeb792155e6"
  },
  {
    "url": "assets/js/53.f53c45b2.js",
    "revision": "667f81c049f651e88539848349ad431d"
  },
  {
    "url": "assets/js/54.c9904866.js",
    "revision": "b39d75d7da6d65aef10cf9143fb8e9a9"
  },
  {
    "url": "assets/js/55.65db386b.js",
    "revision": "39ab16d4110c8628bde298fe8af450db"
  },
  {
    "url": "assets/js/56.cc73f342.js",
    "revision": "c7759ee8ccd8cd0d786504c71ee4f259"
  },
  {
    "url": "assets/js/57.0562c171.js",
    "revision": "cda6c19c7e102846f9b937b277ed6b55"
  },
  {
    "url": "assets/js/58.16965c2f.js",
    "revision": "1106f00788ef1af7d6f69d5774985266"
  },
  {
    "url": "assets/js/59.878f5c58.js",
    "revision": "6f52a41140c2b6faee2e69ccaee573f1"
  },
  {
    "url": "assets/js/6.e0a8d5cc.js",
    "revision": "cfbfaf1be7b627a8c15ca5cd71a3f3ab"
  },
  {
    "url": "assets/js/60.c8ac10eb.js",
    "revision": "7c16c6c2da5254d533ec78ee2ba75c6d"
  },
  {
    "url": "assets/js/61.4638b213.js",
    "revision": "a2166c59c4d9d25d92cab3c6274f4e9b"
  },
  {
    "url": "assets/js/62.bac8b9fa.js",
    "revision": "567b26be3d9ec87c6e91c938eec3bc83"
  },
  {
    "url": "assets/js/63.c2400142.js",
    "revision": "fddbbfd98a999d7989e0296c01e44909"
  },
  {
    "url": "assets/js/64.adbc9a8b.js",
    "revision": "54085b33df31409276ac9e562bfb7f23"
  },
  {
    "url": "assets/js/65.e782c444.js",
    "revision": "5ad96db02f863d0baf892b36bacf6121"
  },
  {
    "url": "assets/js/66.ced92c93.js",
    "revision": "56932d7e6ac7afbb460e00e9f26053ef"
  },
  {
    "url": "assets/js/67.d724e40b.js",
    "revision": "00af8414105dc8b6e328ba5869244c88"
  },
  {
    "url": "assets/js/68.0c3fdabc.js",
    "revision": "b49bec7d6475b3d9983c4b7992d60cea"
  },
  {
    "url": "assets/js/7.867eb973.js",
    "revision": "e3b7231857d087daac91c136c2008789"
  },
  {
    "url": "assets/js/8.6e8d9a62.js",
    "revision": "f8a567f01983158cf4d18f9417e1c8ea"
  },
  {
    "url": "assets/js/9.e33676ee.js",
    "revision": "795056f522de6479677fb5a18f93de5a"
  },
  {
    "url": "assets/js/app.a3da91ab.js",
    "revision": "b53806c069f4e8e292456bc90de2dcda"
  },
  {
    "url": "header.png",
    "revision": "8eccd8d17445c421007cf96e6241fd8e"
  },
  {
    "url": "index.html",
    "revision": "79b8f223ce95be0005e4c51fc5614ce1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
