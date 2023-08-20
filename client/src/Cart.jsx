import React,{useEffect, useState} from 'react';
import "../css/cart.css";
import axios from "axios";
import "../css/alert.css";

function Cart() {

const [quantity,setQuantity]=useState([]);
const [authenticated,setAuth]=useState(false);
const [total,setTotal]=useState([]);
const [checkedout,setCheckedOut]=useState(false);

useEffect(()=>{
    axios.get('https://lightitupapi.onrender.com/isAuth',{
        withCredentials:true
      })
      .then((res)=>{
      if(res.data===true){
        setAuth(true);
    }else{
        setAuth(false);
      }
    
      })
      .catch((err)=>console.log(err));
},[])

useEffect(() => {
    // Calculate the total cost based on quantity and prices
    const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    const totalCost = cartProducts.reduce((total, result, index) => {
      const value = quantity.find(res => res.id === index);
      const count = value ? value.count : 1;
      return total + result.likes * count;
    }, 0);
    setTotal(totalCost);
  }, [quantity]);


function increamentQuantity(id,arg){
   let array=[...quantity];

  let value=array.find(res=>res.id===id);

 if(value && arg==='+' ){
    value.count+=1;
 }else if(value && arg==='-' && value.count>1){
  value.count-=1;
 }else{
  array.push({id:id,count:1});
 }

 setQuantity(array);
}

function checkoutPrev(){

 if(authenticated===true){
 setCheckedOut(true);
}else{
    alert('ERROR: You have to login first');
}
}

function checkout(){
   setTotal(0);   
   let emptyArray=JSON.stringify([]);
   localStorage.setItem('cartProducts',emptyArray);

   axios.get('https://lightitupapi.onrender.com/deleteFromProducts',{
    withCredentials:true
   })
   .then((res)=>console.log(res))
   .catch((err)=>console.log(err));
}


if(localStorage.getItem('cartProducts') && JSON.parse(localStorage.getItem('cartProducts')).length>0 && authenticated===true ){

  return <div className='cart_page'>
    <div className='cart_page_main'>
   
   <section className='cart_products'>
  <div className='cart_products_header'>
  <h1>Shopping cart</h1>
  <h3>3 items</h3>
  </div>

<div className='cart_products_body'>

{checkedout && <div className='alert_message'>
 <h1>checkedout succesfully</h1>
 <img src="https://cdn4.iconfinder.com/data/icons/colicon/24/checkmark_done_complete-256.png" alt="checkmark" />
 <div>
 <button onClick={()=>{setCheckedOut(false)}}>cancel</button>
 <button onClick={checkout}>ok</button> 
</div>
</div>
}

{JSON.parse(localStorage.getItem('cartProducts')).map((result,index)=>{

const value=quantity.find(res=>res.id===index);

const count=value ? value.count : 1;

return <div className='cart_products_main' key={index}>

 <div>
    <p>PRODUCT</p>
  <section>
    <img alt={result.alt_description} src={result.urls.regular} />
    <h3>{result.alt_description}</h3>
  </section>
</div>

 <div>
    <p>Quantity</p>
  <section id='quantity_section'>
   <button onClick={()=>{increamentQuantity(index,'-')}}>-</button>
   
    <h2>{count}</h2>
  
   <button onClick={()=>{increamentQuantity(index,'+')}}>+</button>
  </section>
</div>

<section id='price_and_total'>
<div id='product_price'>
<p>Price</p>
<h3>$ {result.likes}</h3>
</div>

<div id='total_product_price'>
<p>Total</p>
<h3>$ {count && count>1 ? result.likes * count : result.likes}</h3>
</div>
</section>

  </div>
  })}

</div>

   </section>

   <section className='cart_checkout'> 
    <h1>Order Summary</h1>

    <div className='cart_checkout_total'>
        <h3>TOTAL COST</h3>
        <p>$ {total}</p>
    </div>

    <button onClick={checkoutPrev}>CHECKOUT</button>
   </section>
    
    </div>    
</div>
}else{
    return <div className='emptyCart'>
        <h1>Cart is empty</h1>
        <img src='https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png' />
    </div>
}

}
export default Cart