import React,{useState} from 'react';
import Dropdown from './Dropdown'

import './css/chooseEvent.css'

const checkboxMessage = "I hereby declare that the information furnished above is true, complete and correct to the best of my knowledge and belief."

const ChooseEvent = ({eventsList, handleSelectChange, onClickRegister, err, registeredClass}) => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    const buttonClass = err ? `choose-event-err` :`choose-event-${registeredClass}`;
   
    return(
        <div className='choose-event-container'>
         <div className="dropdown-container">
            <Dropdown eventsList={eventsList} handleSelectChange={handleSelectChange}/>
          </div>
          <div className='checkbox-container'>
          <label className="checkbox-input">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleChange}
                />
                {checkboxMessage}
              </label>
              {
                (registeredClass === 'successfully-registered') ?(<div className='successfully-registered-class'>Successfully Registered!</div>) : (
                  <button className={buttonClass} onClick={onClickRegister}>
                      Register
                  </button>
                )
              }
              

          </div>
         
              
            </div>
    )
}

export default ChooseEvent