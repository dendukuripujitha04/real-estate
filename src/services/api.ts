import {
  EstimateRequest,
  EstimateResponse,
  TrackedProject,
  Enquiry,
  EstimatorRates,
  AdminRatesPayload,
} from '@/types';

export async function fetchCompanyInfo() {
  const res = await fetch('/api/info');
  return res.json();
}

export async function fetchServices() {
  const res = await fetch('/api/services');
  return res.json();
}

export async function fetchProjects(category?: string) {
  const url = category && category !== 'all' ? `/api/projects?category=${category}` : '/api/projects';
  const res = await fetch(url);
  return res.json();
}

export async function fetchGallery(category?: string) {
  const url = category && category !== 'all' ? `/api/gallery?category=${category}` : '/api/gallery';
  const res = await fetch(url);
  return res.json();
}

export async function fetchTestimonials() {
  const res = await fetch('/api/testimonials');
  return res.json();
}

export async function fetchEstimatorRates(): Promise<EstimatorRates> {
  const res = await fetch('/api/estimator-rates');
  return res.json();
}

export async function calculateEstimateApi(data: EstimateRequest): Promise<EstimateResponse> {
  const res = await fetch('/api/estimate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function trackProjectApi(code: string): Promise<{ success: boolean; project?: TrackedProject; message?: string }> {
  const res = await fetch(`/api/project-progress/${encodeURIComponent(code.trim().toUpperCase())}`);
  return res.json();
}

export async function submitEnquiryApi(data: Partial<Enquiry>): Promise<{ success: boolean; message: string; enquiryId?: string }> {
  const res = await fetch('/api/enquiries', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return res.json();
}

export async function postAiChatApi(message: string): Promise<{ reply: string; suggestedActions?: Array<{ text: string; action: 'scroll_estimate' | 'open_consultation' | 'call_phone' }> }> {
  const res = await fetch('/api/ai-chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });
  return res.json();
}

// Admin APIs
export async function adminLoginApi(credentials: { username: string; password: string }) {
  const res = await fetch('/api/admin/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  return res.json();
}

export async function adminCheckApi(token: string) {
  const res = await fetch('/api/admin/check', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function adminOverviewApi(token: string) {
  const res = await fetch('/api/admin/overview', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function adminGetEnquiriesApi(token: string) {
  const res = await fetch('/api/admin/enquiries', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function adminUpdateEnquiryStatusApi(id: string, status: string, token: string) {
  const res = await fetch(`/api/admin/enquiries/${id}/status`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });
  return res.json();
}

export async function adminDeleteEnquiryApi(id: string, token: string) {
  const res = await fetch(`/api/admin/enquiries/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
}

export async function adminUpdateRatesApi(rates: AdminRatesPayload, token: string) {
  const res = await fetch('/api/admin/estimator-rates', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(rates),
  });
  return res.json();
}
