import React,{useState} from 'react'
import "./EventsPagePOP.css"
import CommonCard from './Common-Card/CommonEvent'
import EventData from './EventData'
import MobPopup from '../../Mobile/Mob-Popup/Mob-popup/Popup'
import { useWidthAndHeight } from "../../../../../hooks/useWidthAndHeight";


export default function Card(props) {
const [modal , setmodal] = useState(false)
const [width] = useWidthAndHeight();
const togglemodal = () =>{
  setmodal(!modal)
}
  return (
    <>
    <div className="eve-page-events-pop-up-cards-2">
    <div className="eve-page-events-pop-up-cards-2-content-2">
      <img src={props.imgscc} alt='case study' className='eve-page-events-pop-up-cards-2-img'></img>
      <span className='eve-page-events-pop-up-cards-2-topic'>{props.title}</span>
    </div>
    <div className="eve-page-events-pop-up-cards-2-btns">
      <button className="eve-page-events-pop-up-cards-2-btns-register">Register</button>
      <button className="eve-page-events-pop-up-cards-2-btns-details " onClick={togglemodal}>Details</button>


    </div>
  </div>
  {modal && (
  (width > 1150) ? (
    <CommonCard title={props.title} imgscc={props.imgscc} passFunction={togglemodal} desc={props.description} ruleb={props.rulebook}/>
  ) : (
    <MobPopup title={props.title} imgscc={props.imgscc} passFunction={togglemodal} desc={props.description} ruleb={props.rulebook}/>
  )
)}

    </>

  )
}
