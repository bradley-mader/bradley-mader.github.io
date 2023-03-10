import React, { Component } from 'react';
import styled from 'styled-components';
import { NavMenu } from '../NavMenu/NavMenu';
import {Footer} from './Footer';

const BodyContainer = styled.div`
  margin-bottom:10%;
`;

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu className="not_printable"/>
        <BodyContainer className="full_width">
            {this.props.children}
        </BodyContainer>
        <Footer/>
      </div>
    );
  }
}
