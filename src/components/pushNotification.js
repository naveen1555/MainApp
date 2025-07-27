import React, { useEffect } from "react";

const showNotification = () => {
  if (Notification.permission === "granted") {
    // User has granted permission, show the notification
    new Notification("Notification", {
      body: "New message",
      icon: "path/to/icon.png",
    });
  } else if (Notification.permission !== "denied") {
    // Request permission if not denied
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // User has allowed notifications, show the notification
        new Notification("Notification", {
          body: "New message",
          icon: "path/to/icon.png",
        });
      }
    });
  }
};

const Notifications = () => {
  useEffect(() => {
    showNotification();
  }, []);

  return (
    <>
      <h1>Push Notifications</h1>
    </>
  );
};

export default Notifications;
