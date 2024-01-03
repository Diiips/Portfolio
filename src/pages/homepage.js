import HomeLeftComponent from '../components/home-left-component';
import HomeRightComponent from '../components/home-right-component';
import './homepage.css'

export default function HomePage(){
    return(
        <div className='home-page'>
            <HomeLeftComponent/>
            <HomeRightComponent/>
        </div>
    );
}