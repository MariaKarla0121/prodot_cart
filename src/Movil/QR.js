import React from "react";
import Test from "./ComponenteMovil/Escaneo";
import Escaneo from "./ComponenteMovil/Escaneo";
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
          textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        }}
      >
        LOGO
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "252px",
          height: "252px",
          margin: "auto",
        }}
      >
        <Test />
      </div>
      <div
        style={{
          display: "flex",

          flexDirection: "column",
          color: "white",
          marginTop: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "15px",
          }}
        >
          <div>
            <div>Restaurant Name</div>
            <div>Restaurant Name</div>
          </div>
          <div>
            <div>Restaurant Name</div>
            <div>Restaurant Name</div>
          </div>
        </div>

        <div
          style={{
            background: "white",
            boxShadow: "0px -4px 18px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              color: "black",
            }}
          >
            <div>manolito@gmail.com</div>
            <div>Numero</div>
          </div>
          <div
            style={{
              fontWeight: "700",
              fontSize: "18px",
              textAlign: "center",
              color: "black",
            }}
          >
            ofrecido por
          </div>
        </div>
      </div>
    </div>
  );
};

export default QR;
