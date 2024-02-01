import React from 'react';
import './registeredevents.css'

const RegisteredEventCard = ({ele, index, onUnregisterClick}) => {
    return(
        <div className="mobile-EventType"
        style={{
          width : '100%'
        }}
      >
        <div>
            <div className="mobile-event-name">{ele.eventName}</div>
            <div className="mobile-event-date">{ele.eventInfo}</div></div>
        <div className="mobile-event-links">
          
          <div className="mobile-event-resources">
            Resources
          </div>
          <div className="mobile-event-unregister"
              onClick={()=>onUnregisterClick(index)}
          >Unregister</div>
          </div>
         
        </div>
    )
}

export default RegisteredEventCard