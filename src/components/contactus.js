import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "../components/heading"
import "../Static/Style.css";
// const CardItem = props => {
//   return (
// <div>
//       <img src={props.path}/>
//         <p>{props.name}</p>
  
//         </div>
//   );
// };
const card_items = [
  {
    path: "/image/mail.png",
    name: "Mail Us",
    email: "rajat.rustagi@trexo.in",
    linkurl: "mailto:rajat.rustagi@trexo.in"
  },
  {
    path: "/image/mail.png",
    name: "Call Us",
    email: "+919718649077 ",
    linkurl: "tel:+919718649077"
  },
  {
    path: "/image/mail.png",
    name: "Address",
    email: "63/2, Shivrai Nagar,Gangadham Katraj Rd., Kondhwa (Bk), Pune – 411048.",
    // adrs: "Gangadham Katraj Rd., Kondhwa (Bk), Pune – 411048."
  
  }
];

const Contactus = (props) => {
    return(
     <div className="container-fluid" id="contactus">
         <Heading headerText="Contact Us" ></Heading>
       
<div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
    <div className="row text-center">
{
card_items.map((item, index) => (
  
                <div className="col-md-4">

  <img src={item.path}/>
  
    

    <h6>{item.name}</h6>
    <a href={item.linkurl} className="contactlink"><p>{item.email}</p></a>
  
</div>

)
)}
      
    </div> 
       <hr/>
    </div> 
    <div className="col-md-1"></div> 
    </div>
    </div>
)
    }
    
export default Contactus