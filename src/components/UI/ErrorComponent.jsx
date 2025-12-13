import React from "react";

const ErrorComponent = ({ message }) => {
  return (
    <div className="col-12" >
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#ffe6e6",
          borderRadius: "8px",
          border: "1px solid #ff4d4f",
          color: " #ff1a1a",
          margin: "1rem 0",
        }}
      >
        <h3> Oops!</h3>
        <p>{message || "Something went wrong while loading"}</p>
      </div>
    </div>
  );
};

export default ErrorComponent;
