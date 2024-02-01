import React, { useState } from 'react'
import dataContext from './DataContext'

const ContextProvider = (props) => {
    const [scroll,setScroll]= useState(0)
    return (
        <div>
          <dataContext.Provider value={{scroll,setScroll}} >
            {props.children}
          </dataContext.Provider>
        </div>
      )
    }
    
    export default ContextProvider