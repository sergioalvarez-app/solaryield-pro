/* SolarYield Pro — Service Worker
 * La app completa (HTML, estilos, fuentes, iconos y generador de PDF) se guarda
 * en el móvil en la primera visita: después funciona SIN COBERTURA.
 * - App: caché primero (instantánea y offline); la página se actualiza desde la red si hay conexión.
 * - API Open-Meteo y analítica: siempre red (sin datos, la app usa su modelo de cielo despejado).
 * Sube CACHE_VERSION cada vez que publiques cambios.
 */
const CACHE_VERSION = 'syp-v2.7.0';
const SHELL = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './vendor/jspdf.umd.min.js',
  './i18n/en.json', './i18n/fr.json', './i18n/de.json', './i18n/it.json', './i18n/pt.json', './i18n/ca.json',
  './fonts/orbitron-latin-600-normal.woff2',
  './fonts/orbitron-latin-800-normal.woff2',
  './fonts/jetbrains-mono-latin-400-normal.woff2',
  './fonts/jetbrains-mono-latin-600-normal.woff2',
  './fonts/jetbrains-mono-latin-700-normal.woff2',
  './fonts/space-grotesk-latin-400-normal.woff2',
  './fonts/space-grotesk-latin-500-normal.woff2',
  './fonts/space-grotesk-latin-600-normal.woff2',
  './fonts/space-grotesk-latin-700-normal.woff2',
];

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
  if (url.origin !== self.location.origin) return; // APIs y analítica: directo a la red

  // Página principal: red primero (para recibir versiones nuevas) con respaldo en caché
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => { const copy = res.clone(); caches.open(CACHE_VERSION).then((c) => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
  // Resto de archivos de la app: caché primero, red si falta (y se guarda)
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE_VERSION).then((c) => c.put(req, copy)); }
      return res;
    }))
  );
});
