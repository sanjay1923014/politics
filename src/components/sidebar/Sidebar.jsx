import React from 'react'
import "./Sidebar.css"
/* import {Link } from 'react-router-dom' */
import image12 from "../../../src/assets/political2.png"
import {FaUsers} from "react-icons/fa"
import {FaHandBackFist} from "react-icons/fa6"
import {PiBagFill} from "react-icons/pi"
import {GiArrowScope} from "react-icons/gi"
import {FaSatelliteDish} from "react-icons/fa"
import { useState } from 'react'
import  Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Sidebar = () => {
 const [activelink,setActivelink]=useState('');

 const handleLineClick=(link)=>{
  setActivelink(link)
 }

  return (
    <>
    
    <div className="sidebar-sidebar">
    
    <Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >
    <div className={`sidebar-hand ${activelink === 'home' ? 'active' : ''}`}  onClick={() => handleLineClick('home')}>
    <img  src={image12} alt="" style={{height:"60px",width:"140px",marginTop:"5px",marginBottom:"30px"}}></img>
    <h3 className="heading3">TPP</h3>
    </div>
    </Link>
    
    <Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500} >

    <div className={`sidebar-about sidebar-options ${activelink === 'about'? 'active':''}`} onClick={() => handleLineClick('about')}>
    <FaUsers style={{height:"50px",width:"40px",marginLeft:"50px",marginTop:"15px"}}/>    
    <h3 style={{fontSize:"20px",fontWeight:"200",marginLeft:"33px",marginTop:"-10px"}}>About Us</h3>
    </div>
    </Link>
 
    <Link activeClass="active" to="driving" spy={true} smooth={true} offset={50} duration={500} >

    <div className={`sidebar-driving sidebar-options ${activelink === 'driving'? 'active':''}`}  onClick={()=>handleLineClick('driving')}>
    <FaHandBackFist style={{height:"45px",width:"50px",marginTop:"15px",marginLeft:"40px"}}/>
    <h4 style={{fontSize:"19px",fontWeight:"200",marginLeft:"20px"}}>Driving Force</h4>
    </div>
    </Link>
    
    <Link activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500} >

    <div className={`sidebar-work sidebar-options ${activelink === 'work'? 'active':''}`} onClick={()=>handleLineClick('work')} >
    <PiBagFill style={{height:"45px",width:"50px",marginLeft:"45px",marginTop:"10px"}}/>
    <h4 style={{fontSize:"19px",fontWeight:"200",marginLeft:"30px"}}>Our Work</h4>
    </div>
    </Link>
    
    <Link activeClass="active" to="impact" spy={true} smooth={true} offset={50} duration={500} >
    <div className={`sidebar-impact sidebar-options ${activelink === 'impact'? 'active':''}`} onClick={()=>handleLineClick('impact')} >
    <GiArrowScope style={{height:"50px",width:"50px",marginTop:"15px",marginLeft:"45px"}}/>
    <h4 style={{fontSize:"19px",fontWeight:"100",marginLeft:"30px"}}>Our Impact</h4>
    </div>
    </Link>

    <Link activeClass="active" to="media" spy={true} smooth={true} offset={50} duration={500} >  
    <div className={`sidebar-media sidebar-options ${activelink === 'media'?'active':''}`} onClick={()=>handleLineClick('media')}>
    <FaSatelliteDish style={{height:"50px",width:"50px",marginTop:"15px",marginLeft:"50px"}}/>
    <h4 style={{fontSize:"20px",fontWeight:"100",marginLeft:"40px"}}>Media</h4>
    </div>
    </Link> 

    <Link to="contact"> 
    <div className="sidebar-contact sidebar-options" >
    <button style={{height:"30px",width:"100px",marginTop:"14px",marginLeft:"23px",backgroundColor:"#CA1A1D",color:"white",borderRadius:"4px"}}>Join Us</button>
    <button style={{height:"30px",width:"100px",marginTop:"12px",marginLeft:"23px",backgroundColor:"#1E1E1E",color:"white",borderRadius:"4px"}}>Contact Us</button>
    </div>
    </Link> 

    </div>
    
    </>
  )
}

export default Sidebar