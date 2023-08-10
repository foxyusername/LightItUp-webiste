import React from 'react'
import "../css/404.css";
import { useNavigate } from 'react-router-dom';

function ErrorPage() {
    const history=useNavigate();

return <div className='errorpage'>
   <div className='error_section'>
    <img alt='broken lighter' src='https://static.vecteezy.com/system/resources/previews/003/472/634/original/lighter-cartoon-illustration-is-broken-heart-vector.jpg' />
    <div className='error_text'>
        <h1>404</h1>
        <p>The page you're trying to access isn't here. It might have been moved, deleted, or never existed in the first place. Don't worry, though – you can navigate back to the homepage or try searching for what you were looking for. If you believe this is an error, please contact our support team for assistance.
        </p>
        <button onClick={()=>{history('/')}} type='button'>Home</button>
    </div>
   </div>
  </div>

}

export default ErrorPage;