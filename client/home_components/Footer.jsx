import React from 'react'
import "../css/footer.css";

function Footer({Desktop}) {

   const year=new Date().getFullYear();


  return <div className='footer'>
    <div className='footer_section'>

   <div className='all_content'>
   <div className='email_phone'>
   <div className='email'>
   <img alt='Gmail logo' src='https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-64.png'/>
    <span>jamaspishvilinika@icloud.com</span>
   </div>
   <div className='phone'>
   <img alt='Phone logo' src='https://cdn3.iconfinder.com/data/icons/object-emoji/50/Call-64.png' />
    <span>591-19-13-12</span>
   </div>
   </div>
   
   <div className='social_media'>
    <span>Follow us on</span>
  <div className='icons'>
   <a href='https://twitter.com/NikaJama123'> <img alt='Twitter' src='https://res.cloudinary.com/dldonwgcr/image/upload/v1687887966/twitter-3-logo-png-transparent_b1qzil.png' /> </a>
    <a href='https://www.instagram.com/nika_jamaspishvili/'><img alt='Instagram' src='https://res.cloudinary.com/dldonwgcr/image/upload/v1687887822/580b57fcd9996e24bc43c521_dxinvr.png' /> </a>
    <a href='https://www.facebook.com/profile.php?id=100013425753100'><img alt='Facebook' src='https://res.cloudinary.com/dldonwgcr/image/upload/v1687887977/facebook-3-logo-png-transparent_akbymd.png' /> </a>
   </div>
   </div>
   </div>
<div className='copyright'>
  <p>LightItUp©{year}. All rights reserved</p>
</div>
    </div>

    </div>
}

export default Footer