import React, { useEffect, useState,useLayoutEffect } from 'react'
import './Navbar.css'
/// Toggle package
import DayNightToggle from 'react-day-and-night-toggle'
// ICONS
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const navOptions =['home', 'projects', 'about', 'skill', 'contact']

function Navbar() {
  const [darkMode, setDarkMode] = useState(false)
  const [clickedOption, setClickedOption] = useState(0)
  useEffect(()=>{
    handleDarkmode()
  },[darkMode])
 
  const clickHandler = (id)=>{
    setClickedOption(id)
  }
  const handleDarkmode = ()=>{
    document.documentElement.style.setProperty('--dark-mode', `${darkMode ? '#2e2e2e':'#f6f6f6'}`)
    document.documentElement.style.setProperty('--light-mode', `${darkMode ? '#ddd':'rgb(51, 51, 51)'}`)
   }

  //  ////////////
  
  //////////
  return (
    <div className='nav-bar nav-blur'>
      <div className="nav-options">
        <ul>
          {
            navOptions.map((option, id)=>{
              return (
                 <li onClick={()=>clickHandler(id)} key={id} className={`${clickedOption === id && 'active'}`}><a href={`#${option}`}>{option.toUpperCase()}</a> </li>
              )
             
            })
          }
          
          
        </ul>
      </div>
      <div className="links">
        <ul>
          <li><a href="https://mail.google.com/mail/u/developer.amanuel@gmail.com?"><EmailIcon /></a> </li>
          <li><a href="https://www.linkedin.com/in/amanuel-tadesse-870416232"><LinkedInIcon /></a></li>
          <li><a href="https://web.telegram.org"><TelegramIcon /></a></li>
          <li><a href="https://github.com/1-aminadab"><GitHubIcon /></a></li>
        </ul>
      </div>
      <DayNightToggle
      onChange={() => setDarkMode(!darkMode)}
      checked={darkMode}
    />
    </div>
  )
}

export default Navbar