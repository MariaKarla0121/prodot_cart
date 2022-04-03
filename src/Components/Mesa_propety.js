import React from "react";

const Mesa_propety = (props) => {
  const lista = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
        cursor: "pointer",
      }}
    >
      <div style={{ color: "#000000", fontWeight: "400", fontSize: "15px" }}>
        {props.mesa}
      </div>
      <div
        style={{
          display: "flex",
          width: "40px",
          height: "40px",
          background: "#C4C4C4",
          borderRadius: "9px",
          marginLeft: "80px",
        }}
      >
        {props.qr}
      </div>
      <div style={{ display: "flex" }}>
        {lista.map((data) =>
          data < props.ca ? (
            <div
              style={{
                display: "flex",

                width: "17px",
                height: "17px",
                background: "#337F5B",
                border: "1px solid #337F5B",
                boxSizing: "border-box",
                marginRight: "10px",
                borderRadius: "20px",
              }}
            />
          ) : (
            <div
              style={{
                display: "flex",
                width: "17px",
                height: "17px",
                background: "#C4C4C4",
                border: "1px solid #C4C4C4",
                boxSizing: "border-box",
                marginRight: "10px",
                borderRadius: "20px",
              }}
            />
          )
        )}
      </div>
      <div style={{ color: "#000000", fontWeight: "400", fontSize: "15px" }}>
        {props.cuenta}
      </div>
    </div>
  );
};

export default Mesa_propety;
