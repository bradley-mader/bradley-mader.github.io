import React from 'react';

function formatCurrency(value) {
  return `$${value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatDate(timestamp) {
  if (!timestamp) return "";
  const millis = Number(timestamp.seconds) * 1000 + timestamp.nanos / 1_000_000;
  const date = new Date(millis);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

export function ScheduleTable({ payments }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover amortization-table">
        <thead>
          <tr>
            <th className="text-start">Date</th>
            <th className="text-end">Payment Amount</th>
            <th className="text-end">Principal</th>
            <th className="text-end">Interest</th>
            <th className="text-end">Total Principal Paid</th>
            <th className="text-end">Total Interest Paid</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{formatDate(payment.date)}</td>
              <td className="text-end">{formatCurrency(payment.paymentAmount)}</td>
              <td className="text-end">{formatCurrency(payment.paymentPrincipal)}</td>
              <td className="text-end">{formatCurrency(payment.paymentInterest)}</td>
              <td className="text-end">{formatCurrency(payment.totalPrincipalPaid)}</td>
              <td className="text-end">{formatCurrency(payment.totalInterestPaid)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
