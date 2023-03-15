import React, { useState, useEffect } from "react";
import { Container, Typography } from "@material-ui/core";
import NotificationList from "./NotificationList";
import notificationsData from "./notifications.json";
import "./App.css"

const App = () => {
  const [notifications, setNotifications] = useState([]);

  const deleteNotification = (id) => {
    setNotifications((notifications) =>
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const snoozeNotification = (id) => {
    setNotifications((notifications) =>
      notifications.map((notification) => {
        if (notification.id === id) {
          return {
            ...notification,
            created_at: new Date().toISOString(),
          };
        } else {
          return notification;
        }
      })
    );
  };

  useEffect(() => {
    setNotifications(notificationsData.notifications);

    // Simulate new notification arriving after 5 seconds
    const timeoutId = setTimeout(() => {
      setNotifications((notifications) => [
        {
          id: notifications.length,
          name: "New Notification",
          user_name: "John Doe",
          created_at: new Date().toISOString(),
        },
        ...notifications,
      ]);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" className="title">
        Notifications
      </Typography>
      <NotificationList
        notifications={notifications}
        deleteNotification={deleteNotification}
        snoozeNotification={snoozeNotification}
      />
    </Container>
  );
};

export default App;
