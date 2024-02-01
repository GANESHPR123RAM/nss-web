import React,{useState} from 'react';
import ChooseEvent from './ChooseEvent';
import RegistrationForm from './RegistrationForm';

import axios from 'axios'

const AddNewEvent = () => {

    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [eventsList, setEventsList] = useState([]);

    const [participant, setParticipant] = useState({});
    const [teamMembers, setTeamMembers] = useState([]);
    const [teamLeader, setTeamLeader] = useState({});
    const [teamName, setTeamName] = useState('');
    
    const [registeredClass, setRegisteredClass] = useState('not-registered');
    const [errClass, setErr] = useState(false) 

    React.useEffect(() => {

        axios.get("/eventRegistrations/getMyEventRegistrations").then((response) => {
            const registeredEvents = response.data.data.data
            const regEventsIds = registeredEvents.map((ele) => ele.event)
           
            axios.get("/events").then((response) => {
             
                const events = response.data.data.data
                const eventsList = events.filter((ele)=> {
                   
                    return !(regEventsIds.includes(ele._id))
                })
               
                setEventsList(eventsList)
                
            });
        });       
        
      }, [registeredClass]);


    const onClickRegister = async () => {
        console.log("events on click register", eventsList[selectedIndex] )
        if(eventsList[selectedIndex].isTeamEvent){
            
            const registerObject = {
                event : eventsList[selectedIndex]._id,
                eventName : eventsList[selectedIndex].name,
                eventInfo : eventsList[selectedIndex].info,
                members : teamMembers,
                leader : teamLeader,
                teamName 
            }
            const teamFormed =await axios.post("/teams", registerObject);
            if(teamFormed.data.status === 'success'){
                console.log("hey")
                setRegisteredClass('successfully-registered')
                setErr(false)
            }
            else{
                setRegisteredClass('not-registered')
                setErr(true)
            }
        }
        else{
            
            const registerObject = {
                event : eventsList[selectedIndex]._id,
                eventName : eventsList[selectedIndex].name,
                eventInfo : eventsList[selectedIndex].info,
            }
            const what = await axios.post("/eventRegistrations", registerObject)
            console.log("im now gere", what)
            if(what.data.status === 'success'){
                console.log("hey")
                setRegisteredClass('successfully-registered')
                setErr(false)
            }
            else{
                setRegisteredClass('not-registered')
                setErr(true)
            }

        }
        
        setSelectedIndex(-1)

      
    }

    const setParticipantDetails = (details) => {
        setParticipant(details)
    }

    const removeTeamMember = (index) => {
        const newMembers = teamMembers.filter((ele, i) => index!==i )
        console.log("now new members", newMembers);
        setTeamMembers(newMembers)
    }

    const removeLeader = () =>{
        console.log("leader removed")
        setTeamLeader({})
        const newMembers = teamMembers.filter((ele, i) => !ele.isLeader )
        console.log("now new members", newMembers);
        setTeamMembers(newMembers)
    }

    const appendTeamMembers = (member) => {
        setTeamMembers((teamMembers)=>[...teamMembers, member])
    } 

    const setLeader = (leader) => {
        setTeamLeader(leader)
    }

    const changeTeamName= (name) => {
        setTeamName(name)
    }


      const handleSelectChange = (index) => {
          setSelectedIndex(index)
          setRegisteredClass('not-registered')
      }

    

    return (
        <div className='row add-new-event-container'>
            <div className='col-4 choose-event'>
                <ChooseEvent registeredClass={registeredClass} errClass={errClass} eventsList={eventsList} handleSelectChange={handleSelectChange} onClickRegister={onClickRegister} />
            </div>
            <div className='col-8 event-specific-registration-form h-100'>
                <RegistrationForm removeTeamMember={removeTeamMember} removeLeader={removeLeader} eventsList={eventsList} selectedIndex={selectedIndex} setParticipantDetails={setParticipantDetails}  appendTeamMembers={appendTeamMembers} setLeader={setLeader} changeTeamName={changeTeamName} leader={teamLeader} members={teamMembers} />
            </div>
        </div>
    )
}

export default AddNewEvent;