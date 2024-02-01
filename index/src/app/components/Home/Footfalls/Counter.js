// import React, { Component } from "react";

// import CountUp from "react-countup";

// class Counter extends Component {
//   render() {
//     return (
//       <div className="container th-home-footfall-container">
//         <div className="row justify-content-center p-0 m-0 ft-box" >
//           <div className="col-sm-3 col-6 text-center ft-text">
//             <CountUp
//               start={0}
//               end={12000}
//               className="mb-1 th-home-count"
//               suffix="+"
//               duration={5}
//             />
//             <p className="th-home-count-text mb-0">Footfall</p>
//           </div>
//           <div className="col-sm-3 col-6 text-center ft-text">
//             <CountUp
//               start={0}
//               end={100}
//               className="mb-1 th-home-count"
//               suffix="+"
//               duration={5}
//             />
//             <p className="th-home-count-text mb-0">Partners</p>
//           </div>
//           <div className="col-sm-3 col-6 text-center ft-text">
//             <CountUp
//               start={0}
//               end={100}
//               className="mb-1 th-home-count"
//               suffix="+"
//               duration={5}
//             />
//             <p className="th-home-count-text mb-0">Prizes</p>
//           </div>
//           <div className="col-sm-3 col-6 text-center ft-text">
//             <CountUp
//               start={0}
//               end={20}
//               className="mb-1 th-home-count"
//               suffix="+"
//               duration={5}
//             />
//             <p className="th-home-count-text mb-0">Events</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
import React, { Component } from "react";
import fimg from './images/Black.png';
import pimg from './images/Group 112.png';
import primg from './images/Black1.png';
import eimg from './images/Group 111.png';
import background from '../../Home/images/final_background.png';
import CountUp from "react-countup";

class Counter extends Component {
  render() {
    return (
      <div className="footfall">
        <img src={background} alt="" className="backimg" />
        <div className="footfallbox">
          <div className="finbox">
            <img src={fimg} alt="" className="fimg1" />
            <p className="ftext">Footfalls</p>
          </div>
          <p className="fcount">
            <CountUp
                start={0}
                end={15000}
                className="mb-1 th-home-count"
                suffix="+"
                duration={2}
            />
          </p>
        </div>
        <div className="partnersbox">
          <div className="pinbox">
            <img src={pimg} alt="" className="pimg1" />
            <p className="ftext">Collaborations</p>
          </div>
          <p className="fcount">
            <CountUp
                start={0}
                end={50}
                className="mb-1 th-home-count"
                suffix="+"
                duration={2}
            />
          </p>
        </div>
        <div className="prizesbox">
          <div className="prinbox">
            <img src={primg} alt="" className="primg1" />
            <p className="ftext">Colleges Covered</p>
          </div>
          <p className="fcount">
            <CountUp
                start={0}
                end={500}
                className="mb-1 th-home-count"
                suffix="+"
                duration={2}
            />
          </p>
        </div>
        <div className="eventsbox">
          <div className="einbox">
            <img src={eimg} alt="" className="eimg1" />
            <p className="ftext">Zonals</p>
          </div>
          <p className="fcount">
            <CountUp
                start={0}
                end={30}
                className="mb-1 th-home-count"
                suffix="+"
                duration={2}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default Counter;