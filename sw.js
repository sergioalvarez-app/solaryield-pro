/* SolarYield Pro — Service Worker
 * - App shell: cache-first (funciona offline).
 * - Tailwind CDN y Google Fonts: stale-while-revalidate.
 * - APIs (Open-Meteo, PVGIS, Telegram): SIEMPRE red, nunca se cachean aquí
 *   (la app ya tiene su propio fallback astronómico si fallan).
 * Sube CACHE_VERSION cada vez que publiques cambios.
 */
const CACHE_VERSION = 'syp-v1.4.2';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
];
const API_HOSTS = ['api.open-meteo.com', 're.jrc.ec.europa.eu', 'api.telegram.org'];
const CDN_HOSTS = ['cdn.tailwindcss.com', 'fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_VERSION).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (API_HOSTS.includes(url.hostname)) return; // red directa

  if (CDN_HOSTS.includes(url.hostname)) {
    event.respondWith(
      caches.open(CACHE_VERSION).then(async (cache) => {
        const cached = await cache.match(req);
        const network = fetch(req).then((res) => { if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone()); return res; }).catch(() => cached);
        return cached || network;
      })
    );
    return;
  }

  if (url.origin === self.location.origin) {
    // Navegación: red primero (para ver actualizaciones), caché si no hay conexión
    if (req.mode === 'navigate') {
      event.respondWith(
        fetch(req).then((res) => { caches.open(CACHE_VERSION).then((c) => c.put('./index.html', res.clone())); return res; })
          .catch(() => caches.match('./index.html'))
      );
      return;
    }
    event.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
  }
});
