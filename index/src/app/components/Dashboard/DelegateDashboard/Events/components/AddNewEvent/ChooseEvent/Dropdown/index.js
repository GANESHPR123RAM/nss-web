import React, { useState } from "react";
import Select from "react-select";
import "./Dropdown.css";

const Dropdown = ({eventsList, handleSelectChange}) => {

  const [selectedOption, setSelectedOption] = useState({ label :"Choose an Event"});

  const handleChange = (op) => {
        
      setSelectedOption(op);
      handleSelectChange(op.index)
    
  };
  const options = eventsList?eventsList.map((ele, index)=>{
    return ({
      ...ele, 
      label : ele.name,
      index 
    })
  }):0;
  /*
  
  const options = [
    {
      
      label: "Action Plan",
    },
    {
      label: "Treasure Hunt",
    },
    {
      label: "MUN",
    },
    {
      label: "Abhivyakti",
    },
    {
      label: "Case Study (II)",
    },
  ];*/
  return (
    <div className="choose-event-dropdown-container">
      <div className="choose-event-text">Choose an Event</div>
      <Select 
        options={options}
      
        onChange={handleChange}
        />
    </div>
  );
};

export default Dropdown;
