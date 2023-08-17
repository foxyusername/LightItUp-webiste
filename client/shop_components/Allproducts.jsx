import React, { useEffect, useState } from 'react'
import "../css/allproducts.css";
import "../css/cart_hover.css";
import axios from "axios";


function Allproducts() {

const [products,setProducts]=useState([]);
const [cart,setCart]=useState([]);


useEffect(()=>{
 axios.get('https://api.unsplash.com/search/photos?query=lighter&per_page=24&client_id=vVIMtsRuzFnQRSufs0ZIsFx7LWHOd2pWQkd1bpl-QX4')
 .then((res)=>{
  setProducts(res.data.results);
  setCart(Array[res.data.results.length].fill(true));
 });

},[])

const cartClicked=(index)=>{
  const cartArray=[...cart];
  cartArray[index]=!cartArray[index];

  setCart(cartArray);
}


  return <div className='allproducts'>
   {products.map((result,index)=>{
    
  return  <div className='allproducts_main' key={index}>
  <img alt={result.alt_description} src={result.urls.regular} />
  <div className='allproducts_img_price_description'> 
   
   <div className='allproducts_description_price'>
    <h3>{result.alt_description}</h3>
   <p>price: {result.likes} $</p>
  </div>
 {!cart[index] ? <div id='cart'><img onClick={()=>{cartClicked(index)}} alt='cart symbol' src='https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-256.png' /></div>: <div id='checkmark'><img alt='checkmark symbol' onClick={()=>{cartClicked(index)}} src='https://cdn0.iconfinder.com/data/icons/simply-orange-1/128/Artboard_9svg-512.png' /></div>}
  </div>

 </div>
   })}
  

</div>
}

export default Allproducts