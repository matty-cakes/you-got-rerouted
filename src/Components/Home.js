import React from 'react'

function Home () {
  return (
    <div className='Home'>
      <header>
        <h1>You Got Re-Routed 🛩</h1>
        <h2>Home</h2>
        <small>Welcome! <i>You Got Re-Routed</i> is a mythical site where all of those problems you have when you get rerouted at an airport just vanish 🪄 We do this by employing the most magical of all creatures. namely, unicorns 🦄 these unicorns will either take your information and in 30 seconds have you safely home or if you are having a <strong>really</strong> hard day and you are certain of it you can just click the button below and enjoy the magic.</small>
      </header>
      <hr />
      <main>
        <button class='error' onClick={(e) => { window.alert("Don't even sweat all your travel woes have been fixed 🦄") }}>I Got Re-Routed And I Am Mega Sad Help Me Now!</button>
      </main>
    </div>
  )
}

export default Home
