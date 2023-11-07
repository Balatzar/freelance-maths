"use client";

import React, { useState } from "react";
import InvoiceForm from "../components/InvoiceForm";
import { calculateTaxes } from "../lib/taxCalculator";

export default function HomePage() {
  const [result, setResult] = useState({
    netAmount: 0,
    vatAmount: 0,
    urssafAmount: 0,
    incomeTaxAmount: 0,
    finalAmount: 0,
  });

  const onAmountChange = (invoiceAmount) => {
    if (invoiceAmount) {
      const {
        netAmount,
        vatAmount,
        urssafAmount,
        incomeTaxAmount,
        finalAmount,
      } = calculateTaxes(parseFloat(invoiceAmount));
      setResult({
        netAmount,
        vatAmount,
        urssafAmount,
        incomeTaxAmount,
        finalAmount,
      });
    } else {
      setResult({
        netAmount: 0,
        vatAmount: 0,
        urssafAmount: 0,
        incomeTaxAmount: 0,
        finalAmount: 0,
      }); // Reset if input is cleared
    }
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "decimal",
      maximumFractionDigits: 2,
    }).format(number);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(formatNumber(text)).then(
      () => {
        console.log("Amount copied to clipboard");
      },
      (err) => {
        console.error("Could not copy amount to clipboard: ", err);
      }
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tax Calculator</h1>
      <InvoiceForm onAmountChange={onAmountChange} />
      <div className="mt-4 space-y-2">
        {Object.entries(result).map(([key, value]) => (
          <div key={key} className="flex justify-between items-center">
            <p>
              {key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase())}
              : {formatNumber(value)}€
            </p>
            <button
              onClick={() => copyToClipboard(value)}
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              Copy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
