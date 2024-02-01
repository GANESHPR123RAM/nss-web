import React from "react";
import content from "./components/ReadMore"
import Speaker from "./components/Speaker";
// import SpeakerRight from "./components/SpeakerRight";
import "./styles/Speakers.css";

import Devendra from "./assets/Group 701.png";
import Roderico from "./assets/Group 702.png";
import Atrayee from "./assets/Group 708.png";
import Kiran from "./assets/Group 709.png";
import Pushkar from "./assets/Group 710.png";
import Sonam from "./assets/Group 711.png";

function Speakers() {
  const data = [
    {
      id: 1,
      name: "DEVENDRA JHAJHARIA",
      post: "",
      descp:
        "Devendra Jhajharia was born in 1981 and hails from the churu district of rajasthan. He is an Indian Paralympic javelin thrower competing in F46 events. He is the first Indian Paralympics player to win two gold medals at the Paralympics. He won his first gold in the javelin throw at the 2004 Summer Paralympics in Athens, becoming the second gold medalist at the Paralympics for his country. At the 2016 Summer Paralympics in Rio de Janeiro, he won a second gold medal in the same event, bettering his previous record.He became India's most decorated Paralympic player by winning his third medal, a silver at the 2020 Summer Paralympics at Tokyo.He delivered an astonishing lecture on 'A journey beyond differences', to inspire youths out of his journey, during national social summit 2022 ",

      image: Devendra,
    },
    {
      id: 2,
      name: "Dr Roderico H. Ofrin",
      post: "",
      descp:
        "Born in 1968 in the Philippines, Dr Roderico H. Ofrin is currently WHO India representative. Dr Ofrin holds a Doctor of Medicine from the University of the Philippines; and a Master’s in Public Health from Hebrew University Hadassah, Israel.Dr Ofrin comes with a rich experience of over two decades in public health. His extensive experience and expertise covers critical issues impacting health of people in the 11 Member countries, including India.Dr Ofrin has served in multiple roles starting as a Public Health Officer in a war-ravaged island nation of Timor-Leste, assisting in setting up of its health systems.Dr Ofrin was a keynote speaker under the 'Impact Series' , a series of guest lectures, and delivered a session on 'The gargantuan inoculation drive: a vaccine for everyone'.",
      image: Roderico,
    },

    {
      id: 3,
      name: "Atrayee S Sanyal",
      post: " Guest of Honor",
      descp:
        "'A journey where all of us are sensitized about the problem and all are ambassadors of it, becomes easier to combat', said Miss atreeya s sanyal, chief guest of social summit 2k22. She delivered a session on 'Embracing target-driven D & I at workplace', under the 'impact series', the guest lecture series of social summit. Atreeya sarkar sanyal is currently the vice president, HRM of tata steel Ltd. She did her graduation from University of Calcutta and masters from IIM Calcutta. She served tata steel for the last 5 years, starting from marketing and sales and then in human resource management.",
      image: Atrayee,
    },
    {
      id: 4,
      name: "Kiran Bedi",
      post: "",
      descp:
        "Kiran Bedi is an Indian social activist, former-tennis player who became the first woman in India to join the officer ranks of the Indian Police Service.Her talk revolved mostly around the concept of ‘Leadership with Conscience’. Conscience, as Dr. Bedi explained it, is a person’s ability to discern right from wrong. In a holistic way, she tried to propose a solution to the quintessential problem of lack of moral discipline among the country’s population.She believed that this lack of morality could be attributed to the absence of ethical education. Dr. Kiran Bedi’s presence quite easily left an imprint on the listeners’ mind.",
      image: Kiran,
    },

    {
      id: 5,
      name: "Shri. Pushkar Singh Dhami",
      post: "CEO- Swades Foundation",
      descp:
        "Shri. Pushkar Singh Dhami, hon’ble Chief Minister of Uttarakhand had joined us at our institute and made the opening ceremony of the first ever event of NSS, IITR called Sustainability Conclave, was organized in alignment with the United Nations Sustainable Development Goals.Pushkar Singh Dhami launched the TechSarthi scheme which will focus on industries to help adopt technically sound solutions, gear up their growth, and realize the objective of “Local to Global”. The Conclave was divided into conferences for sustainable development, followed by a series of innovative exchanges of strategies to help achieve long-term sustainability, workshops, hackathons, ideation, case studies and policy case competitions, among others. He hosted The Sustainability Conclave 2022 which aimed to model and address the rising issues including climate change, environmental degradation, energy crisis, and water shortage. His presence made the day and the ceremony even more contented.",
      image: Pushkar,
    },
    {
      id: 6,
      name: "Sonam Wangchuk",
      post: "Vice President HRM- Tata Steel",
      descp:
        "An Indian Engineer, Raman Magsaysay Awardee, innovative and education reformist. The pioneer of the Ice Stupa project; fully solar powered SECMOL campus and Operations New Hope.He gave a tremendous speech in an event organised by the NSS team of IIT Roorkee. His speech focuses on the minute things which each one us should take care about nature and most precious climate, this focuses on the sustainable innovations and eco-friendship.",
      image: Sonam,
    },
  ];

  return (
    <div className="speakersPage">
      <div className="headingSpeaker">
        <h1>Speakers</h1>
        {/* <p>10+ hours of thrilling session</p> */}
      </div>

      {data.map((element) => {
        return (
          <Speaker
            key={element.id}
            id={element.id}
            name={element.name}
            post={element.post}
            descp={element.descp}
            image={element.image}
            
          />
        );
      })}
    </div>
  );
}

export default Speakers;
