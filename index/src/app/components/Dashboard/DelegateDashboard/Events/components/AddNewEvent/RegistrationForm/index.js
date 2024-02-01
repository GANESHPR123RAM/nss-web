import React from 'react';
import IndividualRegistration from './IndividualRegistration';
import TeamRegistrationForm from './TeamRegistration';

const RegistrationForm = ({leader, members, eventsList, selectedIndex, setParticipantDetails, appendTeamMembers, setLeader, changeTeamName, removeTeamMember, removeLeader}) => {
    
    React.useEffect(()=>{
        console.log("re rendering")
    }, [leader, members])


    return (
        <div className='event-registration-form-container'>
            {
                (selectedIndex === -1) ? null : (
                    eventsList.length?
                       ( (eventsList[selectedIndex].isTeamEvent) ? 
                       <TeamRegistrationForm removeLeader={removeLeader} removeTeamMember={removeTeamMember} event={eventsList[selectedIndex]} appendTeamMembers={appendTeamMembers} setLeader={setLeader} changeTeamName={changeTeamName} leader={leader} members={members} />:
                       <IndividualRegistration event={eventsList[selectedIndex]} isLeader={false} isTeamMember={false} setParticipantDetails={setParticipantDetails} />):null
                )
            }

        </div>
    )
}

export default RegistrationForm