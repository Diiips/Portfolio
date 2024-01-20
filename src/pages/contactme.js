import { Dummyform } from "../components/dummyform";
// import Form from "../components/form";
import Getintouch from "../components/getintouch";
import './contactme.css'

export default function Contactme(){
    return(
        <div className="contactme-components-page">
            <Getintouch/>
            <Dummyform/>
            {/* <Form/> */}
        </div>
    );
}