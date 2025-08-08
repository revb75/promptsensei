self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('prompt-sensei-cache').then(cache => {
      return cache.addAll(
        [
          '/', 
          '/index.html',
          '/styles.css',
          '/manifest.json',
          '/js/app.js',
          // ...other files
        ].filter(url => url.startsWith('/') || url.startsWith('http'))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const requestUrl = event.request.url;
  // Ignore chrome-extension:// and other unsupported schemes
  if (!requestUrl.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
