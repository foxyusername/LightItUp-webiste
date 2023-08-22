import React,{useState,useRef, useEffect} from 'react'
import "../css/chooseimage.css";
import axios from 'axios';
import Cookies from 'js-cookie';
import { Image } from 'cloudinary-react';

function ChooseImage(props) {

  const buttonClick=useRef(null);

 const [imageUrl,setImageUrl]=useState(null);
 const [uploadResponse,setUploadResponse]=useState('');
 const [time,setTime]=useState(5);

 function handleClick(){
    buttonClick.current.click();
 }

useEffect(()=>{
    let interval;

if(time>0 && uploadResponse.length>0){
interval=setInterval(() => {
  
   setTime(time-1);

}, 1000);
console.log('enpoit has been hit');
}

console.log(time);

return ()=>{clearInterval(interval);}

},[time,uploadResponse]);


  function detectFile(event){
    const file=event.target.files[0];

    if(file){
        setImageUrl(file);
    }
    console.log(imageUrl);
  }

  function uploadCancel(){
    setImageUrl(null);
  }

  function handleSubmit(e){
   e.preventDefault();
   
   if(imageUrl){
  let formdata=new FormData()
   formdata.append('file',imageUrl);
   formdata.append('upload_preset','lpihnza5');

   axios.post('https://api.cloudinary.com/v1_1/'+import.meta.env.VITE_CLOUDINARY_KEY+'/image/upload',formdata)
   .then((res)=>{

    console.log(res);
    Cookies.set('profileImageId',res.data.public_id);

   axios.post('https://lightitupapi.onrender.com/uploadImage',{
    imageUrl: res.data.public_id
   },{withCredentials:true})
   .then((res)=>{
    setUploadResponse(res.data);
    setTime(5);
   })
})
   .catch((err)=>console.log(err));
}
console.log(uploadResponse);
}

  return <div className='imageChanger_div'>

        <h2 onClick={()=>{props.showUploadSection(false)}}>{props.exitIcon}</h2>

    <h1>Upload Image</h1>
    <form onSubmit={handleSubmit}>
    
    <div className='file_input'>
  {Cookies.get('profileImageId') && !imageUrl ? <Image id='usersImage' cloudName="dldonwgcr" publicId={Cookies.get('profileImageId')} alt="User's profile image" /> : !Cookies.get('profileImageId') && !imageUrl ? <img id='usersImage' src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhQ9vYdUgEcYpsV86g9ZZokEGTgBtJKciiA&usqp=CAU" alt="users chosen image" /> : imageUrl && <img id='usersImage' src={URL.createObjectURL(imageUrl)} alt='users chosen photo' />}
     <input type="file" accept='image/*' onChange={detectFile} ref={buttonClick} hidden/>
     <button type='button' onClick={handleClick}>Choose File</button>
    </div>

    {imageUrl && <div className='uploadButtons'>
    <button type='button' onClick={uploadCancel}>Cancel</button>
    <button type='submit'>Submit</button>
    </div>}

    </form>

   {uploadResponse==='fail' ? <div style={time===0 ? {animation:"moveRight 0.3s ease forwards"} : {animation:"moveLeft 0.3s ease forwards"}}  className='uploadMessage'>
   <img id='uploadCheckmark' src="https://www.freeiconspng.com/thumbs/error-icon/red-error-round-icon-2.png" alt="checkmark"  />
   <h3>Something went wrong</h3>
  </div>: uploadResponse==='succes' ? <div style={time===0 ? {animation:"moveRight 0.3s ease forwards"} : {animation:"moveLeft 0.3s ease forwards"}}  className='uploadMessage'>
   <img id='uploadCheckmark' src="https://cdn4.iconfinder.com/data/icons/colicon/24/checkmark_done_complete-256.png" alt="checkmark" />
   <h3>succesfully changed profile image</h3>
  </div> : null}

<div>

</div>

</div>
}

export default ChooseImage