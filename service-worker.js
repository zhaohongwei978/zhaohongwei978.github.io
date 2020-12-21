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
    "revision": "30e1b2059a3ebee38749c0d5df9f175c"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "9f807578a982973185f8222037489472"
  },
  {
    "url": "about/basics/dsBridge.html",
    "revision": "c6f7399a0e5ac27bea4029817474eb40"
  },
  {
    "url": "about/basics/generator.html",
    "revision": "886259952ba160a5f20220a20bf11753"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "fcc33f259dbf417b0bb1d9fe07816ca3"
  },
  {
    "url": "about/basics/Object.html",
    "revision": "8277c4b789dd20765a7c8ce5670e8ad2"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "db4f6633c1135ae3fe21d02ab7f5187d"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "e29a1db845c1e8c058553acc5c21ce0a"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "3e4072b3db13fd6bf2e68c509d865bb7"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "26638b578b8971f2a191a3407480783b"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "ed879ab5a2b53d704a2338e9eaea2e94"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "652ac57afaf9bd2be1a1c3703eff2c4f"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "d7a93dccee250a7d465b33c0001ec4ea"
  },
  {
    "url": "about/basics/跨域.html",
    "revision": "61dc30857a030529003276d0c7e26d43"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "8bd267cadeac06a097bb18478de427c9"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "996b6b4cfd1115522df3d5b70213a165"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "225d59f58587d894c27f53be5b6dfe1a"
  },
  {
    "url": "about/css/BFC介绍和解决的问题.html",
    "revision": "d2b6bd446dc7fe7e09a0561ab1cd5398"
  },
  {
    "url": "about/css/scss使用.html",
    "revision": "b0d0126dfe4b8e590d62901b55356fcd"
  },
  {
    "url": "about/css/清除浮动的几种方式.html",
    "revision": "0aba14e0a813c9508bca44235b2e23c0"
  },
  {
    "url": "about/css/盒子布局.html",
    "revision": "c1713a51b68fddb75dc532f045e1419c"
  },
  {
    "url": "about/css/盒子模型.html",
    "revision": "41fab3145f63e8ee03a22c5975d0658b"
  },
  {
    "url": "about/http/HTTP基础知识.html",
    "revision": "cb4c4f9cdda9b3f63970795270e8bd1b"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "277bbb30b7c45ec8f954711640d05e16"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "b701d0c3cdcbef11bedc92f0313f7fad"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "e7e9d36f03410f2f259ab12dec2abfb8"
  },
  {
    "url": "about/nature/性能优化总结.html",
    "revision": "a4fddd0c0bc2118cbc9b0f7397fc4aa7"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "b3dcff07d04d7a9d394fda38167f66ab"
  },
  {
    "url": "about/project/小程序架构设计.html",
    "revision": "1eb2a6e9274add028f97ee315ac98fea"
  },
  {
    "url": "about/project/微前端.html",
    "revision": "76f2f3f2d185a76486a83db4b9ae35a5"
  },
  {
    "url": "about/project/项目总结.html",
    "revision": "b2ea307424a1d7c96eeedb2d7616f0ce"
  },
  {
    "url": "about/question/js.html",
    "revision": "8a2efe0829582f505e6556571d7cf5f2"
  },
  {
    "url": "about/question/vue.html",
    "revision": "ddd001d88f44eb1077c241b593e52c70"
  },
  {
    "url": "about/question/移动端问题.html",
    "revision": "f85d181ef4cc0757c3e4fcf9f82c3257"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "8935062b7653fa79ac87ff3ba9259214"
  },
  {
    "url": "about/vue/newVue时候都做了什么.html",
    "revision": "6905f0f89c41686fc6fb3ada65e7b31d"
  },
  {
    "url": "about/vue/nextTick.html",
    "revision": "05252c8ebeade2464ec55b0f0f158d93"
  },
  {
    "url": "about/vue/render函数.html",
    "revision": "791cdba6123d38f93f6e6eaefb422ee2"
  },
  {
    "url": "about/vue/update.html",
    "revision": "4d4233a1af9f4ac25cd1b102cb2b2384"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "a3b4e099d42cce3e100a98c5a17bc141"
  },
  {
    "url": "about/vue/vue实例挂载.html",
    "revision": "21dca38fd862fedc0eb4ec3325422821"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "680b0a8eb22e6f7316791acee3356602"
  },
  {
    "url": "about/vue/响应式observe.html",
    "revision": "d0a640c37e004150395d3aeece4064af"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "f87813f7bf4e7a1d91da2c242e655f70"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "7d9de692c2c5411019782dcb45cd6b8e"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "b08cbe654a03b8ef8b0824170b26d5ee"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "23376bd02e0e3b3ab9db6e915bf55bfb"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "e3286f4fd6a6aa1edbae0e5151979864"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "46ea1dca637d03b5d34a2169b8a118c3"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "fe8d63a77a72725df394a93f3b1bc3f4"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "0e83d0c055c8ad2a5b61c445e3b69de9"
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
    "url": "assets/js/10.0b5a8b75.js",
    "revision": "7957a529e0a61538d27765fb04eb8e90"
  },
  {
    "url": "assets/js/11.a98c2d4b.js",
    "revision": "677e23268dca9fdfe183b4e56f6d66d1"
  },
  {
    "url": "assets/js/12.f6aa2882.js",
    "revision": "cac6a77ff84770984873febfa7e6002b"
  },
  {
    "url": "assets/js/13.4a5083d7.js",
    "revision": "4585ddbf934b0ffc4f60f20a5f551082"
  },
  {
    "url": "assets/js/14.d9a8ea5b.js",
    "revision": "f10984327e260854dc62ec7291ab24d3"
  },
  {
    "url": "assets/js/15.2251815e.js",
    "revision": "566e31c240a6848a32b5e788f44d5983"
  },
  {
    "url": "assets/js/16.c5c55536.js",
    "revision": "8c9eb2835f352d3653edd4c3d2a8afd7"
  },
  {
    "url": "assets/js/17.b60d78f9.js",
    "revision": "80b1eabed758f366da7b034b5aef4af0"
  },
  {
    "url": "assets/js/18.1b615301.js",
    "revision": "2ac2c8be26088ebc755d369133e75af9"
  },
  {
    "url": "assets/js/19.0103420a.js",
    "revision": "4a935914ac000365ae4dd2a14a71d78c"
  },
  {
    "url": "assets/js/2.deebf64a.js",
    "revision": "0975b104d2ac37e1a5df0ae5a1e80e30"
  },
  {
    "url": "assets/js/20.ae4d8f9c.js",
    "revision": "b6eb07b848ddae7b9af43c0f74f3d0b9"
  },
  {
    "url": "assets/js/21.1345f1e2.js",
    "revision": "d06ec35cd89cb3a57d4859d9d427a8c1"
  },
  {
    "url": "assets/js/22.f6b1d2de.js",
    "revision": "9b36d82ee1685266ed83d5acebad744c"
  },
  {
    "url": "assets/js/23.60ac38f6.js",
    "revision": "27a5eea00be537da4350442fec13688e"
  },
  {
    "url": "assets/js/24.05b1ccaf.js",
    "revision": "8f1859ee84b13b180a5680d703e20f03"
  },
  {
    "url": "assets/js/25.ad688c4e.js",
    "revision": "164bc04bdc222e59fc85dc7d996892b8"
  },
  {
    "url": "assets/js/26.b86096d0.js",
    "revision": "24912340a8ab5f7bcc6f2e4bcc0eb458"
  },
  {
    "url": "assets/js/27.7c62efcf.js",
    "revision": "72fc32aa2d0b934d41c65e55738aa137"
  },
  {
    "url": "assets/js/28.b534909c.js",
    "revision": "a8f515d3046e34dab92dd209c65f6cf8"
  },
  {
    "url": "assets/js/29.9d26aca2.js",
    "revision": "35eb455c41937642ee8dc7609f5772cd"
  },
  {
    "url": "assets/js/3.e440a63a.js",
    "revision": "5b7b999753c1125d1875223cd8382e3b"
  },
  {
    "url": "assets/js/30.b0e55768.js",
    "revision": "ac73bf7d611c85fa09230f74c7ae77a9"
  },
  {
    "url": "assets/js/31.352a3009.js",
    "revision": "2e26e8e85f7f03f4f485151a7d8a05f9"
  },
  {
    "url": "assets/js/32.4d21c513.js",
    "revision": "3df72f943610efd2280e28bbd334a7cb"
  },
  {
    "url": "assets/js/33.51823d46.js",
    "revision": "5d665b91580e52aa6135a0ad21e54eaf"
  },
  {
    "url": "assets/js/34.5e819de6.js",
    "revision": "0c856a86fd7e9430e33739e3d3497d4b"
  },
  {
    "url": "assets/js/35.fd7548ee.js",
    "revision": "8d6aab26ce88c0e06a27986931b3c130"
  },
  {
    "url": "assets/js/36.69317915.js",
    "revision": "9b54f9342adf3df9bbaf6d32b01d36c7"
  },
  {
    "url": "assets/js/37.3be558fc.js",
    "revision": "126fd4ed4e7652ce5d3941ace4e195f2"
  },
  {
    "url": "assets/js/38.41e17763.js",
    "revision": "a370caafcb7c92443444634cffc5e4b1"
  },
  {
    "url": "assets/js/39.aefb1b3a.js",
    "revision": "184f1ec14b0a5e2f1a432da23944da43"
  },
  {
    "url": "assets/js/4.b58cfd44.js",
    "revision": "afdc14153f4be40aebbb42390f406b6e"
  },
  {
    "url": "assets/js/40.5caef311.js",
    "revision": "6869e7caa1db461526edd328e69a05c8"
  },
  {
    "url": "assets/js/41.f25929b6.js",
    "revision": "1ac6929170edef847ccd920be1a3ca3a"
  },
  {
    "url": "assets/js/42.4bc7ba9f.js",
    "revision": "18eba739dddd8a6bec5e07a81bcee60b"
  },
  {
    "url": "assets/js/43.13b56621.js",
    "revision": "7b10b0a51227261e6ddddd48d73ab393"
  },
  {
    "url": "assets/js/44.e25d251d.js",
    "revision": "40f2d61f42429e8cd429eb7adc7f0ccd"
  },
  {
    "url": "assets/js/45.5e2ebeac.js",
    "revision": "bc9366b4eaa592847c21129d3c1c8c27"
  },
  {
    "url": "assets/js/46.9f3f4380.js",
    "revision": "b3b74679d9cf0daa14cfa2421c6d1587"
  },
  {
    "url": "assets/js/47.65d3d93a.js",
    "revision": "86e41f4041cf981cd484b087db10d301"
  },
  {
    "url": "assets/js/48.0e124a7a.js",
    "revision": "545bc252519064eb25457e4c116b2064"
  },
  {
    "url": "assets/js/49.257ca1bf.js",
    "revision": "0e0153321b0158505e3a34819b14311a"
  },
  {
    "url": "assets/js/5.e38e9f60.js",
    "revision": "9a39e532e09b8f59b74fae4d2572c91e"
  },
  {
    "url": "assets/js/50.60746e8e.js",
    "revision": "30ca4ea441db0d5977db3106ac4707c9"
  },
  {
    "url": "assets/js/51.3efccacb.js",
    "revision": "c3043da456f741e04ee76710ea06a6ba"
  },
  {
    "url": "assets/js/52.9178aaca.js",
    "revision": "3a7529f0324d4e66052628e174204982"
  },
  {
    "url": "assets/js/53.31b4c18e.js",
    "revision": "11928578730c82cbbc12e688efc225be"
  },
  {
    "url": "assets/js/54.197249d9.js",
    "revision": "e3ed926e6c0ab5abc6c5293afb72736b"
  },
  {
    "url": "assets/js/55.28767c59.js",
    "revision": "ed26f07f23dae0043fbeaf9d2fb1263c"
  },
  {
    "url": "assets/js/56.84d7dae2.js",
    "revision": "89759259f2d9ce3d374136fff10cf461"
  },
  {
    "url": "assets/js/57.78fc6a05.js",
    "revision": "1d2c1e1496fc13353d2edb627201880c"
  },
  {
    "url": "assets/js/6.a69c061f.js",
    "revision": "e9b66695f97b265349f8537f6f1f4a8e"
  },
  {
    "url": "assets/js/7.a794173a.js",
    "revision": "1c456b39f744cca678758c2fb462b780"
  },
  {
    "url": "assets/js/8.c462e844.js",
    "revision": "fda4bcf2e243cd8e5348a8d2efb15163"
  },
  {
    "url": "assets/js/9.1ac191bb.js",
    "revision": "09daf1b9bab13edfa34cec4e048273a8"
  },
  {
    "url": "assets/js/app.65d339c7.js",
    "revision": "fc057c205f20fec8292fb790e0cdc507"
  },
  {
    "url": "header.png",
    "revision": "8eccd8d17445c421007cf96e6241fd8e"
  },
  {
    "url": "index.html",
    "revision": "5da9f71f8806790d934cbfbc7e368bca"
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
