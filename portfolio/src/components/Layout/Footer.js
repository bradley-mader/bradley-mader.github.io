import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
    height:62px;
`;
const ContactChannelIcon = styled.img`
    float:right;
    display:inline-block;
    margin: 15px 15px 15px 0px;
    width:32px;
`;

export const Footer = () =>
{
  return (<FooterBox>
        <a href="https://twitter.com/BMMader" target="_blank"><ContactChannelIcon src="twitter.svg"></ContactChannelIcon></a>
        <a href="https://bmader23.itch.io" target="_blank"><ContactChannelIcon src="itchio.svg"></ContactChannelIcon></a>
        <a href="mailto:mader.bradley@gmail.com"><ContactChannelIcon src="email_logo.png"></ContactChannelIcon></a>
        <a href="https://linkedin.com/in/bradley-mader" target="_blank"><ContactChannelIcon src="linkedin.png"></ContactChannelIcon></a>
    </FooterBox>);
}