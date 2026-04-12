import React, { useState } from 'react';
import styled from 'styled-components';
import { create } from "@bufbuild/protobuf";
import {
  GetAmortizationScheduleRequestSchema,
  PaymentSchema,
} from "../../gen/amortization/v1/amortization_pb";
import { timestampFromDate } from "@bufbuild/protobuf/wkt";
import { amortizationClient } from "../../services/amortizationClient";
import { AmortizationForm } from './AmortizationForm';
import { AmortizationResults } from './AmortizationResults';

const CalculatorContainer = styled.div`
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

const initialLoanData = {
  principal: "",
  interest: "",
  term: "",
  startDate: "",
  paymentDayOfMonth: "",
  skipFirstMonth: false,
};

function dateToTimestamp(dateStr) {
  return timestampFromDate(new Date(dateStr));
}

export function AmortizationCalculator() {
  const [loanData, setLoanData] = useState(initialLoanData);
  const [additionalPayments, setAdditionalPayments] = useState([]);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFormCollapsed, setIsFormCollapsed] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit() {
    setIsLoading(true);
    setError(null);

    try {
      const request = create(GetAmortizationScheduleRequestSchema, {
        principal: parseFloat(loanData.principal),
        interest: parseFloat(loanData.interest),
        term: parseInt(loanData.term, 10),
        startDate: dateToTimestamp(loanData.startDate),
        paymentDayOfMonth: parseInt(loanData.paymentDayOfMonth, 10),
        skipFirstMonth: loanData.skipFirstMonth,
        additionalPayments: additionalPayments
          .filter((p) => p.date && p.amount)
          .map((p) =>
            create(PaymentSchema, {
              date: dateToTimestamp(p.date),
              amount: parseFloat(p.amount),
            })
          ),
      });

      const response = await amortizationClient.getAmortizationSchedule(request);
      setResult(response);
      setIsFormCollapsed(true);
    } catch (err) {
      const message = err instanceof Error ? err.message : "An unexpected error occurred";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CalculatorContainer className="banner-top-offset">
      <PageTitle>Amortization Calculator</PageTitle>

      <AmortizationForm
        loanData={loanData}
        additionalPayments={additionalPayments}
        isCollapsed={isFormCollapsed}
        isLoading={isLoading}
        onLoanDataChange={setLoanData}
        onAdditionalPaymentsChange={setAdditionalPayments}
        onToggleCollapse={() => setIsFormCollapsed(false)}
        onSubmit={handleSubmit}
      />

      {error && (
        <div className="alert alert-danger mt-3" role="alert">
          {error}
        </div>
      )}

      {result && (
        <div style={{ marginTop: '1.5rem' }}>
          <AmortizationResults result={result} />
        </div>
      )}
    </CalculatorContainer>
  );
}
