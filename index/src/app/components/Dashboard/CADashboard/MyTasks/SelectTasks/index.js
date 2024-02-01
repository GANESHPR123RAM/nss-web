import React, {useState} from 'react';
import '../css/selectTasks.css'
import Dropdown from '../images/dropdown.svg';

import ListComponent from './ListComponent'

const SelectTasks = ({tasks, index, changeIndex}) => {

    const [open, setOpen] = useState(false)


    return(
        <div className='select-tasks-container'>
            <div className='row select-tasks-header'>All Tasks (till now)</div>
            <div className='row select-tasks-dropdown d-flex justify-content-between'>
                <div className='col-9 select-task-name'>{`Task #${index+1}`}</div>
                <div className='col-1 select-dropdown-svg'
                    style = {{
                        cursor : 'pointer',
                        backgroundImage : `url(${Dropdown})`,
                        backgroundSize : 'contain',
                        backgroundPosition : 'center',
                        backgroundRepeat : 'no-repeat'
                    }}

                    onClick = {()=> {setOpen(!open)}}
                ></div>
                {
                    open?<div className='list-component-div'
                        style={{
                            background : '#ffffff'
                        }}
                    >
                        <ListComponent tasks={tasks} index={index} changeIndex={changeIndex} open={open} setOpen={setOpen} /> </div>:''
                   
                }
            </div>
        </div>
    )
}

export default SelectTasks