import React, { useState } from "react";
import "./Sdropdown.css";
import Sorn3 from "./Assets/Sorn3.svg";

export default function Sdropdown(parse) {
  const [isOpen1, setIsOpen1] = useState(false);

  const onClickEvent1 = () => {
    setIsOpen1(!isOpen1);
  };

  const [isOpen2, setIsOpen2] = useState(false);

  const onClickEvent2 = () => {
    setIsOpen2(!isOpen2);
  };
  return (
    <div>
      <div
        className={`schedule-wrapper-1 ${
          isOpen1 ? "schedule-wrapper-1-active" : ""
        } `}
      >
        <div className="schedule-heading">
          <div className="schedule-heading-titlebox" onClick={onClickEvent1}>
            <div className="date-time">
              {parse.date} <br></br> <span>{parse.month}</span>
            </div>
            <div className="schedule-heading-m">{parse.ename}</div>
            <div className="more-options-m">
              <div className="more-option-show">
                <img src={Sorn3} alt="" className="sorn3" />
              </div>
              <div className="more-option-hide"></div>
            </div>
          </div>

          <div className="list">
            <div className="list-item">{parse.event1}</div>

            <div className="line-schedule" />

            <div className="list-item">{parse.event2}</div>
            <div className="line-schedule" />

            <div className="list-item">{parse.event3}</div>
            <div className="line-schedule" />
            <div className="list-item">{parse.event4}</div>

            {/* <hr></hr>

            <div className="list-item">
              {parse.event5}
            </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
}
