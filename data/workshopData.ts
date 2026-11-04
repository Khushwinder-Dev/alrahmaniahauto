export interface ServiceItem {
  id: string;
  title: string;
  category: "Workshop Services" | "Interior & Accessories";
  shortDesc: string;
  fullDesc: string;
  image: string;
  iconName: string;
  features: string[];
  duration?: string;
  warranty?: string;
}

export const WORKSHOP_SERVICES: ServiceItem[] = [
  {
    id: "diagnostics",
    title: "Engine Diagnostics",
    category: "Workshop Services",
    shortDesc: "Advanced computer diagnostics & sensor scanning to identify and resolve check engine codes",
    fullDesc: "Our state-of-the-art diagnostic scanners interface directly with your car's onboard computer (ECU) to pinpoint fault codes, sensor malfunctions, transmission errors, and electrical issues with 100% precision.",
    image: "/images/ims_b_3.jpg",
    iconName: "cpu",
    features: [
      "Full ECU, TCU & sensor diagnostic scan",
      "Check engine light trouble code isolation",
      "Live engine parameter & sensor graphing",
      "Comprehensive health report & repair estimate"
    ],
    duration: "30-45 mins",
    warranty: "Diagnostic Accuracy Guarantee"
  },
  {
    id: "brakes",
    title: "Brake Service & Repair",
    category: "Workshop Services",
    shortDesc: "Complete brake system inspection, ceramic pad replacement, rotor skimming, and ABS servicing",
    fullDesc: "Ensure maximum safety with our specialized brake service. We inspect pads, rotors, drums, calipers, and hydraulic brake lines, replacing worn parts with genuine ceramic or metallic friction materials.",
    image: "/images/service-2.png",
    iconName: "shield-check",
    features: [
      "Brake pad & rotor replacement",
      "High-precision disc skimming / resurfacing",
      "Brake hydraulic fluid flush & bleeding",
      "ABS module & caliper seal inspection"
    ],
    duration: "45-60 mins",
    warranty: "6 Months / 10,000 KM Warranty"
  },
  {
    id: "oil-change",
    title: "Oil Change & Maintenance",
    category: "Workshop Services",
    shortDesc: "Quick and professional synthetic oil change service with genuine OEM filter replacement",
    fullDesc: "We use only manufacturer-approved, high-grade fully synthetic oils formulated to withstand the intense UAE desert heat, prolonging engine life and maximizing fuel efficiency.",
    image: "/images/service-1.png",
    iconName: "droplets",
    features: [
      "OEM-spec 100% synthetic engine oil (5W-30, 0W-40, 5W-40)",
      "Genuine OEM oil filter replacement",
      "25-point bumper-to-bumper vehicle inspection",
      "Essential fluids top-up (coolant, washer, brake fluid)"
    ],
    duration: "20-30 mins",
    warranty: "Genuine Oil & Filter Guarantee"
  },
  {
    id: "wheel-alignment",
    title: "Wheel Alignment & Balancing",
    category: "Workshop Services",
    shortDesc: "Computerized laser wheel alignment, dynamic high-speed balancing, tire rotation, and safety checks",
    fullDesc: "Eliminate steering pull, minimize uneven tire wear, and ensure maximum handling stability on UAE roads with our computerized 3D laser alignment and digital wheel balancing.",
    image: "/images/service-6.png",
    iconName: "disc",
    features: [
      "3D Computerized laser 4-wheel alignment",
      "Dynamic high-speed wheel balancing",
      "Camber, caster & toe angle calibration",
      "Tread depth measurement & tire rotation"
    ],
    duration: "30-45 mins",
    warranty: "Laser Alignment Guarantee"
  },
  {
    id: "ac-repair",
    title: "AC Service & Repair",
    category: "Workshop Services",
    shortDesc: "Precision AC refrigerant recharge, leak detection with UV dye, compressor repair, and cabin sanitization",
    fullDesc: "Beat the Sharjah heat with icy-cool air conditioning. We handle refrigerant recharging (R134a / R1234yf), compressor repair, evaporator replacement, condenser cleaning, and leak detection.",
    image: "/images/service-3.png",
    iconName: "fan",
    features: [
      "Precision gas leak detection with UV dye",
      "AC compressor, condenser & evaporator overhaul",
      "High-grade refrigerant gas vacuum & refill",
      "Cabin air filter renewal & antibacterial sanitization"
    ],
    duration: "45-90 mins",
    warranty: "Cooling Performance Guarantee"
  },
  {
    id: "suspension",
    title: "Suspension & Steering",
    category: "Workshop Services",
    shortDesc: "Shock absorber replacement, steering rack repair, control arm bushings, and chassis stabilization",
    fullDesc: "Restore smooth handling, ride comfort, and stability. We service shock absorbers, struts, control arms, ball joints, bushings, and stabilizer links for all vehicle makes.",
    image: "/images/service-5.png",
    iconName: "car",
    features: [
      "Shock absorber & strut replacement",
      "Control arm & polyurethane bushing renewal",
      "Steering rack, tie rod & ball joint servicing",
      "Road test & NVH (noise, vibration) elimination"
    ],
    duration: "1-2 hours",
    warranty: "1 Year Workmanship Warranty"
  },
  {
    id: "seat-covers",
    title: "Custom Seat Covers & Fitment",
    category: "Interior & Accessories",
    shortDesc: "Custom tailored luxury leather seat covers crafted for comfort, style, and durability with 100% original materials",
    fullDesc: "Revive your car's interior with premium custom seat covers. Expertly stitched using 100% original high-grade German and Italian leatherette, Nappa leather, and breathable textures, custom-tailored for your exact car model.",
    image: "/fb-posts/580575558_122191406348549942_4454035087039568744_n.jpg",
    iconName: "armchair",
    features: [
      "100% Original premium grade automotive leather & fabrics",
      "Custom diamond quilting, perforations & dual-tone stitching",
      "Laser-measured snug fitment matching OEM seats",
      "Compatible with side airbags and seat heating/cooling"
    ],
    duration: "2-4 hours",
    warranty: "Material & Craftsmanship Guarantee"
  },
  {
    id: "roof-headliner",
    title: "Roof Headliner Repair",
    category: "Interior & Accessories",
    shortDesc: "Restore sagging roof fabric, luxury Alcantara headliner upgrades, pillar trimming, and custom starlight ceilings",
    fullDesc: "UAE heat causes factory roof fabric adhesive to degrade and sag. Our interior specialists strip the headliner board, clean old adhesive, and re-upholster in OEM fabric, luxury Alcantara, or custom starlight ceilings.",
    image: "/fb-posts/592746335_122194714862549942_8464117864862490904_n.jpg",
    iconName: "sparkles",
    features: [
      "High-temperature Gulf-rated heat-resistant adhesive",
      "OEM textured fabric, suede & luxury Alcantara options",
      "A, B, C pillar and sunroof sunshade re-wrapping",
      "Optional fiber-optic starlight ceiling installation"
    ],
    duration: "3-5 hours",
    warranty: "Anti-Sag Adhesive Guarantee"
  },
  {
    id: "colored-seatbelts",
    title: "Custom Colored Seatbelts",
    category: "Interior & Accessories",
    shortDesc: "OEM-certified custom colored seatbelt replacement in vibrant sports red, yellow, blue, and racing shades",
    fullDesc: "Transform your vehicle cockpit with certified high-strength colored seatbelts. Available in Porsche red, Ferrari yellow, BMW M-style tri-color, Tiffany blue, and dozens of custom hues meeting international safety standards.",
    image: "/fb-posts/590817435_122194716200549942_3770877090703741555_n.jpg",
    iconName: "shield",
    features: [
      "FIA & OEM compliant high-tensile polyester webbing",
      "Heavy-duty computerized bar-tack safety stitching",
      "Available in over 20+ vibrant colors and patterns",
      "Retains all factory tensioners and airbag triggers"
    ],
    duration: "1-2 hours",
    warranty: "Safety Standard Certified"
  },
  {
    id: "floor-carpeting",
    title: "Floor Carpeting & 3D Mats",
    category: "Interior & Accessories",
    shortDesc: "Precision laser-cut floor carpeting, all-weather 3D/5D leatherette floor mats, and acoustic soundproofing",
    fullDesc: "Protect your vehicle cabin from sand, spills, and wear. We provide custom-molded complete floor carpeting, trunk liners, and bespoke 3D/5D waterproof leather mats designed for full floor coverage.",
    image: "/fb-posts/461951688_122103674852549942_8184493955403732311_n.png",
    iconName: "layers",
    features: [
      "Laser-scanned floorpan contour fitment",
      "Heavy-duty waterproof & dirt-resistant 3D/5D materials",
      "Full floor replacement & trunk protective lining",
      "Under-carpet sound deadening & heat insulation"
    ],
    duration: "1-2 hours",
    warranty: "Waterproof & Wear Guarantee"
  },
  {
    id: "battery",
    title: "Battery & Electrical Care",
    category: "Workshop Services",
    shortDesc: "Digital battery load testing, charging alternator diagnostics, starter motor repair, and AGM battery replacement",
    fullDesc: "Extreme Gulf temperatures drain battery life fast. We test battery cranking power, alternator charging output, and starter motor draw, offering high-durability AGM and maintenance-free batteries with replacement warranty.",
    image: "/images/service-8.png",
    iconName: "battery",
    features: [
      "Digital battery conductance & cold-cranking health test",
      "Alternator charging voltage & starter current check",
      "Terminal cleaning & anti-corrosion protection",
      "Top-tier maintenance-free and AGM batteries in stock"
    ],
    duration: "15-20 mins",
    warranty: "12 to 24 Months Replacement"
  },
  {
    id: "interior-detailing",
    title: "Interior Detailing & Restoration",
    category: "Interior & Accessories",
    shortDesc: "Comprehensive interior deep cleaning, leather conditioning, steam sanitization, and showroom-fresh revival",
    fullDesc: "Revive and protect your vehicle interior. Our multi-stage detailing process includes high-temperature steam extraction, leather deep cleaning and nourishment, fabric shampooing, and ozone odor elimination.",
    image: "/fb-posts/581519632_122191279118549942_7579179045438295882_n.jpg",
    iconName: "sparkles",
    features: [
      "Deep leather cleaning & UV conditioning treatment",
      "High-temperature steam sanitization for bacteria & odors",
      "Roof liner, carpet & dashboard detailed scrubbing",
      "Air conditioning duct sterilization & cabin deodorizing"
    ],
    duration: "2-4 hours",
    warranty: "100% Satisfaction Guarantee"
  }
];

export interface BrandItem {
  name: string;
  category: "German & Luxury" | "Japanese" | "American" | "Korean";
  logo: string;
  specialty: string;
}

export const CAR_BRANDS: BrandItem[] = [
  { name: "Mercedes-Benz", category: "German & Luxury", logo: "/images/brands/Mercedes-Logo.png", specialty: "Star diagnostic, airmatic suspension, transmission service" },
  { name: "BMW", category: "German & Luxury", logo: "/images/brands/bimw.png", specialty: "iDrive updates, twin-turbo maintenance, brake service" },
  { name: "Audi", category: "German & Luxury", logo: "/images/brands/Audi-Logo.jpg", specialty: "Quattro system service, TFSI engine tuning, electrical check" },
  { name: "Porsche", category: "German & Luxury", logo: "/images/brands/Porsche-Logo.jpg", specialty: "Performance diagnostics, PDK transmission, brake overhaul" },
  { name: "Volkswagen", category: "German & Luxury", logo: "/images/brands/Volkswagen-Logo.png", specialty: "DSG service, turbo inspection, computer diagnostics" },
  { name: "Land Rover", category: "German & Luxury", logo: "/images/brands/Land-Rover-Logo.jpg", specialty: "Terrain response system, air suspension, drivetrain repairs" },
  { name: "Toyota", category: "Japanese", logo: "/images/brands/Toyota-Logo.jpg", specialty: "Hybrid system repair, routine periodic maintenance, brake care" },
  { name: "Lexus", category: "Japanese", logo: "/images/brands/Lexus.jpg", specialty: "Luxury electronics, V8/V6 engine tuning, AC conditioning" },
  { name: "Nissan", category: "Japanese", logo: "/images/brands/Nissan-Logo.jpg", specialty: "CVT gearbox service, Patrol V8 diagnostics, suspension" },
  { name: "Infiniti", category: "Japanese", logo: "/images/brands/Infiniti.png", specialty: "VVEL diagnostics, electrical harness, cooling systems" },
  { name: "Honda", category: "Japanese", logo: "/images/brands/Honda-logo.jpg", specialty: "VTEC engine maintenance, brake inspections, AC overhaul" },
  { name: "Mitsubishi", category: "Japanese", logo: "/images/brands/Mitsubishi.jpg", specialty: "4WD system service, Pajero maintenance, transmission repair" },
  { name: "Suzuki", category: "Japanese", logo: "/images/brands/Suzuki.jpg", specialty: "Fuel injection service, brake maintenance, battery testing" },
  { name: "Ford", category: "American", logo: "/images/brands/Ford-Logo.jpg", specialty: "EcoBoost maintenance, transmission fluid, heavy duty brakes" },
  { name: "Chevrolet", category: "American", logo: "/images/brands/Chevrolet-Logo.jpg", specialty: "V8 engine repair, cooling system flush, suspension overhaul" },
  { name: "Jeep", category: "American", logo: "/images/brands/jeep.png", specialty: "4x4 transfer case, suspension lift checks, cooling systems" },
  { name: "Kia", category: "Korean", logo: "/images/brands/Kia-Logo.jpg", specialty: "GDI engine service, air conditioning, routine warranty check" }
];

export interface VideoGalleryItem {
  id: string;
  title: string;
  category: "Engine" | "AC Service" | "Workshop" | "Hybrid";
  videoUrl: string;
  thumbnail?: string;
  description: string;
}

export const WORKSHOP_VIDEOS: VideoGalleryItem[] = [
  {
    id: "mercedes-engine-rebuild",
    title: "Mercedes V8 Engine Rebuild & Timing",
    category: "Engine",
    videoUrl: "/videos/mercedes-engine-rebuild.mp4",
    description: "Full engine teardown, precision block inspection, and timing chain setup on a Mercedes luxury sedan."
  },
  {
    id: "nissan-ac-evaporator",
    title: "Nissan Patrol AC Evaporator Core Replacement",
    category: "AC Service",
    videoUrl: "/videos/nissan-ac-evaporator.mp4",
    description: "Detailed dashboard removal and evaporator unit replacement restoring maximum air conditioning performance."
  },
  {
    id: "toyota-hybrid-repair",
    title: "Toyota Hybrid Inverter & High Voltage Service",
    category: "Hybrid",
    videoUrl: "/videos/toyota-hybrid-repair.mp4",
    description: "Certified hybrid battery testing, module cell balancing, and inverter cooling flush."
  },
  {
    id: "ac-gas-remove",
    title: "Automated AC Refrigerant Recovery & Recharge",
    category: "AC Service",
    videoUrl: "/videos/ac-gas-remove.mp4",
    description: "High-precision digital AC recovery machine extracting old refrigerant and charging fresh lubricant."
  },
  {
    id: "ac-system-flush",
    title: "Complete Air Conditioning System Flush",
    category: "AC Service",
    videoUrl: "/videos/ac-system-flush.mp4",
    description: "Flushing out metallic debris and contaminants from the AC lines prior to compressor replacement."
  },
  {
    id: "mercedes-timing-chain",
    title: "Mercedes Camshaft Phaser & Timing Chain",
    category: "Engine",
    videoUrl: "/videos/mercedes-timing-chain.mp4",
    description: "Precision alignment of camshaft gears and hydraulic chain tensioner replacement."
  },
  {
    id: "workshop-video-1",
    title: "Workshop Tour & Vehicle Lift Diagnostics",
    category: "Workshop",
    videoUrl: "/videos/workshop-video-1.mp4",
    description: "Behind the scenes at Al Rahmaniah Auto in Sharjah Industrial Area 5."
  },
  {
    id: "workshop-video-2",
    title: "Brake Rotor Skimming & Caliper Service",
    category: "Workshop",
    videoUrl: "/videos/workshop-video-2.mp4",
    description: "High-precision on-car brake lathe eliminating pedal vibration and noise."
  },
  {
    id: "workshop-video-3",
    title: "Suspension Arm Bushing Pressing",
    category: "Workshop",
    videoUrl: "/videos/workshop-video-3.mp4",
    description: "Hydraulic press removal and installation of OEM polyurethane suspension bushings."
  },
  {
    id: "workshop-video-5",
    title: "Computer Diagnostic Code Clearing & Road Test",
    category: "Workshop",
    videoUrl: "/videos/workshop-video-5.mp4",
    description: "Live sensor parameter logging and road performance verification."
  }
];

export const WORKSHOP_FAQS = [
  {
    q: "What types of vehicles do you service?",
    a: "We specialize in servicing and repairing a wide range of vehicles, including luxury, German (Mercedes-Benz, BMW, Audi, Porsche, VW), Japanese (Toyota, Lexus, Nissan, Honda), and American cars, using advanced computerized diagnostic tools, certified mechanics, and custom interior craftsmen."
  },
  {
    q: "Where is your auto workshop located in Sharjah?",
    a: "We are located at Industrial Area 4, Sharjah, UAE. Our workshop & accessories store is easily accessible from Dubai, Ajman, and all parts of Sharjah, with dedicated customer reception, inspection bays, and ample parking."
  },
  {
    q: "Do you offer upfront estimates before starting any work?",
    a: "Yes! 100% transparency is our core promise. We perform an initial inspection, pinpoint the issue, and provide a clear, itemized quote detailing parts and labor before turning a single wrench or stitching fabric."
  },
  {
    q: "How long does a standard oil change or minor service take?",
    a: "Our express maintenance services—such as synthetic oil changes, filter renewals, brake inspections, and battery swaps—are typically completed in under 30 to 45 minutes in our dedicated express bays."
  },
  {
    q: "Do you provide warranty on your repair work and seat covers?",
    a: "Absolutely. All our mechanical replacement parts and upholstery craftsmanship are backed by warranty. We use 100% original high-grade materials and genuine OEM parts that carry full warranty."
  },
  {
    q: "Can I book an appointment online or through WhatsApp?",
    a: "Yes! You can easily book an appointment using our online booking form or message our service advisors directly on WhatsApp at +971 55 867 4927 or call +971 55 887 5678 for instant response and priority slot reservation."
  }
];

export const WORKSHOP_INFO = {
  name: "Al Rahmaniah Auto Accessories",
  tagline: "Premium Auto Accessories, Custom Seat Covers & Styling",
  address: "Industrial Area 4, Sharjah, UAE",
  phones: ["+971 55 887 5678", "+971 55 867 4927", "+971 55 750 2083", "+971 56 440 6456"],
  whatsapp: "+971558674927",
  whatsappUrl: "https://api.whatsapp.com/send?phone=971558674927",
  bookingPhone: "+971 55 887 5678",
  emails: ["info@alrahmaniahauto.com", "alrahmaniahauto@gmail.com"],
  hours: {
    weekdays: "Saturday - Thursday: 8:00 AM - 9:00 PM",
    break: "Break: 1:30 PM – 3:30 PM",
    friday: "Friday: Closed"
  },
  social: {
    facebook: "https://www.facebook.com/alrahmaniahauto",
    instagram: "https://www.instagram.com/alrahmaniahauto",
    tiktok: "https://www.tiktok.com/@alrahmaniahauto"
  },
  mapEmbedUrl: "https://maps.google.com/maps?q=AL%20RAHMANIAH%20AUTO%20ACCESSORIES%20Industrial%20Area%204%20-%20Sharjah&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

