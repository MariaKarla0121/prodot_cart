import React, {  useContext, useState } from "react";
import MainContext from "../context/main/mainContext";
import Carta from "./Carta";
import Carta_First from "./Carta_First";
import Cuenta from "./Cuenta";

export default function Paginacion() {
 const [state,dispatch] = useContext(MainContext)

  return (
    <div >
      <div >
        {state.step === 0 ? (
          <Carta />
        ) : state.step === 1 ? (
          <Carta_First />
        ) : state.step === 2 ? (
          <Cuenta />
        ) : (
          <p>inventario</p>
        )}
      </div>
    </div>
  );
}
