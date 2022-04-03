import { Margin } from "@mui/icons-material";
import React from "react";
import Accordion_Platos from "../Components/Accordion_Platos";

const Platos = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div style={{display:"flex",flexDirection:"column", margin: "15px 80px 0 80px" }}>
      <div style={{
              color: "#000000",

              fontWeight: "700",
              fontSize: "24px",
            }}>Platos</div>
      <div style={{marginTop:"20px",overflowY:"auto"}}>
        <Accordion_Platos />
      </div>
      <button  style={{
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
              fontWeight:"700",
              marginBottom:"50px"
            
            }}>+ Add Platos</button>

    </div>
  );
};

export default Platos;
