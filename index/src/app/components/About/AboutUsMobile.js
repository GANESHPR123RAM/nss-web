import React from 'react'
// import aboutimg from './assets/aboutUsbg.png'
import aboutimgcover from './Images/part.svg'
import aboutbg2 from '../Home/images/final_background.png'

import vission from './assets/VISION & MISSION.png'

import './AboutUsMobile.css'

function AboutUsMob() {
    return (
        <>
            <div className="mob-aboutbox">
                <div className='mob-Aboutcontainer'>
                    <div className="mob-ourstory">
                        <div className="mob-aboutbgcover">
                            <div className="mob-bg">
                                <div className="mob-imgbg">
                                    <img src={aboutimgcover} className='mob-aboutbgcoverImg' />
                                </div>
                                <div className="mob-nss">Team National Social Summit</div>
                            </div>
                            <div className="mob-aboutcontaintBox">
                                <img src={aboutbg2} className='mob-aboutbg1' />
                                <div className="mob-aboutcontaint">
                                    We are a dedicated workforce of over 1000 volunteers striving selflessly for the growth of our nation. This year, we unite the youth of the nation to be the fire that burns the foundation of prejudices and disparity in our society. The National Social Summit, organized by the National Service Scheme(NSS) IIT Roorkee was established in 2016. It is a platform to come together to address the socio-economic problems persisting in the country. It brings together the socially active groups present all across the country. This social-fest includes various events such as Panel Discussions, Case Studies, Social Drama, Workshops, Model United Nations and Cultural shows.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mob-vission">
                    <div className="mob-boximg">
                        <img src={vission} className='mob-vissionImg' />
                    </div>
                </div>
                <div className="mob-Aboutcontainer2">
                    <img src={aboutbg2} className='mob-aboutbg2' />
                    <div className="mob-aboutcontaintBox2">
                        <div className="mob-aboutcontaint2">
                            "National Social Summit 2024 envisions an inclusive society built on the pillars of education, empowerment, and sustainability for ourselves and future generations. As we reflect on the current state of Indian society, we recognize persistent challenges such as prejudices, bigotry, and disproportionate representation. This year, our focus is on reforming societal values to foster the much-needed change required for a harmonious coexistence.
                            The unsettling unrest in our society serves as a stark premonition, signaling a potentially grim future if we do not address these issues. In the face of escalating global disparities, our nation must be adequately prepared to confront and overcome the impending challenges. The National Social Summit 2024 stands as a platform to bring these pressing concerns to the forefront on a national scale, aiming to ignite conversations and actions that will lead to the realization of our vision for an inclusive society.
                            With the theme 'Educate, Empower, Sustain,' this year's summit underscores the transformative power of education, the importance of empowering every individual, and the urgency to embrace sustainable practices. By focusing on these principles, we strive to pave the way for a society that not only acknowledges its flaws but actively works towards building a future marked by equality, justice, and sustainability. Join us at the National Social Summit 2024 as we collectively embark on a journey to shape a more enlightened, empowered, and sustainable society for ourselves and the posterity we aim to secure."
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsMob