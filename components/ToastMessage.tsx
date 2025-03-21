import React from "react";

function ToastMessage({ msg }: any) {
  return (
    <div>
      <div className="toast toast-top toast-middle">
        <div className="alert alert-success">
          <span>{msg}</span>
        </div>
      </div>
    </div>
  );
}

export default ToastMessage;
