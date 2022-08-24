import React from "react";
import TrollFace from "./images/trollface.png";

const Header = () => {
  return (
    <div className="header--section">
      <img src={TrollFace} alt="" className="logo" />
      <p className="logo--text">Meme Generator</p>
      <p className="header--text">React Course - Project 3</p>
    </div>
  );
};

export default Header;
