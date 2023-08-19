import React, { useEffect, useState } from 'react';
import "../css/shop_trending.css";
import "../css/cart_hover.css";

function Trending({cartClicked,products,cartAdded}) {

  const startNumber=0;
  const endNumber=3;

const Trending=products.slice(startNumber,endNumber);

return (
    <div className='shop_trending'>
      <h1>Trending</h1>
      <div className='shop_trending_content'>
        {Trending.map((result, index) => (
          <div key={index} className='content_main_div'>
            <img id='content_img' src={result.urls.regular} alt={result.alt_description} />
            <div className='decription_price_img'>
              <div className='description_price'>
                <h3>{result.alt_description}</h3>
                <p>price: {result.likes} $</p>
              </div>
            {cartAdded[index] ? <div id='checkmark'> <img onClick={() => cartClicked(index)} src={'https://cdn0.iconfinder.com/data/icons/simply-orange-1/128/Artboard_9svg-512.png'} alt='checkmark symbol' /> </div> : <div id='cart'> <img onClick={() =>cartClicked(index)}  src='https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-256.png' alt='cart symbol'/></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
