import React from "react";
import EventCardRight from "./Right";
import Noperks from "./Noperks";

const EventCard = ({image, name, description, rulebook, prizeWorth, id, link1, link2, eventLink,perk1,perk2,perk3,perk4,perk5,prob1,prob2,prob3,problink}) => {
    return (
        <>
     {
      id==4 || id==5 || id==7 ? 
      <><Noperks 
      name={name}
      prob1={prob1}
      prob2={prob2}
      prob3={prob3}
      description={description}
      id={id}
      image ={image}
      rulebook={rulebook}
      prizeWorth={prizeWorth}
      link1={link1}
      link2={link2}
      eventLink={eventLink}
      perk1={perk1}
      perk2={perk2}
      perk3={perk3}
      perk4={perk4}
      perk5={perk5}
problink={problink}
   /></> 
                :

   <><EventCardRight 
   name={name}
   description={description}
   id={id}
   image ={image}
   rulebook={rulebook}
   prizeWorth={prizeWorth}
   link1={link1}
   link2={link2}
   eventLink={eventLink}
   perk1={perk1}
   perk2={perk2}
   perk3={perk3}
   perk4={perk4}
   perk5={perk5}
/></>   
     }
      </>
    )
}

export default EventCard