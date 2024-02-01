import React from 'react';
import './Tabs.css'

const SingleElement = (name, selected) => {
    const useClass = selected ? 'selected-tab' : 'not-selected-tab'
    return(
        <div className={useClass}>{name}</div>
    )
}

const Tabs = ({tabs, selectedIndex, changeSelectedIndex}) => {

   
    return (
        <div className='tabs-container d-flex justify-content-between'
            style={{
                cursor : 'pointer'
            }}
        >
            {
                tabs.map((ele, index)=> {
                    const name = ele.name;
                    const selected = selectedIndex === index 
                    return(
                       <div
                       className='col-5'
                        onClick={()=> {
                            changeSelectedIndex(index)
                        }}
                       >{SingleElement(name, selected)}</div> 
                        
                    )
                })
            }

        </div>
    )
}

export default Tabs;