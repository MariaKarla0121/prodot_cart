import React from "react";
import { useRef, useState, useEffect } from "react";

export default function Logo() {
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
    <div style={{display:"flex"}}>
      <form>
        <h2 style={{marginTop:"20px",fontWeight:"bold",fontSize:"18px"}}>Logotipo</h2>
        <div
          onClick={(event) => {
            event.preventDefault();
            fileInputRef.current.click();
          }}
          style={{
            marginLeft: "0px",
            marginTop: "10px",
            width: "100px",
            height: "100px",
            backgroundColor: " #C4C4C4",
            borderRadius: "20px",
            cursor: "pointer",
          }}
        >
          <img src={preview} style={{ objectFit: "cover" }} />
          <p
            style={{
              margin: "-85px 0 0 35px ",
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
      </form>
    </div>
  );
}
