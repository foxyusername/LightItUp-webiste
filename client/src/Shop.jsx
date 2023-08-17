import axios from 'axios';
import React from 'react';
import "../css/shop.css";
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import Hero from '../shop_components/Hero';
import Trending from '../shop_components/Trending';
import NewArrival from '../shop_components/NewArrival';
import Allproducts from '../shop_components/Allproducts';
import Footer  from "../home_components/Footer";

function Shop(){

const ref=useRef();

  function scroll(){
  ref.current.scrollIntoView({behavior:'smooth'});
  }

  return <div className='shop'>
  <Hero scroll={scroll}/>
  <div className='shop_content_section'>
  <Trending />
  <NewArrival />
</div>

<div className='allproducts_header'>
    <h1>All products</h1>
  </div>

  <div className='shop_content_section' ref={ref}>
   <Allproducts />
  </div>
  <Footer />

  </div>
}

export default Shop