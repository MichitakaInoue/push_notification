console.log('SW loaded');

self.addEventListener('push', e => {
  const data = e.data.json();
  console.log('push recieved');
  self.registration.showNotification(data.title, {
    body: "Notification",
    icon: "http://image.ibb.co/frYOFd/tmlogo.png"
  });
});
