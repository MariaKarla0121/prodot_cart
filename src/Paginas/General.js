/*eslint-disable*/

import React from "react";
import { useState } from "react";
import Mesa from "./Mesa";
import Pedidos from "./Pedidos";
import Personalizar from "./Personalizar";
import Platos from "./Platos";
import "../CSS/General.css";
import MesaSeleccionada from "../Components/MesaSeleccionada";

const General = () => {
  const [cli, setCli] = useState([]);
  const [view, setView] = useState(1);
  const detallesMesa = (info) => {
    setCli(info);
    setView(5);
  };
  const ref = () => {
    setView(6);
    console.log("niuyolcontigo");
    setTimeout(() => {
      setView(2);
    }, 200);
  };
  let viewRender = <MesaSeleccionada click={detallesMesa} />;
  switch (view) {
    case 1:
      viewRender = <Mesa click={detallesMesa} />;
      break;
    case 2:
      viewRender = <Platos refresh={() => ref()} />;
      break;
    case 3:
      viewRender = <Pedidos />;
      break;
    case 4:
      viewRender = <Personalizar />;
      break;
    case 5:
      viewRender = <MesaSeleccionada info={cli} />;
      break;
    case 6:
      viewRender = <p>cargando</p>;
      break;
    default:
      break;
  }
  return (
    <div style={{ display: "flex", height: "100vh", background: "#337F5B" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "17%",
          height: "100vh ",
        }}
      >
        <div
          style={{
            marginTop: "5px",
            fontSize: "48px",
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight:"bold"
          }}
        >
          LOGO
        </div>
        <div
          style={{
            margin: "auto",
            marginTop: "10px",
            marginBottom: "0px",
            width: "80%",
            alignContent: "center",
            border: "1px solid #FFD062",
          }}
        ></div>

        <div
          style={{
            marginTop: "20px",
            background: "#FFFFFF",
            width: "calc(100% - 1185px)",
            marginLeft: "13px",
          }}
        >
          <nav style={{ display: "flex", flexDirection: "column" }}>
            <div
              className={`navigation-btn ${view === 1 && "active"} ${
                view === 5 && "active"
              }`}
              onClick={() => setView(1)}
            >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  border: "1px solid #ffd062",
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  marginRight: "11px",
                }}
              ></div>
              <div>Mesas</div>
            </div>

            <div
              className={`navigation-btn ${view === 2 && "active"}`}
              onClick={() => setView(2)}
            >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  border: "1px solid #ffd062",
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  marginRight: "11px",
                }}
              ></div>
              <div>Platos</div>
            </div>

            <div
              className={`navigation-btn ${view === 3 && "active"}`}
              onClick={() => setView(3)}
            >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  border: "1px solid #ffd062",
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  marginRight: "11px",
                }}
              ></div>
              <div>Pedidos</div>
            </div>

            <div
              className={`navigation-btn ${view === 4 && "active"}`}
              onClick={() => setView(4)}
            >
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  border: "1px solid #ffd062",
                  boxSizing: "border-box",
                  backgroundColor: "transparent",
                  marginRight: "11px",
                }}
              ></div>
              <div>Personalizar App</div>
            </div>
          </nav>
        </div>
      </div>
      <div className="background-frame">
          <div className="background-frame-content">
            {/* <BackMesas/> */}
            {/* <BackPlatos/> */}
            {/* <BackPedidos/> */}
            {/* <BackPersonalizar/> */}
            {viewRender}
          </div>
        </div>
     
    </div>
  );
};

export default General;
