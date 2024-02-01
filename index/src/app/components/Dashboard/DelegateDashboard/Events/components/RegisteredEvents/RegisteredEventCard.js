import React from 'react';
import './registeredevents.css'

const RegisteredEventCard = ({ele, index, onUnregisterClick}) => {
    return(
        <div className="EventType"
        style={{
          width : '100%'
        }}
      >
        <div>
            <div className="event-name">{ele.eventName}</div>
            <div className="event-date">{ele.eventInfo}</div></div>
        <div className="event-links">
          
          <div className="event-resources">
            Resources
          </div>
          <div className="event-unregister"
              onClick={()=>onUnregisterClick(index)}
          >Unregister</div>
          </div>
         
        </div>
    )
}

export default RegisteredEventCard