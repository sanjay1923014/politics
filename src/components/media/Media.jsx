import React from 'react'
import "./Media.css"
import Mediaslider from './Mediaslider'

const Media = () => {
  return (
   <>
   
   <div className="media-media media">
  
  

   <div className="media-one">
   
   <div className="mediaslider"><Mediaslider/></div>
   </div>

   <div className="media-two">
   <button className="media-button">View & Download</button>
   </div>

   </div>
   
   </>
  )
}

export default Media