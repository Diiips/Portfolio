import './home-right-component.css'
import myimg from '../Images/myimg.png'
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function HomeRightComponent(){
    useEffect(()=>{
        AOS.init({duration: 2000});
      })
    return(
        <div className='img-block' data-aos="fade-left">
            <div class="right">
          <img src={myimg} alt="myimage" />
        </div>
        </div>
        
    );
}