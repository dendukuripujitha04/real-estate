'use client';

import React, { useState } from 'react';
import { adminLoginApi } from '@/services/api';

interface LoginFormProps {
  onLoginSuccess: (token: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('buildsphere2024');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await adminLoginApi({ username, password });
      if (res.success && res.token) {
        localStorage.setItem('buildsphere_admin_token', res.token);
        onLoginSuccess(res.token);
      } else {
        setError(res.message || 'Invalid username or password');
      }
    } catch {
      setError('Unable to authenticate at this time.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="admin-login-view">
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{ fontSize: '3rem', color: 'var(--primary-navy)' }}>
          <i className="fa fa-lock"></i>
        </div>
        <h4 style={{ marginTop: '10px' }}>Authorized Access Only</h4>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Please enter administrative credentials to manage client enquiries and rates.
        </p>
      </div>

      <form id="admin-login-form" style={{ maxWidth: '380px', margin: '0 auto' }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="admin-user">Username</label>
          <input
            type="text"
            id="admin-user"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="admin-pass">Password</label>
          <input
            type="password"
            id="admin-pass"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
          {loading ? (
            <>
              <i className="fa fa-spinner fa-spin"></i> Authenticating...
            </>
          ) : (
            <>
              <i className="fa fa-sign-in-alt"></i> LOGIN TO DASHBOARD
            </>
          )}
        </button>

        {error && (
          <div
            className="form-feedback error"
            style={{ display: 'block', marginTop: '12px' }}
          >
            {error}
          </div>
        )}
      </form>
    </div>
  );
};
