import React from "react";
import Test from "./ComponenteMovil/Escaneo";
import Escaneo from './ComponenteMovil/Escaneo'
const QR = () => {
  return (
    <div
      style={{
        background: "#337F5B",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontFamily: "Roboto",
          fontSize: "96px",
          fontWeight: "700",
          margin: "0 auto",
          color: "#FFFFFF",
          textShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
        }}
      >
        LOGO
      </div>
      <div><Test/></div>
    </div>
  );
};

export default QR;
