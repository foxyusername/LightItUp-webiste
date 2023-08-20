import "../css/Hero.css";
import Navbar from "../Hero_components/Navbar";
import Heading from "../Hero_components/Heading";
import { useState,useEffect } from "react";
import axios from "axios";

export default function Hero({scroll}){
    
  const [authenticated,setAuthenticated]=useState(false);

  useEffect(()=>{
  axios.get('https://lightitupapi.onrender.com/isAuth',{
    withCredentials:true
  }).then((res)=>{
    if(res.data===true){
      setAuthenticated(true);
    }else{
      setAuthenticated(false);
    }
  
  }).catch((err)=>console.log(err));
  },[])


const [visible,setVisible]=useState(true);

function visibleText(data){
   setVisible(data);
  // console.log(visible);
}

    return <div className="HeroSection">
     <div className="Hero_content_div">
    <Navbar scroll={scroll} visibleText={visibleText} authenticated={authenticated} />
    <Heading visible={visible} authenticated={authenticated} />
     </div>
     </div>
}