import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../css/newarrival.css";
import "../css/cart_hover.css";

function NewArrival() {
 
  const [images,setImages]=useState([]);
  const [array,setArray]=useState([]);


  useEffect(()=>{
  axios.get('https://api.unsplash.com/search/photos?query=lighter&per_page=12&client_id=vVIMtsRuzFnQRSufs0ZIsFx7LWHOd2pWQkd1bpl-QX4')
  .then((res)=>{
    setImages(res.data.results);
    setArray(Array[res.data.results.length].fill(true));
  }).catch((err)=>console.log(err));

  },[])


  
  function addToCart(index){
    const updatedArray=[...array];
   updatedArray[index]=!updatedArray[index];

   setArray(updatedArray);

  }


  return <div className='newarrival'> 
   <h1>New Arrival</h1>
  <div className='grid_layout_div'>
  {images.map((result,index)=>{
 return <div className='newarraival_main' key={index}>
 <img src={result.urls.regular} alt={result.alt_description} />

 <div className='img_price_description'> 
 <div className='price_description'>
 <h3>{result.alt_description}</h3>
 <p>price: {result.likes} $</p>
 </div>

 {!array[index] ? <div id='cart'><img onClick={()=>{addToCart(index)}} src='https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-256.png' alt='cart symbol' /></div> : <div id='checkmark'><img onClick={()=>{addToCart(index)}}  src='https://cdn0.iconfinder.com/data/icons/simply-orange-1/128/Artboard_9svg-512.png' alt='checkmark symbol'/></div>}
  </div>
</div>
  })}
  </div>
</div>
}

export default NewArrival