import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardImg } from 'reactstrap';
import { ProfileBanner } from './ProfileBanner.js';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = {
            priorScrollTop: null,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScrollEvent.bind(this), { passive: true });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScrollEvent);
    }

    onScrollEvent(e) {
        var scrollDown = this.state.priorScrollTop != null ? e.target.scrollTop > this.state.priorScrollTop : false;
        this.setState({ priorScrollTop: e.target.scrollTop });

        var scrollFactor = (window.innerHeight + window.scrollY) / document.documentElement.scrollHeight;
        console.log("Scroll Factor: " + scrollFactor);
        this.loadContent(scrollFactor);

    }

    loadContent(scrollFactor) {

    }

    render () {
        return ( 
            <div>
                <ProfileBanner />
            </div>
        );
    }
}
