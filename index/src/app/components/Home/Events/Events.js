import React from "react";
import Card from "./Card";
import "./Events.css";
import img1 from "./cardimg.png";

function Events() {
  return (
    <div className="events-container">
      <h2>Events</h2>
      <div className="cardbox">
        <Card
          src={img1}
          heading="Nukkad Natak"
          description="It is a street-play competition wherein you speak in the lingo of the common folks to emphasise socially relevant issues in our society. With the aid of shouts, chants, drums and catchy songs, it is an extremely effective way of theatrical art to convey a social or political message"
          price="10k"
          rulebook="https://drive.google.com/file/d/1av6naNOWBjDQVcrdckZoKodCtimSwr6J/view?usp=sharing"
        />
        <Card
          src={img1}
          heading="Debate"
          description="There's not a better way to develop your critical thinking skills than a good debate. It tests your knowledge by compelling you to make rational and reasonable arguments in the favour of your view. 
            Do join us in this battle of brains and test your knowledge on the hottest topics. 
            "
          price="10k"
          rulebook="https://drive.google.com/file/d/12sO81vWJofPW4r2nEYj3DJUvdu-F0ZY4/view?usp=sharing"
        />
        <Card
          src={img1}
          heading="Case Study"
          description="This includes an in-depth understanding research on an issue to contrive feasible and practical solutions. It stipulates individuals with critical thinking standards on various issues. People still get discriminated on basis of caste, gender, religion, social and economic backgrounds, etc. 
           "
          price="10k"
          rulebook="https://drive.google.com/file/d/13lFg4tys6To8KFcl3ZZeITI_H2bMFPoa/view?usp=sharing"
        />
        <Card
          src={img1}
          heading="Sociothon"
          description="This is a technology and design-based competition to solve social problems. It's an unique opportunity for all of you to apply skills and knowledge to address real world issues and create meaningful impact for society. This is an development hackathon to foster innovation culture and civic engagement. "
          price="10k"
          rulebook="https://drive.google.com/file/d/1iWCY-GnwAl75XZXtZZ40coRlxnAUnZDR/view?usp=sharing"
        />
      </div>
      <button className="btn3">
        <a className="plink" href="https://socialsummit.iitr.ac.in/events">
          See More
        </a>
      </button>
    </div>
  );
}

export default Events;
