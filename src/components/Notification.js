import React from "react";

function Notification(props) {
  return (
    <div
      style={{ visibility: props.isVisible ? "visible" : "hidden" }}
      className={`notification ntification-${props.notification.status}`}
    >
      <p className="x-s">{props.notification.message}</p>
    </div>
  );
}

export default Notification;
