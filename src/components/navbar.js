import React from 'react';
import { Link } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Static/Style.css";
import { Button,Nav,Navbar,NavDropdown} from 'react-bootstrap';

  const navbar_item=
  [
    {
      path:"/#Home",
      name:"Home"
    },
    {
      path:"/#services",
      name:"Services"
    },
    {
      path:"/#aboutus",
      name:"About Us"
    },
    {
      path:"/#contactus",
      name:"Contact Us"
    }
  ]

const NavBar = (props) => {
    return(
 <div>
 {/* <nav className="navbar navbar-expand-md  navbar-dark navbar-fixed-top">
<a href="#"><img src="/image/trexo-logo-web-1.png"></img></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">

    <ul className="navbar-nav nav-link">
{
  navbar_item.map((item,index) =>(
    <li className="nav-item">
    <Link to={item.path} className="nav-link">{item.name}</Link>
    <Link to="/#services" className="footer-link pb-3">Services</Link>
  </li>
  )

  )
}

      <li className="nav-item">
        <a className="nav-link" href="#Home"><span>Home</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#services"> <span>Services</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#aboutus"> <span>About Us</span></a>
      </li> 
      <li className="nav-item">
        <a className="nav-link" href="#contactus"><span> Contact Us</span></a>
      </li>   
    </ul>
  </div>  
</nav>  */}
<Navbar collapseOnSelect expand="lg"  variant="dark" fixed="top">
  <Navbar.Brand href="#home"><a href="#"><img src="/image/trexo-logo-web-1.png"></img></a></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  
    <Nav className="ml-auto">
    {
  navbar_item.map((item,index) =>(
    <Nav.Link  className="nav-item">
    <Link to={item.path} className="nav-link">{item.name}</Link>
    
    </Nav.Link>
  )

  )
}
      {/* <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
)
}
export default NavBar;