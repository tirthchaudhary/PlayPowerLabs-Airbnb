import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Header } from "./components/Header";
import { PropertyHeader } from "./components/PropertyHeader";
import { HeroGrid } from "./components/HeroGrid";
import { ListingDetails } from "./components/ListingDetails";
import { mockListing } from "./data/listingData";

function App() {
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const heroRef = useRef(null);

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
      {/* Full Width Navbar */}
      <Header scrolledPast={headerVisible} />

      {/* Main Listing Container */}
      <main style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px' }}>
        {/* Spacer: fills header height when it becomes fixed so content doesn't jump */}
        {headerVisible && <div style={{ height: '96px' }} aria-hidden="true" />}
        {/* Title, Share & Save Bar */}
        <PropertyHeader property={mockListing} />

        {/* 5-Photo Gallery Grid — observed for scroll-aware header */}
        <div ref={heroRef}>
          <HeroGrid
            photos={mockListing.photos}
            onOpenPhotoTour={() => setIsPhotoTourOpen(true)}
            onOpenLightbox={(index) => console.log('Open Lightbox at index', index)}
          />
        </div>

        {/* Listing information and booking panel */}
        <ListingDetails />
      </main>
    </div>
  );
}

export default App;
