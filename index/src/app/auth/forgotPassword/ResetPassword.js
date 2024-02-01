import React, { useState } from "react";
import { useParams } from 'react-router-dom'
import axios from 'axios';


const ResetPassword = () => {



   const [resetPasswordState, setResetPasswordState] = useState({});
   const {resetToken} = useParams();
   const [buttonState, setButtonState] = useState({ text :"Reset Password", color : "#ffffff", backgroundColor :"#663AA3"})

   

   const onSubmit = async () => {

        console.log("reset Token is", resetToken)
        console.log("new password is", resetPasswordState.password)
       const reqObject = {
           "password" : resetPasswordState.password
       }
       const response = await axios.patch(`/users/resetPassword/${resetToken}`, reqObject)
       if(response.data.status === 'success'){
        const text = "Password Reset!";
        const backgroundColor="#3aa36b"
        setButtonState({...buttonState,  ...{text , backgroundColor}})
      }else{
        const text = "Try Again Later!";
        const backgroundColor="#a64138"
        setButtonState({...buttonState,  ...{text , backgroundColor}})
      }
   }


  return (
    <div className="th-login">
      <div className="row login" style={{ paddingTop: "8rem" }}>
        <div class="th-register-col-2 col-md-5 offset-md-1 col-sm-12 th-register-right-mobile mb-4">
          <div class="th-right-text-1">Reset Password</div>

        </div>
        <div class="th-register-col-1 col-md-4 offset-md-1 col-sm-8 offset-sm-2">
          <form class="p-5 registration-form"
            onSubmit = {(event) => {
              event.preventDefault();
                onSubmit()
            }}
          >

            <div class="row">
            <label>New Password</label>
              <div className="th-form-group mb-4">

                <input
                  type="text"
                  className=" p-3 th-form-control form-control flex"
                  id=""
                  name=""
                  onChange={(event) => {
                    const password = event.target.value;
                    setResetPasswordState({...resetPasswordState, ...{password}})
                  }}
                />

              </div>
            </div>
            <div class="row" >
            <label >Confirm Password</label>
              <div className="th-form-group">

                <input
                  type="text"
                  className="p-3 th-form-control form-control flex"
                  id=""
                  name=""
                  onChange={(event) => {
                    const confirmPassword = event.target.value;
                    setResetPasswordState({...resetPasswordState, ...{confirmPassword}})
                  }}
                />

              </div>
            </div>
            <div className="row pb-4">
              <div
                className="col-md-6 th-registration-btn-1 pb-5"
                th-form-group
              >
                <button class="th-registration-btn-2 btn mt-4" type="submit" style={{ color : `${buttonState.color}`, backgroundColor:`${buttonState.backgroundColor}` }}>
                  {buttonState.text}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}




export default ResetPassword