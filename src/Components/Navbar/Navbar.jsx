import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';
import { scrollToBottom } from 'react-scroll/modules/mixins/animate-scroll';
export default function Navbar() {
        
    

  return <>
  <div className="navcol fixed-top py-3 ">
  <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container ">
    <Link className="navbar-brand text-white brand" to={'/'} >START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item ">
          <Link className="nav-link text-white is rounded-3 active" to={'about'}>ABOUT</Link>
        </li>
        <li className="nav-item ms-2">
          <Link className="nav-link text-white is" to={'portofolio'}>PORTOFOLIO</Link>
        </li>
        <li className="nav-item ms-2">
          <Link className="nav-link text-white is" to={'contact'}>CONTACT</Link>
        </li>
        
         
      </ul>
      
    </div>
  </div>
</nav>
  </div>
  
  </>
}