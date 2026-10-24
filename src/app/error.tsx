'use client';

import { useEffect } from 'react';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('BuildSphere Platform Application Error:', error);
  }, [error]);

  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '#090f1d',
        color: '#f8fafc',
      }}
    >
      <div
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          backgroundColor: 'rgba(239, 68, 68, 0.2)',
          color: '#ef4444',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          marginBottom: '20px',
        }}
      >
        <i className="fa fa-exclamation-triangle"></i>
      </div>
      <h2 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '12px' }}>
        An Unexpected Error Occurred
      </h2>
      <p style={{ maxWidth: '480px', color: '#94a3b8', marginBottom: '24px' }}>
        Our engineering desk has been notified. Please try reloading the view or contact our Vijayawada office.
      </p>
      <button
        onClick={() => reset()}
        className="btn btn-primary"
        style={{
          backgroundColor: '#f59e0b',
          color: '#0d1e3a',
          fontWeight: 700,
          padding: '12px 28px',
          borderRadius: '8px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
        }}
      >
        <i className="fa fa-redo"></i> Try Again
      </button>
    </div>
  );
}
