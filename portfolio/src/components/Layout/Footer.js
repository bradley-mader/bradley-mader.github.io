import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.div`
    height:62px;
`;
const ContactChannelIcon = styled.img`
    float:right;
    display:inline-block;
    margin: 5px 0px 5px 0px;
    padding:10px;
    width:52px;
    &:hover{
        border-radius:4px;
    }
`;

export const Footer = () =>
{
  return (<FooterBox>
        <a href="https://twitter.com/BMMader" target="_blank"><ContactChannelIcon src="twitter.svg" className='dark-bg-on-hover'></ContactChannelIcon></a>
        <a href="https://bmader23.itch.io" target="_blank"><ContactChannelIcon src="itchio.svg" className='dark-bg-on-hover'></ContactChannelIcon></a>
        <a href="https://medium.com/@mader.bradley" target="_blank"><ContactChannelIcon src="medium.png" className='dark-bg-on-hover'></ContactChannelIcon></a>
        <a href="mailto:mader.bradley@gmail.com"><ContactChannelIcon src="email_logo.png" className='dark-bg-on-hover'></ContactChannelIcon></a>
        <a href="https://linkedin.com/in/bradley-mader" target="_blank"><ContactChannelIcon src="linkedin.png" className='dark-bg-on-hover'></ContactChannelIcon></a>
    </FooterBox>);
}