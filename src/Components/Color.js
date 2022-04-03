import React from "react";



const Color = ({ value, onChange, ...rest }) => {
  return (
    <span style={{display:"flex",alignItems:"center",width:"150px",padding:"4px 12px",border:"1px solid #bfc9d9",borderRadius:"4px"}}>
         <input
        className="tet"
        type="text"
        value={value}
        onChange={onChange}
        {...rest}
      />
      <input
        className="color"
        type="color"
        value={value}
        onChange={onChange}
        {...rest}
      />

     
    </span>
  );
};

export default Color;
