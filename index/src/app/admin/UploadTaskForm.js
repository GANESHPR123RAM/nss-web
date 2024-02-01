import React , {useState} from "react";
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { AdminActionType } from '../../redux/actions/type'
import { UploadTaskAction } from '../../redux/actions/AdminAction'

function UploadTaskForm({upload}) {

  
  const [taskState, setTaskState] = useState({})
  const history = useHistory()

  return (
    <div className="th-registration">
      <div className="row" style={{ paddingTop: "8rem" }}>
      
        <div class="th-register-col-1 col-md-4 offset-md-1 col-sm-8 offset-sm-2">
          <form class="p-3 registration-form"
            onSubmit = {(event) => {
              event.preventDefault();
              upload(taskState)
              
            }}
          >
            <div class="row justify-content-center">
              <div class="col-md-12 col-12 mb-4">
                <div className="th-form-group">
                  <input
                    type="text"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange = {(event) => {
                        const name = event.target.value;
                        setTaskState({...taskState, ...{ name }})
                    }}
                  />
                  <label>
                   Task Name 
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-6 mb-4">
                <div className="th-form-group">
                  <input
                    type="text"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange = {(event) => {
                      const description = event.target.value;
                      setTaskState({...taskState, ...{ description }})
                  }}
                  />
                  <label>
                    Description 
                  </label>
                </div>
              </div>
              <div class="col-md-6 col-6 mb-4">
                <div className="th-form-group">
                  <input
                    type="text"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange = {(event) => {
                      const totalPoints = event.target.value;
                      setTaskState({...taskState, ...{ totalPoints }})
                  }}
                  />
                  <label>
                    Total Points
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div className="th-form-group">
                <input
                  type="text"
                  className="th-form-control form-control"
                  id=""
                  name=""
                  onChange = {(event) => {
                    const eachPoints  = event.target.value;
                    setTaskState({...taskState, ...{ eachPoints }})
                }}
                  
                />
                <label>Each Points</label>
              </div>
            </div>
            <div class="row">
              <div className="th-form-group">
                <input
                  type="text"
                  className="th-form-control form-control"
                  id=""
                  name=""
                  onChange = {(event) => {
                    const issuedDate = event.target.value;
                    setTaskState({...taskState, ...{ issuedDate }})
                }}
                />
                <label>Issued Date</label>
              </div>
            </div>
            <div class="row">
              <div className="th-form-group">
                <input
                  type="text"
                  className="th-form-control form-control"
                  id=""
                  name=""
                  onChange = {(event) => {
                    const deadlineDate = event.target.value;
                    setTaskState({...taskState, ...{ deadlineDate }})
                }}
                />
                <label>Deadline Date</label>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-md-6 th-registration-btn-1" th-form-group>
                <button class="th-registration-btn-2 btn mt-4" type="submit">
                  Upload
                </button>
              </div>
            </div>
          </form>
        </div>
       
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  
  return {
    tasks : state.tasks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    upload : (taskState) => {
      dispatch(UploadTaskAction(taskState))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadTaskForm);