const CACHE_NAME = "cranford-cougars-playbook-v1";
const CACHE_FILES = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "manifest.webmanifest",
  "assets/icons/icon.svg",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/source/8th-grade-pal-offense.pdf",
  "assets/plays/play-02.png",
  "assets/plays/play-03.png",
  "assets/plays/play-04.png",
  "assets/plays/play-05.png",
  "assets/plays/play-06.png",
  "assets/plays/play-07.png",
  "assets/plays/play-08.png",
  "assets/plays/play-09.png",
  "assets/plays/play-10.png",
  "assets/plays/play-11.png",
  "assets/plays/play-12.png",
  "assets/plays/play-13.png",
  "assets/plays/play-14.png",
  "assets/plays/play-15.png",
  "assets/plays/play-16.png",
  "assets/plays/play-17.png",
  "assets/plays/play-18.png",
  "assets/plays/play-19.png",
  "assets/plays/play-20.png",
  "assets/plays/play-21.png",
  "assets/plays/play-22.png",
  "assets/plays/play-23.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHE_FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
