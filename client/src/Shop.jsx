import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Shop() {

let history=useNavigate();

function logOut(){
  axios.post('http://localhost:3000/logOut').then((res)=>{
    console.log(res.data);
    history('/');
}).catch((err)=>console.log(err));
  }

  return <div>
    <button onClick={logOut}>Log out</button>
  </div>
}

export default Shop