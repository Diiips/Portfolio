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
  to show all details of UI/UX design & Web development
</p>

 <div class='homepg-socialmedia'>
 <Socialmedia/> 
      </div>

<div class="btn">
  <a href='https://drive.google.com/file/d/1-fE1ep1Z_6ok8gVBU7NpUpPVY2paPKcQ/view?usp=drivesdk' download>
  <Button {...downloadcv}/>
  </a>
  
 <a href='https://linktr.ee/diiips?utm_source=linktree_profile_share&ltsid=8e8bc5fd-1879-4b78-90c5-1b1459fe9f2b'>
       <Button {...contactme}/>
 </a>
 
</div>

</div>
);
}
export default HomeLeftComponent;





