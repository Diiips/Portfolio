import './aboutme.css'
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Aboutme(){
  useEffect(()=>{
    AOS.init({duration: 2000});
  })
    return(
        <div class="about-me-content-1" data-aos="zoom-in">
        <h1>About Me</h1>
<div class="abt-me-box">

        <div class="abt-me-text">
          <p>
            I'm a UI/UX designer who loves making digital things look good and easy to use. I care about understanding what people want and making sure they have a great time using what I create. I work with others to make sure our designs are awesome and user-friendly. When I'm not designing, I like to get inspired by art, nature, and technology. I'm always learning and keeping up with the latest trends to stay on top of my game. Let's team up and make something cool together!</p> 
        </div>
      </div>
          
          
                     
      
    </div>
    );
}