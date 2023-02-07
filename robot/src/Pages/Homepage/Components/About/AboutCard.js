import React from "react";
import "./AboutCard.css";
import Aorn2 from "./Assets/Aorn2.svg";
import Aorn3 from "./Assets/Aorn3.svg";

export default function AboutCard(parse) {
  return (
    <div className="ab-card">
      <div className="abcard-1">
        <span className="abc-text">{parse.text}</span>
        <div className="abc-images">
          <img src={parse.img1} className="abc-img1" />
          <img src={parse.img2} className="abc-img2" />
          <div className="abc-ornaments">
            <img src={Aorn2} id="aorn2" />
            <img src={Aorn3} id="aorn3" />
          </div>
        </div>
      </div>

      <div className="abcard-2">
        <span className="abc-text">{parse.text}</span>
        <div className="abc-images">
          <img src={parse.img1} className="abc-img1" />
          <img src={parse.img2} className="abc-img2" />
          <div className="abc-ornaments">
            <img src={Aorn2} id="aorn2" />
            <img src={Aorn3} id="aorn3" />
          </div>
        </div>
      </div>
    </div>
  );
}
