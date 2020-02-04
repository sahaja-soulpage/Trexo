import React from "react"
import { Link } from "gatsby"

import Home from "../pages/Home"
import Navbar from "../components/navbar"
import Layout from "../components/layout"
import KnowMore from "../components/knowmore"
import Services from "../components/services"
// import Button from "../components/button"
import { Button,Nav,NavDropdown,Tab,Tabs,Modal} from 'react-bootstrap';


const IndexPage = () => (
  <div>
  <Layout>
 {/* <Username>Hi this is Sahaja</Username> */}

    <Home>
      <KnowMore></KnowMore>
      <Services></Services>
     
    </Home>
    
  </Layout>
  
  </div>
)

export default IndexPage
