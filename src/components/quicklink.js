import React from "react"

import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Static/Style.css";

const navbar_item=
  [
    {
      path:"#Home",
      name:"Home"
    },
    {
      path:"#services",
      name:"Services"
    },
    {
      path:"#aboutus",
      name:"About Us"
    },
    {
      path:"#contactus",
      name:"Contact Us"
    }
  ]
const Quicklink=() =>
{
return(
<div>
    {
 navbar_item.map((item,index)=>(

<li className="nav-item">
    <a className="nav-link list-inline-item" href={item.path}> <span>{item.name}</span></a>
  </li>

)




)
    }
</div>

)

}
export default Quicklink