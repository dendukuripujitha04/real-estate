'use client';

import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/modal';
import { LoginForm } from '@/components/forms/login-form';
import {
  adminCheckApi,
  adminOverviewApi,
  adminGetEnquiriesApi,
  adminUpdateEnquiryStatusApi,
  adminDeleteEnquiryApi,
} from '@/services/api';
import { Enquiry } from '@/types';
import { formatDate } from '@/utils/format-date';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [token, setToken] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'overview' | 'enquiries'>('overview');
  const [metrics, setMetrics] = useState({
    totalEnquiries: 0,
    newEnquiries: 0,
    inProgressEnquiries: 0,
    totalProjects: 6,
  });
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  useEffect(() => {
    if (isOpen) {
      const savedToken =
        localStorage.getItem('buildsphere_admin_token') ||
        localStorage.getItem('ksb_admin_token') ||
        '';

      if (savedToken) {
        adminCheckApi(savedToken)
          .then((res) => {
            if (res.authenticated) {
              setToken(savedToken);
              loadDashboard(savedToken);
            } else {
              setToken('');
            }
          })
          .catch(() => setToken(''));
      } else {
        setToken('');
      }
    }
  }, [isOpen]);

  const loadDashboard = async (authToken: string) => {
    try {
      const [overviewData, enquiriesData] = await Promise.all([
        adminOverviewApi(authToken),
        adminGetEnquiriesApi(authToken),
      ]);

      if (overviewData) {
        setMetrics({
          totalEnquiries: overviewData.totalEnquiries || 0,
          newEnquiries: overviewData.newEnquiries || 0,
          inProgressEnquiries: overviewData.inProgressEnquiries || 0,
          totalProjects: overviewData.totalProjects || 6,
        });
      }

      if (Array.isArray(enquiriesData)) {
        setEnquiries(enquiriesData);
      }
    } catch (err) {
      console.error('Error loading admin dashboard data:', err);
    }
  };

  const handleLoginSuccess = (newToken: string) => {
    setToken(newToken);
    loadDashboard(newToken);
  };

  const handleLogout = () => {
    setToken('');
    localStorage.removeItem('buildsphere_admin_token');
    localStorage.removeItem('ksb_admin_token');
  };

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const res = await adminUpdateEnquiryStatusApi(id, newStatus, token);
      if (res.success) {
        setEnquiries((prev) =>
          prev.map((e) =>
            e.id === id ? { ...e, status: newStatus as Enquiry['status'] } : e
          )
        );
        loadDashboard(token);
      }
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const handleDeleteEnquiry = async (id: string) => {
    if (!confirm('Are you sure you want to delete this enquiry?')) return;
    try {
      const res = await adminDeleteEnquiryApi(id, token);
      if (res.success) {
        setEnquiries((prev) => prev.filter((e) => e.id !== id));
        loadDashboard(token);
      }
    } catch (err) {
      console.error('Failed to delete enquiry', err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={
        <h3>
          <i className="fa fa-user-shield" style={{ color: 'var(--accent-gold)' }}></i>{' '}
          SS Global Management Portal
        </h3>
      }
      maxWidth="920px"
    >
      {!token ? (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <div id="admin-dashboard-view">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              borderBottom: '1px solid #e2e8f0',
              paddingBottom: '12px',
            }}
          >
            <div>
              <h4 style={{ color: 'var(--primary-navy)', margin: 0 }}>Dashboard Overview</h4>
              <small style={{ color: '#64748b' }}>Logged in as Administrator</small>
            </div>
            <button
              className="btn btn-sm btn-secondary"
              id="admin-logout-btn"
              onClick={handleLogout}
              style={{ background: '#ef4444', borderColor: '#ef4444', color: '#fff' }}
            >
              <i className="fa fa-sign-out-alt"></i> Logout
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="admin-nav-tabs">
            <button
              className={`admin-tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`admin-tab-btn ${activeTab === 'enquiries' ? 'active' : ''}`}
              onClick={() => setActiveTab('enquiries')}
            >
              Customer Enquiries
            </button>
          </div>

          {/* Tab: Overview */}
          {activeTab === 'overview' && (
            <div className="admin-tab-pane" style={{ display: 'block' }}>
              <div className="admin-metrics-row">
                <div className="metric-box">
                  <div className="metric-num">{metrics.totalEnquiries}</div>
                  <div className="metric-label">Total Enquiries</div>
                </div>
                <div className="metric-box">
                  <div className="metric-num" style={{ color: '#0284c7' }}>
                    {metrics.newEnquiries}
                  </div>
                  <div className="metric-label">New Enquiries</div>
                </div>
                <div className="metric-box">
                  <div className="metric-num" style={{ color: '#f59e0b' }}>
                    {metrics.inProgressEnquiries}
                  </div>
                  <div className="metric-label">In Progress</div>
                </div>
                <div className="metric-box">
                  <div className="metric-num" style={{ color: '#10b981' }}>
                    {metrics.totalProjects}
                  </div>
                  <div className="metric-label">Active Projects</div>
                </div>
              </div>
              <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>
                Welcome to the SS Global management system. Here you can monitor project enquiries received from the website and update enquiry status (NEW, CONTACTED, IN PROGRESS, COMPLETED) in real time.
              </p>
            </div>
          )}

          {/* Tab: Enquiries */}
          {activeTab === 'enquiries' && (
            <div className="admin-tab-pane" style={{ display: 'block', overflowX: 'auto' }}>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Contact</th>
                    <th>Project Info</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {!enquiries.length ? (
                    <tr>
                      <td colSpan={6} style={{ textAlign: 'center', padding: '20px' }}>
                        No enquiries yet.
                      </td>
                    </tr>
                  ) : (
                    enquiries.map((e) => (
                      <tr key={e.id}>
                        <td>
                          <strong>{e.name}</strong>
                          <br />
                          <small style={{ color: '#64748b' }}>
                            {formatDate(e.createdAt)}
                          </small>
                        </td>
                        <td>
                          <a
                            href={`tel:${e.phone}`}
                            style={{ color: 'var(--primary-blue)', fontWeight: 600 }}
                          >
                            {e.phone}
                          </a>
                          <br />
                          <small>{e.email || 'N/A'}</small>
                        </td>
                        <td>
                          {e.projectType}
                          <br />
                          <small style={{ color: '#64748b' }}>
                            {e.location} ({e.approxArea || 'N/A'})
                          </small>
                        </td>
                        <td style={{ maxWidth: '200px', fontSize: '0.8rem', color: '#475569' }}>
                          {e.message || 'Consultation enquiry'}
                        </td>
                        <td>
                          <select
                            value={e.status}
                            onChange={(evt) => handleStatusChange(e.id, evt.target.value)}
                            style={{
                              padding: '4px 8px',
                              borderRadius: '4px',
                              fontSize: '0.8rem',
                              fontWeight: 700,
                            }}
                          >
                            <option value="NEW">NEW</option>
                            <option value="CONTACTED">CONTACTED</option>
                            <option value="IN PROGRESS">IN PROGRESS</option>
                            <option value="COMPLETED">COMPLETED</option>
                          </select>
                        </td>
                        <td>
                          <button
                            onClick={() => handleDeleteEnquiry(e.id)}
                            style={{
                              background: '#ef4444',
                              color: '#fff',
                              border: 'none',
                              padding: '4px 8px',
                              borderRadius: '4px',
                              cursor: 'pointer',
                            }}
                            title="Delete Enquiry"
                          >
                            <i className="fa fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </Modal>
  );
};
