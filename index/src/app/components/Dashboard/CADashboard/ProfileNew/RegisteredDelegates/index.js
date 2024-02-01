import React, {useState} from "react";

import Entry from "./Entry";


import '../css/registeredDelegates.css';

import axios from 'axios'


function RegisteredDelegates()  {

  const [delegates, setDelegates] = useState([])

  React.useEffect(() => {
    axios.get(`/users/ca/getMyRegisteredDelegates`).then((response) => {
      const delegates = response.data.data.data
       
      setDelegates(delegates)
    
      
    });
   
    
     
  }, []);

    return (
      <div className="th-home-dashboard">
        <div className="th-home-dashboard-header">
          <div>
            Names
          </div>
          <div>
            Payment Status
          </div>
        </div>
        <div className="th-home-dashboard-body">
          {delegates.map((ele, index) => {
            return (<Entry key={index} status={ele.paymentStatus} name={ele.name} />)
          })}
          </div>
      </div>
        
    );
  
}

export default RegisteredDelegates;
