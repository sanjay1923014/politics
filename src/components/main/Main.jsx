import React from 'react'
import "./Main.css"
import Home from '../home/Home'
import About from '../about/About'
import Sidebar from '../sidebar/Sidebar'
import Driving from '../driving/Driving'
import Work from '../work/Work'
import Impact from '../impact/Impact'
import Media from '../media/Media'
import Contact from '../contact/Contact'

const Main = () => {
  return (
   <>
   <div className="main-main">

   <Home/>
   <About/>
   <Sidebar/>
   <Driving/>
   <Work/>
   <Impact/>
   <Media/>
   <Contact/>

   </div>
   </>
  )
}

export default Main;