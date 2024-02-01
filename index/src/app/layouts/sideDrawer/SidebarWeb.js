import React, { Component } from "react";
import { Link } from "react-router-dom";
import { X } from "react-feather";
import { connect } from "react-redux";
import Logo from "../header/UpdatedPage/Image/logo.png";

class SideDrawerWeb extends Component {
  render() {
    let drawerClasses = "th-sidedrawer-web";
    if (this.props.show) {
      drawerClasses = "th-sidedrawer-web open";
    }

    const { auth } = this.props;

    return (
      <div>
        <div className={drawerClasses}>
          <div className="pt-3 pt-2 pb-4 ps-4 pe-4">
            <div className="d-flex justify-content-end mb-3">
              <X
                size={40}
                onClick={this.props.clicked}
                className="th-theme-color mt-1 ms-2 mb-3 float-right"
                style={{ cursor: "pointer",color:"white" }}
              />
            </div>
            <div>
              <Link to="/home" onClick={this.props.clicked} className="th-link">
                <p className="th-sidebar-list-item mb-4">Home</p>
              </Link>
              <Link
                to="/about"
                onClick={this.props.clicked}
                className="th-link"
              >
                <p className="th-sidebar-list-item mb-4">About</p>
              </Link>
              <Link
                to="/partners"
                onClick={this.props.clicked}
                className="th-link"
              >
                <p className="th-sidebar-list-item mb-4">Partners</p>
              </Link>
              <Link
                to="/events"
                onClick={this.props.clicked}
                className="th-link"
              >
                <p className="th-sidebar-list-item mb-4">Events</p>
              </Link>
              <Link
                to="/speakers"
                onClick={this.props.clicked}
                className="th-link"
              >
                <p className="th-sidebar-list-item mb-4">Speakers</p>
              </Link>
              <hr style={{ width: "70%", color: "#FFFFFF", opacity: "1" }} />
              {auth.isLoggedIn ? (
                <Link
                  to="/dashboard"
                  onClick={this.props.clicked}
                  className="th-link"
                >
                  <p className="th-sidebar-list-item mb-4">Dashboard</p>
                </Link>
              ) : (
                <div className="th-sidebar-list-item1">
                 <Link
                    to="/login"
                    onClick={this.props.clicked}
                    className="th-link"
                  >
                    <p className="th-sidebar-list-item th-login-btn mb-3"><i className="fa-solid fa-user" />Login</p>
                  </Link>
                  <Link
                    to="/signup"
                    onClick={this.props.clicked}
                    className="th-link ms-5"
                  >
                    <p className="th-sidebar-list-item mb-3">Register</p>
                  </Link>
                  
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.authState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawerWeb);
