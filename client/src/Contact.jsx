import React,{useRef,useState} from 'react'
import "../css/contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope,faPhone,faCity,faPaperPlane} from '@fortawesome/free-solid-svg-icons';

function Contact() {
  
  const username=useRef(null);
  const header=useRef(null);
  const message=useRef(null);

  const [showMessage,setShowMessage]=useState(false);

function onSubmit(e){
  e.preventDefault();
 username.current.value='';
 header.current.value='';
 message.current.value='';

 setShowMessage(true);

}

  return <div className='contact_main_div'>

  <div className='contact_main'>
  
 {showMessage && <section className='succesfull_sent_message'>
    <div>
    <img alt='checkmark' src='https://cdn4.iconfinder.com/data/icons/colicon/24/checkmark_done_complete-256.png' />
    <p>sent succesfully</p>
    </div>
    <button onClick={()=>{setShowMessage(false)}}>OK</button>
  </section>}



  <div className='contact_main_info'>
   
   <section>
   <h2>{<FontAwesomeIcon icon={faEnvelope} />}</h2>
   <p>jamaspishvilinika@icloud.com</p>
   </section>

   <section>
    <h2>{<FontAwesomeIcon icon={faPhone} />}</h2>
    <p>090-30-40-19</p>
   </section>

<section>
  <h2>{<FontAwesomeIcon icon={faCity} />}</h2>
  <p>Georgia,Tbilisi</p>
</section>

  </div>

<div className='contact_main_message'>

 <div className='contact_main_heading'>
  <h1>Get in touch</h1>
  <p>Feel free to contact us</p>
 </div>

<div className='contact_main_inputs'>
 <form onSubmit={onSubmit}>
  <input type="text" placeholder='username...' required ref={username}/>
  <input type="text" placeholder='Text Header...' required ref={header} />
  <textarea type="text" placeholder='Message...' required ref={message} />
  <button type='submit'>{<FontAwesomeIcon icon={faPaperPlane} />}</button>
  </form>
</div>

</div>

  </div>
</div>
}

export default Contact