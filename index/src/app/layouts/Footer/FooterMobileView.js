import React from 'react'
import './FooterMobileView.css'
import im1 from "./images/logo2.svg";
import im2 from "./images/Vector.png";
import im3 from "./images/Instagram.png";
import im4 from "./images/Linked-in.png";
import im5 from "./images/Twitter.png";
import im7 from "./images/Medium.png"
import im6 from "./images/Gmail.png";
import { Link } from "react-router-dom";

function FooterMobileView() {

    return (<>
        <div className="mob-foot-Contact">
            <div className="mob-foot-footerCol1">
                <div className="mob-foot-footerLogo">
                    <div className="mob-foot-logoImg">
                        <img src={im1} className="mob-foot-logo" />
                    </div>
                    <div className="mob-foot-logoContaint">
                        <div className="mob-foot-NSS" style={{padding:"5%"}}>
                            <p>
                                National<br />
                                Social<br />
                                Summit
                            </p>
                        </div>
                        <div className="mob-foot-date-box">
                            <p style={{marginTop:-12}}>10th-11th Feb 2024</p>
                        </div>
                    </div>
                </div>
                <div className="mob-foot-footerText">
                    <p>
                        It is a platform to come together to address the socio-economic problems persisting in the country. It brings together the socially active groups present all across the country.
                    </p>
                </div>
            </div>
            <div className="mob-foot-footerCol2">
                <div className="mob-foot-col1">
                    <h4>About</h4>
                    <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/speakers">Speakers</a>
          <a href="/partners">Partners</a>
                </div>
                <div className="mob-foot-col1">
                    <h4>Information</h4>
                    <a href="/">Site Map</a>
          <a href="/">FAQs</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Conditions</a>
                </div>
            </div>
            <div className="mob-foot-footerCol3">
                <div className="mob-foot-icon-box">
                    <div className="mob-foot-icon">
                        <a href="https://twitter.com/natsocialsummit?t=_E-S4iDRCvoqO3bGh4u6sw&s=08" ><img className='fabIcon' src={im5} /></a>
                    </div>
                    <div className="mob-foot-icon">
                        <a href="https://www.linkedin.com/company/national-social-summit"> <img className='fabIcon' src={im4} /></a>
                    </div>
                    <div className="mob-foot-icon">
                        <a href="https://instagram.com/iitrsocialsummit?utm_medium=copy_link"> <img className='fabIcon' src={im3} /></a>
                    </div>
                    <div className="mob-foot-icon">
                        <a href="https://m.facebook.com/iitrsocialsummit/"> <img className='fabIcon' src={im2} /></a>
                    </div>
                    {/* <div className="mob-foot-icon">
                        <a href="mailto:nss@iitr.ac.in.com"> <img className='fabIcon' src={im6} /></a>
                    </div> */}
                    <div className="mob-foot-icon">
                        <a href="https://medium.com/@socialsummit"> <img className='fabIcon' src={im7} /></a>
                    </div>
                </div>
            </div>
            <div className="mob-foot-contactusBtn">
                    <button type="button" class="btn btn-primary" onClick={()=>{window.open('mailto:nss@iitr.ac.in.com')}}><Link to='' style={{ color: 'black' }}>Contact Us</Link></button>
                </div>
        </div>
    </>
//h

    )   
}

export default FooterMobileView