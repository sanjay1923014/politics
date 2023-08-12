import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Workslider.css"

const Workslider = () => {
  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(1348);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      
      <div style={{ /*width: `${width}px`,*/ display: display ? 'block' : 'none' }} className="work-margin">
        <Slider {...settings}>
          <div className="workslider-one" id="first">
         
          </div>
          <div className="workslider-one" id="second">
            
          </div>
          <div className="workslider-one" id="third">
          
          </div>
          <div className="workslider-one" id="fourth">
            
          </div>
          <div className="workslider-one" id="fifth">
        
          </div>
          <div className="workslider-one" id="sixth">
           
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Workslider;
