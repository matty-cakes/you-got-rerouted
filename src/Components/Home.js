import React from 'react'

function Home () {
  return (
    <div className='Home'>
      <header>
        <h1>You Got Re-Routed 🛩</h1>
        <h2>Home</h2>
        <small>Welcome! <i>You Got Re-Routed</i> is a mythical site where all of those problems you have when you get rerouted at an airport just vanish 🪄</small>
      </header>
      <hr />
      <main>
        <button onClick={(e) => { window.alert("Don't even sweat all your travel woes have been fixed 🦄") }}>I Got Re-Routed!</button>
      </main>
    </div>
  )
}

export default Home
