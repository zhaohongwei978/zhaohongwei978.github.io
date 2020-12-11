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
    "revision": "94c095de236635655da5bf0cf4d3e2f7"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "fe2c9d80287b2f99ca2cda2f983dd6e3"
  },
  {
    "url": "about/basics/generator.html",
    "revision": "41c58e0e3a25a018c69c85af6b9e2356"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "df89613da1eded764d4641681e789cf0"
  },
  {
    "url": "about/basics/Object.html",
    "revision": "51e1c728421bb02d805c9bd4b393415c"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "1a155bd74de9eb2c1f1fb45bed114a79"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "327814db45097d13731803282f054cd8"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "e79f583b14dd5c3f60a73e6d8d426898"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "a6a085c503d80ebb2bd4493505018415"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "39702387d57c2225d0a97143ea364097"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "68d98e6caa9ebbde8ed371a051777e41"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "332bd8dcc56c51b484310b839cdb9242"
  },
  {
    "url": "about/basics/跨域.html",
    "revision": "bf84f48942e3d727d43200e890c73459"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "ab792866f6abc8b430e24393a74fc450"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "8c890ec7fa905e5e49035931e5cefdd9"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "09807b12fad7d57bc19ef1915a26684b"
  },
  {
    "url": "about/css/BFC介绍和解决的问题.html",
    "revision": "bbab1b69c6745ba311a4639eab9f14df"
  },
  {
    "url": "about/css/清除浮动的几种方式.html",
    "revision": "dd2ede0640a8be2842428c0d111fe9d7"
  },
  {
    "url": "about/css/盒子模型.html",
    "revision": "49051cb3cceff292844d69968201cc7e"
  },
  {
    "url": "about/http/HTTP基础知识.html",
    "revision": "f67b2ac2b6811cf3a2ff3e4ab49ed1e6"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "6538d03968605fedbbe1102c7e350394"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "6a3f3c61924574dc44f0f319538092c2"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "80f017d93849606575891a56f6f14ed3"
  },
  {
    "url": "about/nature/性能优化总结.html",
    "revision": "0fa9dc5859b355c4a4f1a36d8d320118"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "3ad959c776da354b6f949d00c062fc36"
  },
  {
    "url": "about/project/小程序架构设计.html",
    "revision": "587c0d513be693b9a4f11633a0c7b359"
  },
  {
    "url": "about/project/微前端.html",
    "revision": "998a1a348b7659e6f2987e9383669f24"
  },
  {
    "url": "about/project/项目总结.html",
    "revision": "be352befe557459026f25e1640b97648"
  },
  {
    "url": "about/question/js.html",
    "revision": "a76a4f28bb02b3074b92cc84be62f2b9"
  },
  {
    "url": "about/question/vue.html",
    "revision": "883be7b6e6ce95ae71ffb573cd9c3f1d"
  },
  {
    "url": "about/question/移动端问题.html",
    "revision": "cad20b897041bd6ec6c54b03cd6a5ed9"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "c153cd280e6a48d2c58a17ca1b8fef94"
  },
  {
    "url": "about/vue/newVue时候都做了什么.html",
    "revision": "4f7ab49b394aa92deccd0e1238de7ba6"
  },
  {
    "url": "about/vue/nextTick.html",
    "revision": "e621b4aaf8a143e0c97387f9f3357a34"
  },
  {
    "url": "about/vue/render函数.html",
    "revision": "27eb78d8a4916b8685a0a998dfd80a68"
  },
  {
    "url": "about/vue/update.html",
    "revision": "fc481c07caab32f53a9267f1d68f733d"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "391abde0bd36611947d61b014f9847c4"
  },
  {
    "url": "about/vue/vue实例挂载.html",
    "revision": "e5e7bf3dc68679fe4d61209b12c4ced5"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "857c3707486502734aa046b1e4031127"
  },
  {
    "url": "about/vue/响应式observe.html",
    "revision": "1c68354d7449bfe869bead19ce4a2610"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "b38889ad0d4f454fc0444158f65ca828"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "db8f538527a58809814c170afa56bbc5"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "15fbb31d2181df7244ac55b5f707fa74"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "d9b6efcdaff8d31417d5f26c08cb06bb"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "c5cbfcc48ce46dd744f9bbeb93b3bc9e"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "e4dad4b0c10053c45866a03cc3a1e04e"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "cccfa606d92cbfe23b27c7cc072e8338"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "b5d8eee9ae18c52293af77f306750540"
  },
  {
    "url": "assets/css/0.styles.2d08b339.css",
    "revision": "4941e12390d00b84dd0a4061b457a079"
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
    "url": "assets/js/10.a1de5127.js",
    "revision": "9d6efdee1101af6cd16f46dcd81630dc"
  },
  {
    "url": "assets/js/11.d0365faf.js",
    "revision": "39b9b14e31ce3c0d95e50440eee41a13"
  },
  {
    "url": "assets/js/12.cd408545.js",
    "revision": "8300d7c45503da85207416a376a7ce08"
  },
  {
    "url": "assets/js/13.ff21be63.js",
    "revision": "e9fe525ba303af23f96b5fdc006a0533"
  },
  {
    "url": "assets/js/14.d9a8ea5b.js",
    "revision": "f10984327e260854dc62ec7291ab24d3"
  },
  {
    "url": "assets/js/15.0cb62e5d.js",
    "revision": "a6f5236e35eeac42ad45626141b99ac4"
  },
  {
    "url": "assets/js/16.d642a2b5.js",
    "revision": "115f745cf48384663711011e83b776f0"
  },
  {
    "url": "assets/js/17.07e39d03.js",
    "revision": "d822d81574b419513dcb9d409420f098"
  },
  {
    "url": "assets/js/18.f4b62b7f.js",
    "revision": "c5b52d441b982e3ae42064b2ea619e1d"
  },
  {
    "url": "assets/js/19.45bc37b1.js",
    "revision": "808c97207912c6339ea2b4b387fc3985"
  },
  {
    "url": "assets/js/2.deebf64a.js",
    "revision": "0975b104d2ac37e1a5df0ae5a1e80e30"
  },
  {
    "url": "assets/js/20.8139ce73.js",
    "revision": "6bd808bd07c1918929f68b10cd3f0c10"
  },
  {
    "url": "assets/js/21.c9b094d8.js",
    "revision": "c40e6cba1253fa8ecf5582aec476a3f8"
  },
  {
    "url": "assets/js/22.2ca2a2d7.js",
    "revision": "16f44af43ebdc7267aaa48f3b4a6faa1"
  },
  {
    "url": "assets/js/23.7f00aaa0.js",
    "revision": "ce66e1017140b33f668dcf7e7de4debc"
  },
  {
    "url": "assets/js/24.9626e370.js",
    "revision": "d7c1e9b9cf1c4fef3092593901bb4478"
  },
  {
    "url": "assets/js/25.495bcb90.js",
    "revision": "859de59f0b59ed75daa55a21341a1484"
  },
  {
    "url": "assets/js/26.7676481b.js",
    "revision": "7f3f1116cb24b22f46454685f449058f"
  },
  {
    "url": "assets/js/27.d35673ff.js",
    "revision": "6d7b56da3a8fe381d3ac9e24f28e2551"
  },
  {
    "url": "assets/js/28.9d7a9107.js",
    "revision": "72ecf15554ffd3845285d9faaadb27f9"
  },
  {
    "url": "assets/js/29.578ac787.js",
    "revision": "991232a5e6d045287d7b74aeb5903123"
  },
  {
    "url": "assets/js/3.29ae1d03.js",
    "revision": "ec9a05ae5e9a742af8d4dc299ca55624"
  },
  {
    "url": "assets/js/30.081eff89.js",
    "revision": "12710227b54860948d083179572c4b4f"
  },
  {
    "url": "assets/js/31.7d449737.js",
    "revision": "a2d5cb07b8fa0d80879f5dbffc989779"
  },
  {
    "url": "assets/js/32.89d86380.js",
    "revision": "e07991a7ae9c5b260e8ad9b5b98f8f40"
  },
  {
    "url": "assets/js/33.c9d55740.js",
    "revision": "a73870c4652a5b1ceb43211d580cd7ea"
  },
  {
    "url": "assets/js/34.1a6af897.js",
    "revision": "696cf527ca2fed844241744ed343e975"
  },
  {
    "url": "assets/js/35.f22797fe.js",
    "revision": "e0792db8f121d6ea7bc47d1bfbbce028"
  },
  {
    "url": "assets/js/36.3620f0b7.js",
    "revision": "ad14e5462abc265dbf7c4043c0d68f3a"
  },
  {
    "url": "assets/js/37.aecf22c7.js",
    "revision": "be31a1be8c41707a811387c103675437"
  },
  {
    "url": "assets/js/38.097c8630.js",
    "revision": "640f66aef643b882bcc47b591df0b598"
  },
  {
    "url": "assets/js/39.e8768ac0.js",
    "revision": "f9cbc39c4068a21e836e7234f93f5e85"
  },
  {
    "url": "assets/js/4.cdbae402.js",
    "revision": "bf9764377046c7bdddda3236f4c34c1b"
  },
  {
    "url": "assets/js/40.aa16c0ac.js",
    "revision": "eb1f6ed5b2cfc0c69438edf546cc173b"
  },
  {
    "url": "assets/js/41.d3155969.js",
    "revision": "ef94569c3a17f28b8301fa73838d08a3"
  },
  {
    "url": "assets/js/42.6f83f52c.js",
    "revision": "1b88c986ff60e1b36154e49427e4c6d7"
  },
  {
    "url": "assets/js/43.4972db99.js",
    "revision": "163e0033aed0d90b383b227abac64564"
  },
  {
    "url": "assets/js/44.cd17dfe8.js",
    "revision": "f61097c1ccae412210433246efc3539c"
  },
  {
    "url": "assets/js/45.046fbdf8.js",
    "revision": "de71725e15c3852dfdedd3b8961c6765"
  },
  {
    "url": "assets/js/46.bb85f71c.js",
    "revision": "81dd8900322a7b8bf4e95b7b47f02b42"
  },
  {
    "url": "assets/js/47.56d963b1.js",
    "revision": "862b6cd7ba9028c9cf6eaa1d246c86c2"
  },
  {
    "url": "assets/js/48.6a963063.js",
    "revision": "21be0f9a0eb1e77710247e9b3c272170"
  },
  {
    "url": "assets/js/49.ddfcb0f7.js",
    "revision": "5ae6253258a6de8f782f28448aab932b"
  },
  {
    "url": "assets/js/5.e38e9f60.js",
    "revision": "9a39e532e09b8f59b74fae4d2572c91e"
  },
  {
    "url": "assets/js/50.15b54446.js",
    "revision": "c90f15074ee636a6b876664702ea21bc"
  },
  {
    "url": "assets/js/51.4e0b5a6d.js",
    "revision": "58079b0f30ac5e4ca2bc28c801107b66"
  },
  {
    "url": "assets/js/52.eefd70c8.js",
    "revision": "85c70040dc35201ec1884cd0bf75165e"
  },
  {
    "url": "assets/js/53.76c0696e.js",
    "revision": "4f599989bdc7081888306c43082603df"
  },
  {
    "url": "assets/js/54.ef87f7f0.js",
    "revision": "96ef7834b706a092a0016d16077ea4d7"
  },
  {
    "url": "assets/js/6.2e11e2f5.js",
    "revision": "6f4d88343b6769007d935a034dd059b1"
  },
  {
    "url": "assets/js/7.ede321c2.js",
    "revision": "30db18d89d7b87ffbbe80d337b1363ee"
  },
  {
    "url": "assets/js/8.ad201a49.js",
    "revision": "0c1028612f37c06780b359399a1b8fa5"
  },
  {
    "url": "assets/js/9.be29c9f8.js",
    "revision": "0c5e7e60c6badc683000950489d10cca"
  },
  {
    "url": "assets/js/app.57c53105.js",
    "revision": "6642885fff2d53f0db81ce0208f86ad9"
  },
  {
    "url": "header.png",
    "revision": "8eccd8d17445c421007cf96e6241fd8e"
  },
  {
    "url": "index.html",
    "revision": "2a5c779881963c94bba3523d6a3b0d81"
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
