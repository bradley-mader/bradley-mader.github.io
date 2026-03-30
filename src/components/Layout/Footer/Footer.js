import React from 'react';
import styled from 'styled-components';
import { SOCIAL_URLS } from '../../../constants';

const FooterNav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 0;
    padding: 2em;
`;

const ContactChannelIcon = styled.img`
    display:inline-block;
    margin: 5px 0px 5px 0px;
    padding:10px;
    height:52px;
    width:auto;
    &:hover{
        border-radius:4px;
    }
`;

const socialLinks = [
  { url: SOCIAL_URLS.twitter, icon: 'twitter.svg', alt: 'Twitter' },
  { url: SOCIAL_URLS.medium, icon: 'medium.png', alt: 'Medium' },
  { url: SOCIAL_URLS.email, icon: 'email_logo.png', alt: 'Email' },
  { url: SOCIAL_URLS.linkedin, icon: 'linkedin.png', alt: 'LinkedIn' },
];

export const Footer = () => (
  <FooterNav>
    {socialLinks.map(({ url, icon, alt }) => (
      <a key={alt} href={url} target="_blank" rel="noreferrer">
        <ContactChannelIcon src={icon} className='dark-bg-on-hover' alt={alt} />
      </a>
    ))}
  </FooterNav>
);
