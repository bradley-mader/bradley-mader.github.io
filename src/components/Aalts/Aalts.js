import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.5rem;
`;

const PageTitle = styled.h1`
  font-size: 36pt;
  font-weight: bold;
  background-image: linear-gradient(0deg, #f8b640, #7e338e);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1.5rem;
`;

const InfoLink = styled.a`
  font-size: 28pt;
  vertical-align: super;
  margin-left: 0.4rem;
  text-decoration: none;
  color: #7e338e;
  -webkit-text-fill-color: #7e338e;
  font-weight: bold;
  &:hover {
    color: #f8b640;
    -webkit-text-fill-color: #f8b640;
  }
`;

const EmbedFrame = styled.iframe`
  width: 100%;
  height: 80vh;
  min-height: 600px;
  border: 1px solid #7e338e;
  border-radius: 10px;
  background-color: #fff;
`;

export function Aalts() {
  return (
    <PageContainer className="banner-top-offset">
      <PageTitle>
        Agent Audit Log Tracking Service
        <InfoLink
          href="https://docs.google.com/document/d/1J1hXIUt70d8OiMzbCYwsxOWrJ8_YdVERSjZIZwsXNKo/edit?tab=t.yzhpa2fpry09#heading=h.cjsqg9oum4lh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="More information about aalts"
          title="More information"
        >
          &#9432;
        </InfoLink>
      </PageTitle>
      <EmbedFrame
        src="https://aalts-ui.bradley-mader.com"
        title="Agent Audit Log Tracking Service"
        loading="lazy"
      />
    </PageContainer>
  );
}
