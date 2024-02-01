import React,{useState} from 'react';
import axios from 'axios'

const ShowTask = ({task}) => {

  

      
    const getMonth = (month) => {
        if(month==='01') return 'Jan'
        else if (month ==='02') return 'Feb'
        else if (month ==='03') return 'Mar'
        else if (month ==='04') return 'Apr'
        else if (month ==='05') return 'May'
        else if (month ==='06') return 'Jun'
        else if (month ==='07') return 'Jul'
        else if (month ==='08') return 'Aug'
        else if (month ==='09') return 'Sep'
        else if (month ==='10') return 'Oct'
  
        else if (month ==='11') return 'Nov'
        else if (month ==='12') return 'Dec'
      }

    const convertDate = (date) => {
        const d = date?date.split('T')[0]:null;
        const use = d?d.split('-'):null;
        if(use){
            const month = getMonth(use[1]);
            const day = use[2];
            const year = use[0];
    
            const finalDate = `${day} ${month} ${year}`
    
            return finalDate
        }
       
    }
    const issuedDate = convertDate(task.issuedDate);
    const deadlineDate = convertDate(task.deadlineDate)
  

    return (
        <div className='admin-show-tasks-container'>

            
           
                    
                        <div>
                            <div> Task Name : {task.name}</div>
                            <div> Task Description : {task.description}</div>
                            <div> Issued Date : {issuedDate}</div>
                            <div> Deadline Date : {deadlineDate}</div>
                            <div> Total Points : {task.totalPoints}</div>
                            <div> Each Points : {task.eachPoints}</div>
                        </div>
                    
                

        </div>
    )
}

export default ShowTask