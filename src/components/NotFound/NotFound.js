import React from "react";
import "./NotFound.css";
const NotFound = props => {
  return (
    <div id="not-found">
      <button onClick={() => props.history.goBack()}>Go Back</button>
      <img
        src="https://optinmonster.com/wp-content/uploads/2018/06/android-404-845x504.png"
        alt="404"
      />
    </div>
  );
};

export default NotFound;
