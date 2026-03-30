import React from 'react';
import { PdfViewer } from '../shared/PdfViewer';
import { PDF_PATHS } from '../../constants';

export const CurriculumVitae = () => (
  <PdfViewer src={PDF_PATHS.cv} height="11.3in" />
);
