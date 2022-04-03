import React from "react";
import { CgFacebook } from "react-icons/cg";
import { FiInstagram } from "react-icons/fi";
import { ImTwitter } from "react-icons/im";
import { ImWhatsapp } from "react-icons/im";
const Info = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "30px",
      }}
    >
      <div className="face_inst">
        <div style={{ display: "flex" }}>
          <CgFacebook
            style={{
              width: "30px",
              height: "36px",
              paddingBottom: "10px",
              marginRight: "20px",
            }}
          />

          <input
            style={{
              paddingLeft: "15px",
              fontFamily: "Roboto",
              fontSize: "15px",
              width: "250px",
              height: "30px",
              border: " 1px solid #000000",
              boxSizing: "border-box",
            }}
            placeholder="RestauranteName"
          ></input>
        </div>

        <div style={{ display: "flex", marginTop: "10px" }}>
          <FiInstagram
            style={{ width: "30px", height: "30px", marginRight: "20px" }}
          />

          <input
            style={{
              paddingLeft: "15px",
              fontFamily: "Roboto",
              fontSize: "15px",
              width: "250px",
              height: "30px",
              border: " 1px solid #000000",
              boxSizing: "border-box",
            }}
            placeholder="RestauranteName"
          />
        </div>
      </div>
      <div className="twitt_what">
        <div style={{ display: "flex" }}>
          <ImTwitter
            style={{ width: "30px", height: "30px", marginRight: "20px" }}
          />
          <input
            style={{
              paddingLeft: "15px",
              fontFamily: "Roboto",
              fontSize: "15px",
              width: "250px",
              height: "30px",
              border: " 1px solid #000000",
              boxSizing: "border-box",
            }}
            placeholder="RestauranteName"
          />
        </div>
        <div style={{ display: "flex", marginTop: "15px" }}>
          <ImWhatsapp
            style={{ width: "30px", height: "30px", marginRight: "20px" }}
          />
          <input
            style={{
              paddingLeft: "15px",
              fontFamily: "Roboto",
              fontSize: "15px",
              width: "250px",
              height: "30px",
              border: " 1px solid #000000",
              boxSizing: "border-box",
            }}
            placeholder="RestauranteName"
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
