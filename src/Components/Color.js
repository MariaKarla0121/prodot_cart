import React from "react";

const Color = ({ value, onChange, ...rest }) => {
  return (
    <span
      style={{
        display: "flex",
        alignItems: "center",
        width: "150px",
        padding: "4px 12px",
        border: "1px solid #bfc9d9",
        borderRadius: "4px",
      }}
    >
      <input
       style={{border:"none",width:"100%",fontSize:"13px",color:"#000000"}}
        type="text"
        value={value}
        onChange={onChange}
        {...rest}
      />
      <input
       style={{border:"none",background:"none",height:"24px",width:"29px",padding:0,borderRadius:"4px"}}
        type="color"
        value={value}
        onChange={onChange}
        {...rest}
      />
    </span>
  );
};

export default Color;
