import React from "react";

const InvoiceForm = ({ onAmountChange }) => {
  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor="invoiceAmount"
        className="block text-sm font-medium text-gray-700"
      >
        Invoice Amount (including taxes)
      </label>
      <input
        id="invoiceAmount"
        name="invoiceAmount"
        type="number"
        onChange={(e) => onAmountChange(e.target.value)}
        className="mt-1 block w-full p-2 border border-gray-300 bg-white text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        placeholder="Enter amount"
        required
      />
    </div>
  );
};

export default InvoiceForm;
