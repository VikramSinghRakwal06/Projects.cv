import React from 'react'
import NavBar from './components/Nav-bar/NavBar'
import Home from './components/pages/home/Home'
import Footer from './components/footer/Footer'

function App(){
  return (
    <div className='bg-gradient-to-r from-color-one via-color-two to-color-three text-white min-h-screen font-s'>
      <NavBar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
