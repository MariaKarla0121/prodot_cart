import React from "react";
import Accordion from "./Accordion";

const MesaSeleccionada = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "15px 80px 0 80px",
      }}
    >
      <div style={{ color: "#000000", fontWeight: "700", fontSize: "28px" }}>
        {props.info}
      </div>
      <div style={{ display: "flex", marginTop: "20px" }}>
        <Accordion />
      </div>
      <button
        style={{
          display: "flex",
          justifyContent: "center",
          marginLeft: "auto",
          marginTop: "40px",
          width: "20%",
          background: "#FFD062",
          color: "#337F5B",
          borderRadius: "14px",
        }}
      >
        Finalizar Pedido
      </button>
    </div>
  );
};

export default MesaSeleccionada;
