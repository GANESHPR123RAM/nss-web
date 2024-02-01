// import React, {useState} from 'react';

// import dropdown from './images/dropdown.svg'

// import './css/Dropdown.css'
// import EventList from './EventList';

// const data = [
//     {
//         name : 'Action Plan'
//     },{
//         name : 'Model United Nations'
//     // },{
//         name : 'Social conclave'
//     },{
//         name : 'Sociothon'
//     },{
//         name : 'Policy Case Competition'
//     },{
//         name : 'Innovision'
//     },{
//         name : 'Case Study'
//     },{
//         name : 'Workshop'
//     },{
//         name : 'Abhivyakti'
//     },{
//         name : 'TurnCoat'
//     },{
//         name : 'Treasure Hunt'
//     },{
//         name : 'Pre Summit Events'
//     }
// ]

// const Dropdown = () => {

//     const [open , setOpen] = useState(false)

//     return(
//         <div className='mobile-dropdown-container h-100'>
//             <div className='row h-100 d-flex justify-content-end'
//                     onClick={() =>{
//                         setOpen(!open)
//                     }}
//             >
//                 <div className='col-9 p-0 d-flex justify-content-center mobile-list-events'>
//                     List of Events
//                 </div>
//                 <div className='col-1  mobile-drop-icon'
                
//                     style={{
//                         padding : '0.3rem',
//                         backgroundImage : `url(${dropdown})`,
//                         backgroundSize:'contain',
//                         backgroundPosition : 'center',
//                         backgroundRepeat : 'no-repeat'
//                     }}
//                 ></div>

//             </div>
//             {
//                 open?(
//                     <div className='row mobile-events-list'>
                        
//                             <EventList events={data}/>
//                     </div>
//                 ):''
//             }
//         </div>
//     )
// }

// export default Dropdown