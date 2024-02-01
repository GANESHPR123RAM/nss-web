import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <div className="cardimg">
        <img className="cimg" src={props.src} alt="" />
      </div>
      <div className="cardinfo">
        <h5>{props.heading}</h5>
        <p>{props.description}</p>
        {/* <p id='p2'>Price Worth:<span>{props.price}</span></p> */}
      </div>
      <div className="hoverbox">
        <button className="btns" id="hoverbtn1">
          <a className="Rlink2" href="https://socialsummit.iitr.ac.in/signup">
            Register
          </a>
        </button>
        <button className="btns" id="hoverbtn2">
          <a className="Rlink2" href={props.rulebook} target="_blank">
            Rulebook
          </a>
        </button>
        {/* <a href="">Know More</a> */}
        {/* <button  id="hoverbtn3">Know More</button> */}
      </div>
    </div>
  );
}

export default Card;
