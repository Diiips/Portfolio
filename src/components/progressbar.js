// import './progressbar.css'
import './progressbar.css'

export default function Progressbar(props){
  const mystyle = {
    width:`${props.percent}`
  }
  return(
    <div className='progressbar-container'>
      <div className='progressbar-info'>
        <h5>{props.headline}</h5>
        <h5>{props.percent}</h5>
      </div>

        <div className='progressbar-outer'>
        <div className='progressbar-inner' style={mystyle}>

        </div>
    </div>
    </div>
    
  );
}