import React,{useState,useEffect, lazy} from 'react'
import "../css/profile.css";
import "../css/profile_creditcart.css";
import axios from 'axios';
import {Image} from "cloudinary-react";
import Cookies from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCreditCard,faUser,faX} from '@fortawesome/free-solid-svg-icons';
import ChooseImage from '../src/ChooseImage';

const Loading=lazy(()=>import('../src/Loading'));
const ErrorPage=lazy(()=>import('../src/404'));
//const ChooseImage=lazy(()=>import('../src/ChooseImage'));

function Profile() {

   const [auth,setAuth]=useState(null); 
   const [showpage,setShowPage]=useState('profile');
   const [info,setInfo]=useState([1,2,3,4]);
  const [showCardInfo,setShowCardInfo]=useState(false);
  
  const [username,setUsername]=useState('');
  const [expire,setExpire]=useState('');
  const [cardNumber,setCardNumber]=useState('');
  const [securityCode,setSecurityCode]=useState('');
  const [imageChanger,setImageChanger]=useState(false);

 useEffect(()=>{
  alertUser();
  axios.get('https://lightitupapi.onrender.com/isAuth',{
    withCredentials:true
  }).then((res)=>{
    setAuth(res.data);
  }).catch((err)=>console.log(err));
 
checkImageUrl();

},[])

function checkImageUrl(){
if(Cookies.get('profileImageId') && Cookies.get('username') && Cookies.get('email') && Cookies.get('password')){
  console.log('credentials already exist');
}else{
  console.log('cookies doesnt exist going to get one');
axios.get('https://lightitupapi.onrender.com/userCredentials',{
  withCredentials:true
}).then((res)=>{
  console.log(res);

  if(res.data.message){
    alert('something went wrong');
  }else{
  if(res.data[0].profileImg!==null){
  Cookies.set('profileImageId',res.data[0].profileImg);
}
  Cookies.set('username',res.data[0].username);
  Cookies.set('email',res.data[0].email);
}
  
}).catch((err)=>console.log(err));
}
}


function alertUser(){
    if(!localStorage.getItem('gotProfileAlert')){
 alert('DISCLAIMER: this website is built for demonstration purposes. if you decide to add credit card do not insert real information for your own safety');
 localStorage.setItem('gotProfileAlert','true');        
}
}
 
function showMobileCard(){
  setShowPage('creditCard');
}

function goBack(){
  setShowPage('profile');
  setShowCardInfo(false);
}

function handleSubmit(e){
   e.preventDefault();
   localStorage.setItem('cardUser',username);
   localStorage.setItem('cardExpireDate',expire);
   localStorage.setItem('cardNumber',cardNumber);
   localStorage.setItem('cardSecurityCode',securityCode);
   localStorage.setItem('isCard','true');

   setUsername('');
   setCardNumber(0);
   setSecurityCode(0);
   setExpire(0);
   setShowCardInfo(false);

   console.log(username,expire,cardNumber,securityCode);
}

function changeCard(){
    setShowCardInfo(true);
}



    if(auth===true){
    return <div className='profile_main_div'>
  <div className="credit_card_div">
    <h1>PROFILE</h1>
  <section onClick={()=>{setShowPage('creditCard')}}>
   <span>{<FontAwesomeIcon icon={faCreditCard} />}</span>
   <p>Credit Card</p>
  </section>

<section onClick={()=>{setShowPage('profile')}}>
 <span>{<FontAwesomeIcon icon={faUser} />}</span>
 <p>Account</p>
</section>

  </div>


{showpage==='profile' && <div className='profile_div'>
<img src="https://wallpaperaccess.com/full/1152513.jpg" alt="orange color" />
<div className='profile_main'>
<section className='image_section'>
   {Cookies.get('profileImageId') && Cookies.get('profileImageId').length>0 ?  
   <Image cloudName="dldonwgcr" publicId={Cookies.get('profileImageId')} alt="User's profile image"/> :
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhQ9vYdUgEcYpsV86g9ZZokEGTgBtJKciiA&usqp=CAU" alt="users profile image" />
   }
    
    <button onClick={()=>{setImageChanger(true)}}>Change Image</button>
</section>

{imageChanger===true && <ChooseImage showUploadSection={setImageChanger} exitIcon={<FontAwesomeIcon icon={faX} />} />}

<section className='info_section'>

  <div>
    <h2>Username</h2>
    <p>{Cookies.get('username')}</p>
  </div>

  <div>
    <h2>email</h2>
    <p>{Cookies.get('email')}</p>
  </div>

  <div>
    <h2>Card Information</h2>
    <p>{localStorage.getItem('isCard') ? 'Yes' : "Card hasn't been signed"}</p>
  </div>

  <button onClick={showMobileCard}>{localStorage.getItem('isCard') && localStorage.getItem('isCard')==='true' ? 'Credit Card' : 'Add Credit Card'}</button>
</section>

</div>

</div>}

{showpage==='creditCard' && <div className='creditcard_div'>
 <div className='creditcard_main'>
{localStorage.getItem('isCard') && localStorage.getItem('isCard')==='true' && showCardInfo!==true ?
 
 <div className='reviewcreditcard'>                        

<section className='goBack'>
    <p onClick={()=>{setShowPage('profile')}}>&larr;</p>
    <h2>Back</h2>
 
</section>

<section className='cardillustration'>
 <div>
  <h1>MasterCard</h1>
 </div>
 
 <div className='mastercard_values'>
 <div>
 <p>{localStorage.getItem('cardNumber')}</p>
 <p>{localStorage.getItem('cardExpireDate')}</p>
 <p>{localStorage.getItem('cardUser')}</p>

</div>
<img src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-mastercard-logo-png-vector-download-19.png" alt="MASTERCARD logo" />
</div>
</section>

<section className='card_info_section'>

<div>
<p>Card Number</p>
<h2>{localStorage.getItem('cardNumber')}</h2>
</div>

<div>
<p>Expire Date</p>
<h2>{localStorage.getItem('cardExpireDate')}</h2>
</div>

<div >
<p>Username</p>
<h2>{localStorage.getItem('cardUser')}</h2>
</div>

</section>

<button onClick={changeCard}>Change Card</button>

</div>:

!showCardInfo && !localStorage.getItem('isCard') ?

<div className='addcard_div'>
<button onClick={()=>{setShowCardInfo(true)}}>Add Cart</button>
</div> : localStorage.getItem('isCard') && showCardInfo ?

<div className='insert_card_info'>
   <form onSubmit={handleSubmit}>
    <section className='goBack'>
        <p onClick={goBack}>&larr;</p>
        <h2>Back</h2>
    </section>
<img src="https://static.vecteezy.com/system/resources/previews/008/490/560/original/credit-card-transparent-background-png.png" alt="example credit card" />

<section className='insert_inputs'>
<div className='card_number'>  
<p>Card number</p>
<input type="number" name='cardNumber' value={cardNumber} onChange={(e)=>{setCardNumber(e.target.value)}} required />
</div>

<div className='card_username' >
<p>Name of User</p>
<input type="text" name="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} required />
</div>

<section>

<div className='card_expiredate' >
<p>Expiry date</p>
<input type="number" name="expiredate" value={expire} onChange={(e)=>{setExpire(e.target.value)}} required />
</div>

<div className='card_securitycode' >
<p>Security code</p>
<input type="number" name='securitycode' value={securityCode} onChange={(e)=>{setSecurityCode(e.target.value)}} required />
</div>

</section>

</section>

<button>Save Changes</button>
</form>
</div>


:<h1>wtf</h1>}
 </div>
</div>}



</div>


















}else if(auth===false){
    return <ErrorPage />
}
return <Loading />
}

export default Profile