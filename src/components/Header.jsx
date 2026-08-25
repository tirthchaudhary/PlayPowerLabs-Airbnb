import React from 'react';

export const Header = ({ scrolledPast = false }) => {
    if (scrolledPast) {
        const scrollToSection = (event, sectionId) => {
            event.preventDefault();
            const section = document.getElementById(sectionId);
            if (!section) return;

            const start = window.scrollY;
            const target = section.getBoundingClientRect().top + start - 92;
            const distance = target - start;
            const duration = 260;
            const startedAt = performance.now();

            const animate = (now) => {
                const progress = Math.min((now - startedAt) / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                window.scrollTo(0, start + distance * easedProgress);
                if (progress < 1) requestAnimationFrame(animate);
            };

            window.history.replaceState({}, '', `#${sectionId}`);
            requestAnimationFrame(animate);
        };

        return (
            <header className="scrolled-listing-header">
                <nav className="scrolled-listing-nav" aria-label="Listing sections">
                    <a className="scrolled-listing-nav__active" href="#photos" onClick={(event) => scrollToSection(event, 'photos')}>Photos</a>
                    <a href="#amenities" onClick={(event) => scrollToSection(event, 'amenities')}>Amenities</a>
                    <a href="#reviews" onClick={(event) => scrollToSection(event, 'reviews')}>Reviews</a>
                    <a href="#location" onClick={(event) => scrollToSection(event, 'location')}>Location</a>
                </nav>
                <div className="scrolled-listing-actions">
                    <div className="scrolled-listing-summary">
                        <strong>₹28,499 <span>for 5 nights</span></strong>
                        <span>★ 4.95 · 19 reviews</span>
                    </div>
                    <button className="scrolled-reserve-button">Reserve</button>
                </div>
            </header>
        );
    }

    return (
        <header style={{
            width: '100%',
            height: '80px',
            borderBottom: '1px solid #EBEBEB',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 100px',
            position: 'static',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: '#FFFFFF',
            zIndex: 100,
            opacity: 1,
            transform: 'translateY(0)',
            animation: 'none',
        }}>
            {/* 1. Official Airbnb Brand Logo */}
            {/* Official Airbnb Brand Logo Image */}
            <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg"
                    alt="Airbnb logo"
                    style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
                />
            </div>



            {/* 2. Center Search Pill */}
                <div className="opening-search-pill" style={{
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #DDDDDD',
                borderRadius: '40px',
                padding: '6px 8px 6px 18px',
                boxShadow: '0 1px 2px rgba(0,0,0,0.08), 0 4px 12px rgba(0,0,0,0.05)',
                gap: '14px',
                cursor: 'pointer',
                fontSize: '14px',
                backgroundColor: '#FFFFFF'
            }}>
                {/* House Icon from Provided Image URL */}
                <div style={{ display: 'flex', alignItems: 'center', width: '28px', height: '26px' }}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdibzmfFOSqs4QjoNTdNL92DAae594Mke1a2Kuhn5RvKh25hZI"
                        alt="House icon"
                        style={{ width: '28px', height: '26px', objectFit: 'contain' }}
                    />
                </div>


                <span style={{ color: '#222222', fontWeight: 600, fontSize: '14px' }}>Anywhere</span>
                <span style={{ color: '#DDDDDD', fontSize: '14px', fontWeight: 300 }}>|</span>
                <span style={{ color: '#222222', fontWeight: 600, fontSize: '14px' }}>Anytime</span>
                <span style={{ color: '#DDDDDD', fontSize: '14px', fontWeight: 300 }}>|</span>
                <span style={{ color: '#6A6A6A', fontWeight: 400, fontSize: '14px' }}>Add guests</span>

                {/* Red Search Circle Button */}
                <div style={{
                    backgroundColor: '#FF385C',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    marginLeft: '4px'
                }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                </div>
            </div>

            {/* 3. Right Action Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#222222',
                    cursor: 'pointer',
                    padding: '10px 14px',
                    borderRadius: '22px',
                    transition: 'background-color 0.2s ease'
                }}>
                    Become a host
                </span>

                {/* Circular Globe Button */}
                <button style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#F2F2F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} aria-label="Language selection">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                </button>

                {/* Circular Hamburger Menu Button */}
                <button style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#F2F2F2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                }} aria-label="Main menu">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#222222" strokeWidth="2.5">
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>
        </header>
    );
};
