
    import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby"
const Team_items = [
    {
      path: "/image/Yogesh-Agarwal.png",
      name: "Yogesh Agarwal",
     linkedimg: "/image/Linked-in.png",
     para: "Management Graduate with 19 years experience in Strategy, Management, Investment banking. Worked with Citibank, OneSavings Bank, UK at Senior Position. Nominated twice as “Entrepreneur of the Year”  by Ernst & Young in 2010 & 2011.",
     linkurl:"https://www.linkedin.com/in/yogesh-agarwal-77439a7"
    },
  
    {
        path: "/image/Dhawal.png",
        name: "Dhawal Shah",
       linkedimg: "/image/Linked-in.png",
       para: "First generation entrepreneur with 21 years of experience in Manufacturing, Branding, Design, Operations, Sourcing And Quality Assurance. He has been instrumental in building Furnitech and MintHomez brand dealing in furniture and furnishings pan india.",
       linkurl:"https://www.linkedin.com/in/dhawal-shah-99450b16/"
    },
      {
        path: "/image/Rajat.png",
        name: " Rajat Rustagi",
       linkedimg: "/image/Linked-in.png",
       para: "Management graduate from ISB with 10 years of experience.in Strategy, Fundraising, Business Development and Operations. Worked with Yes Bank, Birla Estate and OYO at various positions.",
       linkurl:"https://www.linkedin.com/in/rajat-rustagi-01535531/"
    },
      {
        path: "/image/Ashish.png",
        name: "Ashish Agarwal",
       linkedimg: "/image/Linked-in.png",
       para: "Fellow CA, Certified ISO Lead Auditor, Six Sigma Champion and External Assessor with 19 years of experience in Finance, Accounting, Funds Management, Treasury Taxation, Risk Management. Worked with Voltas, Rockwool, Rich Gravis and SMT at Senior positions.",
       linkurl:"https://www.linkedin.com/in/ashish-agrawal-a96393b/"
    },
      {
        path: "/image/Murali.png",
        name: "Murali Krishna Karuturi",
       linkedimg: "/image/Linked-in.png",
       para: "Managing Director of Soulpage IT Solutions, an Artificial Intelligence & Data Science technology company. Worked as a Global Director at S&P Global and has 20 years of experience in handling Global Financial Data, Data Insights, Automation, and building AI models.",
       linkurl:"https://www.linkedin.com/in/murali-krishna-karuturi-4137a411/"
      }
  ];
const Ourteam = () => {
    return(
 <div className="container-fluid"> 
       <div className="row">   
      {
Team_items.map((item, index) => (
   <div className="col-md-6">
     <div className="card p-4 ourteam-card rounded-lg mb-4 shadow-sm">
    <div className="row">
        <div className="col-md-4 text-center">
        <img src={item.path}/>
        </div>
        <div className="col-md-8 pt-3">
       <h3>{item.name}</h3>
        <div className="row">
            <div className="col-md-6">
           <p>( Founding member )</p>
            </div>
            <div className="col-md-6 text-left">
            <a href={item.linkurl} target="_blank"><img src={item.linkedimg}/></a>  
            </div>
        </div>
        </div>
</div>
<p className="pt-3">{item.para}</p>
</div>
  </div>      


 
)
)
}
 </div> 
 </div>

)
    };
    export default Ourteam