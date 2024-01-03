
// import Skill from '../components/skill';
import Progressbar from '../components/progressbar';
import './skill-page.css'

export default function Skillpage(){
   
    const skilldata1 = [
        {
            headline:"Html",
            percent:"90%"
        },
        {
            headline:"Javascript",
            percent:"80%"
        },
        {
            headline:"Css",
            percent:"85%"
        },
        {
            headline:"React",
            percent:"75%"
        },
    ]
    const skilldata2 = [
        {
            headline:"Figma",
            percent:"90%"
        },
        {
            headline:"Canva",
            percent:"80%"
        },
        {
            headline:"Adobe illustrator",
            percent:"65%"
        },
        {
            headline:"Sketch",
            percent:"60%"
        },
    ]
    return(
    <div className='skill-page'>
        <div className='skill-page-title'>
            <h1>MY Skills</h1>
        </div>

        <div className='skill-container-component'>
            <div className='skill-container'>
                {skilldata1.map((skill,index)=>(<Progressbar key={index}{...skill}/>))}
            </div>
         
            <div className='skill-container'>
            {skilldata2.map((skill,index)=>(<Progressbar key={index}{...skill}/>))}
            </div>

                
        </div>

        {/* <div>
        <center><Button {...btn}/></center> 
        </div> */}
          
    </div>
        
    );
}