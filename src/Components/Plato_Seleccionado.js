import React, { useState } from "react";
import Seleccion from "../Components/Seleccion";

const Plato_Seleccionado = () => {
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState({});

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
  ];

  const mostrarModal = (x) => {
    setInfo(x);
    console.log("helouuu");
    setTimeout(() => {
      setShow(true);
    }, 100);
  };

  return (
    <div className="gen">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
          alignContent: "flex-start",
        }}
      >
        {object.map((data, index) => (
          <Card
            img={data.img}
            title={data.title}
            price={data.price}
            lol={mostrarModal}
          />
        ))}
      </div>
      {show && (
        <Seleccion
          close={() => {
            setShow(false);
          }}
        />
      )}
    </div>
  );
};

function Card(props) {
  return (
    <div
      style={{
        display: "flex",
        boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "13px",
        width: "40%",
        height: "57px",
      }}
      onClick={() => {
        props.lol(props.title);
      }}
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
      <div style={{ margin: "1rem" }}>
        <h2
          style={{ fontFamily: "Roboto", fontSize: "16px", fontWeight: "bold" }}
        >
          {props.title}
        </h2>
        <h3
          style={{ fontFamily: "Roboto", fontSize: "14px", fontWeight: "bold" }}
        >
          {props.price}
        </h3>
      </div>
    </div>
  );
}
export default Plato_Seleccionado;
