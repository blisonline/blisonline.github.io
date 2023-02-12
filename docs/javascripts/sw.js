// This is the "Offline copy of pages" service worker
//Used https://www.pwabuilder.com to generate
const CACHE = "pwabuilder-offline";

import('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js').then(workbox => {

    self.addEventListener("message", (event) => {
        if (event.data && event.data.type === "SKIP_WAITING") {
            self.skipWaiting();
        }
    });

    workbox.routing.registerRoute(
        new RegExp('/*'),
        new workbox.strategies.StaleWhileRevalidate({
            cacheName: CACHE
        })
    );
});