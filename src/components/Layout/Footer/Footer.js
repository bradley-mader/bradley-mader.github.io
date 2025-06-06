import React from 'react';
import styled from 'styled-components';

const FooterBox = styled.table`
    
    padding:2em;
    margin-left: 50%;
    transform:translate(-50%, 0%);
`;
const ContactChannelIcon = styled.img`
    float:right;
    display:inline-block;
    margin: 5px 0px 5px 0px;
    padding:10px;
    height:52px;
    width:auto;
    &:hover{
        border-radius:4px;
    }
`;

export const Footer = () =>
{
  return (<FooterBox>
            <tr>
                <td>
                    <a href="https://twitter.com/BMMader" target="_blank" rel="noreferrer"><ContactChannelIcon src="twitter.svg" className='dark-bg-on-hover'></ContactChannelIcon></a>
                </td><td>
                    <a href="https://medium.com/@mader.bradley" target="_blank" rel="noreferrer"><ContactChannelIcon src="medium.png" className='dark-bg-on-hover'></ContactChannelIcon></a>
                </td><td>
                    <a href="mailto:mader.bradley@gmail.com" target="_blank" rel="noreferrer"><ContactChannelIcon src="email_logo.png" className='dark-bg-on-hover'></ContactChannelIcon></a>
                </td><td>
                    <a href="https://linkedin.com/in/bradley-mader" target="_blank" rel="noreferrer"><ContactChannelIcon src="linkedin.png" className='dark-bg-on-hover'></ContactChannelIcon></a>
                </td>
            </tr>
    </FooterBox>);
}