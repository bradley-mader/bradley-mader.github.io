import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Row, Col } from 'reactstrap';

const Banner = styled.div`
    position: relative;
    padding: 0em;
    overflow: hidden;
`;

const ProfileContainer = styled.div`
    text-align: center;
`
const ProfileImage = styled.img`
    border-radius:50%;
    margin-top:25vh;
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
                    <ProfileImage src='profile_image_round.png'/>
                    <h1>Bradley Mader</h1>
                    <h3>Software Engineer</h3>
                    <h3>Online/Backend</h3>
                </ProfileContainer>
            </Banner>
        );
    }
}
