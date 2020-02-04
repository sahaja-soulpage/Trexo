import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import "../Static/Style.css";

const Listitems = (props) => {
    return(
  <ul className="for-listitems">
      <li>{props.listitemsText}</li>
  </ul>
      
  
  )
    };
    export default Listitems