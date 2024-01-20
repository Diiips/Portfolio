
import './progressbar.css'
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Progressbar(props){
  const mystyle = {
    width:`${props.percent}`
  }
  useEffect(()=>{
    AOS.init({duration: 1500});
  })
  return(
    <div className='progressbar-container'>
      <div className='progressbar-info'>
        <h5>{props.headline}</h5>
        <h5>{props.percent}</h5>
      </div>

        <div className='progressbar-outer'>
        <div className='progressbar-inner' style={mystyle} data-aos="fade-right">

        </div>
    </div>
    </div>
    
  );
}