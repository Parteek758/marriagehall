import React from 'react'
import './contant.css'
import 'animate.css';
import image1 from '../src/image/image1.jpg'
import image2 from '../src/image/image2.jpg'
import image3 from '../src/image/image3.jpg'
import image4 from '../src/image/image4.jpg'
import image5 from '../src/image/image5.jpg'
import image6 from '../src/image/image6.jpg'
import image7 from '../src/image/image7.jpg'
import image8 from '../src/image/image8.jpg'
import image9 from '../src/image/image9.jpg'
import image10 from '../src/image/image10.jpg'
import image11 from '../src/image/image11.jpg'
import image12 from '../src/image/image12.jpg'
import image13 from '../src/image/image13.jpg'
import image14 from '../src/image/image14.jpg'
import image15 from '../src/image/image15.jpg'
// import image17 from '../src/image/image17.jpg'
// import image18 from '../src/image/image18.jpg'
import image19 from '../src/image/image18.jpg'

export const Contant = () => {
    return (
        <>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner" id="image-banner">
    <div class="carousel-item active" >
      <img src={image1} class="d-block"   id="banner"alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5> */}
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item"  >
      <img src={image2} class="d-block "  id="banner"alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5> */}
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item"  >
      <img src={image3} class="d-block " id="banner" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5> */}
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div class="carousel-item"  >
      <img src={image19} class="d-block " id="banner" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Fourth slide label</h5> */}
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
{/* section-1 */}
<div className="section1">
  <div className="section1-wrapper">
    <div className="wrapper-text animate__heartBeat">
      <h1>
        Welcome to Abc Banquet Resort
      </h1>
    </div>
  </div>
</div>

<div class="card-group " id="card-wrapper">
  <div class="card " id="card">
    <img src={image4} class="card-img-top" alt="..." id="banner1"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
    </div>
  </div>
  <div class="card" id="card">
    <img src={image5} class="card-img-top" alt="..." id="banner1"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
  <div class="card" id="card">
    <img src={image6} class="card-img-top" alt="..." id="banner1"/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
</div>
{/* section  */}
<div className="section">
  <div className="section-wrapper">
    <h2>
      Gallery
    </h2>
  </div>
</div>
{/* section2  */}
<section className="section-2">
  <div className="section2-wrapper">
     <div className="wrapper-image">
       <img src={image7} alt="" />
     </div>
     <div className="wrapper-image">
       <img src={image8} alt="" />
     </div>
     <div className="wrapper-image">
       <img src={image9} alt="" />
     </div>
     <div className="wrapper-image">
       <img src={image10} alt="" />
     </div>
     <div className="wrapper-image">
       <img src={image11} alt="" />
     </div>
     <div className="wrapper-image">
       <img src={image12} alt="" />
     </div>
     <div className="wrapper-image">
       <img src={image13} alt="" />
     </div>
     <div className="wrapper-image">
       <img src={image14} alt="" />
     </div>
     <div className="wrapper-image">
       <img src={image15} alt="" />
     </div>
  </div>
</section>
{/* section-4  */}
<section className="section-4">
  <div className="section4-wrapper">
    <div className="wrapper-section4">
      <div className="section4-text">
        <h2>
          The Best <br />
        <span>  <hr /> Banquet Resort <hr /></span>
        </h2>
      </div>
    </div>
    <div className="mainwrapper">
      <div className="section4-main-image">
        <img src={image7} alt="" />
      </div>
      <div className="section4-mainwrapper-after">
        <h2>
          Lorem ipsum, dolor sit amet consectetur 
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur asperiores quae minima quibusdam nobis inventore, et dignissimos aperiam nesciunt itaque.
        </p>
      </div>
      <div className="section4-main"></div>
    </div>
    <div className="wrapper1-section4">
      <div className="section4-image">
        <img src={image4} alt="" />
       </div>
      <div className="image-text-section4">
          <h4>
            Catering
          </h4>
        </div>
     <div className="section4-image">
       <img src={image14} alt="" />
     </div>
     <div className="image-text1-section4">
          <h4>
            Catering
          </h4>
        </div>
    </div>
  </div>
</section>
{/* section-3  */}
<section className="section3">
  <div className="section3-wrapper">
    <div className="wrapper">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54033.00759943673!2d76.35743217910156!3d32.17557650000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5398d4034fb3%3A0xa0ac486adcaf1eae!2sHeritage%20Abc%20Banquet%20%26%20Resort!5e0!3m2!1sen!2sin!4v1642486924589!5m2!1sen!2sin"allowfullscreen="" loading="lazy"></iframe>
    </div>
    <div className="wrapper">
      <div className="address">
        <div className="address-wrapper">
          <h3>
            Adderss
          </h3>
        </div>
        <div className="adderss-wrapper1 animate__pulse">
        <p>Heritage Abc, <br />
          Near DAV School, Yol, <br />
          Dharamshala Distt. Kangra <br />
          Himachal Pradesh</p>
        </div>
      </div>
      <div className="phone">
        <div className="phone-wrapper">
          <h3>
          PHONE NO :
          </h3>
        </div>
        <div className="phone-number animate__pulse">
        <p>+91 78760 62399</p>
        </div>
      </div>
      <div className="email">
      <div className="email-wrapper">
          <h3>
          EMAIL:
          </h3>
        </div>
        <div className="email-id">
        <a href="mailto:heritageAbc@gmail.com animate__pulse">heritageAbc@gmail.com</a>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}
