import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SnoozeIcon from "@material-ui/icons/Snooze";
import moment from "moment";

const NotificationList = ({
  notifications,
  deleteNotification,
  snoozeNotification,
}) => {
  return (
    <div className="notification-list-container">
      <List>
        {notifications.map((notification) => (
            <ListItem key={notification.id} className="notification-item notification-card">
            <ListItemText
              primary={notification.name}
              secondary={`${notification.user_name} - ${moment(
                notification.created_at
              ).fromNow()}`}
            />
            <ListItemSecondaryAction>
              <IconButton onClick={() => snoozeNotification(notification.id)}>
                <SnoozeIcon className="snooze-notification" />
              </IconButton>
              <IconButton onClick={() => deleteNotification(notification.id)}>
                <DeleteIcon className="delete-notification" />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
        {notifications.length === 0 && (
          <Typography
            variant="body1"
            align="center"
            className="no-notifications-text"
          >
            No notifications to display
          </Typography>
        )}
      </List>
    </div>
  );
};

export default NotificationList;
