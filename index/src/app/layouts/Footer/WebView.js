import React from 'react';

import './css/WebView.css'
import NSSLogo from './images/FooterNSSLogo.svg'

import Facebook from './images/facebook.svg';
import Instagram from './images/instagram.svg';
import Twitter from './images/twitter.svg';
import Linkedin from './images/linkedin.svg';
import im1 from './images/facebook.png'
import im2 from './images/inst.png'
import im3 from './images/Linkedin.png'
import im4 from './images/Twitter.png'


const WebView = () => {
    return (
        <div className='footer-container'>
            <div className='row footer-contact-us-head'>
                <div className='col-md-4'>

                </div>
                <div className='col-md-8'>
                    Contact Us
                </div>

            </div>
            <div className='row footer-row-2'>
                <div className='col-md-4 nss-logo'>
                    <div className='row' style={{ height : '100%'}}>
                    <div className='col-md-4'>
                        </div>
                    {/* <div className='col-md-7'
                        style={{
                          
                            backgroundImage : `url(${NSSLogo})`,
                            backgroundSize : 'contain',
                            backgroundPosition : 'center',
                            backgroundRepeat : 'no-repeat'
                        }}
                    >

                    </div> */}
                    <div className="socialmedia">
                <div className="socialmain">
                    <img src="images/Logo2.png" alt="" />
                    <h2 className='hd1'>BREAKING CONVENTIONS</h2>
                    <br />
                    <br />
                    
                    <p>Follow us on</p>
                    <div className="socialicons">
                        <img src={im1} alt="" />
                        <img src={im2} alt="" />
                        <img src={im3}alt="" />
                        <img src={im4} alt="" />
                        

                    </div>
                </div>
            </div>
                    </div>
                </div>
                <div className='col-md-8 footer-contact-form'>

                <form onSubmit = {(event) => {
                        event.preventDefault();
                        }}>
                            <div className='' style={{height : '90%'}}>
                                <div className=''>
                                    <div className='' style={{height : '33.33%', margin:'0.5rem'}}>
                                    <input
                                        type="text"
                                        className="th-form-control form-control"
                                        placeholder='Full Name'
                                        id=""
                                        name=""
                                       
                                    />

                                    </div>
                                    <div className='th-form-group'  style={{height : '33.33%' , margin:'0.5rem'}}>
                                    <input
                                        type="text"
                                        className="th-form-control form-control"
                                        placeholder='Phone no.'
                                        id=""
                                        name=""
                                       
                                    />
                                    </div>
                                    <div className='th-form-group'  style={{height : '33.33%' , margin:'0.5rem'}}>
                                    <input
                                        type="text"
                                        className="th-form-control form-control"
                                        placeholder='E-mail address'
                                        id=""
                                        name=""
                                       
                                    />
                                    </div>

                                </div>
                                <div className=''>
                                <div className='th-form-group' style={{height : '100%', margin:'0.5rem'}}>
                                    <textarea
                                        height={'100%'}
                                        type="text"
                                        className="th-form-control form-control"
                                        placeholder='Message'
                                        id=""
                                        name=""
                                       
                                    />

                                    </div>
                                </div>

                            </div>
                            <div className='' style={{ height : '10%' , margin:'0.5rem'}}>
                            <div className=" th-registration-btn-1" th-form-group style={{ paddingLeft : '0' }}>
                                <button class="th-registration-btn-2 btn " type="submit">
                                Send Message
                                </button>
                            </div>
                            </div>
                            </form>
           
              

            </div>
            </div>
            {/* <div className='row footer-row-3'>
                <div className='col-md-4'>
                <div className='row' style={{ height : '100%'}}>
                    <div className='col-md-4'>
                        </div>
                        <div className='col-md-7 embracing-inclusion'>
                        “Embracing Inclusion”
                        </div>
                    
                   
                        </div>
                </div>
                <div className=''>

                </div>

            </div> */}
            <div className='footer-row-4'>
                <div className=''>

                </div>
                <div className=''>
                    <div className=' footer-find-us'>
                        <div className=''>

                        </div>
                        <div className='footer-social-media-icons'>
                            <div className=''>
                                <div className=' footer-find-us-head'> @copyright | National Social Summit</div>
                                <div className=''>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>
       </div>
    
    )
}

export default WebView