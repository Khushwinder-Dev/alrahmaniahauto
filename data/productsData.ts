export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductDetailItem {
  id: number;
  name: string;
  nameAr?: string;
  longName: string;
  longNameAr?: string;
  category: string;
  categoryAr?: string;
  subcategory?: string;
  categoryPath?: string[];
  image: string;
  additionalImages?: string[];
  description: string;
  descriptionAr?: string;
  longDescription?: string[];
  overviewTitle?: string;
  overviewContent?: string[];
  rating: number;
  reviewsCount: number;
  price?: string;
  priceAr?: string;
  specifications: {
    column1: ProductSpecification[];
    column2: ProductSpecification[];
  };
}

export const PRODUCT_CATEGORIES_AR: Record<string, string> = {
  "All Categories": "جميع الفئات",
  "Car Seat Covers": "تلبيس مقاعد السيارات",
  "Upholstery Leather & Fabrics": "جلود وأقمشة التنجيد الفاخرة",
  "Custom Colored Seatbelts": "أحزمة أمان ملونة رياضية",
  "Floor Carpets & Mats": "سجاد ودعاسات الأرضيات 7D",
  "Roof Headliners": "بطانات وأسقف السيارات (ألياف ونجوم)",
};

export const PRODUCT_CATEGORIES = [
  "All Categories",
  "Car Seat Covers",
  "Upholstery Leather & Fabrics",
  "Custom Colored Seatbelts",
  "Floor Carpets & Mats",
  "Roof Headliners",
] as const;

export const allProductsData: ProductDetailItem[] = [
  {
    id: 1,
    name: "3D Diamond-Stitched PVC Leather Seat Covers",
    nameAr: "أغطية مقاعد جلد PVC بتطريز ماسي 3D",
    longName: "Premium 3D Diamond-Stitched PVC Leather Seat Covers",
    longNameAr: "أطقم أغطية مقاعد سيارات جلد PVC فاخر بتطريز ماسي ثلاثي الأبعاد",
    category: "Car Seat Covers",
    categoryAr: "تلبيس مقاعد السيارات",
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
    descriptionAr:
      "جدد مقصورة سيارتك بأفخم أغطية المقاعد المصنوعة من جلد PVC المتين والمطرز بنقشة ماسية ثلاثية الأبعاد، والمصمم خصيصاً لتحمل حرارة صيف الإمارات دون تشقق أو بهتان.",
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
    priceAr: "ابتداءً من 450 درهم",
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
  },
  {
    id: 2,
    name: "Custom Dual-Tone Ergonomic Tailored Seat Covers",
    nameAr: "تفصيل مقاعد جلدية بلونين وتصميم مريح",
    longName: "Custom Dual-Tone Ergonomic Tailored Leather Seat Covers",
    longNameAr: "أغطية وتلبيس مقاعد جلدية فاخرة بلونين مخصصة حسب مقاسات السيارة",
    category: "Car Seat Covers",
    categoryAr: "تلبيس مقاعد السيارات",
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
    descriptionAr:
      "أغطية مقاعد مفصلة بدقة حسب مقاسات سيارتك تجمع بين لونين متناسقين وتبطين مريح مع أطراف رياضية وحشوة داعمة للظهر أثناء القيادة.",
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
    priceAr: "ابتداءً من 650 درهم",
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
  },
  {
    id: 3,
    name: "Luxury Quilted Ergonomic Leather Seat Covers",
    nameAr: "أغطية مقاعد جلدية فاخرة مبطنة ومريحة",
    longName: "Luxury Quilted Ergonomic Leather Car Seat Cover Set",
    longNameAr: "طقم مقاعد جلدية مبطنة بتصميم تنفيذي فاخر لراحة الظهر",
    category: "Car Seat Covers",
    categoryAr: "تلبيس مقاعد السيارات",
    subcategory: "QUILTED LUXURY",
    categoryPath: ["Home", "Products", "Car Seat Covers", "Luxury Quilted Ergonomic Seat Covers"],
    image: "/fb-posts/580575558_122191406348549942_4454035087039568744_n.jpg",
    additionalImages: [
      "/fb-posts/580575558_122191406348549942_4454035087039568744_n.jpg",
      "/fb-posts/581519632_122191279118549942_7579179045438295882_n.jpg",
      "/fb-posts/611304648_122199913940549942_4994234153758255283_n.jpg",
    ],
    description:
      "Ergonomically contoured executive quilted leather seat covers engineered for long-distance driving support, premium cabin aesthetics, and complete protection of factory seats.",
    descriptionAr:
      "تصميم مريح مع خياطة ماسية مبطنة بإسفنج عالي الكثافة، يمنحك راحة قصوى في الرحلات الطويلة ويحمي مقاعد سيارتك الأصلية لسنوات.",
    longDescription: [
      "Crafted with precision quilt work and deep bolster padding, these seat covers elevate vehicle interiors to executive class. Built with high-density foam laminates and reinforced stitching, they cushion pressure points on long journeys.",
    ],
    overviewTitle: "Ergonomic Support & Sophisticated Craftsmanship",
    overviewContent: [
      "Contoured lumbar and lateral side bolsters reduce driving fatigue",
      "Reinforced multi-needle quilt stitching in black and burgundy tones",
      "Flame-laminated cushioning maintains shape over years of daily use",
      "Full coverage design protects OEM upholstery from wear, spills, and desert sand",
    ],
    rating: 4.9,
    reviewsCount: 88,
    price: "From AED 550",
    priceAr: "ابتداءً من 550 درهم",
    specifications: {
      column1: [
        { label: "Style", value: "Ergonomic Chevron / Diamond Quilt" },
        { label: "Material", value: "Premium Grain Napa Leatherette" },
        { label: "Padding", value: "High-Resilience Lumbar Foam" },
        { label: "Fitment", value: "Universal & Custom Tailored Options" },
      ],
      column2: [
        { label: "Airbag Safe", value: "Yes, Dedicated Breakaway Seams" },
        { label: "Cleaning", value: "Wipe Clean with Damp Cloth" },
        { label: "Colors Available", value: "Burgundy, Black, Cognac, Camel Tan" },
        { label: "Warranty", value: "2 Years" },
      ],
    },
  },
  {
    id: 4,
    name: "Rahmaniah Collection 2025 Automotive Leather Swatches & Rolls",
    nameAr: "كتالوج ولفائف جلود السيارات - تشكيلة الرحمانية 2025",
    longName: "Rahmaniah Collection 2025 Luxury Automotive Leatherette Swatches & Rolls",
    longNameAr: "كتالوج جلود السيارات الفاخرة ولفائف التنجيد تشكيلة الرحمانية 2025",
    category: "Upholstery Leather & Fabrics",
    categoryAr: "جلود وأقمشة التنجيد الفاخرة",
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
    descriptionAr:
      "أكثر من 60 لوناً وخامة من جلود نابا وجلود PVC المعتمدة المقاومة لأشعة الشمس والحرارة العالية، متوفرة بالرول وبالتفصيل حسب الطلب.",
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
    priceAr: "حسب الطلب والمقاس",
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
  },
  {
    id: 5,
    name: "Microfiber Suede & Alcantara Automotive Interior Fabric",
    nameAr: "أقمشة ألكانتارا وشامواه مايكروفايبر للسيارات",
    longName: "Premium Microfiber Suede & Alcantara-Style Automotive Interior Rolls",
    longNameAr: "قماش ألكانتارا وشامواه إيطالي فاخر لأسقف وديكورات السيارات",
    category: "Upholstery Leather & Fabrics",
    categoryAr: "جلود وأقمشة التنجيد الفاخرة",
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
    descriptionAr:
      "شامواه ناعم فاخر غير عاكس للضوء مخصص لبطانات الأسقف والأبواب ولوحة القيادة، يمنح سيارتك لمسة رياضية فائقة الفخامة.",
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
    priceAr: "ابتداءً من 120 درهم / متر",
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
  },
  {
    id: 6,
    name: "Diamond-Perforated Automotive Leatherette Rolls",
    nameAr: "رولات جلد صناعي مخرم بنقشات ماسية للتبريد",
    longName: "Diamond Micro-Perforated Breathable Automotive Leatherette Rolls",
    longNameAr: "لفائف جلود سيارات مخرمة بالليزر للتبريد والتهوية",
    category: "Upholstery Leather & Fabrics",
    categoryAr: "جلود وأقمشة التنجيد الفاخرة",
    subcategory: "PERFORATED LEATHER",
    categoryPath: ["Home", "Products", "Upholstery Leather & Fabrics", "Perforated Leatherette Rolls"],
    image: "/fb-posts/592743969_122194708214549942_1469620853049452467_n.jpg",
    additionalImages: [
      "/fb-posts/592743969_122194708214549942_1469620853049452467_n.jpg",
      "/fb-posts/606888448_122199076580549942_6594976849503329056_n.jpg",
      "/fb-posts/625122334_122203622084549942_6357118430980927124_n.jpg",
    ],
    description:
      "Precision diamond-perforated automotive synthetic leather engineered for seat center panels and ventilated air-conditioned car seats. Maximizes air circulation while retaining structural tensile integrity.",
    descriptionAr:
      "جلود سيارات مثقبة بالليزر خصيصاً لمقاعد التبريد والتهوية في الإمارات، تمنع حبس الحرارة وتوفر برودة وانتعاشاً مستمراً.",
    longDescription: [
      "Essential for hot Middle Eastern weather, this micro-perforated material channels cooling air from OEM seat blowers. Features laser-punched diamond matrix perforations that will not stretch or deform under seat loads.",
    ],
    overviewTitle: "Breathable Comfort for Ventilated Seats",
    overviewContent: [
      "Precision 1.0mm micro-hole perforations in diamond staggered formation",
      "Maximizes AC ventilation through seat cushions",
      "Heavy backing scrim prevents hole deformation under tension",
      "Matches factory luxury vehicle interiors (Mercedes, Lexus, Porsche)",
    ],
    rating: 4.8,
    reviewsCount: 62,
    price: "AED 65 / Meter",
    priceAr: "ابتداءً من 85 درهم / متر",
    specifications: {
      column1: [
        { label: "Hole Size", value: "1.0mm Micro-Perforation" },
        { label: "Roll Width", value: "1.40 Meters" },
        { label: "Pattern", value: "Diamond Staggered Matrix" },
        { label: "Air Permeability", value: "High Flow-Through Rate" },
      ],
      column2: [
        { label: "Backing", value: "Thin Breathable Knit Scrim" },
        { label: "Applications", value: "Ventilated Seats, Door Panels, Steering Grips" },
        { label: "Available Colors", value: "Onyx Black, Cognac Tan, Porcelain Cream" },
        { label: "Warranty", value: "2 Years" },
      ],
    },
  },
  {
    id: 7,
    name: "Luxury Custom Colored Seatbelts & Designer Webbing",
    nameAr: "أحزمة أمان ملونة رياضية معتمدة عالمياً",
    longName: "Luxury Custom Colored Seatbelts & Designer Monogram Webbing",
    longNameAr: "أحزمة أمان ملونة عالية الشد معتمدة بالمواصفات الرياضية",
    category: "Custom Colored Seatbelts",
    categoryAr: "أحزمة أمان ملونة رياضية",
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
    descriptionAr:
      "أضف طابعاً رياضياً مميزاً لسيارتك بأحزمة أمان ملونة (أحمر فيراري، أصفر بورشه، أزرق M-Power وغيرها)، مطابقة لمعايير السلامة العالمية.",
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
    priceAr: "ابتداءً من 180 درهم / حزام",
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
  },
  {
    id: 8,
    name: "CARFECT Premium Deep-Pile Automotive Carpet Rolls & Mats",
    nameAr: "سجاد وأرضيات كارفيكت المخملية الفاخرة",
    longName: "CARFECT Luxury Deep-Pile Velvet Automotive Carpet Rolls & Matting",
    longNameAr: "سجاد أرضيات سيارات مخملي فاخر وعازل للصوت من كارفيكت",
    category: "Floor Carpets & Mats",
    categoryAr: "سجاد ودعاسات الأرضيات 7D",
    subcategory: "AUTOMOTIVE CARPETS",
    categoryPath: ["Home", "Products", "Floor Carpets & Mats", "CARFECT Automotive Carpets"],
    image: "/fb-posts/590817435_122194716200549942_3770877090703741555_n.jpg",
    additionalImages: [
      "/fb-posts/590817435_122194716200549942_3770877090703741555_n.jpg",
      "/fb-posts/590283605_122194716296549942_7273319812958044024_n.jpg",
      "/fb-posts/461951688_122103674852549942_8184493955403732311_n.png",
    ],
    description:
      "CARFECT deep-pile luxury velvet floor carpeting rolls engineered for automotive floor renewal, sound deadening, and custom molded vehicle floor mats with anti-slip rubber backing.",
    descriptionAr:
      "سجاد سيارات مخملي سميك عالي الكثافة مقاوم للبقع والرطوبة، يضفي هدوءاً فائقاً داخل المقصورة ويعزل الصوت والحرارة.",
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
    priceAr: "ابتداءً من 350 درهم للطقم",
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
  },
  {
    id: 9,
    name: "Genuine USA Foam-Backed Automotive Roof Headliner Rolls",
    nameAr: "قماش سقف سيارات أمريكي أصلي مدعم بالإسفنج",
    longName: "Genuine USA Automotive Foam-Backed Roof Headliner Rolls",
    longNameAr: "لفائف بطانة سقف السيارات الأمريكية الأصلية مع طبقة عازلة",
    category: "Roof Headliners",
    categoryAr: "بطانات وأسقف السيارات (ألياف ونجوم)",
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
    descriptionAr:
      "قماش تنجيد بطانة السقف الأمريكي الأصلي المعالج ضد الحرارة والمزود بإسفنج مرن، مثالي لتجديد الأسقف المترهلة وسقف النجوم.",
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
    priceAr: "65 درهم / متر",
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
  },
  {
    id: 10,
    name: "Starlight Roof Headliner Optical Fiber Constellation",
    nameAr: "سقف نجوم روز رايز ألياف ضوئية ذكية",
    longName: "Custom Starlight Roof Headliner with App Control & Shooting Stars",
    longNameAr: "تجهيز سقف النجوم الذكي بتقنية الألياف الضوئية والشهب المتحركة",
    category: "Roof Headliners",
    categoryAr: "بطانات وأسقف السيارات",
    subcategory: "STARLIGHT",
    categoryPath: ["Home", "Products", "Roof Headliners", "Starlight Roof Headliner"],
    image: "/fb-posts/592124585_122194707128549942_2096198504496408305_n.jpg",
    additionalImages: [
      "/fb-posts/592124585_122194707128549942_2096198504496408305_n.jpg",
      "/fb-posts/598016407_122195897402549942_6284656040581813203_n.jpg",
    ],
    description:
      "Transform your car interior with our bespoke Rolls-Royce style starlight headliner. Features smartphone Bluetooth app control, dynamic RGB colors, and twinkle shooting stars.",
    descriptionAr:
      "حول مقصورة سيارتك إلى فضاء فندقي راقٍ مع نجوم سقف روز رايز بالألياف الضوئية وتقنية الشهب المتحركة والتحكم عبر تطبيق الهاتف الذكي.",
    longDescription: [
      "Precision hand-installed fiber optics delivering an authentic starlight ceiling experience.",
      "Complete with Bluetooth app color selection, music sync, and shooting star effects tailored for UAE luxury cars.",
    ],
    overviewTitle: "Luxury Starlight Headliner Custom Craftsmanship",
    overviewContent: [
      "High-output RGB LED light engines",
      "Over 400 to 1,000 individually drilled optic fibers",
      "Shooting star animations and twinkle modes",
      "Zero battery drain with smart ignition relay",
    ],
    rating: 5.0,
    reviewsCount: 142,
    price: "From AED 850",
    priceAr: "ابتداءً من 850 درهم",
    specifications: {
      column1: [
        { label: "Light Source", value: "Smart Bluetooth RGB LED Engine" },
        { label: "Fibers", value: "450 - 1000 End-Glow Strands" },
        { label: "Control", value: "iOS / Android Mobile App & Remote" },
        { label: "Voltage", value: "12V Automotive Relay" },
      ],
      column2: [
        { label: "Features", value: "Twinkle, Shooting Stars, Music Sync" },
        { label: "Compatibility", value: "All Sedans, Coupes & SUVs" },
        { label: "Warranty", value: "2 Years Al Rahmaniah Warranty" },
        { label: "Installation", value: "Sharjah Showroom Fitting Bays" },
      ],
    },
  },
  {
    id: 11,
    name: "Custom 7D Diamond Molded All-Weather Floor Mats",
    nameAr: "دعاسات سيارات 7D فاخرة مقاومة للماء والحرارة",
    longName: "Precision 7D Laser-Cut Double Layer Waterproof Floor Mats",
    longNameAr: "أطقم دعاسات 7D بطبقتين مقاومة للرمال والأتربة مقصوصة بالليزر",
    category: "Floor Carpets & Mats",
    categoryAr: "سجاد ودعاسات 7D",
    subcategory: "7D MATS",
    categoryPath: ["Home", "Products", "Floor Carpets & Mats", "7D Floor Mats"],
    image: "/fb-posts/593463700_122194846754549942_643382399179757249_n.jpg",
    additionalImages: [
      "/fb-posts/593463700_122194846754549942_643382399179757249_n.jpg",
      "/fb-posts/626124573_122203468610549942_6790340746446751625_n.jpg",
    ],
    description:
      "High-edge 7D all-weather molded floor mats offering complete carpet protection against sand, water spills, and daily wear in UAE driving conditions.",
    descriptionAr:
      "دعاسات 7D فائقة الجودة بحواف مرتفعة وتصميم ليزري مطابق للموديل لحماية أرضية السيارة تماماً من الرمال والماء وسهولة التنظيف التامة.",
    longDescription: [
      "Heavy-duty multi-layer construction with detachable curly mat for quick cleaning.",
      "Laser measured specifically for sedans, 4x4s, and luxury SUVs across the UAE.",
    ],
    overviewTitle: "Full Cabin Edge-to-Edge Floor Protection",
    overviewContent: [
      "High perimeter walls trap dirt, mud, and liquid spills",
      "Detachable coil wire top mat for instant cleaning",
      "Anti-skid bottom spikes prevent pedal interference",
      "Odorless, non-toxic, heat-resistant PVC composite",
    ],
    rating: 4.9,
    reviewsCount: 110,
    price: "From AED 320",
    priceAr: "ابتداءً من 320 درهم",
    specifications: {
      column1: [
        { label: "Material", value: "7-Layer EVA + Heavy-Duty PVC Leather" },
        { label: "Fitment", value: "Laser Cut Exact OEM Vehicle Shape" },
        { label: "Top Layer", value: "Detachable Curly Coil Mat" },
        { label: "Waterproof", value: "100% Sealed & Spill-Proof" },
      ],
      column2: [
        { label: "Weather Rating", value: "Engineered for UAE Sand & Extreme Heat" },
        { label: "Cleaning", value: "Hose Off / Wipe Clean in Seconds" },
        { label: "Anti-Slip", value: "Safety Retention Fasteners & Bottom Grips" },
        { label: "Colors", value: "Black/Red, Tan/Gold, Coffee, Triple Black" },
      ],
    },
  },
  {
    id: 12,
    name: "German Napa Perforated Luxury Leather Rolls",
    nameAr: "لفائف جلد نابا ألماني مخرم فاخر للسيارات",
    longName: "Executive German Napa Micro-Perforated Automotive Leather",
    longNameAr: "جلود نابا ألمانية أصلية مخرمة لتبريد وتنجيد المقاعد الفاخرة",
    category: "Upholstery Leather & Fabrics",
    categoryAr: "جلود وأقمشة التنجيد",
    subcategory: "NAPA LEATHER",
    categoryPath: ["Home", "Products", "Upholstery Leather & Fabrics", "German Napa Leather"],
    image: "/fb-posts/588668836_122194707920549942_6964088685681111711_n.jpg",
    additionalImages: [
      "/fb-posts/588668836_122194707920549942_6964088685681111711_n.jpg",
      "/fb-posts/625000072_122203468760549942_9148929700562058684_n.jpg",
    ],
    description:
      "Imported German automotive-grade Napa leather rolls with micro-perforations ideal for ventilated cooling seats and luxury re-trimming in Sharjah.",
    descriptionAr:
      "لفائف جلد نابا ألماني فاخر بنقشات تخريم دقيقة متوافقة مع تبريد وتدفئة المقاعد وتوفر لمسة نعومة فائقة ومقاومة للحرارة العالية.",
    longDescription: [
      "Supreme soft touch, high tensile strength, and color-fast dyes that resist UV fading.",
      "Available by the meter or in full wholesale rolls for workshops and car interior enthusiasts.",
    ],
    overviewTitle: "Bespoke German Napa Leather for Luxury Retrims",
    overviewContent: [
      "Ultra-fine grain texture with supple hand feel",
      "Micro-perforated pattern for seat ventilation systems",
      "UV resistant and scratch-resistant automotive finish",
      "Available in Black, Cognac, Saddle Brown, and Ivory",
    ],
    rating: 4.9,
    reviewsCount: 96,
    price: "AED 95 / Meter",
    priceAr: "95 درهم / متر",
    specifications: {
      column1: [
        { label: "Origin", value: "German Automotive Specification" },
        { label: "Pattern", value: "Precision Micro-Perforated" },
        { label: "Roll Width", value: "1.40 Meters" },
        { label: "Thickness", value: "1.2mm High-Density Grain" },
      ],
      column2: [
        { label: "Cooling Support", value: "Fully Compatible with Ventilated Seats" },
        { label: "UV Durability", value: "UV Protected Against UAE Sun Cracking" },
        { label: "Applications", value: "Seats, Steering Wheels, Door Cards, Dash" },
        { label: "Availability", value: "By Meter or Wholesale Roll in Sharjah" },
      ],
    },
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
