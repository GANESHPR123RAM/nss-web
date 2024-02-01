import React,{useState} from 'react';
import "../css/individualRegistration.css"
import Cross from '../images/participantFormCross.svg'

const IndividualRegistration = ({isTeamMember, isLeader, addTeamMember, setParticipantDetails}) => {

    const [show, setShow] = useState(true)

    const [participant, setParticipant] = useState({
      isLeader : isLeader
    })

    const handleDoneClick = () => {

      
      if(isTeamMember){
        addTeamMember(participant)
      }  
      else{
        setParticipantDetails(participant)
      }
      setShow(!show)
    }

    return (

      show?(<div className='mobile-single-participant-form' style={{height : '20rem', width :`100%`}}>
      <div className='row d-flex justify-content-end'
          style={{height :'5%'}}
      >
        <div className='mobile-cross-icon'
              style={{
                width : '10%',
                height : '100%',
                backgroundImage : `url(${Cross})`,
                backgroundSize:'contain',
                backgroundPosition : 'center',
                backgroundRepeat:'no-repeat'
              }}
              onClick={()=>setShow(!show)}
        ></div>
      </div>
        <div className="mobile-input-form-field">
          <label>
                  Name
                  
                </label>
                <input
                  type="text"
                  className="th-form-control mobile-my-form-control"
                  id=""
                  name=""
                  onChange={(event) => {
                    const name = event.target.value
                    setParticipant({...participant, name})
                  }}
                />
               
              </div>

              <div className="mobile-input-form-field">
                <label>
                      Summit ID
                      
                </label>
                <input
                  type="text"
                  className="th-form-control mobile-my-form-control"
                  id=""
                  name=""
                  onChange={(event) => {
                    const summitID = event.target.value
                    setParticipant({...participant, summitID})
                  }}
                />
               
              </div>
              <div className="mobile-input-form-field">
                <label>
                      Contact Number
                      
                </label>
                <input
                  type="text"
                  className="th-form-control mobile-my-form-control"
                  id=""
                  name=""
                  onChange={(event) => {
                    const contactNumber = event.target.value
                    setParticipant({...participant, contactNumber})
                  }}
                />
               
              </div>
              <div className='mobile-submit-button-row row d-flex justify-content-center'
                    style={{
                      width : '30%',
                      padding : '0.5rem',
                      margin:'0.5rem'
                    }}
                    onClick = {handleDoneClick}
              >
                <button>Done</button>

              </div>
        

    </div>):null

 /*       <div>
           <div className="TeamInfoRight">
          <div className="InputFormRight">
            <div className="InputFormName">Name</div>
            <input className="FormInput" />
          </div>
          <div className="InputFormRight">
            <div className="InputFormName">Summit ID</div>
            <input className="FormInput" />
          </div>
          <div className="InputFormRight">
            <div className="InputFormName">Contact Number</div>
            <input className="FormInput" />
          </div>
          <div>
            <button className="DoneButton">Done</button>
          </div>
        </div>
        </div>*/
    )
}

export default IndividualRegistration