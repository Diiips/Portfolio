import './form.css'


export default function Form(){
    return(
        
        <div class="contactme-form">
                <div class="inputarea">
                  <input type="text" required />
                  <label for="name">Name</label>
                </div>
  
                <div class="inputarea">
                  <input type="email" required />
                  <label for="email">Email Id</label>
                </div>
  
                <div class="messagearea" id="message">
                  <label for="message" id="message">Type your message</label>
                  <textarea rows="10"></textarea>
                </div>

                <div className='form-btn'>
                <button type="submit">Send Message</button>
                </div>
                
        </div>
           
    );
}
