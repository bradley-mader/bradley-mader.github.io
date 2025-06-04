import React, { useRef, useEffect } from 'react';

import styled from 'styled-components';

import "./Resume.css";

const PrintContainer = styled.iframe`
  position:relative;
  left:50%;
  width:8.5in;
  height:22.6in;
  backdround:transparent;
  transform:translate(-50%, 0%);
  border-radius: 1em;
  overflow: scroll;
  @media (max-width: 8.5in){
      width:100%;
      height: 90vh;
      padding:1vh;
  }
  @media print{
    display: block;
    position:fixed;
    left:0px;
    top:0px;
    width:8.5in;
    height:22in;
    margin:none;
    border-radius:none;
  }
`

export const Resume = () => {
  const iframeRef = useRef();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        iframeRef.current.contentWindow.print();      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
      <div>
        <PrintContainer src='./Resume.pdf'  ref={iframeRef}/>
      </div>
  );
}
