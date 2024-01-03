import './home-right-component.css'
import myimg from '../Images/myimg.png'

export default function HomeRightComponent(){
    return(
        <div className='img-block'>
            <div class="right">
          <img src={myimg} alt="myimage" />
        </div>
        </div>
        
    );
}