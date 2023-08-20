import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Contact from '../src/Contact';
import ErrorPage from '../src/404';
import Loading from '../src/Loading';

function ContacMid() {

    const [isAuth,setisAuth]=useState(null);
  
useEffect(()=>{
    axios.get('https://lightitupapi.onrender.com/isAuth',{
     withCredentials:true
    })
    .then((res)=>{
     console.log(res);
     setisAuth(res.data);
   }).catch((err)=>console.log(err));
   },[])

if(isAuth===null){
  return <Loading />
}else if(isAuth===false){
    return <ErrorPage />
}else if(isAuth==true){
  return <Contact />
}


}

export default ContacMid