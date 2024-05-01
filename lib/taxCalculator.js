// src/lib/taxCalculator.js

export function calculateTaxes(totalAmount) {
  const VAT_RATE = 0.2; // 20% VAT Rate
  const URSSAF_RATE = 0.212; // 21.2% URSSAF Rate
  const INCOME_TAX_RATE = 0.66 * 0.3; // Effective 19.8% Income Tax Rate

  const netAmount = totalAmount / (1 + VAT_RATE);
  const vatAmount = totalAmount - netAmount;
  const urssafAmount = netAmount * URSSAF_RATE;
  const incomeTaxAmount = netAmount * INCOME_TAX_RATE;
  const finalAmount = netAmount - urssafAmount - incomeTaxAmount;

  return {
    netAmount,
    vatAmount,
    urssafAmount,
    incomeTaxAmount,
    finalAmount,
  };
}
