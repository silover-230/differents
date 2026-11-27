// Service worker : reçoit les notifications et les affiche sur l'iPhone ou le PC.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("push", (e) => {
  let d = { titre: "Differents", texte: "Un petit rappel." };
  try { if (e.data) d = Object.assign(d, e.data.json()); } catch (err) {}
  e.waitUntil(self.registration.showNotification(d.titre, { body: d.texte, icon: "icon-192.png" }));
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  e.waitUntil(self.clients.openWindow("./"));
});
