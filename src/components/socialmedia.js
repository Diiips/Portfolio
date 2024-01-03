import './socialmedia.css'
import facebook from '../Images/fb3d.png'
import instagram from '../Images/ig1.png'
import linkedin from '../Images/linkedin1.webp'
import figma from '../Images/figmaimg.png'
import github from '../Images/github5.png'

export default function Socialmedia(){
    return(
      

        <div class="social-media">

            <a href="https://www.facebook.com/profile.php?id=100085780639886&mibextid=ZbWKwL">
              <img src={facebook} alt="facebooklink"/>
            </a>
            
            <a href="https://instagram.com/diiips_23?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D">
              <img src={instagram} alt="instagramlink"/>
            </a>
            

            <a href="https://www.linkedin.com/in/dipali-shendage-6044b022b">
              <img src={linkedin} alt="linkedlinlink"/>
            </a>

            <a href="https://figma.com/@dipalishendage">
              <img src={figma} alt="Figmacommunitylink"/>
            </a>
 
            <a href="https://github.com/Diiips" >
              <img src={github} alt="replitimg"/>
            </a>
        </div>
      
    );
}