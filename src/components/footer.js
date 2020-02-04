import React from 'react';
import styled from "styled-components"
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Static/Style.css";
import Quicklink from "../components/quicklink"
const Footer = (props) => {
    return(
        <div className="container-fluid">
  <div className="row">
 <div className="for-footer">
     <div className="row">
<div className="col-md-3 text-right">
<img src="/image/trexo-logo.png"></img>   
</div>
<div className="col-md-3">
<h5>About Us</h5>  
<p>Trexo is an AI-powered asset acquisition and leasing marketplace that brings together manufacturers, financial institutions and end-users on a single platform to offer intelligent and affordable access to the goods and equipment from a large network of premium suppliers.</p>
</div>
<div className="col-md-3">
<h5  className="text-center">Quick Link</h5>  
<ul className="quick-link">
{/* <Quicklink></Quicklink> */}
<li className="nav-item">
<Link to="/#Home" className="footer-link pb-3">Home</Link>
      
      </li>
      <li className="nav-item">
      <Link to="/#services" className="footer-link pb-3">Services</Link>
       
      </li>
      <li className="nav-item">
      <Link to="/#aboutus" className="footer-link pb-3">About Us</Link>
      </li>
      <li className="nav-item">
      <Link to="/#contactus" className="footer-link pb-3">Contact Us</Link>
       </li>
</ul>
</div>
<div className="col-md-3">
<h5>GET IN TOUCH</h5>  
<p>Contact:<a href="tel:+919718649077" className="footer-link"><span > +91 9718649077 </span></a></p>

<p>Email:<a href="mailto:rajat.rustagi@trexo.in" className="footer-link">  <span>rajat.rustagi@trexo.in </span> </a></p>
</div>
 </div>
 
 
  <div className="row">
     <div className="col-md-1"></div>
     <div className="col-md-10">
         <hr className="hr-tag"/>
         <p className="text-center">© Copyright Trexo.in 2019. All rights reserved.</p>
     </div>
     <div className="col-md-1"></div>
  </div>
  <div className="row footer-para">

  </div>
  </div>
    </div>  
    </div> 
)
    };
    export default Footer