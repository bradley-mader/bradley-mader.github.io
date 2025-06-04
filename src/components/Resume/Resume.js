import React, { Component } from 'react';

import styled from 'styled-components';

import "./Resume.css";

const PrintContainer = styled.iframe`
  position:relative;
  left:50%;
  width:8.5in;
  height:23in;
  backdround:transparent;
  transform:translate(-50%, 0%);
  border-radius: 1em;
  overflow: scroll;
  @media (max-width: 8.5in){
      width:100%;
      height: 90vh;
      padding:1vh;
  }
  @media print{
    display: block;
    position:fixed;
    width:100%;
    margin:none;
    border-radius:none;
  }
`

export class Resume extends Component {
  static displayName = Resume.name;

  render() {
    return (
        <div>
          <PrintContainer src='./Resume.pdf/default/connect.pdf'/>
        </div>
    );
  }
}
