import React from 'react'
import { Link } from "react-router-dom";
import "../css/EventCard.css";
import "../css/EventContent.css";

const NoperksEvent = ({
    image,
  name,
  description,
  rulebook,
  prizeWorth,
  id,
prob1,prob2,prob3,problink
}) => {
  return (
    <div className="eright-container">
      <div className="eright-header">
        <div className="rhl">
          <h1>{name}</h1>
          <p>11th Mar’23 - 12th Mar’23</p>
        </div>
        {/* <div className="rhr">Prize Worth : <span>{prizeWorth}</span> </div> */}
      </div>
      <div className="events-body">{description}</div>
      <div className="nperksandimg">
        <div className="nperks">
          <div className="prob-statements">

      <h1>Problem Statements</h1>
      <p> {prob1}</p>
      <p> {prob2}</p>
      <p> {prob3}</p>
      <a href={problink}> <button className="view-btn">View Details </button></a>
          </div>
          <Link to="/dashboard">
            {" "}
            <button className="register">Register</button>
          </Link>
          <button className="rulebook">
            {rulebook ? (
              <a
                href={rulebook}
                style={{ textDecoration: "none", fontSize: "14px" }}
                target="_blank"
              >
                RuleBook
              </a>
            ) : (
              ""
            )}
          </button>
        </div>
        <div className="eventsimg">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default NoperksEvent