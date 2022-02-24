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
    "revision": "c01a586dbbe8b3b19a9de00377a3da85"
  },
  {
    "url": "about/算法/leecode.html",
    "revision": "b1185201e5564738e59985b961b0d1dd"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "6c1ee7dad5a65eb2165f62c2da588125"
  },
  {
    "url": "about/basics/跨域.html",
    "revision": "5543a92b418adf1ed471f834647cec6a"
  },
  {
    "url": "about/basics/垃圾回收机制.html",
    "revision": "01602c39ed916d2b3104d35f1c6813b3"
  },
  {
    "url": "about/basics/模块化.html",
    "revision": "e9a3f8eca9e55423296a459d9cca21ad"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "9872762840d2ebcd0fc2b32d46cdb567"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "1bc41e7459cc950a901c3a5fd67d1814"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "db1a32dc3ca1937889b0d8931fc42bbd"
  },
  {
    "url": "about/basics/算法.html",
    "revision": "8c943049264138a5f4257b30763ac5f5"
  },
  {
    "url": "about/basics/循环相关函数.html",
    "revision": "ac72c1c4bc9acf2f2a81ef5af0c610dc"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "f7a710ca441237cacd8bbedab4f6d5fd"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "4c1b523353a62df540f5078199ef7b26"
  },
  {
    "url": "about/basics/正则.html",
    "revision": "1e97389a91f0fdd460945c3091d42878"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "8e5e1690cb8ff8bbe60fd65c780fb134"
  },
  {
    "url": "about/basics/dsBridge.html",
    "revision": "3e04c3a677bcfca3bb691363e8d1881a"
  },
  {
    "url": "about/basics/generator.html",
    "revision": "8b23146a118e8af7a677a8ec8618c084"
  },
  {
    "url": "about/basics/map.html",
    "revision": "6910946ecfe626fbc0eb2733b09d730e"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "20283863caea10479e957a359f1c0f39"
  },
  {
    "url": "about/basics/Object.html",
    "revision": "824dbedb681b02a2e90643065421de82"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "7a6ef0e8f0f08f4d3ba797ecd08d5fc8"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "efa32a1cd39fec9b7ecf7fa122ae4e33"
  },
  {
    "url": "about/blockchain/truffle.html",
    "revision": "6fab15531ee77c7a6c5646ab9999d973"
  },
  {
    "url": "about/blockchain/web3.html",
    "revision": "af2e6ca2919addacbf0eebd9e322c48c"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "1c23505670c375a1e2ed8611ae28dcd2"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "afd118d5220376fee27f0ad4fd676e8d"
  },
  {
    "url": "about/css/盒子布局.html",
    "revision": "25c92c2a850d7852f7b0ada4313dcd69"
  },
  {
    "url": "about/css/盒子模型.html",
    "revision": "09feda9bdfd6593e80d681a5b7fb0e03"
  },
  {
    "url": "about/css/清除浮动的几种方式.html",
    "revision": "93ea6e218f2a9d6bd591f519952ae23b"
  },
  {
    "url": "about/css/BFC介绍和解决的问题.html",
    "revision": "cd8268a164f93990f2d58b611b8a1ca0"
  },
  {
    "url": "about/css/scss使用.html",
    "revision": "1bf6614f0a7e65d81038e087925e1af3"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "7cf4eb875199e9ea1a469f132b370892"
  },
  {
    "url": "about/http/HTTP基础知识.html",
    "revision": "f366192853223125900b36080fada35d"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "0578e61f0bfdb69edc1cca22ea475bcc"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "0f70a114c4b2aeb849e300500fc79eb0"
  },
  {
    "url": "about/nature/网页性能优化.html",
    "revision": "c3d6442a5258e8317ef4f76b7abf3000"
  },
  {
    "url": "about/nature/性能优化总结.html",
    "revision": "d2376f4e8d7fadbc45d84d4b0990a0e6"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "2be7cab40a152b4dfa264d2d8071d6cf"
  },
  {
    "url": "about/node/io.html",
    "revision": "43e2a7adb8c448b3edaa5a548b302c51"
  },
  {
    "url": "about/node/koa.html",
    "revision": "cab279047c53c40739a58192fce67094"
  },
  {
    "url": "about/project/微前端.html",
    "revision": "d5e3d4af640acb5f035065787b842831"
  },
  {
    "url": "about/project/项目总结.html",
    "revision": "d0041ee9fc1c06e520869bbf79018b5f"
  },
  {
    "url": "about/project/小程序架构设计.html",
    "revision": "8aed451b6280ed9ff3ea6add4441601f"
  },
  {
    "url": "about/project/性能监控.html",
    "revision": "f631fadae9960323b9ad66959a65c92d"
  },
  {
    "url": "about/question/移动端问题.html",
    "revision": "6eb3b568677d7965878bebfd41368dfa"
  },
  {
    "url": "about/question/js.html",
    "revision": "d1c09ce03784439c20ed57aaede00eff"
  },
  {
    "url": "about/question/vue.html",
    "revision": "00d8db258117700c962e92b670bc1fb3"
  },
  {
    "url": "about/react/react.html",
    "revision": "b2bf773ceb5c4444d7c372b99aea09ac"
  },
  {
    "url": "about/tools/mysql.html",
    "revision": "f71143ca013c3eb7bfc57f914179887f"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "68730ffd851a5f347b254e228835b1ce"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "4ed094f3f2bbe02ce41c20f5894dd66e"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "2e92f7143a90397cd49e4505d78df323"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "55fcb4a24fdc35899a985cfcc5cdadf4"
  },
  {
    "url": "about/vue/响应式系统.html",
    "revision": "b6026ce2f37a2d1546cf001f7428f110"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "ee99c61c1731c9e25ab9fc56a1baeabb"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "4c320bd1d6cb167c9673de1e10882228"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "192eaf157553dd0c4e52bb06384cd62a"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "5cd14388b2f6d492462bd31594062703"
  },
  {
    "url": "about/vue/newVue时候都做了什么.html",
    "revision": "1bafcd37a629c4331a7ba85868918e4f"
  },
  {
    "url": "about/vue/nextTick.html",
    "revision": "10dbc844361ecea1260d1553ce13a293"
  },
  {
    "url": "about/vue/render函数.html",
    "revision": "2b975841ad0a89eb8fb63be42e7ce754"
  },
  {
    "url": "about/vue/update.html",
    "revision": "5a44b669fae82ce740ca4485b124f3f7"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "fde7d3ca13dd604fdbd546e4244ad0d5"
  },
  {
    "url": "about/vue/vue实例挂载.html",
    "revision": "ab880466b8783d2807fd0b420d61c383"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "afc490e220fc1f80ee189fb47932e160"
  },
  {
    "url": "about/vue3/基本使用.html",
    "revision": "4b5ee1db8555f48520ae4af2346f51e6"
  },
  {
    "url": "about/vue3/响应式系统.html",
    "revision": "fbe92bdebfde4c87f290a013ec422982"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "9e5064b59f45aae2454a8b3f9d98cadc"
  },
  {
    "url": "assets/css/0.styles.ecb6249f.css",
    "revision": "bff37db0db34934638292d35e12934ad"
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
    "url": "assets/img/async01.7fa53d38.jpg",
    "revision": "7fa53d3894bf78655ebd136cf07a1bd3"
  },
  {
    "url": "assets/img/async02.6e8fc051.png",
    "revision": "6e8fc051cea138f3385ccf1c831dc2d5"
  },
  {
    "url": "assets/img/async03.ded13e59.png",
    "revision": "ded13e5989474d65a11fb81145ee30a4"
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
    "url": "assets/img/bridge01.1631ca20.png",
    "revision": "1631ca200464a58a612f9f97a6d9994e"
  },
  {
    "url": "assets/img/event-flow.916e26e9.png",
    "revision": "916e26e950169916e8230b9164d971d4"
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
    "url": "assets/img/weakmap001.d624b5d3.png",
    "revision": "d624b5d3d93157540fa6a5dffedaac06"
  },
  {
    "url": "assets/img/webpack001.10ed0878.png",
    "revision": "10ed0878284bededa6548e1d6a18af7e"
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
    "url": "assets/js/10.088ef20f.js",
    "revision": "80f050b0add0292915a8155b9e0f99f7"
  },
  {
    "url": "assets/js/11.3bac6f8e.js",
    "revision": "3380f4aa1e941445be49cbe2138d21da"
  },
  {
    "url": "assets/js/12.221fff59.js",
    "revision": "5ef9dd09714c678a3748e947f45c32aa"
  },
  {
    "url": "assets/js/13.dd5c371b.js",
    "revision": "3a2be9f5927a7ee24b43bfbf27286e5e"
  },
  {
    "url": "assets/js/14.51526484.js",
    "revision": "a3ed713c31223c7525165cc3868ec335"
  },
  {
    "url": "assets/js/15.0dab0a2d.js",
    "revision": "3e7cf9b47dcfcdbbdc1e0d40571216cc"
  },
  {
    "url": "assets/js/16.4ba78cd6.js",
    "revision": "bc5191f938c641aab6b68fd621d0a9c8"
  },
  {
    "url": "assets/js/17.caca738d.js",
    "revision": "07a6cb021d0927650e71743905a5654b"
  },
  {
    "url": "assets/js/18.1b3155e2.js",
    "revision": "156975696b870092e3d0eec94d1457fd"
  },
  {
    "url": "assets/js/19.0c2ab712.js",
    "revision": "47a590798d938de3e1d04b66e629d4c2"
  },
  {
    "url": "assets/js/2.ede9167f.js",
    "revision": "4f60fe05b765bb15325a99a3a65ac759"
  },
  {
    "url": "assets/js/20.d7a19d09.js",
    "revision": "e089218717195d04585c8a3a7e158aa6"
  },
  {
    "url": "assets/js/21.7ddeec68.js",
    "revision": "ec18091b40a44dc6615148f395a179b2"
  },
  {
    "url": "assets/js/22.329a974b.js",
    "revision": "ee2bc12015ada4e517f4961b03dbf362"
  },
  {
    "url": "assets/js/23.c1aa68e5.js",
    "revision": "ac5f307fec6f868c1dcf14e7ffeee112"
  },
  {
    "url": "assets/js/24.e5b7340a.js",
    "revision": "fb89c61dbc677d88d69fd118145fb7cd"
  },
  {
    "url": "assets/js/25.4891755d.js",
    "revision": "555e72ea2a51f6a246b4d7b3c6cf9c1c"
  },
  {
    "url": "assets/js/26.95f800c6.js",
    "revision": "5d91c453612d3d1066d2de47258759fe"
  },
  {
    "url": "assets/js/27.a0d03660.js",
    "revision": "0d9c06a0d0c362bb4ea5f623613e7575"
  },
  {
    "url": "assets/js/28.b95b674b.js",
    "revision": "a9eeef6f895fa064e28912eaece0860f"
  },
  {
    "url": "assets/js/29.e2040f4b.js",
    "revision": "33e1c32471b31340ab62601cac937358"
  },
  {
    "url": "assets/js/3.b81e3978.js",
    "revision": "66b3c97b2f2c1a2bc3d0441b8215a40c"
  },
  {
    "url": "assets/js/30.0852d43c.js",
    "revision": "167232d367f2e7a45c318c216c0c9833"
  },
  {
    "url": "assets/js/31.7ebcabb4.js",
    "revision": "bab0a023d56eb168ceeaa03eac686343"
  },
  {
    "url": "assets/js/32.5c62d61a.js",
    "revision": "5b161ae55d45d0e94fe99ecbe838a4b7"
  },
  {
    "url": "assets/js/33.c1e3cbff.js",
    "revision": "d5ce6cea3100945859f8e0fd08a66a3b"
  },
  {
    "url": "assets/js/34.f6b15412.js",
    "revision": "f3a65fe3464c7ff01d9bb9d4c1f1e9f3"
  },
  {
    "url": "assets/js/35.bf21929f.js",
    "revision": "93c084f6cd363feea52a9e16c8257559"
  },
  {
    "url": "assets/js/36.2c6c748b.js",
    "revision": "6b380b9249740943bb9e2fe0e6a34504"
  },
  {
    "url": "assets/js/37.8340962e.js",
    "revision": "f49e6634afa0fe9d5f8b1a3caf3daea1"
  },
  {
    "url": "assets/js/38.7c8287f7.js",
    "revision": "f5d9bf9095ac5b98d06126839f6fa4ad"
  },
  {
    "url": "assets/js/39.a06f057b.js",
    "revision": "ef53c82a640a16a6c6b34aced1842d5d"
  },
  {
    "url": "assets/js/4.c2cdb229.js",
    "revision": "6027e61614bc5b57a75e2cd0a9db9c1b"
  },
  {
    "url": "assets/js/40.a989e6f6.js",
    "revision": "4526e5a80f4bdef41315266b2b27b75e"
  },
  {
    "url": "assets/js/41.27ab8d03.js",
    "revision": "d71183f9ed822261245fdeeb40858c46"
  },
  {
    "url": "assets/js/42.552469c9.js",
    "revision": "68b312613809e14ddae9cef2a83d8f72"
  },
  {
    "url": "assets/js/43.6579aea8.js",
    "revision": "3b4aaec7b19bee4ee616149577bbc83b"
  },
  {
    "url": "assets/js/44.6cdb1030.js",
    "revision": "cbcaab023af53e2a38077ab0c46a3a48"
  },
  {
    "url": "assets/js/45.6bee8ae8.js",
    "revision": "1d6e183713e9c82e46cdf75e20c92f7d"
  },
  {
    "url": "assets/js/46.afd90e0a.js",
    "revision": "c6bcc927923df09b76aa3ff17d25f565"
  },
  {
    "url": "assets/js/47.ac98774f.js",
    "revision": "08ba676df434cac01bb6eb548b5b92f5"
  },
  {
    "url": "assets/js/48.853cb545.js",
    "revision": "5d459971a4d2e7d783f97c75b877c1a2"
  },
  {
    "url": "assets/js/49.5a645af2.js",
    "revision": "f794f1d2e7ce6a78ba406eeb4c65a04d"
  },
  {
    "url": "assets/js/5.a9146867.js",
    "revision": "2087d3b1ba5fc46703e8ee095d761dc5"
  },
  {
    "url": "assets/js/50.ad056ce8.js",
    "revision": "debd21df61dfaa6ca96d3e507dc056c2"
  },
  {
    "url": "assets/js/51.abbc52e4.js",
    "revision": "4461ba2e4c2e5b1339f25761af01a560"
  },
  {
    "url": "assets/js/52.287c3059.js",
    "revision": "aaf51733e8ccde60f5f9306d50e35fa0"
  },
  {
    "url": "assets/js/53.5688f550.js",
    "revision": "dc98e900b4dd61b96aa69eb630a52fec"
  },
  {
    "url": "assets/js/54.629e047f.js",
    "revision": "4bcdaf5d59f21bc349516f80e017221e"
  },
  {
    "url": "assets/js/55.fd6ef8a5.js",
    "revision": "1ba02147d6f3342301df7fa91bc1a142"
  },
  {
    "url": "assets/js/56.2eb95bbb.js",
    "revision": "1c9787a9729bdb3100de9121f08ec8a2"
  },
  {
    "url": "assets/js/57.eb600326.js",
    "revision": "14de4784dc9d9b666e550aab1d27a009"
  },
  {
    "url": "assets/js/58.0546ee97.js",
    "revision": "b6f2599b9c3d45a1e95a8291cd494820"
  },
  {
    "url": "assets/js/59.2d89a9ac.js",
    "revision": "84a62774b4c23883aa12937f93cc28aa"
  },
  {
    "url": "assets/js/6.fbe42010.js",
    "revision": "2ac7769c4f1c5aa2dc4f7f60be741a3b"
  },
  {
    "url": "assets/js/60.ed2ff576.js",
    "revision": "060c186c528b76b77cf535fb931c0858"
  },
  {
    "url": "assets/js/61.51d6f997.js",
    "revision": "08afc4f743ac3aca511d87ffb4561a49"
  },
  {
    "url": "assets/js/62.cdfff70b.js",
    "revision": "0068bd14b8767bb75037a3a1eff09209"
  },
  {
    "url": "assets/js/63.04585a3e.js",
    "revision": "4d578e81f13d6c9f0b8375192965bf86"
  },
  {
    "url": "assets/js/64.b57e79ed.js",
    "revision": "57b5d19ece32fce07825ec152189bb94"
  },
  {
    "url": "assets/js/65.5ec6eb6c.js",
    "revision": "b58dd62690e68a80076c4826a67eba01"
  },
  {
    "url": "assets/js/66.a0a3a97b.js",
    "revision": "f016c7d077e976af196e59bf198b2f95"
  },
  {
    "url": "assets/js/67.c4e14dd8.js",
    "revision": "50b9fbca4564b4bff908e90641141e80"
  },
  {
    "url": "assets/js/68.563fb76f.js",
    "revision": "6ae0063dee2a9513c5663f456fff0cad"
  },
  {
    "url": "assets/js/69.164f4f71.js",
    "revision": "c88b0154666feecb444bf001b68e0ed2"
  },
  {
    "url": "assets/js/7.90c1d1e7.js",
    "revision": "35a14459678e108abc303e7d773dd1c8"
  },
  {
    "url": "assets/js/70.8fbe8266.js",
    "revision": "b0f00e81a207870267e8c02459e5190a"
  },
  {
    "url": "assets/js/71.800bc6c1.js",
    "revision": "8f0351e892d0164c1c296cefb0fc9ad9"
  },
  {
    "url": "assets/js/72.161704e9.js",
    "revision": "5e220bb8527877d22ef8f5f34ac62b2c"
  },
  {
    "url": "assets/js/73.c7b3dbf4.js",
    "revision": "1593ef09356c7f13f0472b14fac7cd39"
  },
  {
    "url": "assets/js/74.860d8084.js",
    "revision": "0153f6bc6b89d5d21f6235b4311bd9a7"
  },
  {
    "url": "assets/js/75.851826de.js",
    "revision": "f46acfb087c3754e216236b75a145ca1"
  },
  {
    "url": "assets/js/76.e820db12.js",
    "revision": "f5c78d989eea9d4704c512cffc66c1ba"
  },
  {
    "url": "assets/js/8.02f0d406.js",
    "revision": "de44ff6d07f249a49b7d0179e07def62"
  },
  {
    "url": "assets/js/9.9b94623b.js",
    "revision": "0c1fd3e33ad7b202e738e33cfe6538b5"
  },
  {
    "url": "assets/js/app.3dbae076.js",
    "revision": "56ac416b3e9d4cb454f80f0d22b1b664"
  },
  {
    "url": "header.png",
    "revision": "8eccd8d17445c421007cf96e6241fd8e"
  },
  {
    "url": "index.html",
    "revision": "85c3822cee13096d9fb7cc241c771555"
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
