self.addEventListener('install', function(event) {});

self.addEventListener('activate', function(event) {});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches
      .open(cacheName)
      .then((cache) => cache.match(event.request, { ignoreSearch: true }))
      .then((response) => {
        return response || fetch(event.request);
      }),
  );
});
