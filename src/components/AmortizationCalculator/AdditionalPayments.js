import React from 'react';
import styled from 'styled-components';

const RemoveButton = styled.button`
  color: #dc4875;
  background: none;
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  &:hover {
    background-color: rgba(220, 72, 117, 0.1);
  }
`;

const AddPaymentLink = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 0.875rem;
  padding: 0;
  color: #f8b640;
  background-image: linear-gradient(0deg, #f8b640, #7e338e);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  &:hover {
    background-image: linear-gradient(90deg, #7e338e, #dc4875, #7e338e);
  }
`;

export function AdditionalPayments({ payments, onChange }) {
  function addPayment() {
    onChange([...payments, { date: "", amount: "" }]);
  }

  function removePayment(index) {
    onChange(payments.filter((_, i) => i !== index));
  }

  function updatePayment(index, field, value) {
    const updated = payments.map((p, i) =>
      i === index ? { ...p, [field]: value } : p
    );
    onChange(updated);
  }

  return (
    <div>
      <label className="form-label text-bright w-100">
        Additional Payments
      </label>

      {payments.map((payment, index) => (
        <div key={index} className="d-flex align-items-center gap-3 mb-2">
          <div className="flex-grow-1">
            <input
              type="date"
              value={payment.date}
              onChange={(e) => updatePayment(index, "date", e.target.value)}
              className="form-control"
            />
          </div>
          <div className="flex-grow-1">
            <input
              type="number"
              min="0.01"
              step="0.01"
              placeholder="Amount ($)"
              value={payment.amount}
              onChange={(e) => updatePayment(index, "amount", e.target.value)}
              className="form-control"
            />
          </div>
          <RemoveButton
            type="button"
            onClick={() => removePayment(index)}
            aria-label="Remove payment"
          >
            ✕
          </RemoveButton>
        </div>
      ))}

      <AddPaymentLink type="button" onClick={addPayment}>
        + Add Payment
      </AddPaymentLink>
    </div>
  );
}
