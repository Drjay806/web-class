self.addEventListener("install", function (event) {
  //fires when the browser installs the app
  //here we are just logging the event and the contents of the oppject passed to the event
  //the purpose of this event is to give the service worrker the place to setup the local
  //envirorment after the install is done
  console.log("SW: Event fired: ${event.type}");
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
  event.respondWith(fetch(event.request.url));
});
