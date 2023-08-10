import React from 'react'
import "../css/About.css";

function About({Desktop}) {
    const image_url='https://i.pinimg.com/564x/ba/9b/bc/ba9bbc066f1977bb4d6d1c50addae182.jpg';

  return <div className='about'>
  <div className='about_section'>
{Desktop===false ? (
    <div className='about_main'>
    <h1>About US</h1>
  <div className='about_text'>
<img src={image_url} alt='cool lighter in gold and white colors'/>

<p>At LightItUp, we curate the most extraordinary collection of lighters that blend style, creativity, and functionality. Our passion for unique designs has led us to source the coolest lighters from talented designers across the globe.</p>
    </div>
    </div>
): <div className='about_main'>
<img src={image_url} alt='cool lighter in gold and white colors'/>
<div className='about_text'>
<h1>About US</h1>
<p>At LightItUp, we curate the most extraordinary collection of lighters that blend style, creativity, and functionality. Our passion for unique designs has led us to source the coolest lighters from talented designers across the globe.</p>
</div>
</div>}

    </div>
  </div>
}

export default About