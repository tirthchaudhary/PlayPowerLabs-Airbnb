import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Header } from "./components/Header";
import { PropertyHeader } from "./components/PropertyHeader";
import { HeroGrid } from "./components/HeroGrid";
import { ListingDetails } from "./components/ListingDetails";
import { ImagesScrollable } from "./components/ImagesScrollable";
import { Lightbox } from "./components/Lightbox";
import { mockListing } from "./data/listingData";

function App() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [headerVisible, setHeaderVisible] = useState(false);
  const [isPhotoTourRoute, setIsPhotoTourRoute] = useState(() => window.location.pathname === '/photo-tour');
  const heroRef = useRef(null);

  const openPhotoTour = () => {
    window.history.pushState({}, '', '/photo-tour');
    setIsPhotoTourRoute(true);
    window.scrollTo(0, 0);
  };

  const closePhotoTour = () => {
    window.history.pushState({}, '', '/');
    setIsPhotoTourRoute(false);
    window.scrollTo(0, 0);
  };

  const openLightbox = (index) => setLightboxIndex(index);

  useEffect(() => {
    const handlePopState = () => setIsPhotoTourRoute(window.location.pathname === '/photo-tour');
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Show header with fade once the hero photo grid scrolls out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero is NOT intersecting (scrolled past), show header
        setHeaderVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);


  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FFFFFF' }}>
      {isPhotoTourRoute ? <ImagesScrollable photos={mockListing.photos} onBack={closePhotoTour} /> : <>
      {/* Full Width Navbar */}
      <Header scrolledPast={headerVisible} />

      {/* Main Listing Container */}
      <main style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
        {/* Spacer: fills header height when it becomes fixed so content doesn't jump */}
        {headerVisible && <div style={{ height: '80px' }} aria-hidden="true" />}
        {/* Title, Share & Save Bar */}
        <PropertyHeader property={mockListing} />

        {/* 5-Photo Gallery Grid — observed for scroll-aware header */}
        <div id="photos" ref={heroRef}>
          <HeroGrid
            photos={mockListing.photos}
            onOpenPhotoTour={openPhotoTour}
            onOpenLightbox={openLightbox}
          />
        </div>

        {/* Listing information and booking panel */}
        <ListingDetails />
      </main>
      {lightboxIndex !== null && <Lightbox photos={mockListing.photos} activeIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} onChange={setLightboxIndex} />}
      </>}
    </div>
  );
}

export default App;
