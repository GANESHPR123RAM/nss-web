import React from "react";

import "..//styles//Speakersmob.css";

function Speakermob(props) {
   return (
     <div className="speakerm">
        <div className="imgboxm">
            <div className="imgm">
                <img src={props.image} alt="" className="imagem" />
            </div>
            <div className="headm">
                <h1 >
                    {props.name}
                </h1>
                <p>
                    {props.post}
                </p>
            </div>
        </div>
        <div className="dot1m">
            <img src={props.imagedot} alt="" className="imgdot1m" />
        </div>
        <div className="contentm">
            <p>
                {props.descp}
            </p>
        </div>
        <div className="dot2m">
        <img src={props.imagedot1} alt="" className="imgdot2m" />
        </div>
     </div>
   );
 }
 
 export default Speakermob;