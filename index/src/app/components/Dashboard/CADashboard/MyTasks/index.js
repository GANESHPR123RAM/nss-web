import React,{useState} from 'react';

import MyTasksHeader from './MyTasksHeader';
import Details from './Details';
import SelectTasks from './SelectTasks';
import Uploads from './Uploads'

import { connect } from 'react-redux';
import { GetAllTasksAction } from '../../../../../redux/actions/TaskAction'

import './css/index.css'

const MyTasks = ({tasks, getTasks}) => {

    const [index, setIndex] = useState(0);

    
    

    React.useEffect(()=> {
       getTasks();
    
      },[getTasks]);


    const changeIndex = (index) => {
        setIndex(index)
    } 
    

    return (
        <div className='mytasks-container p-0 m-0 h-100'>
            <div className='row mytasks-header'>
                <MyTasksHeader/>
            </div>
            <div className='row mytasks-component'>
                
                <div className='col-md-6 my-tasks-details-component'>
                  
                    <SelectTasks tasks={tasks} index={index} changeIndex={changeIndex}></SelectTasks>    
                    <Details tasks={tasks} index={index}></Details>
                </div>
                <div className='col-md-6 upload-component'>
                      <Uploads tasks={tasks} index={index}></Uploads>
                </div>
            </div>

        </div>
    );
}


const mapStateToProps = (state) => {
  
    return {
     tasks : state.tasks,
    }
  }
  
  
const mapDispatchToProps = (dispatch) => {
    return {
      getTasks : () => {
        dispatch(GetAllTasksAction())
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(MyTasks);