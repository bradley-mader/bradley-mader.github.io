import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Row, Col } from 'reactstrap';

const Banner = styled.div`
    position: relative;
    padding: 0em;
`;

const ProfileContainer = styled.div`
position:relative;
    left: 25%;
    width:50%;
`

const HiText = styled.h1`
    display: inline;
`
const InterludeText = styled.p`
    display: inline;
`
const FirstNameText = styled.h1`
    margin-left:19%;
`
const LastNameText = styled.h1`
    margin-left:39%;
    left:20%;
`

export class ProfileBanner extends Component {
    static displayName = ProfileBanner.name;

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
                    <HiText className='text-primary left-justified xxl-font'>Hi<span className='text-bright'>! </span></HiText>
                    <InterludeText className='text-light left-justified m-font'>my name is</InterludeText>
                    <FirstNameText className='text-bright xxl-font left-justified script-font'>Bradley</FirstNameText>
                    <LastNameText className='text-bright xxl-font left-justified script-font'>Mader<span className='text-primary left-justified sans-serif-font xxl-font'>.</span></LastNameText>
                    <p className='text-light m-font left-justified'>I am a Software Engineer that focuses primarily on web technologies - Specifically related to interconnected real-time experiences.</p>
                </ProfileContainer>
            </Banner>
        );
    }
}
