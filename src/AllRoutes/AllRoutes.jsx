import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from '../components/main/Main'
import Home from '../components/home/Home'
import About from '../components/about/About'
import Driving from '../components/driving/Driving'
import Sidebar from '../components/sidebar/Sidebar'
import Work from '../components/work/Work'
import Impact from '../components/impact/Impact'
import Media from '../components/media/Media'
import Contact from '../components/contact/Contact'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/sidebar" element={<Sidebar/>}/>
    <Route path="/driving" element={<Driving/>}/>
    <Route path="/work" element={<Work/>}/>
    <Route path="/impact" elemengt={<Impact/>}/>
    <Route path="/media" element={<Media/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}

export default AllRoutes