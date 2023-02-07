import React from "react";
import "./EventCard.css";

export default function EventCard(parse) {
  return (
    <div className="e-card">
      <div className="e-texts">
        <h3 className="e-name">{parse.ename}</h3>
        <p className="e-description">{parse.description}</p>
      </div>
      <img src={parse.img} className="e-img"/>
    </div>
  );
}
