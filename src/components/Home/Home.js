import React from 'react';
import styled from 'styled-components';
import BlogBanner from '../Blog/BlogBanner';
import { homeDescription } from '../../data/aboutMe';

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
    @media (max-width: 400px){
        left:15%;
        width: 70%;
    }
`

const HiText = styled.div`
    font-family: Georgia, Garamond;
    display:inline-block;
    @media (max-width: 550px){
        font-size: 55pt;
        line-height: 85pt;
    }
    @media (max-width: 400px){
        font-size: 50pt;
        line-height: 80pt;
    }
`
const InterludeText = styled.span`
    font-family: Georgia, Garamond;
    display:inline-block;
    vertical-align: bottom;
    margin-left: 7%;
    @media (max-width: 550px){
        font-size: 18pt;
    }
    @media (max-width: 400px){
        font-size: 16pt;
    }
`
const FirstNameText = styled.h1`
    text-align: center;
    @media (max-width: 550px){
        font-size: 55pt;
        line-height: 55pt;
        padding-top: 10pt;
    }
    @media (max-width: 400px){
        font-size: 50pt;
        line-height: 50pt;
    }
`
const LastNameText = styled.h1`
    text-align: right;
    @media (max-width: 550px){
        font-size: 55pt;
        line-height: 55pt;
    }
    @media (max-width: 400px){
        font-size: 50pt;
        line-height: 50pt;
    }
`
const DescriptionText = styled.div`
    font-family: Georgia, Garamond;
    font-size:20pt;
    @media (max-width: 550px){
        font-size: 18pt;
    }
    @media (max-width: 400px){
        font-size:16pt;
    }
`

const PsychSkillsImg = styled.div`
    @media (max-width: 700px){
        padding: 1em 0px 0px 0px;
    }
`

export const Home = () => (
  <Banner className='banner-top-offset'>
    <ProfileContainer>
      <HiText className='text-gradient-accent-to-bright left-justified xxl-font'>Hi!</HiText>
      <InterludeText className='text-gradient-light-to-bright left-justified m-font'>My name is</InterludeText>
      <FirstNameText className='text-gradient-accent-to-bright xxl-font left-justified script-font'>Bradley</FirstNameText>
      <LastNameText className='text-gradient-accent-to-bright xxl-font left-justified script-font'>Mader<span className='text-primary left-justified sans-serif-font xxl-font'>.</span></LastNameText>
      {homeDescription.map((paragraph, index) => (
        <DescriptionText key={index} className='text-gradient-light-to-bright m-font left-justified' style={{ paddingTop: index > 0 ? '1em' : '0' }}>{paragraph}</DescriptionText>
      ))}
    </ProfileContainer>
    <PsychSkillsImg className='text-primary m-font center-justified full-width small-pad-top'>
      <img src="./Psych_Skills.png" className="full-width diminishing-x-padding" alt="GO | Kubernetes | PostgreSQL | AWS | Azure"/>
    </PsychSkillsImg>
    <BlogBanner/>
  </Banner>
);
