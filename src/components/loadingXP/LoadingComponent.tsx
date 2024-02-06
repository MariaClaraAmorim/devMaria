import React from "react";
import "./styles.css";

import Microsoft from "../../../public/assets/microsoft.png";
const LoadingComponent: React.FC = () => {
  return (
    <div className="startupScreen">
      <div className="startupLoaderWrapper">
        <div className="logo">
          <img className="home_img" src={Microsoft} alt="Windows logo" />
        </div>
        <div className="load">
          <div className="box"></div>
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      <div className="startupFooter">
        <span className="copyright">
          Copyright &copy; Mircosoft Corporation
        </span>
        Microsoft
      </div>
    </div>
  );
};

export default LoadingComponent;
