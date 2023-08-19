import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom";
import "../css/emailconfirm.css";
import axios from 'axios';


function EmailConfirm({getProp,getBack,sendemail,reset,from,sendLoginEmail}) {

   let history=useNavigate();

   const [time, setTime] = useState(60);
   const [inputValue,setInputValue]=useState('');
   const [showError,setShowError]=useState(false);

  function back(){
    if(from==='login'){
      getBack();
      history('/login'); 
    }else{
      getProp();
      history('/signup');
      reset();
    }
   sessionStorage.setItem('submited','false');
  }

   useEffect(()=>{
   let interval;

   if(time>0){
   interval=setInterval(() => {
     setTime((prev)=>prev-1);
    }, 1000);
   }

   return ()=>{
    clearInterval(interval);
   }

    },[time])


  function uploadData(username,email,password){

console.log('username '+ username, "email "+email,"password "+password);

axios.post(''+import.meta.env.VITE_API_URL+'/verifycode',{
  inputValue: inputValue,
  username: username,
  email:email,
  password: password
 },{
  withCredentials:true
 }).then((res)=>{
  if(res.data==='authorized unsuccesfully'){
    setShowError(true);
  }else if(res.data==='authorized succesfully'){
    setShowError(false);
    history('/shop');
    sessionStorage.removeItem('submited');
  }
  console.log(res);
 }).catch((err)=>console.log(err))

  } 

 function checkCode(e){
e.preventDefault();

axios.get(''+import.meta.env.VITE_API_KEY+'/getcredentials').then((res)=>{
console.log(res);
uploadData(res.data.username,res.data.email,res.data.password);
}
).catch((err)=>console.log(err));
}

 function resend(){
 setTime(60);
 if(from==='login'){
  sendLoginEmail();
 }else{
  sendemail();
 }
}

    
  return <div className='emailconfirm_page'>
 <div className='leftArrow' onClick={back}>
 <h2>&#8592;</h2>
 <p>Back</p>
 </div>

 
 <div className='emailconfirm_content'>
 <img src="https://www.pngall.com/wp-content/uploads/2/Email-PNG-Pic.png" alt="mail symbol" />

<div className='column_div'>
    <div className='content_main'>
  <h1>Email verification</h1>
  <p>enter the code we sent you on  {sessionStorage.getItem('email')}</p>
 <form>
  <input type='number' placeholder='4 digit code' onChange={(e)=>setInputValue(e.target.value)}/>
  {showError && <p>code was wrong</p>}
  <button type='submit' onClick={checkCode}>verify</button>
 </form>
 </div>

 <div className='resend_content'>
   {time>0 ? <p>resend code in: {time}</p> : <button onClick={resend} type='button'>resend</button>}
   </div>
 </div>
 </div>
  </div>
}

export default EmailConfirm