import React from "react";

import "../styles/Speaker.css";

function Speaker(props) {
   return (
     <div className="speaker"  >
      <img src={props.image} className="img"  style={{ order: props.id % 2 == 1 ? 0 : 1 }}/> 
      <div className="imgdot1">
        <img src={props.imagedot} className="dot1" />
      </div>
      
      <div className="right" >
        <div className="title">
          <h1 style={{textAlign:"left"}}>
            {props.name}
          </h1>
          <p >
            {props.post}
          </p>
        </div>
        <div className="paraSpeaker" >
             <p>{props.descp}</p>  
        </div>
      </div>
      <div className="imgdot2">
        <img src={props.imagedot1} className="dot2" />
      </div>
     </div>
   );
 }
 
 export default Speaker;

// export default function Main(props) {
//     return (
      
//        <div className="main">
//          <div className="memo">
//           <h1>{props.title}</h1>
//           </div> 
               
            
//              <div className="sp1">
//                 <div className="img1">
//                    <img src={img1} />
//                 </div>
//                 <div className="con1"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
//              <div className="sp2">
//                 <div className="img2">
//                    <img src={img2} />
//                 </div>
//                 <div className="con2"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
//              <div className="sp3">
//                 <div className="img3">
//                    <img src={img3} />
//                 </div>
//                 <div className="con3"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
//              <div className="sp4">
//                 <div className="img4">
//                    <img src={img4} />
//                 </div>
//                 <div className="con4"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
//              <div className="sp5">
//                 <div className="img5">
//                    <img src={img5} />
//                 </div>
//                 <div className="con5"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
//              <div className="sp6">
//                 <div className="img6">
//                    <img src={img6} />
//                 </div>
//                 <div className="con6"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore quaerat earum labore fugit vero beatae eligendi excepturi quisquam rerum molestias!</p></div>
//              </div>
             
             

//           </div>
//     );
//   }

