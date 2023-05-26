import React from 'react'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import {Routes, Route} from 'react-router-dom'
import Comp1 from './components/pages/Comp1'
import Comp2 from './components/pages/Comp2'
const AllRutes = () => {
  return (
    <>
    <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="comp1" element={<Comp1 />} />
            <Route path="comp2" element={<Comp2 />} />
          </Routes>
    </>
  )
}

export default AllRutes