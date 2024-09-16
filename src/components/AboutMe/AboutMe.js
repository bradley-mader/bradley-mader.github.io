import React, { Component } from 'react';
import styled from 'styled-components';
import HashLoader from 'react-spinners/HashLoader';

const FamilyContainer = styled.div`
    background-color: white;
    border-radius: 4px;
    margin: 1vw;
    overflow: hidden;
`

const FamilyBanner = styled.div`
    font-size: 22pt;
    @media (max-width: 1300px){
        font-size: 22pt;
        text-align: center;
    }
    @media (max-width: 1100px){
        font-size: 18pt;
    }
    @media (max-width: 900px){
        font-size: 14pt;
    }
    @media (max-width: 700px){
        font-size: 16pt;
    }
    padding: 8vw 10vw;
    & .fb-content{
        display: inline-block;
        width:40vw;
        vertical-align:middle;
        @media (max-width: 1300px){
            margin-left:0;
            width:80%;
            padding-left: 0 !important;
        }
    }
    & .fb-content-small{
        display: inline-block;
        font-size: 16pt;
        width:30vw;
        vertical-align:middle;
        @media (max-width: 1300px){
            width:60vw;
        }
    }
    & .fb-text-small{
        margin-top: 10pt;
        font-size: 20pt;
        padding: 0em 5% 0em 5%;
    }
    & .fb-content-middle{
        width:100%;
        padding: 0vw 16vw;
        text-align: center;
    }
    & .fb-image{
        display:inline-block;
        width:32vw;
        border-radius: 4px;
        padding-bottom: 4vw;
        @media (max-width: 700px){
            display:block;
            margin-left:30%;
            width: 40%;
        }
    }
    & .fb-image-small{
        display:inline-block;
        width:20vw;
        border-radius: 4px;
        @media (max-width: 1300px){
            display:block;
            margin-left:30%;
            width:40%;
            padding: 4vw;
        }
    }
    & > :nth-child(n+2){
        padding-left: 5vw;
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
            unloaded: 4,
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
                        <div className='fb-image'>
                            <img src='Washington.png' onLoadStart={this.incrementUnloadedImgs.bind(this)} onLoad={this.decrementUnloadedImgs.bind(this)} alt=""/>
                        </div>
                        <div className='fb-content'>
                            I live in Snohomish, WA with my wife, three children, dog, and cat where I spend the vast majority of my time 
                            chasing the little animals around. I am a huge runner, gamer and cook.
                        </div>
                    </FamilyBanner>
                    <FamilyBanner className='light-background'>
                        <div className='fb-content-middle'>
                            I have spent the nearly 6 years developing applications both web based and native. In that time, I have advanced initiatives to 
                            move to cloud native architectures, automated testing, decommissioned legacy software systems, and improved UX of applications and 
                            workflows. Before that I spent 3 years working in data analytics including development of ETL pipelines, governing code quality and 
                            forecasting based on historical data.
                        </div>
                    </FamilyBanner>
                    <FamilyBanner>
                        
                        <div style={{width: '100%', display: 'inline-block'}}>
                            <img src='ea_logo_black.png' alt='EA Logo' style={{marginLeft: '25%', width:'25%', padding: '10px'}}/>
                            <img src='fb_logo.png' alt='Frostbite Logo' style={{width:'25%', padding: '10px'}}/>
                        </div>
                        <div style={{padding:'1em 0em 0em 10%', width: '100%', display: 'inline-block'}}>
                            Software Engineer for Electronic Arts working on Frostbite Engine Integrations for the Dice studio since Summer 2022.
                            <ul className='fb-text-small'>
                                <li>Maintain and troubleshoot CI pipelines reducing the iteration time between mainline engine features and game development lines.</li>
                                <li>Work with management to improve processes surrounding integration of new releases and remove obstacles to implementation and development of new features.</li>
                            </ul>
                        </div>
                        <div style={{width: '100%', display: 'inline-block'}}>
                            <img src='becu_logo.png' alt='BECU Logo' style={{marginLeft: '30%', width:'40%', padding: '10px'}}/>
                        </div>
                        <div style={{padding:'1em 0em 0em 10%', width: '100%', display: 'inline-block'}}>
                            Software Developer building Full Stack applications with a focus on security and reliability. Led formation of team to implement Customer Relationship Management platform, adoption of cloud
                            native technologies including prototyping new design patterns and creating Azure prototypes for Azure Functions, Azure Kubernetes Service and Docker hosted REST Services.
                            <ul className='fb-text-small'>
                                
                            </ul>
                        </div>
                        <div style={{paddingTop:'1em'}}>
                            I am most passionate about working on projects that allow for collaborative real-time experiences. My favorite backend programming 
                            language is Go due to the simple syntax, features specifically designed to support multithreading and relatively high performance 
                            benchmarks, but I have also extensively used C# and C++ in the backend.
                        </div>
                    </FamilyBanner>
                    <FamilyBanner className='darkest-large-border-top'>
                        <div className='fb-image-small'>
                            <img src='WSU.png' alt="" onLoadStart={this.incrementUnloadedImgs.bind(this)} onLoad={this.decrementUnloadedImgs.bind(this)}/>
                        </div>
                        <div className='fb-content-small'>
                            I attended college at Washington State University to earn my Bacchelors of Science in Biology. After several years in the workforce, I fell 
                            in love with Software Engineering which led me to return to school at Oregon State University where I attained a second Bacchelors of Science in 
                            Computer Science in 2016.
                        </div>
                        <div className='fb-image-small'>
                            <img src='OSU.png' alt="" onLoadStart={this.incrementUnloadedImgs.bind(this)} onLoad={this.decrementUnloadedImgs.bind(this)}/>
                        </div>
                    </FamilyBanner>
                </FamilyContainer>
            </div>
        );
    }
}