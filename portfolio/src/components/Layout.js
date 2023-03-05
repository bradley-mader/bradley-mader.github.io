import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu className="not_printable"/>
        <Container className="full_width">
            {this.props.children}
        </Container>
      </div>
    );
  }
}
