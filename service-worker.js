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
    "revision": "440e72d3432a5880a293e819db86888a"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "3427e6ad2f2a4908dae50052805b700f"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "ed3c3d3456e59b973538a243c28988d3"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "8e70909ca48dc7dfeac4bd72bb8d2119"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "a72b71796344377f5fd92eb50f99522a"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "8b901c6022e7d632963ff1170e103ddd"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "f8dbc2d62d85a0fec689eeff78e15296"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "61e89c92aee7121cfb83b415f1700f9d"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "5a3079b7fd34a09e2b1e011906e73938"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "0556d0175edc691ade5be4fb6473ec08"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "f400f51de1b2822083c1e4ce2906d5d6"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "b4c5af5262095fd2e26269e7b9ae6d2a"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "47bdfc13048a98062a874f8b69773124"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "82dbecb8289849d5ca4687b2a712323d"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "71a16c16dd08967a50146eadbdafee4a"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "5c9dd93cce41d43326c1139e8f9c7b6a"
  },
  {
    "url": "about/nature/性能优化总结.html",
    "revision": "e4c5eec2a66994c3f1d19637f37fe87e"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "c7ce4f74a7971f2f21259dcb352665e0"
  },
  {
    "url": "about/question/js.html",
    "revision": "a87fb4a51b556c48b244be27eb1e03df"
  },
  {
    "url": "about/question/vue.html",
    "revision": "ea6ede6180246b8d3557ba5bd0e7ddb4"
  },
  {
    "url": "about/question/移动端问题.html",
    "revision": "6b1e7240f118a74b7aca01a03d1325dc"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "69b19c20cd1e0780906cccbef5d929fd"
  },
  {
    "url": "about/vue/nextTick.html",
    "revision": "88e6f0bf68d513a120c421c471540c56"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "9dec47b4668ca383139dbd18c7d253fe"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "fd46ca41858f36cfead3996541006fb6"
  },
  {
    "url": "about/vue/响应式observe.html",
    "revision": "948ba8937fcdd5275162e0e76bc9803d"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "759662438deb82863196588efaaa8b3e"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "4d06c99acc897280484feb350db96a27"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "a57e295ec80a2d3554963b8682a96f7b"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "dd7f8a58486f06774d942f4f32507d53"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "534b863c4b35026e3511266798efb221"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "5a657a1c8bbb3b1569070413123708ee"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "c9986e96ab953806cfe45a2ae567a64b"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "d01c5ce51ed92ba601dcbade0fb73aa8"
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
    "url": "assets/js/10.d8e46d82.js",
    "revision": "f92a3226f9f4ea76ab5eaedc2dc675ae"
  },
  {
    "url": "assets/js/11.179c7c18.js",
    "revision": "58f99dc2d939ff5bbadc538d475485f2"
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
    "url": "assets/js/16.c35e0322.js",
    "revision": "eadfad38604b2dff183dd2e4c1817320"
  },
  {
    "url": "assets/js/17.c38b1144.js",
    "revision": "e3a5c0a701070fdc8c33501892d8640b"
  },
  {
    "url": "assets/js/18.ef7da668.js",
    "revision": "d1cdcdf4392939433d9d5982b9bd0870"
  },
  {
    "url": "assets/js/19.34170e74.js",
    "revision": "f55b0ae54ab13c7b15164c4b69c036cd"
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
    "url": "assets/js/22.1c1b9240.js",
    "revision": "b2056b9075d29ec1328920b457a15cd6"
  },
  {
    "url": "assets/js/23.a57b3fb5.js",
    "revision": "8d4a7e8449f555ca532c0bf8b21ae6ca"
  },
  {
    "url": "assets/js/24.f42c4c0a.js",
    "revision": "4d99cfbeeca3b4d00baeacbc37fd6b34"
  },
  {
    "url": "assets/js/25.afcf472d.js",
    "revision": "c98b4ba0af69b11e6976a606ecb8ef12"
  },
  {
    "url": "assets/js/26.a5716e4a.js",
    "revision": "2e4de36073edc815b9590982be3fe8ff"
  },
  {
    "url": "assets/js/27.dc52f519.js",
    "revision": "c24bf92147cba3770c2932414575602f"
  },
  {
    "url": "assets/js/28.be23c74e.js",
    "revision": "66bf85c76f536d5e7d1a6d1afdf4cf83"
  },
  {
    "url": "assets/js/29.483d2781.js",
    "revision": "8ec2c2715113c59142791decefa5e27e"
  },
  {
    "url": "assets/js/3.6781ba49.js",
    "revision": "dcf8ff847ddfd505d12251a4c5a738ea"
  },
  {
    "url": "assets/js/30.f4c61f91.js",
    "revision": "773fdb04e19f2ee174b6b2a884d0536d"
  },
  {
    "url": "assets/js/31.3663661e.js",
    "revision": "80ff17b52a7e973262f669696b139d3b"
  },
  {
    "url": "assets/js/32.bb47abf7.js",
    "revision": "99c5ef0c365d37736ba9746bcfb26697"
  },
  {
    "url": "assets/js/33.1bf442c3.js",
    "revision": "d96eec15af478076e6441c45b4365b97"
  },
  {
    "url": "assets/js/34.6cf548e6.js",
    "revision": "fcd6d7211be1116fb6f49f22f684c2e5"
  },
  {
    "url": "assets/js/35.84083135.js",
    "revision": "935f598e8a0e2366acaef392dac67416"
  },
  {
    "url": "assets/js/36.1857f7cb.js",
    "revision": "0a2b56f2ab03829ce5ee66e4d6222f88"
  },
  {
    "url": "assets/js/37.9bef1b47.js",
    "revision": "222f9bddc13f185c3abe81d3d756fcb7"
  },
  {
    "url": "assets/js/38.dd019a2f.js",
    "revision": "59f259af5d3a474cb64b1a9bc4815aac"
  },
  {
    "url": "assets/js/39.6940a259.js",
    "revision": "d3d177b5e9d8ec3f79743ebfab57d991"
  },
  {
    "url": "assets/js/4.cfb90707.js",
    "revision": "b0dec4f80286e708a2efab7f02a7e3e4"
  },
  {
    "url": "assets/js/40.0ba3cb40.js",
    "revision": "214e129f9a1d75b831f6aefd6f09565e"
  },
  {
    "url": "assets/js/5.3298c41c.js",
    "revision": "2e9361777a2359f7c0c5b9d63dc1ed45"
  },
  {
    "url": "assets/js/6.f810ded9.js",
    "revision": "11f154ef7bd7d8fad61f3a377b6fc604"
  },
  {
    "url": "assets/js/7.7884ac00.js",
    "revision": "57ac359c05ffff445747c96f42207bf4"
  },
  {
    "url": "assets/js/8.77959c25.js",
    "revision": "fe3f97ce674d9142a6a6912137d57649"
  },
  {
    "url": "assets/js/9.962344b6.js",
    "revision": "81790d3f264b01ffd1b714387ac1c39d"
  },
  {
    "url": "assets/js/app.f7381743.js",
    "revision": "5c41ecb49154d040a859659d1f7286e8"
  },
  {
    "url": "header.png",
    "revision": "8eccd8d17445c421007cf96e6241fd8e"
  },
  {
    "url": "index.html",
    "revision": "8d0f50e61b64d3da59f93e45858c7e43"
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
