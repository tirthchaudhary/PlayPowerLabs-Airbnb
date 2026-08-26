import React, { useState } from 'react';

const SectionIcon = ({ type }) => {
	if (type === 'cancel') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4M16 3v4M4 9h16M9 13l6 6M15 13l-6 6" /></svg>;
	if (type === 'rules') return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="8" r="3" /><path d="m10 10 9 9M16 16l3-3M18 18l3-3M8 6v4M6 8h4" /></svg>;
	return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 4 6v5c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V6l-8-3Z" /><path d="M12 3v18" /></svg>;
};

const thingsToKnow = [
	{ icon: 'cancel', title: 'Cancellation policy', content: <>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.<br /><br />Review this host's full policy for details.</> },
	{ icon: 'rules', title: 'House rules', content: <>Check-in after 2:00 pm<br /><br />Checkout before 11:00 am<br /><br />3 guests maximum</> },
	{ icon: 'safety', title: 'Safety & property', content: <>Carbon monoxide alarm not reported<br /><br />Smoke alarm not reported<br /><br />Exterior security cameras on property</> },
];

export function Lower() {
	return (
		<section className="things-to-know" aria-labelledby="things-to-know-title">
			<h2 id="things-to-know-title">Things to know</h2>
			<div className="things-to-know-grid">
				{thingsToKnow.map((item) => (
					<article className="thing-to-know" key={item.title}>
						<SectionIcon type={item.icon} />
						<h3>{item.title}</h3>
						<p>{item.content}</p>
						<a href={`#${item.icon}`}>Learn more</a>
					</article>
				))}
			</div>
		</section>
	);
}

const nearbyStays = [
	['Beautiful Studio with a view to die for', '₹23,600', '4.91', 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=700&q=80'],
	['NAQAB - 1bhk with private pool', '₹42,218', '4.95', 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=700&q=80'],
	['Greentique Luxury Flat with plunge pool, Calangute', '₹44,506', '4.94', 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80'],
	['The Tropical Studio | 5 mins to Beach', '₹22,824', '4.96', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80'],
	['Luxury Casa Bella 1BHK with plunge pool, Calangute', '₹39,942', '4.95', 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=700&q=80'],
	['Cozy Garden Retreat near Candolim Beach', '₹26,400', '4.88', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80'],
	['Modern Goa Escape with private terrace', '₹31,750', '4.93', 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=80'],
	['Palm View Apartment in North Goa', '₹28,900', '4.90', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80'],
	['Serene Villa with a private pool', '₹51,200', '4.97', 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=700&q=80'],
	['Bright coastal home close to the beach', '₹24,800', '4.89', 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=80'],
];

export function NearbyStays() {
	const [page, setPage] = useState(0);

	return (
		<section className="nearby-stays" aria-labelledby="nearby-stays-title">
			<div className="nearby-stays-header">
				<h2 id="nearby-stays-title">More stays nearby</h2>
				<div className="nearby-stays-navigation">
					<span>{page + 1} / 2</span>
					<button onClick={() => setPage(value => Math.max(value - 1, 0))} disabled={page === 0} aria-label="Previous listings">‹</button>
					<button onClick={() => setPage(value => Math.min(value + 1, 1))} disabled={page === 1} aria-label="Next listings">›</button>
				</div>
			</div>
			<div className="nearby-stays-viewport">
				<div className="nearby-stays-track" style={{ transform: `translateX(-${page * 50}%)` }}>
					{nearbyStays.map(([title, price, rating, image]) => (
						<article className="nearby-stay-card" key={title}>
							<img src={image} alt={title} />
							<h3>{title}</h3>
							<p>{price} <span>★ {rating}</span></p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
