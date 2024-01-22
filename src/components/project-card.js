import Button from './button';
import './project-card.css'
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import backgroundimg from '../Images/backgroundimg.png'
export default function ProjectCard(props){
    const projectBtn = { title: "Explore" };
    useEffect(()=>{
        AOS.init({duration: 2000});
      })
    return(
    <div className='project' data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000">
       <div className='project-info'>
            <div className='title'>
                <h4>{props.title}</h4>
                <p>{props.subtitle}</p>
            </div>
            <div className='desc'>
                <h5>Description</h5>
                <p>{props.description}</p>
                <a href={props.buttonLink}><Button {...projectBtn}/></a>
            </div>
        </div> 
        <img className='project-img'src= {props.image} alt="Project"></img>
       
    </div>
    );
}