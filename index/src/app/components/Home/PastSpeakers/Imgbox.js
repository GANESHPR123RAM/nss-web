import React from 'react'
import "./Imgbox.css"

function Imgbox(props) {
  return (
    <div  className='img-container' >
      <img className='timgs' src={props.src} alt="" />
      <div className="info">
        <div className="contents">
        <h5>{props.heading}</h5>
        {/* <p>{props.desc}</p> */}
        </div> 
      </div>

    </div>
  )
}

export default Imgbox

