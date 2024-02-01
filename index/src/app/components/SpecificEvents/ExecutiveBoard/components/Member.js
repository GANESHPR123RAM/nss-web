import React from "react";

import "./Member.css";

function Member(props) {
  return (
    <div className="memberCard">
      <div className="memberImage">
        <img src={props.image} alt="" />
      </div>
      <div className="name">
        <h1>{props.name}</h1>
      </div>
      <div className="position">
        <h1>{props.position}</h1>
      </div>
      <div className="description">
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Member;
