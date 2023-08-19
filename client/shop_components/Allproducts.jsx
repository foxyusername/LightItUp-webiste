import React, { useEffect, useState } from 'react'
import "../css/allproducts.css";
import "../css/cart_hover.css";


function Allproducts({cartClicked,products,cartAdded}) {

  const startNumber=15;
  const endNumber=30;

  const Allproducts=products.slice(startNumber,endNumber);

  return <div className='allproducts'>
   {Allproducts.map((result,index)=>{
    
  return  <div className='allproducts_main' key={index}>
  <img alt={result.alt_description} src={result.urls.regular} />
  <div className='allproducts_img_price_description'> 
   
   <div className='allproducts_description_price'>
    <h3>{result.alt_description}</h3>
   <p>price: {result.likes} $</p>
  </div>
 {!cartAdded[index+startNumber] ? <div id='cart'><img onClick={()=>{cartClicked(index+startNumber)}} alt='cart symbol' src='https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-256.png' /></div>: <div id='checkmark'><img alt='checkmark symbol' onClick={()=>{cartClicked(index+startNumber)}} src='https://cdn0.iconfinder.com/data/icons/simply-orange-1/128/Artboard_9svg-512.png' /></div>}
  </div>

 </div>
   })}
  

</div>
}

export default Allproducts