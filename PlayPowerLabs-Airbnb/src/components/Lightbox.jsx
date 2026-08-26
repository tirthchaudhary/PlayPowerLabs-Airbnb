import React, { useEffect, useRef } from 'react';

const CloseIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>;
const ArrowIcon = ({ direction }) => <svg viewBox="0 0 24 24" aria-hidden="true"><path d={direction === 'next' ? 'm9 5 7 7-7 7' : 'm15 5-7 7 7 7'} /></svg>;

export function Lightbox({ photos, activeIndex, onClose, onChange }) {
  const closeButtonRef = useRef(null);
  const openerRef = useRef(null);
  const activeIndexRef = useRef(activeIndex);
  const photo = photos[activeIndex];

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    openerRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onChange((activeIndexRef.current - 1 + photos.length) % photos.length);
      if (event.key === 'ArrowRight') onChange((activeIndexRef.current + 1) % photos.length);
      if (event.key === 'Tab') {
        const focusable = [...document.querySelectorAll('.lightbox button')];
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      openerRef.current?.focus?.();
    };
  }, [onChange, onClose, photos.length]);

  if (!photo) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={onClose}>
      <div className="lightbox-toolbar">
        <span>{activeIndex + 1} / {photos.length}</span>
        <button ref={closeButtonRef} onClick={onClose} aria-label="Close photo viewer"><CloseIcon /></button>
      </div>
      <button className="lightbox-arrow lightbox-arrow--previous" onClick={(event) => { event.stopPropagation(); onChange((activeIndex - 1 + photos.length) % photos.length); }} aria-label="Previous photo"><ArrowIcon direction="previous" /></button>
      <img className="lightbox-image" src={photo.url} alt={photo.alt} onClick={(event) => event.stopPropagation()} />
      <button className="lightbox-arrow lightbox-arrow--next" onClick={(event) => { event.stopPropagation(); onChange((activeIndex + 1) % photos.length); }} aria-label="Next photo"><ArrowIcon direction="next" /></button>
    </div>
  );
}
