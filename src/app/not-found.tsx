import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '80vh',
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
          width: '80px',
          height: '80px',
          borderRadius: '20px',
          backgroundColor: 'rgba(245, 158, 11, 0.15)',
          color: '#f59e0b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2.5rem',
          marginBottom: '24px',
        }}
      >
        <i className="fa fa-cubes"></i>
      </div>
      <h1 style={{ fontSize: '3rem', color: '#f59e0b', marginBottom: '8px' }}>
        404
      </h1>
      <h2 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '16px' }}>
        Page Not Found
      </h2>
      <p style={{ maxWidth: '480px', color: '#94a3b8', marginBottom: '28px' }}>
        The architectural page or resource you are looking for does not exist or has been relocated within the BuildSphere portal.
      </p>
      <Link
        href="/"
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
        }}
      >
        <i className="fa fa-home"></i> RETURN TO HOME
      </Link>
    </div>
  );
}
