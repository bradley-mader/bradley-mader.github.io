import React, { Component } from 'react';

import styled from 'styled-components';

import "./Resume.css";

const PrintContainer = styled.iframe`
  position:relative;
  left:50%;
  width:8.5in;
  height:25in;
  backdround:transparent;
  transform:translate(-50%, 0%);
  overflow:none;
  border-radius: 1em;
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
          <PrintContainer src='./Resume.pdf'/>
        </div>
    );
  }
}
