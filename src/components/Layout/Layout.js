import React from 'react';
import styled from 'styled-components';
import { NavMenu } from './NavMenu/NavMenu';
import { Footer } from './Footer/Footer';

const BodyContainer = styled.div`
  margin-bottom:10%;
`;

export const Layout = ({ children }) => (
  <div>
    <NavMenu className="not_printable" />
    <BodyContainer className="full_width">
      {children}
    </BodyContainer>
    <Footer />
  </div>
);
