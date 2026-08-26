import React, { useState } from 'react';

export function Map() {
	const [zoom, setZoom] = useState(1);
	const [neighborhoodExpanded, setNeighborhoodExpanded] = useState(false);

	return (
		<section id="location" className="location-map" aria-labelledby="location-title">
			<h2 id="location-title">Where you'll be</h2>
			<p className="location-name">Candolim, Goa, India</p>
			<div className="map-frame">
				<div className="map-surface" style={{ transform: `scale(${zoom})` }} aria-hidden="true">
					<div className="map-water" />
					<div className="map-park map-park--top" />
					<div className="map-park map-park--right" />
				</div>
				<button className="map-control map-search" aria-label="Search this area">
					<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="5.5" /><path d="m15 15 4 4" /></svg>
				</button>
				<div className="map-zoom-controls" aria-label="Map zoom controls">
					<button className="map-control" onClick={() => setZoom(value => Math.min(value + 0.1, 1.3))} aria-label="Zoom in">+</button>
					<button className="map-control" onClick={() => setZoom(value => Math.max(value - 0.1, 0.8))} aria-label="Zoom out">−</button>
				</div>
				<div className="map-home-marker" aria-label="Property location">
					<svg viewBox="0 0 32 32" aria-hidden="true"><path d="m8 14 8-7 8 7v11H8V14Z" /><path d="M13 25v-6h6v6" /></svg>
				</div>
			</div>
			<p className="location-note">Exact location will be provided after booking.</p>
			<section className="neighborhood-highlights" aria-labelledby="neighborhood-title">
				<h2 id="neighborhood-title">Neighbourhood highlights</h2>
				<p>
					Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafes, and popular attractions.
					{neighborhoodExpanded && ' Enjoy nearby restaurants, beach shacks, and local shops just minutes from the apartment.'}
				</p>
				<button className="neighborhood-more" onClick={() => setNeighborhoodExpanded(value => !value)} aria-expanded={neighborhoodExpanded}>
					{neighborhoodExpanded ? 'Show less' : 'Show more'}
					<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m5 3 5 5-5 5" /></svg>
				</button>
			</section>
		</section>
	);
}
