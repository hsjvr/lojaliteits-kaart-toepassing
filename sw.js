const version = '1.0.0';
const cacheName = `cache-${version}`;

self.addEventListener('install', function(event) {
    event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(['.']).then(function() {
        self.skipWaiting();
      });
    }),
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .open(cacheName)
      .then(function(cache) {
        cache.match(event.request, { ignoreSearch: true });
      })
      .then(function(response) {
        return response || fetch(event.request);
      }),
  );
});
