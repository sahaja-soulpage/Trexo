import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../components/button";
// import Backgroundimage from "../components/backgroundimage";
import Heading from "../components/heading";
import Card from "../components/card"
import Knowmore from "../components/knowmore"
import Navbar from "../components/navbar"
import Layout from "../components/layout" 
import Services from "../components/services"
import Backgroundimage from "../components/backgroundimage"
import Aboutus from "../components/aboutus"
import Conactus from "../components/contactus"
import Footer from "../components/footer"
import Getintouch from "../components/getintouch"
// import Function from "../components/functin"
// import styled from "styled-components"


// const p = styled.p`
//   margin: 0 0 12px 0;
//   padding: 14px 0px;
//  color:red;
// `

const Home = ({children}) => (
  <Layout>
  <Navbar/>
     <div className="cantainer-fulid" id="#Home">
     <Backgroundimage></Backgroundimage>
  
  
     {/* <div className="col-md-12"> */}
 
       {/* <img src="/image/Trexo-Banner.jpg" style={{ width: `100%` }}></img> */}
       {/* <Headertag></Headertag> */}
       {/* <Button></Button> */}
       <Heading headerText="Single Platform for Manufacturers, End-Users and Financial Institutions"></Heading>
   
      
       <div className="col-md-12">
        <div className="row"> 
        
       <div className="col-md-6">
         <div className="col-md-12">
         <p>TREXO is an AI-powered marketplace for asset acquisition and leasing of movable goods and equipments.The platform brings together Manufacturers, Financial Institutions and End Users (Businesses) to iron out inefficiencies across the entire value chain, align the interests of all the stakeholders and thereby, enable sustainable growth.<br/><br/>
Our robust Data Analytics and Machine Learning models will glean through a vast pool of data on products, purchase experiences, consumer history, vendors, processes and provide the businesses refined information, on an user-friendly interface and easy-to-understand reports, along with predictive analytics for effective decision making.
</p>

</div>
         </div>
         <div className="col-md-6">
         <img src="/image/trexo-flowchart.png"></img>
         </div>
         </div> 
       </div>
       
      <Card/>
  
       {/* <div className="row">
         <div className="col-md-4">
           <Card></Card>
         </div>
         <div className="col-md-4">
         <Card></Card>
</div>
<div className="col-md-4">
  <Card></Card>
</div>
</div> */}
<Knowmore id="knowmore"></Knowmore>
<Services></Services>
<Aboutus id="aboutus"></Aboutus>
<Conactus id="contactus"></Conactus>
<Getintouch></Getintouch>
{/* <Function></Function> */}
{/* </div> */}
</div>
<Footer/>
</Layout>
)

export default Home