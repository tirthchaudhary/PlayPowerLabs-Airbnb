import React, { useEffect, useRef } from 'react';
import { AmenityIcon } from './AmenityIcon';

export function AmenitiesModal({ categories, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="amenities-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="amenities-modal-title"
      onClick={onClose}
    >
      <div
        className="amenities-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="amenities-modal-header">
          <button
            ref={closeButtonRef}
            className="amenities-modal-close"
            onClick={onClose}
            aria-label="Close amenities modal"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="amenities-modal-body">
          <h2 id="amenities-modal-title" className="amenities-modal-title">
            What this place offers
          </h2>

          <div className="amenities-categories-list">
            {categories.map((cat) => (
              <section key={cat.category} className="amenity-category-section">
                <h3 className="amenity-category-heading">{cat.category}</h3>
                <div className="amenity-items-list">
                  {cat.items.map((item) => (
                    <div key={item.id || item.name} className="amenity-list-row">
                      <div className="amenity-list-icon">
                        <AmenityIcon name={item.icon} size={24} />
                      </div>
                      <div className="amenity-list-name">{item.name}</div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
