// Service Worker ligero para cumplir los requisitos de instalación PWA en Android/Chrome
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Mantiene siempre la conexión directa a red para no interferir con GitHub Gist
  event.respondWith(fetch(event.request));
});
