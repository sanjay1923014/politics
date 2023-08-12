import React from 'react';
import "./Home.css"
import SimpleSlider from './Slider';
import one from "../../assets/blog1.jpg"

const Home = () => {
  return (
   <>
   <div className="home-home home" >
   <SimpleSlider/>
   
   
   </div>
   <div id='big-cont'>
   <img style={{height:'300px',objectFit:'cover',width:'100%'}} src={one} alt="image"/>
   </div>
   </>
  )
}

export default Home