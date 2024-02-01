import React from 'react';
import '../css/selectTasks.css'


const SingleListComponent = (name,index, changeIndex, setOpen, open) => {
    return (
        <div className="select-tasks-single-component"
            onClick = {()=>{
                changeIndex(index);
                setOpen(!open)
            }}
            style = {{
                cursor : 'pointer',
                padding : '0.3rem',
                
                borderRadius :'5px'
            }}
        >{name}</div>
    )
}


const ListComponent = ({tasks, changeIndex, setOpen, open}) => {
    return (
        <div className='select-task-list-component'>
        {
            tasks.map((ele, index) => {
                return (
                    SingleListComponent(ele.name,index, changeIndex, setOpen, open)
                )
            })
        }
    </div>
    )
}

export default ListComponent