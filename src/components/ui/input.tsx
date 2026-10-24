import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  id,
  className = '',
  ...props
}) => {
  return (
    <div className="form-group">
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} className={`form-control ${className}`.trim()} {...props} />
      {error && <span className="input-error-text" style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px', display: 'block' }}>{error}</span>}
    </div>
  );
};
