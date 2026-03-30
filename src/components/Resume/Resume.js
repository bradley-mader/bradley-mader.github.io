import React from 'react';
import { PdfViewer } from '../shared/PdfViewer';
import { PDF_PATHS } from '../../constants';
import "./Resume.css";

export const Resume = () => (
  <PdfViewer src={PDF_PATHS.resume} height="22.6in" overflow="scroll" enablePrint />
);
