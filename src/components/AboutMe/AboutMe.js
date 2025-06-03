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
                        <div className='fb-image inline-block full-width large-margin-top text-left-justified'>
                            <img src='Professional_History.jpg' alt="" onLoadStart={this.incrementUnloadedImgs.bind(this)} onLoad={this.decrementUnloadedImgs.bind(this)}/>     
                        </div>
                        <div className='fb-content white-background'>
                            <div className="full-width text-centered">
                                <img src='https://bradley-mader.github.io/EA_logo_black.png' alt='EA Logo' style={{width:'25%', padding: '10px'}}/>
                                <img src='https://bradley-mader.github.io/fb_logo.png' alt='Frostbite Logo' style={{width:'25%', padding: '10px'}}/>
                            </div>
                            <div style={{padding:'1em 0em 0em 0em', width: '100%', display: 'inline-block'}}>
                                Software Engineer for Electronic Arts working on Frostbite Engine Integrations for the Dice studio since Summer 2022.
                                <ul className='fb-text-small'>
                                    <li>Maintain and troubleshoot CI pipelines reducing the iteration time between mainline engine features and game development lines.</li>
                                    <li>Work with management to improve processes surrounding integration of new releases and remove obstacles to implementation and development of new features.</li>
                                </ul>
                            </div>
                            <div className="full-width text-centered">
                                <img src='becu_logo.png' alt='BECU Logo' style={{width:'40%', padding: '10px'}}/>
                            </div>
                            <div style={{padding:'1em 0em 0em 0em', width: '100%', display: 'inline-block'}}>
                                Software Developer building Full Stack applications with a focus on security and reliability. Led formation of team to implement Customer Relationship Management platform, adoption of cloud
                                native technologies including prototyping new design patterns and creating Azure prototypes for Azure Functions, Azure Kubernetes Service and Docker hosted REST Services.
                                <ul className='fb-text-small'>
                                    
                                </ul>
                            </div>
                        </div>
                    </FamilyBanner>
                    <FamilyBanner className='smooth_corners no-overflow white-background' style={{marginTop:"2em"}}>
                        <div className='fb-image side-to-stackable'>
                            <img src='Education.jpg' alt="" onLoadStart={this.incrementUnloadedImgs.bind(this)} onLoad={this.decrementUnloadedImgs.bind(this)}/>     
                        </div>
                        <div className='fb-content white-background side-to-stackable'>
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