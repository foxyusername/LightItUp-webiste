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
    visibleText(true);
   }else{
    setShowNav(true);
   visibleText(false); 
  }
}

function aboutClick(){
scroll('about');
}

function contactClick(){
 scroll('contact');
}

const history=useNavigate();

return <div className="Navbar">
        <div className="logo">
       <img src="https://cdn.icon-icons.com/icons2/1368/PNG/512/-lighter_89779.png"/>
       <p>LightItUp</p>
        </div>
        <div className="navigation">
        <button style={ { transform:showNav ? 'rotate(-90deg)' : 'rotate(0deg)',transition:'transform 0.2s ease'}} onClick={changeNav}><FontAwesomeIcon icon={faBars}/></button>
        <div className="navigation_p" style={showNav ? { display: "flex"} : {}}>
        <p onClick={aboutClick}>About</p>
        <p onClick={contactClick}>Contact</p> 
       {!authenticated ? <p onClick={()=>{history('/signup')}}>sign up</p> : <p onClick={()=>{history('/Shop')}}>Shop</p>}
        </div> 

        </div>
    </div>
}