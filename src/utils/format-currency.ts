/**
 * Format currency in Indian Rupees (Lakhs & Crores)
 */
export function formatINR(val: number): string {
  if (isNaN(val)) return '₹0';
  if (val >= 10000000) {
    return `₹${(val / 10000000).toFixed(2)} Cr`;
  }
  return `₹${(val / 100000).toFixed(2)} Lakhs`;
}

/**
 * Format standard comma-separated Indian numbering
 */
export function formatNumberWithCommas(num: number): string {
  return num.toLocaleString('en-IN');
}
