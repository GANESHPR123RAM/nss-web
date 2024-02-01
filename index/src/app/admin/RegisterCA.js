import React , {useState} from "react";
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";

import axios from 'axios'



function RegisterCAForm() {

  
  const [userState, setUserState] = useState()
  const history = useHistory()

  const RegisterCA = async () => {
      //console.log(userState);
      const {data} = await axios.post("/admin/registerCA", userState).then((e)=>{
        alert('CA created successfully');
        window.location = "/admin/registerCA"
      });
  }
 
  return (
    <div className="th-registration">
      <div className="row" style={{ paddingTop: "8rem" }}>
       
        <div class="th-register-col-1 col-md-4 offset-md-1 col-sm-8 offset-sm-2">
          <form class="p-3 registration-form"
            onSubmit = { async (event) => {
              event.preventDefault();
             
              await RegisterCA()
              
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
                        setUserState({...userState, ...{ name }})
                    }}
                  />
                  <label>
                    Name <span className="th-required-span">*</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <div class="col-md-12 col-12 mb-4">
                <div className="th-form-group">
                  <input
                    type="text"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange = {(event) => {
                        const summitID = event.target.value;
                        setUserState({...userState, ...{ summitID }})
                    }}
                  />
                  <label>
                    SummitID <span className="th-required-span">*</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-6 mb-4">
                <div className="th-form-group">
                  <input
                    type="email"
                    className="th-form-control form-control"
                    id=""
                    name=""
                    onChange = {(event) => {
                      const email = event.target.value;
                      setUserState({...userState, ...{ email }})
                  }}
                  />
                  <label>
                    Email-ID <span className="th-required-span">*</span>
                  </label>
                </div>
              </div>
              <div class="col-md-6 col-6 mb-4">
                <div className="th-form-group">
                  <input
                    type="text"
                    className="th-form-control form-control"
                    id=""
                    maxLength={20}
                    name=""
                    onChange = {(event) => {
                      const contactNumber = event.target.value;
                      setUserState({...userState, ...{ contactNumber }})
                  }}
                  />
                  <label>
                    Phone No. <span className="th-required-span">*</span>
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
                    const password = event.target.value;
                    setUserState({...userState, ...{ password }})
                }}
                />
                <label>Create Password</label>
              </div>
            </div>
            <div className="row pb-4">
              <div className="col-md-6 th-registration-btn-1" th-form-group>
                <button class="th-registration-btn-2 btn mt-4" type="submit">
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
       
      </div>
    </div>
  );
}



export default RegisterCAForm;