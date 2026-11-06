"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

export interface Translations {
  nav: {
    services: string;
    solutions: string;
    projects: string;
    products: string;
    industries: string;
    subcontractors: string;
    resources: string;
    company: string;
    careers: string;
    contact: string;
    getQuote: string;
    searchPlaceholder: string;
    langToggle: string;
  };
  hero: {
    eyebrow: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    exploreServices: string;
    exploreProject: string;
    stat1: string;
    stat2: string;
    stat3: string;
    stat4: string;
    videoMode: string;
    videoPaused: string;
    photo: string;
    playVideoHint: string;
    pauseVideoHint: string;
    resumeVideoHint: string;
    muteAudio: string;
    unmuteAudio: string;
    returnToPhoto: string;
  };
  whyChooseUs: {
    title: string;
    exploreMore: string;
    watchVideo: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
  };
  featured: {
    title: string;
    subtitle: string;
    previous: string;
    next: string;
    projects: {
      name: string;
      category: string;
      location: string;
      type: string;
      status: string;
      completed: string;
      inProgress: string;
      planning: string;
    }[];
  };
  services: {
    title: string;
    subtitle: string;
    getStarted: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      title: string;
    }[];
  };
  blog: {
    badge: string;
    titlePrefix: string;
    titleAccent: string;
    readFull: string;
    readMore: string;
    featured: {
      date: string;
      category: string;
      title: string;
      excerpt: string;
      image: string;
    };
    side: {
      date: string;
      category: string;
      title: string;
      excerpt: string;
      image: string;
    }[];
  };
  footer: {
    tagline1: string;
    tagline2: string;
    companyDescription: string;
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      subscribe: string;
      successMsg: string;
      errorMsg: string;
      invalidMsg: string;
    };
    servicesTitle: string;
    servicesLinks: string[];
    resourcesTitle: string;
    resourcesLinks: string[];
    companyTitle: string;
    companyLinks: string[];
    contactTitle: string;
    phone1: string;
    phone2: string;
    email1: string;
    email2: string;
    location: string;
    workingHours: string;
    closedDay: string;
    copyright: string;
    scrollToTop: string;
    exploreMore: string;
  };
  faq: {
    titlePrefix: string;
    titleAccent: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
    stillHave: {
      title: string;
      subtitle: string;
      button: string;
    };
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      services: "Services",
      solutions: "Solutions",
      projects: "Projects",
      products: "Products",
      industries: "Industries",
      subcontractors: "Subcontractors",
      resources: "Resources",
      company: "Company",
      careers: "Careers",
      contact: "Contact",
      getQuote: "GET A QUOTE",
      searchPlaceholder: "Search...",
      langToggle: "العربية",
    },
    hero: {
      eyebrow: "BESPOKE AUTO ACCESSORIES & UPHOLSTERY IN SHARJAH",
      titlePart1: "Custom Craftsmanship &",
      titlePart2: "Exclusive Auto Accessories",
      description:
        "Bespoke 3D leather seat covers, precision 7D floor mats, custom colored seatbelts, and automotive electronics engineered for extreme UAE durability in Sharjah.",
      exploreServices: "EXPLORE ACCESSORIES",
      exploreProject: "GET A QUOTE",
      stat1: "Years Experience",
      stat2: "Vehicles Upgraded",
      stat3: "Top Accessories",
      stat4: "Satisfaction Rate",
      videoMode: "Workshop Video",
      videoPaused: "Video Paused",
      photo: "Photo",
      playVideoHint: "Click to watch workshop video",
      pauseVideoHint: "Click to pause",
      resumeVideoHint: "Click to play",
      muteAudio: "Mute audio",
      unmuteAudio: "Unmute audio",
      returnToPhoto: "Return to photo banner",
    },
    whyChooseUs: {
      title: "Why Choose Al Rahmaniah Auto?",
      exploreMore: "Explore Products",
      watchVideo: "Watch Showcase",
      feature1Title: "Laser Precision Fitment",
      feature1Desc:
        "Over 15 years of master craftsmanship tailoring bespoke leather seat covers and 7D floor liners with 100% factory OEM fitment.",
      feature2Title: "Heat & UV Gulf Resistance",
      feature2Desc:
        "Engineered with premium German Napa leatherette and UV-stabilized materials that resist cracking and fading under extreme UAE summer heat.",
      feature3Title: "Same-Day Turnaround & Fitting",
      feature3Desc:
        "We value your schedule with rapid expert installation at our Sharjah workshop or express dispatch across all 7 Emirates.",
    },
    featured: {
      title: "Our Featured Projects",
      subtitle: "Explore Our Highlighted Projects That Reflect Our Identity",
      previous: "Previous",
      next: "Next",
      projects: [
        {
          name: "Axel Towers",
          category: "Building & Interior",
          location: "Dubai, UAE",
          type: "Commercial",
          status: "Completed",
          completed: "Completed",
          inProgress: "In Progress",
          planning: "Planning",
        },
        {
          name: "Glass Hotel",
          category: "Architecture",
          location: "Abu Dhabi, UAE",
          type: "Hospitality",
          status: "Completed",
          completed: "Completed",
          inProgress: "In Progress",
          planning: "Planning",
        },
        {
          name: "Concord Tower",
          category: "Mega Architecture",
          location: "Sharjah, UAE",
          type: "Residential",
          status: "In Progress",
          completed: "Completed",
          inProgress: "In Progress",
          planning: "Planning",
        },
        {
          name: "Marina Heights",
          category: "Mega Architecture",
          location: "Dubai Marina, UAE",
          type: "Mixed Use",
          status: "Planning",
          completed: "Completed",
          inProgress: "In Progress",
          planning: "Planning",
        },
        {
          name: "Sky Gardens",
          category: "Green Architecture",
          location: "Al Ain, UAE",
          type: "Residential",
          status: "Completed",
          completed: "Completed",
          inProgress: "In Progress",
          planning: "Planning",
        },
        {
          name: "Business Hub",
          category: "Commercial Design",
          location: "Fujairah, UAE",
          type: "Office",
          status: "In Progress",
          completed: "Completed",
          inProgress: "In Progress",
          planning: "Planning",
        },
      ],
    },
    services: {
      title: "Our Products & Services",
      subtitle: "Bespoke craftsmanship & automotive upgrades engineered for UAE climate.",
      getStarted: "Get a Quote",
      items: [
        {
          title: "Custom Car Seat Covers",
          description:
            "Laser-measured 3D diamond quilted, Napa leatherette, and breathable seat covers tailored to your exact car model.",
        },
        {
          title: "7D All-Weather Floor Mats",
          description:
            "Deep-dish molded floor mats with detachable curly carpet layer, offering complete sandproof and spill-proof interior protection.",
        },
        {
          title: "Custom Colored Seatbelts",
          description:
            "High-tensile certified safety seatbelts available in over 30 vibrant sports colors including Ferrari Red and M-Power Blue.",
        },
        {
          title: "Starlight Roof Headliners",
          description:
            "Rolls-Royce inspired fiber optic twinkling starlight ceilings and premium Alcantara suede roof lining revamps.",
        },
        {
          title: "Car Electronics & Audio",
          description:
            "Crystal-clear Android touchscreens, Apple CarPlay, DSP amplifiers, 360-degree cameras, and premium sound upgrades.",
        },
        {
          title: "Laser LED Lighting",
          description:
            "High-lumen laser LED headlamps, fog lights, and app-controlled ambient cabin interior lighting strips.",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      subtitle: "Discover how we can elevate your experience",
      items: [
        {
          name: "Yousuf Noor",
          title:
            "We are impressed by their ability to meet our specific needs and their strong customer service. We appreciated the high level of customer services.",
        },
        {
          name: "Stella Smith, New York",
          title:
            "Al Rahmaniah Auto Maintenance delivered exactly what we expected — professional work, timely completion, and great communication from start to finish.",
        },
        {
          name: "Abdur Gaffar, Dubai",
          title:
            "Their technical expertise and dedication to quality truly set them apart. Every step of our project was handled with professionalism and care.",
        },
        {
          name: "Muhammad Salim, Dubai",
          title:
            "Outstanding engineering solutions with exceptional attention to detail. Their team delivered beyond our expectations with professional service throughout.",
        },
        {
          name: "Ahmed Hassan, Dubai",
          title:
            "Reliable and efficient service delivery. Al Rahmaniah Auto Maintenance consistently provides high-quality work with excellent project management and communication.",
        },
        {
          name: "Milon Islam, Dubai",
          title:
            "Their technical expertise and commitment to excellence made our project a complete success. Highly recommend their engineering services.",
        },
      ],
    },
    blog: {
      badge: "BLOG & INSIGHTS",
      titlePrefix: "Latest",
      titleAccent: "News & Articles",
      readFull: "Read More",
      readMore: "Read More",
      featured: {
        date: "FEB 25, 2026",
        category: "PROJECT MANAGER",
        title: "Epoxy Floor Coating Durable, Seamless & Long-Lasting Flooring",
        excerpt:
          "Epoxy floor coating creates a strong, seamless, easy-to-maintain surface that protects floors from chemicals and heavy traffic professional finish.",
        image: "/media/Images/blogSection/Img (4).png",
      },
      side: [
        {
          date: "FEB 25, 2026",
          category: "PROJECT MANAGER",
          title: "Epoxy Floor Coating Durable, Seamless & Long-Lasting Flooring",
          excerpt:
            "Polyurea coating provides fast-curing, chemicals, abrasion, and harsh conditions.",
          image: "/media/Images/blogSection/Img (5).png",
        },
        {
          date: "FEB 25, 2026",
          category: "PROJECT MANAGER",
          title:
            "Polyurea Coating Waterproofing Fast, Flexible & Durable Protection",
          excerpt:
            "Industrial coatings protect against corrosion, chemicals, and heavy wear,",
          image: "/media/Images/blogSection/Img (6).png",
        },
        {
          date: "FEB 25, 2026",
          category: "PROJECT MANAGER",
          title:
            "Injection Waterproofing Targeted Leak Sealing For Lasting Protection",
          excerpt:
            "Polyurea coating provides fast-curing, abrasion, and harsh conditions.",
          image: "/media/Images/blogSection/Rectangle 34625007.png",
        },
      ],
    },
    footer: {
      tagline1: "Crafting Comfort.",
      tagline2: "Delivering Automotive Luxury",
      companyDescription:
        "Al Rahmaniah Auto Accessories is Sharjah’s trusted destination for custom leather seat covers, 7D floor mats, automotive lighting, car electronics, and premium interior & exterior styling accessories.",
      newsletter: {
        title: "Subscribe for Car Styling Tips & Special Offers",
        description:
          "Receive UAE seasonal styling checklists, new arrival alerts, custom fitment promotions, and VIP discount coupons directly to your inbox.",
        placeholder: "Enter Your Email",
        subscribe: "Subscribe",
        successMsg: "🎉 Subscribed successfully! Check your email for your 10% discount code.",
        errorMsg: "Something went wrong. Please try again.",
        invalidMsg: "Please enter a valid email address.",
      },
      servicesTitle: "Products",
      servicesLinks: [
        "Custom Seat Covers",
        "7D Floor Mats",
        "Colored Seatbelts",
        "Starlight Roof",
        "Car Electronics",
      ],
      resourcesTitle: "Resources",
      resourcesLinks: [
        "Downloads",
        "FAQs",
        "Privacy",
        "Terms",
      ],
      companyTitle: "Company",
      companyLinks: [
        "About Us",
        "Certifications",
        "Media",
        "Blog",
        "Careers",
        "Contact",
      ],
      contactTitle: "Contact",
      phone1: "+971 55 887 5678",
      phone2: "+971 55 867 4927",
      email1: "info@alrahmaniahauto.com",
      email2: "alrahmaniahauto@gmail.com",
      location: "Industrial Area 4 & 5,\nSharjah, United Arab Emirates",
      workingHours: "Sat - Thu: 8:00 AM - 10:00 PM",
      closedDay: "Friday: 2:00 PM - 10:00 PM",
      copyright: "© 2026 Al Rahmaniah Auto Accessories & Styling. All Rights Reserved.",
      scrollToTop: "Scroll to top",
      exploreMore: "View All Products",
    },
    faq: {
      titlePrefix: "Frequently Asked",
      titleAccent: "Questions",
      subtitle:
        "Find answers regarding custom fitment, materials, UAE delivery, warranties, and showroom visits.",
      items: [
        {
          question: "Can seat covers be tailored for my specific car model?",
          answer:
            "Yes! Every set is laser-cut and custom-stitched to the exact contours, headrests, and airbag seams of your vehicle make and model.",
        },
        {
          question: "What materials do you use for UAE heat durability?",
          answer:
            "We use heat-reflective German Napa leatherette, heavy-duty breathable PVC, and genuine Alcantara designed to withstand over 50°C summer heat.",
        },
        {
          question: "Do you offer warranty on leather seat covers and floor mats?",
          answer:
            "Yes, we provide up to 3 years written warranty against cracking, peeling, stitch failure, and UV fading.",
        },
        {
          question: "Can I inspect physical material swatches in Sharjah?",
          answer:
            "Absolutely. Visit our showrooms in Industrial Area 4 & 5 to examine colors, leather grades, and custom stitching patterns in person.",
        },
        {
          question: "Do you provide same-day installation?",
          answer:
            "Yes, most standard custom fitments and electronics installations are completed within 1 to 2 hours at our showroom bays.",
        },
        {
          question: "Do you ship across all 7 UAE Emirates?",
          answer:
            "Yes, we offer express door-to-door courier delivery across Dubai, Abu Dhabi, Sharjah, Ajman, RAK, Fujairah, and UAQ.",
        },
      ],
      stillHave: {
        title: "Still have questions?",
        subtitle:
          "Our auto accessories and styling specialists are ready to help you.",
        button: "Contact Us",
      },
    },
  },
  ar: {
    nav: {
      services: "الخدمات",
      solutions: "الحلول",
      projects: "المشاريع",
      products: "المنتجات",
      industries: "القطاعات",
      subcontractors: "المقاولون من الباطن",
      resources: "الموارد",
      company: "عن الشركة",
      careers: "الوظائف",
      contact: "اتصل بنا",
      getQuote: "طلب عرض سعر",
      searchPlaceholder: "بحث...",
      langToggle: "English",
    },
    hero: {
      eyebrow: "مركز تفصيل وتنجيد وزينة السيارات في الشارقة",
      titlePart1: "فخامة مقصورة سيارتك و",
      titlePart2: "إكسسوارات حصرية معتمدة",
      description:
        "أرقى تشكيلات أغطية المقاعد الجلدية، دعاسات 7D الفاخرة، أحزمة الأمان الملونة، والإلكترونيات المصممة لأقسى درجات حرارة الإمارات بالشارقة.",
      exploreServices: "استكشف الخدمات",
      exploreProject: "احجز موعداً",
      stat1: "سنوات خبرة",
      stat2: "سيارة تمت صيانتها",
      stat3: "خدمة متخصصة",
      stat4: "نسبة رضا العملاء",
      videoMode: "فيديو الورشة",
      videoPaused: "الفيديو متوقف",
      photo: "صورة",
      playVideoHint: "انقر لمشاهدة فيديو الورشة",
      pauseVideoHint: "انقر للإيقاف المؤقت",
      resumeVideoHint: "انقر للتشغيل",
      muteAudio: "كتم الصوت",
      unmuteAudio: "تشغيل الصوت",
      returnToPhoto: "العودة إلى الصورة",
    },
    whyChooseUs: {
      title: "لماذا تختار الرحمانية لزينة السيارات؟",
      exploreMore: "استكشف المزيد",
      watchVideo: "شاهد الفيديو",
      feature1Title: "تفصيل ليزري متقن",
      feature1Desc:
        "خبرة لأكثر من 15 عاماً في تفصيل مقاعد السيارات ودعاسات 7D بمقاسات تطابق الوكالة 100% لجميع الموديلات.",
      feature2Title: "خامات تتحمل شمس الإمارات",
      feature2Desc:
        "نستخدم جلود نابا ألمانية وبوليمر عالي المتانة معالج ضد الأشعة فوق البنفسجية والتشقق مع ضمان خطي يصل لـ 3 سنوات.",
      feature3Title: "تسليم سريع وتركيب بنفس اليوم",
      feature3Desc:
        "نقدر وقتك ونضمن تركيباً سريعاً ودقيقاً في ورشتنا بالمنطقة الصناعية 4 و 5 بالشارقة أو شحناً فورياً لكافة الإمارات.",
    },
    featured: {
      title: "مشاريعنا البارزة",
      subtitle: "استكشف مشاريعنا البارزة التي تعكس هويتنا",
      previous: "السابق",
      next: "التالي",
      projects: [
        {
          name: "أبراج أكسيل",
          category: "المباني والديكور الداخلي",
          location: "دبي، الإمارات",
          type: "تجاري",
          status: "مكتمل",
          completed: "مكتمل",
          inProgress: "قيد التنفيذ",
          planning: "في التخطيط",
        },
        {
          name: "فندق الجلاس",
          category: "العمارة",
          location: "أبو ظبي، الإمارات",
          type: "ضيافة",
          status: "مكتمل",
          completed: "مكتمل",
          inProgress: "قيد التنفيذ",
          planning: "في التخطيط",
        },
        {
          name: "برج كونكورد",
          category: "العمارة العملاقة",
          location: "الشارقة، الإمارات",
          type: "سكني",
          status: "قيد التنفيذ",
          completed: "مكتمل",
          inProgress: "قيد التنفيذ",
          planning: "في التخطيط",
        },
        {
          name: "مرتفعات المارينا",
          category: "العمارة العملاقة",
          location: "دبي مارينا، الإمارات",
          type: "متعدد الاستخدامات",
          status: "في التخطيط",
          completed: "مكتمل",
          inProgress: "قيد التنفيذ",
          planning: "في التخطيط",
        },
        {
          name: "حدائق السماء",
          category: "العمارة الخضراء",
          location: "العين، الإمارات",
          type: "سكني",
          status: "مكتمل",
          completed: "مكتمل",
          inProgress: "قيد التنفيذ",
          planning: "في التخطيط",
        },
        {
          name: "مركز الأعمال",
          category: "التصميم التجاري",
          location: "الفجيرة، الإمارات",
          type: "مكاتب",
          status: "قيد التنفيذ",
          completed: "مكتمل",
          inProgress: "قيد التنفيذ",
          planning: "في التخطيط",
        },
      ],
    },
    services: {
      title: "منتجاتنا وخدماتنا",
      subtitle: "تفصيل متقن وإكسسوارات حصرية مصممة خصيصاً لأجواء وحرارة الإمارات.",
      getStarted: "طلب تسعيرة",
      items: [
        {
          title: "تفصيل وتلبيس مقاعد السيارات",
          description:
            "تفصيل ليزر دقيق لأغطية المقاعد بجلود نابا الألمانية وجلود PVC المطرزة بنقشات ماسية 3D مع مراعاة الوسائد الهوائية.",
        },
        {
          title: "دعاسات وأرضيات 7D المقاومة للماء",
          description:
            "حماية شاملة للأرضيات من الرمال والسوائل بتصميم ثلاثي الأبعاد مقولب مع طبقة سجاد قابلة للفك والغسيل بسهولة.",
        },
        {
          title: "أحزمة أمان ملونة رياضية معتمدة",
          description:
            "أحزمة أمان عالية الشد معتمدة بالمواصفات الرياضية متوفرة بأكثر من 30 لوناً مميزاً كالأحمر الرياضي والأزرق والأصفر.",
        },
        {
          title: "سقف نجوم رولز رويس (ألياف ضوئية)",
          description:
            "سقف فايبر أوبتيك متلألئ مع خيارات التحكم بالألوان، وتجديد كامل لبطانة السقف بأقمشة الشامواه والألكانتارا.",
        },
        {
          title: "شاشات أندرويد وإلكترونيات السيارات",
          description:
            "شاشات لمس فائقة الوضوح، أنظمة Apple CarPlay و Android Auto، مضخمات صوت DSP، وكاميرات مراقبة 360 درجة.",
        },
        {
          title: "إضاءات ليزر LED وعدسات فائقة",
          description:
            "لمبات وعدسات ليزر LED قوية تزيد مدى الرؤية الليلية بنسبة 300%، مع إضاءات ليد داخلية محيطية متعددة الألوان.",
        },
      ],
    },
    testimonials: {
      title: "آراء العملاء",
      subtitle: "اكتشف كيف يمكننا تحسين تجربتك",
      items: [
        {
          name: "يوسف نور",
          title:
            "لقد أعجبنا قدرتنا على تلبية احتياجاتنا المحددة وخدمة العملاء القوية. لقد قدّرنا المستوى العالي من خدمات العملاء.",
        },
        {
          name: "ستيلا سميث، نيويورك",
          title:
            "قدمت ورشة الرحمانية لصيانة السيارات بالضبط ما توقعناه - عمل احترافي، إكمال في الوقت المحدد، وتواصل رائع من البداية إلى النهاية.",
        },
        {
          name: "عبد الغفار، دبي",
          title:
            "خبرتهم التقنية وتفانيهم في الجودة يميزانهم حقاً. تم التعامل مع كل خطوة من مشروعنا باحترافية واهتمام.",
        },
        {
          name: "محمد سليم، دبي",
          title:
            "حلول هندسية استثنائية مع اهتمام استثنائي بالتفاصيل. تجاوز فريقهم توقعاتنا مع خدمة احترافية طوال الوقت.",
        },
        {
          name: "أحمد حسن، دبي",
          title:
            "تسليم خدمة موثوق وفعال. تقدم ورشة الرحمانية لصيانة السيارات باستمرار عملاً عالي الجودة مع إدارة ممتازة وتواصل متميز.",
        },
        {
          name: "ميلون إسلام، دبي",
          title:
            "خبرتهم التقنية والتزامهم بالتميز جعل مشروعنا نجاحاً كاملاً. أوصي بخدماتهم الهندسية بشدة.",
        },
      ],
    },
    blog: {
      badge: "المدونة والرؤى",
      titlePrefix: "أحدث",
      titleAccent: "الأخبار والمقالات",
      readFull: "اقرأ المزيد",
      readMore: "اقرأ المزيد",
      featured: {
        date: "٢٥ فبراير ٢٠٢٦",
        category: "إدارة المشاريع",
        title: "طلاء أرضية الإيبوكسي أرضية متينة وبديلة وطويلة الأمد",
        excerpt:
          "يُشكل طلاء أرضية الإيبوكسي سطحًا قويًا وسلسًا وسهل الصيانة يحمي الأرضيات من المواد الكيميائية والمرور الثقيل بلمسة احترافية.",
        image: "/media/Images/blogSection/Img (4).png",
      },
      side: [
        {
          date: "٢٥ فبراير ٢٠٢٦",
          category: "إدارة المشاريع",
          title: "طلاء أرضية الإيبوكسي أرضية متينة وبديلة وطويلة الأمد",
          excerpt:
            "يوفر طلاء البولييوريا معالجة سريعة التصلب ومقاومة للمواد الكيميائية والتآكل والظروف القاسية.",
          image: "/media/Images/blogSection/Img (5).png",
        },
        {
          date: "٢٥ فبراير ٢٠٢٦",
          category: "إدارة المشاريع",
          title:
            "طلاء البولييوريا للعزل المائي حماية سريعة ومرنة ومتانة",
          excerpt:
            "تحمي الطلاءات الصناعية من التآكل والمواد الكيميائية والتلف الثقيل.",
          image: "/media/Images/blogSection/Img (6).png",
        },
        {
          date: "٢٥ فبراير ٢٠٢٦",
          category: "إدارة المشاريع",
          title:
            "العزل المائي بالحقن إغلاق مستهدف للتسريبات لحماية دائمة",
          excerpt:
            "يوفر طلاء البولييوريا معالجة سريعة ومقاومة للتآكل والظروف القاسية.",
          image: "/media/Images/blogSection/Rectangle 34625007.png",
        },
      ],
    },
    footer: {
      tagline1: "صياغة الراحة.",
      tagline2: "وفخامة مقصورة السيارات",
      companyDescription:
        "الرحمانية لإكسسوارات وزينة وتنجيد السيارات هي وجهتك الأولى في الشارقة لتفصيل مقاعد الجلد الفاخرة، دعاسات 7D المقولبة، الإضاءات، وشاشات الأندرويد مع ضمان الجودة.",
      newsletter: {
        title: "اشترك للحصول على أحدث العروض وتنسيقات السيارات",
        description:
          "احصل على عروض حصرية، أحدث موديلات تفصيل المقاعد، ودعاسات 7D مباشرة إلى بريدك الإلكتروني.",
        placeholder: "أدخل بريدك الإلكتروني",
        subscribe: "اشترك",
        successMsg: "🎉 تم الاشتراك بنجاح! تحقق من بريدك الإلكتروني للحصول على رمز خصم 10%.",
        errorMsg: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
        invalidMsg: "يرجى إدخال عنوان بريد إلكتروني صالح.",
      },
      servicesTitle: "المنتجات",
      servicesLinks: [
        "أغطية المقاعد الجلدية",
        "دعاسات 7D الفاخرة",
        "أحزمة الأمان الملونة",
        "نجوم السقف روز رايز",
        "شاشات وإلكترونيات السيارات",
      ],
      resourcesTitle: "الموارد",
      resourcesLinks: [
        "التحميلات",
        "الأسئلة الشائعة",
        "الخصوصية",
        "الشروط",
      ],
      companyTitle: "الشركة",
      companyLinks: [
        "عن الشركة",
        "الشهادات",
        "الميديا",
        "المدونة",
        "الوظائف",
        "اتصل بنا",
      ],
      contactTitle: "تواصل معنا",
      phone1: "+971 55 887 5678",
      phone2: "+971 55 867 4927",
      email1: "info@alrahmaniahauto.com",
      email2: "alrahmaniahauto@gmail.com",
      location: "المنطقة الصناعية 4 و 5،\nالشارقة، الإمارات العربية المتحدة",
      workingHours: "السبت - الخميس: 8:00 ص - 10:00 م",
      closedDay: "الجمعة: 2:00 ظهراً - 10:00 م",
      copyright: "© 2026 الرحمانية لزينة وتنجيد السيارات. جميع الحقوق محفوظة.",
      scrollToTop: "العودة للأعلى",
      exploreMore: "عرض جميع المنتجات",
    },
    faq: {
      titlePrefix: "الأسئلة",
      titleAccent: "الشائعة",
      subtitle:
        "إجابات على أكثر الاستفسارات تداولاً حول تفصيل المقاعد، وخامات جلود نابا، وضمان المنتجات وطرق التركيب بالشارقة.",
      items: [
        {
          question: "هل يمكن تفصيل أغطية المقاعد لموديل سيارتي بدقة؟",
          answer:
            "نعم بكل تأكيد! يتم أخذ مقاسات وقص كل طقم بالليزر وفقاً لموديل وسنة صنع سيارتك بدقة متناهية، مع مراعاة فتحات الوسائد الهوائية (الإيرباج) وأزرار التحكم لتبدو كفرش الوكالة الأصلي.",
        },
        {
          question: "ما هي الخامات التي تستخدمونها لمقاومة حرارة صيف الإمارات؟",
          answer:
            "نستخدم جلود نابا الألمانية المعالجة ضد الأشعة فوق البنفسجية، وجلود PVC المطرزة بطبقات عازلة، وأقمشة الألكانتارا التي لا تمتص الحرارة ولا تتشقق حتى في حرارة تفوق 50 درجة مئوية.",
        },
        {
          question: "هل المنتجات وتفصيل المقاعد مشمولة بالضمان؟",
          answer:
            "نعم، نوفر ضماناً خطياً يصل إلى 3 سنوات ضد التشقق أو تفكك الخياطة أو تغير اللون لجميع أطقم تفصيل المقاعد والدعاسات.",
        },
        {
          question: "هل يمكنني معاينة عينات الجلود والألوان شخصياً بالمعرض؟",
          answer:
            "نرحب بزيارتكم لمعارضنا بالمنطقة الصناعية 4 و 5 بالشارقة لمعاينة أكثر من 60 خامة ولوناً من جلود النابا وخيوط التطريز وتشكيلات الدعاسات شخصياً.",
        },
        {
          question: "كم يستغرق تفصيل وتركيب أغطية المقاعد والدعاسات؟",
          answer:
            "تستغرق عملية التركيب والتلبيس المباشر في ورشة المعرض ما بين ساعة إلى ساعتين فقط لمعظم السيارات مع تسليم في نفس اليوم.",
        },
        {
          question: "هل توفرون خدمة الشحن والتوصيل لجميع إمارات الدولة؟",
          answer:
            "نعم، نوفر خدمة شحن سريع وتوصيل للمنزل لكافة إمارات الدولة (دبي، أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، وأم القيوين).",
        },
      ],
      stillHave: {
        title: "لا تزال لديك أسئلة؟",
        subtitle: "فريق مستشاري زينة وتنجيد السيارات جاهز لمساعدتك والرد على كافة استفساراتك فوراً.",
        button: "تواصل معنا",
      },
    },
  },
};

interface LanguageContextType {
  language: Language;
  direction: Direction;
  isArabic: boolean;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("site_language") as Language | null;
    if (saved === "ar" || saved === "en") {
      setLanguageState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("site_language", lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "ar" : "en";
    setLanguage(nextLang);
  };

  const direction: Direction = language === "ar" ? "rtl" : "ltr";
  const isArabic = language === "ar";
  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        direction,
        isArabic,
        toggleLanguage,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
