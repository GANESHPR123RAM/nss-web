import React from 'react';

import './css/SingleComponent.css'


const SingleComponent = ({ele}) => {
    return(
        <div className="memberCard">
        <div className="memberImage" 
          style={{
            display:'flex',
            alignSelf:'center',
            height:'80%',
            width:'100%',
            backgroundImage: `url(${ele.image})`,
            backgroundSize :'cover',
            backgroundRepeat :'no-repeat',
            backgroundPosition:'center',
            borderRadius :"8px"
          }}
        >
          
        </div>
        <div className="name">
          <h1>{ele.name}</h1>
        </div>
        <div className="position">
          <h1>{ele.position}</h1>
        </div>
      </div>
    )
}

export default SingleComponent;