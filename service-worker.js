self.addEventListener('install', (e)=>{
  self.skipWaiting();
  e.waitUntil(caches.open('ps-v1').then(c=>c.addAll([
    '/index.html','/styles.css','/js/app.js','/js/onboarding.js','/js/builder.js','/js/store.js','/js/api.js','/js/prompts.js','/manifest.json'
  ])));
});
self.addEventListener('activate', (e)=>{ e.waitUntil(clients.claim()); });
self.addEventListener('fetch', (e)=>{
  e.respondWith((async()=>{
    const cached = await caches.match(e.request);
    if (cached) return cached;
    try{
      const fresh = await fetch(e.request);
      const cache = await caches.open('ps-v1');
      cache.put(e.request, fresh.clone());
      return fresh;
    }catch(err){
      return cached || new Response('Offline', {status:503});
    }
  })());
});
