const assets = [
  "/",
  "/accounthtml/account.html",
  "app.js",
  "/css/account.css",
  "/js/account.js",
  "https://code.iconify.design/2/2.0.3/iconify.min.js",
  "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css",
  "https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css",
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css",

  "/img/48.png",
  "/img/72.png",
  "/img/96.png",
  "/img/128.png",
  "/img/144.png",
  "/img/152.png",
  "/img/192.png",
  "/img/384.png",
  "/img/512.png",
  "/img/T-150.png"
];

self.addEventListener("install", function (event) {
  //fires when the browser installs the app
  //here we are just logging the event and the contents of the oppject passed to the event
  //the purpose of this event is to give the service worrker the place to setup the local
  //envirorment after the install is done
  console.log("SW: Event fired: ${event.type}");
  event.waitUntil(
    caches.open("static").then(function (cache) {
      console.log("SW: Precaching App shell");
      cache.addAll(assets);
    })
  );
});

self.addEventListener("activate", function (event) {
  //fires when the browser installs the app
  //here we are just logging the event and the contents of the oppject passed to the event
  //the purpose of this event is to give the service worrker the place to setup the local
  //envirorment after the install is done
  console.log("SW: Event fired: ${event.type}");
});

self.addEventListener("fetch", function (event) {
  //fires when the app ask for a resource (file or data)
  console.log("SW: Fetching: ${event.request.url}");
  //next, go get the requsted resource from the network
  event.respondWith(fetch(event.request));
  caches.match(event.request).then((response) => {
    return response || fetch(event.request);
  });
});
