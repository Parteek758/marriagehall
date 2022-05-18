import React from 'react'
import './contant.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import {FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export const Fotter = () => {
    return (
        <>
            <footer class="bd-footer mt-3 bg-dark">
  <div class="container py-2">
    <div class="row">
      <div class="col-lg-3 mb-3">
        <a class="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
        <img src="./logo192.png" alt="" width="30" height="100%" class="d-inline-block align-text-top"/>
          <span class="fs-5 text-white">Narwana Banquet Resort</span>
        </a>
        <ul class="list-unstyled small text-white">
          <li class="mb-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, numquam!</li>
          <li class="mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatibus et. Necessitatibus!</li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 offset-lg-1 mb-3 text-white">
        <h5>Links</h5>
        <ul class="list-unstyled text-white">
          <li class="mb-2"><a href="" id="link-tag">Home</a></li>
          <li class="mb-2"><a href="" id="link-tag">Docs</a></li>
          <li class="mb-2"><a href="" id="link-tag">Examples</a></li>
          <li class="mb-2"><a href="" id="link-tag">Themes</a></li>
          <li class="mb-2"><a href="" id="link-tag">Blog</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3 text-white">
        <h5>Guides</h5>
        <ul class="list-unstyled text-white">
          <li class="mb-2"><a href="" id="link-tag">link</a></li>
          <li class="mb-2"><a href="" id="link-tag">link</a></li>
          <li class="mb-2"><a href="" id="link-tag">link</a></li>
          <li class="mb-2"><a href="" id="link-tag">link</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3 text-white">
        <h5>Projects</h5>
        <ul class="list-unstyled text-white">
          <li class="mb-2"><a href="" id="link-tag">link</a></li>
          <li class="mb-2"><a href="" id="link-tag">link</a></li>
          <li class="mb-2"><a href="" id="link-tag">link</a></li>
          <li class="mb-2"><a href="" id="link-tag">link</a></li>
          <li class="mb-2"><a href="" id="link-tag">link</a></li>
        </ul>
      </div>
      <div class="col-6 col-lg-2 mb-3 text-white">
        <h5>Community</h5>
        <ul class="list-unstyled text-white">
          <li class="mb-2"><a href="+91 78760 62399" id="link-tag"><FaWhatsapp className="whatsapp"/></a></li>
          <li class="mb-2"><a href="+91 78760 62399" id="link-tag"><FaPhoneVolume className="Phone"/></a></li>
          <li class="mb-2"><a href="https://www.instagram.com/heritagenarwana/?hl=en" id="link-tag"><FaInstagram className="Instagram"/></a></li>
          <li class="mb-2"><a href="https://www.facebook.com/pages/category/Wedding-Venue/Heritage-Narwana-Banquet-Resort-498085094295274/"  id="link-tag"><FaFacebookF className="Facebook"/></a></li>
        </ul>
      </div>
    </div>
  <div>
</div>
  </div>
</footer>

        </>
    )
}
