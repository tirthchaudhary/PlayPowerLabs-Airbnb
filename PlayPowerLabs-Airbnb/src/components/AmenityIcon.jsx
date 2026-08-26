import React from 'react';

export function AmenityIcon({ name, size = 24, className = '' }) {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className,
    'aria-hidden': 'true',
  };

  switch (name) {
    // Hairdryer (as in screenshot)
    case 'hairdryer':
      return (
        <svg {...props}>
          <path d="M4 8h8a4 4 0 0 1 4 4v1a4 4 0 0 1-4 4H8" />
          <path d="M4 6v8" />
          <path d="M8 17v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4" />
          <line x1="16" y1="12" x2="20" y2="12" />
        </svg>
      );

    // Cleaning products (spray bottle as in screenshot)
    case 'cleaning':
      return (
        <svg {...props}>
          <path d="M7 11h10v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V11Z" />
          <path d="M10 11V7h4v4" />
          <path d="M10 7H7a1 1 0 0 1-1-1V5h8v1a1 1 0 0 1-1 1h-1" />
          <path d="M6 5 4 8" />
          <circle cx="12" cy="16" r="1.5" />
        </svg>
      );

    // Shampoo bottle (as in screenshot)
    case 'shampoo':
      return (
        <svg {...props}>
          <rect x="7" y="9" width="10" height="13" rx="2" />
          <path d="M10 9V5h4v4" />
          <path d="M9 5h6" />
          <path d="M12 2v3" />
        </svg>
      );

    // Hot water (container/tub with steam waves as in screenshot)
    case 'hotwater':
      return (
        <svg {...props}>
          <path d="M4 14h16v4a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-4Z" />
          <path d="M7 4c0 2-1 3-1 4" />
          <path d="M12 3c0 2-1 3-1 5" />
          <path d="M17 4c0 2-1 3-1 4" />
          <path d="M4 14v-2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2" />
        </svg>
      );

    // Shower gel / soap bottle with bubbles (as in screenshot)
    case 'showergel':
      return (
        <svg {...props}>
          <rect x="7" y="10" width="10" height="12" rx="2" />
          <path d="M10 10V6h4v4" />
          <path d="M10 6h-2" />
          <circle cx="19" cy="6" r="1.5" />
          <circle cx="21" cy="11" r="1" />
        </svg>
      );

    // Washing machine (square machine with circular drum window as in screenshot)
    case 'washer':
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <circle cx="12" cy="13" r="5" />
          <circle cx="12" cy="13" r="2" />
          <line x1="7" y1="6" x2="9" y2="6" />
          <circle cx="16" cy="6" r="0.75" />
        </svg>
      );

    // Hangers (triangle coat hanger with hook as in screenshot)
    case 'hangers':
      return (
        <svg {...props}>
          <path d="M12 6a2 2 0 1 0-2-2" />
          <path d="m12 8 9 9a1.5 1.5 0 0 1-1 2.5H4a1.5 1.5 0 0 1-1-2.5l9-9Z" />
        </svg>
      );

    // Bed linen
    case 'bedlinen':
      return (
        <svg {...props}>
          <path d="M3 7h18v12H3z" />
          <path d="M3 13h18" />
          <path d="M8 7v6" />
          <path d="M16 7v6" />
        </svg>
      );

    // Room-darkening blinds
    case 'blinds':
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="11" x2="20" y2="11" />
          <line x1="4" y1="15" x2="20" y2="15" />
          <line x1="16" y1="15" x2="16" y2="19" />
          <circle cx="16" cy="20" r="1" />
        </svg>
      );

    // Iron
    case 'iron':
      return (
        <svg {...props}>
          <path d="M3 18h16a3 3 0 0 0 3-3c0-4-3-7-7-7H4a1 1 0 0 0-1 1v9Z" />
          <path d="M6 8V5h8" />
          <circle cx="11" cy="14" r="1" />
        </svg>
      );

    // Wardrobe / clothes storage
    case 'wardrobe':
      return (
        <svg {...props}>
          <rect x="4" y="3" width="16" height="18" rx="1" />
          <line x1="12" y1="3" x2="12" y2="21" />
          <line x1="9" y1="12" x2="9" y2="14" />
          <line x1="15" y1="12" x2="15" y2="14" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      );

    // Cot / crib
    case 'crib':
      return (
        <svg {...props}>
          <path d="M4 6v14" />
          <path d="M20 6v14" />
          <rect x="4" y="9" width="16" height="8" rx="1" />
          <line x1="8" y1="9" x2="8" y2="17" />
          <line x1="12" y1="9" x2="12" y2="17" />
          <line x1="16" y1="9" x2="16" y2="17" />
        </svg>
      );

    // TV
    case 'tv':
      return (
        <svg {...props}>
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="m8 20 4-1 4 1" />
          <line x1="12" y1="19" x2="12" y2="16" />
        </svg>
      );

    // Air conditioning
    case 'ac':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="8" rx="1.5" />
          <line x1="6" y1="10" x2="18" y2="10" />
          <path d="M6 16c1 1 2 2 3 1s1-2 2-1" />
          <path d="M11 16c1 1 2 2 3 1s1-2 2-1" />
          <path d="M16 16c1 1 2 2 3 1s1-2 2-1" />
        </svg>
      );

    // Ceiling fan
    case 'fan':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 9C12 5 15 3 18 3c0 3-2 6-6 6Z" />
          <path d="M9 12C5 12 3 9 3 6c3 0 6 2 6 6Z" />
          <path d="M12 15c0 4-3 6-6 6 0-3 2-6 6-6Z" />
          <path d="M15 12c4 0 6 3 6 6-3 0-6-2-6-6Z" />
        </svg>
      );

    // Security camera
    case 'camera':
      return (
        <svg {...props}>
          <path d="M3 9h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Z" />
          <path d="m17 11 4-2v6l-4-2" />
          <path d="M7 15v4a2 2 0 0 1-2 2H3" />
        </svg>
      );

    // Carbon monoxide alarm
    case 'co-alarm':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 10a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2" />
          <circle cx="15" cy="12" r="2" />
        </svg>
      );

    // Smoke alarm
    case 'smoke-alarm':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="3" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="21" />
          <line x1="3" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="21" y2="12" />
        </svg>
      );

    // Wifi
    case 'wifi':
      return (
        <svg {...props}>
          <path d="M5 9a11 11 0 0 1 14 0" />
          <path d="M8.5 13a6 6 0 0 1 7 0" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
        </svg>
      );

    // Dedicated workspace
    case 'workspace':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="11" rx="1.5" />
          <line x1="2" y1="19" x2="22" y2="19" />
          <line x1="7" y1="19" x2="9" y2="15" />
          <line x1="17" y1="19" x2="15" y2="15" />
        </svg>
      );

    // Kitchen
    case 'kitchen':
      return (
        <svg {...props}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <line x1="12" y1="10" x2="12" y2="20" />
          <circle cx="7.5" cy="7" r="1.5" />
          <circle cx="16.5" cy="7" r="1.5" />
        </svg>
      );

    // Fridge
    case 'fridge':
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <line x1="5" y1="10" x2="19" y2="10" />
          <line x1="8" y1="6" x2="8" y2="8" />
          <line x1="8" y1="13" x2="8" y2="16" />
        </svg>
      );

    // Freezer
    case 'freezer':
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <line x1="5" y1="9" x2="19" y2="9" />
          <path d="M12 12v6M9 15h6" />
        </svg>
      );

    // Microwave
    case 'microwave':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <rect x="6" y="8" width="8" height="8" rx="1" />
          <line x1="17" y1="8" x2="17.01" y2="8" />
          <line x1="17" y1="11" x2="17.01" y2="11" />
          <line x1="17" y1="14" x2="17.01" y2="14" />
        </svg>
      );

    // Cooking basics
    case 'cooking':
      return (
        <svg {...props}>
          <path d="M4 11h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-6Z" />
          <path d="M3 11h18" />
          <path d="M12 4v4" />
          <path d="M7 8c1-1 3-2 5-2s4 1 5 2" />
        </svg>
      );

    // Cutlery / Crockery and cutlery
    case 'cutlery':
      return (
        <svg {...props}>
          <path d="M18 2v8a2 2 0 0 1-2 2h-1v10" />
          <path d="M15 2v8" />
          <path d="M6 2v6a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V2" />
          <line x1="8" y1="10" x2="8" y2="22" />
        </svg>
      );

    // Kettle
    case 'kettle':
      return (
        <svg {...props}>
          <path d="M6 10a6 6 0 0 0 12 0V9a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1Z" />
          <path d="M18 10h3l-1 5h-2" />
          <path d="M6 12 3 9" />
          <path d="M10 7V4h4v3" />
          <path d="M5 20h14" />
        </svg>
      );

    // Coffee
    case 'coffee':
      return (
        <svg {...props}>
          <path d="M4 7h13v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V7Z" />
          <path d="M17 9h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2" />
          <line x1="3" y1="21" x2="19" y2="21" />
        </svg>
      );

    // Wine glasses
    case 'wine':
      return (
        <svg {...props}>
          <path d="M8 22h8" />
          <path d="M12 15v7" />
          <path d="M6 4h12a5 5 0 0 1-5 7.5V15h-2v-3.5A5 5 0 0 1 6 4Z" />
        </svg>
      );

    // Toaster
    case 'toaster':
      return (
        <svg {...props}>
          <rect x="4" y="8" width="16" height="12" rx="3" />
          <line x1="8" y1="5" x2="8" y2="8" />
          <line x1="16" y1="5" x2="16" y2="8" />
          <line x1="18" y1="12" x2="20" y2="12" />
        </svg>
      );

    // Blender
    case 'blender':
      return (
        <svg {...props}>
          <path d="M8 4h8l-1.5 10h-5L8 4Z" />
          <path d="M10 4V2h4v2" />
          <rect x="7" y="14" width="10" height="7" rx="2" />
          <circle cx="12" cy="17.5" r="1" />
        </svg>
      );

    // Cooker / stove
    case 'stove':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="8.5" cy="8.5" r="2.5" />
          <circle cx="15.5" cy="8.5" r="2.5" />
          <circle cx="8.5" cy="15.5" r="2.5" />
          <circle cx="15.5" cy="15.5" r="2.5" />
        </svg>
      );

    // Private entrance
    case 'door':
      return (
        <svg {...props}>
          <path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" />
          <line x1="3" y1="21" x2="21" y2="21" />
          <circle cx="15" cy="12" r="1" />
        </svg>
      );

    // Patio or balcony
    case 'balcony':
      return (
        <svg {...props}>
          <path d="M4 10h16v10H4z" />
          <path d="M8 10v10M12 10v10M16 10v10" />
          <path d="M2 10h20" />
          <path d="M6 4h12" />
        </svg>
      );

    // Outdoor dining area
    case 'outdoor-dining':
      return (
        <svg {...props}>
          <circle cx="12" cy="7" r="4" />
          <path d="M12 11v10" />
          <path d="M5 14h14" />
          <path d="M4 18h3M17 18h3" />
        </svg>
      );

    // Free parking on premises
    case 'parking':
      return (
        <svg {...props}>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="M9 16V8h4a3 3 0 0 1 0 6H9" />
        </svg>
      );

    // Pool
    case 'pool':
      return (
        <svg {...props}>
          <path d="M3 17c2 0 3-1 4.5-1s2.5 1 4.5 1 3-1 4.5-1 2.5 1 4.5 1" />
          <path d="M3 21c2 0 3-1 4.5-1s2.5 1 4.5 1 3-1 4.5-1 2.5 1 4.5 1" />
          <path d="M6 7v6M10 7v6" />
          <path d="M6 9h4" />
          <path d="M6 7a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2" />
        </svg>
      );

    // Hot tub
    case 'hottub':
      return (
        <svg {...props}>
          <path d="M4 14h16a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-1a3 3 0 0 1 3-3Z" />
          <path d="M7 6c0 2-1 3-1 4" />
          <path d="M12 5c0 2-1 3-1 5" />
          <path d="M17 6c0 2-1 3-1 4" />
        </svg>
      );

    // Gym
    case 'gym':
      return (
        <svg {...props}>
          <path d="m6.5 6.5 11 11" />
          <path d="m21 15-4-4 2-2 4 4-2 2Z" />
          <path d="m7 5-4-4 2-2 4 4-2 2Z" />
          <path d="m14 18-3-3" />
          <path d="m9 9-3-3" />
        </svg>
      );

    // Pets allowed
    case 'pets':
      return (
        <svg {...props}>
          <circle cx="12" cy="15" r="4" />
          <circle cx="6.5" cy="10.5" r="2" />
          <circle cx="17.5" cy="10.5" r="2" />
          <circle cx="9" cy="5.5" r="1.8" />
          <circle cx="15" cy="5.5" r="1.8" />
        </svg>
      );

    // Cleaning available during stay
    case 'cleaning-service':
      return (
        <svg {...props}>
          <path d="m12 3 1.5 3.5L17 8l-3.5 1.5L12 13l-1.5-3.5L7 8l3.5-1.5L12 3Z" />
          <path d="m5 16 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z" />
          <path d="m19 15 .8 1.6 1.7.8-1.7.8-.8 1.6-.8-1.6-1.7-.8 1.7-.8.8-1.6Z" />
        </svg>
      );

    // Long-term stays allowed (calendar)
    case 'calendar':
      return (
        <svg {...props}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="8" y1="3" x2="8" y2="6" />
          <line x1="16" y1="3" x2="16" y2="6" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      );

    // Self check-in / keypad
    case 'keypad':
      return (
        <svg {...props}>
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <circle cx="9" cy="7" r="1" fill="currentColor" />
          <circle cx="12" cy="7" r="1" fill="currentColor" />
          <circle cx="15" cy="7" r="1" fill="currentColor" />
          <circle cx="9" cy="11" r="1" fill="currentColor" />
          <circle cx="12" cy="11" r="1" fill="currentColor" />
          <circle cx="15" cy="11" r="1" fill="currentColor" />
          <circle cx="9" cy="15" r="1" fill="currentColor" />
          <circle cx="12" cy="15" r="1" fill="currentColor" />
          <circle cx="15" cy="15" r="1" fill="currentColor" />
        </svg>
      );

    default:
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l3 3" />
        </svg>
      );
  }
}
