import React from 'react';
import TestiMonialsDetails from './Testimonial.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import userPic from './Assets/Ellipse6.svg';
import './testimonials.css'
// import Ramit from './images/ramit.png';
// import Nikhil from './images/nikhil.png';
import pushkar from './images/pushkar_img.png';


const TestiMonials = () => {

    const testiMonials = [
        {
            id: 1,
            number:1,
            address: "Past Delegate",
            description: "The National Social Summit 2023 was more than just a meet-up; it was a game-changer. Ashneer Grover's talk wasn't just about shaking things up; it was a crash course in how to actually do it. The hands-on experiences weren't just about hearing fancy concepts; they were about living and breathing change. Walking away from the summit, I'm not just motivated; I've got a mindset ready to shake things up. Kudos to the organizers for pulling off an event that goes beyond talk, sparking a genuine call to action.",
            img:pushkar,
            name:"Pushkar Singh Dhami"
          },
          {
            id: 2,
            number:2,
            address: "Past Delegate",
            description: "The Summit was a real eye-opener for me. The speakers, like Ashneer Grover and Rakhi Pal, brought in diverse perspectives that made me rethink a lot. The on-stage events, especially the Nukkad Natak and Sociothon, proved how thinking outside the box can tackle societal problems. This event lit a fire in me for making positive changes, and I'm grateful to have been part of such an inspiring and open-minded gathering. Excited to see the impact it'll surely have on our society.",
            img:pushkar,
            name:"Pushkar Singh Dhami"
          },
          {
            id: 3,
            number:3,
            address: "Past Delegate",
            description: "The National Social Summit’23 felt like a well-thought-out journey. It wasn't just about talking; it was about diving into practical innovation. Leaving the summit, I'm not just carrying ideas; I've got a real plan for making change happen. This event isn't about empty words; it's a strategic guide for transforming society.",
            img:pushkar,    
            name:"Pushkar Singh Dhami"
          },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        // dotsContainer:true,
        dots: true,
        dotsData:true,
        autoplayTimeout: 3500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2
            }
        }
    };
    return (
        <section id="testimonial" className="testimonials pt-70 pb-70" >
            <div className="container mt-5">
                <div className="miniTitle text-center">Testimonials</div>
                <div className="row">
                    <div className='testi-container'>
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.length === 0 ?
                                <div class="item">
                                        <div class="shadow-effect">
                                            <img alt='' class="img-circle" src={userPic} />

                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                                        </div>
                                        <div class="testimonial-name">
                                            <h5>Priyanka Gupta</h5>
                                            <small>Past Delegate</small>
                                        </div>
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._id} />
                                            
                                            )
                                        })
                                    }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestiMonials;