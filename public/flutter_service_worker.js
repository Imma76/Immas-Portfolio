// The old Flutter version of this site registered a service worker at this
// path that serves a cached copy of the old app. This replacement removes that
// cache, unregisters itself and reloads open tabs so returning visitors see
// the current site. Safe to delete once old visitors have cycled through.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((c) => c.navigate(c.url));
    })(),
  );
});
