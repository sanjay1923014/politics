import React from 'react'
import "./About.css"
import Sidebar from '../sidebar/Sidebar'


const About = () => {
  return (
    <>

    <div className="about-about about">

    <div className="about-one">
    
    </div>
    
    <div className="about-two">
    
    <div className="about-two-one"></div> 

   <div className="input" style={{marginTop:"100px",marginLeft:"-100px"}}>
   <iframe /* width="600" height="340" */  src="https://www.youtube.com/embed/sYZtOFzM78M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen className="iframe"></iframe>
    <a href="https://jansampark.org/contact.php"><button className="about-one-btn">Join Our Team</button></a>
   </div>
    </div>


    <Sidebar/>
    </div>
    
    
    </>
  )
}

export default About