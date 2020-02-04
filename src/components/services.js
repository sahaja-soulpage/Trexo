import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "../components/heading"
import List from "../components/list"
import Listitems from "../components/listitems"
import Subhaeding from "../components/subhaeding"

const Services = (props) => {
    return(
<div className="container-fluid" id="services">
    <div className="col-md-12">
<Heading headerText="Services"></Heading>
<p className="text-center">
TREXO’s strong understanding of manufacturing ecosystem and financial market along with its robust credit framework and application of Artificial Intelligence, strengthens the platform and enhances the value proposition for the stakeholders.</p>
<div className="row pt-5">
<div className="col-md-1"></div>
    <div className="col-md-5">
    <img src="/image/Transaction-Origination.jpg" className="img-responsive"></img>
    </div>
    
    <div className="col-md-5">
    <Subhaeding subtitleText="Transaction Origination"></Subhaeding> 
    {/* <List></List> */}
    <Listitems listitemsText="Featured suppliers with their profile and capabilities"></Listitems>
    <Listitems listitemsText="Featured end-users with customisable order requirements"></Listitems>
    <Listitems listitemsText="Featured FIs/lenders with simple credit framework for end-users and suppliers"></Listitems>
    </div>
    <div className="col-md-1"></div>
</div>
<div className="row pt-5">
<div className="col-md-1"></div>
    <div className="col-md-5">
    <Subhaeding subtitleText="Ordering & Fulfilment"></Subhaeding> 
    {/* <List></List> */}
    <Listitems listitemsText="Robust tech stack for order raising, order matching and tracking"></Listitems>
    <Listitems listitemsText="E-contracting among end-user, manufacturer, and financier"></Listitems>
    <Listitems listitemsText="Featured logistics players with integrated APIs"></Listitems>
    <Listitems listitemsText="Installation support and warranties"></Listitems>
    <Listitems listitemsText="Insurance support"></Listitems>
    </div>

    <div className="col-md-5">
    <img src="/image/Ordering-Fulfilment.jpg"></img>
    </div>
    <div className="col-md-1"></div>
</div>
<div className="row pt-5 pb-4">
<div className="col-md-1"></div>
    <div className="col-md-5">
    <img src="/image/After-Sales-Service.jpg"></img>
    </div>
    <div className="col-md-5">
    <Subhaeding subtitleText="After Sales Service"></Subhaeding> 
    {/* <List></List> */}
    <Listitems listitemsText="E-contract based after sales support tracked by the platform and tags on each SKU"></Listitems>
    <Listitems listitemsText="Periodical service logs and asset health reports on the platform for all stakeholders"></Listitems>
    <Listitems listitemsText="Asset transfer/disposal after contract period to new end-users on the platform"></Listitems>
    </div>
    <div className="col-md-1"></div>
</div>
</div>
</div>
        
)
    };
    export default Services