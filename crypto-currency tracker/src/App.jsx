import React from 'react'
import NavBar from './components/Nav-bar/NavBar'
import Home from './pages/home/Home'

function App(){
  return (
    <div className='bg-gradient-to-r from-color-one via-color-two to-color-three text-white min-h-screen font-s'>
      <NavBar/>
      <Home/>
    </div>
  )
}

export default App
