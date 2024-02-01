import React, { useState } from "react";
import "../styles/readmore.css";
// import "./Main"

const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="text">
	{isReadMore ? text.slice(0, 250) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...Read more" : " Show less"}
	</span>
	</p>
);
};
// .para{
//     text-align: center;
//     padding: 16px;
//     padding-left: 10px;
//     padding-right: 30px;
//   }
const Content = (props) => {
return (
	<div className="para" style={{padding: "16px"}} >
	
		<ReadMore >
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt excepturi dolor ipsum perferendis voluptates quaerat error ipsam atque deleniti temporibus. Voluptatibus ducimus soluta, asperiores expedita animi cumque, eligendi accusamus provident optio cupiditate fugiat quo nam ex ullam tempora? Ea quod amet illo incidunt recusandae dicta aspernatur aliquam asperiores odit? Doloribus. */}
			  {props.data}
        </ReadMore>
		
		
	
	</div>
);
};

export default Content;
