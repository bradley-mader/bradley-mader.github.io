import React from 'react';
import styled from 'styled-components';
import { LoanInputs } from './LoanInputs';
import { AdditionalPayments } from './AdditionalPayments';

const FormCard = styled.form`
  background-color: #FFFFFF;
  border-radius: 10px;
  border: 2px solid #2ebbc9;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const CollapsedButton = styled.button`
  width: 100%;
  background-color: #FFFFFF;
  border: 2px solid #2ebbc9;
  border-radius: 10px;
  padding: 1rem 1.5rem;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #f8f9fa;
  }
`;

const SummaryText = styled.span`
  font-weight: 600;
  color: #251248;
`;

const EditHint = styled.span`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  color: #2ebbc9;
`;

const ErrorMessage = styled.div`
  color: #dc3545;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-top: 1rem;
  font-size: 0.9rem;
`;

const CalculateButton = styled.button`
  width: 100%;
  background-image: linear-gradient(90deg, #7e338e, #dc4875, #7e338e);
  color: #FFFFFF;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  margin-top: 1.5rem;
  font-size: 1rem;
  &:hover {
    background-image: linear-gradient(90deg, #251248, #7e338e, #251248);
  }
  &:disabled {
    opacity: 0.5;
  }
`;

function buildSummary(data) {
  const principal = Number(data.principal).toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return `$${principal} @ ${data.interest}% / ${data.term} months`;
}

export function AmortizationForm({
  loanData,
  additionalPayments,
  isCollapsed,
  isLoading,
  error,
  onLoanDataChange,
  onAdditionalPaymentsChange,
  onToggleCollapse,
  onSubmit,
}) {
  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  if (isCollapsed) {
    return (
      <CollapsedButton onClick={onToggleCollapse}>
        <SummaryText>{buildSummary(loanData)}</SummaryText>
        <EditHint>— Click to edit</EditHint>
      </CollapsedButton>
    );
  }

  return (
    <FormCard onSubmit={handleSubmit}>
      <LoanInputs data={loanData} onChange={onLoanDataChange} />

      <AdditionalPayments
        payments={additionalPayments}
        onChange={onAdditionalPaymentsChange}
      />

      {error && <ErrorMessage role="alert">{error}</ErrorMessage>}

      <CalculateButton type="submit" disabled={isLoading}>
        {isLoading ? "Calculating..." : "Calculate Schedule"}
      </CalculateButton>
    </FormCard>
  );
}
