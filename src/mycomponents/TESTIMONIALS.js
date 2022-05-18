import React from 'react';
import "./Testimonials.css"
import image5 from '../image/image3.jpg'
import person from '../image/person.png'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
export const TESTIMONIALS = () => {
  return <>
      <div className="text">
       <div className="text-wrapper">
         <img src={image5} alt="" />
        
       </div>
     </div>
     
      <div className= "text2">
        <div className= "text2-headding">
           <h1 className= " animate__animated animate__heartBeat">
           Testimonials
           </h1>
        </div>
        <div className= "text2-wrapper">
           <div className= "text2wrapper-wrapper">
             <div className= "text2image">
              <img src={person} alt="" />
             </div>
             <div className="text2name">
               <h2>
                 name of person
               </h2>
             </div>
             <div className="text2-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda beatae molestias minus similique tempore pariatur amet tempora, debitis est facere.
                </p>
             </div>
             <div className="text2media">
                <ul className= "text2media-items">
                  <li> <a href=""><FaFacebookF/></a> </li>
                  <li> <a href=""><FaWhatsapp/></a> </li>
                  <li> <a href=""><FaInstagram/></a> </li>
                  <li> <a href=""><FaPhoneVolume/></a> </li>
                </ul>
             </div>
           </div>
           <div className= "text2wrapper-wrapper">
             <div className= "text2image">
             <img src={person} alt="" />
             </div>
             <div className="text2name">
               <h2>
                 name of person
               </h2>
             </div>
             <div className="text2-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda beatae molestias minus similique tempore pariatur amet tempora, debitis est facere.
                </p>
             </div>
             <div className="text2media">
             <ul className= "text2media-items">
                  <li> <a href=""><FaFacebookF/></a> </li>
                  <li> <a href=""><FaWhatsapp/></a> </li>
                  <li> <a href=""><FaInstagram/></a> </li>
                  <li> <a href=""><FaPhoneVolume/></a> </li>
                </ul>
             </div>
           </div>
           <div className= "text2wrapper-wrapper">
             <div className= "text2image">
             <img src={person} alt="" />
             </div>
             <div className="text2name">
               <h2>
                 name of person
               </h2>
             </div>
             <div className="text2-text">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda beatae molestias minus similique tempore pariatur amet tempora, debitis est facere.
                </p>
             </div>
             <div className="text2media">
             <ul className= "text2media-items">
                  <li> <a href=""><FaFacebookF/></a> </li>
                  <li> <a href=""><FaWhatsapp/></a> </li>
                  <li> <a href=""><FaInstagram/></a> </li>
                  <li> <a href=""><FaPhoneVolume/></a> </li>
                </ul>
             </div>
           </div>
        </div>
      </div>
  </>;
};
