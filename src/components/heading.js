import React from 'react';
import styled from "styled-components"
import 'bootstrap/dist/css/bootstrap.min.css';
const Headings = styled.h2`
margin: 2% 0 2% 0;
color: #1b2921;
font-weight: 700;
letter-spacing: 1px;
 
`
const Heading = (props) => {
    return(


        <Headings className="text-center">{props.headerText}</Headings>
)
    };
    export default Heading