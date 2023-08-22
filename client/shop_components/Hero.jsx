import React from 'react'
import "../css/shop_hero.css";
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Image } from 'cloudinary-react';
import axios from 'axios';

function Hero({scroll}) {

  let history=useNavigate();

  const [showHamburger,setShowHamburger]=useState(false);
  const [showMenu,setShowMenu]=useState(false);
  const [auth,setAuth]=useState(false);
  const [showLogout,setShowLogout]=useState(false);

  const number=750;

useEffect(()=>{
 axios.get('https://lightitupapi.onrender.com/isAuth',{
  withCredentials:true,
 }).then((res)=>{
  setAuth(res.data);
}).catch((err)=>console.log(err));
},[])



function resize(){

if(window.innerWidth>=number){
  setShowHamburger(true);
}else{
  setShowHamburger(false);
}

}

function hamburgerClick(){
 if(!showMenu){
  setShowMenu(true)
 }else{
  setShowMenu(false);
 }
}

 useEffect(resize,[]);
window.addEventListener('resize',resize);

function navigate(data){
   if(data==='contact'){
    history('/contact');
   }else if(data==='cart'){
    history('/cart');
   }else if(data==='register'){
    history('/signup');
   }
}

function logOut(){

  axios.get('https://lightitupapi.onrender.com/logout',{
    withCredentials:true
  }).then((res)=>{
    if(res.data==='loggedOut succefully'){
       history('/');
       Cookies.remove('username');
       Cookies.remove('email');
       Cookies.remove('profileImageId');

    }
   
}).catch((err)=>console.log(err));
  }


  return <div className='shop_heropage'>
    <div className='shop_hero_section'>
    <div className='shop_hero_navbar'>
        <div className='shop_hero_logo'>
            <img alt='lightitup logo' src='https://cdn.icon-icons.com/icons2/1368/PNG/512/-lighter_89779.png' />
            <p>LightItUp</p>
        </div>
        <div className='shop_hero_navigate'>
     {showHamburger ? <div className='contact_cart'> {auth ? <p onClick={()=>{navigate('contact')}}>contact</p>: <p onClick={()=>{navigate('register')}}>signup</p> }
    <p onClick={()=>{navigate('cart')}}>cart</p>
     {auth ? <>
          <p  onClick={()=>{history('/profile')}}>Profile</p>
      <p onClick={logOut}>Logout</p>
      </>: null}
    </div>
     :
     <div className='shop_hero_hamburger'>
      <p onClick={hamburgerClick} style={{transform:showMenu ? 'rotate(-180deg)': 'rotate(0deg)'}}><FontAwesomeIcon icon={faBars} /></p>
     {showMenu ? <div>
        {auth ? <p onClick={()=>{navigate('contact')}}>Contact</p>: <p onClick={()=>{navigate('register')}}>Signup</p>}
         <p onClick={()=>{navigate('cart')}}>Cart</p>

         {showMenu && auth ? <>
          <p onClick={()=>{history('/profile')}}>Profile</p>
      <p onClick={logOut}>Logout</p>
      </>: null}

      </div>     
   : null } 

      </div>
     }
     <div className='userImage'> 
     {Cookies.get("profileImageId") ?
      <Image cloudName="dldonwgcr" publicId={Cookies.get('profileImageId')} alt="User's profile image"/> :
      <img alt='user photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhQ9vYdUgEcYpsV86g9ZZokEGTgBtJKciiA&usqp=CAU' />}
      </div>
        </div>
    </div>
   
    <div className='shop_hero_heading'>
     <div className='shop_heading_text'>
      <h2>Explore our curated collection of trendy lighters at LightItUp. Discover fashion-forward designs with budget-friendly prices.</h2>
      <button onClick={scroll}>shop now</button>
     </div>
     <img alt='lighter image with orange and dark blue background sliced in half' src='https://i.pinimg.com/564x/4c/c2/bb/4cc2bbdf9efbe0da53658022c319d700.jpg'/>
    </div>
   
   
    </div>
</div>
}

export default Hero