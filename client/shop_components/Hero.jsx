import React from 'react'
import "../css/shop_hero.css";
import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faCaretDown} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Hero({scroll}) {

  let history=useNavigate();

  const [showHamburger,setShowHamburger]=useState(false);
  const [showMenu,setShowMenu]=useState(false);
  const [auth,setAuth]=useState(false);
  const [showLogout,setShowLogout]=useState(false);

  const number=550;

useEffect(()=>{
 axios.get(import.meta.env.VITE_API_URL+'/isAuth',{
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

  axios.get(import.meta.env.VITE_API_URL+'/logout',{
    withCredentials:true
  }).then((res)=>{
    if(res.data==='loggedOut succefully'){
       history('/');
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
    </div>
     :
     <div className='shop_hero_hamburger'>
      <p onClick={hamburgerClick} style={{transform:showMenu ? 'rotate(-90deg)': 'rotate(0deg)'}}><FontAwesomeIcon icon={faBars} /></p>
     {showMenu ? <div>
        {auth ? <p onClick={()=>{navigate('contact')}}>contact</p>: <p onClick={()=>{navigate('register')}}>signup</p>}
         <p onClick={()=>{navigate('cart')}}>cart</p>
      </div>     
   : null } 

      </div>
     }
     <div className='userImage'> 
      <img alt='user photo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhQ9vYdUgEcYpsV86g9ZZokEGTgBtJKciiA&usqp=CAU' />
      {auth &&  <h2 style={{transform:showLogout ? 'rotate(180deg)': 'rotate(0deg)'}} onClick={()=>{showLogout ? setShowLogout(false) : setShowLogout(true)}}><FontAwesomeIcon icon={faCaretDown} /></h2>}
      </div>

      {showLogout &&  <div className='userImage_info'>
      <p onClick={logOut}>Logout</p>
      <p>Change Profile</p>
      </div>}

        </div>
    </div>
   
    <div className='shop_hero_heading'>
     <div className='shop_heading_text'>
      <h2>Explore our curated collection of trendy lighters at LightItUp. Discover fashion-forward designs with budget-friendly prices.</h2>
      <button onClick={scroll}>shop now</button>
     </div>
     <img alt='lighter image with orange and dark blue background sliced in half' src='https://s3-alpha-sig.figma.com/img/4128/161d/d0dfa028d79e7688a165c9231b481898?Expires=1692576000&Signature=c7-9fMR2GmLccgWkIsDFbhzLPbNOZmNe70kE-xK6w4ILho2Sp9JRjaW7UMwfAFFtuoqxlh4NV2MB-FK6D1~OwgQgZwqZyR~7NAKMHhFWMW77B3SqW361DXxuapiht1ttrjYz8j5hU~p7UdKLYVfUBLFJjXelfsbS0NMI2hd9Qd6zxDwgmNVTvgjHJbBFhovaV6i7fm-BbSqI57e8EEfAoK~4dOyOpZtDulyqyGpxoVIgepuOELBw7Fc~tt0H0OHvrtRo~vQgnJSzS7ZUy9Iq-KLhLafoSoDIDfvCKRIsuTAY55FCu8wm7Mlo3xsQqP3Hb3LVwyXogBxWGts-ENvLAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'/>
    </div>
   
   
    </div>
</div>
}

export default Hero