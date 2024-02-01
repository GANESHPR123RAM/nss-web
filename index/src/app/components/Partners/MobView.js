import React from "react";

import "./PartnerMainMob.css";
import Image from "./ImageComponent";
import HeritagePartner from "./assets/Heritagepartner.png";
import UNESCO from "./assets/Group 119.png";
import Recode from "./assets/Recode.png";
import GeeksForGeeks from "./assets/GeeksForGeeks.png";
import IndiaIsUs from "./assets/IndiaIsUs.png";
import Tides from "./assets/Tides.png";
import SankalpTaru from "./assets/SankalpTaru.png";
import Lakshyam from "./assets/Lakshyam.png";
import Sponbar from "./assets/Sponbar.png";
import Certopus from "./assets/Certopus.png";
import SponPartner from "./assets/SponPartner.png";
import D2C from "./assets/D2C.png";
import Timed from "./assets/Timed.png";
import hackerearth from "./assets/hackerearth.png";
import izone from "./assets/3izone.png";
import mrida from "./assets/mrida.png";
import ADR from "./assets/ADR.png";
import CSR from "./assets/CSR.png";
import divami from "./assets/divami.png";
import Straw from "./assets/Straw.png";
import Milan from "./assets/Milan.png";
import Pagalguy from "./assets/Pagalguy.png";
import youth from "./assets/youth.png";
import DUupdates from "./assets/DUupdates.png";
import KnowAfest from "./assets/KnowAfest.png";
import ohcampus from "./assets/ohcampus.png";
import PanIIT from "./assets/PanIIT.png";
import IndiaEducation from "./assets/IndiaEducation.png";
import AFI from "./assets/AFI.png";
import amarujala from "./assets/amarujala.png";
import atai from "./assets/atai.png";
import C3india from "./assets/C3india.png";
import avtar from "./assets/avtar.png";
import collegeduniya from "./assets/collegeduniya.png";
import edtimes from "./assets/edtimes.jpg";
import Goonj from "./assets/Goonj.png";
import Homeflicwegrow from "./assets/Homeflicwegrow.png";
import prepp from "./assets/prepp.jpg";
import unltd from "./assets/unltd.png";
import Vskills from "./assets/Vskills.png";
import zoutons from "./assets/zoutons.png";
import makeroom from "./assets/makeroom.png";
import supreme from "./assets/supreme.png";
import earthhouse from "./assets/earthhouse.jpg";
import titlesponsor from "./assets/titlesponsor.png";
import bharat from "./assets/bharat.png";
import PayPhi from "./assets/PayPhi.png";
import StreeImg from "./assets/stree.png";

import backgroundmob from "./assets/background.png";

import Header from "../../layouts/header/index";

const PartnerMob = () => {
  return (
    <>
    <Header/>
    <div className="partnerPageMob">
      <div className="patronagemob">
        <div className="hpartmob">
          <h1>Know Our Partners</h1>
        </div>
        <a href="https://en.unesco.org/" className="partimgmob" target="blank">
          <img src={UNESCO} alt="" className="rightimgmob"/>
        </a>
        <img src={backgroundmob} alt="" className="backpartmob"/>
        <div className="partcontentmob">
          Social Summit is under the patronage of UNESCO and INCCU. We are proud to receive such a honor.Social Summit is under the patronage of UNESCO and INCCU. We are proud to receive such a honor.
        </div>
      </div>
      {/* <div className="patronageMob">
        <h1 className="headingMob">TITLE SPONSOR</h1>
        <Image image={titlesponsor} width="30rem" height="15rem" link="" />
      </div>
      <div className="associateMob">
        <h1 className="headingMob">ASSOCIATE PARTNERS</h1>
        <Image
          image={Recode}
          width="30rem"
          height="15rem"
          link="https://shop.recodestudios.com/"
        />
      </div>
      <div className="associateMob">
        <h1 className="headingMob">PAYMENT PARTNER</h1>
        <Image
          image={PayPhi}
          width="30rem"
          height="15rem"
          link="https://payphi.com/"
        />
      </div> */}

      <div className="sponsorsMob">
        {/* <h1 className="headingMob">SPONSORS</h1> */}
        <div className="logo2Mob" style={{marginTop:50}}>
        <Image
            image={HeritagePartner}
            title="Heritage Partner"
            link="https://www.iitr-heritagefund.org/"
          />
             {/* <Image
            image={StreeImg}
            title="NGO Partner"
            link="https://streesafety.com/"
          /> */}
          {/* <Image
            image={GeeksForGeeks}
            title="Learning Partner"
            link="https://www.geeksforgeeks.org/"
          />
          <Image
            image={IndiaIsUs}
            title="Consulting Partner"
            link="https://www.indiaisus.com/"
          />
        </div>
        <div className="logo2Mob">
          <Image
            image={Tides}
            title="Learning Partner"
            link="http://tides.iitr.ac.in/"
          />
          <Image
            image={SankalpTaru}
            title="Green Initiative Partner"
            link="https://sankalptaru.org/"
          />
        </div> */}
        <div className="logo2Mob">
          {/* <Image
            image={Lakshyam}
            title="Education Partner"
            link="https://www.lakshyam.co.in/"
          />
          <Image image={bharat} title="Training Partner" link="" /> */}
        </div>
        <div className="logo2Mob">
          {/* <Image
            image={Sponbar}
            title="Relation Partner"
            link="https://sponbar.tech/"
          />
          <Image
            image={Certopus}
            title="Certificate Partner"
            link="https://certopus.com/"
          /> */}
        </div>
        <div className="logo2Mob">
          {/* <Image
            image={SponPartner}
            title="Sponsorship Partner"
            linnk="http://sponsorbull.com/"
          />
          <Image
            image={D2C}
            title="Online Hosting Partner"
            link="https://dare2compete.com/"
          /> */}
        </div>
        {/* <div className="logo2Mob">
          <Image image={C3india} title="Research Partner" link="" />
          <Image image={Vskills} title="Growth Partner" link="" />
        </div>
        <div className="logo2Mob">
          <Image image={Homeflicwegrow} title="Community Partner" link="" />
          <Image image={earthhouse} title="Earth House Food Partner" link="" />
        </div>

        <div className="logo3Mob">
          <Image
            image={hackerearth}
            title="Sociothon Event Partner"
            link="https://www.hackerearth.com/"
          />
          <Image
            image={izone}
            title="Action Plan Event Partner"
            link="https://3izone.com/"
          />
          <Image
            image={mrida}
            title="Case Study Partner"
            link="https://www.mridagroup.com/"
          />
        </div> 
        <div className="logo3Mob">
          <Image
            image={ADR}
            title="Policy Case Partner"
            link="https://adrindia.org/"
          />
          <Image
            image={CSR}
            title="Case Study Partner"
            link="https://www.csrindia.org/"
          />
          <Image
            image={divami}
            title="Wokshop Partner"
            link="https://www.divami.com/"
          />
        </div>
        <div className="logo3Mob">
          <Image image={atai} title="Action Plan Event Partner" link="" />
          <Image image={unltd} title="Action Plan Event Partner" link="" />
          <Image image={AFI} title="Action Plan Event Partner" link="" />
        </div>
        <div className="logo3Mob">
          <Image image={makeroom} title="Action Plan Event Partner" link="" />
          <Image image={supreme} title="Action Plan Event Partner" link="" />
          <Image image={zoutons} title="Online Coupons Partner" link="" />
        </div>
        <div className="logo3Mob">
          <Image
            image={Straw}
            title="Webinar Partner"
            link="https://www.strawindia.org/"
          />
          <Image
            image={Milan}
            title="NGO Partner"
            link="https://milaanfoundation.org/"
          />
          <Image image={prepp} title="Online Education Partner" link="" />
        </div>
        <div className="logo3Mob">
          <Image
            image={Timed}
            title="Action Plan Event Partner"
            link="https://www.timed.org.in/"
          />
          <Image image={avtar} title="Awareness Partner" link="" />
        </div>
      </div>

      <div className="onlinePartnerMob">
        <h1 className="headingMob">ONLINE MEDIA PARTNER</h1>
        <div className="logo3Mob">
          <Image
            image={Pagalguy}
            title="Online Media Partner"
            link="https://www.pagalguy.com/"
          />
          <Image
            image={youth}
            title="Youth Media Partner"
            link="https://youthincmag.com/"
          />
          <Image
            image={DUupdates}
            title="Online Media Partner"
            link="https://www.duupdates.in/"
          />
        </div>
        <div className="logo3Mob">
          <Image
            image={KnowAfest}
            title="Online Media Partner"
            link="https://www.knowafest.com/college-fests/events"
          />
          <Image
            image={ohcampus}
            title="Online Media Partner"
            link="https://ohcampus.com/"
          />
          <Image
            image={PanIIT}
            title="Online Media Partner"
            link="https://www.paniit.org/"
          />
        </div>
        <div className="logo3Mob">
          <Image image={amarujala} title="News Partner" link="" />
          <Image image={edtimes} title="Blog Partner" link="" />
          <Image image={collegeduniya} title="Online Media Partner" link="" />
        </div>
        <div className="logo3Mob logo4Mob">
          <Image
            image={IndiaEducation}
            title="Online Media Partner"
            link="https://www.indiaeducation.net/"
          />
        </div> */}
      </div>
    </div>
    </div>
    </>
  );
};

export default PartnerMob;
