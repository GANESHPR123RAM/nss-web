import React from "react";

import './css/SubEventsList.css'

function Entry(props) {


  return (
    <div className="th-Sociothon-content" >
      <div className="th-Sociothon-content1">
        {props.title}
      </div>
      <div className="line"></div>
        <div className="th-Sociothon-content2">
          <p>{props.content}</p>
        </div>
        <div className="th-event-sociothon-top1-links">
          <a href="https://socialsummit.iitr.ac.in/dashboard" target="_blank" rel="noreferrer">Register &gt; </a>{props.rulebook?<a href={props.rulebook} target="_blank" rel="noreferrer" >Resources &gt;</a>:null}
          </div>
     </div>
   
  );
}

export default Entry;