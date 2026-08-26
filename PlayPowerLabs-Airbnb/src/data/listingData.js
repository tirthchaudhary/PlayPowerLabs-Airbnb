export const mockListing = {
    id: 'mirashya-ug10',
    title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
    subtitle: 'Entire serviced apartment in Candolim, India',
    location: 'Candolim, Goa, India',
    guestsCount: 16,
    bedroomsCount: 1,
    bedsCount: 1,
    bathroomsCount: 1.5,
    rating: 4.92,
    reviewsCount: 48,
    isGuestFavorite: true,
    pricePerNight: 4250,
    discountPercentage: 10,
    promoCode: 'NEXTSTAY10',
    cleaningFee: 500,
    serviceFee: 350,
    description: `Welcome to Mirashya UG10, a modern, luxurious 1BHK serviced apartment located in the heart of Candolim, North Goa. Featuring a private heated romantic Jacuzzi, plush warm interiors, dedicated high-speed Wi-Fi, full air conditioning, and access to a shared swimming pool and fitness gym. 

Located just 5 minutes from Candolim Beach, fine dining restaurants, and bustling beach shacks, this space offers the ideal luxury getaway for couples, families, and remote workers looking for a tranquil haven in Goa.`,

    host: {
        name: 'Mirashya Stays',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        isSuperhost: true,
        yearsHosting: 4,
        rating: 4.95,
        reviewsCount: 312,
    },

    // 8 Room categories required for the Photo Tour modal
    categories: [
        { id: 'living-1', name: 'Living room 1', photoCount: 4 },
        { id: 'living-2', name: 'Living room 2', photoCount: 3 },
        { id: 'kitchen', name: 'Full kitchen', photoCount: 3 },
        { id: 'bedroom', name: 'Bedroom', photoCount: 3 },
        { id: 'bathroom', name: 'Full bathroom', photoCount: 2 },
        { id: 'gym', name: 'Gym', photoCount: 2 },
        { id: 'exterior', name: 'Exterior', photoCount: 2 },
        { id: 'pool', name: 'Pool', photoCount: 2 }
    ],

    // 20 High-res photos mapped to categories & hero positions
    photos: [
        // Hero 5 Grid photos (heroPosition 0 is main left, 1-4 are right grid)
        {
            id: 'img-1',
            url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1400&q=80',
            alt: 'Spacious living room with warm lighting and sofa',
            category: 'living-1',
            roomName: 'Living room 1',
            description: 'Sofa · Air conditioning · Ceiling fan · Smart TV',
            heroPosition: 0
        },
        {
            id: 'img-2',
            url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
            alt: 'Luxury Jacuzzi tub with mood lights',
            category: 'bathroom',
            roomName: 'Full bathroom',
            description: 'Private Jacuzzi · Ambient mood lighting · Hot water',
            heroPosition: 1
        },
        {
            id: 'img-3',
            url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80',
            alt: 'Modern full kitchen with granite countertop',
            category: 'kitchen',
            roomName: 'Full kitchen',
            description: 'Refrigerator · Microwave · Induction cooktop',
            heroPosition: 2
        },
        {
            id: 'img-4',
            url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80',
            alt: 'Cozy master bedroom with king size bed',
            category: 'bedroom',
            roomName: 'Bedroom',
            description: 'King bed · Premium linens · Air conditioning',
            heroPosition: 3
        },
        {
            id: 'img-5',
            url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=800&q=80',
            alt: 'Resort pool surrounded by palm trees',
            category: 'pool',
            roomName: 'Pool',
            description: 'Shared outdoor pool · Sun loungers',
            heroPosition: 4
        },
        // Photos 6-20 for full Photo Tour modal stream
        {
            id: 'img-6',
            url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
            alt: 'Living area lounge chair and artwork',
            category: 'living-1',
            roomName: 'Living room 1',
            description: 'Accent armchair · Ambient floor lamp'
        },
        {
            id: 'img-7',
            url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Dining area with wooden table',
            category: 'living-1',
            roomName: 'Living room 1',
            description: '4-seater wooden dining table · Chandelier'
        },
        {
            id: 'img-8',
            url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
            alt: 'Living room balcony view',
            category: 'living-1',
            roomName: 'Living room 1',
            description: 'Balcony access · Natural sunlight'
        },
        {
            id: 'img-9',
            url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
            alt: 'Secondary living area seating',
            category: 'living-2',
            roomName: 'Living room 2',
            description: 'Lounge sofa · Dedicated work desk · Wi-Fi router'
        },
        {
            id: 'img-10',
            url: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80',
            alt: 'Work desk setup in second living area',
            category: 'living-2',
            roomName: 'Living room 2',
            description: 'Ergonomic office chair · Power extension'
        },
        {
            id: 'img-11',
            url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
            alt: 'Entertainment unit in living area 2',
            category: 'living-2',
            roomName: 'Living room 2',
            description: '55" 4K Smart TV · Netflix & Prime'
        },
        {
            id: 'img-12',
            url: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80',
            alt: 'Kitchen appliances and coffee maker',
            category: 'kitchen',
            roomName: 'Full kitchen',
            description: 'Espresso coffee maker · Electric kettle'
        },
        {
            id: 'img-13',
            url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
            alt: 'Kitchen cabinets and cutlery',
            category: 'kitchen',
            roomName: 'Full kitchen',
            description: 'Complimentary tea/coffee supplies · Glassware'
        },
        {
            id: 'img-14',
            url: 'https://images.unsplash.com/photo-1540518614846-7ede433c517a?auto=format&fit=crop&w=1200&q=80',
            alt: 'Bedroom nightstand and lamp',
            category: 'bedroom',
            roomName: 'Bedroom',
            description: 'Bedside charging ports · Blackout curtains'
        },
        {
            id: 'img-15',
            url: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
            alt: 'Bedroom vanity and closet',
            category: 'bedroom',
            roomName: 'Bedroom',
            description: 'Vanity mirror · Clothes closet · Iron'
        },
        {
            id: 'img-16',
            url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
            alt: 'Modern vanity sink and shower',
            category: 'bathroom',
            roomName: 'Full bathroom',
            description: 'Glass shower enclosure · Hair dryer · Towels'
        },
        {
            id: 'img-17',
            url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80',
            alt: 'Fitness gym equipment',
            category: 'gym',
            roomName: 'Gym',
            description: 'Treadmills · Dumbbell set · Multi-gym'
        },
        {
            id: 'img-18',
            url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=80',
            alt: 'Gym cardio area',
            category: 'gym',
            roomName: 'Gym',
            description: 'Exercise bike · Yoga mats · AC studio'
        },
        {
            id: 'img-19',
            url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
            alt: 'Apartment building exterior',
            category: 'exterior',
            roomName: 'Exterior',
            description: 'Secure gated complex · 24/7 security · Parking'
        },
        {
            id: 'img-20',
            url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
            alt: 'Candolim beach nearby',
            category: 'exterior',
            roomName: 'Exterior',
            description: 'Candolim Beach located 500 meters away'
        }
    ],

    amenities: [
        { id: '1', name: 'Private romantic Jacuzzi', category: 'Bathroom', icon: 'hottub' },
        { id: '2', name: 'Fast Wi-Fi – 150 Mbps', category: 'Internet & office', icon: 'wifi' },
        { id: '3', name: 'Shared outdoor swimming pool', category: 'Parking and facilities', icon: 'pool' },
        { id: '4', name: 'Dedicated workspace', category: 'Internet & office', icon: 'workspace' },
        { id: '5', name: 'Free driveway parking on premises', category: 'Parking and facilities', icon: 'parking' },
        { id: '6', name: 'TV', category: 'Entertainment', icon: 'tv' },
        { id: '7', name: 'Air conditioning', category: 'Heating & cooling', icon: 'ac' },
        { id: '8', name: 'Kitchen', category: 'Kitchen & dining', icon: 'kitchen' },
        { id: '9', name: 'Washing machine', category: 'Bedroom and laundry', icon: 'washer' },
        { id: '10', name: 'Self check-in', category: 'Services', icon: 'keypad' }
    ],

    amenityCategories: [
        {
            category: 'Bathroom',
            items: [
                { id: 'b-1', name: 'Hairdryer', icon: 'hairdryer' },
                { id: 'b-2', name: 'Cleaning products', icon: 'cleaning' },
                { id: 'b-3', name: 'Shampoo', icon: 'shampoo' },
                { id: 'b-4', name: 'Hot water', icon: 'hotwater' },
                { id: 'b-5', name: 'Shower gel', icon: 'showergel' }
            ]
        },
        {
            category: 'Bedroom and laundry',
            items: [
                { id: 'bl-1', name: 'Washing machine', icon: 'washer' },
                { id: 'bl-2', name: 'Hangers', icon: 'hangers' },
                { id: 'bl-3', name: 'Bed linen', icon: 'bedlinen' },
                { id: 'bl-4', name: 'Room-darkening blinds', icon: 'blinds' },
                { id: 'bl-5', name: 'Iron', icon: 'iron' },
                { id: 'bl-6', name: 'Clothes storage', icon: 'wardrobe' },
                { id: 'bl-7', name: 'Cot', icon: 'crib' }
            ]
        },
        {
            category: 'Entertainment',
            items: [
                { id: 'e-1', name: 'TV', icon: 'tv' }
            ]
        },
        {
            category: 'Family',
            items: [
                { id: 'f-1', name: 'Cot', icon: 'crib' }
            ]
        },
        {
            category: 'Heating and cooling',
            items: [
                { id: 'hc-1', name: 'Air conditioning', icon: 'ac' },
                { id: 'hc-2', name: 'Ceiling fan', icon: 'fan' }
            ]
        },
        {
            category: 'Home safety',
            items: [
                { id: 'hs-1', name: 'Exterior security cameras on property', icon: 'camera' },
                { id: 'hs-2', name: 'Carbon monoxide alarm', icon: 'co-alarm' },
                { id: 'hs-3', name: 'Smoke alarm', icon: 'smoke-alarm' }
            ]
        },
        {
            category: 'Internet and office',
            items: [
                { id: 'io-1', name: 'Wifi', icon: 'wifi' },
                { id: 'io-2', name: 'Dedicated workspace', icon: 'workspace' }
            ]
        },
        {
            category: 'Kitchen and dining',
            items: [
                { id: 'kd-1', name: 'Kitchen', icon: 'kitchen' },
                { id: 'kd-2', name: 'Fridge', icon: 'fridge' },
                { id: 'kd-3', name: 'Freezer', icon: 'freezer' },
                { id: 'kd-4', name: 'Microwave', icon: 'microwave' },
                { id: 'kd-5', name: 'Cooking basics', icon: 'cooking' },
                { id: 'kd-6', name: 'Crockery and cutlery', icon: 'cutlery' },
                { id: 'kd-7', name: 'Kettle', icon: 'kettle' },
                { id: 'kd-8', name: 'Coffee', icon: 'coffee' },
                { id: 'kd-9', name: 'Wine glasses', icon: 'wine' },
                { id: 'kd-10', name: 'Toaster', icon: 'toaster' },
                { id: 'kd-11', name: 'Blender', icon: 'blender' },
                { id: 'kd-12', name: 'Cooker', icon: 'stove' }
            ]
        },
        {
            category: 'Location features',
            items: [
                { id: 'lf-1', name: 'Private entrance', icon: 'door' }
            ]
        },
        {
            category: 'Outdoor',
            items: [
                { id: 'o-1', name: 'Patio or balcony', icon: 'balcony' },
                { id: 'o-2', name: 'Outdoor dining area', icon: 'outdoor-dining' }
            ]
        },
        {
            category: 'Parking and facilities',
            items: [
                { id: 'pf-1', name: 'Free parking on premises', icon: 'parking' },
                { id: 'pf-2', name: 'Pool', icon: 'pool' },
                { id: 'pf-3', name: 'Hot tub', icon: 'hottub' },
                { id: 'pf-4', name: 'Gym', icon: 'gym' }
            ]
        },
        {
            category: 'Services',
            items: [
                { id: 's-1', name: 'Pets allowed', icon: 'pets' },
                { id: 's-2', name: 'Cleaning available during stay', icon: 'cleaning-service' },
                { id: 's-3', name: 'Long-term stays allowed', icon: 'calendar' },
                { id: 's-4', name: 'Self check-in', icon: 'keypad' }
            ]
        }
    ],

    ratingCategories: [
        { name: 'Cleanliness', score: 4.9 },
        { name: 'Accuracy', score: 4.9 },
        { name: 'Check-in', score: 5.0 },
        { name: 'Communication', score: 5.0 },
        { name: 'Location', score: 4.9 },
        { name: 'Value', score: 4.8 }
    ],

    reviews: [
        {
            id: 'rev-1',
            authorName: 'Rohan Sharma',
            authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80',
            authorLocation: 'Mumbai, India',
            date: 'January 2026',
            rating: 5,
            comment: 'Mirashya UG10 exceeded all expectations! The private jacuzzi was super romantic and pristine. The location in Candolim is super convenient.'
        },
        {
            id: 'rev-2',
            authorName: 'Priya Patel',
            authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
            authorLocation: 'Bengaluru, India',
            date: 'December 2025',
            rating: 5,
            comment: 'The apartment is stunningly designed, ultra clean, and exactly like the pictures. The host was incredibly responsive!'
        }
    ]
};
