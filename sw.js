/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-d33f5fe2'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  workbox.setCacheNameDetails({
    prefix: "toeflprep-app"
  });
  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "assets/AddExamDataPage.a7890d35.js",
    "revision": "d954cbcf3d645984f1094f1cc24f6064"
  }, {
    "url": "assets/AddQuestionPage.7621387b.js",
    "revision": "3e41cd28cad71db769adacb9f60eefed"
  }, {
    "url": "assets/AdminLayout.94f36981.js",
    "revision": "5a194dcc1310f23ea7800fd00c4bbf34"
  }, {
    "url": "assets/AdminPage.42b66c26.js",
    "revision": "1a607ff31309608390051454a5287006"
  }, {
    "url": "assets/AdminResults.6093bf53.js",
    "revision": "bef4e4089fe480cc506dc00e74806f00"
  }, {
    "url": "assets/BoardUser.ae9fea14.js",
    "revision": "86f0767157b46704eb165e8503ebaf84"
  }, {
    "url": "assets/ClosePopup.bc354c93.js",
    "revision": "92b94bf4f90dc8052e6cae8285131980"
  }, {
    "url": "assets/DataSoalPage.d473d4ce.js",
    "revision": "1ffabce8e52346738f6a30e6375974d7"
  }, {
    "url": "assets/DefaultLayout.60480116.js",
    "revision": "56b6a32522a8901966309e139931f368"
  }, {
    "url": "assets/ErrorNotFound.fb1a246b.js",
    "revision": "c83ebaaca6ad23d666aa02f86d2cc63c"
  }, {
    "url": "assets/ExamDataPage.05fc31ac.js",
    "revision": "dee579dff66bf4e6787ff26f012a6280"
  }, {
    "url": "assets/ExamLayout.1370acc8.js",
    "revision": "41fa840a2d1e9858d3a3813b5cded55f"
  }, {
    "url": "assets/ExamListPage.c7e506c8.js",
    "revision": "4c74f28adfb6eab062fb57c4971be101"
  }, {
    "url": "assets/ExamPage.59fe137b.js",
    "revision": "0bb3442ba0a70de62510c91741b14ea8"
  }, {
    "url": "assets/ExamResultsPage.f541e603.js",
    "revision": "f4468df19e1bf0642bc6e593013c57ba"
  }, {
    "url": "assets/fastclick.8a4a8267.js",
    "revision": "d2247ca0fd57b15eaccbffac6de481e8"
  }, {
    "url": "assets/FinishPage.b1c85f94.js",
    "revision": "a6b0388216c6c99935287d46909df654"
  }, {
    "url": "assets/fisherYates.0344e3fb.js",
    "revision": "9210a69495c8bd175d5f9cce2e56f496"
  }, {
    "url": "assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.66dca61a.woff",
    "revision": "7814880c701adbefed31b0647a92570c"
  }, {
    "url": "assets/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.e1c9ce90.woff2",
    "revision": "af7b20a08fc8f6fd190ee9ca3d0ee5d7"
  }, {
    "url": "assets/focus-manager.d6507951.js",
    "revision": "6a3badc3170f1a716af505ab0ae3a7c6"
  }, {
    "url": "assets/format.2a3572e1.js",
    "revision": "217cdd61827d38bd7b61a5f03232276d"
  }, {
    "url": "assets/index.c07b4a79.css",
    "revision": "3ab3f1984419f3488cdc89348cc26587"
  }, {
    "url": "assets/IndexPage.5ebe37cf.js",
    "revision": "0e3c6c2fc01b7aeace7e955f7ee54ff8"
  }, {
    "url": "assets/KFOkCnqEu92Fr1MmgVxIIzQ.a38ad0b6.woff",
    "revision": "04b7fd97f88b82dccce5ec446ccc29e6"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmEU9fBBc-.bd811625.woff",
    "revision": "da2721c68b4bc80db8d4c404f76b118c"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmSU5fBBc-.855a0697.woff",
    "revision": "bf0f407102faf3a0b521d3b545f547a5"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmWUlfBBc-.a01a632e.woff",
    "revision": "68d6dabfe54e245e7d5d5c16c3c4b1a9"
  }, {
    "url": "assets/KFOlCnqEu92Fr1MmYUtfBBc-.d33864e0.woff",
    "revision": "64bba9c4e8156c152050c657e9d24bf1"
  }, {
    "url": "assets/KFOmCnqEu92Fr1Mu4mxM.ea50ac7f.woff",
    "revision": "dc3e086fc0c5addc09702e111d2adb42"
  }, {
    "url": "assets/ListeningPage.3257517f.js",
    "revision": "e5ac45ead9db7aa0386e08b6f63aefc3"
  }, {
    "url": "assets/LoginPage.3dfd8e45.js",
    "revision": "0e965adde186ddc24d08eb42e42df67e"
  }, {
    "url": "assets/MainLayout.a84fc044.js",
    "revision": "880db82e3d0a2dadaa0f6e50f4667ebb"
  }, {
    "url": "assets/MhsDataPage.ee33f644.js",
    "revision": "0979b99ecdf88dc931f12c9949a813ae"
  }, {
    "url": "assets/option-sizes.3fcf6ea1.js",
    "revision": "6951cfcddf33289c437c90966409f193"
  }, {
    "url": "assets/PrintLayout.8e4a577a.js",
    "revision": "5949091de08e6ce14de378084fa07dde"
  }, {
    "url": "assets/PrintReport.f58b1ab4.js",
    "revision": "12e0d022d35c0648fdc4a5e9eea66b6b"
  }, {
    "url": "assets/PrintResult.6dff14aa.js",
    "revision": "9d5a74906ca92cd4aa7cfc8c96bfbe75"
  }, {
    "url": "assets/ProfilePage.1698a131.js",
    "revision": "2364d6eb573ccb8f3796946c5fe4cc54"
  }, {
    "url": "assets/QCard.1c198fa5.js",
    "revision": "dc03197dc3ee8f2b3ad8c700627b2c40"
  }, {
    "url": "assets/QCardActions.c9539056.js",
    "revision": "8125456a2a2f063f38c4e0808f999ea4"
  }, {
    "url": "assets/QDialog.a401706d.js",
    "revision": "e29f20dee845da2bd4aeff008e5f461e"
  }, {
    "url": "assets/QDrawer.9ccb4956.js",
    "revision": "12c4901ff6e3078f40c9165d2890896a"
  }, {
    "url": "assets/QFile.4bb61baf.js",
    "revision": "53a79369625197a49610ce4ea1751eed"
  }, {
    "url": "assets/QForm.e07678e0.js",
    "revision": "5d42635a1d73db9f5a5d4c8b1b5f20ec"
  }, {
    "url": "assets/QHeader.2d989148.js",
    "revision": "68f702daf9acb5cb2c6d0c695a6f7c49"
  }, {
    "url": "assets/QInput.267a4b21.js",
    "revision": "d7824e9c57cdcf57ea3442e9f20c6c03"
  }, {
    "url": "assets/QItem.6f497f8a.js",
    "revision": "037040796eb7cd204aa760a05418ec64"
  }, {
    "url": "assets/QItemLabel.40319d11.js",
    "revision": "8ad0c5aa4a2ad59b47fdaa446b07dd17"
  }, {
    "url": "assets/QLayout.ec2e98f0.js",
    "revision": "1f094b759d098ed03b0c9dc241a669fe"
  }, {
    "url": "assets/QList.a97060dd.js",
    "revision": "77e7606726f6eec8cd459d4d8a8e0226"
  }, {
    "url": "assets/QMarkupTable.fea7b6c4.js",
    "revision": "00522ba08db26514fd20ffb5e0a9aa89"
  }, {
    "url": "assets/QMenu.7a9dd22a.js",
    "revision": "2a839f602c40195e41688d9f62678337"
  }, {
    "url": "assets/QPage.96bb5120.js",
    "revision": "53c3bcdfba2a519af11516cad9953a17"
  }, {
    "url": "assets/QPageScroller.735b7e8e.js",
    "revision": "ca25d881bc77203e6803a17ac23622bd"
  }, {
    "url": "assets/QSelect.2679fb57.js",
    "revision": "8d8954867cd522fc3bc9962b647e0425"
  }, {
    "url": "assets/QSeparator.49048a07.js",
    "revision": "123a8470982ef192b843454881c2b68f"
  }, {
    "url": "assets/QSpace.ddec15d6.js",
    "revision": "652ea3a51c36bce530495f4acc55a264"
  }, {
    "url": "assets/QTable.d378ed31.js",
    "revision": "e74702d6beb404acc3022e215d38ffcf"
  }, {
    "url": "assets/QTr.a178a190.js",
    "revision": "469a937b0a3c5ceb6a9fcc281790f799"
  }, {
    "url": "assets/ReadingPage.0d12e7a9.js",
    "revision": "bcb94846015a276372aeed75b4a9fd88"
  }, {
    "url": "assets/RegisterPage.59246e7d.js",
    "revision": "c4cd7769919e6071f367bd51d6332418"
  }, {
    "url": "assets/ResultPage.f69be669.js",
    "revision": "796deff9e22fedcb978f7b25a9cd5415"
  }, {
    "url": "assets/StructurePage.8447ad9c.js",
    "revision": "d1980aefd481301cb2a283b14680cf1e"
  }, {
    "url": "assets/UpdateDataSoal.e1a2b349.js",
    "revision": "7fbc7a25b5e38116435cb5523d958963"
  }, {
    "url": "assets/use-dark.f23b5a8f.js",
    "revision": "23d97b49e5e35c0deb275ab84fcabf59"
  }, {
    "url": "assets/use-form.86c585d3.js",
    "revision": "28731397207981293988e0b4e447657a"
  }, {
    "url": "assets/use-prevent-scroll.531f04b1.js",
    "revision": "648d0d04a107c21b60dd090e010f58b4"
  }, {
    "url": "assets/UserResult.87378ffc.js",
    "revision": "2ef99ae847784e71efa40d3d29187588"
  }, {
    "url": "assets/UserResults.84d26a6d.js",
    "revision": "6f3cb6f47b49778d86908aa66c0cca43"
  }, {
    "url": "favicon.ico",
    "revision": "f4facfeaed834544d622544acfbb7722"
  }, {
    "url": "icons/apple-icon-120x120.png",
    "revision": "d082235f6e6d2109e84e397f66fa868d"
  }, {
    "url": "icons/apple-icon-152x152.png",
    "revision": "3c728ce3e709b7395be487becf76283a"
  }, {
    "url": "icons/apple-icon-167x167.png",
    "revision": "3fec89672a18e4b402ede58646917c2d"
  }, {
    "url": "icons/apple-icon-180x180.png",
    "revision": "aa47843bd47f34b7ca4b99f65dd25955"
  }, {
    "url": "icons/favicon-128x128.png",
    "revision": "ab92df0270f054ca388127c9703a4911"
  }, {
    "url": "icons/favicon-16x16.png",
    "revision": "e4b046d41e08e6fa06626d6410ab381d"
  }, {
    "url": "icons/favicon-32x32.png",
    "revision": "410858b01fa6d3d66b7bf21447c5f1fc"
  }, {
    "url": "icons/favicon-96x96.png",
    "revision": "db2bde7f824fb4057ffd1c42f6ed756e"
  }, {
    "url": "icons/icon-128x128.png",
    "revision": "ab92df0270f054ca388127c9703a4911"
  }, {
    "url": "icons/icon-192x192.png",
    "revision": "7659f0d3e9602e71811f8b7cf2ce0e8e"
  }, {
    "url": "icons/icon-256x256.png",
    "revision": "cf5ad3498fb6fda43bdafd3c6ce9b824"
  }, {
    "url": "icons/icon-384x384.png",
    "revision": "fdfc1b3612b6833a27a7b260c9990247"
  }, {
    "url": "icons/icon-512x512.png",
    "revision": "2c2dc987945806196bd18cb6028d8bf4"
  }, {
    "url": "icons/ms-icon-144x144.png",
    "revision": "8de1b0e67a62b881cd22d935f102a0e6"
  }, {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "3e4c3730b00c89591de9505efb73afd3"
  }, {
    "url": "index.html",
    "revision": "e50e1efc538f14d619c2deab238fefd5"
  }, {
    "url": "manifest.json",
    "revision": "1a9b0bac3da1e8042c327ab09aafe5f0"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("index.html"), {
    denylist: [/sw\.js$/, /workbox-(.)*\.js$/]
  }));

}));
//# sourceMappingURL=sw.js.map
