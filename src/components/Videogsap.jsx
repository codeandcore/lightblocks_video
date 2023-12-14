import React, { useEffect, useRef, useState } from "react";
import logo from '../assets/images/Eoracle.svg'

export default function Videogsap({ videoSrc }) {
  
  return (
    <div className="top_banner">
      <a href="/" className="logo" >
        <img src={logo} alt="" />
      </a>
      <div className="wrapper">
        <div className="banner_content" >
          <h2>
            Decentralized oraclesecured by restaked ETH.Connecting
            blockchainwith real world data.
          </h2>
          <div className="wrap_button">
            <button className="btn become_btn">Become a Validator</button>
            <button className="btn see_data_btn">See Data</button>
          </div>
        </div>
      </div>
      <div className="video-container">
        <video id="v0" preload="preload" autoPlay muted loop playsInline>
          <source
            type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            src={videoSrc}
          ></source>
        </video>
      </div>
    </div>
  );
}

