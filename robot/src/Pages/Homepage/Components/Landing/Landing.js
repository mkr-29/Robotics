import React from "react";
import "./Landing.css";
import Lorn1 from "./Assets/Lorn1.svg";
import Lorn2 from "./Assets/Lorn2.svg";
import Lorn3 from "./Assets/Lorn3.svg";
import Time from "./Time";

export default function Landing() {
  return (
    <div className="r-landing">
      <h1 className="r-landing-title">Robotics</h1>
      <div className="r-landing-ornaments">
        <img src={Lorn1} alt="Lorn1" className="l-orn"/>
        <img src={Lorn2} alt="Lorn2" className="l-orn"/>
        <img src={Lorn3} alt="Lorn3" className="l-orn"/>
      </div>
      <Time/>
    </div>
  );
}
