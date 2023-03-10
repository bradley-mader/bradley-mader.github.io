import React, { Component } from 'react';
import styled from 'styled-components';

const Banner = styled.div`
    position: relative;
    padding: 0em;
`;

const ProfileContainer = styled.div`
position:relative;
    left: 35%;
    width:30%;
    @media (max-width: 1400px){
        left: 25%;
        width: 50%;
    }
    @media (max-width: 992px){
        left:15%;
        width: 70%;
    }
    @media (max-width: 600px){
        left:10%;
        width: 80%;
    }
`

const HiText = styled.div`
    display:inline-block;
`
const InterludeText = styled.span`
    display:inline-block;
    vertical-align: bottom;
    margin-left: 7%;
`
const FirstNameText = styled.h1`
    text-align: center;
`
const LastNameText = styled.h1`
    text-align: right;
`
const DescriptionText = styled.div`
    font-size:20pt;
    @media (max-width 992px){
        font-size:16pt;
    }
`
export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);

        this.state = {
            priorScrollTop: null,
            initializedContent: <div/>
        }
    }


    render() {
        return (
            <Banner>
                <ProfileContainer> 
                    <HiText className='text-primary left-justified xxl-font'>Hi<span className='text-bright'>!</span></HiText>
                    <InterludeText className='text-light left-justified m-font'>My name is</InterludeText>
                    <FirstNameText className='text-bright xxl-font left-justified script-font'>Bradley</FirstNameText>
                    <LastNameText className='text-bright xxl-font left-justified script-font'>Mader<span className='text-primary left-justified sans-serif-font xxl-font'>.</span></LastNameText>
                    <DescriptionText className='text-light m-font left-justified'>I am a Software Engineer that focuses primarily on web technologies - Specifically 
                    those related to interconnected real-time experiences.</DescriptionText>
                </ProfileContainer>
            </Banner>
        );
    }
}
