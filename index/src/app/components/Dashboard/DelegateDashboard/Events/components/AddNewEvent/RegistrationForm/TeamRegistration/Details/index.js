import React from 'react';
import SingleMemberComponent from './SingleMemberComponent';
import AddMemberComponent from './AddMemberComponent';

import './css/details.css'

const Details = ({handleAdd, leader, members, removeTeamMember, removeLeader}) => {

    React.useEffect(()=>{
        console.log("re rendering")
    }, [leader, members])

    const onAddLeaderClick =()=>{handleAdd(true)}
    const onAddParticipantClick = ()=>{ handleAdd(false)}

   

    
    return(
        <div className='team-details-container'>
            <div className="row team-details-leader-component" style={{ margin : '0 1rem 0.9rem 1rem'}}>
                <div className='row participant-header'>Leader</div>
                
                <div className='row participant-list'>
                    {leader.summitID ? <SingleMemberComponent name={leader.name} remove={removeLeader}></SingleMemberComponent>: 
                    <div onClick={onAddLeaderClick}>
                 <AddMemberComponent name="Add Leader"></AddMemberComponent>
                 </div>}
                </div>
            </div>
            <div className="row team-details-participant-component" style={{ margin : '0 1rem 0 1rem'}}>
                <div className='row participant-header'>Participants</div>
                    <div className='row participant-list'>

                        {
                            members.map((ele, index)=>{
                                if(!ele.isLeader)
                                return(
                                    <SingleMemberComponent name={ele.name} index={index} remove={removeTeamMember}></SingleMemberComponent>
                                )
                                else return null;
                            })
                        }
                        
                        
                        <div
                            onClick={onAddParticipantClick}
                        >
                            <AddMemberComponent name="Add Participant"/>
                        </div>
                    </div>
            </div>
           
        </div>
    )
}

export default Details