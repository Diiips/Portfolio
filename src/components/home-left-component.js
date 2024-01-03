import './home-left-component.css'
// import './leftContent.css'
// import RightContent from './rightContent'
import Socialmedia from '../components/socialmedia'
import Button from '../components/button';
const HomeLeftComponent = () =>{
  const downloadcv = {title:"Download CV"}
  // const contactme = {title:"Explore"}
    return(
      
<div  class="left">
<h2>Hello It's Me</h2>
<h1>DIPALI SHENDAGE</h1>
<p>
  This is my official portfolio website 
  to show all details of UI/UX design & web development
  
</p>

 <div class='homepg-socialmedia'>
 <Socialmedia/> 
      </div>

<div class="btn">
  <Button {...downloadcv}/>
  {/* <Button {...contactme}/> */}
</div>

</div>
);
}
export default HomeLeftComponent;





