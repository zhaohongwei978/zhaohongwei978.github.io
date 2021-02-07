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
    "revision": "77ce50784d991cf3c3a8d7aa71780967"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "a6c2f1770f011e65e2fb50bd62457e36"
  },
  {
    "url": "about/basics/dsBridge.html",
    "revision": "d34227b889b83ae844cb5c529312fcdc"
  },
  {
    "url": "about/basics/generator.html",
    "revision": "a3f2cd3b0cc5d17ad299fa82824b93ed"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "509130405a2df731bdd125d33c13ef10"
  },
  {
    "url": "about/basics/Object.html",
    "revision": "199ca0884e2d4e54338773d52f5e0752"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "cfb984dae59f348ecb1fa2f07744db46"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "8593e0e88bef33d1cb8f60bab9193c22"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "a4516e362e3378987b870aea49b8451e"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "79e7a5c219223046fb079a224741d7e3"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "ced8b37f44346f592ec11a22490817e4"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "32ef239211061c7b41ed8c5abce9c9ad"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "460c09d3e8b4d156883291454fd1e20f"
  },
  {
    "url": "about/basics/跨域.html",
    "revision": "9db858292c8b4a2398390f748cf4491b"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "dfb1e27a5c857c409e4c0670bb852eef"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "b025e5834f21a0df60e02f952ed57e0d"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "486168d4a3fb8e9cdaf8f381973420a5"
  },
  {
    "url": "about/css/BFC介绍和解决的问题.html",
    "revision": "c66809890c076c7448126f40ffa02539"
  },
  {
    "url": "about/css/scss使用.html",
    "revision": "87ef3963085ca52be9487c42786a56b0"
  },
  {
    "url": "about/css/清除浮动的几种方式.html",
    "revision": "1f6ed760a93aa55f233eb8f8d95b465f"
  },
  {
    "url": "about/css/盒子布局.html",
    "revision": "4fd2a8fdd397256c099f2fb2c2cdb3dd"
  },
  {
    "url": "about/css/盒子模型.html",
    "revision": "adde775d45fb1ebbc2df674c1d48497f"
  },
  {
    "url": "about/http/HTTP基础知识.html",
    "revision": "91d07efb002637ff9302e576723955ae"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "b4b1179b030c46468ddde83dd89b498b"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "20a42b274fda3b2038527cb9380032fc"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "310629b2e0bdb0b4d3b1ebe2de728884"
  },
  {
    "url": "about/nature/性能优化总结.html",
    "revision": "ebfd51873e9090fc22a3afb323b173ad"
  },
  {
    "url": "about/nature/网页性能优化.html",
    "revision": "6b508287bea54b0def58b3a7bc7d107b"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "3ed3a12883a79f566a500b3080d359bb"
  },
  {
    "url": "about/project/小程序架构设计.html",
    "revision": "d4ab29c577f1f73e0dd36f0b777ce435"
  },
  {
    "url": "about/project/微前端.html",
    "revision": "3c19473cba6e11a0bb1c5bdfada7e448"
  },
  {
    "url": "about/project/项目总结.html",
    "revision": "dcff567746c037ed8edea2bcfc4dc86c"
  },
  {
    "url": "about/question/js.html",
    "revision": "46d371b34ca3fbc44cbd84b3b6bb31fb"
  },
  {
    "url": "about/question/vue.html",
    "revision": "d2b2485c7819b64617f346968d4e6e5d"
  },
  {
    "url": "about/question/移动端问题.html",
    "revision": "abb5c2a682c882f3ca29cca51d3f50ed"
  },
  {
    "url": "about/react/react.html",
    "revision": "b334b991f9099e58c6d9ec21c6753581"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "c1e67e4063eb75dfa4f80eadffc73c98"
  },
  {
    "url": "about/vue/newVue时候都做了什么.html",
    "revision": "e1e430c00a655fac9b1a5f9e935c5320"
  },
  {
    "url": "about/vue/nextTick.html",
    "revision": "b3058ab9cdaa4bddb909ff6ae09ddbfe"
  },
  {
    "url": "about/vue/render函数.html",
    "revision": "37c0e0db6a059659f444e77a656dafc3"
  },
  {
    "url": "about/vue/update.html",
    "revision": "57f8cfb7ebaf11bf573e7d9b86709d68"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "ba0756f242422b2248e4ede98460933e"
  },
  {
    "url": "about/vue/vue实例挂载.html",
    "revision": "e482d168558604c67a6362b819989df7"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "0563901fc5246a35fdc0bc444a626fa5"
  },
  {
    "url": "about/vue/响应式observe.html",
    "revision": "98f484ef440c937487da5b4e5a2197a9"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "c91cc4b5d15a78b6b7da7ddf27c50371"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "4a3d4366683562fee4399c65999d8067"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "69b9b01ac345d930986344aa9abc82a3"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "b226ec07779b42c82002099cd7345ee9"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "dd6441f75835dcb0996c0c48ed62436d"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "7c02789e3b3c58658a0dd6c120e720ea"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "816eaa781dc39a73d9045d87e818826d"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "587eb0fcbe9f24609ff21d1a401b74be"
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
    "url": "assets/js/10.e83558ce.js",
    "revision": "1adab0b992b62a0fedffdb18cfb5e60d"
  },
  {
    "url": "assets/js/11.08271d19.js",
    "revision": "9c3ab0728b6982e8bd5c69029da0d7bf"
  },
  {
    "url": "assets/js/12.8dc3c54c.js",
    "revision": "d4dd1d21a0f751745f222fe36cb7a26b"
  },
  {
    "url": "assets/js/13.2d67219d.js",
    "revision": "d613206886d6cb18868ba2b314d791d9"
  },
  {
    "url": "assets/js/14.7b7c0423.js",
    "revision": "01a8ffd092ebabf2d607c5a40f120d76"
  },
  {
    "url": "assets/js/15.e8d5a192.js",
    "revision": "a49b1378af033831329e9ef3ff29709b"
  },
  {
    "url": "assets/js/16.b1e150ee.js",
    "revision": "8362cd1a010b7da743d2bc931c3fbc62"
  },
  {
    "url": "assets/js/17.b0c1df6b.js",
    "revision": "d61469ee3b795ee337eea8408f392255"
  },
  {
    "url": "assets/js/18.7d746e4b.js",
    "revision": "026260513e935c5851eb62a749c8017f"
  },
  {
    "url": "assets/js/19.da7d2015.js",
    "revision": "8a2189b777df4b7ed4ec703706805e0f"
  },
  {
    "url": "assets/js/2.efaf6d33.js",
    "revision": "006c4960108a0510b073daa3b72b866f"
  },
  {
    "url": "assets/js/20.7512212a.js",
    "revision": "8046c4152b19d02eb3b4adfbf5f1ec90"
  },
  {
    "url": "assets/js/21.61791bcc.js",
    "revision": "56a52958ec242165f7332a7fcb6ac967"
  },
  {
    "url": "assets/js/22.d6642ae9.js",
    "revision": "c1b5ed1da7abcbcbdbce0f233c148891"
  },
  {
    "url": "assets/js/23.c65c3531.js",
    "revision": "1b2edc03a3e719ca7acf200814ea852d"
  },
  {
    "url": "assets/js/24.35d9911a.js",
    "revision": "43885504d2f717839f2a59b7c6f3fadc"
  },
  {
    "url": "assets/js/25.aaa5055f.js",
    "revision": "335bdeb2d2d853bd6d3f2dbad110c251"
  },
  {
    "url": "assets/js/26.20ccb71b.js",
    "revision": "5d1ba87db7ada0e17bb74e493491fbad"
  },
  {
    "url": "assets/js/27.e272cce1.js",
    "revision": "b5d348acce5fd314bfb7c1ca8ab278bf"
  },
  {
    "url": "assets/js/28.4ff9d4b5.js",
    "revision": "b3a0765ef925f5a4b029e93e7ce39514"
  },
  {
    "url": "assets/js/29.eda09df2.js",
    "revision": "2946e2348c77fe6f65d2061de5708fbe"
  },
  {
    "url": "assets/js/3.d02e2410.js",
    "revision": "5671b95afd1c4d3560c97846301352da"
  },
  {
    "url": "assets/js/30.7bf391b8.js",
    "revision": "94864de84065df76d8ba895daaf27408"
  },
  {
    "url": "assets/js/31.f0a2073f.js",
    "revision": "bed6d4516b081768ec087a13c54491bb"
  },
  {
    "url": "assets/js/32.00ccba44.js",
    "revision": "63eff2b401b2b9c69507a02c8b72c533"
  },
  {
    "url": "assets/js/33.313db342.js",
    "revision": "1f536606e32a74c0621c49d32ddca925"
  },
  {
    "url": "assets/js/34.cb06ffa2.js",
    "revision": "ff8e4b61ac9da423124b2b28e8b090f4"
  },
  {
    "url": "assets/js/35.8815dcac.js",
    "revision": "a57346e645371e5418f4c459ef3e8dcc"
  },
  {
    "url": "assets/js/36.510b71ef.js",
    "revision": "635d5269c36ea15e2ec4cd924dbd7251"
  },
  {
    "url": "assets/js/37.a6c4409d.js",
    "revision": "0a7bb20750a3965a3efbddebab82ac85"
  },
  {
    "url": "assets/js/38.df1b64aa.js",
    "revision": "449862928e5194474bbd2b2d6914d394"
  },
  {
    "url": "assets/js/39.1a4cb6f2.js",
    "revision": "27a5eb9940f567a53cf54f1edd8ad795"
  },
  {
    "url": "assets/js/4.9572866f.js",
    "revision": "f38545d55bf75c50b482e9ea8a1fccc6"
  },
  {
    "url": "assets/js/40.4c073969.js",
    "revision": "1eef2182337672b82ddc6b549d73eee3"
  },
  {
    "url": "assets/js/41.0974281d.js",
    "revision": "12c9795f82ea83ef4a33135f197c77c6"
  },
  {
    "url": "assets/js/42.ea339877.js",
    "revision": "8ffb29238af53fbdd9755c541840af38"
  },
  {
    "url": "assets/js/43.95da82de.js",
    "revision": "bf6f87fc3c32b1006e0fb903639e2f61"
  },
  {
    "url": "assets/js/44.630cac1f.js",
    "revision": "9593f25fbb2f503f2704dda7e3628198"
  },
  {
    "url": "assets/js/45.9c6fecd6.js",
    "revision": "a731c5320c4835480037f8fada8007a1"
  },
  {
    "url": "assets/js/46.8b6b51b1.js",
    "revision": "d5a68b0221ee82ecb5f4ea36735feb37"
  },
  {
    "url": "assets/js/47.ff005780.js",
    "revision": "27d4660f9df8e367e1f73f57a2fdaa23"
  },
  {
    "url": "assets/js/48.824be7f2.js",
    "revision": "358d5c686e24cd3d852836b748ac1df5"
  },
  {
    "url": "assets/js/49.1a29be49.js",
    "revision": "2c97d292c7cc9e362039ab289f59a39c"
  },
  {
    "url": "assets/js/5.822c1d74.js",
    "revision": "f66e37ce48b82296225daa97ccdeed49"
  },
  {
    "url": "assets/js/50.696cb0fc.js",
    "revision": "2a901725c695d1ad68b1336f86d3e700"
  },
  {
    "url": "assets/js/51.c79392a2.js",
    "revision": "386d258f6d54d731f9d94c7798b2077f"
  },
  {
    "url": "assets/js/52.53dfedce.js",
    "revision": "bba399caa7d12d76f247b97316a801a9"
  },
  {
    "url": "assets/js/53.43fd9931.js",
    "revision": "803b762779691a1d232c3ffb55e14164"
  },
  {
    "url": "assets/js/54.50637ee9.js",
    "revision": "ea70c38efea04b5a077b98eda6458bb0"
  },
  {
    "url": "assets/js/55.3447ec10.js",
    "revision": "409027d3d032250fbb8fb5ae0d29ba75"
  },
  {
    "url": "assets/js/56.ea561059.js",
    "revision": "2f4eaa46a4f257fe157e0e985d5624ac"
  },
  {
    "url": "assets/js/57.bf65e5a8.js",
    "revision": "d6bfcd12333214fff2380b13c0520992"
  },
  {
    "url": "assets/js/58.b20a2c74.js",
    "revision": "6eecfb90a5a5ac808b9c3b4ed07baaf9"
  },
  {
    "url": "assets/js/59.d9983e79.js",
    "revision": "fe469980427190b25574036b6af53beb"
  },
  {
    "url": "assets/js/6.47db2be8.js",
    "revision": "bf574a5716fdd320c53b99aaed9a7cb2"
  },
  {
    "url": "assets/js/60.c0b547c1.js",
    "revision": "85e762eb3f6785556097360a8f7104a0"
  },
  {
    "url": "assets/js/61.6f6436af.js",
    "revision": "41a88bd2244e5f1f5d2dea43e9c5896b"
  },
  {
    "url": "assets/js/7.e4935df1.js",
    "revision": "2362e73075f1fdb020130a592765e575"
  },
  {
    "url": "assets/js/8.9d57c77e.js",
    "revision": "2751a9ba61ac208205421bca5d13da92"
  },
  {
    "url": "assets/js/9.a2dbc8ae.js",
    "revision": "ca6668bce3bc99eba4a39b93dc3af689"
  },
  {
    "url": "assets/js/app.274e6c83.js",
    "revision": "7bba0b3e31824fe81df35b5e606790b5"
  },
  {
    "url": "header.png",
    "revision": "8eccd8d17445c421007cf96e6241fd8e"
  },
  {
    "url": "index.html",
    "revision": "82c680a2c53163b797e111650c41139c"
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
