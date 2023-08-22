import "../css/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import {useState } from "react";
import {useNavigate} from "react-router-dom";


export default function Navbar({visibleText,scroll,authenticated}){


const [showNav,setShowNav]=useState(false);

function changeNav(){
 if(showNav){
    setShowNav(false);
   }else{
    setShowNav(true);
  }
}

function aboutClick(){
scroll('about');
setShowNav(false);
}

function contactClick(){
 scroll('contact');
 setShowNav(false);
}

const history=useNavigate();

return <div className="Navbar">
        <div className="logo">
       <img src="https://cdn.icon-icons.com/icons2/1368/PNG/512/-lighter_89779.png"/>
       <p>LightItUp</p>
        </div>
        <div className="navigation">
        <button style={ { transform:showNav ? 'rotate(180deg)' : 'rotate(0deg)',transition:'transform 0.3s ease-in-out'}} onClick={changeNav}><FontAwesomeIcon icon={faBars}/></button>
        <div className="navigation_p" style={showNav ? { display: "flex"} : {}}>
        <p onClick={aboutClick}>About</p>
        <p onClick={contactClick}>Contact</p> 
       {!authenticated ? <p onClick={()=>{history('/signup')}}>Sign up</p> : <p onClick={()=>{history('/Shop')}}>Shop</p>}
        </div> 

        </div>
    </div>
}