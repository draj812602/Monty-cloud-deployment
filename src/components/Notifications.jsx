import React, { useEffect, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

// here showing random notification and not auto removing it because the notification could be important so letting user
// to close it by themselves

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: Math.random(),
        message: "Server overload detected!",
        type: "error",
      };
      setNotifications((prev) => [...prev, newNotification]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const dismissNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <ToastContainer position="top-end" className="p-3">
      {notifications.map((notif) => (
        <Toast
          key={notif.id}
          onClose={() => dismissNotification(notif.id)}
          bg="warning"
        >
          <Toast.Header>
            <strong className="me-auto">Alert</strong>
          </Toast.Header>
          <Toast.Body>{notif.message}</Toast.Body>
        </Toast>
      ))}
    </ToastContainer>
  );
};

export default Notifications;
