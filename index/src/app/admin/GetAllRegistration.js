import React , {useState} from "react";
import axios from 'axios'
import { connect } from 'react-redux';

import SingleComponent from "./SingleComponent";

function GetAllRegistration(){

    const [delegatesState, setDelegatesState] = useState([])
    const [num, setNum] = useState(0)

    React.useEffect(() => {
        axios.get("auth/getAllUsers?role=delegate&limit=3000").then((response) => {
            
          setDelegatesState(response.data.data.data);
          setNum(response.data.results)
        });
        
      }, []);

    
    
    return (


        <div className="delegate-container"
            style ={{
                marginTop : '10rem'
            }}
        >
            <div className="row"> number of registrations = {num}</div>
            <div className="row" style={{ marginLeft : '6rem', marginRight : '6rem'}}>
                <div className="col-3" style={{
                    fontSize : '2rem',
                  
                }}>Name</div>
                 <div className="col-3" style={{
                    fontSize : '2rem'
                }}>Email</div>
                 <div className="col-3" style={{
                    fontSize : '2rem',
                   
                }}>Contact Number</div>
                <div className="col-3" style={{
                    fontSize : '2rem',
                   
                }}>College</div>

            </div>
            {
                delegatesState.map(ele=> (
                    <SingleComponent name={ele.name} college={ele.college} contactNumber={ele.contactNumber} email={ele.email}></SingleComponent>
                ))
            }
        </div>
    )
}

export default GetAllRegistration
