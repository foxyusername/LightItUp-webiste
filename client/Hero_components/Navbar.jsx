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
       <img src="https://s3-alpha-sig.figma.com/img/abc8/93c1/6277621bda8b2f94e52750d1d72b019d?Expires=1691971200&Signature=cuu8P~2iJpioSK8HWY1~PfIif7Nje25j5f2za7E5SNKw0Vo0PjbbM5ZHomFRPATA7YaMba-h-zVa8ZCE33D5jvksuuhH67fVI6Na6etBU0yRRLyJuq6FTYMySt3ciAr1I3-om5ay0c5qDum8VWTpblmXqh5XvToELe7gtVL6~uC9iGkS1JTGCCGyg7rdoqXeNn2zUM1naDMO9FX-OP1cm2I1UYCnY3Qe1PSpPeyzDJfcp-jlGeEFD2e~hxHvlByHe-HcWyk7woPfK3Tmysy-573vGC5gqwgKk30DR4cLqx-BAMEYoxVqvLyzSggHOrYHndLbZZEf2YCN2ntvy4HLQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"/>
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