import React, { Component } from 'react';
import styled from 'styled-components';
import HashLoader from 'react-spinners/HashLoader';

const FamilyContainer = styled.div`
    border-radius: 4px;
    margin: 1vw;
    overflow: hidden;
`

const FamilyBanner = styled.div`
    font-family: Georgia, garamond;
    font-size: 22pt;
    @media (max-width: 1300px){
        font-size: 22pt;
    }
    @media (max-width: 1100px){
        font-size: 18pt;
    }
    @media (max-width: 900px){
        font-size: 14pt;
    }
    @media (max-width: 700px){
        font-size: 12pt;
    }
    & .fb-content{
        display: inline-block;
        vertical-align:middle;
        padding: 2em 2em 2em 2em;
        @media (max-width: 1300px){
            margin-left:0;
        }
    }
    & .fb-image{
    
    }
    
    & * img{
        width:100%;
    }
`

const FamilyBannerPhoto = styled.div`
    padding: 0vw 0vw 2vw 0vw;
    & img{
        width:100%;
    }
`

export class AboutMe extends Component {
    static displayName = AboutMe.name;

    constructor(props) {
        super(props);
        this.state = {
            unloaded: 3,
        }
    }

    incrementUnloadedImgs(){
        this.setState({unloaded: this.state.unloaded+1});
    }
    decrementUnloadedImgs(){
        this.setState({unloaded: this.state.unloaded-1});
    }

    render(){
        return (
            <div>
                {
                    this.state.unloaded > 0 &&
                    <div className="loading_symbol" style={{ width: '100px', margin: 'auto' }}>
                        <HashLoader color="#52bfd9" size={50}/>
                    </div>
                }
                <FamilyContainer className='dark-text' style={{display: this.state.unloaded <= 0 ? 'block' : 'none'}}>
                    <FamilyBannerPhoto>
                        <img className='fb-image' src='fam_foto.jpeg' onLoadStart={this.incrementUnloadedImgs.bind(this)} onLoad={this.decrementUnloadedImgs.bind(this)} alt=""/>
                    </FamilyBannerPhoto>
                    <FamilyBanner>
                        <div className='fb-image half-width small-pad' style={{position:"relative", left:"25%"}}>
                            <img src='Washington.jpg' className='smooth_corners' onLoadStart={this.incrementUnloadedImgs.bind(this)} onLoad={this.decrementUnloadedImgs.bind(this)} alt=""/>
                        </div>
                        <div className='fb-content white-background'>
                            <p>I live in Snohomish, WA with my wife, three children, dog, and cat where I spend the vast majority of my time 
                            chasing the little animals around. I am a huge runner, gamer and cook.</p>
                        </div>
                    </FamilyBanner>
                    <FamilyBanner>
                        <div className='fb-content white-background xlarge-margin-top'>
                            <div className='fb-image inline-block large-shift-up half-width text-centered full-width half-x-padding'>
                                <img src='Professional_Synopsis.png' className="large-shift-up" alt="" onLoadStart={this.incrementUnloadedImgs.bind(this)} onLoad={this.decrementUnloadedImgs.bind(this)}/>     
                            </div>
                            <div>
                                I have spent the past 6 years developing applications both web based and native. In that time, I have advanced initiatives to 
                                move to cloud native architectures, automated testing, decommissioned legacy software systems, and improved UX of applications and 
                                workflows. Before that I spent 3 years working in data analytics including development of ETL pipelines, governing code quality and 
                                forecasting based on historical data.
                                <br/><br/>
                                I am most passionate about working on projects that allow for collaborative real-time experiences. My favorite backend programming 
                                language is Go due to the simple and intuitive syntax, features specifically designed to support multithreading, ongoing reliable 
                                maintenance and updates to the language, and relatively high performance benchmarks, but I have also extensively used C# and C++ in 
                                the backend.
                            </div>
                        </div>
                    </FamilyBanner>
                    <FamilyBanner>
                        <div className='fb-content white-background xlarge-margin-top'>
                            <div className='fb-image inline-block large-shift-up half-width text-centered full-width half-x-padding'>
                                <img src='Professional_History.png'  className="large-shift-up" alt="" onLoadStart={this.incrementUnloadedImgs.bind(this)} onLoad={this.decrementUnloadedImgs.bind(this)}/>     
                            </div>
                            <div className="full-width text-centered white-background">
                                <img src='EA_logo_black.png' alt='EA Logo' style={{width:'30%', padding: '10px'}}/>
                            </div>
                            <div className="white-background" style={{padding:'1em 0em 0em 0em', width: '100%', display: 'inline-block'}}>
                                <b>Software Engineer</b> for <b>Electronic Arts</b> working on Frostbite Engine Integrations and <b>Large Scale Distributed Systems</b>.
                                <ul className='fb-text-small'>
                                    <li>Drove key decisions for massive distributed cloud event streaming service intended for millions of users with minimal latency.</li>
                                    <li>Led load testing and optimized distributed Go application hosted on AWS from inception (maximum capacity of approximately 100k users) through 2.6M users.</li>
                                    <li>Increased memory performance of custom load testing image from max of 2k users per 6GiB replica to 15k users per 4GiB replica resulting in 10x drop in cluster resources.</li>
                                    <li>Analyzed and compared distributed database options between AWS Aurora and Yugabyte solutions with performance comparisons. Developed indexes and worked on data sharding optimizations specific to both platforms.</li>
                                    <li>Enhanced and analyzed metrics and logging for large-scale distributed applications. Built additional Grafana visualizations to assist with future diagnostics.</li>
                                    <li>Informed key performance decisions related to asynchronous behaviors, database architecture and scale, kubernetes configurations and scale, and optimization of grpc calls and Golang contexts.</li>
                                    <li>Built out tooling within CLI to easily test and log performance and execute common functionalities within distributed applications.</li>
                                    <li>Proposed, designed and provided tooling solutions in C ++ and C# WPF for design and engineering workflows to improve partner team satisfaction.</li>
                                    <li>Maintained Jenkins code and data pipelines to provide status of builds and perform automatic code migrations between development lines.</li>
                                    <li>Work with management to improve processes surrounding integration of new releases and remove obstacles to implementation and development of new features.</li>
                                    <li>Mentored new and existing employees by educating on how to contribute to game team projects, navigate complex development line configurations in Perforce.</li>
                                </ul>
                            </div>
                            <div className="full-width text-centered white-background">
                                <img src='becu_logo.png' alt='BECU Logo' style={{width:'40%', padding: '10px'}}/>
                            </div>
                            <div className="white-background" style={{padding:'1em 0em 0em 0em', width: '100%', display: 'inline-block'}}>
                                <b>Software Developer</b> building <b>full-stack</b> applications with a focus on security and reliability.
                                <ul>
                                    <li>Retired existing legacy CRM application with successful replacement or enhancement of user workflows
                                    and legacy backend services.</li>
                                    <li>Onboarded PEGA to BECU and worked with a small cross-discipline team to conceptualize the
                                    application MVP , propose and defend architectural patterns for secure data access from external
                                    applications, and implement necessary front and backend systems to prove viability.</li>
                                    <li>Engineered scalable and high volume C# .NET REST APIs sourcing data from multiple backend systems
                                    in a high security environment.</li>
                                    <li>Worked to rigorously define best practices with regard to development processes and work onboarding.</li>
                                    <li>Developed and automated UI testing suite for Pega platform application.</li>
                                    <li>Proposed and prototyped Azure cloud native solutions for API Proxies, Docker container deployments,
                                    and API Stubs for larger adoption by the organization.</li>
                                    <li>Drove quality and security through application of robust Code Review process for Pega, Backend C#
                                    .Net APIs, and SQL Packages.</li>
                                    <li>Diagnosed and triaged production issues using Azure analytics and alerts, Splunk logs and Pega
                                    platform logging and diagnostics.</li>
                                </ul>
                                <ul className='fb-text-small'>
                                    
                                </ul>
                            </div>
                        </div>
                    </FamilyBanner>
                    <FamilyBanner className='smooth_corners no-overflow white-background side-to-stackable' style={{marginTop:"2em"}}>
                        <div className='fb-image'>
                            <img src='Education.jpg' alt="" onLoadStart={this.incrementUnloadedImgs.bind(this)} onLoad={this.decrementUnloadedImgs.bind(this)}/>     
                        </div>
                        <div className='fb-content white-background'>
                            <div className='fb-content-small'>
                                I attended college at Washington State University to earn my Bachelors of Science in Biology. After several years in the workforce, I fell 
                                in love with Software Engineering which led me to return to school at Oregon State University where I attained a second Bachelors of Science in 
                                Computer Science in 2016.
                            </div>
                        </div>
                    </FamilyBanner>
                </FamilyContainer>
            </div>
        );
    }
}