import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";
import "../Static/Style.css";
const Buttonstyles = styled.button`
color: #f3723a;
background-color: rgba(25, 33, 38, 0);
font-size: 20px;
font-weight: 500;
border: 1px solid #f3723a;
border-radius: 5px 5px 5px 5px;
padding: 10px 30px 10px 30px;
outline: none !important;
margin-bottom: 10%;
 `
const Button = (props) => {
    return(


<Buttonstyles type="button" className="for-button">{props.buttonText} </Buttonstyles>
)
    };
    export default Button