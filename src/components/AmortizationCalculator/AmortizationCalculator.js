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
      <PageTitle>
        Amortization Calculator
        <InfoLink
          href="https://docs.google.com/document/d/16cFpMZ2DwxddJy05Md5y2zyvRj5X1NL-pPHAdZNVg7w/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="More information about the Amortization Calculator"
          title="More information"
        >
          &#9432;
        </InfoLink>
      </PageTitle>

      <AmortizationForm
        loanData={loanData}
        additionalPayments={additionalPayments}
        isCollapsed={isFormCollapsed}
        isLoading={isLoading}
        error={error}
        onLoanDataChange={setLoanData}
        onAdditionalPaymentsChange={setAdditionalPayments}
        onToggleCollapse={() => setIsFormCollapsed(false)}
        onSubmit={handleSubmit}
      />

      {result && (
        <div style={{ marginTop: '1.5rem' }}>
          <AmortizationResults result={result} />
        </div>
      )}
    </CalculatorContainer>
  );
}
