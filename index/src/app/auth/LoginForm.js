import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";
import nsslogin from "../assets/images/nsslogin1.png";
import { LoginAuthAction } from '../../redux/actions/AuthAction'
import Header from "../layouts/header/index";

function LoginForm(props) {

  const {login} = props;
 const [user,setUser]=useState(false);
  const [loginState, setLoginState] = useState({});
  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
<>
<Header/>
    <div className="th-login" id="maindiv1">
      <div className="login" id="mainlogdiv" style={{ paddingTop: "8rem" }}>  
        <div class="th-register-col-2  th-register-right-mobile  login_img ">
          <img src={nsslogin} id="nsslogin1" alt="img" />
        </div>
        
        <div class="th-register-col-1 colmarg pad-left col-sm-8">

          <form class="p-5 registration-form"
            onSubmit = {(event) => {
              event.preventDefault();
              console.log(loginState)
              login(loginState, history)
            }}
          >
        <div id="logintxthead1">Log In</div>
        <div id="loginlinehead"></div>
        
            <div class="row">
              <div class="col-md-12 mb-4">
                <div className="pt-5 th-form-group" id="emailinput">
                  <input
                    type="email"
                    required
                    className="th-form-control form-control"
                    id=""
                    name=""    
                    onChange={(event) => {
                      const email = event.target.value;
                      setLoginState({...loginState,  ...{email}})
                    }}
                  />
                  <label className="logintxthead">
                    <span className="th-required-span star1">*</span>
                    Email-ID
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div className="th-form-group" id="passwordinput">
                <input
                required
                  type={passwordShown ? "text" : "password"}  
                  className="th-form-control form-control flex"
                  id=""
                  name=""
                  onChange={(event) => {
                    const password = event.target.value;
                    setLoginState({...loginState,  ...{password}})
                  }}
                />
                  <label className="logintxthead">
                    <span className="th-required-span star1">*</span>
                    Password
                  </label>
              </div>
            </div>
            <div className="row pb-4">
            <Link to="/forgotPassword" id="forgotpass" className="th-right-link">
                    Forgot your Password?
                  </Link>
              <div
                className="col-md-6  pb-5" id="loginbtn"
                th-form-group
              >
                <button class="th-registration-btn-2 btn mt-4" type="submit">
                  Log in
                </button>
              </div>
              <div id="regnow">
              
              <div id="regtxt1"><div id="black1">Don't have an account?</div> <Link to="/signup" className="th-right-link">Register</Link></div>
            </div>
            </div>
          </form>
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
    login : (loginState, history) => {
      dispatch(LoginAuthAction(loginState, history))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);