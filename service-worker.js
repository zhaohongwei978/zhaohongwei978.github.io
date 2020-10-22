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
    "revision": "a30cf41985107d3566d8263af3d57138"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "7f63f3abe68b86e6bcc630f74743c567"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "cbf4f69fc4f13d5bafb1ceef6aca36d6"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "ebcbab549a11d0edef7ac4cf82c04ba2"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "e505d33567d0af67de81ae51abf585f3"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "f9e991ea4bd355fedb3e1c105d200f37"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "ad607dbe82d9c6d46b125702bdc6432d"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "9ed557f8bb77ed5f9146a90c800d94d2"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "12495250b72c620204551a58baa548dd"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "138dfb02763a90587015a65b1171a322"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "bb145f09834ec38ea79526f66958382a"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "7cf39c1523be0b5399746e5e5450caac"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "4d6abc78e043793069073d5c291564e6"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "932759cf6699917781df830828907a5c"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "fabed250c5133f7eee41a2f648c38395"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "d120deb36e1bc2fd40a22d5825d3bd0e"
  },
  {
    "url": "about/nature/性能优化总结.html",
    "revision": "8e6e2d18a33a795cd2fb70e737121b7a"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "4afb8875665c75b723b5182c9ac5fbe5"
  },
  {
    "url": "about/question/js.html",
    "revision": "086f18a9c31c89587c3a158eff803753"
  },
  {
    "url": "about/question/vue.html",
    "revision": "c0db1ef067c9d827c412d41b97f26895"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "20d70943ce3554aa4102993991627bd5"
  },
  {
    "url": "about/vue/nextTick.html",
    "revision": "a92478b489ce6d3bf16bc9ad09f091c8"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "2679c15c6d5e30b8a6f0dc3df4bacf0b"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "03de6891c98e62fd553004fd7a025d03"
  },
  {
    "url": "about/vue/响应式observe.html",
    "revision": "24f4cd95999b733a72e8bf691dd1a874"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "5ebe1376a7e9ca651eb0646d0f5c303a"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "687575150a2dfeb9c892b725ddcca752"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "bd08e931d094b90086016bc3a232d11c"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "fc68807f9f758a9f45eb08852b27561a"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "23d9ed6bea0d0a700947edcf833b36a4"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "076e37f049bbc3df00e1ccacfd5b65fb"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "f9ce35dddbb3d9c1be30de839a4270c4"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "42e7ce27a73356dadd9bfce07e3a8882"
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
    "url": "assets/js/10.7f15fcba.js",
    "revision": "117aef153eb8a3d52c3a8bcd28a73d2f"
  },
  {
    "url": "assets/js/11.6ba4cf28.js",
    "revision": "9f26065431b830c503efc15680057eea"
  },
  {
    "url": "assets/js/12.d6345f35.js",
    "revision": "5f1b6a220ea6112a62f204d7c811f5ff"
  },
  {
    "url": "assets/js/13.4dd242b4.js",
    "revision": "485d9d07509d473d41215744428b6fd0"
  },
  {
    "url": "assets/js/14.1faf7c82.js",
    "revision": "b958192df1d1c74061edf0e72bcd6cd3"
  },
  {
    "url": "assets/js/15.b10e2974.js",
    "revision": "10eded1974c2e06d6a8db0fef9a26100"
  },
  {
    "url": "assets/js/16.a39b77b5.js",
    "revision": "3aa53d5fd80be28656de2824f5b3b779"
  },
  {
    "url": "assets/js/17.405211c6.js",
    "revision": "3a6b0b96755d9d43f68a0b221e3b7d35"
  },
  {
    "url": "assets/js/18.7b45966a.js",
    "revision": "3c793f5dfca7f35a8af42c245c0b8c6f"
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
    "url": "assets/js/20.eba908ef.js",
    "revision": "4f08af32772adcea61964c553d86eebb"
  },
  {
    "url": "assets/js/21.89998ab7.js",
    "revision": "897bd226644279439e1423a894881037"
  },
  {
    "url": "assets/js/22.a9c454bb.js",
    "revision": "2f8a1e0f32504276ebcafe62060da3d9"
  },
  {
    "url": "assets/js/23.ead785fc.js",
    "revision": "d5f0667ea63acb6a9819b604d80900a3"
  },
  {
    "url": "assets/js/24.fda264cb.js",
    "revision": "7f7b7f0f6eb56010d81b74b7f8598b50"
  },
  {
    "url": "assets/js/25.80a6e759.js",
    "revision": "c926927c8f05599b545e783328ab92d0"
  },
  {
    "url": "assets/js/26.f6d58092.js",
    "revision": "80368881a938b3d80446c365edbdd887"
  },
  {
    "url": "assets/js/27.f87a24c7.js",
    "revision": "0c1c88b1303dfefd9113048335b6145d"
  },
  {
    "url": "assets/js/28.1bc45904.js",
    "revision": "6000b29acac48332a7c3286ca2a1c787"
  },
  {
    "url": "assets/js/29.57dee6d9.js",
    "revision": "2a0e7b5c498ec08af2dcb24cf274547e"
  },
  {
    "url": "assets/js/3.6781ba49.js",
    "revision": "dcf8ff847ddfd505d12251a4c5a738ea"
  },
  {
    "url": "assets/js/30.c21fbdb3.js",
    "revision": "94d1a642c60825ee535378e2647097d3"
  },
  {
    "url": "assets/js/31.55ea5aef.js",
    "revision": "1543f70c8935eb5e4aca2a311fc8c74e"
  },
  {
    "url": "assets/js/32.a54ca774.js",
    "revision": "9192eae3f077e61429c0264acd88ce27"
  },
  {
    "url": "assets/js/33.c10da740.js",
    "revision": "cade10d522a58d9c2a761581f0d0e7ad"
  },
  {
    "url": "assets/js/34.4a3c0b5a.js",
    "revision": "febd5dece43eeec56c57f4febff5e3de"
  },
  {
    "url": "assets/js/35.7062c4c4.js",
    "revision": "2fcb0f031ecba138127853ecb59afcd8"
  },
  {
    "url": "assets/js/36.55e886ca.js",
    "revision": "56d74aba6cdcdf3c0e7031e13855cce7"
  },
  {
    "url": "assets/js/37.24afa62a.js",
    "revision": "1674e52d504537bae4a10f4df790422e"
  },
  {
    "url": "assets/js/38.5c2c09b9.js",
    "revision": "e762029e7f7cf590a5955e43a010ab76"
  },
  {
    "url": "assets/js/39.daee907b.js",
    "revision": "e41f90f84306e965f4cfdaa26fe4b31f"
  },
  {
    "url": "assets/js/4.22f2b8d6.js",
    "revision": "a47269eda00f8bafde38cf9fc40b90a9"
  },
  {
    "url": "assets/js/5.cdaabf7d.js",
    "revision": "e9e69d2302fd47be8a426e43296c9902"
  },
  {
    "url": "assets/js/6.f810ded9.js",
    "revision": "11f154ef7bd7d8fad61f3a377b6fc604"
  },
  {
    "url": "assets/js/7.24f0c669.js",
    "revision": "70620e1f5c52c8cb01317859b0a5af60"
  },
  {
    "url": "assets/js/8.77959c25.js",
    "revision": "fe3f97ce674d9142a6a6912137d57649"
  },
  {
    "url": "assets/js/9.ba9338ae.js",
    "revision": "6ef8697cac78cdb3506046be28675d35"
  },
  {
    "url": "assets/js/app.422485d6.js",
    "revision": "1ec70ad4465c1413c97d855814962ec3"
  },
  {
    "url": "header.png",
    "revision": "69d3bf2a26307d399aecdac54c582f3b"
  },
  {
    "url": "index.html",
    "revision": "6418901aead9c1a0c1f0d0d72a761ee2"
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
