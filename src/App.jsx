import { useState } from 'react'
import Navbar from './navbar/Navbar'
import Contents from './contents/Contents'
import './App.css'
import axios from 'axios';
function App() {
 axios.defaults.withCredentials = true
  return (
    <>
      <div className='app'>
        
        <div className='inside-app'>
          <Navbar />
          <Contents />
        </div>
       
       
      </div>
    </>
  )
}

export default App
