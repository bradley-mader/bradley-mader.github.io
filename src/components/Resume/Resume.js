import React, { Component } from 'react';

import styled from 'styled-components';

import "./Resume.css";

const ResumeContainer = styled.div`
      position: relative;
      border: solid 2px #bbbbbb;
      background-color: #eeeeee;
      margin: 0% 0% 0% 50%;
      border-radius: 5px 5px 0px 0px;
      width:8.5in;
      transform:translate(-50%, 0%);

      @media (max-width: 900px){
        width: 6.375in;
      }

      @media (max-width: 660px){
        width: 4.25in;
      }

      @media print{
        position:absolute;
        display:block;
        width:100%;
        margin: 0;
        padding: 0;
        left:0;
        top:0;
        border:none;
        background-color:#FFF
        border-radius:none;
        transform: none;
      }
    `;

const PrintHeader = styled.div`
      height:2.5em;
      @media print{
        display:none;
      }
    `;
const PrintIcon = styled.img`
        float:right;
        width:25px;
        margin:.5em;
        cursor:pointer;
    `;

export class Resume extends Component {
  static displayName = Resume.name;

  constructor(props) {
    super(props);
    
  }

  print(){     
    window.print();
  }

  render() {
    return (
        <div>
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
                          Experienced Backend Engineer with expertise building backend web services and REST APIs, 
                          constructing and maintaining CI/CD pipelines, working with cloud technologies including Azure, Docker, 
                          Kubernetes and more in the FinTech and Gaming Industries.
                        </p>
                      </div>
                      <div id="Resume_ContactInfo">
                        <div id="Resume_ContactLabelBackdrop">
                          <img src="web_logo.png" alt="W" className='Resume_ContactLabel'/>
                          <img src="linkedin.png" alt="L" className='Resume_ContactLabel'/>
                          <img src="itchio.svg" alt="I" width="26px" height="26px" className='Resume_ContactLabel'/>
                          <img src="email_logo.png" alt="E" width="26px" height="26px" className='Resume_ContactLabel'/>
                          <img src="twitter.svg" alt="T" width="26px" height="26px" className='Resume_ContactLabel'/>
                        </div>
                        <div id="Resume_ContactBackdrop">
                          <p className='Resume_ContactPoint'>bradley-mader.github.io</p>
                          <p className='Resume_ContactPoint'>linkedin.com/in/bradley-mader</p>
                          <p className='Resume_ContactPoint'>bmader23.itch.io</p>
                          <p className='Resume_ContactPoint'>mader.bradley@gmail.com</p>
                          <p className='Resume_ContactPoint'>@BMMader</p>
                        </div>
                      </div>
                    </div>
                    <h4 className='Resume_SectionTitle full_break'>Work Experience</h4>
                    <div className='section_content'>
                      <div className="work_title_bar">
                        <div className='work_title'>Software Engineer - Electronic Arts</div>
                        <div className='work_daterange'>July 2022 - Present</div>
                      </div>
                      <ul>
                        <li>Worked with internal game teams to integrate new Frostbite Engine releases during ongoing game development.</li>
                        <li>Engineered solutions to UX issues in the Frostbite Engine WPF Editor.</li>
                        <li>Assisted game teams in implementing CI/CD pipelines to allow early detection of breaking changes in engine code.</li>
                        <li>Collaborated with domain engineers to broaden interfaces and reduce need for artisonal solutions to overlapping problems between client teams.</li>
                      </ul>
                      <div className="work_title_bar">
                        <div className='work_title'>Software Developer - BECU</div>
                        <div className='work_daterange'>October 2018 - July 2022</div>
                      </div>
                      <ul>
                        <li>Developed Customer Relationship Management application used by over 2,000 employees.</li>
                        <li>Implemented Backend .NET Core Microservices with an n-tier architecture.</li>
                        <li>Prototyped and implemented Azure Patterns which were later adopted across the organization including API 
                          Manager, Functions and Container Instances hosting Docker images.</li>
                        <li>Collaborated with internal and external engineers to determine architecture and implement connections to 
                          a diverse array of web services including REST and SOAP APIs.</li>
                      </ul>
                      <div className="work_title_bar">
                        <div className='work_title'>Performance Analyst - BECU</div>
                        <div className='work_daterange'>October 2018 - July 2022</div>
                      </div>
                      <ul>
                        <li>
                          Generated staff and customer volume forecasting models which drove actual headcount within 1% of budget across 
                          5 geographic regions.
                        </li><li> 
                          Engineered pilot scheduling platform to feed information from forecasting models back to 
                          individual managers. 
                        </li>
                        <li> 
                          Developed Quality Assurance program enabling centralization of QA processes
                        </li>
                      </ul>
                    </div>
                    <h4 className='Resume_SectionTitle full_break'>Education</h4>
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
                    <h4 className='Resume_SectionTitle full_break'>Skills</h4>
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
