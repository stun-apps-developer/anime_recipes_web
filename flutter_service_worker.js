'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9e42571985c8d1cf7a2c1a2402564335",
"version.json": "51b085c31d249c6f3378c63f0a686284",
"splash/img/light-2x.png": "b068eca1ba204b0c1c9784979ac81164",
"splash/img/branding-4x.png": "d59c51bcf8a37cf5193cc153c2c9a053",
"splash/img/dark-4x.png": "25f2109468c4be3ca43fcda1ccf8ed7b",
"splash/img/branding-dark-1x.png": "4d34326e438887268c9ec4db4803c142",
"splash/img/light-3x.png": "e0642ba58dfd47f29e4875b17c62360c",
"splash/img/dark-3x.png": "e0642ba58dfd47f29e4875b17c62360c",
"splash/img/light-4x.png": "25f2109468c4be3ca43fcda1ccf8ed7b",
"splash/img/branding-2x.png": "c7ae4773138e2597fd6350771d2c79ff",
"splash/img/branding-3x.png": "d6ca9440cdaf61be2d02ffe7cfdd4462",
"splash/img/dark-2x.png": "b068eca1ba204b0c1c9784979ac81164",
"splash/img/dark-1x.png": "f50e11fef88145c4c2a820b9762eb0dc",
"splash/img/branding-dark-4x.png": "d59c51bcf8a37cf5193cc153c2c9a053",
"splash/img/branding-1x.png": "4d34326e438887268c9ec4db4803c142",
"splash/img/branding-dark-2x.png": "c7ae4773138e2597fd6350771d2c79ff",
"splash/img/light-1x.png": "f50e11fef88145c4c2a820b9762eb0dc",
"splash/img/branding-dark-3x.png": "d6ca9440cdaf61be2d02ffe7cfdd4462",
"index.html": "e8ab72f6419fdb00f93cc44b563fd804",
"/": "e8ab72f6419fdb00f93cc44b563fd804",
"main.dart.js": "a452b10a8a52c656be2b5127c93efd13",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "36769b67ceabc220b6da2eede2e11808",
"assets/AssetManifest.json": "73213a77c7afc878a3069f05e72643e3",
"assets/NOTICES": "c7be0472db8fad9a1485b464105a9164",
"assets/FontManifest.json": "b682ddbf4bd47b23c6233878a01ecc4f",
"assets/AssetManifest.bin.json": "4e59565a752c9f980686b860bb68f702",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/stun_consent/logo.png": "f58647fbdab5f64d27f806376d7dac2f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fbf7efcf62c5e6cd57714790464c2197",
"assets/fonts/MaterialIcons-Regular.otf": "c52d3167d225a64c23ccab9faf8426ad",
"assets/assets/images/info.png": "868121278708f893b03c619998b91a49",
"assets/assets/images/stun_logo.svg": "560e3704d683a6f96ac6bae4ee6d4eda",
"assets/assets/images/suggest_recipe.png": "0719c28fb37df7789015b1e878fcf5c1",
"assets/assets/images/branding_android.png": "890e9ca9b653c607de0b10fc04b851ae",
"assets/assets/images/recipe_empty_state.png": "41015bd514febefc52f804accacbe885",
"assets/assets/images/anime_empty_state.png": "8cac535f05225cd10f9d2a2eca589116",
"assets/assets/images/japanese_sign.png": "6e99667ba8dac498909f56ec35d93f89",
"assets/assets/images/star_required_yellow.png": "b8cb365c0c809293483fe95d886d5a4e",
"assets/assets/images/branding_ios.png": "e6c5d5239e9f2a2bf58ecfbff3015150",
"assets/assets/images/happy_guy.png": "0917056f443857e2fb063bf0aba6ff41",
"assets/assets/images/star_required_pink.png": "7e9b4d61ea312ee41e7ca6667e229199",
"assets/assets/images/ic_launcher.png": "fb96c989dc54b9cd0cd7010bed1ca5a7",
"assets/assets/images/corner.svg": "5b35c855f8870d2dc1cde3ace36469f0",
"assets/assets/images/star.png": "521323041e908a9bc915cfbcbedc1a85",
"assets/assets/images/stars.png": "a5938435010ed4e292c91de78bb8d8c4",
"assets/assets/images/quote.svg": "ca10943a576c292a357b778a9175e1f8",
"assets/assets/images/recipe.png": "f0aa9b922ebd6655981c824a88f02c4e",
"assets/assets/images/splash_logo.png": "27cee11a68ee47cb46945f11ac19bf02",
"assets/assets/images/tip_dummy.svg": "3df5bdf4b374d36eeec2a61e5c6a61be",
"assets/assets/resources/content_android.json": "47efb871f98cfbda32a1a0484ed0ef29",
"assets/assets/resources/content_appstore.json": "f0be106289fc7084978640222a93ae98",
"assets/assets/fonts/Geologica/Geologica-Medium.ttf": "c7d376a7e3678dbdc32de4abd0cf486e",
"assets/assets/fonts/Geologica/Geologica-SemiBold.ttf": "9e1dd44aa6ff39331764c487ea638e41",
"assets/assets/fonts/Geologica/Geologica-Black.ttf": "95ddc548bd7caeeed90a2ed8d8ddd746",
"assets/assets/fonts/Geologica/Geologica-Regular.ttf": "a1be126282b0cbf8fe369f4a46ccc9a4",
"assets/assets/fonts/AppIcons.ttf": "1a0f8bdce7e67a49ba5e7ef1e6d2a956",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
