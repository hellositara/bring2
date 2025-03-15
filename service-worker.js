const CACHE_NAME = "pwa-cache-v2";
const ASSETS_TO_CACHE = [
    "./",
    "./index.html",
    "./style.css",
    "./icon75.png",
    "./icon100.png",
    "./icon150.png",
    "./icon200.png",
    "./icon300.png",
    "./icon400.png"

];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Alter Cache wird gelöscht:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});