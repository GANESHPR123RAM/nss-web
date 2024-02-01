import React from "react";

import SingleComponent from "./SingleComponent";

import "./css/Navbox.css";

function Navbox({options, selectedIndex, onComponentClick}) {

  return (
    <div className="navbox-container">
        {
            options.map((element, index) =>{
               
                return(
                    <div className="row" id={index}
                    style={{
                        cursor: "pointer"
                    }}
                    onClick={()=>{
                        onComponentClick(index);
                    }}>
                        <SingleComponent componentName={element.componentName} isSelectedIcon ={element.isSelectedIcon} isNotSelectedIcon ={element.isNotSelectedIcon}  selected={selectedIndex===index}></SingleComponent>
                    </div>
                    
                )
            })
        }

    </div>
  );
}

export default Navbox;