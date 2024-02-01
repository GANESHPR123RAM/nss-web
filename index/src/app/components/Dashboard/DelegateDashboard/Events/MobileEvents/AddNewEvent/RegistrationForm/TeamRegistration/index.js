import React,{useState} from "react";

import IndividualRegistration from "../IndividualRegistration";
import Details from "./Details";

import '../css/teamRegistration.css'

// slr se bntaa hai yeh

const TeamRegistrationForm = ({ leader, members, event, appendTeamMembers, removeTeamMember, removeLeader, setLeader, changeTeamName}) => {

  
 
  const [show, setShow] = useState(false)
  const [isLeader, setIsLeader] = useState(false)

  React.useEffect(()=>{
    console.log("re rendering")
}, [leader, members])

  
  const handleAdd = (isLeader) => {
    setIsLeader(isLeader)  
    setShow(!show)
  }

  const addTeamMember = (member) => {
    
    if(isLeader){
      setLeader(member)
     // setTeamLeader(member)
    }
    appendTeamMembers(member)
    //setTeamMembers((members)=> [...members, member])
    
}

  return (
    <div className="mobile-team-registration-container">
      <div className="row mobile-team-name-row" style={{height : '10%'}}>
        <div className="col-12">
        <div className="mobile-input-form-field">
            <label>
                   Team Name
                    
                  </label>
                  <input
                    type="text"
                    className="th-form-control mobile-my-form-control"
                    id=""
                    name=""
                    onChange={(event) => {
                      const teamName = event.target.value
                      changeTeamName(teamName)
                    }}
                  />
                 
                </div> 
        </div>
      </div>
      <div className="mobile-add-participant-component" style={{height : '90%'}}>
          <div className="col-12" style={{padding : '0.7rem'}}><Details leader={leader} members={members} handleAdd={handleAdd} removeTeamMember={removeTeamMember} removeLeader={removeLeader} /></div>
          {show?<div className="col-12"><IndividualRegistration addTeamMember={addTeamMember} isTeamMember={true} isLeader={isLeader}/></div>:null}
      </div>

    </div>
  );
};

export default TeamRegistrationForm;
