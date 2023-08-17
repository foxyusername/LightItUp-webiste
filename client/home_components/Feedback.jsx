import React,{useState} from 'react'
import "../css/feedback.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faPaperPlane} from '@fortawesome/free-solid-svg-icons';


function Feedback({Desktop}) {
 
  const [message,setMessage]=useState('');
  const [succesMessage,setSuccesMessage]=useState(false);
   
 function handleSubmit(){
  if(message.length>0){
    setMessage('');
    setSuccesMessage(true);
  }
}


  return <div className='feedback'>
    <div className='feedback_section'>
   
{succesMessage && <section className='succesfull_sent_message'>
    <div>
    <img alt='checkmark' src='https://cdn4.iconfinder.com/data/icons/colicon/24/checkmark_done_complete-256.png' />
    <p>sent succesfully</p>
    </div>
    <button onClick={()=>{setSuccesMessage(false)}}>OK</button>
  </section>}

      {Desktop ? <div className='feedback_main'>
       
      <div className='feedback_text'>
        <h1>Get in Touch</h1>
        <p>Have a question or need assistance? Our team is here to help. Reach out to us, and we'll be happy to assist you.</p>
        </div>
       
       <div className='feedback_input'>
       <textarea placeholder='Enter your text here...' onChange={(e)=>{setMessage(e.target.value)}} value={message}/>
       <button onClick={handleSubmit}>{<FontAwesomeIcon icon={faPaperPlane} />}</button>
        </div>
       
        </div>:<div className='feedback_main'>
       
       <div className='feedback_text'>
         <h1>Get in Touch</h1>
         <p>Have a question or need assistance? Our team is here to help. Reach out to us, and we'll be happy to assist you.</p>
         </div>
        <div className='feedback_input'>
        <textarea placeholder='Enter your text here...' onChange={(e)=>{setMessage(e.target.value)}} value={message}/>
         <button onClick={handleSubmit}>{<FontAwesomeIcon icon={faPaperPlane} />}</button>
        </div>
         </div>}
    </div>
    </div>
}

export default Feedback