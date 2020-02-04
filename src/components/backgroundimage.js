import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components"
import Button from "../components/button"
const Bgimage = styled.div`
background:url('../image/Trexo-Banner.jpg')
`
const Bgtext = styled.p`
color: #404040;
    font-size: 40px;
    font-weight: 700;
    line-height: 1.5em;
    padding-top: 20%;
    padding-bottom: 30px;
    height: 100%;
    width: 100%;
        background-size: 100% 100%;
`
const Backgroundimage = () => {
    return(

<Bgimage className="container-fluid for-bgimage">
    <div className="col-lg-8 col-md-8 col-sm-8 col-8">
<Bgtext>An AI-Powered Marketplace for Movable Goods and Equipments</Bgtext>
<a href="#knowmore"><Button buttonText="Know More"></Button></a>
<i class="fab fa-500px"></i>
</div>
<div className="col-lg-4 col-md-4 col-sm-4 col-4"></div>
</Bgimage>

)
    };
    export default Backgroundimage 