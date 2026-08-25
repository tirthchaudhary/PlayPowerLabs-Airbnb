import React, { useState } from 'react';
import '../styles/ListingDetails.css';

const Icon = ({ children, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

const Snowflake = () => <Icon><path d="M12 2v20M4.9 6l14.2 12M4.9 18 19.1 6M2 12h20" /></Icon>;
const Key = () => <Icon><circle cx="8" cy="15" r="4" /><path d="m11 12 8-8M15 8l2 2M17 6l2 2" /></Icon>;
const Outdoor = () => <Icon><path d="M4 20h16v-6H4v6Z" /><path d="M7 14c0-4 2.3-7 5-9 2.7 2 5 5 5 9M12 5v9M9 10l3 2 3-2" /></Icon>;
const Gift = () => <Icon size={21}><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M12 8v13M3 12h18M12 8H7.5a2.5 2.5 0 1 1 2.5-3.5L12 8Zm0 0h4.5A2.5 2.5 0 1 0 14 4.5L12 8Z" /></Icon>;

// Laurel wreath SVG — filled leaf shapes matching the Airbnb Guest favourite badge
const LaurelLeft = () => (
  <svg width="30" height="44" viewBox="0 0 30 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Stem */}
    <path d="M15 42 C15 34 15 26 15 10" stroke="#222" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
    {/* Leaf 1 – bottom */}
    <path d="M15 38 C11 35 5 31 5 25 C10 27 15 32 15 38Z" fill="#222"/>
    {/* Leaf 2 */}
    <path d="M15 31 C11 27 5 22 6 15 C11 18 15 24 15 31Z" fill="#222"/>
    {/* Leaf 3 */}
    <path d="M15 23 C12 18 9 12 12 6 C15 9 16 16 15 23Z" fill="#222"/>
    {/* Leaf 4 – top */}
    <path d="M15 15 C14 11 15 6 19 3 C19 7 17 12 15 15Z" fill="#222"/>
    {/* Small berry at bottom */}
    <circle cx="15" cy="41" r="1.5" fill="#222"/>
  </svg>
);

const LaurelRight = () => (
  <svg width="30" height="44" viewBox="0 0 30 44" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ transform: 'scaleX(-1)' }}>
    <path d="M15 42 C15 34 15 26 15 10" stroke="#222" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
    <path d="M15 38 C11 35 5 31 5 25 C10 27 15 32 15 38Z" fill="#222"/>
    <path d="M15 31 C11 27 5 22 6 15 C11 18 15 24 15 31Z" fill="#222"/>
    <path d="M15 23 C12 18 9 12 12 6 C15 9 16 16 15 23Z" fill="#222"/>
    <path d="M15 15 C14 11 15 6 19 3 C19 7 17 12 15 15Z" fill="#222"/>
    <circle cx="15" cy="41" r="1.5" fill="#222"/>
  </svg>
);

function GuestControl() {
  const [guests, setGuests] = useState(2);
  const [isOpen, setIsOpen] = useState(false);
  return <div className="booking-guests">
    <button className="booking-guests__trigger" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
      <span><strong>GUESTS</strong><em>{guests} guests</em></span><span aria-hidden="true">⌄</span>
    </button>
    {isOpen && <div className="guest-popover">
      <span><b>Guests</b><small>Ages 13 or above</small></span>
      <div><button disabled={guests === 1} onClick={() => setGuests(guests - 1)} aria-label="Remove guest">−</button><b>{guests}</b><button onClick={() => setGuests(guests + 1)} aria-label="Add guest">+</button></div>
    </div>}
  </div>;
}

function BookingCard() {
  const [reserved, setReserved] = useState(false);
  return <aside className="booking-area">
    <div className="booking-card">
      <div className="promotion"><span className="promotion__icon"><Gift /></span><p>Get 10% off your next stay.<br /><a href="#terms">Terms apply</a></p><button>Claim</button></div>
      <p className="price"><b>₹28,499</b> for 5 nights</p>
      <div className="booking-inputs">
        <button><strong>CHECK-IN</strong><span>10/18/2026</span></button>
        <button><strong>CHECKOUT</strong><span>10/23/2026</span></button>
        <GuestControl />
      </div>
      <p className="cancellation">Free cancellation before <b>17 October</b></p>
      <button className="reserve-button" onClick={() => setReserved(true)}>{reserved ? 'Reserved' : 'Reserve'}</button>
      <p className="no-charge">You won't be charged yet</p>
    </div>
    <a className="report-link" href="#report">Report this listing</a>
  </aside>;
}

const highlights = [
  [Outdoor, 'Outdoor entertainment', 'The pool and alfresco dining are great for summer trips.'],
  [Snowflake, 'Designed for staying cool', 'Beat the heat with the A/C and ceiling fan.'],
  [Key, 'Self check-in', 'You can check in with the building staff.'],
];

const DESCRIPTION = `🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍹, it's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴`;

function ListingDescription() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="listing-description">
      <div className="details-divider" />
      <div className="desc-translation-notice">
        Some info has been automatically translated.{' '}
        <button className="desc-show-original">Show original</button>
      </div>
      <div className={`desc-body${expanded ? ' desc-body--expanded' : ''}`}>
        <p className="desc-text">{DESCRIPTION}</p>
        {!expanded && <div className="desc-fade" />}
      </div>
      <button
        className="desc-show-more"
        onClick={() => setExpanded(prev => !prev)}
        aria-expanded={expanded}
      >
        {expanded ? 'Show less' : 'Show more'}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
          style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
        >
          <path d="M2 4l4 4 4-4" stroke="#222" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className="details-divider" />
    </div>
  );
}


export const ListingDetails = () => <section className="listing-details">
  <div className="listing-main">
    <h2>Entire serviced apartment in Candolim, India</h2>
    <p className="listing-summary">3 guests · 1 bedroom · 1 bed · 1 bathroom</p>
    <div className="guest-favourite">
      <div className="guest-fav-badge">
        <LaurelLeft />
        <div className="guest-fav-badge-text">
          <span>Guest</span>
          <span>favourite</span>
        </div>
        <LaurelRight />
      </div>
      <p className="guest-fav-desc">One of the most loved homes on Airbnb,<br />according to guests</p>
      <div className="favourite-score">
        <b>4.95</b>
        <span>★★★★★</span>
      </div>
      <div className="favourite-divider" />
      <div className="favourite-reviews">
        <b>19</b>
        <span>Reviews</span>
      </div>
    </div>
    <div className="host-row"><div className="host-avatar">M</div><div><b>Hosted by Mirashya Homes</b><span>2 years hosting</span></div></div>
    <div className="details-divider" />
    <div className="highlights">
      {highlights.map(([HighlightIcon, title, description]) => <div className="highlight" key={title}><HighlightIcon /><div><h3>{title}</h3><p>{description}</p></div></div>)}
    </div>
    <ListingDescription />
  </div>
  <BookingCard />
</section>;
