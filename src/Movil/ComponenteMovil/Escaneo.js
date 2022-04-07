/*eslint-disable*/
import React, { useEffect, useState } from "react";
import {QrReader} from "react-qr-reader";
import { Redirect } from "react-router";

// import QrReader from 'react-qr-scanner'

const Test = () => {
  const [res, setRes] = useState(null);
  const [shot, setShot] = useState(false);
  const [errorMesa, setErrorMesa] = useState(false);
  const [cliente, setCliente] = useState();

  const red = (idCliente) => {
    window.location.href = `http://localhost:3001/inicio/${idCliente}`;
  };
  console.log(res, "respuesta QR");
  useEffect(() => {
    res === null
      ? true
      : api.AddCliente(parseInt(res)).then((respuesta) => {
          console.log(respuesta.data, "este");
          if (respuesta.data === -1) {
            setErrorMesa(true);
          } else {
            red(parseInt(respuesta.data));
          }
        });
  }, [res]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setErrorMesa(true);
  //   }, 3000);
  //   console.log("asdasdasdasdasdsaasdasdasd");
  // }, []);
  useEffect(() => {
    errorMesa && alert("La mesa no está disponible");
  }, [errorMesa]);
  const handleScan = (data) => {
    setRes(data);
  };
  const handleError = (err) => {
    console.error(err);
  };

  // const previewStyle = {
  //   height: 240,
  //   width: 320,
  // }

  return (
    <div>
      <QrReader
        delay={300}
        style={{ width: "100%" }}
        onError={handleError}
        onScan={handleScan}
      />

      {/* {errorMesa && (() => alert("La mesa no está disponible"))} */}
      {/* <p style={{backgroundColor:"red", width:"40px",height:"20px",margin:"200px"}}>{res}</p> */}
    </div>
  );
};

export default Test;
