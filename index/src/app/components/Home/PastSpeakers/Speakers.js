// import React from 'react'
// import "./Speakers.css"
// import Imgbox from "./Imgbox"

// import img1 from "./images/image 5189.png"
// import img2 from "./images/image 5190 (1).png"
// import img3 from "./images/image 5199 (1).png"
// import img4 from "./images/image 5198 (1).png"

// function Speakers() {
  
//   return (
//     <div className='speaker-container'>
//         <div className="speakercontent">
//             <h2 className='hd'>Past <br /> Speakers</h2>
//             <h2  id='mobhd'>Past Speakers</h2>
            
//             <button id='speakrbtn' className='btn3'>
//               <a className='plink' href="https://socialsummit.iitr.ac.in/speakers">See More</a>
//             </button>
//         </div>
        
//         <div className="imgbox2">
//                 <Imgbox
//                 heading="Shri. Pushkar Singh Dhami"
//                 src={img3}
//                 />
//                 <Imgbox
//                 heading="Sonam Wangchuk"
//                 src={img4}
//                 />
//                 <Imgbox
//                 heading="DEVENDRA JHAJHARIA"
//                 // desc="daal do kuch bhi"
//                 src={img1}
//                 />

//                 <Imgbox 
//                 heading="Dr. RODERICO H. OFRIN"
//                 // desc="daal do kuch bhi"
//                 src={img2}
//                 />
                
                

//             </div>
//       <button className='mobsprbtn btn3' >
//         <a className='plink' href="https://socialsummit.iitr.ac.in/speakers">See More</a>
//       </button>
      
//     </div>
//   )
// }

// export default Speakers
import React from 'react'
import "./Speakers.css"
import img from './images/pushkarbw.png';
import imgc from './images/pushkarcl.png';
import img1 from './images/ashneerbw.png';
import imgc1 from './images/ashneercl.png';
import img2 from './images/kiranbedibw.png';
import imgc2 from './images/kiranbedicl.png';
import { useState } from 'react';

import {Link} from 'react-router-dom';



function Speakers() {
  const [image,setimage]=useState(img);
  const onHover = () => {
    setimage(imgc);
  }
  const offHover = () => {
    setimage(img);
  }
  const [image1,setimage1]=useState(img1);
  const onHover1 = () => {
    setimage1(imgc1);
  }
  const offHover1 = () => {
    setimage1(img1);
  }
  const [image2,setimage2]=useState(img2);
  const onHover2 = () => {
    setimage2(imgc2);
  }
  const offHover2 = () => {
    setimage2(img2);
  }
  return (
    <div className="speakersbox">
      <div className="sbox1">
        <p className="scontent">Know Our Past Speakers</p>

        <Link to="../../speakers"><button className="sbutton">View All</button></Link>

      </div>
      <div className="sbox2">
        <div className="spimg1">
          <img
            src={image}
            onMouseEnter={onHover}
            onMouseLeave={offHover}
            className="puimg1">
          </img>
        </div>
        <div className="spimg2">
        <img
            src={image1}
            onMouseEnter={onHover1}
            onMouseLeave={offHover1}
            className="puimg2">
          </img>
        </div>
        <div className="spimg3">
        <img
            src={image2}
            onMouseEnter={onHover2}
            onMouseLeave={offHover2}
            className="puimg3">
          </img>
        </div>
      </div>
    </div>
  )
}

export default Speakers