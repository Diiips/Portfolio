
// import Skill from '../components/skill';
import Progressbar from '../components/progressbar';
import './skill-page.css'
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skillpage(){
   
    const skilldata1 = [
        {
            headline:"Html",
            percent:"90%"
        },
        {
            headline:"Javascript",
            percent:"80%"
        },
        {
            headline:"Css",
            percent:"85%"
        },
        {
            headline:"React",
            percent:"75%"
        },
    ]
    const skilldata2 = [
        {
            headline:"Figma",
            percent:"90%"
        },
        {
            headline:"Canva",
            percent:"80%"
        },
        {
            headline:"Adobe illustrator",
            percent:"65%"
        },
        {
            headline:"Sketch",
            percent:"60%"
        },
    ]
    useEffect(()=>{
        AOS.init({duration: 2000});
      })
    return(
    <div className='skill-page' data-aos="fade-out">
        <div className='skill-page-title' data-aos="zoom-in">
            <h1>MY Skills</h1>
        </div>

        <div className='skill-container-component'>
            <div className='skill-container'>
                {skilldata1.map((skill,index)=>(<Progressbar key={index}{...skill}/>))}
            </div>
         
            <div className='skill-container'>
            {skilldata2.map((skill,index)=>(<Progressbar key={index}{...skill}/>))}
            </div>

                
        </div>

        {/* <div>
        <center><Button {...btn}/></center> 
        </div> */}
          
    </div>
        
    );
}
