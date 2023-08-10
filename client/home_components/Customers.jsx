import React from 'react'
import "../css/customers.css";

function Customers({Desktop}) {
  return <div className='customers_div'>
    <div className='customers_section'>
   {Desktop ? (
    <div className='customers_main'>
    <img src='https://i.pinimg.com/564x/56/08/6d/56086de9e03e16e58f61f28cb9e5b4c8.jpg' alt='illustration of boys and girls waving hand. colorfull pucture' />
   <div className='customers_text'>
    <h1>What Our Customers Say</h1>
    <p>Read what our delighted customers have to say about their experiences with our extraordinary lighters. We take pride in bringing smiles to our customers' faces.</p>
   </div>
    </div> 
   ): <div className='customers_main'>
   <h1>What Our Customers Say</h1>
  <div className='customers_text'>
  <img src='https://i.pinimg.com/564x/56/08/6d/56086de9e03e16e58f61f28cb9e5b4c8.jpg' alt='illustration of boys and girls waving hand. colorfull pucture' />
   <p>Read what our delighted customers have to say about their experiences with our extraordinary lighters. We take pride in bringing smiles to our customers' faces.</p>
 </div>
   </div> }
    </div>
    </div> 
}

export default Customers