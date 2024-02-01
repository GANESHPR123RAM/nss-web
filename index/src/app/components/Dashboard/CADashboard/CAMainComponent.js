import React from 'react';

import Profile from './ProfileNew'
import MyTasks from './MyTasks';
import Leaderboard from './Leaderboard';
import Deadlines from './Deadlines';
import Updates from './Updates'

import '../Dashboardcss/MainComponent.css'

const CAMainComponent = ({selectedOption, options}) =>{

    let Comp;

    if(selectedOption === 0){
        Comp = <Profile points='850'></Profile>
    }
    else if(selectedOption === 1){
        Comp = <MyTasks/>
    }
    else if(selectedOption === 2){
        Comp = <Updates/>
    }
    else if(selectedOption === 3){
        Comp = <Deadlines/>
    }
    else if(selectedOption === 4){
        Comp = <Leaderboard/>
    }

    

   return(
       <div className="main-component-container">
           
        {Comp}

       </div>
   )

}

export default CAMainComponent;