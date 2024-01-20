import './getintouch.css'
import Socialmedia from '../components/socialmedia';
import getintouchimg from '../Images/getintouchimg.png'
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Getintouch(){
  useEffect(()=>{
    AOS.init({duration: 2000});
  })
    return(
        <div class="contactme-left" data-aos="fade-right">
          <div class="getintouch-intro">
            <div class="getintouch-logo">
              <h1>Get In Touch <img src={getintouchimg} alt="getintouchimg" /></h1>
            </div>
            <p>
              I'm always open to collaborate on a project or hear about an
              opportunity!
            </p>
          </div>
              


          <div class="contactmeinfo">

            <div class="phone-email">
              <div class="my-contact-email">
                <p>My Contact No-</p>
              </div>
              <div class="phone-email-info">
                <p>+917666954177</p>
              </div>
            </div>
                
            <div class="phone-email">
              <div class="my-contact-email">
                <p>My Email address-</p>
              </div>
              <div class="phone-email-info">
                <p><a href="shendagedipali73@gmail.com">shendagedipali73@gmail.com</a> </p>
              </div>
            </div>   
            <div class='getintouch-socialmedia'>
            <Socialmedia/>
            </div> 
          </div>
        </div>
    );
}