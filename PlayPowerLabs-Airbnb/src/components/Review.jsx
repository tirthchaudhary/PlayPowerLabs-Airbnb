import React, { useState } from 'react';
import { mockListing } from '../data/listingData';

const LEFT_WING = 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/059619e1-1751-42dd-84e4-50881483571a.png?im_w=120';
const RIGHT_WING = 'https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/33b80859-e87e-4c86-841c-645c786ba4c1.png?im_w=120';

const REVIEW_CARDS = [
	{ name: 'Amit', tenure: '2 months on Airbnb', date: '1 week ago', image: '', comment: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.' },
	{ name: 'Aheesh', tenure: '3 years on Airbnb', date: '2 weeks ago', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80', comment: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.' },
	{ name: 'Samiksha', tenure: '8 months on Airbnb', date: 'May 2026', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80', comment: 'the host nitish was really great help' },
	{ name: 'Vedant', tenure: '4 years on Airbnb', date: 'May 2026', image: '', comment: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine.' },
	{ name: 'Vaibhav S', tenure: '3 years on Airbnb', date: 'May 2026', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80', comment: "Great great experience living out there, can't expect more , will always look for it in the future and will recommend my friends too." },
	{ name: 'Mohd', tenure: '5 years on Airbnb', date: 'May 2026', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80', comment: 'Great place. Exactly as described in the listing.' },
];

const CategoryIcon = ({ type }) => {
	if (type === 'Cleanliness') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M10 25c-2-3-2-7 0-10l4-6h5l-1 5 5 3v8H10Z" /><path d="M14 9 12 5h7l1 4M21 13l3-3M24 11l2 2" /></svg>;
	if (type === 'Accuracy') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="10" /><path d="m11 16 3 3 7-7" /></svg>;
	if (type === 'Check-in') return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="12" cy="13" r="5" /><path d="m16 17 8 8M21 22l3-3M23 24l3-3M12 11v4M10 13h4" /></svg>;
	if (type === 'Communication') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 8h18v13H14l-5 5v-5H7V8Z" /></svg>;
	if (type === 'Location') return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="m5 8 8-2 7 2 7-2v18l-7 2-7-2-8 2V8Z" /><path d="M13 6v18M20 8v18" /></svg>;
	return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M7 11h13l6 6-10 10-9-9V11Z" /><circle cx="12" cy="15" r="1.5" /></svg>;
};

function ReviewCard({ review }) {
	const [expanded, setExpanded] = useState(false);
	const isLong = review.comment.length > 150;

	return (
		<article className="review-card">
			<div className="review-card-header">
				{review.image ? <img src={review.image} alt="" /> : <span className="review-avatar-fallback">{review.name[0]}</span>}
				<div>
					<h4>{review.name}</h4>
					<p>{review.tenure}</p>
				</div>
			</div>
			<div className="review-card-meta"><span aria-label="5 stars">★★★★★</span><i>·</i><time>{review.date}</time></div>
			<p className={`review-card-comment${expanded ? ' review-card-comment--expanded' : ''}`}>{review.comment}</p>
			{isLong && <button className="review-show-more" onClick={() => setExpanded(value => !value)}>{expanded ? 'Show less' : 'Show more'}</button>}
		</article>
	);
}

export function Review() {
	return (
			<>
				<section id="reviews" className="review" aria-label="Guest favourite">
					<div className="review-badge">
						<img className="review-wing review-wing--left" src={LEFT_WING} alt="" />
						<div className="review-score">4.95</div>
						<img className="review-wing review-wing--right" src={RIGHT_WING} alt="" />
					</div>
					<h3 className="review-title">Guest favourite</h3>
					<p className="review-description">
						This home is a guest favourite based on ratings, reviews and reliability
					</p>
				</section>

				<section className="review-breakdown" aria-label="Review ratings">
					<a className="review-breakdown-link" href="#reviews-work">How reviews work</a>
					<div className="review-breakdown-grid">
						<div className="overall-rating">
							<h4>Overall rating</h4>
							{[5, 4, 3, 2, 1].map((rating) => (
								<div className="rating-bar-row" key={rating}>
									<span>{rating}</span>
									<div className="rating-bar"><span className={rating === 5 ? 'rating-bar-fill' : ''} /></div>
								</div>
							))}
						</div>
						{mockListing.ratingCategories.map((category) => (
							<div className="rating-category" key={category.name}>
								<h4>{category.name}</h4>
								<strong>{category.score.toFixed(1)}</strong>
								<CategoryIcon type={category.name} />
							</div>
						))}
					</div>
				</section>

				<section className="review-list" aria-label="Guest reviews">
					<h3 className="review-list-title">Reviews</h3>
					<div className="review-list-grid">
						{REVIEW_CARDS.map((review) => <ReviewCard key={review.name} review={review} />)}
					</div>
					<button className="show-all-reviews">Show all 19 reviews</button>
				</section>
			</>
	);
}
