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
    "revision": "47bb4e1fa5d0d2f6a388148a07517c8d"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "bcfcc09be6848b8aa1f81056d6dbda07"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "7f179d204f07d2da45e5650ceae58fce"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "fc2556988c665526e6fc37e8d63b6f16"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "d751ec90eadb20f0e91b43d3069c95cf"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "5c0a3ff948c46ab32248aba908ed89c4"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "dedc9e9645f484af0191d5ea17ad253d"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "5798f5ea51a48ffff9380921657403ea"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "e1ac18056b129fa351249615be4d1ee7"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "216ac656f3570ec9f865a5eee6cd98e0"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "1b765d777b6028a0c2c8da0a9b113ca0"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "768791869876b66009fb6f42bb84f16c"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "92514a9bbbab2ecc3c80d2ca26c7c82e"
  },
  {
    "url": "about/css/BFC介绍和解决的问题.html",
    "revision": "0375f47248d41c9fd11a61f4cac80575"
  },
  {
    "url": "about/css/清除浮动的几种方式.html",
    "revision": "1e24923a36da9a6cf3ea597b78a2e25d"
  },
  {
    "url": "about/css/盒子模型.html",
    "revision": "6e8f18d318c85d857f9a0f7529b00958"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "909e58d33d095e27de3907bde24938bc"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "449b30a5458d9bfef7a51924f48634c4"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "76f80992e8724044881db768011307a4"
  },
  {
    "url": "about/nature/性能优化总结.html",
    "revision": "bc18be15840e711395593b32b452fd44"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "11d2cd3d0434aa77b2af8198364bcd2a"
  },
  {
    "url": "about/project/项目总结.html",
    "revision": "e0cf5df64987ccb88470bc9194999e1c"
  },
  {
    "url": "about/question/js.html",
    "revision": "0fb9129e42e233e9878f264980ca0863"
  },
  {
    "url": "about/question/vue.html",
    "revision": "dc50b53c9dd0fc2b112523453b31b4fc"
  },
  {
    "url": "about/question/移动端问题.html",
    "revision": "efb153f9da9de37d7a172e0ca5484013"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "6c27409660d74d88a9b48943042430e8"
  },
  {
    "url": "about/vue/newVue时候都做了什么.html",
    "revision": "28fb5fd192e5ee7a2f2775c21d6dbc99"
  },
  {
    "url": "about/vue/nextTick.html",
    "revision": "890673c673a874533dda059058ed72fa"
  },
  {
    "url": "about/vue/render函数.html",
    "revision": "2346acdfefabd291b8c753f5e94e9a5d"
  },
  {
    "url": "about/vue/update.html",
    "revision": "800c7cf07a6769719a9a9ada7e868e5f"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "9efd99b707b082a2c143535d8c305d99"
  },
  {
    "url": "about/vue/vue实例挂载.html",
    "revision": "f4577db6a910d9f6c3a99740e625de51"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "ad7a483772e41c1bf134a4039c4e0cdd"
  },
  {
    "url": "about/vue/响应式observe.html",
    "revision": "3f8bd57a3761af510879dfdf13b5f8bc"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "0b4e12e36e9d86b610c4fd4d03aee723"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "6f1ada4a7d30e97c4e438a150d2a0aa8"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "2ad1beb38e6c290d778d92d3d8cc918c"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "d8ade1197be1d0255d23e262d53aeadd"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "75600d6ab27442ee7725a027879893e2"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "976589e6f2af6a9caff0f112f0201b26"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "ba38892c0843c180bbfa41d2da2f8774"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "47c440a7b4f1a14002318f970b792fd0"
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
    "url": "assets/js/10.3506e754.js",
    "revision": "80d7e193ff77850f1f592a8679d779e3"
  },
  {
    "url": "assets/js/11.cba2c310.js",
    "revision": "5089cd63609547741406a524ccd6cf14"
  },
  {
    "url": "assets/js/12.af69a636.js",
    "revision": "be4f82d7ffb82f94a76c2fd078831acf"
  },
  {
    "url": "assets/js/13.f6a7ac1b.js",
    "revision": "5166b8eea7396e6b872fe5b64f6453f0"
  },
  {
    "url": "assets/js/14.2120d959.js",
    "revision": "11e0e9a8f3362faf872b5ca60d0bbc92"
  },
  {
    "url": "assets/js/15.05eac51c.js",
    "revision": "d0c93259c0168fd24c9fa20254a359ab"
  },
  {
    "url": "assets/js/16.56599f66.js",
    "revision": "9e1b59ec5e193c7c39033f25a5f5f0b4"
  },
  {
    "url": "assets/js/17.bb01a3bd.js",
    "revision": "00082b8cde8448e4c45c401e2b037735"
  },
  {
    "url": "assets/js/18.0a0f78db.js",
    "revision": "ec524e28024e44e5f515d7e930b93562"
  },
  {
    "url": "assets/js/19.706f2680.js",
    "revision": "1f33ba6ac9a6a62bbbd9c5271f16a992"
  },
  {
    "url": "assets/js/2.1beba725.js",
    "revision": "750442632594d5cb0b4ec9b197b1cbd9"
  },
  {
    "url": "assets/js/20.312149a1.js",
    "revision": "608ed3aa309dcc6c413be02420a2b9bd"
  },
  {
    "url": "assets/js/21.3e17c9d6.js",
    "revision": "ccfdb8bf743fa8ceca58d93798abaa82"
  },
  {
    "url": "assets/js/22.faf55330.js",
    "revision": "711e6dfa4a767d8b04950a41e7af1857"
  },
  {
    "url": "assets/js/23.0900c539.js",
    "revision": "35e793357e3061b4a67c4b1165149c17"
  },
  {
    "url": "assets/js/24.1524002c.js",
    "revision": "c3bb2f4bf12367b51d520fe7dd7182d0"
  },
  {
    "url": "assets/js/25.842b8117.js",
    "revision": "a767ef8407c7516a9e2ef50266492f91"
  },
  {
    "url": "assets/js/26.a3060bf1.js",
    "revision": "e07623e6f6d80146b0e21793b54f8a37"
  },
  {
    "url": "assets/js/27.397be639.js",
    "revision": "0bc71ebb373748ddaf22501187d3fe17"
  },
  {
    "url": "assets/js/28.18fef214.js",
    "revision": "a2cb22c1fc25c53a5bee2b5c3d2a407a"
  },
  {
    "url": "assets/js/29.b7e70c9d.js",
    "revision": "ef91fa562198561ab801cd045c2b0d9a"
  },
  {
    "url": "assets/js/3.3f31f084.js",
    "revision": "6e1b4c39fa63ef69a71d64925cf9ef16"
  },
  {
    "url": "assets/js/30.e3345e0d.js",
    "revision": "fdd571dc608a0f3af284620b2461e119"
  },
  {
    "url": "assets/js/31.7914ef08.js",
    "revision": "e24c55cf38903e236e9a7be8caf877c7"
  },
  {
    "url": "assets/js/32.624fedeb.js",
    "revision": "1d2a9833956a6046dd642e8aad81c9f9"
  },
  {
    "url": "assets/js/33.f672cfe5.js",
    "revision": "f88f2b94095115dcafe3ca32211fbe8f"
  },
  {
    "url": "assets/js/34.7344c7d0.js",
    "revision": "87a221988c28a29c2298b4de5493b535"
  },
  {
    "url": "assets/js/35.54f13e9d.js",
    "revision": "572495b71b5979181dc9c251a00a5c1e"
  },
  {
    "url": "assets/js/36.33fa8f4b.js",
    "revision": "f299155e121c1b9b4a3f1c70a7090954"
  },
  {
    "url": "assets/js/37.74868711.js",
    "revision": "c66421d03f015b9c4e5f1ec0b5566799"
  },
  {
    "url": "assets/js/38.71668025.js",
    "revision": "d95f95b9df4bf20908a604bda3fe5475"
  },
  {
    "url": "assets/js/39.08f04fcd.js",
    "revision": "eda37156c39e5daaae11194f55b61d9b"
  },
  {
    "url": "assets/js/4.f49d0a18.js",
    "revision": "4cbcbcf337b9212e294a60ac8e379427"
  },
  {
    "url": "assets/js/40.9795d5c8.js",
    "revision": "86a24ec439c65522842f3b95b160735b"
  },
  {
    "url": "assets/js/41.e200ab85.js",
    "revision": "ba678289f6c56846115db46a0802d517"
  },
  {
    "url": "assets/js/42.6806bf48.js",
    "revision": "ea40eb23ad1b1c74fb2a1dcc2ff8ac07"
  },
  {
    "url": "assets/js/43.b898c7de.js",
    "revision": "18541a333de820e503580378e970206d"
  },
  {
    "url": "assets/js/44.9db33f5b.js",
    "revision": "48cf1619b55e17a6426fefc1ccbdf262"
  },
  {
    "url": "assets/js/45.d3279a7c.js",
    "revision": "43f72d1a9fbc8b24f11fc0b0afc10091"
  },
  {
    "url": "assets/js/46.964c633f.js",
    "revision": "c6e746ed77b43a4bd6a122309b9f16c6"
  },
  {
    "url": "assets/js/47.ddb9f857.js",
    "revision": "f3e2ad3e039d119f68282fc8d4c443d4"
  },
  {
    "url": "assets/js/48.35c25b22.js",
    "revision": "3267e7415b466a494402b83c7bc3ae09"
  },
  {
    "url": "assets/js/5.a98fc76a.js",
    "revision": "5a949b030598ef6095df0ab8c9510d81"
  },
  {
    "url": "assets/js/6.c6876b67.js",
    "revision": "db1ac12b2db09a41e96bbedf4f1b9032"
  },
  {
    "url": "assets/js/7.a8788f1e.js",
    "revision": "4afda790b8f6cd9db0b14c7b3d6868d4"
  },
  {
    "url": "assets/js/8.d5300ffb.js",
    "revision": "372a2fe63602f6a0c1f940b173b66a55"
  },
  {
    "url": "assets/js/9.a8a63974.js",
    "revision": "e1fb9fee7ff3830b4db0583acdd0b6b7"
  },
  {
    "url": "assets/js/app.ec814f8d.js",
    "revision": "f67cda77dc254ad72169e8f6d18ba0a8"
  },
  {
    "url": "header.png",
    "revision": "8eccd8d17445c421007cf96e6241fd8e"
  },
  {
    "url": "index.html",
    "revision": "90c5ccb9326bc6ab8c98a4abe7fca833"
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
