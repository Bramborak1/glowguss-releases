self.addEventListener("install", function (e) { self.skipWaiting(); });
self.addEventListener("activate", function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", function (e) {
  var u = new URL(e.request.url);
  if (e.request.method !== "GET" || u.origin !== location.origin || !/(\/|index\.html)$/.test(u.pathname)) return;
  e.respondWith(fetch(e.request).then(function (r) { var c = r.clone(); caches.open("glowguss-stranka").then(function (k) { k.put(e.request, c); }); return r; })
    .catch(function () { return caches.match(e.request); }));
});
