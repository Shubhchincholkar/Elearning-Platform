import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

const App = () => {

  let [theme, setTheme] = useState(true)


  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer theme={theme} setTheme={setTheme} />
    </>

  )
}

export default App