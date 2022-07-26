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
    "url": "assets/AddExamDataPage.497b605c.js",
    "revision": "79fb0e8906efe03c5116b1401e5b8cae"
  }, {
    "url": "assets/AddQuestionPage.4b012f7a.js",
    "revision": "a5864598da54b055d6d56277d729145d"
  }, {
    "url": "assets/AdminLayout.f76231f5.js",
    "revision": "1cd963c22ece3a6c6475701abb026b29"
  }, {
    "url": "assets/AdminPage.2f92cd2b.js",
    "revision": "8a55f45882bd6d8d9ebf4b20841c3dc4"
  }, {
    "url": "assets/AdminResults.074d2969.js",
    "revision": "a5afe7322b0a88dffbd7066ed174c946"
  }, {
    "url": "assets/BoardUser.a43a6adf.js",
    "revision": "0e81b60d057993e2c381f382e47c8304"
  }, {
    "url": "assets/ClosePopup.1b74b498.js",
    "revision": "0df16584b22cb106278a5716b8b23e84"
  }, {
    "url": "assets/DataSoalPage.81fc3439.js",
    "revision": "2e83b37a4bacc8e604c17791d7b68a55"
  }, {
    "url": "assets/DefaultLayout.cc6965a2.js",
    "revision": "fba72b2caa195130c2c2ec2988a9065c"
  }, {
    "url": "assets/ErrorNotFound.3b1d73c7.js",
    "revision": "9bf9f9934b99230b4a3cf88c7f3bf132"
  }, {
    "url": "assets/ExamDataPage.d995af2e.js",
    "revision": "e7337a4b27e35e0e4da8d593e590e868"
  }, {
    "url": "assets/ExamLayout.227ae872.js",
    "revision": "803fd91d5d07e00fc32d1f13f2843d05"
  }, {
    "url": "assets/ExamListPage.ccfb4029.js",
    "revision": "a7ce6901aec7ab8316fdc9dc128afc50"
  }, {
    "url": "assets/ExamPage.2349bd81.js",
    "revision": "caa7bf961f6c897e0efe18bc614fff9e"
  }, {
    "url": "assets/ExamResultsPage.2e8bd831.js",
    "revision": "8babc1e537107f1804d784b98512b3b9"
  }, {
    "url": "assets/fastclick.8a4a8267.js",
    "revision": "d2247ca0fd57b15eaccbffac6de481e8"
  }, {
    "url": "assets/FinishPage.6409a8aa.js",
    "revision": "bea47cdba5f0e29638d9d6037520a6bb"
  }, {
    "url": "assets/fisherYates.8e1c7614.js",
    "revision": "398dd2d508f7cec88eafef59a421e56c"
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
    "url": "assets/IndexPage.df1a00bf.js",
    "revision": "178761ef3d44c764af9d121dc1db9606"
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
    "url": "assets/ListeningPage.766b7dbb.js",
    "revision": "10fc831785648d9b753c2dcfb52c058a"
  }, {
    "url": "assets/LoginPage.58d196e6.js",
    "revision": "9b22af7da00cbfe84472dddf3c142dcf"
  }, {
    "url": "assets/MainLayout.1de1b51a.js",
    "revision": "a7227909ce485c29483f7e3ddfdc3288"
  }, {
    "url": "assets/MhsDataPage.a6846fba.js",
    "revision": "031695e8a3ac7b4ecb4813a944f199dd"
  }, {
    "url": "assets/option-sizes.4864bc5e.js",
    "revision": "60ec7e332b494485a05d18b57e4fe136"
  }, {
    "url": "assets/PrintLayout.b622b403.js",
    "revision": "8e6e863879cf424bd256764e9a46ada8"
  }, {
    "url": "assets/PrintReport.856b9ba2.js",
    "revision": "4bb647202bd5caec368c579ca52b9a9c"
  }, {
    "url": "assets/PrintResult.c781e37d.js",
    "revision": "c5ca98d8857f675f49919138bb5973a9"
  }, {
    "url": "assets/ProfilePage.5d4135d2.js",
    "revision": "24c2e91bc3fc007be8b579e96e43787c"
  }, {
    "url": "assets/QCard.56940b1d.js",
    "revision": "fb5d59ce2d683f5df7def7f3979da58c"
  }, {
    "url": "assets/QCardActions.317ec884.js",
    "revision": "cf528fd0c4910cdac55c6b084aae02c4"
  }, {
    "url": "assets/QDialog.1abc6bfe.js",
    "revision": "0939e272da3bea462abcb7c1c7a98b5d"
  }, {
    "url": "assets/QDrawer.efba9e1f.js",
    "revision": "edc9c88a51d6b2df14149493d41e30c9"
  }, {
    "url": "assets/QFile.96a131e5.js",
    "revision": "cbe64a5077a4971799dbd55cd4eee197"
  }, {
    "url": "assets/QForm.6af8cce8.js",
    "revision": "5cc881aaedb9f002b6b66799135e4e56"
  }, {
    "url": "assets/QHeader.da74b18a.js",
    "revision": "97f3dae74b7eb411c9a2e74f5c087599"
  }, {
    "url": "assets/QInput.4ccafa77.js",
    "revision": "901c9c860a2e6e3993d47d05f2241c09"
  }, {
    "url": "assets/QItem.cdb98685.js",
    "revision": "b6261abd7097b89cbf087279ced86677"
  }, {
    "url": "assets/QItemLabel.f8e493fa.js",
    "revision": "b166f1804fb733dab8984ac25ecce1ca"
  }, {
    "url": "assets/QLayout.ef8c83fc.js",
    "revision": "3122e138aef98bba7667f87c81046c43"
  }, {
    "url": "assets/QList.eea363b9.js",
    "revision": "d3c728cf378b672dcf6dc2119a763a64"
  }, {
    "url": "assets/QMarkupTable.d3f16310.js",
    "revision": "75fb23bb0b95ea54637d0086dcc7a25b"
  }, {
    "url": "assets/QMenu.f864c95d.js",
    "revision": "21c5e3312106757f1ba00e567483dd9e"
  }, {
    "url": "assets/QPage.8248ed40.js",
    "revision": "f73766ae17cae137c55d04adbcb99c43"
  }, {
    "url": "assets/QPageScroller.9fba3781.js",
    "revision": "a13306b251e5ad7ce4ceac0603ff99e0"
  }, {
    "url": "assets/QSelect.e0618a84.js",
    "revision": "f454cac38cfbe321f0391743cb4bd1fd"
  }, {
    "url": "assets/QSeparator.17ce065e.js",
    "revision": "90355ff53f8b6051899f3b1ae20bb6f7"
  }, {
    "url": "assets/QSpace.e3120dfb.js",
    "revision": "428c33db2ba1f8c0d19d55400d122b8e"
  }, {
    "url": "assets/QTable.092995d7.js",
    "revision": "f1021f95b11afc3963bf2ffd7c202c0c"
  }, {
    "url": "assets/QTr.3f8ddf53.js",
    "revision": "5eb4a0eb7620de2a6da00cb2908bfdae"
  }, {
    "url": "assets/ReadingPage.accb2745.js",
    "revision": "9bede3565494ca498f5c7497f6db691d"
  }, {
    "url": "assets/RegisterPage.3e723c3e.js",
    "revision": "b4e709b234e24e392952b6baa5666c4d"
  }, {
    "url": "assets/ResultPage.e9f2c3c7.js",
    "revision": "5654aac80d652eddd3b605d8ece51e5a"
  }, {
    "url": "assets/StructurePage.fc75f247.js",
    "revision": "766b0d92d6c930bb2443faf92a698d3c"
  }, {
    "url": "assets/UpdateDataSoal.1925d084.js",
    "revision": "bcda0965a6a70675a62a3170c74dcc60"
  }, {
    "url": "assets/use-dark.e766b308.js",
    "revision": "ddce6c73a5731d2c0df310e106f8e842"
  }, {
    "url": "assets/use-form.f127ae0f.js",
    "revision": "4fac8d541771b918ae86962a3ab8114a"
  }, {
    "url": "assets/use-prevent-scroll.f91f3104.js",
    "revision": "7ce1c8d9be00eeb5ad2e234908a93bc4"
  }, {
    "url": "assets/UserResult.2cdabb12.js",
    "revision": "be9af3a6456a2b4ad935ab2cab47327d"
  }, {
    "url": "assets/UserResults.fa9d8709.js",
    "revision": "afd15d55ceb1bca8301752d83ec3d423"
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
    "revision": "2686f5de62ba13951ee8f6705d315e87"
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
