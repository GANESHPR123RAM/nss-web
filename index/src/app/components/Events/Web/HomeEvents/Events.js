import React , {useState} from 'react'
import "./EventsPagePOP.css"
import casestudy from './images/image49.png'
import nukkadnatak from './images/image51.png'
import mun from './images/image50.png'
import CommonCard from './Common-Card/CommonEvent'
import EventsData from "./EventData"
import Card from './Card'


export default function Events() {

  // const [modal1 , setmodal1] = useState(false)
  // const [modal2 , setmodal2] = useState(false)
  // const [modal3 , setmodal3] = useState(false)


  // const togglemodal1 = () =>{
  //   setmodal1(!modal1)
  // }

  // const togglemodal2 = ()=>{
  //   setmodal2(!modal2)
  // }

  // const togglemodal3 = ()=>{
  //   setmodal3(!modal3)
  // }

const [modal , setmodal] = useState(false)

const togglemodal = () =>{
  setmodal(!modal)
}

  return (
    <div className='eve-page-eventspage-pop-up'>
      <div className='eve-page-events-pop-up-heading'>
        Events
      </div>
      <div className='eve-page-events-pop-up-cards'>

        {
          EventsData.map( (val , index) => {
            return(
              <>
              <Card title={val.title} imgscc={val.imgsrc} passFunction={togglemodal} description={val.description} rulebook={val.rulebook}/>
              </>
              )
          })



        }

</div>
    
    
    </div>
        



        
     
    
  )
  
}
