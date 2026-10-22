export interface ProductReview {
  id: string;
  author: string;
  initials: string;
  date: string;
  rating: number;
  verified: boolean;
  comment: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductDetailItem {
  id: number;
  name: string;
  longName: string;
  category: string;
  subcategory?: string;
  categoryPath?: string[];
  image: string;
  additionalImages?: string[];
  description: string;
  longDescription?: string[];
  overviewTitle?: string;
  overviewContent?: string[];
  rating: number;
  reviewsCount: number;
  price?: string;
  specifications: {
    column1: ProductSpecification[];
    column2: ProductSpecification[];
  };
  ratingBreakdown: {
    stars: number;
    count: number;
    percentage: number;
  }[];
  reviews: ProductReview[];
}

export const PRODUCT_CATEGORIES = [
  "All Categories",
  "Car Seat Covers",
  "Upholstery Leather & Fabrics",
  "Custom Colored Seatbelts",
  "Floor Carpets & 3D Mats",
  "Roof Headliners",
  "Adhesives & Stitching Materials",
  "Custom Tailoring Services",
] as const;

export const allProductsData: ProductDetailItem[] = [
  {
    id: 1,
    name: "3D Diamond-Stitched PVC Leather Seat Covers",
    longName: "Premium 3D Diamond-Stitched PVC Leather Seat Covers",
    category: "Car Seat Covers",
    subcategory: "DIAMOND QUILTED",
    categoryPath: ["Home", "Products", "Car Seat Covers", "3D Diamond-Stitched PVC Leather Seat Covers"],
    image: "/fb-posts/469317378_122127198956549942_2454514240647818107_n.jpg",
    additionalImages: [
      "/fb-posts/469317378_122127198956549942_2454514240647818107_n.jpg",
      "/fb-posts/762676881_122226273224549942_366684413211099332_n.jpg",
      "/fb-posts/605828125_122199913874549942_1353754870971959198_n.jpg",
      "/fb-posts/468444244_122121132014553903_3240018591782060146_n.jpg",
    ],
    description:
      "Revive your car’s interior with premium 3D diamond-quilted PVC leather seat covers. Crafted with 100% original high-durability materials engineered to resist intense UAE summer heat without cracking or fading.",
    longDescription: [
      "Engineered for both luxury aesthetics and day-to-day comfort, our 3D Diamond-Stitched PVC Leather Seat Covers give your vehicle a factory-fresh executive ambiance. Using ultra-resilient multi-ply automotive grade PVC with high-density foam padding, each panel provides supportive lumbar alignment.",
      "Treated with advanced anti-UV and heat-reflecting surface coatings, these seat covers withstand high UAE cabin temperatures, resisting cracking, peeling, and discoloration.",
      "Custom tailored precision fits are available for sedans, SUVs, trucks, and luxury commercial fleets across Sharjah, Dubai, and all UAE emirates.",
    ],
    overviewTitle: "Crafted for Comfort, Style & Durability",
    overviewContent: [
      "100% Original heavy-duty automotive PVC leather",
      "Reinforced diamond-stitch pattern with high-tensile bonded thread",
      "8mm high-rebound laminated foam backing for cushioned ergonomics",
      "Anti-slip backing ensures secure, wrinkle-free fitment",
      "Spill-proof, dirt-resistant, and effortless to wipe clean",
      "Airbag compatible stitching available for modern vehicle safety",
    ],
    rating: 4.9,
    reviewsCount: 128,
    price: "From AED 450",
    specifications: {
      column1: [
        { label: "Material Composition", value: "Multi-ply Automotive Grade PVC Leather" },
        { label: "Stitch Pattern", value: "3D Diamond Hex Quilt" },
        { label: "Foam Thickness", value: "8mm High-Density Cushion Lamination" },
        { label: "Heat / UV Resistance", value: "Tested up to +70°C UAE Cabin Climate" },
      ],
      column2: [
        { label: "Compatible Vehicles", value: "All Sedans, SUVs, Coupes & Commercial Fleets" },
        { label: "Airbag Compatibility", value: "Side Airbag Certified Seams" },
        { label: "Color Options", value: "Black, Tan, Cream, Burgundy, Navy, Red Accents" },
        { label: "Warranty", value: "2 Years Workmanship & Material Warranty" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 110, percentage: 86 },
      { stars: 4, count: 14, percentage: 11 },
      { stars: 3, count: 3, percentage: 2 },
      { stars: 2, count: 1, percentage: 1 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-1",
        author: "Tariq Al Hammadi",
        initials: "TH",
        date: "October 2026",
        rating: 5,
        verified: true,
        comment:
          "Fitted my Land Cruiser with the diamond tan covers at Al Rahmaniah Auto Sharjah. The stitching and fitment look genuinely OEM. Doesn't get burning hot in the afternoon.",
      },
      {
        id: "rev-2",
        author: "Kashif Mehmood",
        initials: "KM",
        date: "September 2026",
        rating: 5,
        verified: true,
        comment:
          "Very high quality PVC leather with thick foam inside. They finished installation in a few hours. Top notch service!",
      },
    ],
  },
  {
    id: 2,
    name: "Custom Dual-Tone Ergonomic Tailored Seat Covers",
    longName: "Custom Dual-Tone Ergonomic Tailored Leather Seat Covers",
    category: "Car Seat Covers",
    subcategory: "LUXURY TAILORED",
    categoryPath: ["Home", "Products", "Car Seat Covers", "Custom Dual-Tone Ergonomic Tailored Seat Covers"],
    image: "/fb-posts/611304648_122199913940549942_4994234153758255283_n.jpg",
    additionalImages: [
      "/fb-posts/611304648_122199913940549942_4994234153758255283_n.jpg",
      "/fb-posts/580575558_122191406348549942_4454035087039568744_n.jpg",
      "/fb-posts/581519632_122191279118549942_7579179045438295882_n.jpg",
      "/fb-posts/600307143_122197057688549942_3402055227567932246_n.jpg",
    ],
    description:
      "Bespoke dual-tone automotive seat covers custom patterned to your car's exact seat contours. Featuring contrasting bolster leather, sport piping, and breathable center inserts.",
    longDescription: [
      "Step into supercar luxury with Al Rahmaniah Auto’s bespoke dual-tone tailored seat covers. Combining deep charcoal bolsters with warm cognac or saddle tan centers, this styling transforms standard interiors into prestigious showpieces.",
      "Each set is laser-measured and hand-stitched by our master craftsmen in Sharjah, guaranteeing tight contouring around lumbar bolsters, headrests, and folding armrests.",
    ],
    overviewTitle: "Executive Styling & Master Tailoring",
    overviewContent: [
      "Custom two-tone color blocking customized to your taste",
      "Ergonomic lateral bolster enhancement for long-distance driving comfort",
      "Micro-perforated center panels for active airflow",
      "Seamless integration with OEM seat heaters and ventilation",
      "Includes front seats, rear bench, and custom headrest wrapping",
    ],
    rating: 5.0,
    reviewsCount: 96,
    price: "From AED 650",
    specifications: {
      column1: [
        { label: "Pattern Type", value: "Bespoke Laser Tailored Fitment" },
        { label: "Material", value: "Dual-Tone Heavy Napa Leatherette" },
        { label: "Contrast Stitching", value: "Reinforced Twin-Needle Piping" },
        { label: "Installation", value: "Same-Day Workshop Fitting in Sharjah" },
      ],
      column2: [
        { label: "Vehicle Compatibility", value: "Patrol, Land Cruiser, Prado, Tahoe, Mercedes, BMW & all sedans" },
        { label: "Ventilation Compatibility", value: "Fully Compatible with Ventilated / Heated Seats" },
        { label: "Color Schemes", value: "Tan/Black, Cognac/Charcoal, Red/Black, Beige/Mocha" },
        { label: "Durability Rating", value: "100,000+ Martindale Rub Cycles" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 90, percentage: 94 },
      { stars: 4, count: 6, percentage: 6 },
      { stars: 3, count: 0, percentage: 0 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-3",
        author: "Faisal Al Nuaimi",
        initials: "FN",
        date: "September 2026",
        rating: 5,
        verified: true,
        comment:
          "Transformed my Nissan Patrol interior completely. The tan and black dual-tone looks better than the factory leather and the stitching is perfection.",
      },
    ],
  },
  {
    id: 3,
    name: "Rahmaniah Collection 2025 Automotive Leather Swatches",
    longName: "Rahmaniah Collection 2025 Luxury Automotive Leatherette Swatches",
    category: "Upholstery Leather & Fabrics",
    subcategory: "LEATHERETTE ROLLS",
    categoryPath: ["Home", "Products", "Upholstery Leather & Fabrics", "Rahmaniah Collection 2025"],
    image: "/fb-posts/589737449_122194717400549942_1424638142598421653_n.jpg",
    additionalImages: [
      "/fb-posts/589737449_122194717400549942_1424638142598421653_n.jpg",
      "/fb-posts/592124585_122194707128549942_2096198504496408305_n.jpg",
      "/fb-posts/591719054_122194716380549942_6439814556598602183_n.jpg",
      "/fb-posts/598016407_122195897402549942_6284656040581813203_n.jpg",
    ],
    description:
      "Official Rahmaniah Collection 2025 catalog featuring 60+ curated shades of automotive upholstery leather and leatherette. Wholesale rolls and custom cutting available for upholstery shops and vehicle owners.",
    longDescription: [
      "The Rahmaniah Collection 2025 represents our finest compilation of automotive synthetic leather and micro-grain Napa leatherette. Hand-picked for the challenging GCC climate, these materials combine soft hand-feel with industrial tear resistance.",
      "Available by the running meter or in wholesale master rolls for car upholstery workshops, custom garages, and automotive styling centers throughout the UAE and GCC.",
    ],
    overviewTitle: "60+ Exclusive Shades for Modern & Classic Cars",
    overviewContent: [
      "60+ verified automotive colorways matching OEM factory palettes",
      "UV-inhibited pigments resist fading under direct solar radiation",
      "Hydrolysis-resistant resin prevents stickiness and flaking",
      "Supple grain texture mimics natural European calfskin",
      "Available for retail purchase per meter or wholesale bulk rolls",
    ],
    rating: 4.9,
    reviewsCount: 84,
    price: "AED 55 / Meter",
    specifications: {
      column1: [
        { label: "Collection Series", value: "Rahmaniah Collection 2025 Edition" },
        { label: "Roll Width", value: "1.40 Meters (55 inches)" },
        { label: "Thickness", value: "1.2mm - 1.4mm Heavy Gauge" },
        { label: "Backing Substrate", value: "High-Tensile Brushed Knitted Microfiber" },
      ],
      column2: [
        { label: "Flame Retardancy", value: "FMVSS 302 Compliant" },
        { label: "Color Fastness", value: "Grade 4.5+ (ISO 105-B02)" },
        { label: "Wholesale Availability", value: "Yes - 30m & 50m Master Rolls in Stock" },
        { label: "Recommended Use", value: "Seats, Door Cards, Dashboards, Center Consoles" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 76, percentage: 90 },
      { stars: 4, count: 6, percentage: 7 },
      { stars: 3, count: 2, percentage: 3 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-4",
        author: "Hamad Al Mazrouei",
        initials: "HM",
        date: "September 2026",
        rating: 5,
        verified: true,
        comment:
          "We run an upholstery workshop in Dubai and purchase our leatherette rolls from Al Rahmaniah Auto Sharjah. Consistent quality, best shade range, and competitive wholesale prices.",
      },
    ],
  },
  {
    id: 4,
    name: "Luxury Custom Colored Seatbelts & Designer Webbing",
    longName: "Luxury Custom Colored Seatbelts & Designer Monogram Webbing",
    category: "Custom Colored Seatbelts",
    subcategory: "SAFETY WEBBING",
    categoryPath: ["Home", "Products", "Custom Colored Seatbelts", "Luxury Custom Colored Seatbelts"],
    image: "/fb-posts/588668836_122194707920549942_6964088685681111711_n.jpg",
    additionalImages: [
      "/fb-posts/588668836_122194707920549942_6964088685681111711_n.jpg",
      "/fb-posts/592245284_122194716626549942_5863092211380260242_n.jpg",
      "/fb-posts/606066276_122198760968549942_426865286832979003_n.jpg",
    ],
    description:
      "Upgrade your vehicle interior with safety-certified custom colored seatbelts. Available in vibrant colors including Racing Red, Speed Yellow, M-Power Tri-Stripe, Sky Blue, Acid Orange, and Designer Monograms.",
    longDescription: [
      "Add a striking motorsport or luxury fashion accent to your cabin with Al Rahmaniah Auto Accessories’ certified colored seatbelts. Manufactured to strict international safety standards with high-tenacity polyester webbing.",
      "Professional fitment done on-site utilizing factory retractors and OEM pyrotechnic tensioners for zero warning lights and maximum crash protection.",
    ],
    overviewTitle: "Safety Meets Motorsport Aesthetics",
    overviewContent: [
      "Over 20 vivid shades: Red, Yellow, Cyan Blue, Orange, Purple, and M-Power Stripes",
      "High-tenacity 100% polyester yarn with 25 kN tensile strength",
      "Certified to ECE R16 and FMVSS 209 automotive seatbelt regulations",
      "Seamless rewinding on OEM retractor reels without binding",
      "On-site installation completed in under 2 hours at our Sharjah workshop",
    ],
    rating: 5.0,
    reviewsCount: 112,
    price: "AED 120 / Belt (Installed)",
    specifications: {
      column1: [
        { label: "Webbing Width", value: "48mm Standard Automotive Specification" },
        { label: "Tensile Strength", value: ">25,000 N (2.5+ Tons Breaking Force)" },
        { label: "Material", value: "100% Virgin High-Tenacity Polyester (PET)" },
        { label: "Safety Standard", value: "ECE R16 & DOT FMVSS 209 Certified" },
      ],
      column2: [
        { label: "Popular Colors", value: "Guards Red, Speed Yellow, M-Stripe, Tiffany Cyan, Orange" },
        { label: "Installation Time", value: "60 - 120 Minutes for 4-5 Belts" },
        { label: "Airbag / Pre-Tensioner", value: "Fully Retained with OEM Hardware" },
        { label: "Warranty", value: "Lifetime Webbing Integrity Warranty" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 105, percentage: 94 },
      { stars: 4, count: 7, percentage: 6 },
      { stars: 3, count: 0, percentage: 0 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-5",
        author: "Sultan Al Suwaidi",
        initials: "SS",
        date: "October 2026",
        rating: 5,
        verified: true,
        comment:
          "Installed the M-Power tri-stripe seatbelts in my BMW M4. The color saturation is vibrant and the retractors operate smoothly like stock. Highly recommend ARA!",
      },
    ],
  },
  {
    id: 5,
    name: "CARFECT Premium Deep-Pile Automotive Carpet Rolls",
    longName: "CARFECT Luxury Deep-Pile Velvet Automotive Carpet Rolls & Matting",
    category: "Floor Carpets & 3D Mats",
    subcategory: "AUTOMOTIVE CARPETS",
    categoryPath: ["Home", "Products", "Floor Carpets & 3D Mats", "CARFECT Automotive Carpets"],
    image: "/fb-posts/590817435_122194716200549942_3770877090703741555_n.jpg",
    additionalImages: [
      "/fb-posts/590817435_122194716200549942_3770877090703741555_n.jpg",
      "/fb-posts/590283605_122194716296549942_7273319812958044024_n.jpg",
      "/fb-posts/461951688_122103674852549942_8184493955403732311_n.png",
    ],
    description:
      "CARFECT deep-pile luxury velvet floor carpeting rolls engineered for automotive floor renewal, sound deadening, and custom molded vehicle floor mats with anti-slip rubber backing.",
    longDescription: [
      "Restore worn cabin flooring or build ultra-plush custom floor mats with CARFECT automotive carpeting. Designed specifically for vehicle floors, trunks, and side kick-panels, this carpet absorbs road vibrations and tire hum while delivering plush beneath-shoe comfort.",
      "Featuring high-density tufted nylon fibers laminated to water-impermeable crumb rubber backing, it repels mud, desert sand, and liquid spills.",
    ],
    overviewTitle: "Acoustic Insulation & Luxury Floor Comfort",
    overviewContent: [
      "Dense 850 g/m² tufted velvet pile creates quiet, serene cabin acoustics",
      "Granulated anti-slip nib backing prevents dangerous mat slippage",
      "Stain-resistant fiber treatment allows easy vacuuming and power-washing",
      "Available by running meter for full floor restoration or pre-cut fitted mat sets",
    ],
    rating: 4.8,
    reviewsCount: 65,
    price: "AED 75 / Meter",
    specifications: {
      column1: [
        { label: "Brand / Series", value: "CARFECT Premium Velvet Line" },
        { label: "Roll Width", value: "1.50 Meters (60 inches)" },
        { label: "Pile Weight", value: "850 gsm High-Density Tufted Filament" },
        { label: "Total Thickness", value: "9.5mm Plush Acoustic Cushion" },
      ],
      column2: [
        { label: "Backing", value: "Waterproof Granulated Anti-Slip Rubber" },
        { label: "Fire Classification", value: "Auto Industry Flame Retardant" },
        { label: "Available Colors", value: "Onyx Black, Anthracite Grey, Camel Beige, Espresso Brown" },
        { label: "Applications", value: "Car Floors, Boot / Trunk Liners, Subwoofer Enclosures" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 55, percentage: 85 },
      { stars: 4, count: 8, percentage: 12 },
      { stars: 3, count: 2, percentage: 3 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-6",
        author: "Omar Al Qasimi",
        initials: "OQ",
        date: "August 2026",
        rating: 5,
        verified: true,
        comment:
          "Re-carpeted the floor of my classic Lexus LS400 with this CARFECT velvet roll. Cabin is noticeably quieter and feels brand new underfoot.",
      },
    ],
  },
  {
    id: 6,
    name: "Genuine USA Foam-Backed Automotive Roof Headliner Rolls",
    longName: "Genuine USA Automotive Foam-Backed Roof Headliner Rolls",
    category: "Roof Headliners",
    subcategory: "HEADLINER FABRIC",
    categoryPath: ["Home", "Products", "Roof Headliners", "USA Automotive Roof Headliner Rolls"],
    image: "/fb-posts/609035383_122200209176549942_2808337490054960890_n.jpg",
    additionalImages: [
      "/fb-posts/609035383_122200209176549942_2808337490054960890_n.jpg",
      "/fb-posts/592746335_122194714862549942_8464117864862490904_n.jpg",
      "/fb-posts/608129103_122199913910549942_3765673106853950320_n.jpg",
    ],
    description:
      "Original USA imported automotive headliner fabric with integrated heat-resistant foam backing. Solves sagging roof problems permanently in extreme UAE temperatures.",
    longDescription: [
      "Roof headliner sagging is one of the most common vehicle interior issues in the Middle East due to foam breakdown under intense roof heat. Our Genuine USA Automotive Roof Headliner Rolls feature high-density polyurethane foam bonded with synthetic knit face fabric that will not degrade under sun exposure.",
      "Flexible enough to wrap compound curves, sunroof recesses, pillar covers, and visors without creasing.",
    ],
    overviewTitle: "The Permanent Solution for Sagging Car Roofs",
    overviewContent: [
      "Imported authentic USA automotive headliner specification",
      "3.5mm flame-laminated polyurethane foam backing",
      "High thermal stability prevents delamination under 60°C roof heat",
      "Stretchable knit structure easily conforms to complex sunroof curves",
      "Wholesale rolls and retail cuts available in stock in Sharjah",
    ],
    rating: 4.9,
    reviewsCount: 78,
    price: "AED 65 / Meter",
    specifications: {
      column1: [
        { label: "Origin", value: "Imported USA Automotive Grade" },
        { label: "Roll Width", value: "1.52 Meters (60 inches wide)" },
        { label: "Foam Backing", value: "3.5mm High-Density PU Foam" },
        { label: "Face Fabric", value: "100% Warp-Knit Polyester" },
      ],
      column2: [
        { label: "Heat Tolerance", value: "Up to +110°C Continuous Roof Temperature" },
        { label: "Colors Available", value: "Factory Grey, Sand Beige, Black, Ivory White" },
        { label: "Applications", value: "Headliners, A/B/C Pillars, Sunvisors, Sunroof Paneling" },
        { label: "Compatibility", value: "All American, Japanese, German & European Cars" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 70, percentage: 90 },
      { stars: 4, count: 7, percentage: 9 },
      { stars: 3, count: 1, percentage: 1 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-7",
        author: "Bader Al Shehhi",
        initials: "BS",
        date: "August 2026",
        rating: 5,
        verified: true,
        comment:
          "My Range Rover headliner was falling down. Used this material with XCHEM adhesive, and the result is stunning. Perfect color match and hasn't sagged despite parking in the sun.",
      },
    ],
  },
  {
    id: 7,
    name: "XCHEM ENIFIX SP 300 Sprayable Contact Adhesive",
    longName: "XCHEM ENIFIX SP 300 High-Heat Sprayable Automotive Contact Adhesive",
    category: "Adhesives & Stitching Materials",
    subcategory: "CONTACT ADHESIVE",
    categoryPath: ["Home", "Products", "Adhesives & Stitching Materials", "XCHEM ENIFIX SP 300"],
    image: "/fb-posts/616292721_122201960192549942_1622826748855130685_n.jpg",
    additionalImages: [
      "/fb-posts/616292721_122201960192549942_1622826748855130685_n.jpg",
      "/fb-posts/616529329_122201960264549942_4294963320968128239_n.jpg",
    ],
    description:
      "Professional-grade sprayable contact adhesive formulated specifically for automotive interiors, leather wrapping, dashboard re-skinning, and headliner bonding with extreme temperature tolerance.",
    longDescription: [
      "XCHEM ENIFIX SP 300 is the benchmark contact adhesive used by leading automotive trimmers across the UAE. Formulated with high-strength polychloroprene elastomers, it delivers instant tack and an unbreakable bond that withstands summer cabin temperatures reaching +120°C.",
      "Its fine, uniform spray pattern eliminates glue telegraphing through thin leather and headliner fabrics, ensuring smooth, professional interior finishes.",
    ],
    overviewTitle: "Extreme Heat Resistance for Middle East Upholstery",
    overviewContent: [
      "Temperature resistance up to +120°C (prevents roof and dashboard lifting)",
      "Fast flash-off time: ready to bond in 2 to 5 minutes",
      "Fine web spray mist prevents soaking into delicate fabrics",
      "Bonds leather, vinyl, foam, carpet, wood, metal, and molded plastics",
      "Available in bulk workshop canisters and drums",
    ],
    rating: 5.0,
    reviewsCount: 52,
    price: "AED 185 / Canister",
    specifications: {
      column1: [
        { label: "Manufacturer / Brand", value: "XCHEM International" },
        { label: "Product Code", value: "ENIFIX SP 300" },
        { label: "Base Polymer", value: "Synthetic Polychloroprene Rubber" },
        { label: "Heat Resistance", value: "+120°C Continuous Peak Resistance" },
      ],
      column2: [
        { label: "Open Time / Tack", value: "2 - 15 Minutes depending on temperature" },
        { label: "Viscosity", value: "Spray Grade / Low Viscosity for Pneumatic Guns" },
        { label: "Packaging", value: "15kg Canisters / 200L Industrial Drums" },
        { label: "Application", value: "Headliners, Leather Dashboards, Door Panels, Carpets" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 49, percentage: 94 },
      { stars: 4, count: 3, percentage: 6 },
      { stars: 3, count: 0, percentage: 0 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-8",
        author: "Zubair Ahmad",
        initials: "ZA",
        date: "July 2026",
        rating: 5,
        verified: true,
        comment:
          "The best headliner adhesive in UAE by far. Regular glues melt in summer heat, but ENIFIX SP 300 holds firm. Al Rahmaniah always has fresh stock.",
      },
    ],
  },
  {
    id: 8,
    name: "Fevicol Fast Tack Sprayable Foam & Upholstery Adhesive",
    longName: "Fevicol Fast Tack Sprayable Synthetic Rubber Foam Adhesive",
    category: "Adhesives & Stitching Materials",
    subcategory: "FOAM ADHESIVE",
    categoryPath: ["Home", "Products", "Adhesives & Stitching Materials", "Fevicol Fast Tack"],
    image: "/fb-posts/616529329_122201960264549942_4294963320968128239_n.jpg",
    additionalImages: [
      "/fb-posts/616529329_122201960264549942_4294963320968128239_n.jpg",
      "/fb-posts/616292721_122201960192549942_1622826748855130685_n.jpg",
    ],
    description:
      "Rapid-bonding sprayable adhesive designed for high-density foam bonding, car seat padding reinforcement, and acoustic deadener installation. Instant green strength with zero sink-in.",
    longDescription: [
      "Fevicol Fast Tack delivers quick, dependable bonding for foam-to-foam, foam-to-fabric, and foam-to-metal vehicle seat assemblies. Its high-solids formulation yields superior coverage with minimal solvent odor and rapid handling strength.",
      "Essential for auto seat restorers rebuilding collapsed side bolsters or laminating multi-density foam cushions.",
    ],
    overviewTitle: "Fast Green Strength & Soft Glue-Line for Seat Comfort",
    overviewContent: [
      "Zero glue-line hardening — keeps seat cushions soft and comfortable",
      "Instant green bond allows immediate handling and stitching",
      "High solids formulation provides up to 30% greater area coverage",
      "Safe on flexible polyurethane foams, latex, bonded foam, and scrim fabrics",
    ],
    rating: 4.8,
    reviewsCount: 41,
    price: "AED 160 / Can",
    specifications: {
      column1: [
        { label: "Brand", value: "Fevicol Fast Tack Automotive Series" },
        { label: "Application Method", value: "Spray Gun (1.8mm - 2.5mm Tip)" },
        { label: "Solids Content", value: "High Solids Rubber Blend (~28%)" },
        { label: "Drying Time", value: "60 to 90 Seconds" },
      ],
      column2: [
        { label: "Glue Line Flexibility", value: "100% Flexible Soft Seam (No Hard Spots)" },
        { label: "Color", value: "Translucent Light Amber" },
        { label: "Flammability", value: "Standard Industrial Safety Coded" },
        { label: "Suitable For", value: "Seat Cushioning, Armrests, Headrests, Foam Shapers" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 35, percentage: 85 },
      { stars: 4, count: 5, percentage: 12 },
      { stars: 3, count: 1, percentage: 3 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-9",
        author: "Mohammad Riaz",
        initials: "MR",
        date: "July 2026",
        rating: 5,
        verified: true,
        comment:
          "Very clean spray pattern and doesn't make the seat foam crusty or stiff. Great price for workshops.",
      },
    ],
  },
  {
    id: 9,
    name: "ARA Heavy-Duty Bonded Nylon & Polyester Stitching Thread",
    longName: "ARA Heavy-Duty Bonded Nylon & Polyester Upholstery Stitching Threads",
    category: "Adhesives & Stitching Materials",
    subcategory: "STITCHING THREADS",
    categoryPath: ["Home", "Products", "Adhesives & Stitching Materials", "ARA Heavy-Duty Stitching Thread"],
    image: "/fb-posts/625000072_122203468760549942_9148929700562058684_n.jpg",
    additionalImages: [
      "/fb-posts/625000072_122203468760549942_9148929700562058684_n.jpg",
      "/fb-posts/626124573_122203468610549942_6790340746446751625_n.jpg",
    ],
    description:
      "High-tensile bonded nylon and continuous filament polyester thread spools in all automotive colors. Engineered for heavy industrial sewing machines, diamond quilting, and leather seat seams.",
    longDescription: [
      "Standard domestic threads snap under the tension of automotive leather and the rigors of heavy daily wear. ARA Heavy-Duty Bonded Nylon threads are resin-bonded to prevent ply separation and fraying even during high-speed sewing through multiple layers of heavy vinyl and leather.",
      "Resistant to rot, mildew, perspiration, and intense UV sun exposure on steering wheels and seat tops.",
    ],
    overviewTitle: "Uncompromising Seam Strength for Heavy Leather",
    overviewContent: [
      "Bonded resin treatment prevents untwisting and needle eye friction",
      "Exceptional breaking strength for heavy load-bearing seat seams",
      "Available in thread sizes V69, V92, and V138",
      "Over 40 color spools in stock for perfect match or high-contrast top-stitching",
    ],
    rating: 4.9,
    reviewsCount: 59,
    price: "AED 35 / Spool",
    specifications: {
      column1: [
        { label: "Material", value: "Continuous Filament Bonded Nylon 6.6 / Polyester" },
        { label: "Thread Sizes", value: "Tex 70 (V-69), Tex 90 (V-92), Tex 135 (V-138)" },
        { label: "Tensile Strength", value: "Up to 11.5 kg Breaking Strength (V-138)" },
        { label: "Spool Length", value: "2,500m to 4,000m Industrial Cones" },
      ],
      column2: [
        { label: "UV Resistance", value: "UV Inhibited Lubricated Finish" },
        { label: "Needle Recommendation", value: "Size 110/18 to 140/22 Leather Point" },
        { label: "Color Palette", value: "Black, Red, Orange, Gold, Tan, Blue, Silver, White" },
        { label: "Applications", value: "Car Seats, Steering Wheels, Saddles, Convertible Tops" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 52, percentage: 88 },
      { stars: 4, count: 6, percentage: 10 },
      { stars: 3, count: 1, percentage: 2 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-10",
        author: "Farhan Siddiqui",
        initials: "FS",
        date: "June 2026",
        rating: 5,
        verified: true,
        comment:
          "Zero needle breaks on our Juki walking-foot machines. Contrast red stitching on black leather looks crisp and super sharp.",
      },
    ],
  },
  {
    id: 10,
    name: "CNC Precision Leather Punching & Perforation Service",
    longName: "Industrial CNC Precision Leather Punching & Diamond Perforation Service",
    category: "Custom Tailoring Services",
    subcategory: "PERFORATION SERVICE",
    categoryPath: ["Home", "Products", "Custom Tailoring Services", "CNC Precision Leather Perforation"],
    image: "/fb-posts/625122334_122203622084549942_6357118430980927124_n.jpg",
    additionalImages: [
      "/fb-posts/625122334_122203622084549942_6357118430980927124_n.jpg",
      "/fb-posts/592743969_122194708214549942_1469620853049452467_n.jpg",
      "/fb-posts/606888448_122199076580549942_6594976849503329056_n.jpg",
    ],
    description:
      "Automated industrial CNC leather punching and micro-perforation services. Transform solid leather rolls into breathable, ventilated, diamond-patterned panels for cooling car seats.",
    longDescription: [
      "Ventilated and air-conditioned car seats require precision-perforated leather to channel cooling airflow. Al Rahmaniah Auto operates computer-controlled multi-needle perforation machinery in Sharjah capable of micro-punching leather and leatherette rolls with mathematical accuracy.",
      "Choose from classic round micro-holes (Mercedes AMG style), hexagon dots, dual diamonds, or custom branded corporate patterns.",
    ],
    overviewTitle: "Breathable Ventilation for Cooled Seat Performance",
    overviewContent: [
      "High-speed CNC punching accurate to 0.1mm across full 1.4m rolls",
      "Essential for ventilated and AC seats in UAE climate",
      "Custom hole sizes: 0.8mm, 1.0mm, 1.2mm, and decorative slot patterns",
      "Contract punching available for third-party upholsterers and luxury coachbuilders",
    ],
    rating: 5.0,
    reviewsCount: 47,
    price: "Custom Quote / Wholesale",
    specifications: {
      column1: [
        { label: "Punching Technology", value: "Industrial CNC Multi-Die Automated Perforator" },
        { label: "Max Material Width", value: "1,600mm Roll Capacity" },
        { label: "Hole Diameters", value: "0.8mm, 1.0mm, 1.2mm, 1.5mm" },
        { label: "Patterns Available", value: "Standard Grid, Diamond Staggered, Hexagon, Starburst" },
      ],
      column2: [
        { label: "Compatible Materials", value: "Genuine Leather Hides, Napa Vinyl, Alcantara, Suede" },
        { label: "Turnaround Time", value: "Same-Day / 24h for In-Stock Rolls" },
        { label: "Air Permeability", value: "Compliant with OEM Ventilated Blower Specs" },
        { label: "Location", value: "Industrial Area 4 / 5, Sharjah, UAE" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 44, percentage: 94 },
      { stars: 4, count: 3, percentage: 6 },
      { stars: 3, count: 0, percentage: 0 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-11",
        author: "Rashid Al Shamsi",
        initials: "RS",
        date: "June 2026",
        rating: 5,
        verified: true,
        comment:
          "Had our Napa hides perforated here for an S-Class seat rebuild. The hole spacing is laser-exact and AC air blows through strongly. Excellent service.",
      },
    ],
  },
  {
    id: 11,
    name: "Microfiber Suede & Alcantara Automotive Interior Fabric",
    longName: "Premium Microfiber Suede & Alcantara-Style Automotive Interior Rolls",
    category: "Upholstery Leather & Fabrics",
    subcategory: "MICROFIBER SUEDE",
    categoryPath: ["Home", "Products", "Upholstery Leather & Fabrics", "Microfiber Suede Fabric"],
    image: "/fb-posts/592746335_122194714862549942_8464117864862490904_n.jpg",
    additionalImages: [
      "/fb-posts/592746335_122194714862549942_8464117864862490904_n.jpg",
      "/fb-posts/593463700_122194846754549942_643382399179757249_n.jpg",
      "/fb-posts/589562554_122194717010549942_1996671199089425578_n.jpg",
    ],
    description:
      "Ultra-soft, non-glare automotive microfiber suede engineered for sports car headliners, pillars, dashboard covers, and seat inserts. Superior tactile grip and sun-resistant rich matte finish.",
    longDescription: [
      "Give your vehicle cabin the race-ready ambiance of high-performance supercars. Our Microfiber Suede fabric combines velvety texture with extreme wear resistance, making it ideal for wrapping pillars, headliners, center consoles, and steering wheels.",
      "The matte nap absorbs windshield glare and remains cool to the touch even under blistering midday sun.",
    ],
    overviewTitle: "Motorsport Touch & Luxurious Non-Glare Finish",
    overviewContent: [
      "Superb suede nap texture identical to European luxury supercar interiors",
      "Non-directional grain enables clean, seamless wrapping",
      "Stain-resistant and hydrophobic treatment repels everyday dust and water droplets",
      "Available with or without foam lamination for flexible applications",
    ],
    rating: 4.9,
    reviewsCount: 71,
    price: "AED 85 / Meter",
    specifications: {
      column1: [
        { label: "Fabric Type", value: "High-Density Microfiber Polyester / Polyurethane Suede" },
        { label: "Roll Width", value: "1.45 Meters (57 inches)" },
        { label: "Weight", value: "380 gsm (Unbacked) / 480 gsm (Foam-Backed)" },
        { label: "Rub Resistance", value: "80,000+ Martindale Cycles" },
      ],
      column2: [
        { label: "Colors in Stock", value: "Deep Anthracite, Jet Black, Charcoal, Cognac, Crimson" },
        { label: "Sun Glare Reduction", value: "100% Matte Anti-Reflective Surface" },
        { label: "Applications", value: "Dashboards, Sunvisors, Headliners, Steering Wheels, Seat Inserts" },
        { label: "Cleaning", value: "Dry Brush or Damp Microfiber Towel" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 64, percentage: 90 },
      { stars: 4, count: 6, percentage: 8 },
      { stars: 3, count: 1, percentage: 2 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-12",
        author: "Adel Al Marzouqi",
        initials: "AM",
        date: "May 2026",
        rating: 5,
        verified: true,
        comment:
          "Wrapped my Corvette C8 dashboard and roof in this black suede. It completely eradicated windshield reflection and looks ultra-premium.",
      },
    ],
  },
  {
    id: 12,
    name: "Full Vehicle Interior Fitment & Detailing Workshop Service",
    longName: "Al Rahmaniah Complete Vehicle Interior Fitment, Upholstery & Mechanical Care",
    category: "Custom Tailoring Services",
    subcategory: "WORKSHOP SERVICE",
    categoryPath: ["Home", "Products", "Custom Tailoring Services", "Full Vehicle Interior Fitment"],
    image: "/fb-posts/772559987_122227343354549942_111308005383529435_n.jpg",
    additionalImages: [
      "/fb-posts/772559987_122227343354549942_111308005383529435_n.jpg",
      "/fb-posts/461850483_122102006072549942_7120796472205083476_n.jpg",
      "/fb-posts/468444244_122121132014553903_3240018591782060146_n.jpg",
    ],
    description:
      "Full turnkey interior transformation and mechanical workshop support at Al Rahmaniah Auto Sharjah. Complete seat upholstery, roof lining restoration, floor carpeting, steering re-wrapping, plus engine diagnostics, AC service, and brake care.",
    longDescription: [
      "Experience comprehensive automotive craftsmanship under one roof. At Al Rahmaniah Auto Accessories & Workshop in Sharjah Industrial Area, we combine master interior upholstery with advanced workshop mechanical care.",
      "Whether you are restoring a classic 4x4 or modernizing a family SUV, our expert technicians deliver flawless fitment, OEM precision, and reliable maintenance.",
    ],
    overviewTitle: "Complete Car Care & Interior Overhaul Under One Roof",
    overviewContent: [
      "Complete cabin strip-down, deep cleaning, and insulation installation",
      "Seat cover tailoring and precision wrinkle-free fitting",
      "Roof headliner renewal and pillar re-trimming",
      "Custom colored seatbelt conversion with full safety checks",
      "Full mechanical support: Computer Diagnostics, AC Refrigerant Gas, Oil Services, Brake Pads",
    ],
    rating: 5.0,
    reviewsCount: 154,
    price: "From AED 950 / Package",
    specifications: {
      column1: [
        { label: "Workshop Location", value: "Industrial Area 4, Sharjah, UAE" },
        { label: "Service Scope", value: "Seats, Roof, Floor, Belts, Steering & Mechanical Care" },
        { label: "Diagnostic Equipment", value: "Advanced Computer Scanning for All Makes & Models" },
        { label: "Materials Used", value: "100% Original Certified Materials" },
      ],
      column2: [
        { label: "Direct Booking Phone", value: "+971 55 867 4927 / +971 55 887 5678" },
        { label: "WhatsApp Inquiry", value: "Available 7 Days a Week" },
        { label: "Turnaround Time", value: "Same-Day to 48 Hours Depending on Scope" },
        { label: "Warranty", value: "Comprehensive Workmanship & Parts Warranty" },
      ],
    },
    ratingBreakdown: [
      { stars: 5, count: 145, percentage: 94 },
      { stars: 4, count: 9, percentage: 6 },
      { stars: 3, count: 0, percentage: 0 },
      { stars: 2, count: 0, percentage: 0 },
      { stars: 1, count: 0, percentage: 0 },
    ],
    reviews: [
      {
        id: "rev-13",
        author: "Khalid Bin Thani",
        initials: "KT",
        date: "October 2026",
        rating: 5,
        verified: true,
        comment:
          "Had my Prado completely revamped here: new diamond seat covers, red seatbelts, roof headliner, and an AC service. The car feels brand new. Friendly staff and fair pricing.",
      },
    ],
  },
];

export const defaultProductsData = allProductsData;

export function getProductById(id: string | number): ProductDetailItem {
  const numId = Number(id);
  const found = allProductsData.find(
    (p) => p.id === id || (!isNaN(numId) && p.id === numId)
  );
  if (found) return found;

  return allProductsData[0];
}
