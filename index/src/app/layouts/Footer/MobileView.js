import React from 'react';
import './css/MobileView.css'

import MobileNSSLogo from './images/MobileNSSLogo.svg';
import Facebook from './images/facebook.svg';
import Instagram from './images/instagram.svg';
import Twitter from './images/twitter.svg';
import Linkedin from './images/linkedin.svg';

const MobileView = () => {
    return (
        <div className="mobile-footer-container">
            <div className='row'
                style={{
                    height: '45%',
                    backgroundImage: `url(${MobileNSSLogo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            ></div>
            <div className='row mobile-embracing-inclusion d-flex justify-content-center'
                style={{
                    height: '10%'
                }}
            >
                “Embracing Inclusion”
            </div>
            <div className='row'
                style={{
                    height: '45%'
                }}
            >
                <div className='row mobile-find-us-on d-flex justify-content-center align-items-center align-content-center' style={{
                    height: '40%'
                }}>Find Us On</div>
                <div className='row d-flex justify-content-center' style={{
                    height: '55%',
                    paddingRight: '1rem',
                    paddingLeft: '1rem'

                }}>
                    <a
                        href="https://m.facebook.com/iitrsocialsummit/"
                        target="blank"
                        rel="noreferrer"
                        className="th-link"
                        style={{ height: '100%', width: '15%' }}>
                        <div className='col-12 '
                            style={{ height: '60%', backgroundImage: `url(${Facebook})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                        ></div>
                    </a>

                    <a
                        href="https://instagram.com/iitrsocialsummit?utm_medium=copy_link"
                        target="blank"
                        rel="noreferrer"
                        className="th-link"
                        style={{ height: '100%', width: '15%' }}>
                        <div className='col-12 h-75' style={{ backgroundImage: `url(${Instagram})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                    </a>

                    <a
                        href="https://twitter.com/natsocialsummit?t=_E-S4iDRCvoqO3bGh4u6sw&s=08"
                        target="blank"
                        rel="noreferrer"
                        className="th-link"
                        style={{ height: '100%', width: '15%' }}>
                        <div className='col-12 h-75' style={{ backgroundImage: `url(${Twitter})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                    </a>
                    <a
                        href="https://www.linkedin.com/company/national-social-summit"
                        target="blank"
                        rel="noreferrer"
                        className="th-link"
                        style={{ height: '100%', width: '15%' }}>
                        <div className='col-12 h-75' style={{ backgroundImage: `url(${Linkedin})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
                    </a>

                    {/* <a
                        target="blank"
                        rel="noreferrer"
                        className="th-link"
                        style={{ height: '100%', width: '15%' }}
                        href="https://medium.com/@nssiitr"> <img className='fabIcon' src={im7} />
                    </a> */}

                </div>
            </div>

        </div>
    )
}

export default MobileView