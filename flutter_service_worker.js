'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e32ffffc0a34fb5e779677b183616b7c",
"assets/AssetManifest.bin.json": "2ba4341b856ba691711d049c46d2ba39",
"assets/AssetManifest.json": "0ba2051e8cf9790e858038bc075d0a49",
"assets/assets/images/12%2520edta.png": "0c10ae3ca567d0356a9b59a74e7a23a1",
"assets/assets/images/12.jpg": "c54fb62092e4dc50905723fe5209ff6d",
"assets/assets/images/6ba.png": "00f7b2be3b007ce69a0e9444300a39d5",
"assets/assets/images/amino2.png": "37754e090100719fb24ccf1196ac65a0",
"assets/assets/images/atonic.png": "1ee84d6944323bd5c7ab1fb0406b7d34",
"assets/assets/images/bg5.png": "2f206862fce8fb055c9a1f1297a88325",
"assets/assets/images/bo20.png": "095dee68a2032821ca3a9fa5bf20ccba",
"assets/assets/images/BP.png": "cc0f3d954cb781147064c88e80242b03",
"assets/assets/images/bra.png": "4e07b4dca26c6ca48feef421f299e7d1",
"assets/assets/images/cal.png": "653fb16f00e6895e3a46ef3265095918",
"assets/assets/images/cob.png": "33694b79418d8c0d1d8d1ff1eb9356ba",
"assets/assets/images/Da6.png": "435b00c9152d5f5624950d52f66af715",
"assets/assets/images/edta10.png": "4d37261e47d58358ba0fffd2dead0b0a",
"assets/assets/images/ewrwe.png": "4b2987335d96054aee7b9cc151baebff",
"assets/assets/images/f12.png": "d3a3d5587f07aefbf41ffd70d345ce89",
"assets/assets/images/f12n.png": "719111c2d1af90f3cd421cc92ef23d43",
"assets/assets/images/f6.png": "c6d898b5785815e9f334dac4959e3caf",
"assets/assets/images/fa.png": "dc72355554385f00482766ed48df93a2",
"assets/assets/images/fulvic.png": "63823a4324f140c8c5ed8ce48d56c293",
"assets/assets/images/G1.png": "05321feaafcef1d3eb7fba62ec7f42a0",
"assets/assets/images/G2.png": "2a051c9725e67cf41c144fad4f7d5773",
"assets/assets/images/greenswe.png": "922f126264b894a4362f00126ff2c916",
"assets/assets/images/IAA.png": "14a03474a703b6fad717ee7873be5b25",
"assets/assets/images/iba.png": "07dc7911e466820ea67129b7488b9b39",
"assets/assets/images/logo2.png": "b045b099b7437d9046d9875ff66a1553",
"assets/assets/images/m6.png": "d56af7395ae4c043cbf46532866f80bb",
"assets/assets/images/mix.png": "b73cad08de556618f7af27d82131548d",
"assets/assets/images/mixm.png": "0be8de8e6cd08a2ffbdf7426485f4831",
"assets/assets/images/naa.png": "b8263718bbbe5341bb1bf60218dca0f4",
"assets/assets/images/naat.png": "a812e15fd6b901d3221949fe70e2a5d9",
"assets/assets/images/newlogo.png": "5996b25aaf15c3528db0d8585521e9de",
"assets/assets/images/oc.png": "6484cb06c19cd08b15cb0a55782713b2",
"assets/assets/images/realimage.png": "0333ccbe9c45742874f54546b6986346",
"assets/assets/images/sb.png": "a046527dcdc2265a6b408db23af63bc7",
"assets/assets/images/seaf.png": "a41408edfab8af0b1adfc4503a16f509",
"assets/assets/images/shinf.png": "f064eccc026f1bfe1bfa5615122265d3",
"assets/assets/images/sp.png": "62b1c080d7aa96c45de9c027433602ad",
"assets/assets/images/ssp.png": "9cee920e46671b94a9429deca0187244",
"assets/assets/images/ura.png": "5385987a7fb260ed049192bd66425bc8",
"assets/assets/images/zinc12.png": "1903418ccedcbb4e7eeb72040877ab2e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "034b90f066dffe8607cf2692e265a81b",
"assets/NOTICES": "564979de46ed13c051c7c048cda14144",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "1d5ed698e6d1f35218880577bd432b20",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "3afcf433cbe42dd98b4514a5d9c196f6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c6a7e7d872030b399e3cfdf7fe4bd4f0",
"/": "c6a7e7d872030b399e3cfdf7fe4bd4f0",
"main.dart.js": "ae097d63118e4b9845d4d648f8877353",
"manifest.json": "d163344af990133e589bfc3184e903f5",
"version.json": "3f453d82b86aa09664a03aefc3d8d294"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
