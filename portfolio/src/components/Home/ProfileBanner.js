import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg, Row, Col } from 'reactstrap';

const Banner = styled.div`
    position: relative;
    padding: 0em;
    overflow: hidden;
`;

const ProfileImageContainer = styled.div`
    position:relative;
    padding: 2em;
    margin-left:50%;
    width:100%;
    height:50vh;
    transform:translate(-50%,0%);
    overflow:hidden;
`;

const ProfileImage = styled.img`
    height:100%;
    border-radius:.25rem;

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
                <Card style={{
                    background: "linear-gradient(to left top, #6B9B8A, #F3FFE3) fixed", margin: "5rem 10rem 5rem 10rem"
                }}>
                    <CardImg src='/profile_image.jpg' />
                    <CardBody>
                        <Row>
                            <Col xs="6">
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">Projects</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">What have have worked on recently?</CardSubtitle>
                                        <CardText></CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="6">
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">Languages</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">What programming languages do I have experience with?</CardSubtitle>
                                        <CardText></CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: "2em" }}>
                            <Col xs="6">
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">Technologies</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">What other development technologies have I worked with?</CardSubtitle>
                                        <CardText></CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="6">
                                <Card>
                                    <CardBody>
                                        <CardTitle tag="h5">Ideologies</CardTitle>
                                        <CardSubtitle tag="h6" className="mb-2 text-muted">What systems and frameworks for development am I passionate about?</CardSubtitle>
                                        <CardText></CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </CardBody>
                </Card>
            </Banner>
        );
    }
}
