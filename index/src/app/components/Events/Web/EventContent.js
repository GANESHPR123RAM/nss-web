import React from "react";
import EventCard from "./EventCard";
// import actionimg from '..//images/action plan.png'
import ActionPlan from "../images/action plan.svg";
import MUN from "../images/mun.svg";
// import SocialConclave from "../images/socialConclave.svg";
import Sociothon from "../images/sociothon.svg";
import PolicyCase from "../images/Policy Case.svg";
import WorkPresentation from "../images/Work Presentation.svg";
import CaseStudy from "../images/Case study.svg";
import Workshop from "../images/Workshop.svg";
import NukkadNatak from "../images/Nukkad Natak.svg";
import Debate from "../images/Debate.svg";
import TreasureHunt from "../images/Treasure Hunt.svg";
import PreSummit from "../images/Pre Summit events.svg";
import "./css/EventContent.css";

function EventContent(props) {
  const data = [
    {
      id: 1,
      image: ActionPlan,
      eventLink: "Action Plan",
      name: "Action Plan",
      rulebook:
        "https://drive.google.com/file/d/1vsdMCq05IgSgNudY1kDwNKYv36le8TPL/view?usp=share_link",
      prizeWorth: "10K",
      description:
        " This competition provides a platform for those entrepreneurs who bring feasible solutions to real-time problems with their innovative ideas. The competition will be of two rounds and is open for all age groups. A maximum of 4 members in a team can participate in the competition.",
      perk1: "Incubation opportunity worth 1 Crore.",
      perk2: "Rental space in Delhi for 1 month.",
      perk3: "AWS credits, software subscription worth 10 lakhs.",
      perk4: "30 min mentorship session.",
      perk5: "Networking opportunity.",
    },
    {
      id: 2,
      image: MUN,
      name: "Model United Nations",
      eventLink: "MUN",
      rulebook:
        "https://drive.google.com/file/d/1aVRnR3PIDB8-SdF-dM86jhQ8fWFh6ne1/view?usp=share_link",
      prizeWorth: "120K",
      description:
        "This event provides a platform for the students to have practical experience of diplomacy and allow them to be the representative of a country or an organization and let them speak up about the issues and find their solutions along with other delegates.",
      perk1: "Skill Enhancement Courses",
      perk2: "Winners will be featured on our social media platforms.",
      perk3: "Attendee kit will be provided to all participants.",
      perk4: "Exciting Prizes",
      perk5: "Networking opportunity.",
    },
    {
      id: 4,
      image: Sociothon,
      eventLink: "Sociothon",
      prizeWorth: "50K",
      name: "Sociothon",
      rulebook:
        "https://drive.google.com/file/d/1NAxunk-gxf0CUyb38cIZNFChct-9A95T/view?usp=share_link",
      problemstatement1:"1. AI for Mental Health : Develop a machine learning model that can identify individuals at risk of mental health issues, such as depression, anxiety, or suicide.",  
      problemstatement2:"2. Fighting Fake News : Develop a machine learning model that can detect and flag fake  news and disinformation online. The model should be designed to be scalable and adaptable to different types of media,", 
      problemstatement3:"3. Open Theme : Do you have your own Problem Statement? No Problem. sociothon brings you open opportunity to present your own problem statement and solution to it. Innovative ideas that can help to break the common conventions are most welcome.",
problink:"https://drive.google.com/file/d/1TMwMPtYjevOG193aXJiALwQobYXPe1F8/view?usp=sharing", 
      description:
        "Sociothon is an event where participants will be provided with a problem statement and they will be asked to present their solutions by critically analysing the issue. This event aims to enhance the creative minds of the participants.",
      perk1: "Skill Enhancement Courses",
      perk2: "Winners will be featured on our social media platforms.",
      perk3: "Attendee kit will be provided to all participants.",
      perk4: "Exciting Prizes",
      perk5: "Networking opportunity.",
    },
    {
      id: 5,
      image: PolicyCase,
      eventLink: "PolicyCase",
      rulebook:
        "https://drive.google.com/file/d/1frI_HU8UKkxS4GLDA-rfYua3BdMVf7M_/view?usp=share_link",
      prizeWorth: "50K",
      name: "Policy Case Competition",
      problemstatement1:"1. Healthcare improvement in Remote areas :  India has made significant strides in improving healthcare access to the society in the recent years, yet a significant proportion of the population lacks access to quality healthcare services, particularly those living in remote and underserved areas. This policy case focuses on the efforts to provide healthcare services to underserved populations in India.",  
      problemstatement2:"2. Gender Discrimination in Work Life : Gender discrimination in the workplace is a pervasive issue in India, with women often facing barriers to equal employment opportunities, unequal pay, and harassment. This case study highlights the experiences of women in India facing gender discrimination in their work life.", 
      problemstatement3:"", 
      problink:"https://drive.google.com/file/d/1rghn_QaboZo8qwcj0s6Rvz_6NeA-dzKn/view?usp=share_link",
      link1:
        "https://drive.google.com/file/d/1LNVxt6bMusyVC07Pfng183rDK8iMzHPt/view?usp=sharing",
      link2:
        "https://drive.google.com/file/d/1owN_u3XH-uOQxDnPnDGDZu7qxO25OGAB/view?usp=sharing",
      description:
        "As the name suggests this competition encourages the students to become policymakers by critically analysing the present issues and evaluating the faults in existing policies and finally coming up with great ideas to solve these issues. This is a 2 round competition.",
      perk1: "Skill Enhancement Courses",
      perk2: "Winners will be featured on our social media platforms.",
      perk3: "Attendee kit will be provided to all participants.",
      perk4: "Exciting Prizes",
      perk5: "Networking opportunity.",
    },
    {
      id: 6,
      image: WorkPresentation,
      eventLink: "Innovision",
      name: "Work Presentation",
      prizeWorth: "50K",
      description:
        "In this competition, we invite every NGO to showcase their past works towards society. This also allows us to express our gratitude to them. The competition will be of 2 rounds with each team consisting of up to 4 members.",
      rulebook:
        "https://drive.google.com/file/d/1GbO7vts5LxTkhaZM--IrbX_gdncLAszY/view?usp=share_link",
      perk1: "Skill Enhancement Courses",
      perk2: "Winners will be featured on our social media platforms.",
      perk3: "Attendee kit will be provided to all participants.",
      perk4: "Exciting Prizes",
      perk5: "Networking opportunity.",
    },
    {
      id: 7,
      image: CaseStudy,
      eventLink: "CaseStudy",
      name: "Case Studies",
      problemstatement1:"1. Why Millets? : Millets were widely grown as fodder for out birds and animals until we realized its other health benefits.Over the last decade, the production of jowar has fallen, the production of pearl millet (bajra) has stagnated, and the production of other millets has stagnated or declined. How they can be a sustainable and economic source of nutrition in India.",  
      problemstatement2:"2. Empowering Women Entrepreneurs in Rural India : Women entrepreneurs in rural India face significant challenges in accessing resources,building networks, and scaling their businesses. This case study focuses on initiatives to empower women entrepreneursin rural India.", 
      problemstatement3:"", 
      problink:"https://drive.google.com/file/d/1Wz4_MIRsJNBrRwzuXm1-5yDa-Db8I7Ms/view?usp=share_link",
      rulebook:
        "https://drive.google.com/file/d/1Wb49hOg46umuzVH6k7InhcIbyWuF2nU_/view?usp=share_link",
      perk1: "Skill Enhancement Courses",
      perk2: "Winners will be featured on our social media platforms.",
      perk3: "Attendee kit will be provided to all participants.",
      perk4: "Exciting Prizes",
      perk5: "Networking opportunity.",
      link1:
        "https://drive.google.com/file/d/1dk0GtCOkyIQF8Kha3gAPJep_vLSRbme_/view?usp=sharing",
      link2:
        "https://drive.google.com/file/d/1WLFKxWhf4qWv0S9tAsMuSc65_TOlagXL/view?usp=sharing",
      prizeWorth: "75K",
      description:
        "This Case Study Competition is the best way to understand the real-time issues and come up with the best feasible solutions to them. This case study competition will go in two rounds. The shortlisted ones in the 1st round will proceed to the 2nd round.",
    },
    {
      id: 8,
      image: Workshop,
      eventLink: "Workshop",
      name: "Workshops",
      rulebook:
        "https://drive.google.com/file/d/1cjfmhHj-T7hpBhAXQFJPaNzPvxl2LAfn/view?usp=share_link",
      description:
        "Like every year this year also the National Social Summit 2023, IIT Roorkee, is going to organize various workshops to provide hands-on experiences on different social aspects and formulate socially active mindsets among people.",
      perk1: "Skill Enhancement Courses",
      perk2: "Winners will be featured on our social media platforms.",
      perk3: "Attendee kit will be provided to all participants.",
      perk4: "Exciting Prizes",
      perk5: "Networking opportunity.",
    },
    {
      id: 9,
      image: NukkadNatak,
      eventLink: "Abhivyakti",
      name: "Nukkad Natak",
      rulebook:
        "https://drive.google.com/file/d/1lAa0J8Dat9J7Jl__0A-_lJovsxWgaCP6/view?usp=share_link",
      prizeWorth: "15K",
      description:
        "It is a street-play competition wherein you speak in the lingo of the common folks to emphasise socially relevant issues in our society. With the aid of shouts, chants, drums, and catchy songs, it is an extremely effective way of theatrical art to convey a social or political message. ",
      perk1: "Skill Enhancement Courses",
      perk2: "Winners will be featured on our social media platforms.",
      perk3: "Attendee kit will be provided to all participants.",
      perk4: "Exciting Prizes",
      perk5: "Networking opportunity.",
    },
    {
      id: 10,
      image: Debate,
      eventLink: "TurnCoat",
      rulebook:
        "https://drive.google.com/file/d/16gtjM_M2ESfmltWcFmdG4smsfm2ctETA/view?usp=share_link",
      prizeWorth: "15K",
      name: "Debate",
      description:
        "This is a form of debate where one states both the pros and cons of a situation by switching sides after a specific duration. The competition is of 3 rounds. The participants are allowed to present their views in either English or Hindi.",
      perk1: "Skill Enhancement Courses",
      perk2: "Winners will be featured on our social media platforms.",
      perk3: "Attendee kit will be provided to all participants.",
      perk4: "Exciting Prizes",
      perk5: "Networking opportunity.",
    },
    {
      id: 11,
      image: TreasureHunt,
      eventLink: "TreasureHunt",
      rulebook:
        "https://drive.google.com/file/d/15-DxTlDVxryACIemtoDfjwInf4rC5Qpw/view?usp=sharing",
      prizeWorth: "10K",
      name: "Treasure Hunt",
      description:
        "This is a fun activity in which an individual or a team solves clues for further hints and finally, the one who becomes the first to solves all the puzzles finds the treasure and wins the game. The game will be 2 rounds.",
      perk1: "Skill Enhancement Courses",
      perk2: "Winners will be featured on our social media platforms.",
      perk3: "Attendee kit will be provided to all participants.",
      perk4: "Exciting Prizes",
      perk5: "Networking opportunity.",
    },
    {
      id: 12,
      image: PreSummit,
      eventLink: "PreSummitEvents",
      name: "Pre Summit Events",
      description:
        "To merge you all in the vibe of our social fest the National Social Summit 2023, we are presenting you with some amazing pre-summit events like Pixels, Caricature, Microfiction, Meme making competition, and Inquisition. These fun engaging events will give you all a glimpse of our Summit. Come and show up your talents and be a part of this rich legacy of the National Social Summit.",
      rulebook:
        "https://drive.google.com/file/d/1cNVHrLye41a0Sdl_NEAi2jXlupW4wmfM/view?usp=share_link",
      perk1: "Skill Enhancement Courses",
      perk2: "Winners will be featured on our social media platforms.",
      perk3: "Attendee kit will be provided to all participants.",
      perk4: "Exciting Prizes",
      perk5: "Networking opportunity.",
    },
  ];

  return (
    <div className="EventContent">
      {data.map((element) => {
        return (
          <div id={element.id} className="contain-card">
            <EventCard
              key={element.id}
              name={element.name}
              description={element.description}
              id={element.id}
              image={element.image}
              rulebook={element.rulebook}
              prizeWorth={element.prizeWorth}
              link1={element.link1}
              link2={element.link2}
              eventLink={element.eventLink}
              perk1={element.perk1}
              perk2={element.perk2}
              perk3={element.perk3}
              perk4={element.perk4}
              perk5={element.perk5}
              prob1={element.problemstatement1}
              prob2={element.problemstatement2}
              prob3={element.problemstatement3}
              problink={element.problink}
            />
          </div>
        );
      })}
    </div>
  );
}

export default EventContent;

//     <div className="eright-container">
//   <div className="eright-header">
//     <div className="rhl"><h1>Action Plan
//       </h1>
//       <p>19th Mar’22 - 20th Mar’22</p></div>
//     <div className="rhr">Prize Worth : <span>10k</span> </div>
//   </div>
//   <div className="events-body">
//   This competition provides a platform for those entrepreneurs who bring feasible solutions to real-time problems with their innovative ideas. The competition will be of two rounds and is open for all age groups. A maximum of 4 members in a team can participate in the competition.
//   </div>
//   <div className="perksandimg">
//   <div className="perks">
//     <h1>Perks</h1>
//     <ul>
//       <li>Incubation opportunity worth 1 Crore.

// </li>

//       <li>Rental space in Delhi for 1 month.</li>
//       <li>AWS credits, software subscription worth 10 lakhs.</li>
//       <li>30 min mentorship session.</li>
//       <li>Networking opportunity.</li>
//     </ul>
//     <button className="register">
//       Register
//     </button>
//     <button className="rulebook">
//       RuleBook
//     </button>
//   </div>
//   <img src={actionimg} alt="" />
//   </div>
// </div>
