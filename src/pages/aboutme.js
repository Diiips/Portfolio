import './aboutme.css'
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
// import Button from '../components/button';

export default function Aboutme(){
  useEffect(()=>{
    AOS.init({duration: 2000});
  })
    return(
        <div class="about-me-content-1" data-aos="zoom-in">
        <h1>About Me</h1>
<div class="abt-me-box">
          <p>
          I am a <span>Computer Science</span> graduate with a robust background in <span>Web Development</span> and <span>UI/UX</span> designing, achieving a commendable CGPA of <span>8.31</span>. In my academic journey, I held leadership roles as the <span>Vice President</span> at ACES, showcasing organizational skills. I hold certifications in <span>HTML5, CSS3,</span> and <span>JavaScript</span>, emphasizing my commitment to continuous learning.I innovatively designed a highly engaging <span>AR Spark</span> Filter. I'm a <span>versatile</span> professional with technical expertise, leadership skills, and a creative touch.
          </p>
           
    </div>
    </div>
    );
}

        
        
          
          
                     
      