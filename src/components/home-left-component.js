import './home-left-component.css'
import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'
// import './leftContent.css'
// import RightContent from './rightContent'
import Socialmedia from '../components/socialmedia'
import Button from '../components/button';
const HomeLeftComponent = () =>{
  const downloadcv = {title:"Download CV"}
  const contactme = {title:"Explore"}
  useEffect(()=>{
    AOS.init({duration: 2000});
  })
    return(
      
<div  class="left" data-aos="fade-right">
<h2>Hello It's Me</h2>
<h1>DIPALI SHENDAGE</h1>
<p >
  This is my official portfolio website 
  to show all details of UI/UX design & web development
</p>

 <div class='homepg-socialmedia'>
 <Socialmedia/> 
      </div>

<div class="btn">
  <Button {...downloadcv}/>
  <Button {...contactme}/>
</div>

</div>
);
}
export default HomeLeftComponent;





