import React from "react";
import './Notifications.css';

export const Notification = (props) => {
  const { className, children } = props;
  return (
    <div
      className={`notifications ${className}`}
    >
      {children}
    </div>
  );
};