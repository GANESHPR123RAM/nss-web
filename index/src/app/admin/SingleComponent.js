import React from 'react';

const SingleComponent = ({name, email, contactNumber, college, }) => {
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-3'>
                    {name}
                </div>
                <div className='col-3'>
                    {email}
                </div>
                <div className='col-3'>
                    {contactNumber}
                </div>
                <div className='col-3'>
                    {college}
                </div>
            </div>

        </div>
    )
}

export default SingleComponent