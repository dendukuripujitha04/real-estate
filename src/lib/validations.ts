export function validatePhone(phone: string): boolean {
  if (!phone) return false;
  const cleaned = phone.replace(/[^0-9]/g, '');
  return cleaned.length >= 10;
}

export function validateEmail(email: string): boolean {
  if (!email) return true; // Optional in form
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
