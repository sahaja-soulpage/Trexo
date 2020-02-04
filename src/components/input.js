import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import "../Static/Style.css";

const Input =(props) => {
    return(
        <div>
         {/* <input type="text" placeholder={props.placeholderText} classN""ame="input-styles"></input> */}
         <input type="text" placeholder={props.placeholderText} className="input-styles"></input>
        </div>
    )
}
export default Input