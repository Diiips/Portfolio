import './dummyform.css'

export default function Dummyform(){
    return(
        <div className='form-component'>
           <input type='text' name='name' placeholder='Name' className='contact-inputs' required></input>
           <input type='email' name='email' placeholder='Email' className='contact-inputs' required></input>
           <textarea name='message' placeholder='Type your message' className='contact-inputs' required></textarea>
           <button type='submit'>Send message</button>
        </div>
    );
}