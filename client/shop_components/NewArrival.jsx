import React, { useEffect, useState } from 'react'
import "../css/newarrival.css";
import "../css/cart_hover.css";

function NewArrival({cartClicked,products,cartAdded}) {

  const startNumber=3;
  const endNumber=15;

const NewArrival=products.slice(startNumber,endNumber);


  return <div className='newarrival'> 
   <h1>New Arrival</h1>
  <div className='grid_layout_div'>
  {NewArrival.map((result,index)=>{
 return <div className='newarraival_main' key={index}>
 <img src={result.urls.regular} alt={result.alt_description} />

 <div className='img_price_description'> 
 <div className='price_description'>
 <h3>{result.alt_description}</h3>
 <p>price: {result.likes} $</p>
 </div>

 {!cartAdded[index+startNumber] ? <div id='cart'><img onClick={()=>{cartClicked(index+startNumber)}} src='https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-256.png' alt='cart symbol' /></div> : <div id='checkmark'><img onClick={()=>{cartClicked(index+startNumber)}}  src='https://cdn0.iconfinder.com/data/icons/simply-orange-1/128/Artboard_9svg-512.png' alt='checkmark symbol'/></div>}
  </div>
</div>
  })}
  </div>
</div>
}

export default NewArrival