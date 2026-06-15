import { Product, PromoBanner } from './types';

export const DEPARTMENTS = [
  'All Departments',
  'Electronics',
  'PC Gaming & Games',
  'Home & Kitchen',
  'Fashion & Apparel',
  'Books & Literature',
  'Sports & Outdoors',
  'Automotive & Tools'
];

export const BRANDS = [
  'Amazen',
  'Orion',
  'QuantumSync',
  'ApexForce',
  'HydroGlow',
  'Baristar',
  'Thermoshield',
  'Outlander',
  'Aerostride',
  'ChronoLux',
  'SystemDesign Press',
  'Trailblazer',
  'HydroPeak',
  'VoltCheck',
  'TorqueMax',
  'OnyxLabs',
  'ViperTech',
  'RazerCore'
];

export const CAROUSEL_PROMOS: PromoBanner[] = [
  {
    id: 'promo-1',
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1600&q=80',
    title: 'Up to 40% Off Premium Electronics',
    tagline: 'Upgrade your workstation with ultrawide monitors, spatial audio speakers, and mechanical keyboards.',
    ctaText: 'Shop Electronics Deals',
    department: 'Electronics',
    bgHex: 'bg-zinc-950',
    textColorClass: 'text-white'
  },
  {
    id: 'promo-2',
    imageUrl: 'https://images.unsplash.com/photo-1517142089942-ba376ce32a2e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Gourmet Coffee & Kitchen Essentials',
    tagline: 'Save on commercial-grade espresso machines, smart pressure air fryers, and thermal mugs.',
    ctaText: 'Explore Kitchen Deals',
    department: 'Home & Kitchen',
    bgHex: 'bg-slate-900',
    textColorClass: 'text-white'
  },
  {
    id: 'promo-3',
    imageUrl: 'https://images.unsplash.com/photo-1610395219791-21b0353e43cb?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Conquer the Great Outdoors',
    tagline: 'Gear up with carbon hiking poles, insulated tumblers, and amateur astronomy kits.',
    ctaText: 'Get Outdoor Ready',
    department: 'Sports & Outdoors',
    bgHex: 'bg-emerald-950',
    textColorClass: 'text-emerald-100'
  },
  {
    id: 'promo-4',
    imageUrl: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&w=1600&q=80',
    title: 'The Outlander Autumn Apparel Event',
    tagline: 'Windproof canvas coats, lightweight dynamic mesh runners, and mechanical titanium timepieces.',
    ctaText: 'Browse Fashion',
    department: 'Fashion & Apparel',
    bgHex: 'bg-[#1b1c24]',
    textColorClass: 'text-amber-50'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    asin: 'B08X129Y91',
    title: 'Amazen EchoPro Gen-5 Smart Desktop Speaker with Spatial Audio & Zigbee Hub',
    description: 'Our most powerful smart speaker yet, featuring a custom 3" neodymium woofer and dual custom-angled dome tweeters. Built-in Smart Home Hub supports Zigbee, Matter, and Thread devices directly.',
    price: 149.99,
    listPrice: 199.99,
    rating: 4.8,
    reviewCount: 24850,
    department: 'Electronics',
    brand: 'Amazen',
    imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: true,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 142,
    specifications: [
      { label: 'Brand', value: 'Amazen' },
      { label: 'Model', value: 'EchoPro Gen-5' },
      { label: 'Connectivity', value: 'Wi-Fi, Bluetooth, Zigbee, Matter, Thread' },
      { label: 'Speaker Size', value: '3.0" Woofer, Dual 0.8" Tweeters' },
      { label: 'Power Source', value: 'Corded Electric (Auto-volt)' },
      { label: 'Weight', value: '2.1 lbs' },
      { label: 'Audio Technology', value: 'Dolby Atmos Spatial Audio, Room Tuning' }
    ],
    features: [
      'IMMERSIVE SPATIAL AUDIO: Experience premium omnidirectional acoustic balance mapped dynamically to the geometry of your living room.',
      'BUILT-IN SMART HOME HUB: Control Matter, Zigbee, and Thread-compatible security locks, light switches, and bulbs without separate bridges.',
      'VOICE CONTEXT AURAL RANGING: Four ultra-sensitive far-field microphones pick up commands seamlessly over loud music or distance.',
      'CARBON NEUTRAL DESIGN: Built with 48% post-consumer recycled plastics and 100% recycled die-cast aluminum.'
    ],
    frequentlyBoughtWith: ['prod-3', 'prod-7'],
    reviews: [
      {
        id: 'rev-1-1',
        author: 'Marcus Vance',
        rating: 5,
        title: 'Blowing past expectations - True Spatial Audio!',
        date: 'May 12, 2026',
        content: 'I replaced two Gen-3 speakers with this single EchoPro. The spatial room tuning actually works. It fills my entire kitchen and living room setup with deep bass that never distorts even at 90% volume. Setup took less than two minutes.',
        verifiedPurchase: true,
        helpfulVotes: 612
      },
      {
        id: 'rev-1-2',
        author: 'Caleb Jenkins',
        rating: 4,
        title: 'Incredible smart hub integration, slightly bulky',
        date: 'June 01, 2026',
        content: 'It discovered all of my Philips Hue and Matter bulbs instantly without typing in codes. The sound is stunningly deep. It is slightly heavier and taller than previous generations, but the fabric cover blends in elegantly with the furniture.',
        verifiedPurchase: true,
        helpfulVotes: 104
      }
    ]
  },
  {
    id: 'prod-2',
    asin: 'B07Y58N96P',
    title: 'Orion Prime 34-Inch Curved Ultrawide Workstation Monitor (UWQHD, 144Hz, HDR10)',
    description: 'Maximize your visual real estate. Features a 1500R curved panoramic display, 21:9 aspect ratio, 99% sRGB coverage, and 144Hz refresh rate with AMD FreeSync Premium for seamless execution.',
    price: 449.99,
    listPrice: 529.99,
    rating: 4.7,
    reviewCount: 4210,
    department: 'Electronics',
    brand: 'Orion',
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1547119957-637f8679db1e?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: true,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 37,
    specifications: [
      { label: 'Brand', value: 'Orion' },
      { label: 'Screen Size', value: '34 Inches' },
      { label: 'Resolution', value: '3440 x 1440 Pixels (UWQHD)' },
      { label: 'Aspect Ratio', value: '21:9 Panoramic' },
      { label: 'Curvature', value: '1500R Curvature' },
      { label: 'Refresh Rate', value: '144Hz' },
      { label: 'I/O Ports', value: '2x HDMI 2.0, 1x DisplayPort 1.4, USB-C (65W Delivery)' }
    ],
    features: [
      'CURVED ULTRA-WIDE 21:9: Expands productivity workflows by up to 33% compared to standard displays, enabling triple-window spreadsheets.',
      'USB-C ONE-CABLE SETUP: Provide up to 65W of power delivery while running full-resolution video output from a single laptop connection.',
      'TÜV RHEINLAND BLUE LIGHT SHIELD: High-frequency flicker-free backlight filtering protects engineers and designers from clinical fatigue.'
    ],
    frequentlyBoughtWith: ['prod-4'],
    reviews: [
      {
        id: 'rev-2-1',
        author: 'Devin L.',
        rating: 5,
        title: 'Perfect for coders. The aspect ratio is addictive.',
        date: 'March 18, 2026',
        content: 'I can have VS Code open in the center, a browser layout preview on the right, and logs on the left without overlapping templates. The 144Hz refresh rate is extremely easy on the eyes. High quality panel with no backlight bleeding.',
        verifiedPurchase: true,
        helpfulVotes: 1450
      }
    ]
  },
  {
    id: 'prod-3',
    asin: 'B09M2L7WZZ',
    title: 'QuantumSync Zenith ANC Wireless Headphones - Ultra-Low Latency Soundstage',
    description: 'Legendary Hybrid Active Noise Cancellation headphones. Features precision-engineered 40mm beryllium drivers, 45 hours of high-density battery capacity, and hi-res ldac codec compatibility.',
    price: 229.00,
    listPrice: null,
    rating: 4.6,
    reviewCount: 3120,
    department: 'Electronics',
    brand: 'QuantumSync',
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 88,
    specifications: [
      { label: 'Brand', value: 'QuantumSync' },
      { label: 'Model', value: 'Zenith-A1' },
      { label: 'Form Factor', value: 'Over Ear' },
      { label: 'Noise Control', value: 'Hybrid 4-Mic Adaptive ANC' },
      { label: 'Battery Capacity', value: 'Up to 45 Hours (ANC On)' },
      { label: 'Charging Type', value: 'USB-C Fast Charging (10 mins equals 5 hours)' }
    ],
    features: [
      'HYBRID ADAPTIVE ANC: Analyzes surrounding audio metrics 400 times per second to neutralize background street, wind, and jet noise.',
      'AUDIOPHILE-GRADE DRIVERS: Custom-tuned 40mm Beryllium diaphragm provides rich frequency responses between 4Hz and 40kHz.',
      'INTELLIGENT WEAR DETERMINATION: Built-in capacitive sensors automatically pause playback when the headset is taken off.'
    ],
    frequentlyBoughtWith: ['prod-1', 'prod-4'],
    reviews: [
      {
        id: 'rev-3-1',
        author: 'Alex Mercer',
        rating: 5,
        title: 'Better than the commercial brand leaders',
        date: 'February 24, 2026',
        content: 'ANC depth is incredible—it blocks out office chatter and computer fan hums perfectly. Audio has a beautifully wide soundstage for closed-backed headphones. Highly recommended.',
        verifiedPurchase: true,
        helpfulVotes: 94
      }
    ]
  },
  {
    id: 'prod-4',
    asin: 'B071XS8T1S',
    title: 'ApexForce Tactile-88 Mechanical Gaming Keyboard (Aircraft Aluminum Chassis, Brown Switches)',
    description: 'Anodized brushed aircraft-grade aluminum alloy design. Responsive Hot-swappable tactile brown mechanical keys offering clean typing feel, per-key dynamic ARGB programming, and dual magnetic wrist support.',
    price: 89.95,
    listPrice: 119.99,
    rating: 4.5,
    reviewCount: 1890,
    department: 'Electronics',
    brand: 'ApexForce',
    imageUrl: 'https://images.unsplash.com/photo-1618384887929-16ec33faf9c1?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1618384887929-16ec33faf9c1?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: false,
    shippingSpeed: 'two-day',
    freeShipping: true,
    stockCount: 64,
    specifications: [
      { label: 'Brand', value: 'ApexForce' },
      { label: 'Key Switches', value: 'Tactile Silent Brown (55g Actuation)' },
      { label: 'Chassis Material', value: 'Aircraft Grade 5052 Anodized Aluminum' },
      { label: 'Keys layout', value: '88-Key Compact Tenkeyless (TKL)' },
      { label: 'Connection', value: 'Detachable USB-C Gold Braided Cable' },
      { label: 'Hot-Swap Support', value: 'Compatible with standard 3-pin and 5-pin key structures' }
    ],
    features: [
      'HIGH-DENSITY COMPACT LAYOUT: Ergonomics-focused Tenkeyless build saves 5 inches of desk space for extensive travel mouse movements.',
      'DYNAMIC PRE-KEY REGISTRATION: Premium anti-ghosting matrices support 100% full key n-key rollover performance without signal drops.'
    ],
    frequentlyBoughtWith: ['prod-2'],
    reviews: [
      {
        id: 'rev-4-1',
        author: 'Tyler K.',
        rating: 4,
        title: 'Outstanding quality and weight',
        date: 'January 10, 2026',
        content: 'The aluminum top plate makes this solid as a brick. The brown switches have the perfect tactile click without annoying my roommates. Highly recommend getting custom keycaps, but the stock PBT ones are already top tier.',
        verifiedPurchase: true,
        helpfulVotes: 302
      }
    ]
  },
  {
    id: 'prod-5',
    asin: 'B08G7Y1ZZF',
    title: 'HydroGlow AeroWaves 14-in-1 Premium Digital Air Fryer & Pressure Cooker Combo',
    description: 'Transform your kitchen with the ultimate multifunction cooker. Combining high-pressure steam circulation with dynamic aero-wave air crisping modes. Features an 8.5-quart non-stick ceramic pot.',
    price: 119.99,
    listPrice: 159.99,
    rating: 4.8,
    reviewCount: 34100,
    department: 'Home & Kitchen',
    brand: 'HydroGlow',
    imageUrl: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: true,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 201,
    specifications: [
      { label: 'Brand', value: 'HydroGlow' },
      { label: 'Capacity', value: '8.5 Quarts' },
      { label: 'Wattage', value: '1760 Watts' },
      { label: 'Material', value: 'Stainless Steel & BPA-Free Polycarbonate' },
      { label: 'Cooking Functions', value: 'Pressure Cook, Air Crisp, Slow Cook, Dehydrate, Bake, Broil, Sear, yogurt, Steam' }
    ],
    features: [
      '14-IN-1 CAPABILITY: Transition from slow cooking and pressure steaming to dynamic air frying with a single multi-locking seal lid.',
      '85% LESS OIL USAGE: AeroSense air convection currents distribute rapid heat evenly, producing satisfying crisps using drops of fat.',
      'FAMILY SIZED VESSEL: Comfortably cook a whole 7 lb chicken or 5 lbs of roast in the ceramic coated non-toxic basket.'
    ],
    frequentlyBoughtWith: ['prod-6', 'prod-7'],
    reviews: [
      {
        id: 'rev-5-1',
        author: 'Samuel Miller',
        rating: 5,
        title: 'The absolute king of kitchen convenience.',
        date: 'April 09, 2026',
        content: 'I cook meals in this 4 times a week. Steam and crisp mode makes perfect roasted vegetables that are juicy inside but perfectly browned outside. Cleans extremely easily because the pot is totally nonstick.',
        verifiedPurchase: true,
        helpfulVotes: 2409
      }
    ]
  },
  {
    id: 'prod-6',
    asin: 'B013GIDXA2',
    title: 'Baristar Gran-Inizio Premium Automatic Espresso Machine & Integrated Ceramic Grinder',
    description: 'Brew professional espresso at home. Features an integrated conical ceramic burr grinder with 15 granular settings, computerized digital PID temperature controller, and commercial grade steam frothing wand.',
    price: 599.00,
    listPrice: null,
    rating: 4.7,
    reviewCount: 1540,
    department: 'Home & Kitchen',
    brand: 'Baristar',
    imageUrl: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: true,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 12,
    specifications: [
      { label: 'Brand', value: 'Baristar' },
      { label: 'Pressure Engine', value: '15-Bar Italian Electro-Pump' },
      { label: 'Water Reservoir', value: '67 fl oz Removable Tank' },
      { label: 'Grinder Features', value: 'Conical Ceramic Burr, 1/2 lbs bean hopper capacity' },
      { label: 'Form Factor', value: 'Polished Stainless Steel Body' }
    ],
    features: [
      'INTEGRATED GRINDING UNIT: Conical burrs dose fresh ground beans directly into the portafilter for robust espresso rich in golden cremas.',
      'ELECTRONIC PID MODULATION: Delivers precise constant extraction temperature to prevent bitter, burned, or sour extractions.'
    ],
    frequentlyBoughtWith: ['prod-7'],
    reviews: [
      {
        id: 'rev-6-1',
        author: 'Richard Wu',
        rating: 5,
        title: 'Worth every dollar. Real espresso.',
        date: 'May 30, 2026',
        content: 'This feels like having a physical cafe in my apartment. The grinder is surprisingly quiet, and dial-in settings are straightforward. The manual milk texturing was intimidating but after a week, I can make outstanding lattes.',
        verifiedPurchase: true,
        helpfulVotes: 521
      }
    ]
  },
  {
    id: 'prod-7',
    asin: 'B07PCX8Z9B',
    title: 'Thermoshield Commute-9 Smart Coffee Mug with Intelligent Chipped Lid & Charging Coaster',
    description: 'Keep your beverage at the exact ideal temperature (120°F - 145°F) for up to 3.5 hours on-the-go or all day long when resting on the matching sleek induction heating coaster.',
    price: 79.99,
    listPrice: 99.99,
    rating: 4.3,
    reviewCount: 4230,
    department: 'Home & Kitchen',
    brand: 'Thermoshield',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: false,
    shippingSpeed: 'two-day',
    freeShipping: true,
    stockCount: 95,
    specifications: [
      { label: 'Brand', value: 'Thermoshield' },
      { label: 'Capacity', value: '14 Fluid Ounces' },
      { label: 'Battery Chemistry', value: 'High-Density Lithium-Polymer Cores' },
      { label: 'Temperature Range', value: '120°F to 145°F (48°C - 63°C)' },
      { label: 'App Connection', value: 'Bluetooth LE 5.2 Dynamic sync' }
    ],
    features: [
      'AUTO SLEEP MODALITIES: Smart wake sensors detect motion and volume. Turns off after 2 hours of inactivity or when empty.',
      'IPX7 SUBMERSIBLE: Wash under running water safely with fully sealed synthetic rubber bottom and dual ceramic enamel layers.'
    ],
    frequentlyBoughtWith: ['prod-1', 'prod-6'],
    reviews: [
      {
        id: 'rev-7-1',
        author: 'David R.',
        rating: 4,
        title: 'Perfect for busy code reviews',
        date: 'June 02, 2026',
        content: 'I always make a large cup of filter coffee, get pulled into meetings, and return to find it lukewarm. This keeps it at exactly 132 degrees for hours. Deducted 1 star because the app can be buggy on Bluetooth syncing, but you do not need the app for basic operation.',
        verifiedPurchase: true,
        helpfulVotes: 198
      }
    ]
  },
  {
    id: 'prod-8',
    asin: 'B08Z5N4H2Q',
    title: 'Outlander Rugged Outdoors Weatherproof Canvas Field Jacket - Reinforced Lining',
    description: 'An heritage-grade field coat constructed from 12oz waxed, highly water-repellent organic cotton canvas. Double stitched seams, brass snap zippers, and luxury flannel interior lining.',
    price: 69.50,
    listPrice: 85.00,
    rating: 4.6,
    reviewCount: 850,
    department: 'Fashion & Apparel',
    brand: 'Outlander',
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: true,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 41,
    specifications: [
      { label: 'Brand', value: 'Outlander' },
      { label: 'Material', value: '100% Cotton Outer (12oz Waxed), Wool-Blend Lining' },
      { label: 'Pockets', value: '4 Heavy Cargo, 2 Hand-warmer, 1 Internal Zip Chest' },
      { label: 'Fit Type', value: 'Relaxed Heritage Utility Cut' }
    ],
    features: [
      'WAXED SHELL COATING: Windproof barriers insulate body temperatures while shedding water columns efficiently during mountain rains.',
      'FLANNEL INNER COMFORT: Warm brushed premium wool fabric insulates perfectly over base layers without scratching.'
    ],
    frequentlyBoughtWith: ['prod-9', 'prod-11'],
    reviews: [
      {
        id: 'rev-8-1',
        author: 'Garrett Mason',
        rating: 5,
        title: 'High-end workwear for a fraction of the cost',
        date: 'March 11, 2026',
        content: 'Feels unbelievably tough. The waxed outer is heavy and actually blocks absolute gales. Im 6ft 1in, 195lbs, bought a Large and the fit is relaxed enough to wear a chunky sweater underneath. Well worth the buy.',
        verifiedPurchase: true,
        helpfulVotes: 88
      }
    ]
  },
  {
    id: 'prod-9',
    asin: 'B091P4F6W2',
    title: 'Aerostride Cloud-Knit Comfort Mesh Running Shoes - Dynamic Shock Dispersion',
    description: 'Responsive stride mechanics at their peak. Designed from breathable 3D engine structured knits, combining high-tensile shock absorbing foam insoles with carbon-plated carbon rubber traction pads.',
    price: 54.99,
    listPrice: 75.00,
    rating: 4.4,
    reviewCount: 3840,
    department: 'Fashion & Apparel',
    brand: 'Aerostride',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: false,
    shippingSpeed: 'two-day',
    freeShipping: true,
    stockCount: 120,
    specifications: [
      { label: 'Brand', value: 'Aerostride' },
      { label: 'Shoe Width', value: 'Medium (D Size Layout)' },
      { label: 'Insole Type', value: 'Ortholite Dual-Density Carbon Memory Foam' },
      { label: 'Outer Material', value: 'AeroKnit Polyester Synthetic Thread Mesh' },
      { label: 'Weight', value: '8.4 oz (Per unit)' }
    ],
    features: [
      '3D THERMOREGULATION: Dynamic stitch openings exhaust heat rapidly during hot training or intensive indoor gym schedules.',
      'DISPERSION INSOLE MATRIX: Absorbs 92% of continuous heels-impact forces, protecting skeletal nodes and knees from shocks.'
    ],
    frequentlyBoughtWith: ['prod-8', 'prod-12'],
    reviews: [
      {
        id: 'rev-9-1',
        author: 'Keaton Miller',
        rating: 5,
        title: 'Outstanding bounce and lightness',
        date: 'February 15, 2026',
        content: 'I have run roughly 50 miles in these shoes over asphalt and gravel. Unbelievably comfortable, no blisters, and they breathe better than standard mesh shoes.',
        verifiedPurchase: true,
        helpfulVotes: 44
      }
    ]
  },
  {
    id: 'prod-10',
    asin: 'B07A1DCC3F',
    title: 'ChronoLux Oceanis Titanium 200m Automatic Divers Watch with CeramiSlick Bezel',
    description: 'Sophisticated engineering inside a durable aerospace titanium case. Operating via a 24-jewel Japanese mechanical movement with 41 hours reserve. Hard scratchproof sap-sapphire diagnostic lens.',
    price: 289.00,
    listPrice: 399.00,
    rating: 4.8,
    reviewCount: 380,
    department: 'Fashion & Apparel',
    brand: 'ChronoLux',
    imageUrl: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 9,
    specifications: [
      { label: 'Brand', value: 'ChronoLux' },
      { label: 'Case Material', value: 'Graded Aerospace-5 Solid Titanium' },
      { label: 'Movement', value: 'Caliber-24NH Automatic Mechanical (Reserve 41 Hours)' },
      { label: 'Water Depth', value: '200 Meters (660 ft) Dive Norms Certified' },
      { label: 'Lume Quality', value: 'Grade-A Swiss Super-LumiNova Pigments' }
    ],
    features: [
      'GRADE-5 TITANIUM DESIGN: 45% lighter and 5 times stronger than standard marine stainless watch structures, completely saltwater immune.',
      'HEADING MECHANICAL RELIABILITY: Self-winding system relies on arm sweeps. Never requires batteries, storage charging, or silicon processors.'
    ],
    frequentlyBoughtWith: ['prod-8'],
    reviews: [
      {
        id: 'rev-10-1',
        author: 'Harrison Ford',
        rating: 5,
        title: 'An incredible tool watch. Incredible value.',
        date: 'April 20, 2026',
        content: 'Clean sweep second hand, titanium finish has a beautiful dark charcoal gray color that looks sleek and lightweight. Absolute steal at $289. Bezel clicks with satisfying mechanical engagement.',
        verifiedPurchase: true,
        helpfulVotes: 73
      }
    ]
  },
  {
    id: 'prod-11',
    asin: 'B079K1PFF3',
    title: 'Web Architecture: Designing Enterprise Systems for Scale - Multi-Tier Patterns (Hardcover)',
    description: 'The definitive textbook for engineering leads and systems architects. Covers microservices decoupling, distributed state caches, reverse proxy routing headers, and schema migrations with precision diagrams.',
    price: 45.00,
    listPrice: null,
    rating: 4.9,
    reviewCount: 620,
    department: 'Books & Literature',
    brand: 'SystemDesign Press',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: true,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 80,
    specifications: [
      { label: 'Author', value: 'Dr. Evelyn Sterling' },
      { label: 'Publisher', value: 'SystemDesign Press; 2nd Edition' },
      { label: 'Pages', value: '624 Pages with high-density blueprints' },
      { label: 'Language', value: 'English (US)' },
      { label: 'Dimensions', value: '7.4 x 1.4 x 9.6 Inches' }
    ],
    features: [
      'THEORY MEETING FIELD: Includes 45 real production disaster reports with detailed mitigation algorithms.',
      'CODE BLUEPRINTS ENCLOSED: Complete configuration boilerplate models for Redis Clusters, Kubernetes setups, and PostgreSQL routers.'
    ],
    frequentlyBoughtWith: ['prod-12'],
    reviews: [
      {
        id: 'rev-11-1',
        author: 'Aris T.',
        rating: 5,
        title: 'Saved my systems redesign pipeline.',
        date: 'February 22, 2026',
        content: 'This focuses entirely on core principles. The layout of stateless session caches is the best I have ever read. Standard reading material for my entire division.',
        verifiedPurchase: true,
        helpfulVotes: 189
      }
    ]
  },
  {
    id: 'prod-12',
    asin: 'B0982XF4YY',
    title: 'The AI Blueprint: From Neural Network Models to Resilient Production Pipelines',
    description: 'A comprehensive, engineering-focused handbook describing neural network scaling, automated fine-tuning, retrieval-augmented structures (RAG), and cost-effective model gateway APIs.',
    price: 28.50,
    listPrice: 34.00,
    rating: 4.7,
    reviewCount: 420,
    department: 'Books & Literature',
    brand: 'SystemDesign Press',
    imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: true,
    shippingSpeed: 'two-day',
    freeShipping: false,
    stockCount: 55,
    specifications: [
      { label: 'Author', value: 'Nikhil R. Sridhar' },
      { label: 'Publisher', value: 'SystemDesign Press; 1st Edition' },
      { label: 'Pages', value: '442 Pages' },
      { label: 'Language', value: 'English' }
    ],
    features: [
      'PRODUCTION DEPLOYMENT PATTERNS: Deploy systems supporting sub-100ms LLM generations on constrained GPU nodes.',
      'RAG DESIGN PATTERNS: Integrate vector indexes and chunking models with strict database access scopes.'
    ],
    frequentlyBoughtWith: ['prod-11'],
    reviews: [
      {
        id: 'rev-12-1',
        author: 'John Thompson',
        rating: 5,
        title: 'Direct, clear, zero academic filler.',
        date: 'May 11, 2026',
        content: 'Nikhil explains complex tensor distributions with simple diagrammatic frameworks. Crucial reading if you are tasked with building local LLM middleware.',
        verifiedPurchase: true,
        helpfulVotes: 140
      }
    ]
  },
  {
    id: 'prod-13',
    asin: 'B087C1DFF4',
    title: 'Trailblazer Apex Carbon-Fiber Adjustable Hiking Poles (Dual Cork Ergonomic Grips)',
    description: 'Constructed from lightweight 100% 3K carbon-fiber tubes, weighing only 7.6 oz per pole. Features secure quick power lock clamps and pure natural moisture-wicking cork handles.',
    price: 49.99,
    listPrice: 59.99,
    rating: 4.7,
    reviewCount: 12450,
    department: 'Sports & Outdoors',
    brand: 'Trailblazer',
    imageUrl: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumbnails: [
      'https://images.unsplash.com/photo-1596484552834-6a58f850e0a1?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: true,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 145,
    specifications: [
      { label: 'Brand', value: 'Trailblazer' },
      { label: 'Material', value: '3K Carbon Fiber (100% Core)' },
      { label: 'Extension Limit', value: 'Adjustable from 24" to 54" (60cm - 137cm)' },
      { label: 'Grip Material', value: 'A-Grade Natural Pressed Sweat-Wicking Cork' },
      { label: 'Locking Mechanism', value: 'Dual Quick-Clamping Friction Tension Bolts' }
    ],
    features: [
      'ULTRA LIGHTWEIGHT CARBON: Minimizes dynamic shoulder swing fatigues on technical mountain paths. Solid shock preservation curves.',
      'SWEAT-WICKING CORKS: Organic natural handle surface maps and forms to hands, staying soft and comfortable during high heat.'
    ],
    frequentlyBoughtWith: ['prod-14'],
    reviews: [
      {
        id: 'rev-13-1',
        author: 'Nate Henderson',
        rating: 5,
        title: 'Held up perfectly in the Rockies',
        date: 'May 04, 2026',
        content: 'I loaded these with heavy body weights during deep scree descents. Zero slippage or crack metrics detected. Cork grips feel amazing compared to sweating on rubber options.',
        verifiedPurchase: true,
        helpfulVotes: 882
      }
    ]
  },
  {
    id: 'prod-14',
    asin: 'B07XD7R22Z',
    title: 'HydroPeak Polar-X 40oz Insulated Water Bottle with Spout & Chilled Straw Lid',
    description: 'Triple-wall vacuum insulation designed to lock cold beverages for 24 hours. Made from medical food-grade 18/8 stainless steel. Powder coat external sweatproof shell.',
    price: 24.95,
    listPrice: null,
    rating: 4.8,
    reviewCount: 42100,
    department: 'Sports & Outdoors',
    brand: 'HydroPeak',
    imageUrl: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: true,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 340,
    specifications: [
      { label: 'Brand', value: 'HydroPeak' },
      { label: 'Capacity', value: '40 Ounces (1.2 Liters)' },
      { label: 'Material', value: '18/8 Double Wall Pro-Grade Stainless Steel' },
      { label: 'Insulation', value: 'Vacuum insulated (Dual walls plus inner silver cladding)' }
    ],
    features: [
      '24hr COOLING RETENTION: Maintains ice chunks for up to 24 full hours or retains boiling temperature points for up to 12 hours.',
      'PRO-GRADE STEEL: Highly robust steel build ensures zero odor migrations, zero rusting, and zero metallic secondary tastes.'
    ],
    frequentlyBoughtWith: ['prod-13'],
    reviews: [
      {
        id: 'rev-14-1',
        author: 'Leon Vance',
        rating: 5,
        title: 'Outstanding. Actually keeps ice intact for a day.',
        date: 'June 10, 2026',
        content: 'I left this on the dashboard of my car in 90 degree weather for 6 hours. The outside was burning to the touch, but the drinking water inside was still ice cold. Truly amazing sealing.',
        verifiedPurchase: true,
        helpfulVotes: 1290
      }
    ]
  },
  {
    id: 'prod-15',
    asin: 'B083K18XW3',
    title: 'VoltCheck AutoRanging Pro-600 Digital Multimeter - True RMS Diagnostic Engine',
    description: 'Electrical diagnostics made safe. Highly precise auto-ranging multimeter assessing True RMS voltage, resistance, capacitance, frequency, and diode tests. Graded CAT-III 600V safety certified.',
    price: 34.99,
    listPrice: 39.99,
    rating: 4.6,
    reviewCount: 2150,
    department: 'Automotive & Tools',
    brand: 'VoltCheck',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: true,
    shippingSpeed: 'two-day',
    freeShipping: false,
    stockCount: 48,
    specifications: [
      { label: 'Brand', value: 'VoltCheck' },
      { label: 'Target Ratings', value: 'CAT III 600V, CAT II 1000V Overload Protection' },
      { label: 'Measurement Metric', value: 'True RMS, 6000 Counter Diagnostic Capacity' },
      { label: 'Power Unit', value: '2x 1.5V AAA Batteries Included' }
    ],
    features: [
      'AUTO RANGE DETECTION: Measures Alternating and Direct currents instantly with intelligent automatic diagnostic calibration settings.',
      'INTELLIGENT NON-CONTACT (NCV): Detects live electrical current levels inside drywalls without placing wires.'
    ],
    frequentlyBoughtWith: ['prod-16'],
    reviews: [
      {
        id: 'rev-15-1',
        author: 'Robert Sterling',
        rating: 5,
        title: 'An absolute steal for hobbyists & professionals.',
        date: 'March 04, 2026',
        content: 'Auto-ranging works quickly and reliably. The back-light display makes working in dim electrical boxes extremely accessible. Quality heavy-duty rubber bumper protects it from workbench drops.',
        verifiedPurchase: true,
        helpfulVotes: 147
      }
    ]
  },
  {
    id: 'prod-16',
    asin: 'B07HG2S8YY',
    title: 'TorqueMax 65-Piece Multi-Chassis Household & Automotive Premium Tool Set',
    description: 'Contains chrome vanadium alloy hand tools with ergonomically optimized soft-grip materials. Includes ratchets, metric sockets, premium precision drivers, and professional wrenches in a solid molded carrier box.',
    price: 42.99,
    listPrice: null,
    rating: 4.5,
    reviewCount: 3120,
    department: 'Automotive & Tools',
    brand: 'TorqueMax',
    imageUrl: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 61,
    specifications: [
      { label: 'Brand', value: 'TorqueMax' },
      { label: 'Pieces Count', value: '65 Pieces' },
      { label: 'Metal Grade', value: 'Heat-Treated Chrome Vanadium Steel (Cr-V)' },
      { label: 'Case Dimensions', value: '14.2 x 10.5 x 3.2 Inches' }
    ],
    features: [
      'CR-V ALLOY PROTECTION: Heat-treated Chrome Vanadium structures yield maximum torque resistance while withstanding continuous weather.',
      'ORGANIZED MOLDED CASE: High-retaining slots secure every socket and driver in position even when dropped.'
    ],
    frequentlyBoughtWith: ['prod-15'],
    reviews: [
      {
        id: 'rev-16-1',
        author: 'Billie Joe',
        rating: 5,
        title: 'Remarkable value for standard household repairs',
        date: 'May 02, 2026',
        content: 'The ratchet action is crisp and has little play. It had everything I needed to assemble my bedroom furniture and fix a leaky sink valve. Perfect starter set.',
        verifiedPurchase: true,
        helpfulVotes: 512
      }
    ]
  },
  {
    id: 'prod-17',
    asin: 'B0CPG909X1',
    title: 'ViperTech Sentinel RTX 4095-OC Flagship Graphics Card with Dual-Chamber Vector Cooling (24GB GDDR7, PCIe 5.0, DLSS 4.5)',
    description: 'The absolute zenith of gaming hardware. Features the legendary Ada-Max core architecture, 24GB of ultra-fast GDDR7 memory, and advanced vapor chamber thermal routing. Optimized for AI acceleration, Ray Reconstruction, and 4K cinema gameplay.',
    price: 1599.00,
    listPrice: null,
    rating: 4.9,
    reviewCount: 345,
    department: 'PC Gaming & Games',
    brand: 'ViperTech',
    imageUrl: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: true,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 14,
    specifications: [
      { label: 'Brand', value: 'ViperTech' },
      { label: 'Graphics Coprocessor', value: 'NVIDIA RTX 4095-OC Flagship' },
      { label: 'VRAM Size', value: '24 GB GDDR7' },
      { label: 'Memory Clock Speed', value: '28 Gbps' },
      { label: 'Interface', value: 'PCI Express x16 Gen 5.0' },
      { label: 'Power Draw', value: '450 Watts' },
      { label: 'Cooling Unit', value: 'Triple Winglet-9 Fan, Vapor Chamber Base' }
    ],
    features: [
      'GDDR7 ULTRA-BANDWIDTH MEMORY: Yields over 1.4 TB/s of bandwidth, feeding continuous textures to high refresh displays natively.',
      'AI CORES WITH DLSS 4.5: Power deep neural frames, multiplying native standard frame rendering outputs by up to 4x while saving core thermal limits.',
      'DIE-CAST RIGID INNER SKELETON: Reinforced alloy bracket completely eliminates heavy sagging on high-end ATX motherboards.'
    ],
    frequentlyBoughtWith: ['prod-18', 'prod-21'],
    reviews: [
      {
        id: 'rev-17-1',
        author: 'Damian K.',
        rating: 5,
        title: 'Unlimited frames. Unmatched rendering power.',
        date: 'June 02, 2026',
        content: 'I upgraded from a 3080 and the performance difference is mind-blowing. Running Cyberpunk at full 4K with Path Tracing and Frame Gen enabled yields a steady 140 FPS. The vector card stays cool under load and runs virtually silent.',
        verifiedPurchase: true,
        helpfulVotes: 219
      }
    ]
  },
  {
    id: 'prod-18',
    asin: 'B0CPG782D4',
    title: 'OnyxLabs Aegis Liquid-Cooled Horizon Gaming Desktop PC (Intel Core Ultra 9-285K, RTX 4090, 64GB DDR5, 4TB NVMe SSD)',
    description: 'A prebuilt workstation system meticulously compiled for digital creators and core players. Includes a custom hand-routed liquid loop, premium glass panorama layout, and intelligent multi-zone ARGB control.',
    price: 3499.00,
    listPrice: 3899.00,
    rating: 4.8,
    reviewCount: 98,
    department: 'PC Gaming & Games',
    brand: 'OnyxLabs',
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: true,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 6,
    specifications: [
      { label: 'Brand', value: 'OnyxLabs' },
      { label: 'CPU Model', value: 'Intel Core Ultra 9-285K (24-Cores, 5.7GHz)' },
      { label: 'Graphics Card', value: 'RTX 4090 OC 24GB GDDR6x' },
      { label: 'System Memory', value: '64GB G.Skill Trident Z5 DDR5 6400MHz' },
      { label: 'Storage Capacity', value: '4TB Western Digital Black SN850X NVMe PCIe 4.0' },
      { label: 'Power Supply', value: 'Corsair AX1200i Titanium Modular PSU' },
      { label: 'Os Platform', value: 'Windows 11 Professional pre-installed' }
    ],
    features: [
      'HAND-TUNED LIQUID LOOP: Dual 360mm multi-fin radiators circulate thermal flow efficiently, maintaining core silent setups under heavy loads.',
      'MASSIVE 4TB FAST NVME: Load files and rich level geometries in under a second with up to 7300 MB/s speed.'
    ],
    frequentlyBoughtWith: ['prod-17', 'prod-21'],
    reviews: [
      {
        id: 'rev-18-1',
        author: 'Tyler Cole',
        rating: 5,
        title: 'Master-level packaging. Unbelievable machine.',
        date: 'May 14, 2026',
        content: 'OnyxLabs did an incredible packing job. Shipped inside double-reinforced plywood crates with instant startup support guides. Setup runs perfectly cold. Zero bloatware.',
        verifiedPurchase: true,
        helpfulVotes: 51
      }
    ]
  },
  {
    id: 'prod-19',
    asin: 'B0CPG121M1',
    title: 'RazerCore Apex TKL Pro Wireless Gaming Mechanical Keyboard (Optical Linear Switches, Magnetic Snap Trigger, Dynamic PBT Caps)',
    description: 'The competitive esports standard keyboard. Powered by RazerCore frictionless linear optical switches with incredibly fast 0.1ms actuation. Dynamic rapid triggers let you reset keys on micro movement scales.',
    price: 189.99,
    listPrice: 219.99,
    rating: 4.7,
    reviewCount: 1042,
    department: 'PC Gaming & Games',
    brand: 'RazerCore',
    imageUrl: 'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1629429408209-1f912961dbd8?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1618384887929-16ec33faf9c1?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: true,
    isAmazonsChoice: false,
    shippingSpeed: 'two-day',
    freeShipping: true,
    stockCount: 45,
    specifications: [
      { label: 'Brand', value: 'RazerCore' },
      { label: 'Key Switches', value: 'Linear Optical Gen-3 frictionless' },
      { label: 'Form Factor', value: 'Tenkeyless TKL Compact' },
      { label: 'Actuation Range', value: '0.1mm - 4.0mm adjustable' },
      { label: 'Battery Capacity', value: 'Up to 110 Hours of continuous gaming' },
      { label: 'Chassis', value: 'Anodized 5000-grade Aircraft aluminum' }
    ],
    features: [
      'RAPID TRIGGER TECH: Actuates on immediate physical descent, resetting instantly as fingers lift for lightning quick counter-strafes.',
      'OPTICAL LIGHT SENSORS: Optical light beams activate registration instead of physical contact, ending mechanical delays.'
    ],
    frequentlyBoughtWith: ['prod-18', 'prod-20'],
    reviews: [
      {
        id: 'rev-19-1',
        author: 'Chris Miller',
        rating: 4,
        title: 'Incredible speed. Custom trigger points are insane.',
        date: 'June 11, 2026',
        content: 'This feels unfair in shooter games. Setting the trigger actuation to 0.2mm makes actions register the millisecond I consider pressing the key. Highly customizable but takes some getting used to.',
        verifiedPurchase: true,
        helpfulVotes: 93
      }
    ]
  },
  {
    id: 'prod-20',
    asin: 'B0CPG544S9',
    title: 'Chronicles of Antigravity: Eternal Rift Ultimate Edition (Physical Collector SteelBook Box Set & Steam PC Game Registry Core)',
    description: 'The award-winning action sci-fi open world masterpiece. This premium standard PC box set contains an custom steelbook case, dense physical dynamic system blueprints book, collectible canvas world chart, and a unique Steam registration core key.',
    price: 89.99,
    listPrice: null,
    rating: 4.8,
    reviewCount: 4500,
    department: 'PC Gaming & Games',
    brand: 'OnyxLabs',
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: true,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 16,
    specifications: [
      { label: 'Publisher', value: 'OnyxLabs Games Division' },
      { label: 'Content Grade', value: 'ESRB Mature 17+' },
      { label: 'Platform Compatibilities', value: 'PC (Steam client registry required)' },
      { label: 'Storage Needed', value: '110 GB NVMe recommended' },
      { label: 'Languages Supported', value: 'English, French, Spanish, German, Japanese' }
    ],
    features: [
      'IMMERSIVE SCENIC CAMPAIGN: Dive into 150 hours of highly dense, server-authenticated storytelling across expansive custom star systems.',
      'DYNAMIC GRAPHICS INTEGRATION: Direct native support for ray-tracing, spatial audio, and multiple display ultra-wide aspect resolutions.'
    ],
    frequentlyBoughtWith: ['prod-17', 'prod-19'],
    reviews: [
      {
        id: 'rev-20-1',
        author: 'Jordan Sterling',
        rating: 5,
        title: 'The best sandbox game of the decade.',
        date: 'June 01, 2026',
        content: 'I have logged over 200 hours already. The physical map and steelbook in this edition are stunning. If you enjoy deep system mechanics and open exploration, buy this collector box set immediately.',
        verifiedPurchase: true,
        helpfulVotes: 442
      }
    ]
  },
  {
    id: 'prod-21',
    asin: 'B0CPG632D1',
    title: 'Orion Swift 27-inch OLED 360Hz Gaming Monitor (2560 x 1440 resolution, 0.03ms Response, G-Sync Core, VRR HDMI 2.1 Display)',
    description: 'Enter fluid-motion absolute standard. Yielding incredible OLED colors with deep, absolute pure blacks, a stellar blisteringly fast 360Hz display speed, and advanced clinical panel protection tech.',
    price: 699.00,
    listPrice: 799.00,
    rating: 4.9,
    reviewCount: 112,
    department: 'PC Gaming & Games',
    brand: 'Orion',
    imageUrl: 'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1551103782-8ab07afd45c1?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 8,
    specifications: [
      { label: 'Brand', value: 'Orion' },
      { label: 'Screen Tech', value: 'Quantum Dot OLED QD-OLED Gen-3' },
      { label: 'Refresh Rate', value: '360Hz' },
      { label: 'Resolution', value: '2560 x 1440 QHD' },
      { label: 'Response Time', value: '0.03 ms Gray-to-Gray' },
      { label: 'Brightness Peak', value: '1000 nits HDR Peak' },
      { label: 'Input Channels', value: '2x HDMI 2.1, 1x DisplayPort 1.4, USB Hub' }
    ],
    features: [
      'PURE QD-OLED PANEL: Features perfect infinite contrast boundaries with over 1.07 billion colors natively mapped to sRGB standards.',
      '360Hz FLUID REWRITE RATE: Completely eliminates tracking ghost trails, providing outstanding competitive accuracy for shooter games.'
    ],
    frequentlyBoughtWith: ['prod-17', 'prod-18'],
    reviews: [
      {
        id: 'rev-21-1',
        author: 'Alex Ross',
        rating: 5,
        title: 'Mind-boggling colors. Gaming has changed forever.',
        date: 'May 22, 2026',
        content: 'OLED monitors are worth every single penny. The deep blacks make horror games feel terrifying, and the motion smoothness of 360Hz is something you have to see to believe. No burn-in issues after 6 months of daily coding and gaming.',
        verifiedPurchase: true,
        helpfulVotes: 73
      }
    ]
  },
  {
    id: 'prod-22',
    asin: 'B0CPG813K0',
    title: 'Cyberpunk Exodus: Neon Requiem (Deluxe Edition - Steam PC Digital Code Core)',
    description: 'The ultimate cyberpunk strategy RPG campaign on Steam. Command mechanical squads across multi-level dystopian cities in tactical turnaround scenarios. Features original soundtrack compilation and custom high-resolution system design guide.',
    price: 59.99,
    listPrice: 69.99,
    rating: 4.6,
    reviewCount: 1680,
    department: 'PC Gaming & Games',
    brand: 'OnyxLabs',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80'
    ],
    isBestSeller: false,
    isAmazonsChoice: false,
    shippingSpeed: 'tomorrow',
    freeShipping: true,
    stockCount: 120,
    specifications: [
      { label: 'Developer', value: 'Neon Requiem Studios' },
      { label: 'Platform', value: 'PC (Steam client code)' },
      { label: 'Memory Standard', value: '16GB RAM recommendation' },
      { label: 'VRAM Standard', value: '8GB minimum allocation' }
    ],
    features: [
      'MULTILAYER DISTRIBUTED TACTICS: Set traps, decode nodes, and command high-tech hackers in asynchronous battle sectors.',
      'DENSE CYBERPUNK SOUNDSTAGE: Stunning synthetic bass lines and original electronic scores track action sequences dynamically.'
    ],
    frequentlyBoughtWith: ['prod-19', 'prod-20'],
    reviews: [
      {
        id: 'rev-22-1',
        author: 'Robin Taylor',
        rating: 5,
        title: 'The strategy game I have been waiting for!',
        date: 'May 10, 2026',
        content: 'Beautiful pixel-art overlays and incredible modular upgrading systems for your squad. Tactical options are infinite. Codes arrived instantly via matching email dispatch.',
        verifiedPurchase: true,
        helpfulVotes: 104
      }
    ]
  }
];

export const MOCK_REVIEWS_GLOBAL = [
  {
    id: 'rev-g-1',
    author: 'Sean Jenkins',
    rating: 5,
    title: 'Excellent delivery and premium packing',
    date: 'June 12, 2026',
    content: 'Shipped within 12 hours. The box was sealed with reinforced cardboard fiber packing. Authentic product as described.',
    verifiedPurchase: true,
    helpfulVotes: 247
  },
  {
    id: 'rev-g-2',
    author: 'Arun Bhatia',
    rating: 4,
    title: 'Satisfied customer, standard return procedures were fast',
    date: 'May 28, 2026',
    content: 'Had to exchange a size for shoes, the process took only 2 days. The pickup service was convenient and fully trackable.',
    verifiedPurchase: true,
    helpfulVotes: 98
  }
];
