import React from "react";

const Wrapper = ({ children, margin}) => {
  return (
    <div
      style={{
        margin: margin,
      }}
    >
      {children}
    </div>
  );
};

export const Wrapper1 = ({ children }) => {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "30px",
        textAlign: "center",
        borderRadius: "15px",
      }}
    >
      {children}
    </div>
  );
};

export default Wrapper;
