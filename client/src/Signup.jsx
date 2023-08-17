import React, {lazy} from 'react'
import "../css/signup.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye,faEyeSlash,faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect} from 'react';
import {useForm} from "react-hook-form";
import axios from 'axios';

const EmailConfirm=lazy(()=>import('./EmailConfirm'));

function Signup() {

  const [visiblePassword,setvisiblePassword]=useState(false);
  const [emailConfirmation,setEmailConfirmation]=useState('false');
  const [showError,setShowError]=useState(false);
  const [errorMessage,setErrorMessage]=useState('');

  const { register, handleSubmit,formState: { errors },getValues,reset} = useForm();

 function getProp(){
 setEmailConfirmation('false');
}

useEffect(()=>{
  setEmailConfirmation(sessionStorage.getItem('submited'));

  console.log(emailConfirmation);
},[])

function sendemail(){

  const {email,username,password} =getValues();

  axios.post('http://localhost:3000/send_email',{
    email: email,
    username:username,
    password: password
  }).then((response)=>{
    if(response.data==='Email has already been used'){
      setShowError(true);
      setErrorMessage(response.data);
    }else if(response.data==='Username has already been used'){
    setShowError(true);
    setErrorMessage(response.data);
  }else{
      sessionStorage.setItem('submited','true');
      sessionStorage.setItem('email',email);
      setShowError(false);
      setErrorMessage('');
      setEmailConfirmation('true');
    }
  })
  .catch((error)=>console.log(error))
}

  function showPassword(){
    const {password} = getValues();

   if(visiblePassword && password.length>0){
    setvisiblePassword(false);
   }else if(!visiblePassword && password.length>0){
    setvisiblePassword(true);
   }
  }

  function formSubmit(){
  sendemail();
  }

  function matchPassword(data){
   const {password} = getValues();
   if(password!==data){
    return "passwords don't match";
   }
  }

  if(sessionStorage.getItem('submited') && sessionStorage.getItem('submited')==='true' && emailConfirmation==='true'){
    return <EmailConfirm getProp={getProp} sendemail={sendemail} reset={reset} from={"signup"}/>
  }else{
    return <div className='signup'>
    <div className='signup_section'>
    {showError && <div id='register_error_message'>
      <span><FontAwesomeIcon icon={faTriangleExclamation} /></span>
      <p>{errorMessage}</p>
      </div>}
  {!errorMessage && <div className='signup_logo'>
   <img alt='LightItUp logo' src='https://cdn.icon-icons.com/icons2/1368/PNG/512/-lighter_89779.png'/>
    <p>LightItUp</p>
   </div>}

   <div className='signup_main'>
   <div className='signup_text'>
    <h1>Sign Up</h1>
   </div>
<form onSubmit={handleSubmit(formSubmit)}>
   <div className='signup_inputs'>

  <div>
    <input type='text' placeholder='Username' autoComplete='off' {...register("username",{     //usename input and it's validation
    required:{
      value:'Required',
      message:'username is required'
    }, 
    minLength:{
      value:3,
      message:"username must be 3-16 characters long"
    },                                          
    maxLength:{
      value:16,
      message:"username must be 3-16 characters long"
    },
    pattern:{
      value:/^[a-zA-Z0-9]+$/,
      message:"username only uses letters and numbers"
    }                                                                    
   })} />

 <h2>{errors.username?.message}</h2>
  </div>

  <div>
    <input type='email' placeholder='Email' autoComplete='off' {...register("email",{     //password input and it's validation
    required:{
      value:'Required',
      message:'email is required'
    }                                                          
   })}/>
    <h2>{errors.email?.message}</h2>
  </div>

  <div className='signup_password'>

  <div>
  <input type={visiblePassword ? 'text' : 'password'} placeholder='Password' autoComplete='off' {...register("password",{     //password input and it's validation
    required:{
      value:'Required',
      message:'password is required'
    },                                                  
    maxLength:{
      value:12,
      message:"password length needs to be 3-12 characters long"
    },
    minLength:{
      value:3,
      message:"password length needs to be 3-12 characters long"
    },
    pattern:{
      value:/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,12}$/,
      message:"Password requirements: 3-9 characters, 1 number, 1 letter, 1 symbol."
    }                                                                    
   })}/>
  <h2>{errors.password?.message}</h2>
  </div>
    <span onClick={showPassword}>{!visiblePassword ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</span>
  </div>

   <div>
   <input type={visiblePassword ? 'text' : 'password'} placeholder='repeat password' autoComplete='off' {...register("repeat_password",{     //confirm password input and it's validation
    required:{
      value:'Required',
      message:'repeat password is required'
    },                                                  
   validate:{
    value:matchPassword,
   }                                                                
   })} />
   <h2>{errors.repeat_password?.message}</h2>
   </div>

   </div>
   
   <div className='signup_sumbit'>
    <button type='submit'>Register</button>
    <div className='signin_option'>
    <p>already have an account?</p>
    <a href="/login">Sign In</a>
    </div>
   </div>
   </form>

   </div>
   </div>
  </div>
  }

  
}

export default Signup