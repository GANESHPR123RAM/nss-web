import React , {useState} from "react";
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Header from "../layouts/header/index";

import { AuthActionType } from '../../redux/actions/type'
import { ProfileCompletionAction } from '../../redux/actions/AuthAction'

function ProfileCompletionForm({user, updateMe}) {

  
  const [userState, setUserState] = useState({})
  const history = useHistory()

  return (
    <>
    <Header/>
    <div className="th-registration">
      <div className="row" style={{ paddingTop: "8rem" }}>
        <div class="th-register-col-2-mobile col-md-7 col-sm-12 th-register-right-mobile mb-4">
          <div class="th-right-text-1">Hello {user.name}</div>
          <div class="th-right-text-2">
            
          Tell us about youself and start a journey with us...
          </div>
        </div>
        <div class="th-register-col-1 col-md-4 offset-md-1 col-sm-8 offset-sm-2">
          <form class="p-3 registration-form"
            onSubmit = {(event) => {
              event.preventDefault();
              updateMe(userState, history)
              
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
                        const college = event.target.value;
                        setUserState({...userState, ...{ college }})
                    }}
                  />
                  <label>
                    College 
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
                      const address = event.target.value;
                      setUserState({...userState, ...{ address }})
                  }}
                  />
                  <label>
                    Address 
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
                    const graduationYear = event.target.value;
                    setUserState({...userState, ...{ graduationYear }})
                }}
                />
                <label> Graduation Year</label>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-md-6 th-registration-btn-1" th-form-group>
                <button class="th-registration-btn-2 btn mt-4" type="submit">
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="th-register-col-2-web col-md-6 offset-md-1 col-sm-12 th-register-right-web">
          <div class="th-right-text-1">Hello {user.name}</div>
          <div class="th-right-text-2">
          Tell us about youself and start a journey with us...
           
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

const mapStateToProps = (state) => {
  
  return {
    user : state.authState.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMe : (userState, history) => {
      dispatch(ProfileCompletionAction(userState, history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCompletionForm);