import React from 'react';

const Badge = ({ children, color, bgColor, className = '' }) => (
  <span
    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${className}`}
    style={{ color, backgroundColor: bgColor }}
  >
    {children}
  </span>
);

export default Badge;
