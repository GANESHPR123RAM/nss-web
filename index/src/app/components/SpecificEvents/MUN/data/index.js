import React from 'react'
import unhcr from './unhcr.png';
import uncsw from './uncsw.png';
import lokSabha from './lok-sabha.png'

import MUN from './mun.svg'

import Sarbanga from './Sarbanga.jpeg';
import Kashish from './Kashish.jpeg';
import Naman from './Naman.jpeg';
import VidhiSingh from './VidhiSingh.jpeg';
import AdityaTrivedi from './AdityaTrivedi.jpeg';
import Albert from './Albert.jpeg'

export const header = {
    eventName : "Model United Nations (MUN)",
    image : MUN,
    eventInfo : "19th Mar’22 - 20th Mar’22",
    eventDescription : "With an ever-increasing craze of MUN, the National Social Summit 2022 brings you the opportunity to put yourself in the shoes of a nation’s representative. Grab the opportunity and see what it feels like to present your oratory, behavioral and thinking skills. ",
    prizeWorth :"120K",
    rulebook :"https://drive.google.com/file/d/1VbDOBJ9hEWeOMi9wgI0IwZHCDIIcuD0R/view",
    form :"https://forms.gle/MKrqu6hfWKpkUvocA"
}

export const committees = [
    {
        id: 1,
        name: "United Nations High Commissioner for Refugees",
        image: unhcr,
        description:
          "The United Nations High Commissioner for Refugees is one of the three committees that will be a part of the discussion in MUN. Mandation is to aid and protect refugees, forcibly displaced communities, and stateless people, and to assist in their voluntary repatriation, local integration or resettlement to the third nation.",
        button1Name: 'Background Guide',
        button1Link: 'https://drive.google.com/file/d/1aGd56wFW5yx0iqwB_OLun5R3UrstAvhv/view?usp=sharing',
        button2Name: 'Country Matrix',
        button2Link: 'https://drive.google.com/file/d/11-L8krecgm8KpcKP-rg4h3HlXVK-vher/view?usp=sharing'
        },
      {
        id: 2,
        name: "United Nations Comission on the Status of Women",
        image: uncsw,
        description:
          "The United Nations Commission on the Status of Women is one of the third committees that will be part of the discussion in MUN. It is one of the main UN organs and has been described as the UN organ promoting gender equality and the empowerment of women. Being a benefactor of women’s rights, this committee will focus on deliberation on the situation of women in middle east countries.",
        button1Name: 'Background Guide',
        button1Link: 'https://drive.google.com/file/d/14xk3cDShWq8RmfXBdutF5ys8O78tPOLT/view?usp=sharing',
        button2Name: 'Country Matrix',
        button2Link: 'https://drive.google.com/file/d/14TD9wWTAOXHCXtyfnsY54SWIL2vTn64U/view?usp=sharing'
        },
      {
        id: 3,
        name: "Lok Sabha",
        image: lokSabha,
        description:
          "Lok Sabha is the third committee that will be a part of the discussion in MUN. Members of the Lok Sabha are elected by adult universal suffrage and a first-past-the-post system to represent their respective constituencies. This committee will be discussing the viability of cryptocurrencies as a legal tender.",
          button1Name: 'Background Guide',
          button1Link: 'https://drive.google.com/file/d/1aEzikrGnG24jL9RbeMXFHc3XwPM4PHau/view?usp=sharing',
          button2Name: 'Members List',
          button2Link: 'https://drive.google.com/file/d/1H1DQy9HKwkT6hwS308FoyXYIpQkLKo1y/view?usp=sharing'
        },
]

export const executiveBoard = [
    {
      id: 1,
      image: Sarbanga,
      name: "Sarbanga Mishra",
      position: "Chairperson (UNHRC)",
      description:
        "Mr. Sarbanga Mishra is an ardent MUNer from the Odisha circuit, pursuing his bachelor's degree at Christ University, Bangalore. As a delegate, Mr. Mishra has attended numerous Model United Nations conferences with high awards in most of them and somewhere around 40 Best Delegate awards, many of which are from prestigious institutions across India. He strongly believes that every good executive board member must be a quality delegate first as that clearly gives one a strong insight into MUNs. A student of journalism himself, he is no stranger to the field. Being part of the Indian MUNing circuit since 2014 and having done more than 150 conferences, he has chaired numerous institutional MUN conferences based in sundry circuits of India and is well known for being an executive board member who has mastered the technicalities of MUNs, which adds to his credibility as well as impeccable MUNing skills. /n We believe that he not only brings to the table a plethora of knowledge but also an ability to moderate committees to the best of his abilities, with utmost rectitude./n Other than being an MUNer, he's also a well known debater, spoken poet, national level martial artist, sterling wordsmith, enthusiastic chess player and published writer. Furthermore, he takes keen interest in journalism and International relations. He claims that reading and researching would always be his 'metaphorical crushes'.",
    },
    {
      id: 2,
      image: VidhiSingh,
      name: "Vidhi Singh",
      position: "Vice-Chairperson (UNHRC)",
      description: "Vidhi Singh is a second-year undergraduate pursuing Economics Hons. from Lady Shri Ram College for Women, India. In her Diplomatic Career, Vidhi worked with Prestigious Organizations like  Harvard MUN India and Geneva Int. MUN. “Small Change, Big Impact,” forms the cornerstone of her work./n She vociferously believes in diplomacy, intersectional feminism and child rights advocacy. She looks forward to a successful conference at IIT Roorkee MUN and her advice is to internalise this parity of professionalism and kindness.",
    },
    {
      id: 3,
      image: AdityaTrivedi,
      name: "Aditya Trivedi",
      position: "Chairperson (UNCSW)",
      description: "Aditya Trivedi is a penultimate year law student at National Law University and Judicial Academy, Assam. He has been a delegate at Harvard Project for Asian and International Relations (HPAIR 2021), UNDP Bangkok's Regional Dialogue on Climate Action, Speaker at UN 75 Dialogue (May 2020) and participant at UNEP Youth Environment Assembly among other UN conferences. He is involved in organizational leadership and youth initiatives. He is the Founding Convenor of NSS Unit of NLU Assam, State Ambassador (Madhya Pradesh) of Kavyavarsha, Coordinator of Young Thinkers' Forum Assam, among other leadership roles. He has chaired MUNs like Amity Jaipur, JIMS Delhi, MUNity International and participated with distinction in prestigious MUNs like IIT BHU MUN, IIM Kashipur MUN, HNLU MUN, etc.",
    },
    {
      id: 4,
      image: Kashish,
      name: "Kashish Gumber",
      position: "Vice-Chairperson (UNCSW)",
      description: "Kashish Gumber, a prodigious debater and a marvellous orator, is a human full of life. In a nutshell, she is a happy- go- lucky person hailing from the city of New delhi. She is currently pursuing Psychology Honours from Zakir Hussain College, Delhi University. She has been a prominent debater and a national level chess player, who is occasionally found engrossed in theatres. With all these achievements under her belt, she has been serving the Model UN Circuit in various capacities from the past 5 years and has also been the adjudicator for India's largest debate event. /n Additionally, Kashish has been part of UNICEF'S World Children's Day Celebration (in association with Go Blue Campaign and Expressions India.) She was invited to Global Young Leaders Conference, New York as the Youth Delegate from India.  She has done many courses offered by United nations specially the ones by UNW. She firmly believes that MUNs and theatre function on common grounds that is 'justification of role being directly proportional to the success.' She can't wait to welcome new perspectives.",
    },
    {
      id: 5,
      image: Naman,
      name: "Naman Jain",
      position: "Speaker (Lok Sabha)",
      description: "Naman Jain is a 5th year law student pursuing BBALLB from Delhi Metropolitan Education Noida,(GGSIPU). He has been actively participating in MUNs and YPs.Apart from MUN, he is a football lover. He loves his committee to be bit informal but at the same time does not compromise with decorum.  Having immense interest in law , his forte is in Indian committees."
    },
    {
      id: 6,
      image: Albert,
      name: "Albert Gurung",
      position: "Deputy Speaker(Lok Sabha)",
      description: "Albert Gurung is a final year UG student of Rajdhani College, University of Delhi. Having done his schooling from Pinegrove School, Himachal, he comes from the beautiful Himalayan state of Sikkim. His MUN journey started from The PWS MUN 2015, organized by The Pathways World School, Aravali Hills, Haryana. He was the recipient of a Special Mention award at Selaqui International School MUN 2016, where his school delegation got the best delegation award. He has also participated in Cathedral MUN, organized by St Cathedral School, Mumbai, which is one of the oldest MUN in India.  Also,he was one the delegates from his school, at Sanskriti MUN 2016 at New Delhi. Apart from MUN, he is a great quizzer, and has won some of the best quizzes in the country, like All India Challenger Quiz, RIMC, Dehradun, All India JK Kate Memorial Quiz, Punjab Public School, Nabha, All India Llewellyn Quiz, Sherwood College, Nainital etc. He was awarded High commendation at Charcha-The Youth Symposium, Rajdhani College 2020 in Lok Sabha. He is also an emerging student leader, starting from his days at Pinegrove School as the Head Boy. He was the General Secretary of Northeast Students Society of his college,one of executive members of Sikkim Students Association,Delhi, State Coordinator(Sikkim) of Youth Forum, Northeast Progressive Youth. He was awarded the prestigious King Constantine Medal in social service 2019 by the Round Square International, United Kingdom, for setting up libraries in remote schools located in rural areas of Sikkim. Mr Gurung has also participated in two International Conferences, namely Round Square International Conference 2018 held at Lower Canada College, Montreal and Sister Cities International California Youth Leadership Summit 2021. He is also a youth motivator and a Youth activist, and is one of the most popular youth icons of Sikkim. He has formed numerous Youth Clubs which carry a number of Social initiatives in Sikkim, like Wandering Souls of Sikkim, Sikkim Youth Parliament, YUVA(Youth United for Visionary Actions) Club to name a few. He is also a seasoned Soccer and Hockey Player. "
    },
  ];