import React, { useState } from 'react';
import { Lightbox } from './Lightbox';

const BackIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>;
const ShareIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 15V3M8 7l4-4 4 4M5 13v7h14v-7" /></svg>;
const HeartIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.8c0 5.5-8.8 10.3-8.8 10.3S3.2 14.3 3.2 8.8A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" /></svg>;

export function ImagesScrollable({ photos, onBack }) {
	const [lightboxIndex, setLightboxIndex] = useState(null);
	const categories = [
		['living-1', 'Living room 1'], ['living-2', 'Living room 2'], ['kitchen', 'Full kitchen'],
		['bedroom', 'Bedroom'], ['bathroom', 'Full bathroom'], ['gym', 'Gym'], ['exterior', 'Exterior'], ['pool', 'Pool'],
	];
	const tourItems = categories.map(([category, title]) => ({
		title,
		photo: photos.find((item) => item.category === category) || photos[0],
	}));
	const roomSections = categories.map(([category, title]) => ({
		category,
		title,
		photos: photos.filter((item) => item.category === category),
	})).filter((section) => section.photos.length > 0);
	const additionalPhotos = photos.slice(5, 11);

	return (
		<div className="photo-tour-page">
			<header className="photo-tour-header">
				<button className="photo-tour-back" onClick={onBack} aria-label="Back to listing"><BackIcon /></button>
				<h1>Photo tour</h1>
				<div className="photo-tour-actions">
					<button aria-label="Share photo tour"><ShareIcon /></button>
					<button aria-label="Save photo tour"><HeartIcon /></button>
				</div>
			</header>
			<main className="photo-tour-content">
				<div className="photo-tour-grid">
					{tourItems.map(({ title, photo }) => (
						<article className="photo-tour-item" key={title}>
							<button className="photo-tour-image-button" onClick={() => setLightboxIndex(photos.indexOf(photo))} aria-label={`Open ${title} photo`}><img src={photo.url} alt={photo.alt} /></button>
							<h2>{title}</h2>
						</article>
					))}
					<article className="photo-tour-item">
						<img src={photos[8]?.url || photos[0]?.url} alt="Additional property photo" />
						<h2>Additional<br />photos</h2>
					</article>
				</div>
				<div className="photo-tour-room-sections">
					{roomSections.map((section) => (
						<section className="photo-tour-room" key={section.category}>
							<div className="photo-tour-room-heading">
								<h2>{section.title}</h2>
								<p>{section.photos[0].description}</p>
							</div>
							<div className="photo-tour-room-photos">
								{section.photos.map((photo) => (
									<figure key={photo.id}>
										<button className="photo-tour-image-button" onClick={() => setLightboxIndex(photos.indexOf(photo))} aria-label={`Open ${section.title} photo`}><img src={photo.url} alt={photo.alt} /></button>
										<figcaption>{photo.description}</figcaption>
									</figure>
								))}
							</div>
						</section>
					))}
				</div>
				<section className="photo-tour-additional" aria-labelledby="additional-photos-title">
					<div className="photo-tour-additional-heading">
						<h2 id="additional-photos-title">Additional photos</h2>
					</div>
					<div className="photo-tour-additional-grid">
						{additionalPhotos.map((photo) => (
							<figure key={photo.id}>
								<button className="photo-tour-image-button" onClick={() => setLightboxIndex(photos.indexOf(photo))} aria-label="Open additional property photo"><img src={photo.url} alt={photo.alt} /></button>
							</figure>
						))}
					</div>
				</section>
			</main>
			{lightboxIndex !== null && <Lightbox photos={photos} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />}
		</div>
	);
}
