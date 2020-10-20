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
    "revision": "e965042c8834f93c29e4cdb33480435b"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "e164999db25fdcf942ae4c51f3f9f981"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "9cc598c5461f15a9cd21c5c595c363af"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "80c4dc64a6c6e05235ef708d12aae72e"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "d60016d4054eb273869175d8540a693d"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "5ca622910bedb5ac1e0425652d7e0b28"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "c166f7afbd4a6ebbd6cb0ab5e75199c3"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "e8091cf2b4ef063d4a873f7114c52287"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "10c4ecec0f5c218612e7fef5781bb88d"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "4f7644ed4b5ce3dc3bb4111d85efd617"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "347df648f632f1f2f33bea9c512f54a2"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "0612017e66b903e5341212ae22465935"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "c7e34d04d3d8f345651b827f878d44d3"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "be1cfceb5df96610c6871a93a59074c6"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "b201a27cba94cd6df5a579df2182bd01"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "1090142f94950a6a408c727ee032089f"
  },
  {
    "url": "about/nature/性能优化总结.html",
    "revision": "b94769a7bd05d9eddc385208c1adab90"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "a098941a149c4e25756f3d97c2baca91"
  },
  {
    "url": "about/question/js.html",
    "revision": "dc8b1932fb5182520cbc2db34b8ad44e"
  },
  {
    "url": "about/question/vue.html",
    "revision": "4bc715f2398997ca81bb0e118f1e89b9"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "1374933adbbe4f16d36b3110deb1ffd4"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "7c10be499b119394e7e43c8afb1640a3"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "47f96c46a7a1b843fe8194750bba85fc"
  },
  {
    "url": "about/vue/响应式observe.html",
    "revision": "6a0df3fab2f0530e453a010e4398af27"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "8883119fbb5b1d632c76007bb8320cbb"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "90d024d373671df629e75622019acf61"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "d5c44b7d1621c1f6dfa2e8f0a54bb48c"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "4af74a75b9564b2b748eea56202d9d75"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "6273e4f10cde59dc0bd4fa0591ce7d25"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "8aa19565f86339587f09c28a4632bb32"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "bb7095a697b6a274f14a4904906b9a9d"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "e39f5e939d3a7656010bc7e7fdf6f54d"
  },
  {
    "url": "assets/css/0.styles.2d08b339.css",
    "revision": "4941e12390d00b84dd0a4061b457a079"
  },
  {
    "url": "assets/img/1599408879599.efe5515c.jpg",
    "revision": "efe5515cddcadb63ec5fa471359aa3d0"
  },
  {
    "url": "assets/img/http_huancun.9b9d8560.jpg",
    "revision": "9b9d85605da9b241bf793d87de05cae8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
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
    "url": "assets/js/10.6eff9474.js",
    "revision": "f72b0c64611499ebfeb243cee1e4de87"
  },
  {
    "url": "assets/js/11.dc8c6756.js",
    "revision": "32d8d9f95462c3adf77b4015f3b35a72"
  },
  {
    "url": "assets/js/12.3b2aaaac.js",
    "revision": "461e657d266b4da5961c6d3d64c728bb"
  },
  {
    "url": "assets/js/13.4dd242b4.js",
    "revision": "485d9d07509d473d41215744428b6fd0"
  },
  {
    "url": "assets/js/14.a51c396b.js",
    "revision": "b8331d97493e2c9e48e70bcbd5dd3f6a"
  },
  {
    "url": "assets/js/15.b10e2974.js",
    "revision": "10eded1974c2e06d6a8db0fef9a26100"
  },
  {
    "url": "assets/js/16.b0a2874c.js",
    "revision": "9b8841181cff14bc09f9d5a26a3fbb94"
  },
  {
    "url": "assets/js/17.20721b56.js",
    "revision": "7e29525d85b1779cb22b289d7d76a118"
  },
  {
    "url": "assets/js/18.1f8bb2b2.js",
    "revision": "a632f7833f2de0e363614b6798a9282b"
  },
  {
    "url": "assets/js/19.6cfafe40.js",
    "revision": "658fe99293002ebaa228de1e125bd6b1"
  },
  {
    "url": "assets/js/2.32ad2a78.js",
    "revision": "fa4da8518727456f69d180e1d6019d5a"
  },
  {
    "url": "assets/js/20.a6951a7e.js",
    "revision": "bf36b4cdc62e07fbb6bfac52e4bbee26"
  },
  {
    "url": "assets/js/21.40430b4f.js",
    "revision": "1dc9285d2132d9d097d2dc9a290a6cde"
  },
  {
    "url": "assets/js/22.94be6a68.js",
    "revision": "f650fd048076abd5f659c6c60775aafb"
  },
  {
    "url": "assets/js/23.734df373.js",
    "revision": "79e3208846f429766d4ddaf943973f3e"
  },
  {
    "url": "assets/js/24.5e5c3f65.js",
    "revision": "ac22b965ca3c1bde22ae6e4247626bb0"
  },
  {
    "url": "assets/js/25.3be1edb0.js",
    "revision": "5d793e75385796c0599ff54c9a16ea7b"
  },
  {
    "url": "assets/js/26.f6d58092.js",
    "revision": "80368881a938b3d80446c365edbdd887"
  },
  {
    "url": "assets/js/27.b0420917.js",
    "revision": "52b30a2ae23753dfb92dc669e0bd5851"
  },
  {
    "url": "assets/js/28.7c5f0d8b.js",
    "revision": "862f1d205cf88332ef307f0a331950af"
  },
  {
    "url": "assets/js/29.81d74471.js",
    "revision": "61809be1104d8c7587f11ffbf84726db"
  },
  {
    "url": "assets/js/3.6781ba49.js",
    "revision": "dcf8ff847ddfd505d12251a4c5a738ea"
  },
  {
    "url": "assets/js/30.30a61cfe.js",
    "revision": "8824a2350ee91d2bd24c82e3263640cc"
  },
  {
    "url": "assets/js/31.fbdb4c47.js",
    "revision": "05e42b5e88419a27cc891b18545d6a7d"
  },
  {
    "url": "assets/js/32.43c8d5cb.js",
    "revision": "662dd47ab7d2d5d5002c3dea9c023ff1"
  },
  {
    "url": "assets/js/33.db58c7f7.js",
    "revision": "766ed163078352d0213c477066bcbdad"
  },
  {
    "url": "assets/js/34.ccb39e68.js",
    "revision": "417cad20cd10e3325c5a0b7c5e46e59b"
  },
  {
    "url": "assets/js/35.96270d02.js",
    "revision": "efeac1a51ffbbfb5d70e1803aeaf2d34"
  },
  {
    "url": "assets/js/36.c0499cb4.js",
    "revision": "ecaf871a768042ee30fdfe1ea0086ae6"
  },
  {
    "url": "assets/js/37.bebc082c.js",
    "revision": "e36000f992f7e3e81fddd919161c14d0"
  },
  {
    "url": "assets/js/38.b5933260.js",
    "revision": "e9b5ca888129cb448aee374005b3d452"
  },
  {
    "url": "assets/js/4.fb49e5b4.js",
    "revision": "1f3e7369f35017a9958621433547a306"
  },
  {
    "url": "assets/js/5.12179edf.js",
    "revision": "c921b28c984e9da344d60abfdadbb63c"
  },
  {
    "url": "assets/js/6.203cf043.js",
    "revision": "552fc6970bfa2b7c514639d72116fc59"
  },
  {
    "url": "assets/js/7.29a6c5f5.js",
    "revision": "6aa6cd492fd15f4462b6fdddae3c6601"
  },
  {
    "url": "assets/js/8.77959c25.js",
    "revision": "fe3f97ce674d9142a6a6912137d57649"
  },
  {
    "url": "assets/js/9.f341ca05.js",
    "revision": "6337a3e83360042e46ea3ae80238fbc1"
  },
  {
    "url": "assets/js/app.ffeaaa67.js",
    "revision": "810958a0f1ee6e78e9806efa64143772"
  },
  {
    "url": "header.png",
    "revision": "69d3bf2a26307d399aecdac54c582f3b"
  },
  {
    "url": "index.html",
    "revision": "d2b21e7a9db4a945fe045a08588c8b92"
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
