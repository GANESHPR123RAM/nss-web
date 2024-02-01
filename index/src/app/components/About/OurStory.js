import React from 'react'
import './OurStory.css'
import aboutimg from './assets/aboutbg.png'
import aboutimgcover from './assets/aboutbgcover.png'
import aboutbg2 from './assets/aboutbg2.png'
import aboutsecond from './assets/aboutsecond.svg'
function OurStory() {
  return (
    <div className='About-container'>
      <div className="ourstory">
        <img src={aboutimg} className='aboutbg' />
        <img src={aboutimgcover} className='aboutbgcover' />
        <div className="about-containt">
          The National Social Summit, organized by the National Service Scheme(NSS) IIT Roorkee was established in 2016. It is a platform to come together to address the socio-economic problems persisting in the country. It brings together the socially active groups present all across the country. This social-fest includes various events such as Panel Discussions, Case Studies, Social Drama, Workshops, Model United Nations and Cultural shows.
        </div>
      </div>
      <div className="ourstorypage2">
        <img src={aboutbg2} className='aboutbg2' />
        <div className="components">
          <img src={aboutsecond} className='aboutsecond' />
          <div className="about-containt2">
            <p>
              We are a dedicated workforce of over 1000 volunteers striving selflessly for the growth of our nation. This year, we unite the youth of the nation to be the fire that burns the foundation of prejudices and disparity in our society. National Social Summit 2023 envisions an inclusive society for ourselves and our posterity. Today, the Indian society falls short due to the prevalence of prejudices, bigotry and disproportionate representation. This year we seek to reform these societal values and bring abouvt the much needed change. The growing unrest in the society gives us a premonition about our grim future in a voice that is dark and foreboding. With the soaring disparities in the current global scenario we seem ill prepared to deal with the challenges. Hence, the National Social Summit is here to highlight these issues at a national platform in order to envision an inclusive society.
            </p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default OurStory
