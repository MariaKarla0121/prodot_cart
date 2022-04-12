/*eslint-disable*/
import { Backdrop, Fade, IconButton, Modal, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, margin } from "@mui/system";
import MainContext from "../context/main/mainContext";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Carta_First = (props) => {
  const [state, dispatch] = useContext(MainContext);
  const [info, setInfo] = useState({});

  const [show, setShow] = useState(false);


  const Back = () => {
    dispatch({
      type: "UPDATE_STEP",
      payload: 0,
    });
  };

  const Desplegar=(info)=>{
    console.log(info);
    setInfo(info),
    setTimeout(() => {
      setShow(true)
    }, 100);
  }

  const Count = () => {
    dispatch({
      type: "UPDATE_STEP",
      payload: 2,
    });
  };

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
          justifyContent: "space-around",
        }}
      >
        <IconButton onClick={Back} style={{ border: "none" }}>
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
          {state.title}
         { console.log(state)}
          
        </div>
        <div
          style={{
            fontFamily: "Roboto",
            fontWeight: "700",
            fontSize: "18px",
            textAlign: "center",
            marginRight: "20px",
          }}
        >
          ESP
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
          <div>
            {console.log(data)}
            <Card proce={Desplegar} data={data} img={data.img} title={data.title} price={data.price} />
          </div>
        ))}
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
          onClick={Count}
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={show}
        onClose={()=>{setShow(false)}}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={show}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal>
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
        onClick={() => {
           props.proce(props.data);
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

export default Carta_First;
