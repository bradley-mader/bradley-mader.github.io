import React from 'react';
import styled from 'styled-components';

const FamilyContainer = styled.div`
    background-color: white;
    border-radius: 4px;
    margin: 1vw;
`

const FamilyBanner = styled.div`
    font-size: 26pt;
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
    & .fb-content-middle{
        width:100%;
        padding: 0vw 16vw;
        text-align: center;
    }
    & .fb-image{
        display:inline-block;
        width:32vw;
        padding: 4vw;
        border-radius: 4px;
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
        padding-left: 4vw;
    }
    & * img{
        width:100%;
    }
`
const FamilyBannerPhoto = styled.div`
    padding: 2vw 0vw;
    & img{
        width:100%;
    }
`

export const AboutMe = () => {
    return (
        <FamilyContainer className='dark-text'>
            <FamilyBannerPhoto>
                <img className='fb-image' src='fam_foto.jpeg' alt=""></img>
            </FamilyBannerPhoto>
            <FamilyBanner>
                <div className='fb-image'>
                    <img src='Washington.png' alt=""/>
                </div>
                <div className='fb-content'>
                    I live in Lynnwood, WA with my wife, two children, dog, and cat where I spend the vast majority of my time 
                    chasing the little animals around. In any additional time I am a huge runner, gamer and cook.
                </div>
            </FamilyBanner>
            <FamilyBanner className='light-background'>
                <div className='fb-content-middle'>
                    I have spent the past 5 years developing applications both web based and native. In that time, I have advanced initiatives to 
                    move to cloud native architectures, automated testing, decommission legacy software systems, and improve UX of applications.
                </div>
            </FamilyBanner>
            <FamilyBanner>
                <div>
                    I am most passionate about working on projects that allow for collaborative real-time experiences. My favorite backend programming 
                    language is Go due to the simple syntax, features specifically designed to support multithreading and relatively high performance 
                    benchmarks, but I have also extensively used C# and C++ in the backend.
                </div>
            </FamilyBanner>
            <FamilyBanner className='darkest-large-border-top'>
                <div className='fb-image-small'>
                    <img src='WSU.png' alt=""/>
                </div>
                <div className='fb-content-small'>
                    I attended college at Washington State University to earn my Bacchelors of Science in Biology. After several years in the workforce, I fell 
                    in love with programming which led me to return to school at Oregon State University where I attained a second Bacchelors of Science in 
                    Computer Science in 2016.
                </div>
                <div className='fb-image-small'>
                    <img src='OSU.png' alt=""/>
                </div>
            </FamilyBanner>
        </FamilyContainer>
    );
}