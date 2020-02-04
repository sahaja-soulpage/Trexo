import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import Input from "../components/input"
import Heading from "../components/heading"
import Button from "../components/button"
const Getintouch =() => {
    return(
        <div className="container-fluid">
            <Heading headerText="Get In Touch" id="contactus"></Heading>
            <p className="text-center">Fill the form below and we will get in touch with you</p>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-3"> 
                <Input className="form-control" placeholderText="Name*"></Input>
            </div>
            <div className="col-md-3"> 
            <Input className="form-control" placeholderText="Email Id*"></Input>
            </div>
            <div className="col-md-2"> 
            <Button  buttonText="Submit"></Button>
            </div>
            <div className="col-md-2"></div>
            </div>

{/* <div className="row">
              <div className="form-inline">
                <div className="form-group"> 
                <Input className="form-control" placeholderText="Name*"></Input>
            </div>
            <div className="form-group">
            <Input className="form-control" placeholderText="Email Id*"></Input>
            </div>
            <div className="form-group">
            <Button buttonText="Submit"></Button>
            </div>
           </div> 
                      
        </div> */}
        </div>
    )
}
export default Getintouch