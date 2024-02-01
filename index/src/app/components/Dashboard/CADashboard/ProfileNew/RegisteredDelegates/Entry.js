import React from "react";
import '../css/registeredDelegates.css'

function Entry(props) {
  let customStyle={
    color:"#444444"
  }
  if(props.status === "Done")
  {
    customStyle.color="green"
  }
  return (
    <>
      
      <div className="th-home-dashboard-card">
        
          <div className="th-home-dashboard-cardname"><div className="dot"></div><div>{props.name}</div></div>
          <div style={customStyle}>{props.status}</div>
      
      
      </div>
      <div className="line"></div>
    </>
  );
}

export default Entry;