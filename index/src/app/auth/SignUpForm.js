import React , {useState} from "react";
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import nsslogin from "../assets/images/nsslogin1.png";
import { AuthActionType } from '../../redux/actions/type'
import { SignupAuthAction } from '../../redux/actions/AuthAction'
import Header from "../layouts/header/index";

function SignUpForm({user, signup}) {
  const [userState, setUserState] = useState({})
  const [cPassword,setCPassword] = useState();
  const history = useHistory()
  const checkFields = ()=>{
   if(userState.name==undefined) alert('enter name')
  }
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <>
    <Header/>
      <div className="regmaindiv" style={{ paddingTop: "8rem" }}>
        <div id="leftregdiv">
        <img src={nsslogin} id="regimg" alt="img" />
        </div>
        <div class=" th-register-right-web" id="rightregdiv">
        <form class=" registration-form"
            onSubmit = {(event) => {
              event.preventDefault();
              signup(userState, history)
              
            }}
          >
        <div id="regtxthead1">Register</div>
        <div id="loginlinehead" class="regline"></div>
            <div >
              <div id="namephone">
                <div className="th-form-group">
                  <input
                    required
                    type="text"
                    className="th-form-control1 form-control"
                    id=""
                    name=""
                    onChange = {(event) => {
                        const name = event.target.value;
                        setUserState({...userState, ...{ name }})
                    }}
                  />
                  <label>
                  <span className="th-required-span star1">*</span>
                    Name 
                  </label>
                </div>
                <div className="th-form-group">
                  <input
                    required
                    type="text"
                    className="th-form-control1 form-control"
                    id=""
                    maxLength={20}
                    name=""
                    onChange = {(event) => {
                      const contactNumber = event.target.value;
                      setUserState({...userState, ...{ contactNumber }})
                  }}
                  />
                  <label>
                  <span className="th-required-span star1">*</span>
                    Phone No. 
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div  id="namephone">
                <div className="th-form-group">
                  <input
                  required
                    type="email"
                    className="th-form-control1 form-control"
                    id=""
                    name=""
                    onChange = {(event) => {
                      const email = event.target.value;
                      setUserState({...userState, ...{ email }})
                  }}
                  />
                  <label>
                  <span className="th-required-span star1">*</span>
                    Email-ID
                  </label>
                </div>
      
              <div className="th-form-group">
                <input
              
                  type="text"
                  className="th-form-control1 form-control"
                  id=""
                  name=""
                  onChange = {(event) => {
                    const referenceCAid = event.target.value;
                    setUserState({...userState, ...{ referenceCAid }})
                }}
                  
                />
                <label>Reference CA-ID (if any)</label>
              </div>
            </div>
            </div>
            <div class="row">
            <div className="th-form-group">
              <input
              required
                type= "text" 
                className="th-form-control1 form-control"
                id=""
                name=""
                onChange = {(event) => {
                  const college = event.target.value;
                  setUserState({...userState, ...{ college }})
              }}
              />
              <label><span className="th-required-span star1">*</span>College/Institute</label>
            </div>
          </div>
            <div class="row">
              <div className="th-form-group">
                <input
                required
                  type={passwordShown ? "text" : "password"}
                  className="th-form-control1 form-control"
                  id=""
                  name=""
                  onChange = {(event) => {
                    const password = event.target.value;
                    setUserState({...userState, ...{ password }})
                }}
                />
                <label><span className="th-required-span star1">*</span>Create Password</label>
              </div>
            </div>
            <div class="row">
              <div className="th-form-group">
                <input
                required
                  type={passwordShown ? "text" : "password"}  
                  className="th-form-control1 form-control"
                  id=""
                  name=""
                  onChange = {(event) => {
                    const confirmPassword = event.target.value;
                    setCPassword(confirmPassword)
                }}
                />
                <label><span className="th-required-span star1">*</span>Confirm Password</label>
              </div>
            </div>
            <div >
              <div className="colqq th-registration-btn-1" th-form-group>
                {
                  cPassword == userState.password?<button class="th-registration-btn-2 " id="regbtn" onclick={checkFields} type="submit" >
                  Register
                </button>:<button class="th-registration-btn-2 " id="regbtn" style={{"opacity":"0.6"}} disabled>
                  Register
                </button>
                }
                
              </div>
            </div>
          </form>
          <div class="th-right-text-2" id="regtxt">
            Already a member?{" "}
            <Link to="/login" className="th-right-link">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  
  return {
    user : state.authState,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup : (userState, history) => {
      dispatch(SignupAuthAction(userState, history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);