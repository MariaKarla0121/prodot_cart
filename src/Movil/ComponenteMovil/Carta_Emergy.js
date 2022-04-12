import React, { useContext } from "react";
import MainContext from "../../context/main/mainContext";

const Carta_Emergy = (props) => {
 
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
      <div
        style={{
          display: "flex",
          width: "95%",
          border: "1px solid #B8B8B8",
          margin: "auto",
        }}
      ></div>

      <div
     
        style={{
          fontFamily: "Roboto",
          fontWeight: "700",
          fontSize: "20px",
          marginLeft: "50px",
          marginTop: "18px",
          cursor:"pointer"
        }}
      >
        {(props.mesa)}
      </div>
    </div>
  );
};

export default Carta_Emergy;
