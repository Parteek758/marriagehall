import React from 'react';
import "./Services.css"
import image1 from '../image/image1.jpg'
import image17 from '../image/image17.jpg'
import image11 from '../image/image11.jpg'
import image12 from '../image/image12.jpg'
import image13 from '../image/image13.jpg'
export const Services = () => {
  return <>
{/* section-1  */}
<div className="services-banner">
 <div className="servicesbanner-wrapper">
     <img src={image1} alt="" />
 </div>
</div>
{/* section-2  */}
<div className="bannertext">
    <div className="bannertext-wrapper">
       <h1 className="animate__animated animate__rubberBand">
           Our Services
       </h1>
    </div>
</div>

<div className="section-3">
  <div className= "section-3-wrapper">
  <div class="section3-div">
  <div className="section3text-image">
      <img src={image17} alt="" />
  </div>
     <div class="section3text">
        <h3 class="section-3-h3">
          Wedding Ceremony
        </h3>
      <p class="section-3-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eos, vel distinctio assumenda ipsum dolorem ipsam perspiciatis recusandae debitis soluta, dolor, odit nesciunt sed! Perspiciatis laborum eligendi voluptatum porro harum.
       </p>
       <button type= "submit" className= "button-section3">Book Now</button>
      </div> 
      </div>
      <div class="section3-div">
      <div className="section3text-image">
      <img src={image11} alt="" />
      </div>
     <div class="section3text">
        <h3 class="section-3-h3">
          Corporate Events
        </h3>
      <p class="section-3-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nostrum necessitatibus praesentium ab alias delectus voluptatem ducimus aliquid vel sapiente cum voluptates eius nihil, voluptate, dolor, saepe optio perspiciatis earum.
       </p>
       <button type= "submit" className= "button-section3">Book Now</button>
      </div> 
      </div>
      <div class="section3-div">
      <div className="section3text-image">
      <img src={image12} alt="" />
      </div>
     <div class="section3text">
        <h3 class="section-3-h3">
          Birthday Party
        </h3>
      <p class="section-3-p">
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit laudantium fuga porro sunt qui rem quis illo mollitia nobis, tempore deleniti, id similique esse quibusdam, debitis aspernatur eius quaerat. Autem.
       </p>
       <button type= "submit" className= "button-section3">Book Now</button>
      </div> 
      </div>
      <div class="section3-div">
          <div className="section3text-image">
          <img src={image13} alt="" />
          </div>
     <div class="section3text">
         <h3 class="section-3-h3">
         Social Events
        </h3>
      <p class="section-3-p">
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic sunt odio veniam non maxime rem quaerat in. Exercitationem et sequi, asperiores, suscipit illum saepe numquam nam neque, amet cumque nulla!
       </p>
       <button type= "submit" className= "button-section3">Book Now</button>
      </div> 
      </div>
  </div>
</div>
  </>;
};
