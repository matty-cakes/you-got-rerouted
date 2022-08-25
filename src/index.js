/* eslint-disable react/jsx-pascal-case */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'

import Home from './Components/Home'
import Contact from './Components/Contact'
import FAQ from './Components/FAQ'
import About from './Components/About'
import Cases from './Components/Cases'
import Case from './Components/Case'
import NotFound from './Components/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* Pages Our App Has */}
      {/* Move these to _index.js_ */}
      {/* https://reactrouter.com/docs/en/v6/getting-started/tutorial#nested-routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cases' element={<Cases />} />
        <Route path='/cases/:caseID' element={<Case />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
