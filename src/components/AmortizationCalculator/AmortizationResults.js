import React from 'react';
import styled from 'styled-components';
import { ScheduleTable } from './ScheduleTable';

const ResultHighlight = styled.div`
  background: linear-gradient(135deg, #251248, #7e338e);
  border-radius: 10px;
  padding: 1rem 1.5rem;
  margin-bottom: 1.5rem;
`;

const ResultLabel = styled.p`
  font-size: 0.875rem;
  color: #f8b640;
  margin: 0 0 0.25rem 0;
`;

const ResultAmount = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFFFF;
  margin: 0;
`;

export function AmortizationResults({ result }) {
  const monthlyPayment = result.monthlyPayment.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const payments = result.schedule?.payments ?? [];

  return (
    <div>
      <ResultHighlight>
        <ResultLabel>Monthly Payment</ResultLabel>
        <ResultAmount>${monthlyPayment}/mo</ResultAmount>
      </ResultHighlight>

      <ScheduleTable payments={payments} />
    </div>
  );
}
