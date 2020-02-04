import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Subhaeding from "../components/subhaeding"
import Listitems from "../components/listitems"
import "../Static/Style.css";
// const list_items = [
//     {
      
//       listtext: "Request a Free Quote"
      
//     },
//     {
//         listtext: "Request a Free Quote"
//     },
//     {
//         listtext: "Request a Free Quote"
//     }
//   ];
  const List = () => (
    <div>
        {/* <Subhaeding headerText="How it Works"></Subhaeding> */}
      
         {/* <div className="row"> */}
            
       {/* {
list_items.map((item, index) => (
   
      <ul className="for-listitems">
<li>{item.listtext}</li>
              </ul>          


 
)
)
} */}
{/* </div> */}
<Listitems listitemsText="Featured suppliers with their profile and capabilities"></Listitems>
<Listitems listitemsText="Featured end-users with customisable order requirements"></Listitems>
<Listitems listitemsText="Featured FIs/lenders with simple credit framework for end-users and suppliers"></Listitems>
</div>
)
    export default List