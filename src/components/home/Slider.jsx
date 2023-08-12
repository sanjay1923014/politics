import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Image1 from "./Image1";
import Image2 from "./Image2";

const SimpleSlider = () => {
  const [settings, setSettings] = useState({
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    arrows:true
  });

  useEffect(() => {
    // Code inside this block will be executed once when the component mounts
    // Similar to componentDidMount in class components
    // You can add any additional setup logic here if needed

    // Return a cleanup function if you want to do some cleanup when the component unmounts
    // Similar to componentWillUnmount in class components
    return () => {
      // Perform cleanup here (if necessary)
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    <div >
     
      <Slider {...settings}>
        <div>
          <Image1/>
        </div>
        <div>
        <Image2/>
        </div>
        
       
      </Slider>
    </div>
  );
};

export default SimpleSlider;
