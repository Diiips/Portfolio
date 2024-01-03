import ProjectCard from '../components/project-card';
import './mywork.css'
import icecream from '../Images/icecream.png'
import book from '../Images/book.png'
import games from '../Images/game.png'
import subscan from '../Images/subscrib1.png'
import facepay1 from '../Images/facepay1.png'
import profile from '../Images/profile2.png'


export default function Mywork(){
    const projectdata = 
        [
        {title:"ICE CREAM APP",
        subtitle: 'This is Icecream App',
        image:icecream
        },

        {title:"3D OBJECT",
        subtitle: 'Free 3d Gaming App',
        image:games},

        {title:"BOOKS FOR ALL",
        subtitle: 'Online books platform',
        image:book},

        {title:"PROFILE APP",
        subtitle: 'aksdjkdh',
        image:profile},

        {title:"SUBSCAN",
        subtitle: 'aksdjkdh',
        image:subscan},

        {title:"FACE PAY",
        subtitle: 'Make payment using face',
        image:facepay1},

    ]
    return(
        <div>
            <div className='mywork-title'>
                <center>
                 <h1>MY Work</h1>
                </center>
            </div>

            <div className='project-page'>
            {projectdata.map((project,index)=>(<ProjectCard key={index}{...project}/>))}
            </div>
        </div>
    );
}