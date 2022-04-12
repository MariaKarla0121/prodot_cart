import React, { useContext, useState } from "react";
import Carta_Emergy from "./ComponenteMovil/Carta_Emergy";
import MainContext from '../context/main/mainContext';

const Carta = () => {
  const [state, dispatch] = useContext(MainContext);

  const Caunt=()=>{
    dispatch({
      type:"UPDATE_STEP",
      payload:2
    })
   }

   const In=(x)=>{
     console.log(`esta es x:${x}`);
    dispatch({
      type:"UPDATE_TITLE",
      payload:x
    })

    dispatch({
      type:"UPDATE_STEP",
      payload:1
    })
    setTimeout(() => {
      console.log(state, "este es ek sattafd");
    }, 200);
   }

   

  const [cart, setCart] = useState([
    {
      id: 1,
      mesa: "Para Refrescar",
    },
    {
      id: 2,
      mesa: "Cafe e infusiones",
    },
    {
      id: 3,
      mesa: "Cocteleria",
    },
    {
      id: 4,
      mesa: "Entrantes",
    },
    {
      id: 5,
      mesa: "Guarniciones",
    },
    {
      id: 6,
      mesa: "Platos Principales",
    },
    {
      id: 7,
      mesa: "Postres",
    },
  ]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          background: "#337F5B",
          height: "54px",
          alignItems: "center",
          fontFamily: "Roboto",
          fontWeight: "700",
          color: "#FFFFFF",
          fontSize: "36px",
        }}
      >
        LOGO
      </div>
      <div style={{ overflowY: "auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: "24px",
            marginTop: "10px",
          }}
        >
          Carta Menu
        </div>
        {cart.map((carta) => {
          return (
            <div onClick={()=>{In(carta.mesa)}} style={{}}>
              <Carta_Emergy   mesa={carta.mesa} />
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "end",
          position: "absolute",
          bottom: "16%",
          alignItems: "center",
          zIndex: 0,
          width: "100%",
        }}
      >
        <button
        onClick={Caunt}
          style={{
            background: "#FFD062",
            boxShadow: "0px 0px 6px 5px rgba(0, 0, 0, 0.25)",
            borderRadius: "25px",
            width: "126px",
            height: "35.64px",
            marginRight: "7%",
          }}
        >
          Tu cuenta
        </button>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          background: "#337F5B",
          height: "47px",
          alignItems: "center",
          marginTop: "auto",
          color: "#FFFFFF",
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "18px",
        }}
      >
        {" "}
        ofrecido por{" "}
      </div>
    </div>
  );
};

export default Carta;
