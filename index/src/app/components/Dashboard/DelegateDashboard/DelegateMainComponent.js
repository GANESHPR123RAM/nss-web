import React from 'react';

import Profile from './Profile'
import Events from './Events';
import Updates from './Updates';
import Timeline from './Timeline';
import Payment from './Payment'

import '../Dashboardcss/MainComponent.css'

const DelegateMainComponent = ({selectedOption, options}) =>{

    let Comp;

    if(selectedOption === 0){
        Comp = <Profile></Profile>
    }
    else if(selectedOption === 1){
        Comp = <Events/>
    }
    else if(selectedOption === 2){
        Comp = <Updates/>
    }
    else if(selectedOption === 3){
        Comp = <Timeline/>
    }
    else if(selectedOption === 4){
        Comp = <Payment/>
    }

    

   return(
       <div className="main-component-container">
           
        {Comp}

       </div>
   )

}

export default DelegateMainComponent;