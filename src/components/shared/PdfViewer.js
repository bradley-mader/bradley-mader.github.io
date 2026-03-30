import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const PdfFrame = styled.iframe`
  position: relative;
  left: 50%;
  width: 8.5in;
  height: ${props => props.$height || '11.3in'};
  background: transparent;
  transform: translate(-50%, 0%);
  border-radius: 1em;
  overflow: ${props => props.$overflow || 'hidden'};
  @media (max-width: 8.5in) {
    width: 100%;
    height: 90vh;
    padding: 1vh;
  }
  @media print {
    display: block;
    position: fixed;
    left: 0px;
    top: 0px;
    width: 8.5in;
    height: 22in;
    margin: 0;
    border-radius: 0;
  }
`;

export const PdfViewer = ({ src, height, overflow, enablePrint = false }) => {
  const iframeRef = useRef();

  useEffect(() => {
    if (!enablePrint) return;

    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'p') {
        event.preventDefault();
        iframeRef.current.contentWindow.print();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [enablePrint]);

  return (
    <div>
      <PdfFrame
        src={src}
        ref={iframeRef}
        $height={height}
        $overflow={overflow}
      />
    </div>
  );
};
