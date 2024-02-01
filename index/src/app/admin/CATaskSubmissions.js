import React,{useState} from 'react';
import axios from 'axios'

const CATaskSubmissions = ({task, ca, onCloseClick}) => {

    const baseBackendLink = `https://api.socialsummit.iitr.ac.in`

    const [taskSubmissions, setTaskSubmissions] = useState([]);
    const [points, setPoints] = useState(0);
    const [approvedState, setApprovedState] = useState({ text : 'Approve'})
    const [rejectedState, setRejectedState] =useState({text :'Reject'})
    const [addPointsState, setAddPointsState] = useState({text : "Add Points"})
   
    React.useEffect(() => {
        axios.get(`/taskSubmission/${task._id}/${ca._id}`).then((response) => {
            console.log("hey")
            console.log(response.data)
          const taskSubmissions = response.data.data.data
          console.log(taskSubmissions)
          setTaskSubmissions(taskSubmissions)   
        });
        
      }, [ca, task]);

      const onSubmissionApprovedClick = async () => {
          console.log("submission approved", taskSubmissions[0])

          const response = await axios.patch(`/admin/statusOfCompletionUpdate/${taskSubmissions[0]._id}`, {
              "statusOfApproval" : "approved",
              "taskName": `${task.name}`
          })
          if(response.data.status === 'success'){
              setApprovedState({
                  text:"Approved"
              })
          }else{
            setApprovedState({
                text : "Failed"
            })
          }
         // console.log("here is the response", response.data)
      }

      const onSubmissionRejectedClick = async () => {
        console.log("submission rejected")
        const response = await axios.patch(`/admin/statusOfCompletionUpdate/${taskSubmissions[0]._id}`, {
            "statusOfCompletion" : "rejected",
            "taskName": `${task.name}`
        })

        if(response.data.status === 'success'){
            setRejectedState({
                text:"Rejected"
            })
        }else{
          setRejectedState({
              text : "Failed"
          })
        }
    }

    const onAddPoints = async () => {
        const myBody = {
            "points" : points
        }
        const updatedCA = await axios.patch(`/admin/updateCAPoints/${ca._id}`, myBody)
        if(updatedCA.data.status === 'success'){
            setAddPointsState({
                text : "Points Added"
            })
        }
        else {
            setAddPointsState({
                text : "Failed"
            })
        }
    }

    return(
        <div className='ca-task-submission-container'>
            {
                taskSubmissions.map((ele, index) => {
                    return(
                        <div className='task-submission-container' style={{
                            border : '0.2rem solid #663aa3',
                            margin : '1rem'
                        }}>
                            Submission - {index+1}
                            <div className='task-submission-status-of-approval'>
                                Status of Approval : {ele.statusOfApproval}
                            </div>
                            <div className='link-to-submitted-image'>
                                <div>
                                Facebook Upload : {
                                    (ele.facebookUpload) ? <a target="_blank" rel="noreferrer" href={`${baseBackendLink}/${ele.facebookUpload}`}>facebookUpload</a>:"Not Uploaded"
                                }
                                </div>
                                <div>
                                Instagram Upload : {
                                    (ele.instagramUpload) ? <a target="_blank" rel="noreferrer" href={`${baseBackendLink}/${ele.instagramUpload}`}>instagramUpload</a>:"Not Uploaded"
                                }
                                </div>
                                <div>
                                Whatsapp Upload : {
                                    (ele.whatsappUpload) ? <a target="_blank" rel="noreferrer" href={`${baseBackendLink}/${ele.whatsappUpload}`}>whatsappUpload</a>:"Not Uploaded"
                                }
                                </div>
                                <div>
                                Linkedin Upload : {
                                    (ele.linkedinUpload) ? <a target="_blank" rel="noreferrer" href={`${baseBackendLink}/${ele.linkedinUpload}`}>linkedinUpload</a>:"Not Uploaded"
                                }
                                </div>
                            </div>

                        </div>
                    )
                })
            }

            <div>
                <button className='approve-task-submissions-button' onClick={onSubmissionApprovedClick}>{approvedState.text} </button>
                <button className='reject-task-submissions-button' onClick={onSubmissionRejectedClick}> {rejectedState.text} </button>
            </div>
            <div className='points-input'>
            <div className="pt-5 th-form-group">
                  <input
                    type="number"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange={(event) => {
                      const points = event.target.value;
                      setPoints(points)
                    }}
                  />
                  <label>
                    Points
                  </label>
                  <div>
                    <button onClick={onAddPoints}> {addPointsState.text} </button>
                  </div>
            </div>
            </div>
            <div onClick={onCloseClick} style={{ height : '10%', cursor:"pointer"}}> Close </div>
        </div>
    )

}

export default CATaskSubmissions