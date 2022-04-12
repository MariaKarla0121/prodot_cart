import { IconButton } from "@mui/material";
import React, { useContext, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { margin } from "@mui/system";
import MainContext from "../context/main/mainContext";
const Cuenta = () => {
  const [state, dispatch] = useContext(MainContext);

  const Back=()=>{
    dispatch({
      type:"UPDATE_STEP",
      payload:1
    })
   }

  
  const object = [
    {
      img: "",
      title: "pepe",
      price: "lol",
    },
    {
      img: "",
      title: "pepe",
      price: "lol",
    },
    {
      img: "",
      title: "pepe",
      price: "lol",
    },
    {
      img: "",
      title: "pepe",
      price: "lol",
    },
    {
      img: "",
      title: "pepe",
      price: "lol",
    },
    {
      img: "",
      title: "pepe",
      price: "lol",
    },
    {
      img: "",
      title: "pepe",
      price: "lol",
    },
    {
      img: "",
      title: "pepe",
      price: "lol",
    },
  ];

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
          marginLeft: "10px",
          marginTop: "10px",
          position:"relative",
          justifyContent: "space-around",
        }}
      >
        <IconButton onClick={Back} style={{ border: "none",position:"absolute",left:"0px" }}>
          <ArrowBackIosNewIcon style={{ color: "#000000" }} />
        </IconButton>
        <div
          style={{
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: "24px",
            textAlign: "center",
            margin: "auto",
          }}
        >
          {" "}
          Cuenta
        </div>
      </div>

      <div
        style={{
          width: "100%",
          border: " 1px solid #B8B8B8",
          marginTop: "10px",
        }}
      ></div>

      <div  
        style={{ display: "flex", flexDirection: "column", overflowY: "auto" }}
      >
        {" "}
        {object.map((data, index) => (

          <div ><Card img={data.img} title={data.title} price={data.price} /></div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          position: "absolute",
          bottom: "10%",
          alignItems: "center",
          zIndex: 0,
          width: "100%",
        }}
      >
        <button
          style={{
            background: "#337F5B",

            borderRadius: "12px",
            width: "325px",
            height: "43px",
            margin: "auto",
            color: "#FFD062",
          }}
        >
          Pagar
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

function Card(props) {
  return (
    <div
      style={{
        display: "flex",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "13px",
        width: "90%",
        height: "57px",
        margin: "auto",

        marginTop: "15px",
      }}
      //   onClick={() => {
      //     props.lol(props.title);
      //   }}
    >
      <img
        src={props.img}
        style={{
          width: "57px",
          height: "57px",
          background: "#323232",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      />
      <div style={{ margin: "10px 0 0 20px" }}>
        <div
          style={{
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: "16px",
            color: "#000000",
          }}
        >
          {props.title}
        </div>
        <div
          style={{
            fontFamily: "Roboto",
            fontWeight: "400",
            fontSize: "14px",
            color: "#000000",
          }}
        >
          {props.price}
        </div>
      </div>
    </div>
  );
}

export default Cuenta;
