import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
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
    path: "/image/end-user-image.jpg",
    name: ["Flexible financial & ownership schemes","Single window for ordering, delivery & servicing","Regular repairs, maintenance & asset health reporting"]
  },
  {
    path: "/image/Supplier_image.jpg",
    name: ["Enhancement in business scale (New buyers)." ,"Assistance in working capital & raw material procurement","Tech enabled efficient order processing and fulfillment"]
  },
  {
    path: "/image/Financier-image.jpg",
    name:[ "Quick credit check, sanction and disbursal" ,"Regular asset quality & health monitoring with assured IRR","Ability to liquidate loan portfolio to other lenders/FIs"]
  }
];

const Card = (props) => {
    return(
      <div className="col-md-12">
<div className="row">
{
card_items.map((item, index) => (
  
                <div className="col-md-4">
<div className="card for-cards">
  <img src={item.path}/>
  <div className="card-body">
    {/* <h5 class="card-title">Card title</h5> */}
    {
    item.name.map((option,index)=>
    {
      return (
        <ul className="for-listitems">
      <li className="card-text" key={index}>{option}</li>
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      </ul>
      )
    })}
    {/* <p class="card-text">{item.name}</p> */}
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  </div>
 </div>
</div>
  
)
)}
       
    </div>        
    </div>
)
    }
    export default Card

    