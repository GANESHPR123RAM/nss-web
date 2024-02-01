
import React from "react";
import Speaker from './components/Speaker';
import Speakermob from "./components/speakermob";
import "./styles/Speakers.css";


import background from '../Home/images/final_background.png';
import mark from './assets/mark.png';

import Header from "../../layouts/header/index"


import mark1 from './assets/mark1.png';
import pushkar from './assets/pushkar.png';
import kiran from './assets/kiranbedi.png';
import sonamw from './assets/sonamw.png';
import roderico from './assets/roderico.png';
import aruna from './assets/arunaroy.png';
import major from './assets/majordpsingh.png'
import ashneer from './assets/ashneer.png';
import priyanka from './assets/priyankaraina.png';


function Speakers() {
  const data = [
    {
      id: 1,
      name: "Shri Pushkar Singh Dhami",
      post: "Chief Minister of Uttarakhand",
      descp:
        "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented. ",
      image: pushkar,
      imagedot:mark,
      imagedot1:mark1,
      imagemob: pushkar,
      color: '#FD652D',
      left: '50px',
    },
    {
      id: 2,
      name: "Kiran Bedi",
      post: "IPS(Retd),Former LG",
      descp:
      `On 8th August 2013, NSS IIT Roorkee organized a thought-provoking session on "Indian Youth and Social Challenges Today" at the Convocation Hall, IIT Roorkee. The distinguished guest lecturer, Dr. Kiran Bedi, an Indian Social Activist and retired IPS officer, took center stage, addressing the prevalent issues faced by the youth and offering insightful solutions to alleviate these challenges.
     
      Prior to the engaging lecture, Dr. Bedi immersed herself in a visit to Anushruti, a school for deaf children, and Asmita, an organization dedicated to the welfare of women. During her visit, she inquired about the opportunities available to the students and gained valuable insights into the efforts invested by the volunteers and management.
      Dr. Kiran Bedi's interactive session not only provided valuable perspectives on the societal challenges faced by the youth but also underscored the importance of proactive engagement and solutions for a better future.`,
      image: kiran,
      imagedot:mark,
      imagedot1:mark1,
      imagemob: kiran,
      color: '#FD652D',
      left: '50px',
    },
    {
      id: 3,
      name: "Sonam Wangchuk",
      post: "Innovator, Reformer",
      descp:
       `The National Social Summit’20 proudly featured Mr. Sonam Wangchuk as the Keynote Speaker in its Impact Series, an event that has already left a lasting impact. Renowned for his innovative work, including the fully solar-powered SECMOL Campus and the revolutionary "Ice Stupa" artificial glaciers, Mr. Wangchuk's contributions were spotlighted at the event.
        As a Ramon Magsaysay Awardee, he brought his visionary perspective to the fore, sharing insights on addressing Ladakh's water crisis through innovative solutions like the Ice Stupa. His role in launching "Operation New Hope" for reforming the Indian government school system underscored his commitment to transformative change. The National Social Summit’20 was privileged to host Mr. Sonam Wangchuk, celebrating his impactful journey and contributions to education, sustainability, and community development.
         `,
      image: sonamw,
      imagedot:mark,
      imagedot1:mark1,

      imagemob: sonamw,


      color: '#FD652D',
      left: '50px',
    },
    {
      id: 4,
      name: "Dr. Roderico Ofrin",
      post: "WHO Representative",
      descp:
      `In the esteemed National Social Summit'21, Dr. Roderico Ofrin, the World Health Organization (WHO) Representative to India, delivered a compelling address during the opening ceremony. His enlightening presentation, titled 'The Gargantuan Inoculation Drive: A Vaccine for Everyone,' provided invaluable insights into the ongoing vaccination initiatives and offered a glimpse into the future possibilities of these efforts. Dr. Ofrin delved into the global landscape of the coronavirus pandemic, sharing a comprehensive overview of its spread. His session not only outlined the current status of the vaccination drive but also presented his expert views and findings on the strategic steps necessary to safeguard the world from potential crises in the future. `,
      image: roderico,
      imagedot:mark,
      imagedot1:mark1,

      imagemob: roderico,

      color: '#FD652D',
      left: '50px',
    },
    {
      id: 5,
      name: "Aruna Roy",
      post: "Social Activist",
      descp:
        `Aruna Roy, a distinguished Social Activist, President of the National Federation of Indian Women, and Founder of Mazdoor Kisan Shakti Sangathan (MKSS), graced the National Social Summit’22 with her impactful lecture titled 'Inclusion: Role of the Constitution' as part of The Impact Series. Ms. Roy delved into the profound understanding of a pandemic, drawing insights from India's historical experiences. Emphasizing the crucial role of the Indian Constitution, she illuminated how it guides the government to ensure equal opportunities and foster inclusivity in our nation. Ms. Roy's enlightening discourse shed light on the diverse societal classes, and her poignant opening words, "United we stand, divided we fall," resonated with the essence of embracing differences for a more inclusive society. `,
      image: aruna,
      imagedot:mark,
      imagedot1:mark1,

      imagemob: aruna,

      color: '#FD652D',
      left: '50px',
    },
    {
      id: 6,
      name: "Major DP Singh",
      post: "India's First Blade Runner",
      descp:
      `The National Social Summit'22 concluded with a powerful Impact Series session by Major D.P. Singh, a true hero whose journey—from surviving a mortar on the battlefield to becoming India's first Blade Runner—inspired all in attendance. The event, now in the past, featured Major D.P. Singh as the chief guest at the closing ceremony.
      Titled "I CAN - Breaking the Barriers," his session encapsulated his remarkable story of resilience and determination. A Kargil War veteran, Major D.P. Singh exemplified overcoming challenges, motivating others to break barriers. His presence at the National Social Summit'22 added profound depth, celebrating the spirit of perseverance and triumph over adversity.
      `,
      image: major,

     
      imagedot:mark,
      imagedot1:mark1,

      imagemob: major,

      color: '#FD652D',
      left: '50px',
    },
    {
      id: 7,
      name: "Ashneer Grover",
      post: "Co-Founder BharatPe",
      descp:
        `Ashneer Grover, co-founder of BharatPe, a leading fintech company, left an indelible mark at the National Social Summit’23 with his insightful address. As a seasoned entrepreneur, Ashneer shared his journey of challenging conventions and reshaping India's financial technology landscape, aligning seamlessly with the summit's theme, "Breaking Conventions."
        Beyond his corporate narrative, Ashneer passionately highlighted the social responsibility of businesses. He underscored the pivotal role companies like BharatPe play in fostering financial inclusion and empowering small businesses in India. His impactful insights and commitment to innovation exemplified the event's ethos, leaving a lasting impression on all attendees at the National Social Summit’23.
        `,
      image: ashneer,
      imagedot:mark,
      imagedot1:mark1,

      imagemob: ashneer,

      color: '#FD652D',
      left: '50px',
    },
    {
      id: 8,
      name: "Priyanka Raina",
      post: "Co-Founder GRF",
      descp:
        `The National Social Summit'19 had the honor of welcoming Ms. Priyanka Raina as its Keynote Speaker, an event that has already concluded. As one of the Founders of the Gracia Raina Foundation (GRF), Ms. Raina shared her insights and experiences during the summit. GRF, under her guidance, has been dedicated to supporting mothers and children facing a spectrum of health challenges, both physical and mental.
        Her active involvement in initiatives like PAALNA with RED FM and The Delhi NCR Food Bank Network showcased her commitment to philanthropy. Additionally, Ms. Raina ventured into media with her own show, The Priyanka Raina Show on Red FM. The National Social Summit'19 was enriched by Ms. Priyanka Raina's keynote address, celebrating her impactful contributions to social welfare and community engagement.
        `,
      image: priyanka,
      imagedot:mark,
      imagedot1:mark1,

      imagemob: priyanka,

      color: '#FD652D',
      left: '50px',
    }
  ];

  
  return (
    <>
    <Header/>
    <div className="Speaker-Wrapper">
        <img src={background} alt="" className="backimgspeaker" />
    <div className="speakersPage">
      {data.map((element) => {
        return (
          <>
          <Speaker
            key={element.id}
            id={element.id}
            name={element.name}
            post={element.post}
            descp={element.descp}
            image={element.image}
            imagedot={element.imagedot}
            imagedot1={element.imagedot1}
          />
          <Speakermob
            key={element.id}
            id={element.id}
            name={element.name}
            post={element.post}
            descp={element.descp}
            image={element.image}
            imagedot={element.imagedot}
            imagedot1={element.imagedot1}
          />
          </>
        );
      })}
    </div>
    </div>
    </>
  );
}

export default Speakers;
