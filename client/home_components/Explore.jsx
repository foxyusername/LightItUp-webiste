import React from 'react'
import "../css/explore.css";

function Explore({Desktop}) {

  return <div className='Explore_div'>
    <div className='Explore_section'>
    {Desktop===false ? (
    <div className='Explore_main'>
    <h1>Explore Our Collection Section</h1>
    <div className='Explore_text'>
     <img alt='colorfull lighters together' src='https://i.pinimg.com/564x/65/b8/79/65b879e3f9e8764626dba7b33f47d6fa.jpg' />
     <p>Browse through our extensive range of lighters, each with its own story to tell. From sleek and modern to quirky and artistic, there's a perfect lighter waiting for you.</p>
    </div>

    </div>)
    :<div className='Explore_main'>
    <div className='Explore_text'>
    <h1>Explore Our Collection Section</h1>
    <p>Browse through our extensive range of lighters, each with its own story to tell. From sleek and modern to quirky and artistic, there's a perfect lighter waiting for you.</p>
    </div>
    <img alt='colorfull lighters together' src='https://i.pinimg.com/564x/65/b8/79/65b879e3f9e8764626dba7b33f47d6fa.jpg' />

    </div>}
    </div>
    </div>
}

export default Explore;