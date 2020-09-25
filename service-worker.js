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
    "revision": "e2bae3dda2c9ad17bfee48e40504b647"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "0de587c2e81535b68cf25885e240801f"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "5ae3a7ec80ce307759452f536fbfe571"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "6c76d4ff7766f748e58f4a83e4d08b33"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "8dc9640fdbedb6bca191c43397d138fd"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "296417b0544502f57a4a7b4993458298"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "65ff548d5cfc799857c6df053f0661c3"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "bd8f730a3ea17a5a42f67a9cc9451a00"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "dfaa1be17b0f0910ea22196f5066b116"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "cbe726fd179fef8abbca2dd302b530fc"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "c0b00df1267491dc7f3580e13aedbc16"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "c95726f1c17da520aa5f533187f2578a"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "52c699f2dde9c3f95139e09abcbeb134"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "e4ad2ac6bab7aca4f01d28ec192f64f1"
  },
  {
    "url": "about/question/js.html",
    "revision": "b3f1291eb2293975b19a34ffbfc22d9e"
  },
  {
    "url": "about/question/vue.html",
    "revision": "4c03e51340b7035c0438bbb268c33e00"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "d5b9898dc3da9c6b37bed27a9f9ef068"
  },
  {
    "url": "about/vue/响应式observe.html",
    "revision": "ed63f5f6ae525281b66a35ac2579077f"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "f6bdd6df1b074761097d9ec763380003"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "f7f7426644bf5966703c9ebebdffa228"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "14a0ff7698ad5278fcd976d2b1c82da7"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "27f05aad73624655d7f5a2dc3fdd78f9"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "c1f9a12117fe863693dbe5a1ba634687"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "1c7d3b4041952fb780f5adaa508e4218"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "e60b0f66d34188b994437939eaf9b884"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "27609c37e702f561b276a4dec0fd045f"
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
    "url": "assets/js/12.d6345f35.js",
    "revision": "5f1b6a220ea6112a62f204d7c811f5ff"
  },
  {
    "url": "assets/js/13.8aa7e491.js",
    "revision": "0f534995900f854aa2debfceebaa4f64"
  },
  {
    "url": "assets/js/14.b586caae.js",
    "revision": "f60580329cab4288bab59d13b3fea319"
  },
  {
    "url": "assets/js/15.c4206bef.js",
    "revision": "504594bdc1075731979890131643bfeb"
  },
  {
    "url": "assets/js/16.fc71a10a.js",
    "revision": "3ce57cbad17f4470f533f4301aa3e5fa"
  },
  {
    "url": "assets/js/17.68095090.js",
    "revision": "337cda0041d124986d099ef83801c48a"
  },
  {
    "url": "assets/js/18.88b35172.js",
    "revision": "1466acb65da329d9e24c8b60d3e8bf58"
  },
  {
    "url": "assets/js/19.0f0da65b.js",
    "revision": "e0753cc55d2c0495e40c76fdeb7203b7"
  },
  {
    "url": "assets/js/2.32ad2a78.js",
    "revision": "fa4da8518727456f69d180e1d6019d5a"
  },
  {
    "url": "assets/js/20.ba091569.js",
    "revision": "1adb2f7e3b08b125ac36349e2b5ce172"
  },
  {
    "url": "assets/js/21.3059903f.js",
    "revision": "d403eecfed204f0c56067dec5245a28d"
  },
  {
    "url": "assets/js/22.bb566f79.js",
    "revision": "43d742728bd528691f7e194c0270a054"
  },
  {
    "url": "assets/js/23.d8e5c881.js",
    "revision": "3e6a08c9d606bdcc5488081f37ae6a6c"
  },
  {
    "url": "assets/js/24.1856dde2.js",
    "revision": "861275830977ffb16eabe7a61c1c856c"
  },
  {
    "url": "assets/js/25.33c04eb3.js",
    "revision": "641033a49cbb7d6cce47baa061219e74"
  },
  {
    "url": "assets/js/26.575cc80e.js",
    "revision": "25b77c11252322a872cc0651bf24a854"
  },
  {
    "url": "assets/js/27.87c08ed7.js",
    "revision": "cde845baf09d8009ce768002bd6ac4a5"
  },
  {
    "url": "assets/js/28.9adb8ab0.js",
    "revision": "3b8b05e93efd83fbc0c72b6390a932c1"
  },
  {
    "url": "assets/js/29.55cfdfba.js",
    "revision": "fa25ab438391ab84a5ac2880b00d173e"
  },
  {
    "url": "assets/js/3.6781ba49.js",
    "revision": "dcf8ff847ddfd505d12251a4c5a738ea"
  },
  {
    "url": "assets/js/30.1b1c42b3.js",
    "revision": "dc7a040458535c7762bbb072772a6b1c"
  },
  {
    "url": "assets/js/31.adb1b447.js",
    "revision": "666d7b07ffc17cdb3d5c2e58aa8855b5"
  },
  {
    "url": "assets/js/32.06d331d1.js",
    "revision": "fa832dfbdd95666b393404f338d6fa99"
  },
  {
    "url": "assets/js/4.6ea63ba4.js",
    "revision": "2e1f5313d92465b7d2f7cca65961ffc4"
  },
  {
    "url": "assets/js/5.e4707e7f.js",
    "revision": "be18d48c88fa340d997d020f2991e134"
  },
  {
    "url": "assets/js/6.67a45913.js",
    "revision": "d066932fd8e6a168724aedff554ea39e"
  },
  {
    "url": "assets/js/7.855d7434.js",
    "revision": "295d28e5327795a5e2e35aa76b1901ad"
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
    "url": "assets/js/app.44778972.js",
    "revision": "92ab020f22aedd5acb8675738da2854f"
  },
  {
    "url": "header.png",
    "revision": "69d3bf2a26307d399aecdac54c582f3b"
  },
  {
    "url": "index.html",
    "revision": "7e07f8b061986a4102259bc2cf57966d"
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
