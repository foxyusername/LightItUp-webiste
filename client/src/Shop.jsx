import axios from 'axios';
import React,{useState,useEffect} from 'react';
import "../css/shop.css";
import "../css/alert.css";
import { useRef } from 'react';

import Hero from '../shop_components/Hero';
import Trending from '../shop_components/Trending';
import NewArrival from '../shop_components/NewArrival';
import Allproducts from '../shop_components/Allproducts';
import Footer  from "../home_components/Footer";

function Shop(){

  const [products,setProducts]=useState([]);
  const [cartAdded,setCartAdded]=useState([]);
  const [authenticated,setAuth]=useState(false);
  const [showError,setShowError]=useState('');
  const [time,setTime]=useState(5);

useEffect(()=>{

  axios.get('https://api.unsplash.com/search/photos?query=lighter&per_page=39&client_id='+import.meta.env.VITE_UNSPLASH_KEY+'').then((res)=>{
  setProducts(res.data.results);
  setCartAdded(Array[res.data.results.length].fill(true));
 }).catch((err)=>console.log(err));

axios.get(import.meta.env.VITE_API_URL+'/isAuth',{
 withCredentials:true
}).then((res)=>{
   setAuth(res.data);
}).catch((err)=>{console.log(err)});

axios.get(import.meta.env.VITE_API_URL+'/checkCart',{
  withCredentials:true
}).then((res)=>{  

if(res.data!=='no token presented' && res.data!=='invalid accesToken'){

  const starterCartStore=[...cartAdded];

  for(let i=0;i<res.data.length;i++){
    starterCartStore[res.data[i].product_index]=!starterCartStore[res.data[i].product_index];
}
setCartAdded(starterCartStore);

}else if(res.data==='invalid accesToken'){
  setShowError('invalid accesToken, please Login again or contact us to troubleshoot the causing issue')
}
}).catch((err)=>console.log(err));

},[])  

function newInterval(){

   let interval;

   if(time>0 && showError.length>0){
    interval=setInterval(() => {
       setTime((prev)=>prev-1);
    }, 1000);
   }else if(time===0){
    console.log('time is up')
   }
   return ()=>{
   clearInterval(interval);
   }
}

useEffect(newInterval,[time,showError]);



const ref=useRef();

function convertProducts(newcartAdded){

  const cartProducts=[];
  
  for(let i=0;i<newcartAdded.length;i++){
   if(newcartAdded[i]===true){
    cartProducts.push(products[i]);
  }
  }

 const modifiedCart=JSON.stringify(cartProducts);

 localStorage.setItem('cartProducts',modifiedCart);
 }

  function scroll(){
  ref.current.scrollIntoView({behavior:'smooth'});
  }



  function handleError(argument){

    setTime(5);

  if(argument==='invalid acceToken'){
  setShowError('invalid accesToken, please Login again or contact us to troubleshoot the causing issue');
  }else if(argument==='no token presented'){
  setShowError('You need to Login or Register in order to use cart functionality');
}

  }

  function cartClicked(index){
    if(authenticated===true){
    const newcartAdded=[...cartAdded];
    newcartAdded[index]=!newcartAdded[index];

  axios.post(import.meta.env.VITE_API_URL+'/addToCart',{
    index:index
  },{
    withCredentials:true
  })
  .then((res)=>{
   console.log(res);
  })
  .catch((err)=>console.log(err))


    setCartAdded(newcartAdded);
    
    convertProducts(newcartAdded);
  }else if(authenticated===false){
   handleError('no token presented');
  }else if(authenticated==='invalid accesToken'){
  handleError('invalid accesToken');
}

}
   
  return <div className='shop'>
  <Hero scroll={scroll}/>
  <div className='shop_content_section'>
    {showError.length>0 && <div className='alert_error'style={
  window.innerWidth>=600 && time === 0
  ? { animation: 'moveRight 0.5s ease-in-out forwards' }
    : window.innerWidth<600 && time===0
    ? {animation: 'moveDown 0.5s ease-in-out forwards'}
    :null
}>
      <h3>{showError}</h3>
    </div>}

  <Trending cartClicked={cartClicked} products={products} cartAdded={cartAdded}/>
  <NewArrival cartClicked={cartClicked} products={products} cartAdded={cartAdded} />
  </div>

<div className='allproducts_header'>
    <h1>All products</h1>
  </div>

  <div className='shop_content_section' ref={ref}>
   <Allproducts cartClicked={cartClicked} products={products} cartAdded={cartAdded} />
  </div>
  <Footer />

  </div>
   }

export default Shop