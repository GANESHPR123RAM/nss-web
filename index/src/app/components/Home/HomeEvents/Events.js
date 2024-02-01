import React , {useState} from 'react'
import "./Events.css"
import casestudy from './images/image49.png'
import nukkadnatak from './images/image51.png'
import mun from './images/image50.png'
import Casestudy from './CaseStudy/Casestudy'
import MUN from './MUN/MUN'
import Nukkadnatak from './Nukkadnatak/Nukkadnatak'
import {Link} from 'react-router-dom';

export default function Events() {

  const [modal1 , setmodal1] = useState(false)
  const [modal2 , setmodal2] = useState(false)
  const [modal3 , setmodal3] = useState(false)


  const togglemodal1 = () =>{
    setmodal1(!modal1)
  }

  const togglemodal2 = ()=>{
    setmodal2(!modal2)
  }

  const togglemodal3 = ()=>{
    setmodal3(!modal3)
  }

  return (
    <div className='events-pop-up'>
      <div className='events-pop-up-heading'>
      <h1>Events </h1>  
      <Link to="../../events"><button className="sebutton">View All</button></Link>
      </div>
      <div className="events-pop-up-cards">
        <div className="events-pop-up-cards-1">
          <div className="events-pop-up-cards-1-content-1">
            <img src={casestudy} alt='case study' className='events-pop-up-cards-1-img'></img>
            <span className='events-pop-up-cards-1-topic'>Case Study</span>
          </div>
          <div className="events-pop-up-cards-1-btns">
            <button className="events-pop-up-cards-1-btns-register">Register</button>
            <button className="events-pop-up-cards-1-btns-details" onClick={togglemodal1}>Details</button>
          </div>
        </div>

        <div className="events-pop-up-cards-2">
          <div className="events-pop-up-cards-2-content-2">
            <img src={mun} alt='case study' className='events-pop-up-cards-1-img'></img>
            <span className='events-pop-up-cards-2-topic'>model united nations</span>
          </div>
          <div className="events-pop-up-cards-2-btns">
            <button className="events-pop-up-cards-2-btns-register">Register</button>
            <button className="events-pop-up-cards-2-btns-details" onClick={togglemodal2}>Details</button>
          </div>
        </div>

        <div className="events-pop-up-cards-3">
          <div className="events-pop-up-cards-3-content-3">
            <img src={nukkadnatak} alt='case study' className='events-pop-up-cards-1-img'></img>
            <span className='events-pop-up-cards-3-topic'>nukkad natak</span>
          </div>
          <div className="events-pop-up-cards-3-btns">
            <button className="events-pop-up-cards-3-btns-register">Register</button>
            <button className="events-pop-up-cards-3-btns-details" onClick={togglemodal3}>Details</button>
          </div>
        </div>

{modal1 && (
  <Casestudy passfunction = {togglemodal1}></Casestudy>
)}

{modal2 && (
  <MUN passfunction = {togglemodal2}></MUN>
)}

{modal3 && (
  <Nukkadnatak passfunction = {togglemodal3}></Nukkadnatak>
)}

        
      </div>
    
    
    </div>
    
  )
  
}
