import React from 'react'
import ProfileImage from '../../assets/profile-image2.jpg'
import MyCV from '../../assets/my-cv/my-cv.pdf'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import './Welcome.css'
function Welcome() {
  return (
    <div className="welcome-message" id='home'>
    <div className="message">

        <h1>Hi I'm <span className="my-name">Amanuel</span> ,Turning <span>idea</span>  into <span>real</span> life is my Goal </h1>
        <div className='message-btn'>
              <button ><a href="#contact">Contact me</a></button>
              <button className='my-cv'><a href={MyCV} download> <span>Download CV</span><span><DownloadOutlinedIcon /></span></a></button>
        </div>
   
    </div>
    <div className="profile-picture">
        <img src={ProfileImage} alt=""/>
        <div className="name-works">
            <h1 >Amanuel Tadesse</h1>
            <h4>Software developer</h4>
        </div>
    </div>
</div>


  )
}

export default Welcome