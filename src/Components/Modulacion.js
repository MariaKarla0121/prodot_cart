import { TextField } from "@mui/material";
import React from "react";
import { useRef, useState, useEffect } from "react";
export default function Modulacion() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };

      reader.readAsDataURL(image);
    } else {
    }
  }, [image]);

  return (
    <div style={{ display: "flex" }}>
      <form>
        <h2
          style={{
            marginTop: "5px",
            fontFamily: "Roboto",
            fontSize: "15px",
            fontWeight: "bold",
          }}
        >
          Cambiar foto
        </h2>
        <div
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
          style={{
            marginLeft: "0px",
            marginTop: "10px",
            width: "90px",
            height: "100px",
            backgroundColor: " #C4C4C4",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          <img
            src={preview}
            style={{
              width: "100px",
              objectFit: "cover",
              height: "100px",
              borderRadius: "20px",
              border:"none",
              cursor: "pointer",
            }}
          />
          <p
            style={{
              margin: "-85px 0 0 30px ",
              fontSize: "50px",
              color: "white",

            }}
          >
            +
          </p>
        </div>

        <input
          type="file"
          style={{ display: "none" }}
          ref={fileInputRef}
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files[0];
            if (file && file.type.substring(0, 5) === "image") {
              setImage(file);
            } else {
              setImage(null);
            }
          }}
        />
        <p
          style={{
            fontFamily: "Roboto",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "10px",
            lineHeight: " 12px",
            marginTop: "10px",
            color: "#000000",
          }}
        >
          Escogera la foto que se <br />
          ajuste al producto
        </p>
      </form>

      <div style={{display:"flex",flexDirection:"column",margin:"auto",padding:"20px",justifyContent:"space-around"}}>
        <p>Nombre del Producto</p>
        <input placeholder="Batido de frutas"></input>

        <p>Descripcion</p>
        <TextField multiline rows={3} defaultValue="Default Value" />
      </div>
    </div>
  );
}
