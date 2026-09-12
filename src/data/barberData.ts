import { ServiceItem, Barber, ProductItem, GalleryItem, ServiceArea } from '../types';

export const BUSINESS_INFO = {
  name: "Luxury Barber Lounge",
  tagline: "Precision Grooming. Elevated.",
  subheading: "Refined haircuts, traditional razor work, beard sculpting, and private grooming rituals in Downtown San Diego.",
  address: {
    street: "1401 Sixth Ave",
    city: "San Diego",
    state: "CA",
    zip: "92101",
    neighborhood: "Downtown San Diego / Cortez Hill"
  },
  phone: "619-310-5783",
  phoneRaw: "6193105783",
  email: "LuxuryBarberLounge@gmail.com",
  hours: {
    weekdays: "7:00 AM – 9:00 PM",
    saturday: "7:00 AM – 9:00 PM",
    sunday: "7:00 AM – 9:00 PM",
    summary: "Monday – Sunday: 7:00 AM – 9:00 PM"
  },
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "full-service",
    slug: "full-service-hair-cuts",
    title: "Full Service Hair Cuts",
    priceDisplay: "$65",
    priceNumeric: 65,
    duration: "60 min",
    shortDescription: "Our complete signature experience combining bespoke haircutting, meticulous razor detailing, hot towel shave, and hair wash.",
    fullDescription: "A comprehensive men's grooming session designed for the modern gentleman who values total precision and relaxation. Begins with a personalized style consultation, followed by clipper and shear work, steam towel treatment, razor detailing, invigorating shampoo, and tailored styling finish.",
    highlights: [
      "Customer-selected haircut (Taper fade, Drop fade, Business gentleman cut)",
      "Eyebrow & ear trim detailing",
      "Hot towel shave with steamed towels",
      "Warm lather shaving cream application",
      "Razor beard shaping and fine boundary definition",
      "Invigorating hair wash & conditioning treatment",
      "Choice of styling finish: hair gel, dry matte clay, or Papi Style styling powder"
    ],
    serviceJourney: [
      { step: "01", title: "Consultation / Cut", description: "Personal style consultation followed by precision scissor and clipper architecture tailored to your head shape and hair pattern." },
      { step: "02", title: "Detail Work", description: "Eyebrow cleanup, ear hair grooming, and fine razor edge alignment around the perimeter." },
      { step: "03", title: "Hot Towel Shave", description: "Infused hot steamed towel wraps and rich warm lather to soften follicles for a razor-smooth finish." },
      { step: "04", title: "Wash & Condition", description: "Deep cleansing scalp wash with refreshing menthol conditioning and cool water rinse." },
      { step: "05", title: "Styling", description: "Blow-dry sculpting and finishing with your choice of premium gel, matte clay, or Papi Style powder." }
    ],
    heroImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "fades",
    slug: "fades-hair-cuts",
    title: "Fades & Hair Cuts",
    priceDisplay: "$45",
    priceNumeric: 45,
    duration: "45 min",
    shortDescription: "Sharp razor fades and tailored classic haircuts executed with surgical precision and complimentary cold beverage.",
    fullDescription: "Precision fades engineered with exacting gradient control. From high skin fades and low tapers to textured gentleman cuts, every line is refined with straight razor finishing. Enjoy a complimentary cold beer during your appointment.",
    highlights: [
      "Professional tailored haircut experience",
      "Razor fade with seamless skin blending",
      "Fine straight-razor edge lineup and cleaning excess hair",
      "Eyebrow cleanup upon request",
      "Personalized hairstyle recommendations",
      "Complimentary cold beer"
    ],
    serviceJourney: [
      { step: "01", title: "Assessment", description: "Evaluation of crown swirls, hair density, and fade transition height." },
      { step: "02", title: "Gradient Blend", description: "Micro-lever clipper graduation creating a smooth fade from skin to top length." },
      { step: "03", title: "Scissor Finish", description: "Point-cutting and texturizing the top for effortless movement and control." },
      { step: "04", title: "Razor Edge & Lineup", description: "Crisp straight razor finish along the neck and temples, paired with a cold beer." }
    ],
    heroImage: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "hot-towel-shave",
    slug: "hot-towel-shave",
    title: "Hot Towel Shave",
    priceDisplay: "$35",
    priceNumeric: 35,
    duration: "35 min",
    shortDescription: "A timeless multi-step facial ritual featuring steamed towels, facial oil massage, rich warm lather, and traditional straight razor shaving.",
    fullDescription: "Experience the calming ritual of a traditional barbershop hot towel shave. We prepare your facial skin with nourishing botanical oils and steamed towels to open pores, followed by thick brush-whipped lather, close single-blade shaving, and a calming cold-towel aftershave finish.",
    highlights: [
      "Facial oil massage to prep and hydrate skin",
      "Steamed hot towel application for pore opening and skin softening",
      "Rich hot lather brush application",
      "Traditional straight razor single-blade shave",
      "Detailed shaving technique with and against the grain",
      "Cool aftershave treatment with skin-calming balm",
      "Invigorating, refreshing finish"
    ],
    serviceJourney: [
      { step: "01", title: "Prep & Oil Massage", description: "Gentle facial massage with essential oils to soften facial bristles and protect skin." },
      { step: "02", title: "Steamed Towels", description: "Application of hot aromatic towels to relax facial muscles and lift hair shafts." },
      { step: "03", title: "Warm Lather", description: "Whipped shaving lather applied with traditional badger brush to cushion the blade." },
      { step: "04", title: "Straight Razor Shave", description: "Meticulous razor passes executed at calibrated angles for irritation-free smoothness." },
      { step: "05", title: "Cool Finish", description: "Cold towel compression to seal pores, topped with antiseptic splash and soothing balm." }
    ],
    heroImage: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "hair-cut-beard",
    slug: "hair-cut-beard",
    title: "Hair Cut & Beard Service",
    priceDisplay: "$55",
    priceNumeric: 55,
    duration: "50 min",
    shortDescription: "Complete hair architecture and beard sculpting harmonized into a defined, cohesive masculine profile.",
    fullDescription: "The definitive full-head transformation. Choose from high, mid, drop, or taper fades paired with tailored scissor work on top, followed by tailored beard reshaping, razor cheek lines, and edge-defining hair fibers for maximum sharpness.",
    highlights: [
      "Custom choice of haircut: high fade, mid fade, drop fade, taper fade, or scissor cut",
      "Full beard sculpting, length reduction, and moustache trimming",
      "Straight-razor cheek and neckline detailing",
      "Application of defining hair fibers around edges for high-definition contour",
      "Hydrating beard balm or conditioning oil finish",
      "Eyebrow and ear hair cleanup"
    ],
    serviceJourney: [
      { step: "01", title: "Consultation & Haircut", description: "Selecting the ideal fade profile to harmonize with your facial structure." },
      { step: "02", title: "Beard Sculpting", description: "Freehand clipper tapering, symmetry balancing, and jawline enhancement." },
      { step: "03", title: "Razor Boundary Definition", description: "Crisp straight-razor detailing along cheekbones and neck contours." },
      { step: "04", title: "Fiber Enhancement", description: "Precision natural hair fibers applied to sharpen hairline and beard borders." },
      { step: "05", title: "Balm & Style", description: "Deep hydration treatment with scented beard balm and hair styling finish." }
    ],
    heroImage: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "godfather-cut",
    slug: "godfather-cut",
    title: "Godfather Cut",
    priceDisplay: "$150",
    priceNumeric: 150,
    duration: "90 min",
    shortDescription: "Our ultra-exclusive VIP grooming sanctuary featuring haircut, hot towel shave, fine cigar, beer, and shot of whiskey or tequila.",
    fullDescription: "The peak luxury grooming indulgence in San Diego. Reserved for gentlemen seeking unhurried excellence, the Godfather Cut pairs an exhaustive full-service haircut and traditional hot lather shave with a shot of premium whiskey or tequila, a cold beer, and an authentic fine cigar to savor.",
    highlights: [
      "Deluxe scalp wash and therapeutic head massage",
      "Custom haircut with master-level razor finishing",
      "Traditional hot towel shave with facial massage",
      "Shot of premium whiskey or aged tequila",
      "Complimentary ice-cold beer",
      "Hand-selected fine cigar",
      "Tailored styling with top-tier grooming elixirs"
    ],
    serviceJourney: [
      { step: "01", title: "Pour & Welcome", description: "Begin with a complimentary pour of whiskey or tequila, cold beer, and fine cigar presentation." },
      { step: "02", title: "Scalp Therapy & Wash", description: "Relaxing warm scalp wash and conditioning treatment." },
      { step: "03", title: "Master Haircut", description: "Exhaustive shear and fade styling tailored to individual specifications." },
      { step: "04", title: "Facial Steam & Shave", description: "Multi-towel hot steam wrap, warm lather, and traditional straight razor shave." },
      { step: "05", title: "Bespoke Styling", description: "Final blow-dry shaping with premium clay and fine fragrance spritz." }
    ],
    heroImage: "https://images.unsplash.com/photo-1517832606589-7629c3397143?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "in-home-service",
    slug: "in-home-hair-service",
    title: "In Home Hair Service",
    priceDisplay: "$325",
    priceNumeric: 325,
    duration: "90 min",
    shortDescription: "Private in-home master barber experience delivered directly to your residence, hotel suite, or private office.",
    fullDescription: "Bringing the complete Luxury Barber Lounge studio experience to your door. Ideal for executives, celebrities, private gatherings, or clients seeking uncompromised discretion and luxury. Includes full haircut, razor detailing, beard care, and cold beverage service.",
    note: "Pricing note: General pricing overview references an introductory baseline from $85; dedicated full private travel booking is $325 as detailed on our dedicated service page.",
    highlights: [
      "White-glove mobile barber setup in your home, hotel, or office",
      "Complete privacy and personalized convenience",
      "Full haircut or precision razor fade",
      "Straight-razor detailing and clean line work",
      "Eyebrow cleanup and facial grooming upon request",
      "Complimentary cold beer provided",
      "Sanitary drop cloths and zero cleanup left behind"
    ],
    serviceJourney: [
      { step: "01", title: "Mobile Setup", description: "Your barber arrives with professional mobile station, sanitized tools, and floor protection." },
      { step: "02", title: "Personal Consultation", description: "In-depth review of desired hair and beard specifications." },
      { step: "03", title: "Precision Cut & Fade", description: "Master cut executed with the same uncompromising standard as our Sixth Ave lounge." },
      { step: "04", title: "Razor Lineup", description: "Straight razor detailing around ears, neck, and perimeter." },
      { step: "05", title: "Final Polish", description: "Styling application, styling consultation, and complete site cleanup." }
    ],
    heroImage: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=1600&q=85"
  },
  {
    id: "hair-color",
    slug: "hair-color",
    title: "Hair Color Service",
    priceDisplay: "$250",
    priceNumeric: 250,
    duration: "120 min",
    shortDescription: "Sophisticated gray blending, natural tone enhancements, and fashion-forward color treatments preserving hair vitality.",
    fullDescription: "Master color formulation formulated specifically for men's hair textures and density. Whether you seek subtle, natural-looking gray camouflage that fades without harsh demarcation lines or striking platinum and editorial colors, we protect hair structural integrity throughout.",
    highlights: [
      "Professional color consultation and skin allergy check",
      "Natural gray blending and subtle tone rejuvenation",
      "Fashion-forward creative coloring and platinum lifting",
      "High-grade conditioning color formulations that nourish hair cuticles",
      "Personalized toner selection to eliminate brassy undertones",
      "Deep post-color conditioning and styling finish"
    ],
    serviceJourney: [
      { step: "01", title: "Tone Consultation", description: "Assessing natural pigment, percentage of gray, and desired depth." },
      { step: "02", title: "Formula Customization", description: "Blending salon-exclusive conditioning shades to match natural undertones." },
      { step: "03", title: "Precision Application", description: "Targeted brush application to gray zones or full hair architecture." },
      { step: "04", title: "Processing & Nourish", description: "Gentle processing followed by pH-balancing shampoo and conditioning mask." },
      { step: "05", title: "Cut & Style Integration", description: "Seamless haircut blending and styling to highlight fresh dimension." }
    ],
    heroImage: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1600&q=85"
  }
];

export const ALL_MENU_PRICES = [
  { name: "Hot Towel Shave", price: "From $35", route: "/services/hot-towel-shave" },
  { name: "Fades", price: "From $45", route: "/services/fades-hair-cuts" },
  { name: "Regular Cut", price: "From $45", route: "/services/fades-hair-cuts" },
  { name: "Full Service", price: "From $65", route: "/services/full-service-hair-cuts" },
  { name: "Beard", price: "From $25", route: "/services/hair-cut-beard" },
  { name: "Beard with Hair Cut", price: "From $55", route: "/services/hair-cut-beard" },
  { name: "Hair Wash", price: "From $10", route: "/services/full-service-hair-cuts" },
  { name: "Luxury Barber Package", price: "$65", route: "/products/luxury-barber-service-package" },
  { name: "Godfather Cut Package", price: "$150", route: "/services/godfather-cut" },
  { name: "In Home Hair Service", price: "$85* / $325", note: "Pricing overview lists $85; dedicated private mobile service is $325", route: "/services/in-home-hair-service" },
  { name: "Hair Color Service", price: "$250", route: "/services/hair-color" },
  { name: "Cadillac Hip Hop Lineup", price: "$30", route: "/book" },
  { name: "Cadillac Hip Hop Lineup added to Haircut", price: "+$10", route: "/book" }
];

export const BARBERS: Barber[] = [
  {
    id: "flix",
    name: "Flix",
    role: "Master Barber",
    experienceDescription: "Master barber with over 15 years of exceptional haircutting experience. Deeply skilled in precision scissor ergonomics, sharp skin tapers, and classic gentleman grooming.",
    image: "/images/barbers/flix.jpg",
    avatarImage: "/images/barbers/flix_circle.png",
    specialties: ["Master Hair Architecture", "Classic Gentleman Cuts", "Precision Scissor Work", "Hot Towel Shaves"]
  },
  {
    id: "antony",
    name: "Antony",
    role: "Owner & Lead Barber",
    experienceDescription: "Owner of Luxury Barber Lounge with over 21 years of experience, setting the gold standard in precision craftsmanship, high-touch appointments, and VIP client care.",
    image: "/images/barbers/antony.jpg",
    avatarImage: "/images/barbers/antony_circle.png",
    specialties: ["Signature Full Service", "Godfather Cut Experience", "VIP In-Home Grooming", "Executive Styling"]
  },
  {
    id: "ivan",
    name: "Ivan",
    role: "Licensed Professional Barber",
    experienceDescription: "Licensed professional barber focused on surgical precision, consistency, and dependable sharpness for every client who sits in his chair.",
    image: "/images/barbers/ivan.jpg",
    avatarImage: "/images/barbers/ivan_circle.png",
    specialties: ["Zero Fades", "Beard Sculpting", "Razor Lineups", "Consistent Texturing"]
  },
  {
    id: "ali",
    name: "Ali",
    role: "Specialized Barber",
    experienceDescription: "Specialized barber delivering tailored modern hair craft, precision drop fades, and customized beard design with an eye for clean urban aesthetics.",
    image: "/images/barbers/ali.jpg",
    avatarImage: "/images/barbers/ali_circle.png",
    specialties: ["Drop Fades", "Edge Enhancements", "Hair Color", "Beard Design"]
  }
];

export const PRODUCTS: ProductItem[] = [
  {
    id: "prod-haircut",
    slug: "luxury-barber-hair-cut",
    name: "Luxury Barber Hair Cut",
    price: 45,
    priceDisplay: "$45",
    description: "The classic Luxury Barber Hair Cut, styled the way you want it. Select your preferred add-ons to customize your session.",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=85",
    features: [
      "Custom haircut tailored to hair type and head structure",
      "Straight razor perimeter finish",
      "Hair styling with premium grooming pomade or clay",
      "Option to customize with grooming add-ons"
    ],
    availableAddons: [
      { id: "addon-beard", name: "Beard Trim", price: 15 },
      { id: "addon-beard-razor", name: "Beard Trim with Razor", price: 25 },
      { id: "addon-eyebrow", name: "Eyebrow Trim", price: 10 },
      { id: "addon-mustache", name: "Mustache Trim", price: 5 },
      { id: "addon-shave-trim", name: "Hot Towel Shave Trim", price: 25 }
    ]
  },
  {
    id: "prod-package",
    slug: "luxury-barber-service-package",
    name: "Luxury Barber Service Package",
    price: 65,
    priceDisplay: "$65",
    description: "The complete studio ritual package. Combines hair wash, haircut & beard trim, hot towel shave, complimentary beverage, and styling with Papi Style product.",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85",
    features: [
      "Invigorating Hair Wash",
      "Haircut & Beard Trim",
      "Hot Towel Shave",
      "Complimentary Cold Drink",
      "Hair styled with Papi Style styling product"
    ]
  },
  {
    id: "prod-powder",
    slug: "papi-style-hair-styling-powder",
    name: "Papi Style Hair Styling Powder",
    price: 20,
    priceDisplay: "$20",
    description: "Papi Style hair styling powder for modern matte texture, instant root lift, and lightweight hold without residue.",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    features: [
      "Instant matte finish",
      "Volumizing root lift",
      "Lightweight, pliable hold",
      "Easy wash-out formulation"
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Downtown San Diego Lounge Storefront & Street Entrance",
    category: "atmosphere",
    imageUrl: "/images/gallery/street.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-2",
    title: "Luxury Barber Lounge Stations & High-End Barber Chairs",
    category: "atmosphere",
    imageUrl: "/images/gallery/studioInterior_24806.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-3",
    title: "Upgraded Leather Seating & Ambient Lounge Lighting",
    category: "atmosphere",
    imageUrl: "/images/gallery/studioInterior_24808.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-4",
    title: "Luxury Barber Lounge Team of Master Craftsmen",
    category: "atmosphere",
    imageUrl: "/images/gallery/barbersTeam_1.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-5",
    title: "Vintage-Inspired Station & Professional Barbering Tools",
    category: "atmosphere",
    imageUrl: "/images/gallery/barberStation_1007902.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-6",
    title: "Full Service Grooming Station Setup",
    category: "atmosphere",
    imageUrl: "/images/gallery/luxurybarberServicesNT.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-7",
    title: "Comfortable Waiting Lounge & Leather Seating Area",
    category: "atmosphere",
    imageUrl: "/images/gallery/luxurybarberAppointmentsNT.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-8",
    title: "Master Barber Flix Crafting a Precision Cut",
    category: "craft",
    imageUrl: "/images/gallery/barberFelix_action.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-9",
    title: "Owner Antony Delivering VIP Consultation & Cut",
    category: "craft",
    imageUrl: "/images/gallery/barberAntony_action.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-10",
    title: "Precision Hair Fade & Razor Finish",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopHairFades.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-11",
    title: "Classic San Diego Gentleman Cut & Taper",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopSanDiegoHairCuts.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-12",
    title: "Signature Men's Haircut & Clean Outline",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopMensHairCuts.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-13",
    title: "Young Gentleman Scissor & Clipper Styling",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopBoyxHairCut.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-14",
    title: "Seamless Mid Fade with Textured Top",
    category: "cuts",
    imageUrl: "/images/gallery/luxuryBarbershopMensHairCutFade.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-15",
    title: "Modern Executive Fade & Natural Blend",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopMensCuts.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-16",
    title: "Master Barber Detailing & Shear Architecture",
    category: "craft",
    imageUrl: "/images/gallery/barberWorking_1979440.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-17",
    title: "Razor Sharp Haircut Fade & Crisp Lineup",
    category: "cuts",
    imageUrl: "/images/gallery/barbersHairCutFades.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-18",
    title: "Downtown San Diego Barbershop Craftsmanship",
    category: "craft",
    imageUrl: "/images/gallery/barbershopSanDiego.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-19",
    title: "Deluxe Beard Sculpting & Edge Enhancement",
    category: "craft",
    imageUrl: "/images/gallery/luxuryBarberBeardTrim.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-20",
    title: "Precision Beard Trim & Hot Towel Finish",
    category: "shave",
    imageUrl: "/images/gallery/barbershopBeardTrims.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-21",
    title: "Ultra-Clean High & Tight Skin Fade",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopFades.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-22",
    title: "Custom Taper Fade with Clean Side Profile",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopHairCutsFades.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-23",
    title: "Classic Scissor Cut with Natural Parting",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopHairCuts.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-24",
    title: "Fade & Beard Combination Craftsmanship",
    category: "craft",
    imageUrl: "/images/gallery/barbershopSanDiegoFadesTrims.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-25",
    title: "Sharp Temple Fade & Beard Blend",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopSanDiegoHairCutsFades.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-26",
    title: "Polished Gentleman Styling & Pomade Finish",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopSanDiegoMensHairCuts.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-27",
    title: "Executive Cut with Precision Perimeter",
    category: "cuts",
    imageUrl: "/images/gallery/luxuryBarberCuts.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-28",
    title: "Stylish Modern Crop & Texture",
    category: "cuts",
    imageUrl: "/images/gallery/barbershopStylishCuts.jpg",
    aspect: "landscape"
  },
  {
    id: "gal-29",
    title: "Tailored Haircut with Razor Edging",
    category: "cuts",
    imageUrl: "/images/gallery/luxuryBarbershopHairCut.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-30",
    title: "Clean Razor Shave & Skin Fade Blend",
    category: "shave",
    imageUrl: "/images/gallery/luxuryBarbershopMensHiarCut.jpg",
    aspect: "portrait"
  },
  {
    id: "gal-31",
    title: "Straight Razor Detail & Nape Line Finish",
    category: "shave",
    imageUrl: "/images/gallery/luxuryBarbershopRazorCuts.jpg",
    aspect: "landscape"
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "downtown-san-diego",
    name: "Downtown San Diego",
    region: "Central City",
    description: "Located directly at 1401 Sixth Ave, Luxury Barber Lounge is Downtown San Diego's flagship destination for executive grooming and precision barber craft.",
    highlights: ["Steps from Sixth & Ash", "Daily 7 AM – 9 PM availability", "Walking distance for downtown residents & professionals"]
  },
  {
    slug: "gaslamp-district",
    name: "Gaslamp District",
    region: "Downtown",
    description: "Minutes north of the vibrant Gaslamp Quarter, our studio provides high-caliber fade work and hot towel shaves for evening events and everyday sharp appearance.",
    highlights: ["Ideal pre-event styling", "Full grooming rituals with beard sharpening", "Complimentary cold beer"]
  },
  {
    slug: "east-village",
    name: "East Village",
    region: "Downtown",
    description: "Serving East Village creatives and residents with modern drop fades, textured scissor work, and Papi Style matte powder styling.",
    highlights: ["Close proximity to Petco Park", "Flexible early morning and late night slots", "Precision lineup options"]
  },
  {
    slug: "little-italy",
    name: "Little Italy",
    region: "Downtown Corridor",
    description: "A short drive or stroll from Little Italy, offering traditional razor shaves and classic gentleman taper cuts in an elevated atmosphere.",
    highlights: ["Traditional straight-razor shave", "Steamed essential oil towels", "Master level barbers"]
  },
  {
    slug: "bankers-hill",
    name: "Bankers Hill",
    region: "Uptown",
    description: "Directly adjacent to Bankers Hill and Balboa Park, catering to clients seeking discrete, dependable grooming and private in-home barber visits.",
    highlights: ["In-home mobile appointments available", "Quiet, unhurried appointment booking", "Beard contouring"]
  },
  {
    slug: "hillcrest",
    name: "Hillcrest",
    region: "Uptown",
    description: "Welcoming Hillcrest clients for custom hair color treatments, high skin fades, and personalized styling consultations.",
    highlights: ["Gray blending and tone revitalization", "Modern tailored fades", "Expert consultation"]
  },
  {
    slug: "la-jolla",
    name: "La Jolla",
    region: "Coastal San Diego",
    description: "Connecting coastal La Jolla executives and residents with our Sixth Ave lounge and exclusive $325 private in-home hair service.",
    highlights: ["Private mobile concierge barbering", "Godfather Cut package", "White-glove executive service"]
  },
  {
    slug: "university-heights",
    name: "University Heights",
    region: "Mid-City",
    description: "Trusted by University Heights and North Park clients who value meticulous attention to detail and zero-rush barbershop hospitality.",
    highlights: ["Master Barber Flix with 15+ years experience", "Consistent line work", "Online real-time scheduling"]
  }
];
