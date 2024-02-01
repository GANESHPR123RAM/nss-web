import React, {useState} from "react";
import Ranker from "./Ranker";
import "./css/LeaderboardList.css";
import axios from 'axios'

import { useWidthAndHeight } from '../../../../../hooks/useWidthAndHeight'

function LeaderboardList() {

  
  let windowSize = useWidthAndHeight();
  let width = windowSize[0];

  const [data, setData] = useState([])
  React.useEffect(() => {
    axios.get(`/users/ca/leaderboard?limit=12&page=1`).then((response) => {
     const CAs = response.data.data.data
     
     const d = CAs.map((ele, index) => {
       return {
         name : ele.name,
         points : ele.points,
         rank : index+1
       }
     })

     setData(d);
    })
  
  }, []);

  const rankClass = (width > 1150) ? 'rankers-2' : 'rankers-1'
  

  return (
    <div className="leaderboardContainer">
      
      <div className={rankClass}>
        {data.map((element, index) => {
       
          return (
            <div className="">
              <Ranker
                key={element.index}
                name={element.name}
                rank={element.rank}
                points={element.points}
              />
            </div>
          );
        })}
       
      </div>
    </div>
  );
}

export default LeaderboardList;