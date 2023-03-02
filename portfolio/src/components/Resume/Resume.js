import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container } from 'reactstrap';

import styled from 'styled-components';

const ResumeContainer = styled.div`
        border: solid 2px #bbbbbb;
        background-color: #eeeeee;
        margin: 1em;
        padding: 1em;
        border-radius: 5px;
    `;

const PrintIcon = styled.img`
        float:right;
        width:25px;
        cursor:pointer;
    `;

export class Resume extends Component {
  static displayName = Resume.name;

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
        <div>
            <h1>
                Resume
            </h1>
            <ResumeContainer>
                <PrintIcon className="not_printable" src="print.png"/>
                <h1>Bradley Mader</h1>
                <h5>Software Engineer</h5>
                Experienced Full-Stack and Tools engineer with demonstrated expertise building backend web services and APIs, constructing and maintaining CI/CD pipelines, working with cloud technologies including Azure, Docker, Kubernetes and more in the FinTech and Gaming Industries.
                <h2>Work Experience</h2>
                <h3>Software Engineer</h3>
                <h5>Electronic Arts</h5>
                <h3>Software Developer</h3>
                <h5>Boeing Employees' Credit Union</h5>
                <h3>Performance Analyst</h3>
                <h5>Boeing Employees' Credit Union</h5>
            </ResumeContainer>
        </div>
    );
  }
}
