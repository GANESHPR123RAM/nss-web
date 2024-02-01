import React, { Component } from "react";
import Counter from "./Counter";


class Footfall extends Component {
  render() {
    return (
      <div className="">
        {this.props.width > 780 ? (
          <div >
            <div >
              <br/><br/>

              <Counter />
              <br/><br/>

            </div>
            {/* image overlay */}

            {/* image overlay */}
          </div>
        )  :(
          <div className="mt-5 pt-5">
            <div >
              <div >
              <br/><br/>
                <Counter />
              <br/><br/>

              </div>
              {/* image overlay */}

              {/* image overlay */}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Footfall;