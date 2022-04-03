import React, { useState } from "react";
import MesaSeleccionada from "../Components/MesaSeleccionada";
import Mesa_propety from "../Components/Mesa_propety";

const Mesa = () => {
  const [first, setFirst] = useState(true);
  const [data, setData] = useState("nada");
  const [mesa, setMesa] = useState([
    {
      id: 1,
      mesa: "Mesa 1",
      qr: "",
      ca: 5,
      cuenta: "3570MN",
    },
    {
      id: 2,
      mesa: "Mesa 2",
      qr: "",
      ca: 2,
      cuenta: "7500MN",
    },
    {
      id: 3,
      mesa: "Mesa 3",
      qr: "",
      ca: 4,
      cuenta: "11250MN",
    },
    {
      id: 4,
      mesa: "Mesa 4",
      qr: "",
      ca: 8,
      cuenta: "2250MN",
    },
    {
      id: 5,
      mesa: "Mesa 5",
      qr: "",
      ca: 0,
      cuenta: "850MN",
    },
    {
      id: 6,
      mesa: "Mesa 6",
      qr: "",
      ca: 3,
      cuenta: "3570MN",
    },
  ]);

  const handleData = (id) => {
    console.log("aquitallegando");
    setData(`Mesa${id}`);
    setFirst(false);
  };

  return (
    <>
      {first ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "15px 80px 0 80px",
          }}
        >
          <div
            style={{
              color: "#000000",

              fontWeight: "700",
              fontSize: "24px",
            }}
          >
            {" "}
            Mesas
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "20px",
              color: "#000000",
              fontWeight: "700",
              fontSize: "18px",
            }}
          >
            <div>No. Mesas</div>
            <div>Cod. QR</div>
            <div>Clientes Activos</div>
            <div>Cuenta</div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "10px",
            }}
          >
            {mesa.map((mesa, index) => (
              <div
                onClick={() => {
                  handleData(1);
                }}
              >
                <Mesa_propety
                  key={mesa.id}
                  mesa={mesa.mesa}
                  qr={mesa.qr}
                  ca={mesa.ca}
                  cuenta={mesa.cuenta}
                />
              </div>
            ))}
          </div>

          <div
            style={{
              width: "100%",
              marginTop: "30px",
              border: "1px solid #337F5B",
            }}
          ></div>
          <button
            style={{
              width: "30%",
              height: "45px",
              display: "flex",
              justifyContent: "center",
              margin: "auto",
              marginTop: "30px",
              background: "#FFD062",
              color: "#337F5B",
              borderRadius: "14px",
              paddingTop: "10px",
            }}
          >
            + Add Mesa
          </button>
        </div>
      ) : (
        <MesaSeleccionada style={{ cursor: "pointer" }} info={data} />
      )}
    </>
  );
};

export default Mesa;
