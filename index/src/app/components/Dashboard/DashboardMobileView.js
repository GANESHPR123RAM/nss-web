import React, { useState } from 'react';

import MobileNavbox from './MobileNavbox';
import MobileUserCard from './MobileUserCard';
import DelegateMainComponent from './DelegateDashboard/DelegateMainComponent';
import CAMainComponent from './CADashboard/CAMainComponent';

import { connect } from 'react-redux'

import './Dashboardcss/index.css'
import DashboardId from './DashboardId';



const DashboardMobileView = ({options, selectedIndex, onNavboxClick, user}) => {

    const [open, setOpen] = useState(false);
   
    const onUserCardClick = () =>{
        setOpen(!open)
    }

    return(
        

<div className='page-container' style={{height : '100%', paddingLeft:"0.25rem", paddingRight:"0.25rem", paddingTop : "4rem"}}>
             
              
              <div className='row h-25 d-flex align-items-end justify-content-between'>
                <div className='col-8'>
                   <DashboardId isMobile={true} summitID ={user.summitID}></DashboardId>
                </div>
                <div className='col-4' >
                  <MobileUserCard open={open} onClick={onUserCardClick}></MobileUserCard>    
                </div>
              </div>
              <div className='row'>
                <MobileNavbox options={options} selectedIndex={selectedIndex} onComponentClick = {onNavboxClick}></MobileNavbox>
             </div>
             <div className='row col-11'
                  style={{
                    height:'65%',
                    width: '95.8333%',
                  flex: '0 0 95.8333%',
                  maxWidth: '95.8333%',
                    margin : '0.3rem',
                    marginTop : '0.5rem'
                  }}
             >
             {
                    user.role === 'delegate'? 
                    <DelegateMainComponent componentNumber={1} selectedOption={selectedIndex} options={options}></DelegateMainComponent>:
                    <CAMainComponent componentNumber={1} selectedOption={selectedIndex} options={options}></CAMainComponent>
                  }
                
             </div>
             
             
            </div>
      
        
    )
};

const mapStateToProps = (state) => {
  
  return {
    user : state.authState.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardMobileView);

