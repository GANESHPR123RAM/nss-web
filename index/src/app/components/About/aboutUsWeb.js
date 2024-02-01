import React, { useState } from 'react'
import aboutimg from './Images/part_final.svg'
import aboutimgcover from './Images/webviewPhoto.jpg'
import aboutbg2 from './assets/aboutbg2.png'
import abtmain from './Images/main.png'
import img1 from './Images/Group 98.png'
import img2 from './Images/Component 7.png'
import img3 from './Images/OUR.png'
import './aboutUsWeb.css'

function AboutUsWeb() {
    const [hover, setHover] = useState(false)
    return (
        <div className='About-container'>
            <div className="ourstory">

                <img src={aboutimgcover} className='aboutbg1' />

                <div className="aboutbgcover" onMouseOver={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}>

                    <img src={hover ? abtmain : aboutimg} className={`aboutbgcoverImg ${hover ? 'hovered' : ''}`} />

                    {/* <div className="about-containt-Box">

                        <div className="about-containt">
                            The National Social Summit, organized by the National Service Scheme(NSS) IIT Roorkee was established in 2016. It is a platform to come together to address the socio-economic problems persisting in the country. It brings together the socially active groups present all across the country. This social-fest includes various events such as Panel Discussions, Case Studies, Social Drama, Workshops, Model United Nations and Cultural shows.
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="ourstory2">
                <div className="aboutbg2">
                    <img src={aboutbg2} className='aboutbg2Img' />
                </div>
                <div className="containtbox">
                    <div className="col1-abt">
                        <p>
                            "National Social Summit 2024 envisions an inclusive society built on the pillars of education, empowerment, and sustainability for ourselves and future generations. As we reflect on the current state of Indian society, we recognize persistent challenges such as prejudices, bigotry, and disproportionate representation. This year, our focus is on reforming societal values to foster the much-needed change required for a harmonious coexistence.

                            The unsettling unrest in our society serves as a stark premonition, signaling a potentially grim future if we do not address these issues. In the face of escalating global disparities, our nation must be adequately prepared to confront and overcome the impending challenges. The National Social Summit 2024 stands as a platform to bring these pressing concerns to the forefront on a national scale, aiming to ignite conversations and actions that will lead to the realization of our vision for an inclusive society.

                            With the theme 'Educate, Empower, Sustain,' this year's summit underscores the transformative power of education, the importance of empowering every individual, and the urgency to embrace sustainable practices. By focusing on these principles, we strive to pave the way for a society that not only acknowledges its flaws but actively works towards building a future marked by equality, justice, and sustainability. Join us at the National Social Summit 2024 as we collectively embark on a journey to shape a more enlightened, empowered, and sustainable society for ourselves and the posterity we aim to secure."
                        </p>
                    </div>
                    <div className="col2-abt">
                        <div className="imgbox1">
                            <img src={img1} />
                        </div>
                        <div className="imgbox2">
                            <img src={img2} />
                        </div>
                        <div className="imgbox3">
                            <img src={img3} />
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutUsWeb