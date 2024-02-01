import React from "react";


function Entry(props) {
  return (
    <div className="th-home-event-card">
      <a href={`https://socialsummit.iitr.ac.in/events/${props.eventLink}`} target="_blank" rel="noreferrer" >
      <div className="event-illustration"
          style={{
            height : '80%',
            width : '16rem',
            borderRadius:'40%',
            backgroundImage : `url(${props.image})`,
            backgroundSize : 'contain',
            backgroundPosition : 'center',
            backgroundRepeat:'no-repeat'
            
          }}
        ></div>
        <div className="event-card-name"
          style={{
            height : '20%'
          }}
        >
          {props.name}
        </div>
      </a>

        


    </div>
  );
}

export default Entry;