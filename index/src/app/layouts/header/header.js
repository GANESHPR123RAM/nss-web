import React, { Component } from "react";
import Logo from "../header/UpdatedPage/Image/logo.png";
import { Menu } from "react-feather";
import { Link } from "react-router-dom";
import SideDrawer from "../sideDrawer";
import BackDrop from "../sideDrawer/Backdrop";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import HeaderTop from "./UpdatedPage/Components/HeaderTop";
import HeaderContent from "./UpdatedPage/Components/HomeContent";
import svlogo from "../Footer/images/logo2.svg"

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false,
    };
  }

   

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  openSideDrawer = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  closeSideDrawer = () => {
    this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
  };

  render() {
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <BackDrop click={this.openSideDrawer} />;
    }

   const {auth} = this.props;

    return (
    <>

      <div className="pe-3 ps-3 gradient" style={{fontFamily:"Mulish" }}>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link to="/">
              <img src={Logo} alt="logo" className="th-header-logo th-new" />
              <span className="th-header-new th-nss" style={{width:"12%",marginTop:8}}>National Social Summit</span>
              <div className="summit_date" style={{marginTop:-4,marginLeft:7}}> 10th-11th Feb 2024</div>
            </Link>
            <div style={{ position: "absolute", marginLeft: "25vw" }}
            className="navbar1  d-flex align-items-center pl-5"  >
              <NavLink  
              
              to="/home" activeClassName="active" className=" ml-5 ">
                <p className="mb-0 navmar pl-5 th-nss">Home</p>
              </NavLink>
              <NavLink to="/about" activeClassName="active">
                <p className="mb-0 navmar th-nss">About</p>
              </NavLink>
              <NavLink to="/speakers" activeClassName="active">
                <p className="mb-0 navmar th-nss">Speakers</p>
              </NavLink>
              <NavLink to="/partners">
                <p className="mb-0 navmar th-nss" activeClassName="active">
                  Partners
                </p>
              </NavLink>
              <NavLink to="/events">
                <p className="mb-0 navmar th-nss" activeClassName="active">
                  Events
                </p>
              </NavLink>
              {/* <NavLink to="/events">
                <p className="mb-0 navmar th-nss" id="th-register-btn">
                  Register
                </p>
              </NavLink> */}
              
              {
                auth.isLoggedIn ? 
                <NavLink
                style={{ position: "absolute", marginLeft: "61vw" }}
                to="/dashboard"
              >
                <p className="mb-0 th-nss" activeClassName="active">
                  DASHBOARD
                </p>
              </NavLink>:
              <NavLink
              style={{ position: "absolute", marginLeft: "61vw" }}
              to="/login"
              
            >
              <button type="button" className=" th-login-btn"><i className="fa-solid fa-user"></i><span>Login</span></button>
              {/* <p className="mb-0 th-nss" activeClassName="active">
                
              </p> */}
            </NavLink>
              }
              
            </div>
          </div>
        </div>
        <div className="mob-nav"  style={{ display: this.props.width > 992 ? 'none' : 'flex' }}>
          <div style={{display:'flex',flexDirection:'row',}}>

          <img src={svlogo} alt="logo"  style={{marginRight:"0px",width:40,display:'flex',justifyContent:'left',}}/>
{/* <p style={{color:"white",margin:5}}>National Social Summit</p> */}
          </div>
          <Menu
            size={this.props.width > 992 ? 0 : 24}
            onClick={this.drawerToggleClickHandler}
            className="th-theme-color"
            style={{ cursor: "pointer",color:"white" }}
          />

        </div>
        <SideDrawer
          show={this.state.sideDrawerOpen}
          clicked={this.drawerToggleClickHandler}
        />
        {backdrop}
      </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth : state.authState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);