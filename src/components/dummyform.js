import './dummyform.css';
import React,{ useRef , useEffect} from 'react';
import emailjs from '@emailjs/browser';
import AOS from 'aos'
import 'aos/dist/aos.css' // Correct import statement
export const Dummyform = () => {
    const form = useRef();
    const sendEmail = async (e) => { // Make the function asynchronous
        e.preventDefault();


        try {
            const result = await emailjs.sendForm(
                'service_6e6vryl',
                'template_9yld017',
                form.current,
                'IipUkRCxdKZxK9Kyc' // Use 'YOUR_USER_ID' instead of 'YOUR_PUBLIC_KEY'
            ).then(alert("Message Sent Sucessfully"));
            form.current.reset();
            console.log(result.text);
        } catch (error) {
            console.log(error.text);
        }
    };
    useEffect(()=>{
        AOS.init({duration: 1500});
      })

    return (
        <form className='form-component' ref={form} onSubmit={sendEmail} data-aos="fade-left">
            <input type='text' name='from_name' placeholder='Name' className='contact-inputs' required />
            <input type='email' name='from_email' placeholder='Email' className='contact-inputs' required />
            <textarea name='message' placeholder='Type your message' className='contact-inputs' required></textarea>
            <button type='submit'>Send message</button>
        </form>
    );
};
