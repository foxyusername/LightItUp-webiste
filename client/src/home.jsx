import React,{lazy,Suspense,useEffect} from "react"
import "../css/home.css";
import { useState,useEffect } from "react";
import {useRef} from "react"
const Whyus=lazy(()=>import('../home_components/Whyus'));
const Hero=lazy(()=> import('../home_components/Hero'));
const About=lazy(()=>import('../home_components/About'));
const Explore=lazy(()=>import('../home_components/Explore'));
const Customers=lazy(()=>import('../home_components/Customers'));
const Feedback=lazy(()=>import('../home_components/Feedback'));
const Footer=lazy(()=>import('../home_components/Footer'));

export default function Home(){

    let number=850;

    const [Desktop,setDesktop]=useState();
    
    useEffect(()=>{
      if(window.innerWidth<=number){
        setDesktop(false);
      }else{
      setDesktop(true);
      }
    },[])
    
      window.addEventListener('resize',()=>{
      if(window.innerWidth<=number){
        setDesktop(false);
      }else{
      setDesktop(true);
      }
      })


   const aboutRef=useRef();
   const contactRef=useRef();

  function scroll(data){
    console.log(aboutRef);
     if(data==='about'){
      aboutRef.current.scrollIntoView({behavior: 'smooth'});  
     }else{
      contactRef.current.scrollIntoView({behavior: 'smooth'});
     }
  }

    return <div className="homePage">
        <Hero scroll={scroll}/>
        <Whyus />
        <div ref={aboutRef}>
        <About Desktop={Desktop}/>
        </div>
        <Explore Desktop={Desktop}/>
        <Customers Desktop={Desktop} />
        <div ref={contactRef}>
        <Feedback Desktop={Desktop} />
        </div>
        <Footer Desktop={Desktop} />
    </div>
}

