'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e07910a06a086c83ba41827aa00b26ed",
".git/config": "19e06f0291edf28ab05b1df6e7db10fe",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "01b868d4bcbc3c875fad09f22ce51ecc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "40359f74cb02271025fc5cd60bc98340",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1396858596bfb7897c3703398ebd49e1",
".git/logs/refs/heads/main": "638cd8ce7acf835c523ffa6e51fd4f96",
".git/logs/refs/remotes/origin/main": "22dda42ea8913ff33e4d8f813e88e925",
".git/objects/08/1abaf823cea1dc9f4af0495dbf787d340bdf15": "432efcd37632001277a002aebcb0e0d5",
".git/objects/09/7fcf1da546006fa678abfc034ae45759f18c0a": "f24a92acf14b720aea097548880edc21",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/6c39e4338db60f3eea1ca264f7ef3890a89ff9": "cf12358a330e621190632f96fd55f671",
".git/objects/13/e471f6d02499a503d3c9708887c441ffe9067c": "a99280e95e0615848c3450c93ccfe68f",
".git/objects/13/f924e6e40199f0665c7194231b005fbc3f02ce": "f19b65a7d98d6cc3ee4985b62ec39d0e",
".git/objects/15/4a296d10b5fc7084b5f6eabc43963e5bd94c76": "b08d991f4eb58652161dee2d8fc33080",
".git/objects/18/6e53a27abd26ffd0e9632df0ceb7a297f1eeb6": "cf521861aa5d6036fcba8043d2d9df43",
".git/objects/1b/321032e898b47db68c3dda8e45737e478cac48": "c6aa11a62d4885be973566d1aad787c3",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/e8897419a2ae5daea5c023b780a2c4037d0a12": "f33ec476272c1ba73eccd529af4b28f3",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/ded861db7b8de7ed737e2c04d3850420f0610a": "0cd9a346598cbf12894a82861c3637cd",
".git/objects/37/e701034a4cb5976fd9e53d0ba038d7deca8545": "be12b5680d9eae801e23dbfba0cef08e",
".git/objects/3f/9c23cfe9a3732062f37de4e4c942b25b0000c0": "333d0450c8c0cb8153ae931c25c6a001",
".git/objects/43/dc646c1a72e355e41a51c481bd5a47747f1040": "45f4e2f92a1c9527afe62bf027ac204d",
".git/objects/44/8ea58858f03a74ff1a9707d7cc74eb2c7855c0": "bfc5a647127c7610648dc1cfbb7bb59f",
".git/objects/45/2806a5ed999569e841f4deef366d7573ba08bd": "f25c84987ee3fe4328b1ed2724353e8a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/53a0c4cd30c1af5986c7fe539d536ff994e46e": "3ff6f16d6cae83adb3d3c10ef3baebc4",
".git/objects/49/79f3cd157d6b2e9860e5473639777b09499f82": "c3ff7b2a61839b336dc9e698cf6a6825",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/57/8410bfb2750bc41d37f8970fc5f7b3134aeaa9": "4519a6c7002705a19200ba665ad9dd79",
".git/objects/57/fde0a6f93d645aa0e88c657dff1aa0bd6bf4c8": "9586639ab4b64a2f44b4ed955d6dc6dd",
".git/objects/5b/2ec1acaed54daa586beacff10c444566322c0c": "b929aa7b400410e6665ddda108e0cc22",
".git/objects/70/6a933e8ec1e6bd9009a40bb805d3611539d5fc": "6e20f0f200c360a92db43e0d27b52561",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/b92f353ce7ad2b5e87ea8e2b55bc47963a87ed": "efe1b107634d3d24f4f417d414481e7a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/adfcffc2539ecfc3a30caa1c695e7a53ae30ef": "7df7b767991151e1893a141cea852332",
".git/objects/7f/1e3d492cf7857d6af1a06c9f4610db2e0478bf": "eaac7e3d7e165b32a6bb177ba0f86e25",
".git/objects/87/3abbf1de3d3c3e299b140cc77ac3475c44be32": "6d2ebacbfbeae26ffc0dedc9e36c3299",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/94/55c886fe944653e153e330ccbb805a13c7e2d9": "03e381493862f87cfc343e274494da81",
".git/objects/95/4db9b52518ca793559e5aaa98b6e78b9ea086b": "b2b1bd1a2cc9698fb2703adf6c4eaf42",
".git/objects/95/e11fc1ac0a1bbab8ad312c89d132474ad1784a": "31b662820ca8142a9a83ac27a1c8ffc1",
".git/objects/9c/1560bb8e3c10796856574470debb8de1722b99": "9e658b0fcc0a7f15be40b769cf8b39ce",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/600fcbcdbedc5c2e6f906dd50e3a87e9701e2d": "277d9098c347341cc469d8dfc46f3cbb",
".git/objects/a3/92bd3e245b007d1f3561c92141ec1077e245bd": "7a5f7c4b5c3dd9e933f40d6baaefce59",
".git/objects/a6/a4906b646b5782bbb587ed1c0b042c137d9ea1": "5c1fd97385ea44d532af77b3a526878c",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/7dcd040d8c3711729a9bce01157385465e7a3c": "317ef39603a606183b60f32aeb574cde",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c4/192631f25b34d77a7f159aa0da0e3ae99c4ef4": "546c588f67767790fc70913da1a77878",
".git/objects/c6/73eb8451b78bb14a276396ec715b5c4aa17d3a": "c281ad715c1f9540f321ce2ceb369ce3",
".git/objects/c8/997d11165141de49c963fdc70e16a5609f7661": "5ac84b8d49e750f69d1f87446fd4da39",
".git/objects/c9/68755795a08bc11d8e96a9629e4ac37e2a971d": "54a4f7e4e3f72fed704b179d9ffdb2a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/8ac7e973f82df1dabbd3b5f389defd869807c1": "5472c3f43a0c517dadb27f415db1c0bc",
".git/objects/df/246d563d7debb968c69db84ec856d99ee07e73": "75ecddac8caba07fc63dee8e778d4087",
".git/objects/df/da598a2fa2ce50301d3943923750d134187af4": "176205d0b960944aebda80ae8ed9ecaf",
".git/objects/e2/341c242a91faab7d9323acc69019bcdd8d8b42": "c59b7af24b2947389019e9b9fdcdab49",
".git/objects/e2/bec9958cbbe779a5a496f7bf37927efd47d71f": "223f568330677a52aeaf165159e597cc",
".git/objects/e5/831c62b35022c27ef7a182d19896fd6b0bc7f5": "18693c51d11a8708e14168381330f31a",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/b7f0700b98c639227affa924800f23cf98b6fa": "d274796b06734173c05e3ee26b61a7d7",
".git/objects/e7/bdbefd2fb2b16ba52802312f822a1b69d587f4": "c95ab3e1ffcf40bed047a7eff385f12c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/5f0ba9c3250befba731ab7719d72f36147dd82": "eec643645788475cdbba538eb8a91c03",
".git/objects/ee/798823aa50bbc9b817f2366431ffac5cc6431a": "f0a97be06cca4f41970ffb34ae2ea5b6",
".git/objects/fb/aeedc5b5a5bdcedafa30917ce511389d56832e": "f134782793b0fb8ab05967300aff8191",
".git/ORIG_HEAD": "02e2459a07ac5a97daa0fff3c7317b16",
".git/refs/heads/main": "00c9a2fdd2a050411de5d5adc2e5c322",
".git/refs/remotes/origin/main": "00c9a2fdd2a050411de5d5adc2e5c322",
"assets/AssetManifest.json": "0c33382feb95cc2cb9a272be18d06c01",
"assets/assets/images/placeholder.png": "4788048f319dc48101678d9e69f5077e",
"assets/assets/images/wbg.jpg": "8c98994518b575bfd8c949e91d20548b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2e969b936e1157e3d689102abe0b326c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ca2907e9db74bd63f178b1c9463d2097",
"/": "ca2907e9db74bd63f178b1c9463d2097",
"main.dart.js": "9ef942c6c9bdc1acb26ea5caa481471d",
"manifest.json": "198f6d58864f0a1de6bd5b9178ef04e7",
"version.json": "cdef629beec0a95f75cf5b9ac3951f71",
"_config.yml": "d178df8a46be3ea7f599296e24430ce0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
