import './navbar.css'
import React,{useState} from 'react';
import{Link} from 'react-scroll'
import {GiHamburgerMenu} from 'react-icons/gi';



export default function Navbar() {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
      <div className="nav">
        <h2>Diiips</h2>

        <div className="nav-2">

          <h4 className="active"><Link
                to='home'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}>
                Home
           </Link></h4>

          <h4><Link
                to='abtme'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}>
                About Me
           </Link></h4>

          <h4><Link
                to='app-mywork'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}>
                Projects
           </Link></h4>

           <h4><Link
                to='skillspg'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}>
                Skills
           </Link></h4>
          <h4><Link
                to='contactme'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}>
                Contact me
           </Link></h4>
        </div>

        <div className='menu'>
            <a href='#' onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu/>
            </a>
        </div>
        {/* <div class="menu-btn">
          <i class="ri-menu-3-fill"><span>INTR</span></i>
        </div> */}
      </div>

      
    );
  }