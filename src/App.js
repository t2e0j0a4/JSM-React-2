import React from 'react'

import "./App.css";

import { Navbar } from "./Components";

// import { About , Chef , FindUs , Footer , Gallery , Header , Intro , Laurels , Menu } from "./Containers";

import { Header , About } from "./Containers";

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header/>
      <About/>
      {/* <Menu/>
      <Chef/>
      <Intro/>
      <Laurels/>
      <Gallery/>
      <FindUs/>
      <Footer/> */}
    </div> 
  )
}

export default App