import React from "react";
import Image1 from "../../assets/images/nss-logo.png";
import Image2 from "../../assets/images/coming-soon.png";
import Image3 from "../../assets/images/bg-signup.png";
import "../../assets/css/ComingSoon.css";
import Header from "../../layouts/header/index";

export const ComingSoon = () => {
  return (
    <>
    <Header/>
    <div className="th-comingsoon">
         <div className="row h-75" style={{ paddingTop: "8rem" }}>
        
    
         <div class="th-register-col-2 col-sm-6  th-register-right-mobile mb-4">
          <div class="th-right-text-2 ss-comingsoon-subheading"> COMING SOON</div>
         
        </div>
        
       
        <div class="th-register-col-1 col-sm-5">

            <img class="img-fluid" src={Image2} alt="illustration"></img>
        </div>

            
        
      </div>
      
        
    </div>
    </>

  );
};