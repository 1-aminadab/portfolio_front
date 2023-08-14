import { useState } from 'react'
import Navbar from './navbar/Navbar'
import Contents from './contents/Contents'
import './App.css'
import ScrollToTop from "react-scroll-to-top";
import axios from 'axios';
function App() {
  const [darkMode, setDarkMode] = useState(false)
 const handleColorChange = ()=>{
  document.documentElement.style.setProperty('--dark-mode', `${darkMode ? 'black':'gray'}`)
  document.documentElement.style.setProperty('--light-mode', `${darkMode ? 'gray':'rgb(51, 51, 51)'}`)
 }
 axios.defaults.withCredentials = true
  return (
    <>
      <div className='app'>
        
        <div className='inside-app'>
          <Navbar />
          <Contents />
        </div>
        <div style={{background:'blue'}}>
           <ScrollToTop smooth />
        </div>
       
      </div>
    </>
  )
}

export default App
