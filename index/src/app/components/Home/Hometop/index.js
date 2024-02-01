import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeTopImage from '../images/hometop-image.svg'


class Hometop extends Component {


  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  handleClose = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    
    
    return (
      <div>
        <div className=" th-hometop-parent ">
          <div className="th-hometop-parent-text col-6">
            <h1 className="th-home-top-header mb-0">EMBRACING</h1>
            <h1 className="th-home-top-header mb-2">INCLUSION</h1>

            <p className=" th-hometop-event-date ">19th - 20th MARCH, 2022</p>

            <p className=" th-hometop-content ">
            Take the next step forward with National Social Summit 2023 and dabble in the color of inclusion.

            </p>
            <div className="d-flex mt-3">
              <Link to="/signup" className="th-register-btn mr-3">
                <span className="th-register-btn-text">Register</span>
              </Link>
              <div className="payment-button m-3">
                <a href="#" target="_blank" rel="noreferrer">Payment </a>
            </div>
                
            </div>
          </div>

          <div className="th-home-top-image col-12 col-md-6"
            style={{
              backgroundImage : `url(${HomeTopImage})`,
              backgroundSize:"contain",
              backgroundPosition :"center",
              backgroundRepeat :"no-repeat",

            }}
          >
            
          </div>
        </div>
      </div>
    );
  }
}

export default Hometop;