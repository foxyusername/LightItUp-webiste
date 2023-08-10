import React, { lazy } from 'react'
import "../css/signup.css";
import "../css/login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash,faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from 'react';
import axios from "axios";

const EmailConfirm=lazy(()=>import('./EmailConfirm'));

function Login() {

  const [visiblePassword,setvisiblePassword]=useState(false);
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [authenticated,setAuthenticated]=useState(false);
  const [error,setError]=useState(false);

useEffect(()=>{
  setAuthenticated(sessionStorage.getItem('submited'));
},[])


function getBack(){
  setAuthenticated(false);
}

 function showpassword(){
    if(visiblePassword){
        setvisiblePassword(false);
       }else{
        setvisiblePassword(true);
       }
}

function authentication(){

  if(email.length>0 && password.length>0){

    axios.post('http://localhost:3000/authenticate',{
      email: email,
      password: password
    }).then((res)=>{
        if(res.data==="authenticated"){
         sessionStorage.setItem('submited','true');
         setAuthenticated('true');
         setError(false);
        }else{
        setError(true);
        }
    }).catch((err)=>console.log(err));
}
}

function submitForm(e){
  e.preventDefault();
  authentication();
}

if(sessionStorage.getItem('submited')==='true' && authenticated==='true'){
  return <EmailConfirm from={"login"} getBack={getBack} sendLoginEmail={authentication}/>
}
  return ( <div className='signup'>
  <div className='signup_section'>

  {error && <div id="loginError">
  <span><FontAwesomeIcon icon={faTriangleExclamation} /></span>
  <p>Wrong username and password combination</p>
  </div>
  }

{!error && <div className='signup_logo'>
<img alt='lightitup logo' src='https://s3-alpha-sig.figma.com/img/abc8/93c1/6277621bda8b2f94e52750d1d72b019d?Expires=1691971200&Signature=cuu8P~2iJpioSK8HWY1~PfIif7Nje25j5f2za7E5SNKw0Vo0PjbbM5ZHomFRPATA7YaMba-h-zVa8ZCE33D5jvksuuhH67fVI6Na6etBU0yRRLyJuq6FTYMySt3ciAr1I3-om5ay0c5qDum8VWTpblmXqh5XvToELe7gtVL6~uC9iGkS1JTGCCGyg7rdoqXeNn2zUM1naDMO9FX-OP1cm2I1UYCnY3Qe1PSpPeyzDJfcp-jlGeEFD2e~hxHvlByHe-HcWyk7woPfK3Tmysy-573vGC5gqwgKk30DR4cLqx-BAMEYoxVqvLyzSggHOrYHndLbZZEf2YCN2ntvy4HLQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' />
<p>LightItUp</p>
</div>
}
   <div className='signup_main'>
  <div className='signup_text'>
    <h1>Login</h1>
   </div>
   <form onSubmit={submitForm}>
   <div className='signup_inputs'>
   <input type='email' placeholder='email' onChange={(e)=>{setEmail(e.target.value)}}/>
   <div className='signup_password'>
   <input type={visiblePassword ? 'text' : 'password'} placeholder='password' onChange={(e)=>{setPassword(e.target.value)}}/> 
   <span onClick={showpassword}>{<FontAwesomeIcon icon={visiblePassword ? faEyeSlash : faEye } />}</span>
   </div>
   <p>forgot password?</p>    
   </div>

   
  <div className='signup_submit'>
   <button type='submit'>Login</button>
   <div className='signin_option'>
   <p>don't have account?</p>
   <a href='/signup'>Sign up</a>
   </div>
  </div>
</form>
   </div>
  </div>
  </div>
  );
  

}

export default Login