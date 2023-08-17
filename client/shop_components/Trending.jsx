import React, { useEffect, useState } from 'react';
import "../css/shop_trending.css";
import "../css/cart_hover.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";

function Trending() {
  let array = [];
  const [images, setImages] = useState([]);
  const [cartClicks, setCartClicks] = useState([]);

  useEffect(() => {
    axios.get('https://api.unsplash.com/search/photos?query=lighter&per_page=3&client_id=vVIMtsRuzFnQRSufs0ZIsFx7LWHOd2pWQkd1bpl-QX4')
      .then((res) => {
        setImages(res.data.results);
        setCartClicks(Array[res.data.results.length].fill(false));
        console.log(res.data);
      })
      .catch((err) => console.log(err));

  }, []);


  const handleCartClick = (index) => {
    const updatedCartClicks = [...cartClicks];
    updatedCartClicks[index] = !updatedCartClicks[index];
    setCartClicks(updatedCartClicks);
  
  };

  return (
    <div className='shop_trending'>
      <h1>Trending</h1>
      <div className='shop_trending_content'>
        {images.map((result, index) => (
          <div key={index} className='content_main_div'>
            <img id='content_img' src={result.urls.regular} alt={result.alt_description} />
            <div className='decription_price_img'>
              <div className='description_price'>
                <h3>{result.alt_description}</h3>
                <p>price: {result.likes} $</p>
              </div>
            {cartClicks[index] ?
           <div id='checkmark'> <img onClick={() => handleCartClick(index)} src={'https://cdn0.iconfinder.com/data/icons/simply-orange-1/128/Artboard_9svg-512.png'} alt='checkmark symbol' /> </div> : <div id='cart'> <img onClick={() => handleCartClick(index)}  src='https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-256.png' alt='cart symbol'/></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trending;
