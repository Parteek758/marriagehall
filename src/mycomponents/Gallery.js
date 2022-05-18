import React from 'react';
import './Gallery.css'
import video from '../image/pexels-mohit-jain-5951236.mp4'
import image17 from '..//image/image17.jpg'
import image18 from '..//image/image18.jpg'
import image7 from '../image/image16.jpg'
import image1 from '../image/image15.jpg'
import image2 from '../image/image13.jpg'
import image3 from '../image/image10.jpg'
import image4 from '../image/image7.jpg'
import image5 from '../image/image3.jpg'
import image6 from '../image/image11.jpg'

export const Gallery = () => {
 return <>
 <div class="card ">
  <video autoplay="autoplay" muted="muted" loop="loop" playsInline= "playsInline">
    <source type="video/mp4"  src={video}/>
  </video>
  {/* <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text">Last updated 3 mins ago</p>
  </div> */}
</div>
{/* setion */}
    <div className="headding-text">
       <div className="headding">
          <h1>
              Gallery
          </h1>
       </div>
    </div>

   {/* section-4  */}
<div class="section4">
    {/* <div class="contant" >
<h2>
   Featured Medical Treatment
</h2>
<p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto suscipit quos a recusandae vel voluptate!
</p>
    </div> */}
<div class="Treatment">

   <div class="Patient" id="treatment-div-id1">
       <div class="Specialists"  >
    {/* <h3 class="section-4-h3">
   Infertility Surgery
    </h3>
    <p class="section-4-p">
        50+ Specialists
    </p> */}

       </div> 

   </div>

   <div  class="Patient" id="treatment-div-id2" >
       
        <div class="Specialists">
    {/* <h3 class="section-4-h3">
      Cancer
    </h3>
    <p class="section-4-p">
        50+ Specialists
    </p> */}


       </div> 

   </div>

   <div class="Patient"id="treatment-div-id3">
       
      <div class="Specialists">
    {/* <h3 class="section-4-h3">
      Dentistry
    </h3>
    <p class="section-4-p">
        50+ Specialists
    </p> */}

       </div> 

   </div>

   <div class="Patient"id="treatment-div-id4">
       
       <div class="Specialists">
    {/* <h3 class="section-4-h3">
      Dentistry
    </h3>
    <p class="section-4-p">
        50+ Specialists
    </p> */}

       </div> 

   </div>

   <div class="Patient"id="treatment-div-id5">
       
      <div class="Specialists">
    {/* <h3 class="section-4-h3">
      Dentistry
    </h3>
    <p class="section-4-p">
        50+ Specialists
    </p> */}

       </div>

   </div>

   <div class="Patient"id="treatment-div-id6">
       
        <div class="Specialists">
    {/* <h3 class="section-4-h3">
      Dentistry
    </h3>
    <p class="section-4-p">
        50+ Specialists
    </p> */}
       </div> 
       </div>
 </div>
</div>

{/* section-1  */}

<div className="section-1">
  <div className="section1-wrapper">
    <div className="section1-image">
      <img src={image1} alt="" />
    </div>
    <div className="section1-image">
      <img src={image3} alt="" />
    </div>
    <div className="section1-image">
      <img src={image4} alt="" />
    </div>
    <div className="section1-image">
      <img src={image5} alt="" />
    </div>
    <div className="section1-image">
      <img src={image6} alt="" />
    </div>
    <div className="section1-image">
      <img src={image7} alt="" />
    </div>
    <div className="section1-image">
      <img src={image17} alt="" />
    </div>
    <div className="section1-image">
      <img src={image18} alt="" />
    </div>
    <div className="section1-image">
      <img src={image2} alt="" />
    </div>
  </div>
</div>
  </>;
};
