import React, { useState } from 'react';

export const PropertyHeader = ({ title }) => {
  const [isSaved, setIsSaved] = useState(true);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 0 16px 0'
    }}>
      {/* Title on Left */}
      <h1 style={{
        fontSize: '26px',
        fontWeight: 600,
        color: '#222222',
        lineHeight: '32px'
      }}>
        {title || 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10'}
      </h1>

      {/* Share & Saved Buttons on Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={() => navigator.clipboard?.writeText(window.location.href)}
          className="action-btn-hover"
          aria-label="Share property listing"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" y1="2" x2="12" y2="15" />
          </svg>
          Share
        </button>

        <button
          onClick={() => setIsSaved(!isSaved)}
          className="action-btn-hover"
          aria-label="Save property listing"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill={isSaved ? "#FF385C" : "none"} stroke={isSaved ? "#FF385C" : "#222222"} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>
    </div>
  );
};
