import React, { useState } from 'react';


const initialLenguaje = "es";
const transitions ={
    es:{

    },
    en:{}
}
const Lenguaje = () => {
    const [lenguaje, setLenguaje] = useState(initialLenguaje);
  return (
      <div style={{marginTop:"15px"}}>
          <select>
              <option value="es">ES</option>
              <option value="en">EN</option>
          </select>
      </div>
  );
};

export default Lenguaje;
