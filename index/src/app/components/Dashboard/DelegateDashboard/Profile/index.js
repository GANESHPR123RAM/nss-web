import React from 'react';

import ProfileHeader from './ProfileHeader';
import Details from './Details';



import './css/index.css'

import { connect } from 'react-redux';

const Profile = ({user}) => {

    const data = [
        {
            detailName : 'Name',
            detailValue : user.name  
        },
       
        {
            detailName : 'Email',
            detailValue : user.email
        },
        {
            detailName : 'Mobile No.',
            detailValue : user.contactNumber  
        },
        {
            detailName : 'College',
            detailValue : user.college 
        },
        {
            detailName : 'Address',
            detailValue : user.address 
        },
        {
            detailName : 'Reference CA-ID',
            detailValue : user.referenceCAid 
        }
    ]

    return (
        <div className='profile-container p-0 m-0 h-100'>
            <div className='row profile-header'>
                <ProfileHeader></ProfileHeader>
            </div>
            <div className='row profile-component'>

                <div className='col-md-6 details-component'>
                    <Details details={data}></Details>
                </div>
                <div className='col-md-6 delegates-events'>
                    
                </div>
            </div>

        </div>
    );
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
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);

