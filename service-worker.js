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
          '/js/onboarding.js'
          // add any other files you actually want cached
        ].filter(url => url.startsWith('/') || url.startsWith('http'))
      );
    })
  );
});

self.addEventListener('fetch', event => {
  const reqUrl = event.request.url;

  // Skip non-HTTP requests (like chrome-extension://)
  if (!reqUrl.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
