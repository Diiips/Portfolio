import './getintouch.css'
import Socialmedia from '../components/socialmedia';
import getintouchimg from '../Images/getintouchimg.png'

export default function Getintouch(){
    return(
        <div class="contactme-left">
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
                <p>shendagedipali73@gmail.com</p>
              </div>
            </div>   
            <div class='getintouch-socialmedia'>
            {/* <Socialmedia/> */}
            </div> 
          </div>
        </div>
    );
}