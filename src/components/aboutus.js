import React from 'react';
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import Heading from "../components/heading";
import Ourteam from "../components/ourteam"
import "../Static/Style.css";

const Aboutus = () => {
    return(


<div className="container-fluid knowmore-part" id="aboutus">
    <div className="col-md-12">
<Heading headerText="About Us"></Heading>
<div className="row">
    <div className="col-md-7">
  <p>TREXO is an asset acquisition and leasing transaction platform aiming at introducing efficiency and flexibility in transaction closures of moveable goods and equipment. TREXO has started its operations in 2 key cities in India – Pune and Bangalore with various products in furniture, white goods and appliances, Kitchen Equipment and GYM equipment. It targets operators in the Student Housing, Co-Living, Co-Working and Hospitality industry with operations in Pune and Bangalore.<br/><br/>Going forward, TREXO plans to expand its operations PAN India and cater to businesses in Real Estate, Construction, Healthcare, Automobile, etc. TREXO’s founding team comes with more than 100 man-years experience in banking, manufacturing, investment banking and process improvement and technological transformation.</p>
    </div>
    <div className="col-md-5">
    <img src="/image/about-us-image.jpg"></img>
        </div>
</div>
<Heading headerText="Our Team"></Heading>
<Ourteam></Ourteam>

</div>
</div>

)
    };
    export default Aboutus