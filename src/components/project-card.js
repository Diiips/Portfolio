import './project-card.css'

export default function ProjectCard(props){
    return(
    <div className='project'>
       <div className='project-info'>
            <div className='title'>
                <h4>{props.title}</h4>
                <p>{props.subtitle}</p>
                
            </div>
            <div className='desc'>
                <h5>Description</h5>
                <p>"I've always found crafting polished user interactions that surprise and delight users to be the most rewarding and engaging task polished user interactions that surprise and delight users to be the most rewarding and engaging task"</p>

            </div>
        </div> 
        <img className='project-img' src= {props.image}></img>
       
    </div>
    );
}