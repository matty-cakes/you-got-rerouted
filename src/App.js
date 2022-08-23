/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Home from './Components/Home'
import Contact from './Components/Contact'
import FAQ from './Components/FAQ'
import About from './Components/About'
import { Routes, Route, Link } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <nav className='demo'>
        <a href='#' className='brand'>
          <span>YGRR 🛩</span>
        </a>

        <div className='menu'>
          <Link to='/' className='pseudo button'>Home</Link>
          <Link to='/about' className='pseudo button'>About</Link>
          <Link to='/contact' className='pseudo button'>Contact</Link>
          <Link to='/faq' className='pseudo button'>FAQ</Link>
        </div>

      </nav>
      {/* Pages Our App Has */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
      </Routes>
    </div>
  )
}

export default App
