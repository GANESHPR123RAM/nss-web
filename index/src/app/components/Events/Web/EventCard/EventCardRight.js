import React from "react";
import { Link } from "react-router-dom";
// import actionimg from '..//images/action plan.png'
import "../css/EventCard.css";
import "../css/EventContent.css";

const EventCardRight = ({
  image,
  name,
  description,
  rulebook,
  prizeWorth,
  id,
  link1,
  link2,
  eventLink,
  perk1,
  perk2,
  perk3,
  perk4,
  perk5,
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
      <div className="perksandimg">
        <div className="perks">
          <h1>Perks</h1>
          <ul>
            <li>{perk1}</li>

            <li>{perk2}</li>
            <li>{perk3}</li>
            <li>{perk4}</li>
            <li>{perk5}</li>
          </ul>
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
  );
};

export default EventCardRight;
// <div className="single-event-container">
//     <div className="row h-100">
//     <div className="col-9 content-container">
//     <div className="row" style={{ height : '5%'}}></div>
//     <div className="row h-25 single-event-heading-right d-flex justify-content-end"> {name}</div>
//         <div className="row h-25"></div>
//         <div className="row h-75"></div>
//         <div className="row h-75 single-event-description-right">
//             <div className="row h-75 description-content">
//                 {description}
//                 <div> <Link to={`/events/${eventLink}`} className="link-text">Click here</Link> to know more about the events. </div>

//             </div>
//             <div className="row h-25 description-prizes">
//                 <div className="col-6 rulebook">{
//                     rulebook?
//                     <a href={rulebook}  target="_blank" rel="noreferrer">Rulebook</a>:''
//                 }</div>
//                 {prizeWorth?
//                 <div className="col-6 prize-worth d-flex justify-content-end">
//                 Prize Worth :
//                 <span className="amount">{prizeWorth}</span>
//             </div>:''}
//             </div>
//         </div>
//     </div>
//     <div className="col-3 image-container"
//         style={{
//             backgroundImage : `url(${image})`,
//             backgroundSize : 'cover',
//             backgroundPosition : 'center',
//             backgroundRepeat : 'no-repeat'
//         }}
//     >

//     </div>

//     </div>
// </div>
