import React from "react";

function Cirlce(value) {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        backgroundColor: "#0000",
        color: "#ffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {value}
    </div>
  );
}

export default Cirlce;
