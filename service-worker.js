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
    "revision": "41083c38af284689f5d3b5c2a39038ef"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "491fec8208e7d10d432e58c349fab442"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "f2e8637b38a5275242d922ed0f571cb6"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "edfcdd4d67801125eb9ae1a867c85968"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "97feffc2504a8fceeea8eb26ef61cc25"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "78ae03bd2a36e2bdb3512d3cf9b60406"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "80daf9d145a94c2618b6afcfe3a7d6f6"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "4cfa4d00c084afb7c99aa40728413a5d"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "eee89ad216acf760a6c893b37e80f7b4"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "c605ac60a41900a3978a014de12730ec"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "1f5ada051db9f1e23154ff9160fae55f"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "789b30dc35fb89d1a9f1291d8c6d909d"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "2f36432732bdd29fdddea7cb76573252"
  },
  {
    "url": "about/css/BFC介绍和解决的问题.html",
    "revision": "b7aea82784f2395e97cf5922b8ccc3ca"
  },
  {
    "url": "about/css/清除浮动的几种方式.html",
    "revision": "2aa37f18f405569b155067669454e681"
  },
  {
    "url": "about/css/盒子模型.html",
    "revision": "d21b545a271697ece1cc044743731383"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "89f141d4985597e5e248c816319a7ab0"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "f1824f07b293c1c4de2c73c92c3eeda0"
  },
  {
    "url": "about/nature/requestAnimateFrame.html",
    "revision": "e04a0ef8d4f44acb79386c7df8f70516"
  },
  {
    "url": "about/nature/性能优化总结.html",
    "revision": "8141e72f4fb3a184f89e62d01d52d41e"
  },
  {
    "url": "about/nature/节流防抖.html",
    "revision": "1777501e3393e2f6b36bfa5b3fe2dcbf"
  },
  {
    "url": "about/question/js.html",
    "revision": "44f808bb64f5ec077dfbd63c54afe70b"
  },
  {
    "url": "about/question/vue.html",
    "revision": "ec587af71b7f7d0dc8f46337953109fe"
  },
  {
    "url": "about/question/移动端问题.html",
    "revision": "0101bca256dde7b503286cd9445ab678"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "353c9496209680b1548c6791667633c7"
  },
  {
    "url": "about/vue/newVue时候都做了什么.html",
    "revision": "48abaf6631967841f9f579858974c218"
  },
  {
    "url": "about/vue/nextTick.html",
    "revision": "a5b79c16aa4fe5e5a05dd6a3183e06c1"
  },
  {
    "url": "about/vue/render函数.html",
    "revision": "18edeaf3a531cdec84acd7b83bf07dc3"
  },
  {
    "url": "about/vue/update.html",
    "revision": "78db158838fcd5ac32ceb2ec54d50301"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "56ae309265609327c6156aa95d2aadf8"
  },
  {
    "url": "about/vue/vue实例挂载.html",
    "revision": "2aad8cdfde6d5f20aa2722ac2873f52f"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "3aa6a2a6134caf338d0957f3c0e34b3c"
  },
  {
    "url": "about/vue/响应式observe.html",
    "revision": "b1e8c502f2fcd8c6eeb333962deb11ab"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "bfa2395db684eb24c8a5907f188849c2"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "ba1f564a7131bcbae16d2223fda07f10"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "1dcea89d12afa7f7d84bf0ac4512fda6"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "d04026287d84bfff9bad34a1234ab9bd"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "62b43fd28a4538cfdd7c535c0bb35f1f"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "632818682cc23a403f993eecd328a4f9"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "29601d6b3db97ff8b565a7728f0df806"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "a819f8c3ece9fb070aeed870ba257bf2"
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
    "url": "assets/img/http_huancun.9b9d8560.jpg",
    "revision": "9b9d85605da9b241bf793d87de05cae8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
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
    "url": "assets/js/10.b56e1a36.js",
    "revision": "cb91bd63eaca441061f68c0b3ac9d199"
  },
  {
    "url": "assets/js/11.eac54f01.js",
    "revision": "e03019d869c1cff9d6e4a26a71b3356d"
  },
  {
    "url": "assets/js/12.4b3eb5ec.js",
    "revision": "2164bed2279cfdb6bf9f77d12b6f3657"
  },
  {
    "url": "assets/js/13.4e7adc91.js",
    "revision": "57f00829777c1bb64a006a478acbc0dc"
  },
  {
    "url": "assets/js/14.f0bb4954.js",
    "revision": "9a9ddd3181aff0c2d0c499c4ab7e8626"
  },
  {
    "url": "assets/js/15.e2f67145.js",
    "revision": "307b6d4a3a210649a934c3378f578131"
  },
  {
    "url": "assets/js/16.b04d6045.js",
    "revision": "5b1ae1678a343eb0917b40ca63f26c0a"
  },
  {
    "url": "assets/js/17.3ca72435.js",
    "revision": "b6b0280fed0623df1cb6b8f24bba08ca"
  },
  {
    "url": "assets/js/18.3100430d.js",
    "revision": "f9c71435ff4403923ca66ca801be7d57"
  },
  {
    "url": "assets/js/19.bc262962.js",
    "revision": "cd2a248f155368238c77522f04cfe387"
  },
  {
    "url": "assets/js/2.6bd0a324.js",
    "revision": "d985ce31423943aaf60caf9fbbb30901"
  },
  {
    "url": "assets/js/20.741b85c1.js",
    "revision": "217a55b79cb651f6aaab491ffbd414f1"
  },
  {
    "url": "assets/js/21.ea99a4ba.js",
    "revision": "e3e7709fe65ef618fd0cd334b8890e32"
  },
  {
    "url": "assets/js/22.197e810c.js",
    "revision": "ca047deeabd1dc3c5f8144c2fb1e5170"
  },
  {
    "url": "assets/js/23.14528bac.js",
    "revision": "33f58d423b859ae81cdb09fa5feaae88"
  },
  {
    "url": "assets/js/24.f5724a67.js",
    "revision": "791b38948798f50d8c8c7b4bf24cfa26"
  },
  {
    "url": "assets/js/25.2f556c9f.js",
    "revision": "c7c4fae32c3e75b59961c60fb349268f"
  },
  {
    "url": "assets/js/26.341759bf.js",
    "revision": "f085d5f98047fd03e16daca6be642884"
  },
  {
    "url": "assets/js/27.a10748c5.js",
    "revision": "57d5ae5b4865db960cbe03cda594f1b9"
  },
  {
    "url": "assets/js/28.af9ae556.js",
    "revision": "6eec23e995557b202397e9897b0fa346"
  },
  {
    "url": "assets/js/29.f32e18a0.js",
    "revision": "c9e4aec04c8f9ef395cc16e2a017627f"
  },
  {
    "url": "assets/js/3.9ab279fd.js",
    "revision": "06a16ab3c4dab948540c6ba81566cdf0"
  },
  {
    "url": "assets/js/30.f6b14f68.js",
    "revision": "9a3d7de6f6f4ffa2fa9a20dac7126994"
  },
  {
    "url": "assets/js/31.296f5656.js",
    "revision": "c1c8fc43bfd68fc46bce0a0b50345941"
  },
  {
    "url": "assets/js/32.4fe144fd.js",
    "revision": "d675a8acd102d045ed5a20e9e7b38daf"
  },
  {
    "url": "assets/js/33.cd83bbec.js",
    "revision": "bdde3fd568c1edba7c786422660d3f06"
  },
  {
    "url": "assets/js/34.1df54dd5.js",
    "revision": "47a344a8193abb364737178663ce719a"
  },
  {
    "url": "assets/js/35.54dc645e.js",
    "revision": "c5a375150faa90e9eceffd02e0929158"
  },
  {
    "url": "assets/js/36.cfa1e89e.js",
    "revision": "2fb1460bb3a200c9f3917a8df84f8658"
  },
  {
    "url": "assets/js/37.436344c1.js",
    "revision": "8bc14620c2ae05fb51cdcfa1b453ea56"
  },
  {
    "url": "assets/js/38.1732e7fb.js",
    "revision": "54dd6bd1d439d2b7854aa68e27e54a35"
  },
  {
    "url": "assets/js/39.33de4087.js",
    "revision": "24ee158b0309b55c3b07d5713d942b6a"
  },
  {
    "url": "assets/js/4.faa48289.js",
    "revision": "b31ad098e94bd1471e993af0ac85898e"
  },
  {
    "url": "assets/js/40.35b4e42f.js",
    "revision": "e7bde2a8ec447a1231a5fee2932c2bc8"
  },
  {
    "url": "assets/js/41.cc8ec1a3.js",
    "revision": "b554eba4f8ac7e79fd8753b5be9315ec"
  },
  {
    "url": "assets/js/42.7e40f994.js",
    "revision": "018d67adef8170a4ea50cb46982480cb"
  },
  {
    "url": "assets/js/43.97d9d597.js",
    "revision": "7ef24d0c422b9123d921d0548ff58ed4"
  },
  {
    "url": "assets/js/44.251df7d0.js",
    "revision": "f6b0864b2dd4bcd939f05d11977d2d76"
  },
  {
    "url": "assets/js/45.f6599ccc.js",
    "revision": "1b73a34879046d38140f6ab33084a66b"
  },
  {
    "url": "assets/js/46.1eafcf5c.js",
    "revision": "50e1cbbcf88795930c3b49718baf3713"
  },
  {
    "url": "assets/js/47.66cac38c.js",
    "revision": "f117a64820a47e57eeb540a2b2a8f134"
  },
  {
    "url": "assets/js/5.d4eacfd8.js",
    "revision": "11627414d492ec7a184f31c39b7ab32b"
  },
  {
    "url": "assets/js/6.441cc0de.js",
    "revision": "4d8aa07c55020e19c1e7dbbd7808ff09"
  },
  {
    "url": "assets/js/7.6859a1df.js",
    "revision": "73681b41e23cc7e01dbd7adb0da86e78"
  },
  {
    "url": "assets/js/8.9fa748cd.js",
    "revision": "490158ad02682953c61134f609da977e"
  },
  {
    "url": "assets/js/9.e3f6d9dc.js",
    "revision": "0868bf602efa670dc9795e1123c499dc"
  },
  {
    "url": "assets/js/app.df6f2357.js",
    "revision": "b550a0cd566d0ca014bbb0ee784042cd"
  },
  {
    "url": "header.png",
    "revision": "8eccd8d17445c421007cf96e6241fd8e"
  },
  {
    "url": "index.html",
    "revision": "93849be356a70fea55ef24438bdcdaf4"
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
