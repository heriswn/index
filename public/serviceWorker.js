const staticDevCoffee = "pwa";
const assets = [
  "/",
  "/index.html",
  "/src/css/style.css",
  "/src/js/script.js",
  "/favicon/android-icon-192x192.png",
  "/favicon/apple-icon-72x72.png",
  "/favicon/apple-icon-144x144.png",
  "/favicon/favicon-16x16.png",
  "/favicon/favicon-32x32.png",
  "/favicon/favicon-96x96.png",
  "/favicon/favicon-120x120.png",
  "/favicon/favicon-512x512.png",
  "/favicon/ms-icon-144x144.png",
  "/static/music/f1.mp3",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
