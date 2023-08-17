import React from 'react'
import "../css/Whyus.css";

function Whyus() {
  return <div className='Whyus'>
    <div className='Whyus_section'>
    
   <h1>Why choose LightItUp?</h1>
   <div className='components_div'>
    <div className='first_component'>
   <img src='https://www.freeiconspng.com/thumbs/paintbrush-png/paintbrush-png-17.png' alt='drawer with inks' />
   <h2>Exclusive Designs</h2>
   <p>Our lighters are handpicked to offer you one-of-a-kind designs that stand out.</p>
    </div>

    <div className='second_component'>
    <img src='https://cdn2.iconfinder.com/data/icons/shopping-11/512/Badge-512.png' alt='symbol of star' />
   <h2>Quality Craftsmanship</h2>
   <p>Each lighter is crafted with attention to detail, ensuring top-notch quality.</p>
    </div>
    
    <div className='third_component'>
    <img src='https://freepngimg.com/save/26681-fashion-girl-transparent-background/910x950' alt='woman with fashion style illustration'/>
   <h2>Express Your Style</h2>
   <p> Find a lighter that complements your personality and sparks conversation.</p>
    </div>
    </div>
   </div>
  </div>
}

export default Whyus;