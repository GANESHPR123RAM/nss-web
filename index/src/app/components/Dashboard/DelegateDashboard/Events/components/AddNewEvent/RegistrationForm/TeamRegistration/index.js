import React,{useState} from "react";

import IndividualRegistration from "../IndividualRegistration";
import Details from "./Details";

import '../css/teamRegistration.css'

// slr se bntaa hai yeh

const TeamRegistrationForm = ({leader, members, event, appendTeamMembers, setLeader, removeTeamMember, removeLeader, changeTeamName}) => {

  
  
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
    
    }
    appendTeamMembers(member)
  
}

  return (
    <div className="team-registration-container">
      <div className="row team-name-row" style={{height : '10%'}}>
        <div className="col-8">
        <div className="input-form-field">
            <label>
                   Team Name
                    
                  </label>
                  <input
                    type="text"
                    className="th-form-control my-form-control"
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
      <div className="add-participant-component d-flex" style={{height : '90%'}}>
          <div className="col-5" style={{padding : '0.7rem'}}><Details removeLeader={removeLeader} removeTeamMember={removeTeamMember} leader={leader} members={members} handleAdd={handleAdd} /></div>
          {show?<div className="col-7"><IndividualRegistration addTeamMember={addTeamMember} isTeamMember={true} isLeader={isLeader}/></div>:null}
      </div>

    </div>
  );
};

export default TeamRegistrationForm;
