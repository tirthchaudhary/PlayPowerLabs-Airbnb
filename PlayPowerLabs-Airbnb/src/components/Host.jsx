import React from 'react';

const coHosts = [
	{ name: 'Sharath', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
	{ name: 'Aman Dev Pahwa', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
	{ name: 'Maria Karen Priyanka', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80' },
	{ name: 'Simran', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80' },
	{ name: 'Pallavi', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
	{ name: 'Sanyukta', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80' },
	{ name: 'Shruti', image: '' },
	{ name: 'Amisha', image: '' },
];

const ProfileIcon = ({ children }) => <svg viewBox="0 0 24 24" aria-hidden="true">{children}</svg>;

export function Host() {
	return (
		<section className="host-section" aria-labelledby="host-title">
			<h2 id="host-title">Meet your host</h2>
			<div className="host-content">
				<div className="host-primary">
					<div className="host-profile-card">
						<div className="host-profile-main">
							<div className="host-profile-image-wrap">
								<div className="host-listing-avatar" role="img" aria-label="Mirashya Homes profile">MH<span>Mirashya</span></div>
								<span className="host-verified">✓</span>
							</div>
							<h3>Mirashya<br />Homes</h3>
							<p>Host</p>
						</div>
						<div className="host-stats">
							<div><strong>1,463</strong><span>Reviews</span></div>
							<div><strong>4.68★</strong><span>Rating</span></div>
							<div><strong>2</strong><span>Years hosting</span></div>
						</div>
					</div>
					<div className="host-fact"><ProfileIcon><path d="M12 3c-3.1 0-5 2.4-5 5.4 0 3.8 2.4 6.1 5 7.6 2.6-1.5 5-3.8 5-7.6C17 5.4 15.1 3 12 3Z" /><path d="M12 16v5M9 21h6" /></ProfileIcon><span>Born in the 80s</span></div>
					<div className="host-fact"><ProfileIcon><path d="m3 9 9-5 9 5-9 5-9-5Z" /><path d="M6 11v5l6 4 6-4v-5" /></ProfileIcon><span>Where I went to school: NICMAR GOA</span></div>
				</div>

				<div className="host-secondary">
					<h3>Co-Hosts</h3>
					<div className="cohost-grid">
						{coHosts.map((coHost) => (
							<div className="cohost" key={coHost.name}>
								{coHost.image ? <img src={coHost.image} alt="" /> : <span>{coHost.name[0]}</span>}
								<strong>{coHost.name}</strong>
							</div>
						))}
					</div>
					<h3 className="host-details-title">Host details</h3>
					<p className="host-details-copy">Response rate: 100%<br />Responds within an hour</p>
					<button className="become-host-button">Become a host</button>
					<p className="host-protection"><ProfileIcon><path d="M12 3 4 6v5c0 5 3.4 8.3 8 10 4.6-1.7 8-5 8-10V6l-8-3Z" /><path d="M12 7v10" /></ProfileIcon>To help protect your payment, always use Airbnb to send money and communicate with hosts.</p>
				</div>
			</div>
		</section>
	);
}
