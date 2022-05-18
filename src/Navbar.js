import React from 'react'
import {
  Link
} from "react-router-dom";
export const Navbar = () => {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
  <a class="navbar-brand" href="#">
      {/* <img src="./logo192.png" alt="" width="30" height="100%" class="d-inline-block align-text-top"/> */}
      Heritage Abc
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center w-100 ">
        <li class="nav-item me-3">
          <Link class="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link text-light" href="#">Link</a>
        </li> */}
         <li class="nav-item me-3">
          <Link class="nav-link text-light " to="/Services" tabindex="-1" aria-disabled="true">Services</Link>
        </li>
        <li class="nav-item me-3">
          <Link class="nav-link text-light " to="/Gallery" tabindex="-1" aria-disabled="true">Gallery</Link>
        </li>
        <li class="nav-item me-3">
          <Link class="nav-link text-light " to="/About" tabindex="-1" aria-disabled="true">About us</Link>
        </li>
        {/* <li class="nav-item me-3">
          <Link class="nav-link text-light " href="/Contact" tabindex="-1" aria-disabled="true">Contact us</Link>
        </li> */}
        <li class="nav-item me-3">
          <Link class="nav-link text-light " to="/TESTIMONIALS" tabindex="-1" aria-disabled="true">Testimonials</Link>
        </li>
        {/* <li class="nav-item me-3">
          <a class="nav-link text-light " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
        <li class="nav-item me-3">
          <a class="nav-link text-light " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
       
      </ul>
      {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
        </>
    )
}
