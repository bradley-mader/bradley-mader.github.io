import React, { Component } from 'react';
import styled from 'styled-components';

const PrintContainer = styled.iframe`
  position:relative;
  left:50%;
  width:8.5in;
  height:11.3in;
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

export class CurriculumVitae extends Component {
    static displayName = CurriculumVitae.name;
  
    render(){
        return <div>
            <PrintContainer src='https://bradley-mader.github.io/CV.pdf'/>
        </div>
    }
}