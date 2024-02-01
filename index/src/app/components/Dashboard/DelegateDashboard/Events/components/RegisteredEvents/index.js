import React,{useState} from "react";
import axios from 'axios'
import "./registeredevents.css";

import RegisteredEventCard from "./RegisteredEventCard";


const RegisteredEvents = () => {

  const [registeredEventsList, setRegisteredEventsList] = useState([])
  const [deleted, setDeleted] = useState(false)

  React.useEffect(() => {
    axios.get("/eventRegistrations/getMyEventRegistrations").then((response) => {
        const events = response.data.data.data

       

        setRegisteredEventsList(events)
     
    });
    
  }, [deleted]);



  const onUnregisterClick = async (index) => {
  
    await axios.delete(`/eventRegistrations/${registeredEventsList[index]._id}`)
    setDeleted(!deleted)
  }

  return (
    <div className="CardsWrapper" style={{width : '100%'}}>
      <div className="EventCards">
        {registeredEventsList.map((ele, index) => {
          return (
          <RegisteredEventCard key={ index} ele={ele} index={index} onUnregisterClick={onUnregisterClick} />
          );
        })}
      </div>
      
    </div>
  );
};

export default RegisteredEvents;
