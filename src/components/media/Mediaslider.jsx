import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import MediaCard from './Mediacard';
import MediaCard1 from './Mediacard1';
import MediaCard2 from './Mediacard2';
import MediaCard3 from './Mediacard3';
import MediaCard4 from './Mediacard4';
import MediaCard5 from './Mediacard5';

const Mediaslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div>
     
      <Slider {...settings}>
        <div>
          <MediaCard/>
        </div>
        <div>
        <MediaCard1/>
        </div>
        <div>
        <MediaCard2/>
        </div>
        <div>
        <MediaCard3/>
        </div>
        <div>
        <MediaCard4/>
        </div>
        <div>
        <MediaCard5/>
        </div>
      </Slider>
    </div>
  );
};

export default Mediaslider;
