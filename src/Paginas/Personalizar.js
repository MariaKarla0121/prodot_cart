import React from "react";
import Color_extra from "../Components/Color_extra";
import Lenguaje from "../Components/Lenguaje";
import Logo from "../Components/Logo";
import Info from "../Components/Info";
const Personalizar_app = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "15px 80px 0 80px",
      }}
    >
      <h2
        style={{
          marginLeft: "50px",
          fontFamily: "Roboto",
          fontWeight: "bold",
          fontSize: "25px",
        }}
      >
        {" "}
        Personalizar App
      </h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div>
            <Logo />
          </div>
          <div style={{ marginTop: "20px", marginRight: "30%" }}>
            <h2>Selecionar Idioma</h2>
            <Lenguaje />
          </div>
        </div>
        <h2 style={{ marginTop: "40px", fontSize: "20px" }}>Color</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <div className="selector_primario">
              <p>Color Primario</p>
              <Color_extra />
            </div>
            <div className="selector_secundario">
              <p>Color Secundario</p>
              <Color_extra />
            </div>
            <div className="selector_terciaro">
              <p>Color Tipografico</p>
              <Color_extra />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            flexDirection: "column",
            fontSize: "20px",
            fontWeight: "bold",
            
          }}
        >
          Informacion del Contacto
          <Info />
        </div>
      </div>
    </div>
  );
};

export default Personalizar_app;
