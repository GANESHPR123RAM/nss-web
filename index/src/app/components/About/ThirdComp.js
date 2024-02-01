import React from "react";
import TeamCardComponent from "./TeamCardComponent";
import img1 from "../../assets/images/dummy.png";
function ThirdComp() {
  return (
    <div className="p-5-sm-0">
      <div className="row justify-content-center p-5">
        <div className="col-sm-12 col-md-6">
          <h1 style={{ fontFamily: "Raleway", fontWeight: "700" }}>OUR TEAM</h1>
          <p className="py-3" style={{ fontFamily: "Roboto" }}>
            NSS IIT Roorkee is taking a step forward to dedicate the next
            edition of its annual flagship event, the National Social Summit, to
            the healthcare workers, including doctors, nurses, and all social
            service warriors, who are battling against the threat of COVID-19 to
            keep us safe.
          </p>
        </div>
        <div className="col-sm-0 col-md-6"></div>
      </div>
      <div className="row justify-content-center p-5 pt-0">
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <TeamCardComponent img={img1} memberName="Ishank" memberPost="Overall-Co-ordinator" />
        </div>
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <TeamCardComponent img={img1} memberName="VISION" memberPost="" />
        </div>
      </div>
      <div className="row justify-content-center p-5 pt-0">
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <TeamCardComponent img={img1} memberName="VISION" memberPost="" />
        </div>
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <TeamCardComponent img={img1} memberName="VISION" memberPost="" />
        </div>
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <TeamCardComponent img={img1} memberName="VISION" memberPost="" />
        </div>
      </div>
      <div className="row justify-content-center p-5 pt-0">
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <TeamCardComponent img={img1} memberName="VISION" memberPost="" />
        </div>
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <TeamCardComponent img={img1} memberName="VISION" memberPost="" />
        </div>
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <TeamCardComponent img={img1} memberName="VISION" memberPost="" />
        </div>
      </div>
      <div className="row justify-content-center p-5 pt-0">
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <TeamCardComponent img={img1} memberName="VISION" memberPost="" />
        </div>
        <div className="col-sm-12 col-md-3 d-flex justify-content-center">
          <TeamCardComponent img={img1} memberName="VISION" memberPost="" />
        </div>
      </div>
    </div>
  );
}
export default ThirdComp;