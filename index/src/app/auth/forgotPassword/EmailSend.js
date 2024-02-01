import React, { useState } from "react";
import axios from 'axios'



const EmailSend = () => {



   const [email, setEmail] = useState();
   const [buttonState, setButtonState] = useState({text :"Send Email" , color : "#ffffff", backgroundColor :"#663AA3"})

   const onSubmit = async () => {
       
    const reqObject = {
        "email" : email
    }

    const response = await axios.post("/auth/forgotPassword", reqObject)
    console.log(response)
    if(response.data.status === 'success'){
      const text = "Email Sent!";
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
      <div className="login" id="forgotpasslog" style={{ paddingTop: "8rem" }}>
        <div class="th-register-col-2 col-md-5 th-register-right-mobile">
          <div class="th-right-text-1">Forgot Password ?</div>

        </div>
        <div class="th-register-col-1 col-md-6 offset-md-1 col-sm-8 offset-sm-2">
          <form class="p-3 registration-form"
            onSubmit = {(event) => {
              event.preventDefault();
                onSubmit()
            }}
          >

            <div class="row">
              <div class="col-md-12 mb-4">
                <div className="pt-5 th-form-group">
                  <input
                    type="email"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange={(event) => {
                      const email = event.target.value;
                        setEmail(email)
                    }}
                  />
                  <label>
                    Enter your e-mail id to receive a password reset link.
                    <span className="th-required-span">*</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="row pb-4">
              <div
                className="col-md-6 th-registration-btn-1 pb-5"
                th-form-group
              >
                <button class="th-registration-btn-2 btn mt-4" type="submit" style={{ color : `${buttonState.color}`, backgroundColor:" #FD652D;" }}>
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




export default EmailSend