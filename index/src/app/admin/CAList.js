import React,{useState} from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import ShowTask from './ShowTask'

import CATaskSubmissions from './CATaskSubmissions';

const CAList = () => {

    const [caList, setCaList] = useState([]);
    const [selectedCAIndex, setSelectedCAIndex] = useState(-1);
    const [tasks, setTasks] = useState([]);
    const [selectedTaskIndex, setSelectedTaskIndex] = useState(-1) 


    const onCloseClick = () => {
        setSelectedCAIndex(-1)
    }
    

    React.useEffect(() => {
        axios.get("auth/getAllUsers?role=ca").then((response) => {
            
            setCaList(response.data.data.data);
           
          });

          axios.get("/tasks").then((response) => {
            
            const tasks = response.data.data.data
            setTasks(tasks)
          });
          
    },[])

    return(
        <div style={{margin : '12rem'}}>
            <div className='ca-task-container'>
                These are the tasks. Select one.
                {
                    (selectedTaskIndex === -1) ? <div className='choose-task-container'>

                        {
                            tasks.map((ele, index) => {
                                return(
                                    <div className='single-task-container'
                                            style={{
                                                cursor:'pointer',
                                                border : '0.2rem solid #663aa3',
                                                margin : '1rem'
                                            }}
                                            onClick = {
                                                () => {
                                                    setSelectedTaskIndex(index)
                                                }
                                            }
                                    >
                                        {ele.name}
                                    </div>
                                )
                            })
                        }
                    </div>:(
                        <div className='ca-task-details-container' style={{
                            border : '0.2rem solid #663aa3',
                            margin : '1rem',
                            padding : '0.5rem'
                        }}>
                            <div>
                            <ShowTask task={tasks[selectedTaskIndex]}></ShowTask>
                            <div 
                            
                                style={{height : '10%', cursor:'pointer', fontWeight : '600'}}
                                onClick={()=>{
                                    setSelectedTaskIndex(-1)
                                }}
                                > Close </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className='ca-list-container'>
            These are the CAs. Select one.
                {
                    (selectedCAIndex === -1) ? <div className='choose-task-container'>

                        {
                            caList.map((ele, index) => {
                                return(
                                    <div className='single-task-container'
                                    style={{
                                        cursor:'pointer',
                                        border : '0.2rem solid #663aa3',
                                        margin : '1rem'
                                    }}
                                            onClick = {
                                                () => {
                                                    setSelectedCAIndex(index)
                                                }
                                            }
                                    >
                                        {ele.name}
                                    </div>
                                )
                            })
                        }
                    </div>:(
                        <div className='ca-details-container' style={{
                            border : '0.2rem solid #663aa3',
                            margin : '1rem',
                            padding : '0.5rem'
                        }}>
                            <div>
                            <div className='ca-name'> {caList[selectedCAIndex].name} </div>
                        <div className='ca-summit-id'> {caList[selectedCAIndex].summitID} </div>
                        <div className='ca-email-id'>{caList[selectedCAIndex].email}</div>
                        <div className='ca-contact-number'>{caList[selectedCAIndex].contactNumber}</div>
                        <div className='ca-college'>{caList[selectedCAIndex].college}</div>
                        <div className='ca-points'>{caList[selectedCAIndex].points}</div>
                        </div>
                            <div 
                            
                                style={{height : '10%'}}
                                onClick={()=>{
                                    setSelectedCAIndex(-1)
                                }}
                                > Close </div>
                           
                        </div>
                    )
                }
            </div>
            
    {
        (selectedCAIndex !== -1 && selectedTaskIndex!==-1) ? <div>
            Here are their submissions for the selected Task.
            <CATaskSubmissions ca={caList[selectedCAIndex]} task={tasks[selectedTaskIndex]} onCloseClick={onCloseClick}></CATaskSubmissions>

        </div>:null
    }
        </div>

    )
}

export default CAList