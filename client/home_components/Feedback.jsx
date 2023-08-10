import React from 'react'
import "../css/feedback.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faPaperPlane} from '@fortawesome/free-solid-svg-icons'

function Feedback({Desktop}) {
  return <div className='feedback'>
    <div className='feedback_section'>
      {Desktop ? <div className='feedback_main'>
       
      <div className='feedback_text'>
        <h1>Get in Touch</h1>
        <p>Have a question or need assistance? Our team is here to help. Reach out to us, and we'll be happy to assist you.</p>
        </div>
       
       <div className='feedback_input'>
       <textarea placeholder='Enter your text here...' />
        <button>{<FontAwesomeIcon icon={faPaperPlane} />}</button>
        </div>
       
        </div>:<div className='feedback_main'>
       
       <div className='feedback_text'>
         <h1>Get in Touch</h1>
         <p>Have a question or need assistance? Our team is here to help. Reach out to us, and we'll be happy to assist you.</p>
         </div>
        
        <div className='feedback_input'>
        <textarea placeholder='Enter your text here...' />
         <button>{<FontAwesomeIcon icon={faPaperPlane} />}</button>
         </div>
        
         </div>}
    </div>
    </div>
}

export default Feedback