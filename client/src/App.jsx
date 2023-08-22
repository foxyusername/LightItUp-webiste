import {BrowserRouter as Router,Routes,Route, useNavigate, useSearchParams} from "react-router-dom";
import React,{lazy,Suspense, useEffect, useState} from "react";
import "./App.css";
import Middleware from "../middleware/Middleware";
import ContacMid from "../middleware/ContacMid";

const Home=lazy(()=>import('./home'));
const Signup=lazy(()=>import('./Signup'));
const Loading=lazy(()=>import('./Loading'));
const ErrorPage=lazy(()=>import('./404'));
const Login=lazy(()=>import('./Login'));
const Shop=lazy(()=>import('./Shop'));
const Cart=lazy(()=>import('./Cart'));
const Profile=lazy(()=>import('./Profile'));

const App=()=>{

const [route,setRoute]=useState('');


useEffect(()=>{
  if(!localStorage.getItem('Alert') || localStorage.getItem('Alert')!=='accepted'){
   alert('⚠️This website uses "Cross-Website Tracking" in order to avoid any possible errors or breaks please consider to allow "Cross-Website Tracking" in you browser settings'); 
   localStorage.setItem('Alert','accepted');
}
 },[])

  function get(data){
  setRoute(data);
}

return <Router>
    <Suspense fallback={<Loading />}>
    <Routes>
    <Route element={<Middleware get={get}/>}>

    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    
    </Route>
  
   <Route path="/contact" element={<ContacMid />} />
   <Route path="/cart" element={<Cart/>} />
   <Route path="/Profile" element={<Profile />} />
    <Route path="/Shop" element={<Shop />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="/" element={<Home />} />
    </Routes>
      </Suspense>
  </Router>
}
export default App;