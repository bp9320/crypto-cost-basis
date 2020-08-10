import React from "react";

const ErrorMessage = (props) => {
  if (props.errorMessage) {
    return (
      <h4 className="red-text text-darken-3 center-align">
        {props.errorMessage}
      </h4>
    );
  } else {
    return null;
  }
};

export default ErrorMessage;
