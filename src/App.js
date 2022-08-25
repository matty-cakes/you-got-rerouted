/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { Link } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <nav className='demo'>
        <Link to='/' className='pseudo button'> <span>YGRR 🛩</span></Link>
        <div className='menu'>
          <Link to='/' className='pseudo button'>Home</Link>
          <Link to='/about' className='pseudo button'>About</Link>
          <Link to='/contact' className='pseudo button'>Contact</Link>
          <Link to='/faq' className='pseudo button'>FAQ</Link>
          <Link to='/cases' style={{ background: '#ff4136', color: 'white' }} className='pseudo button'>Cases 🔒</Link>
        </div>
      </nav>
    </div>
  )
}

export default App
