import React from "react";
import "./EventCard.css";
import Eorn4 from "./Assets/Eorn4.svg"
import Eorn5 from "./Assets/Eorn5.svg"

export default function EventCard(parse) {
  return (
    <div className="e-card">
      <img src={Eorn4} className="eorn4"/>
      <div className="e-texts">
        <img src={Eorn5} className="eorn5"/>
        <h3 className="e-name">{parse.ename}</h3>
        <p className="e-description">{parse.description}</p>
        <div className="e-details">
          <p className="e-date">
            <b>Date: </b>
            {parse.date}
          </p>
          <p className="e-time">
            <b>Time: </b>
            {parse.time}
          </p>
          <p className="e-venue">
            <b>Venue: </b>
            {parse.venue}
          </p>
        </div>
      </div>
      <img src={parse.img} className="e-img" />
    </div>
  );
}
