import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "../components/button";
import Backgroundimage from "../components/backgroundimage";
import Heading from "../components/heading";
import Card from "../components/card"
import Knowmore from "../components/knowmore"
import Navbar from "../components/navbar"
import Layout from "../components/layout" 
import "../Static/Style.css";
const Services = ({children}) => (
    
    <Layout>
    <Navbar/>
     <div className="cantainer-fulid">
 <Backgroundimage></Backgroundimage>
       {/* <img src="/image/Trexo-Banner.jpg" style={{ width: `100%` }}></img> */}
       {/* <Headertag></Headertag> */}
       {/* <Button></Button> */}
       <Heading headerText="Single Platform for Manufacturers, End-Users and Financial Institutions"></Heading>
       <card/>
      
         <div className="row">
           
       <div className="col-md-6">
         <p>TREXO is an AI-powered marketplace for asset acquisition and leasing of movable goods and equipments.The platform brings together Manufacturers, Financial Institutions and End Users (Businesses) to iron out inefficiencies across the entire value chain, align the interests of all the stakeholders and thereby, enable sustainable growth.<br/><br/>
Our robust Data Analytics and Machine Learning models will glean through a vast pool of data on products, purchase experiences, consumer history, vendors, processes and provide the businesses refined information, on an user-friendly interface and easy-to-understand reports, along with predictive analytics for effective decision making.
</p>
         </div>
         <div className="col-md-6">
         <img src="/image/trexo-flowchart.png"></img>
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
<Knowmore></Knowmore>
 </div>
</Layout>
)

export default Services