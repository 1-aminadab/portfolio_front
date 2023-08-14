import React from 'react'
import ProfileImage from '../../assets/profile-image2.jpg'
import './Welcome.css'
function Welcome() {
  return (
    <div className="welcome-message" id='home'>
    <div className="message">

        <h1>Hi I'm <span className="my-name">Amanuel</span> ,Turning <span>idea</span>  into <span>real</span> life is my Goal </h1>
        <button>Contact me</button>
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