import React, { useState } from "react";
import Items from "../Item";
import "../css/DeadlinesList.css";
import arrow from "../images/Arrow.svg";

import axios from 'axios'

function MobileDeadlinesList() {

  
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  React.useEffect(() => {
    axios.get(`/tasks?limit=18&page=${page}`).then((response) => {
      const t = response.data.data.data
     

       
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
    

      const dateArray = t.map((ele) => {
        const date = ele?ele.deadlineDate.split('T')[0]:null;
        const use = date?date.split('-'):null;
        const month = getMonth(use[1]);
        const day = use[2]
        return{
          day,
          month, 
          name : ele.name
        }
      })

      setData(dateArray)   
    
      
    });
   
   
    
     
  }, [page]);

  const loadMoreHandler = () => {
   
    setPage(page+1)
    
  }

  

  

  return (
    <div className="task_main">
     
      <div className="load" style={{height:"5%"}}
        onClick = {loadMoreHandler}
      >
        <img src={arrow} alt="" />
        <h3 className="loadMore">Load more</h3>
      </div>
      <div className="row items" style={{height : '90%'}}>
        <div className="col-12">
        {data.map((element, index) => {
        
            return (
              <Items
                index={index}
                key={element.id}
                day={element.day}
                month={element.month}
                id={element.id}
                taskNumber={element.id}
                name ={element.name}
              />
            );
         
          
        })}
        </div>  
      </div>
    </div>
  );
}

export default MobileDeadlinesList;