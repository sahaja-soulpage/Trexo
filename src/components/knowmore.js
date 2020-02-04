import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "../components/heading"
import "../Static/Style.css";

const works_items = [
    {
      path: "/image/Request-quote-icon.png",
      title: "Request a Free Quote",
      para: "We will analyze your requirements and inform multiple suppliers partnered with us and arrange a quote"
    },
    {
      path: "/image/compare-icon.png",
      title: "Quote Comparison & Selection",
      para: "Compare the quotes and select the best one suitable, based on your purchase or leasing options"
    },
    {
      path: "/image/Get-your-equipment-icon.png",
      title: "Order Confirmation & Delivery",
      para: "Complete the transaction documentation and get your goods delivered"
    }
  ];
  
const Knowmore = () => (
  <div className="container-fluid knowmore-part" id="knowmore">
    <div className="col-md-12">
        <Heading headerText="How it Works"></Heading>
       <p className="text-center">Trexo aims at becoming the first choice for businesses to acquire or lease any movable assets. We built our platform on 3 key principles – ease of use, authenticity and reliability. Keeping these in mind, each aspect of the platform has been designed starting from origination of transaction, execution of transaction, after sales servicing and disposal/transfer of assets. We apply the Artificial Intelligence technologies to empower all stakeholders including Manufacturers, End-Users and Financial Institutions in creating better product, improve purchase experience and reduce credit risk respectively.</p>
         <div className="col-md-12">
         <div className="row" id="services">
            
       {
works_items.map((item, index) => (
    <div className="col-md-4 text-center">
    <img className="text-center" src={item.path}/>
<h5 className="text-center request-a-free-quote">{item.title}</h5>
<p className="text-center request-a-free-quote-para">{item.para}</p>
 </div>
)
)
}
</div>
</div>
</div>
</div>
)
export default Knowmore