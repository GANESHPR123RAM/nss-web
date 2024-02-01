import React from 'react';
import DelegateMainComponent from './DelegateDashboard/DelegateMainComponent';
import CAMainComponent from './CADashboard/CAMainComponent';
import NavBox from './Navbox'
import UserCard from './UserCard'
import DashboardId from './DashboardId';

import { connect } from 'react-redux'

import './Dashboardcss/index.css'



const DashboardWebView = ({options, selectedIndex, onNavboxClick, user}) => {

  return(
      <div className='page-container' style={{height : '100vh', background : 'none', paddingLeft:"3rem", paddingRight:"3rem", paddingTop:"6rem"}}>
          
          <div className='row h-25 d-flex justify-content-between'>
            <div className='col-md-3'>
               <DashboardId summitID ={user.summitID}></DashboardId>
            </div>
            <div className='col-md-4'>
                <UserCard/>

            </div>
          </div>
          <div className='row h-50'>
            <div className='col-md-2' style={{
                width: '20.83325%',
                flex: '0 0 20.83325%',
                maxWidth: '20.83325%'
                }}>
            <NavBox options={options} selectedIndex={selectedIndex} onComponentClick = {onNavboxClick}></NavBox>
            </div>
            
            <div className='col-md-9' style={{
                width: '79.16635%',
                flex: '0 0 79.16635%',
                maxWidth: '79.16635%'
                }}>
                  {
                    user.role === 'delegate'? 
                    <DelegateMainComponent selectedOption={selectedIndex} options={options}></DelegateMainComponent>:
                    <CAMainComponent selectedOption={selectedIndex} options={options}></CAMainComponent>
                  }
                
            </div>
        </div>
          
      </div>
  )
}

const mapStateToProps = (state) => {
  
  return {
    user : state.authState.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
   
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardWebView);

