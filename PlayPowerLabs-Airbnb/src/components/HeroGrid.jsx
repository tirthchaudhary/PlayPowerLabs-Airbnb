import React from 'react';

export const HeroGrid = ({ photos, onOpenPhotoTour, onOpenLightbox }) => {
    const mainHero = photos[0];
    const gridHeroes = photos.slice(1, 5);

    return (
        <div style={{ position: 'relative', width: '100%', margin: '24px 0' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                borderRadius: '16px',
                overflow: 'hidden',
                height: '460px'
            }}>
                {/* Left 50%: Main Hero Image */}
                <div
                    onClick={() => onOpenLightbox && onOpenLightbox(0)}
                    onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); if (onOpenLightbox) onOpenLightbox(0); } }}
                    role="button"
                    tabIndex={0}
                    style={{ position: 'relative', height: '100%', cursor: 'pointer', overflow: 'hidden' }}
                    className="hero-image-wrapper"
                >
                    <img
                        src={mainHero?.url}
                        alt={mainHero?.alt}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease, filter 0.3s ease' }}
                    />
                </div>

                {/* Right 50%: 2x2 Sub-Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr', gap: '8px', height: '100%' }}>
                    {gridHeroes.map((photo, index) => (
                        <div
                            key={photo.id || index}
                            onClick={() => onOpenLightbox && onOpenLightbox(index + 1)}
                            onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); if (onOpenLightbox) onOpenLightbox(index + 1); } }}
                            role="button"
                            tabIndex={0}
                            style={{ position: 'relative', height: '100%', cursor: 'pointer', overflow: 'hidden' }}
                            className="hero-image-wrapper"
                        >
                            <img
                                src={photo.url}
                                alt={photo.alt}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease, filter 0.3s ease' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating "Show all photos" Button */}
            <button
                onClick={onOpenPhotoTour}
                style={{
                    position: 'absolute',
                    bottom: '24px',
                    right: '24px',
                    backgroundColor: '#FFFFFF',
                    color: '#222222',
                    border: '1px solid #222222',
                    borderRadius: '8px',
                    padding: '7px 15px',
                    fontSize: '14px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
                    cursor: 'pointer',
                    zIndex: 10
                }}
                aria-label="Show all photos gallery"
            >
                {/* 3x3 Dot Grid Icon */}
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#222222">
                    <circle cx="2" cy="2" r="1.5" />
                    <circle cx="8" cy="2" r="1.5" />
                    <circle cx="14" cy="2" r="1.5" />
                    <circle cx="2" cy="8" r="1.5" />
                    <circle cx="8" cy="8" r="1.5" />
                    <circle cx="14" cy="8" r="1.5" />
                    <circle cx="2" cy="14" r="1.5" />
                    <circle cx="8" cy="14" r="1.5" />
                    <circle cx="14" cy="14" r="1.5" />
                </svg>
                Show all photos
            </button>
        </div>
    );
};
