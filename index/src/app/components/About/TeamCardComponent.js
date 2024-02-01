import React from "react";
function TeamCardComponent(props) {
  return (
    <div>
      <div
        class="card border-light mb-3d text-center"
        style={{ fontFamily: "Inter",width:"15rem", backgroundColor : "#fafafa"}}
      >
      </div>
      <img src={props.img} style={{backgroundColor: "#5C3AA3", borderRadius:"50%"}} class="card-img-top " alt="..." />
        <div class="card-body">
          <h5 class="card-title" style={{ fontFamily: "Roboto",fontWeight:"700" }}>
            {props.memberName}
          </h5>
          <p class="card-text" style={{ fontFamily: "Roboto" ,fontWeight:"400"}}>
            {props.memberPost}
          </p>
        </div>
      </div>
    );
}
export default TeamCardComponent;