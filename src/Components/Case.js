import React from 'react'
import { useParams } from 'react-router-dom'
import { getCases } from '../data'

function Case () {
  const params = useParams()
  console.log(params)
  const c = getCases().find(_c => _c.id === params.caseID)
  console.log(c)
  return (
    <div className='Case'>
      <header>
        <h1>You Got Re-Routed 🛩</h1>
        <h2>Case</h2>
        <p>ID: {c.id}</p>
        <p>Name: {c.name}</p>
        <p>Description: {c.description}</p>
      </header>
    </div>
  )
}

export default Case
