import React from "react";
import "./Appdownload.css";
import { assets } from "../../assets/assets";
const Appdownload = () => {
  return (
    <div className="app-download" id="app-download">
      <p>
        for better exprience Download <br /> Tomatto App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default Appdownload;
