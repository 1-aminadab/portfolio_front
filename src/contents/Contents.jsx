import React, { useEffect, useState } from 'react'
import Welcome from './welcome/Welcome'
import About from './about/About'
import Contact from './contact/Contact'
import Skills from '../skills/Skills'
import Review from './projects/review/Review'
import './Contents.css'
function Contents() {
  var [circleArray, setCircleArray] = useState([])
  var circleSize = 100
  useEffect(()=>{
    for (let index = 0; index < 20; index++) {
      setCircleArray((prev)=>{
        return [...prev,  {
          top:`${Math.random()*window.innerHeight-circleSize}px`,
          left:`${Math.random()*window.innerWidth-circleSize}px`,
          size:`${Math.random()*circleSize}px`,
          delay:`${Math.random()*3}s`
        }]
      })
     
      
    }
  },[])
 
  return (
    <div className='contents'>
     {
      circleArray.map((circles)=>{
        return <div className="random" style={{top:circles.top , left:circles.left, width:circles.size, height:circles.size, animationDelay:circles.delay}}>
        </div>
      })
     }
      
        <Welcome />
        {/* <Projects/> */}
        <Review />
         <About />
         <Skills />
         <Contact />
    </div>
  )
}

export default Contents