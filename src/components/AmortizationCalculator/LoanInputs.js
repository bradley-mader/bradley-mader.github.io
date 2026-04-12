import React from 'react';

export function LoanInputs({ data, onChange }) {
  function update(field, value) {
    onChange({ ...data, [field]: value });
  }

  return (
    <div className="row">
      <div className="col-12 col-sm-6 mb-3">
        <label className="form-label text-bright w-100">Principal ($)</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          required
          value={data.principal}
          onChange={(e) => update("principal", e.target.value)}
          className="form-control"
        />
      </div>

      <div className="col-12 col-sm-6 mb-3">
        <label className="form-label text-bright w-100">Interest Rate (%)</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          required
          value={data.interest}
          onChange={(e) => update("interest", e.target.value)}
          className="form-control"
        />
      </div>

      <div className="col-12 col-sm-6 mb-3">
        <label className="form-label text-bright w-100">Term (months)</label>
        <input
          type="number"
          min="1"
          step="1"
          required
          value={data.term}
          onChange={(e) => update("term", e.target.value)}
          className="form-control"
        />
      </div>

      <div className="col-12 col-sm-6 mb-3">
        <label className="form-label text-bright w-100">Start Date</label>
        <input
          type="date"
          required
          value={data.startDate}
          onChange={(e) => update("startDate", e.target.value)}
          className="form-control"
        />
      </div>

      <div className="col-12 col-sm-6 mb-3">
        <label className="form-label text-bright w-100">Payment Day of Month</label>
        <input
          type="number"
          min="1"
          max="28"
          step="1"
          required
          value={data.paymentDayOfMonth}
          onChange={(e) => update("paymentDayOfMonth", e.target.value)}
          className="form-control"
        />
      </div>

      <div className="col-12 col-sm-6 mb-3 d-flex align-items-center" style={{ paddingTop: '2rem' }}>
        <div className="form-check d-flex align-items-center w-100">
          <input
            type="checkbox"
            id="skipFirstMonth"
            checked={data.skipFirstMonth}
            onChange={(e) => update("skipFirstMonth", e.target.checked)}
            className="form-check-input flex-shrink-0"
            style={{ marginTop: 0 }}
          />
          <label htmlFor="skipFirstMonth" className="form-check-label text-bright flex-grow-1" style={{ marginLeft: '0.75rem' }}>
            Skip First Month
          </label>
        </div>
      </div>
    </div>
  );
}
