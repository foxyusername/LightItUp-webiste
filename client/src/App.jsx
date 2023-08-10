import {BrowserRouter as Router,Routes,Route, useNavigate, useSearchParams} from "react-router-dom";
import React,{lazy,Suspense, useState} from "react";
import "./App.css";
import Middleware from "../Middleware";

const Home=lazy(()=>import('./home'));
const Signup=lazy(()=>import('./Signup'));
const Loading=lazy(()=>import('./Loading'));
const ErrorPage=lazy(()=>import('./404'));
const Login=lazy(()=>import('./Login'));
const Shop=lazy(()=>import('./Shop'));


const App=()=>{

const [route,setRoute]=useState('')

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
    <Route path="/Shop" element={<Shop />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="/" element={<Home />} />
    </Routes>
      </Suspense>
  </Router>
}
export default App;