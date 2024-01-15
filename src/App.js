import Navbar from './components/navbar.js';

import './App.css';
import Aboutme from './pages/aboutme.js';


import Mywork from './pages/mywork.js';
import Skillpage from './pages/skill-page.js';
import Contactme from './pages/contactme.js';
// import Form from './components/form.js';
import HomePage from './pages/homepage.js';



function App(){
  return (
    <div className='App'>

      <div className="navbar">
      <Navbar/>
    </div>
    <div className="homepage" id = 'home'>
      <HomePage/>
    </div>
    <div className="aboutme" id='abtme'>
      <Aboutme/>
    </div>
    <div className='app-mywork' id='app-mywork'>
      <Mywork/>
    </div>
    <div className='skillspage' id='skillspg'>
    <Skillpage/>
    </div>
    <div className='contact-me-page' id='contactme'>
      <Contactme/>
    </div>
    

    </div>

);
}

export default App;



   
  
