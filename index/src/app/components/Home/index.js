import React,{useEffect,useState} from "react";
import Hometop from "./Hometop/Main";
import Events from "./HomeEvents/Events";
import Footfall from "./Footfalls";
import PastSpeakers from "./PastSpeakers/Speakers";
import { useWidthAndHeight } from "../../../hooks/useWidthAndHeight";
import Testimonials from "./Testimonials/Testimonials";
import "./css/slider.css";
import "./css/home.css";
import HeaderTop from '../../layouts/header/UpdatedPage/Components/HeaderTop'
import Background from "./Background";
import HomeContent from "../../layouts/header/UpdatedPage/Components/HomeContent";
import Header from "../../layouts/header/index";
const HomeMain = () => {
  let [width] = useWidthAndHeight();
  const [isHeaderTopVisible, setHeaderTopVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Adjust this threshold as needed

      // Check if the user has scrolled past the threshold to hide HeaderTop
      if (scrollPosition > threshold) {
        setHeaderTopVisible(false);
      } 
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
     {isHeaderTopVisible && <HeaderTop />}
    <Header />

    <div className="homeContainer">

        {/* <Hometop width={width} /> */}
      <div className="th-home-top-container">



        <HomeContent width={width}/>
        <Footfall width={width} />
          

        <PastSpeakers width={width} />
        <Events width={width} />

        <Background/>
        <Testimonials width={width} />
      </div>
    </div>
    </>
  );
};

export default HomeMain;
