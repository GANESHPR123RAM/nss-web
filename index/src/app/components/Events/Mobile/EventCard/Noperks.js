import React from 'react'
import '../css/EventCard.css'
import { Link } from 'react-router-dom'

const Noperks = (
    {image, name, description, rulebook, prizeWorth, id, link1, eventLink,perk1,perk2,perk3,perk4,perk5,prob1,prob2
    ,prob3,problink
    }
) => {
  return (
    <div className="mright-container">
    <div className="mright-header">
      <div className="em-img">
        <img src={image} alt="" />
      </div>
      <div className="mrhl"><h1>{name}
        </h1>
        <p>11th Mar’23 - 12th Mar’23</p></div>
    </div>
    <div className="mevents-body">
    {description}
    </div>
    <div className="mperksandimg">
    <div className="mperks">
    <h1><b>Problem Statements</b> </h1>
      <p> {prob1}</p>
      <p> {prob2}</p>
      <p> {prob3}</p>
      <a href={problink}> <button className="view-btn">View Details </button></a>
      {/* <div className="mrhr">Prize Worth : <span>{prizeWorth}</span> </div> */}
      <Link to="/dashboard"> <button className="register" >  
        Register
      </button></Link>
      <button  className="rulebook">
        {
          rulebook ? 
          <a href={rulebook} style={{textDecoration :"none" , fontSize :"14px" } }>RuleBook</a> 
          :
          "" 
        }
      </button>
    </div>
    {/* <img src={actionimg} alt="" /> */}
    </div>
  </div>
  )
}

export default Noperks