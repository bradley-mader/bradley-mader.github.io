import React, { Component } from 'react';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container } from 'reactstrap';

import styled from 'styled-components';

import "./Resume.css";

const ResumeContainer = styled.div`
      position: relative;
      border: solid 2px #bbbbbb;
      background-color: #eeeeee;
      margin: 1em;
      padding: 1em;
      border-radius: 5px;
    `;

const PrintHeader = styled.div`
      height:2.5em;
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

  print(){     
    var newWin = window.open('', '_blank', 'toolbar=0,location=0,menubar=0');
    newWin.document.head.innerHTML = window.document.head.innerHTML;
    newWin.document.head.innerHTML += '<title>Bradley Mader - Software Engineer</title>';
    newWin.document.body.innerHTML = document.getElementById('print_container').innerHTML;
    newWin.print();
    newWin.close();
  }

  render() {
    return (
        <div>
            <h1>
                Resume
            </h1>
            <ResumeContainer>
                <PrintHeader>
                  <PrintIcon src="print.png" onClick={this.print}/>
                </PrintHeader>
                <div id="print_container">
                  <div id='Resume_Body'>
                    <div id='Resume_Banner'>
                      <div id='Resume_TitleContainer'>
                        <p id="Resume_Name" className='full_break'>Bradley Mader</p>
                        <p id="Resume_ProfileStatement">
                          Experienced Backend Engineer with demonstrated expertise building backend web services and REST APIs, 
                          constructing and maintaining CI/CD pipelines, working with cloud technologies including Azure, Docker, 
                          Kubernetes and more in the FinTech and Gaming Industries.
                        </p>
                      </div>
                      <div id="Resume_ContactInfo">
                        <p><label className='Resume_ContactLabel'>Website:</label> bradley-mader.github.io</p>
                        <p><label className='Resume_ContactLabel'>LinkedIn:</label> linkedin.com/in/bradley-mader</p>
                        <p><label className='Resume_ContactLabel'>Itch Page:</label> bmader23.itch.io</p>
                        <p><label className='Resume_ContactLabel'>Email:</label> mader.bradley@gmail.com</p>
                        <p><label className='Resume_ContactLabel'>Twitter:</label> @BMMader</p>
                      </div>
                    </div>
                    <h4 className='full_break'>Work Experience</h4>
                    <div className='section_content'>
                      <div className="work_title_bar">
                        <div className='work_title'>Electronic Arts - Software Engineer</div>
                        <div className='work_daterange'>July 2022 - Present</div>
                      </div>
                      <ul>
                        <li>Worked with internal game teams to integrate new Frostbite Engine releases during ongoing game development.</li>
                        <li>Engineered solutions to UX issues in the Frostbite Engine WPF Editor.</li>
                        <li>Assisted game teams in implementing CI/CD pipelines to allow early detection of breaking changes in engine code.</li>
                        <li>Collaborated with domain engineers to broaden interfaces and reduce need for artisonal solutions to overlapping problems between client teams.</li>
                      </ul>
                      <div className="work_title_bar">
                        <div className='work_title'>Boeing Employees' Credit Union - Software Developer</div>
                        <div className='work_daterange'>October 2018 - July 2022</div>
                      </div>
                      <ul>
                        <li>Developed Customer Relationship Management application used by all customer facing employees of the 
                        third largest Credit Union in the United States.</li>
                        <li>Implemented Backend .NET Core Microservices with an n-tier architecture.</li>
                        <li>Prototyped and implemented Azure Patterns which were later adopted across the organization including API 
                          Manager, Functions and Container Instances hosting Docker images.</li>
                        <li>Extracted data from SQL databases across multiple domains.</li>
                        <li>Collaborated with internal and external engineers to determine architecture and implement connections to 
                          a diverse array of web services including REST and SOAP APIs.</li>
                      </ul>
                      <div className="work_title_bar">
                        <div className='work_title'>Boeing Employees' Credit Union - Performance Analyst</div>
                        <div className='work_daterange'>October 2018 - July 2022</div>
                      </div>
                      <ul>
                        <li>
                          Generated staff and customer volume forecasting models which drove actual headcount within 1% of budget across 
                          5 geographic regions.
                        </li><li> 
                        Engineered pilot scheduling platform to feed information from forecasting models back to 
                        individual managers. 
                        </li><li>
                        Created Quality Assurance platform which drove the first decentralized quality initiative.
                        </li>
                      </ul>
                    </div>
                    <h4 className='full_break'>Education</h4>
                    <div className='section_content'>
                      <div className="work_title_bar">
                        <div className='work_title'>B.S. in Computer Science - Oregon State University</div>
                        <div className='work_daterange'>June 2015</div>
                      </div>
                      <div className="work_title_bar">
                        <div className='work_title'>B.S. in Biology - Washington State University</div>
                        <div className='work_daterange'>June 2012</div>
                      </div>
                    </div>
                    <h4 className='full_break'>Skills</h4>
                    <div className='section_content'>
                      <div className='Resume_SkillCategory'>
                        <p className='Resume_SkillCategoryTitle'></p>
                        <div className='Resume_Skill Resume_PrimarySkill'>C#</div>
                          <div className='Resume_Skill Resume_SecondarySkill Resume_LastSkillInSet'>WebApi2</div>
                        <div className='Resume_Skill Resume_PrimarySkill'>Go</div>
                          <div className='Resume_Skill Resume_SecondarySkill'>Gin</div>
                          <div className='Resume_Skill Resume_SecondarySkill'>Gorilla Websockets</div>
                          <div className='Resume_Skill Resume_SecondarySkill'>Google OAuth2</div>
                          <div className='Resume_Skill Resume_SecondarySkill'>Golang JWT</div>
                          <div className='Resume_Skill Resume_SecondarySkill'>Gin</div>
                          <div className='Resume_Skill Resume_SecondarySkill Resume_LastSkillInSet'>Validator</div>
                        <div className='Resume_Skill Resume_PrimarySkill'>C++</div>
                          <div className='Resume_Skill Resume_SecondarySkill Resume_LastSkillInSet'>SDL2</div>
                        <div className='Resume_Skill Resume_PrimarySkill Resume_LastSkillInSet'>t-SQL</div>
                        <div className='Resume_Skill Resume_PrimarySkill'>Javascript</div>
                          <div className='Resume_Skill Resume_SecondarySkill Resume_LastSkillInSet'>React</div>
                        <div className='Resume_Skill Resume_PrimarySkill Resume_LastSkillInSet'>Azure</div>
                        <div className='Resume_Skill Resume_PrimarySkill Resume_LastSkillInSet'>Docker</div>
                        <div className='Resume_Skill Resume_PrimarySkill Resume_LastSkillInSet'>Kubernetes</div>
                      </div>
                      

                    </div>
                  </div>
                </div>
            </ResumeContainer>
        </div>
    );
  }
}
