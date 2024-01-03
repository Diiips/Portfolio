import './contactmeright.css'

export default function Contactmeright(){
    return(
        <div class="contactme-right">
            <form return false>
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
              
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
    );
}