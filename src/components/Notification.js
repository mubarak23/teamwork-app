import React from "react";

function Notification(props) {
  return (
    <div style={{ visibility: props.isVisible ? "visible" : "hidden" }}></div>
  );
}

export default Notification;
