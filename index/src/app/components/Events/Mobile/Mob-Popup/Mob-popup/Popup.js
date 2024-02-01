import React from 'react'
import "./popup.css"
import mun from "./assets/image 50.png"
import cross from "./assets/Vector.svg"

export default function MobPopup(props) {
  const {passFunction}=props;
  return (
    <>
    <div className="modal-overlay"  onClick={passFunction}></div>

    <div className="eventsmob-pop-up">
      <h1 className="eventsmob-pop-up-head">{props.title}</h1>
      <img src={cross} alt="close" className='eventsmob-pop-up-close' onClick={passFunction}/>
      <div className="eventsmob-pop-up-top">
        <div className='eventmob-pop-up-img'>
<img src={props.imgscc} alt='mun' className='eventmob-pop-up-img-view'></img>
<p className='eventsmob-pop-up-img-text'>11th-12th Feb</p>
</div>
<p className='eventsmob-pop-up-top-content'>{props.desc}</p>
      </div>
{/* <div className='eventsmob-pop-up-bottom'>
  <div className='eventsmob-pop-up-bottom-head'>Problem Statements</div>
  <p className='eventsmob-pop-up-bottom-content'>
1. Why Millets? : Millets were widely grown as fodder for out birds and animals until we realized its other health benefits.Over the last decade, the production of jowar has fallen, the production of pearl millet (bajra) has stagnated, and the production of other millets has stagnated or declined. How they can be a sustainable and economic source of nutrition in India.</p>

<p className='eventsmob-pop-up-bottom-content'>2. Empowering Women Entrepreneurs in Rural India : Women entrepreneurs in rural India face significant challenges in accessing resources,building networks, and scaling their businesses. This case study focuses on initiatives to empower women entrepreneursin rural India.</p>
  
</div> */}
< div className='eventsmob-pop-up-btns'>

  <button className="eventsmob-pop-up-btns-register">Register</button>


  <button className="eventsmob-pop-up-btns-rulebook" onClick={()=> window.open(props.ruleb)}>RuleBook</button>
</div>

</div>
    </>


    
  )
}
