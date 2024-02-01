import React from "react";


function Entry(props) {
  return (
    <div className="th-home-event-card">

        <div className="event-illustration"
          style={{
            height : '80%',
            width : '16rem',
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


    </div>
  );
}

export default Entry;