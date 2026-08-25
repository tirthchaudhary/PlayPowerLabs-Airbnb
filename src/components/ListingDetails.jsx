import React, { useState } from 'react';
import '../styles/ListingDetails.css';
import { mockListing } from '../data/listingData';
import { Review } from './Review';
import { Map } from './Map';
import { Host } from './Host';
import { Lower, NearbyStays } from './Lower';
// using external Unsplash images for the "Where you'll sleep" section

const Icon = ({ children, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

const Snowflake = () => <Icon><path d="M12 2v20M4.9 6l14.2 12M4.9 18 19.1 6M2 12h20" /></Icon>;
const Key = () => <Icon><circle cx="8" cy="15" r="4" /><path d="m11 12 8-8M15 8l2 2M17 6l2 2" /></Icon>;
const Outdoor = () => <Icon><path d="M4 20h16v-6H4v6Z" /><path d="M7 14c0-4 2.3-7 5-9 2.7 2 5 5 5 9M12 5v9M9 10l3 2 3-2" /></Icon>;
const Gift = () => <Icon size={21}><rect x="3" y="8" width="18" height="13" rx="2" /><path d="M12 8v13M3 12h18M12 8H7.5a2.5 2.5 0 1 1 2.5-3.5L12 8Zm0 0h4.5A2.5 2.5 0 1 0 14 4.5L12 8Z" /></Icon>;

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

function WhereYoullSleep() {
  return (
    <div className="where-sleep">
      <h3>Where you'll sleep</h3>
      <div className="sleep-grid">
        <div className="sleep-card">
          <div className="sleep-image">
            <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" alt="Bedroom" />
          </div>
          <div className="sleep-rule" />
          <div className="sleep-meta">
            <h4>Bedroom</h4>
            <p>1 double bed</p>
          </div>
        </div>
        <div className="sleep-card">
          <div className="sleep-image">
            <img src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80" alt="Living room" />
          </div>
          <div className="sleep-rule" />
          <div className="sleep-meta">
            <h4>Living room</h4>
            <p>1 sofa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function AmenitiesSection() {
  const items = mockListing.amenities.slice(0, 8);
  return (
    <div id="amenities" className="amenities">
      <h3>What this place offers</h3>
      <div className="amenities-grid">
        {items.map((a) => (
          <div className="amenity-item" key={a.id}>
            <svg className="amenity-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="3"/><path d="M21 21l-4.35-4.35"/></svg>
            <div className="amenity-text">{a.name}</div>
          </div>
        ))}
      </div>
      <button className="amenities-button">Show all {mockListing.amenities.length} amenities</button>
    </div>
  );
}

function CalendarSection() {
  return (
    <div className="calendar-section">
      <h3>5 nights in Candolim</h3>
      <p className="calendar-sub">18 Oct 2026 - 23 Oct 2026</p>
      <div className="calendar-months">
        <div className="cal-month">
          <div className="cal-month-header">October 2026</div>
          <div className="cal-grid">
            <div className="cal-weeknames">S</div><div className="cal-weeknames">M</div><div className="cal-weeknames">T</div><div className="cal-weeknames">W</div><div className="cal-weeknames">T</div><div className="cal-weeknames">F</div><div className="cal-weeknames">S</div>
            {/* leading blanks */}
            <div className="cal-day empty" />
            <div className="cal-day empty" />
            <div className="cal-day empty" />
            <div className="cal-day">1</div>
            <div className="cal-day">2</div>
            <div className="cal-day">3</div>
            <div className="cal-day">4</div>

            <div className="cal-day">5</div>
            <div className="cal-day">6</div>
            <div className="cal-day">7</div>
            <div className="cal-day">8</div>
            <div className="cal-day">9</div>
            <div className="cal-day">10</div>
            <div className="cal-day">11</div>

            <div className="cal-day">12</div>
            <div className="cal-day">13</div>
            <div className="cal-day">14</div>
            <div className="cal-day">15</div>
            <div className="cal-day">16</div>
            <div className="cal-day">17</div>
            <div className="cal-day cal-day--start">18</div>

            <div className="cal-day cal-day--inrange">19</div>
            <div className="cal-day cal-day--inrange">20</div>
            <div className="cal-day cal-day--inrange">21</div>
            <div className="cal-day cal-day--inrange">22</div>
            <div className="cal-day cal-day--end">23</div>
            <div className="cal-day">24</div>

            <div className="cal-day">25</div>
            <div className="cal-day">26</div>
            <div className="cal-day">27</div>
            <div className="cal-day">28</div>
            <div className="cal-day">29</div>
            <div className="cal-day">30</div>
            <div className="cal-day">31</div>
          </div>
        </div>

        <div className="cal-month">
          <div className="cal-month-header">November 2026</div>
          <div className="cal-grid">
            <div className="cal-weeknames">S</div><div className="cal-weeknames">M</div><div className="cal-weeknames">T</div><div className="cal-weeknames">W</div><div className="cal-weeknames">T</div><div className="cal-weeknames">F</div><div className="cal-weeknames">S</div>
            {/* Nov days (sparse preview) */}
            <div className="cal-day">1</div>
            <div className="cal-day">2</div>
            <div className="cal-day">3</div>
            <div className="cal-day">4</div>
            <div className="cal-day">5</div>
            <div className="cal-day">6</div>

            <div className="cal-day">7</div>
            <div className="cal-day">8</div>
            <div className="cal-day">9</div>
            <div className="cal-day">10</div>
            <div className="cal-day">11</div>
            <div className="cal-day">12</div>
            <div className="cal-day">13</div>

            <div className="cal-day">14</div>
            <div className="cal-day">15</div>
            <div className="cal-day">16</div>
            <div className="cal-day">17</div>
            <div className="cal-day">18</div>
            <div className="cal-day">19</div>
            <div className="cal-day">20</div>

            <div className="cal-day cal-muted">21</div>
            <div className="cal-day cal-muted">22</div>
            <div className="cal-day cal-muted">23</div>
            <div className="cal-day cal-muted">24</div>
            <div className="cal-day cal-muted">25</div>
            <div className="cal-day cal-muted">26</div>
            <div className="cal-day cal-muted">27</div>
          </div>
        </div>
      </div>

      <div className="calendar-actions">
        <button className="cal-clear">Clear dates</button>
      </div>
    </div>
  );
}


export const ListingDetails = () => <section className="listing-details">
  <div className="listing-layout">
    <div className="listing-main">
    <h2>Entire serviced apartment in Candolim, India</h2>
    <p className="listing-summary">3 guests · 1 bedroom · 1 bed · 1 bathroom</p>
    <div className="host-row"><div className="host-avatar">M</div><div><b>Hosted by Mirashya Homes</b><span>2 years hosting</span></div></div>
    <div className="details-divider" />
    <div className="highlights">
      {highlights.map(([HighlightIcon, title, description]) => <div className="highlight" key={title}><HighlightIcon /><div><h3>{title}</h3><p>{description}</p></div></div>)}
    </div>
    <ListingDescription />
    <WhereYoullSleep />
    <AmenitiesSection />
    <div className="details-divider" />
    <CalendarSection />
    </div>
    <BookingCard />
  </div>
  <div className="details-divider details-divider--full" />
  <Review />
  <div className="details-divider details-divider--full" />
  <Map />
  <div className="details-divider details-divider--full" />
  <Host />
  <div className="details-divider details-divider--full" />
  <Lower />
  <div className="details-divider details-divider--full" />
  <NearbyStays />
</section>;
