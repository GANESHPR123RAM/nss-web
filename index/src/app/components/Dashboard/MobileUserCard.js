import React from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import { LogoutAuthAction } from "../../../redux/actions/AuthAction";

import "./Dashboardcss/UserCard.css";

//placeholder export

import UserProfiePlaceholder from "../../assets/images/UserProfilePlaceholder.png"

const MobileUserCard = ({open, onClick, user, logout}) => {

    const history = useHistory();
    const Role = (user.role==='ca') ? 'Campus Ambassador' : ((user.role ==='delegate') ? 'Delegate' : 'Admin')

    return (

        open?
        
        (<div className='modal'>
            <div className='modal-content mobile-user-container' onClick={e => e.stopPropagation()}>
            <div className="container" style={{
            paddingRight : '1rem', 
            paddingLeft : '1rem',
            height : '7.5rem'
        }}>
            <div className="row h-75 justify-content-between">

            <div className="col-8">

                <div className="row user-name">{user.name}</div>
                <div className="row user-role">{Role}</div>
            </div>
                <div className="col-4 h-75"
                    style={{
                        borderRadius : '8px',
                        backgroundImage :`url(${UserProfiePlaceholder})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        overflow: 'hidden',
                        backgroundPosition:'center'
                       
                    }}
                    onClick = {()=>{
                        onClick()
                    }}
                />
    
              </div>
              <div className = "row link h-25 justify-content-between">
                    <div 
                        className="col-8 p-0"
                        style={{
                            cursor: "pointer"
                        }}
                        >
                            <Link to="/profileCompletion">
                            Profile Completion
                            </Link>
                            </div>
                    <div 
                        className="col-4 p-0 d-flex justify-content-end"
                        style={{
                            cursor: "pointer"
                         }}
                        onClick={() => {
                            logout(history)
                        }}
                        >Logout</div>
              </div>
    
            </div>

            </div>
        </div>
        
        
         ):(
         
         <div style={{
            height : '6rem'
        }}>
        <div className="col-12 h-75"
        style={{
            borderRadius : '8px',
            backgroundImage :`url(${UserProfiePlaceholder})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            overflow: 'hidden',
            backgroundPosition:'center'
           
        }}
        onClick = {()=>{
            onClick()
        }}
    />

    
            </div>
     
            
         ))
}

const mapStateToProps = (state) => {
  
    return {
      user : state.authState.user,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        logout : (history) => {
            dispatch(LogoutAuthAction(history))
        }
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(MobileUserCard);

