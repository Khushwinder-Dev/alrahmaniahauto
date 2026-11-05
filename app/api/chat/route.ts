import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

interface UserInfo {
  name?: string;
  email?: string;
  phone?: string;
}

interface ChatRequestPayload {
  messages: ChatMessage[];
  userInfo?: UserInfo;
  isArabic?: boolean;
}

interface ChatApiResponse {
  success: boolean;
  reply: string;
  quickActions: string[];
  source: "gemini" | "fallback-knowledge-base";
  error?: string;
}

// Comprehensive Al Rahmaniah Auto Accessories Knowledge Engine
const FALLBACK_KNOWLEDGE: {
  triggers: string[];
  replyEn: (name?: string) => string;
  replyAr: (name?: string) => string;
  quickActionsEn: string[];
  quickActionsAr: string[];
}[] = [
  // 1. Custom Leather Seat Covers
  {
    triggers: ["seat", "seats", "cover", "covers", "leather", "napa", "upholstery", "stitch", "مقاعد", "كراسي", "تنجيد", "جلد", "نابا", "أغطية"],
    replyEn: (name) =>
      `${name ? `Dear ${name}, ` : ""}At **Al Rahmaniah Auto Accessories**, we specialize in bespoke, laser-measured car seat covers and custom upholstery:

• **Premium Materials**: 100% German Napa leatherette, Italian micro-perforated leather, breathable sports suede, and luxury Alcantara.
• **Perfect OEM Fit**: 3D laser-tailored to your exact vehicle make, model, and year with zero bunching or wrinkling.
• **Safety First**: Full compatibility with side-impact seat airbags (SRS) and built-in heating/cooling ventilation.
• **Custom Styling**: Choose custom diamond quilting, double-stitched contrast borders, perforated centers, and embossed logos.
• **Written Warranty**: Up to 3 Years written craftsmanship and material warranty.

Prices start from **AED 650** for sedans and **AED 950** for SUVs. Would you like a bespoke quotation or to see leather swatch colors?`,
    replyAr: (name) =>
      `${name ? `عزيزي ${name}، ` : ""}في **شركة الرحمانية لإكسسوارات السيارات**، نتميز بتفصيل وتنجيد أغطية المقاعد بالليزر بأعلى معايير الحرفية:

• **خامات فاخرة أصلية 100%**: جلد نابا ألماني، جلد إيطالي مخرم للتهوية، شامواه رياضي، وكانترارا فخم.
• **مقاس وكالة مضبوط**: تفصيل ليزري حصري لمطابقة كراسي سيارتك بدقة متناهية بدون أي تجاعيد.
• **أمان تام**: متوافق تماماً مع وسائد الهواء الجانبية (Airbags) وميزات تبريد وتدفئة المقاعد الأصلية.
• **خيارات تصميم غير محدودة**: تطريز ماسي (Diamond Stitching)، خيوط مزدوجة ملونة، وشعارات مخصصة.
• **ضمان خطي معتمد**: ضمان رسمي يصل إلى 3 سنوات على الجلود والخياطة.

الأسعار تبدأ من **650 درهم** لسيارات الصالون و **950 درهم** للسيارات العائلية والدفع الرباعي. هل تود الحصول على عرض سعر أو تصفح عينات الألوان؟`,
    quickActionsEn: ["Get Instant Price Quote", "7D Floor Mats Inquiries", "Showroom Location in Sharjah", "Chat on WhatsApp"],
    quickActionsAr: ["طلب عرض سعر فوري", "استفسار عن دعاسات 7D", "موقع المعرض في الشارقة", "تواصل عبر واتساب"],
  },

  // 2. 7D & 5D Luxury Floor Mats
  {
    triggers: ["mat", "mats", "7d", "5d", "carpet", "floor", "liner", "دعاسات", "أرضيات", "فرش", "موكيت", "داير"],
    replyEn: (name) =>
      `${name ? `Dear ${name}, ` : ""}Our **7D & 5D Laser-Cut Floor Mats** provide the ultimate luxury, all-weather interior protection for UAE driving conditions:

• **Deep Wall Protection**: Extra-high raised side walls protect your original carpet from sand, dust, mud, and drink spills.
• **Dual-Layer System**: Heavy-duty waterproof diamond leatherette base layer + detachable wire-coil carpet for quick pressure-washing.
• **Precision 3D Fitment**: Digitally scanned for your exact vehicle cabin pan with anti-slip backing and factory retention clips.
• **Trunk Mats Available**: Complete custom cargo area boot liners for SUVs and sedans.

Prices start from **AED 350 to AED 650**. Delivery and professional fitting are available across the UAE!`,
    replyAr: (name) =>
      `${name ? `عزيزي ${name}، ` : ""}توفر **دعاسات وأرضيات 7D و 5D الفاخرة** من الرحمانية الحماية القصوى لصالون سيارتك في أجواء الإمارات:

• **حواف مرتفعة شاملة**: تغطي أرضية السيارة ومساند الأقدام بالكامل لمنع تسرب الرمال والأتربة وسكب السوائل.
• **نظام الطبقتين العملي**: طبقة جلدية سفلية عازلة للماء ومقاومة للحرارة + طبقة موكيت سلكية قابلة للفك والغسيل السريع.
• **ثبات وأمان**: قواعد مانعة للانزلاق مع مشابك تثبيت مطابقة لمشابك الوكالة الأصلية.
• **فرش للدبة**: تفصيل بطانات حماية للصندوق الخلفي (الدبة) لكافة سيارات الدفع الرباعي والصالون.

الأسعار تبدأ من **350 إلى 650 درهم**. يتوفر التوصيل والتركيب الفوري في كافة إمارات الدولة!`,
    quickActionsEn: ["Custom Seat Covers", "Get Instant Quote", "Call +971 55 887 5678", "Chat on WhatsApp"],
    quickActionsAr: ["تفصيل مقاعد جلد", "طلب عرض سعر فوري", "اتصل الآن +971 55 887 5678", "تواصل عبر واتساب"],
  },

  // 3. Custom Colored Seatbelts
  {
    triggers: ["belt", "belts", "seatbelt", "seatbelts", "colored", "red belt", "yellow belt", "حزام", "أحزمة", "أحزمة أمان", "حزام ملون", "احزمة"],
    replyEn: (name) =>
      `${name ? `Dear ${name}, ` : ""}Elevate your vehicle cockpit with **OEM & FIA Certified Custom Colored Seatbelts**:

• **Available Colors**: Porsche Guards Red, Ferrari Giallo Yellow, BMW M-Performance Tri-Stripe, Tiffany Blue, Electric Orange, Racing Blue, Lime Green, and Champagne Gold.
• **Safety Certified**: High-tensile polyester webbing rated for over 2,500+ KG breaking strength, fully compliant with UAE RTA inspection regulations.
• **Factory Retention**: We retain your original seatbelt retractors, pre-tensioners, explosive charges, and safety sensors.
• **Fast Turnaround**: 2 to 4 hours complete installation for all 4 or 5 seats.

Prices start from **AED 150 per seat** or bundled package for front & rear rows.`,
    replyAr: (name) =>
      `${name ? `عزيزي ${name}، ` : ""}أضف لمسة رياضية فائقة لمقصورة سيارتك مع **أحزمة الأمان الملونة المعتمدة** من الرحمانية:

• **ألوان رياضية حصرية**: أحمر بورشه، أصفر فيراري، ثلاثي ألوان بي ام دبليو M-Power، أزرق تيفاني، برتقالي، أخضر لايم، وذهبي شامبين.
• **أمان معتمد 100%**: خيوط بوليستر عالية الشد تتحمل قوة سحب تفوق 2,500 كجم ومطابقة لاشتراطات الفحص الفني والمرور بالدولة.
• **بدون التأثير على الحساسات**: نحافظ على بكرات الشد الأصلية وحساسات وأجهزة شد الحزام (Pre-tensioners).
• **تركيب سريع**: يستغرق التركيب من ساعتين إلى 4 ساعات لطقم السيارة الكامل.

الأسعار تبدأ من **150 درهم للمقعد الواحد** مع عروض خاصة للطقم الكامل.`,
    quickActionsEn: ["Rolls-Royce Starlight Roof", "Get Instant Price Quote", "Showroom Location", "Chat on WhatsApp"],
    quickActionsAr: ["سقف نجوم رولز رويس", "طلب عرض سعر فوري", "موقع المعرض بالشارقة", "تواصل عبر واتساب"],
  },

  // 4. Rolls-Royce Starlight Roof Ceiling
  {
    triggers: ["starlight", "star", "stars", "rolls", "ceiling", "headliner", "fiber optic", "نجوم", "سقف", "ستار لايت", "ستارلايت", "الياف ضوئية", "ألياف"],
    replyEn: (name) =>
      `${name ? `Dear ${name}, ` : ""}Experience true luxury with our **Rolls-Royce Style Fiber Optic Starlight Roof Installation**:

• **Star Count**: Options range from 450 to 1,200+ micro optical fiber stars tailored to your vehicle cabin size.
• **Dynamic Effects**: Realistic twinkling stars, dual-color zones, and shooting star (meteor) animations.
• **Smart App & Remote Control**: Seamlessly adjust brightness, RGBW color hues, and rhythm-responsive light modes via Bluetooth smartphone app.
• **Alcantara Headliner Option**: Pair your starlight roof with luxury Italian Alcantara or suede headliner wrap for maximum elegance.
• **Warranty**: 2-Year warranty on all LED light engines and fiber optics.

Installed by master automotive interior technicians in Sharjah!`,
    replyAr: (name) =>
      `${name ? `عزيزي ${name}، ` : ""}عش تجربة الفخامة المطلقة مع **تركيب سقف النجوم (Starlight) طراز رولز رويس** في الرحمانية:

• **عدد النجوم**: باقات متنوعة من 450 إلى أكثر من 1,200 نجمة ليزرية موزعة بحرفية على كامل السقف.
• **مؤثرات بصرية مبهرة**: خاصية الوميض الواقعي (Twinkle)، وتأثير الشهب والنيازك المتحركة (Shooting Stars).
• **تحكم ذكي كامل**: تطبيق هاتف بلوتوث ذكي + ريموت كنترول للتحكم في درجات الألوان RGBW وسطوع الإضاءة.
• **تنجيد شامواه والكانتارا**: إمكانية دمج سقف النجوم مع تنجيد السقف بالكامل بجلد الكانتارا الإيطالي الفاخر.
• **ضمان معتمد**: ضمان سنتين على محركات الإضاءة والألياف الضوئية.

يتم التركيب بأيدي نخبة من فناني التنجيد وتزيين السيارات بالشارقة!`,
    quickActionsEn: ["Custom Seat Covers", "Get Instant Quote", "Call +971 55 887 5678", "Chat on WhatsApp"],
    quickActionsAr: ["تفصيل مقاعد جلد", "طلب عرض سعر فوري", "اتصل الآن +971 55 887 5678", "تواصل عبر واتساب"],
  },

  // 5. Android Screens, Apple CarPlay & 360 Cameras
  {
    triggers: ["screen", "screens", "android", "carplay", "camera", "360", "audio", "stereo", "gps", "navigation", "شاشة", "شاشات", "اندرويد", "كاربلاي", "كاميرا", "كاميرات", "مسجل"],
    replyEn: (name) =>
      `${name ? `Dear ${name}, ` : ""}Upgrade your dashboard with our high-performance **Android Touchscreens & Automotive Electronics**:

• **Wireless Connectivity**: Full Apple CarPlay & Android Auto integration with high-speed WiFi and Bluetooth.
• **Display Quality**: Crystal-clear QLED and IPS touchscreens (9-inch, 10.25-inch, 12.3-inch) with anti-glare tempered glass.
• **360° Birds-Eye Cameras**: Ultra-HD 4-camera panoramic system with dynamic steering parking lines and blind-spot detection.
• **Plug & Play**: Integrates seamlessly with your factory steering wheel buttons, reverse sensors, and climate controls without wire cutting.
• **Dashcams & Audio**: Front and rear recording dashcams and DSP sound amplifier upgrades available.`,
    replyAr: (name) =>
      `${name ? `عزيزي ${name}، ` : ""}طور مقصورة سيارتك مع **شاشات الأندرويد التفاعلية وإلكترونيات السيارات الحديثة** من الرحمانية:

• **اتصال لاسلكي فوري**: دعم كامل لنظامي Apple CarPlay اللاسلكي و Android Auto مع بلوتوث وواي فاي فائق السرعة.
• **شاشات فائقة الوضوح**: لوحات QLED و IPS بمقاسات 9 و 10.25 و 12.3 إنش بدقة HD وزجاج مقاوم للخدش والانعكاس.
• **كاميرات 360 المحيطية**: رؤية بانورامية شاملة من 4 كاميرات مع خطوط مسار توجيهية وحساسات للنقاط العمياء.
• **تركيب أصلي فيش بفيش**: متوافق تماماً مع أزرار المقود ومكيف السيارة وكاميرات الوكالة دون تجريح أي أسلاك.
• **داش كام وأنظمة صوت**: يتوفر أحدث أنواع كاميرات الداش كام ومكبرات الصوت الرقمية DSP.`,
    quickActionsEn: ["Custom Seat Covers", "7D Floor Mats", "Get Price Quote", "Chat on WhatsApp"],
    quickActionsAr: ["أغطية مقاعد جلد", "دعاسات 7D فاخرة", "طلب عرض سعر", "تواصل عبر واتساب"],
  },

  // 6. Pricing, Cost & Instant Quote
  {
    triggers: ["quote", "price", "cost", "pricing", "rate", "how much", "estimate", "سعر", "اسعار", "تكلفة", "بكم", "عرض سعر", "تسعيرة", "كم يكلف"],
    replyEn: (name) =>
      `${name ? `Dear ${name}, ` : ""}Here is our transparent price guide for premium auto accessories and custom fitment:

• **Custom Leather Seat Covers**: AED 650 – AED 2,200 (depending on car size & leather grade: Napa / Italian / Alcantara).
• **7D Precision Floor Mats**: AED 350 – AED 650 (includes detachable wire layer).
• **Custom Colored Seatbelts**: AED 150 – AED 250 per seat.
• **Rolls-Royce Starlight Ceiling**: AED 1,200 – AED 3,500 (based on 450–1,200+ stars).
• **Android Touchscreen Systems**: AED 650 – AED 1,800.
• **Sagging Headliner Restoration**: AED 450 – AED 950.

All prices include professional fitment and written warranty. Click below to request an exact quote for your car!`,
    replyAr: (name) =>
      `${name ? `عزيزي ${name}، ` : ""}إليك دليل الأسعار التقديرية الشفافة لإكسسوارات وخدمات شركة الرحمانية بالشارقة:

• **تفصيل أغطية المقاعد الجلدية**: 650 – 2,200 درهم (حسب حجم السيارة ونوع الجلد: نابا ألماني / إيطالي / الكانتارا).
• **دعاسات وأرضيات 7D الفاخرة**: 350 – 650 درهم (تشمل الطبقة السلكية المزدوجة).
• **أحزمة الأمان الملونة الرياضية**: 150 – 250 درهم للمقعد الواحد.
• **سقف النجوم (ستار لايت رولز رويس)**: 1,200 – 3,500 درهم (حسب عدد النجوم 450 إلى 1,200+ نجمة).
• **شاشات الأندرويد والكاميرات**: 650 – 1,800 درهم.
• **تجديد بطانة السقف المتهدل**: 450 – 950 درهم.

كافة الأسعار تشمل التركيب الاحترافي والضمان الخطي. يمكنك طلب تسعيرة دقيقة لسيارتك عبر الرابط أدناه!`,
    quickActionsEn: ["Go to Quote Page", "Call +971 55 887 5678", "Chat on WhatsApp", "Sharjah Showroom Location"],
    quickActionsAr: ["صفحة طلب عرض سعر", "اتصل الآن +971 55 887 5678", "تواصل عبر واتساب", "موقع المعرض بالشارقة"],
  },

  // 7. Showroom Location, Directions & Working Hours
  {
    triggers: ["location", "address", "where", "directions", "map", "hours", "timings", "open", "sharjah", "موقع", "عنوان", "أين", "الشارقة", "ساعات", "دوام", "اوقات", "خريطة"],
    replyEn: (name) =>
      `${name ? `Dear ${name}, ` : ""}You are welcome to visit our showrooms and styling center in **Sharjah, UAE**:

📍 **Main Showroom & Center**: Industrial Area 4, Sharjah, UAE (Near Caterpillar Road, convenient access from Dubai & Ajman).
📍 **Branch 2**: Industrial Area 5, Sharjah, UAE.

⏰ **Working Hours**:
• **Saturday to Thursday**: 8:00 AM – 9:00 PM (Break: 1:30 PM – 3:30 PM)
• **Friday**: Closed

📞 **Phone**: +971 55 887 5678 / +971 55 867 4927
💬 **WhatsApp**: +971 55 867 4927

We provide free on-site consultation, leather swatches, and fitting bays!`,
    replyAr: (name) =>
      `${name ? `عزيزي ${name}، ` : ""}يسعدنا تشريفكم بزيارة معارضنا ومركز تفصيل الإكسسوارات في **الشارقة، الإمارات**:

📍 **المعرض والمركز الرئيسي**: المنطقة الصناعية 4، الشارقة، الإمارات (قريب من شارع كاتربيلر، وصول سهل من دبي وعجمان).
📍 **الفرع الثاني**: المنطقة الصناعية 5، الشارقة، الإمارات.

⏰ **أوقات العمل الرسمية**:
• **السبت إلى الخميس**: 8:00 صباحاً – 9:00 مساءً (استراحة: 1:30 ظهراً – 3:30 عصراً)
• **الجمعة**: مغلق

📞 **أرقام الاتصال**: 5678 887 55 971+ / 4927 867 55 971+
💬 **واتساب مباشر**: 4927 867 55 971+

نوفر استشارة مجانية وعينات لجميع أنواع الجلود والأقمشة داخل المعرض!`,
    quickActionsEn: ["Open Google Maps", "Chat on WhatsApp", "Call Showroom", "Get Instant Quote"],
    quickActionsAr: ["فتح خرائط جوجل", "تواصل عبر واتساب", "اتصال بالمعرض", "طلب عرض سعر"],
  },

  // 8. Warranty & Craftsmanship Guarantee
  {
    triggers: ["warranty", "guarantee", "period", "years", "quality", "ضمان", "كفالة", "شهادة", "جودة", "كم سنة"],
    replyEn: (name) =>
      `${name ? `Dear ${name}, ` : ""}All our automotive styling products and upholstery fitment carry **Official Written Warranties**:

• **Seat Covers & Upholstery**: Up to 3 Years warranty against leather cracking, peeling, UV fading, and thread unraveling.
• **7D Floor Mats**: 1 Year replacement warranty against material breakdown.
• **Colored Seatbelts**: Safety compliance warranty retaining factory tensile ratings.
• **Starlight Ceilings & Electronics**: 1 to 2 Years warranty on LED engines, touchscreens, and wiring harnesses.

We take absolute pride in our 15+ years of automotive interior craftsmanship in Sharjah!`,
    replyAr: (name) =>
      `${name ? `عزيزي ${name}، ` : ""}كافة منتجات وأعمال تفصيل وتنجيد السيارات في الرحمانية مشمولة بـ **ضمان رسمي خطي معتمد**:

• **أغطية وتنجيد المقاعد**: ضمان رسمي حتى 3 سنوات ضد تقشر أو تشقق الجلد، بهتان الألوان بسبب الشمس، أو انفكاك الخيوط.
• **دعاسات 7D**: ضمان استبدال لمدة سنة ضد عيوب التصنيع والمواد.
• **أحزمة الأمان الملونة**: شهادة مطابقة لمعايير السلامة وقوة الشد العالية.
• **سقف النجوم والإلكترونيات**: ضمان من سنة إلى سنتين على أجهزة الإضاءة والشاشات والأسلاك.

نفتخر بأكثر من 15 عاماً من الخبرة والريادة في تزيين وتنجيد السيارات بالشارقة!`,
    quickActionsEn: ["Get Instant Price Quote", "Showroom Location", "Chat on WhatsApp", "Products Catalog"],
    quickActionsAr: ["طلب عرض سعر فوري", "موقع المعرض بالشارقة", "تواصل عبر واتساب", "كتالوج المنتجات"],
  },
];

// Helper to query Gemini API or use rich automotive fallback
async function generateAiResponse(
  messages: ChatMessage[],
  userInfo?: UserInfo,
  isArabic: boolean = false
): Promise<{ reply: string; quickActions: string[]; source: "gemini" | "fallback-knowledge-base" }> {
  const latestMessage = messages[messages.length - 1]?.text || "";
  const queryLower = latestMessage.toLowerCase().trim();

  // 1. Try Fallback Knowledge Base first for high-intent queries
  for (const item of FALLBACK_KNOWLEDGE) {
    if (item.triggers.some((trigger) => queryLower.includes(trigger))) {
      return {
        reply: isArabic ? item.replyAr(userInfo?.name) : item.replyEn(userInfo?.name),
        quickActions: isArabic ? item.quickActionsAr : item.quickActionsEn,
        source: "fallback-knowledge-base",
      };
    }
  }

  // 2. Try Gemini API if key is present
  const apiKey = process.env.GEMINI_API_KEY;
  if (apiKey) {
    try {
      const systemInstruction = `You are the master AI styling advisor and customer service representative for "Al Rahmaniah Auto Accessories" (شركة الرحمانية لإكسسوارات وتنجيد السيارات) in Sharjah, UAE.
You provide helpful, polite, professional, and knowledgeable advice regarding:
- Custom laser-measured leather seat covers (German Napa leatherette, Italian perforated leather, Alcantara, diamond quilting, OEM fitment, side airbag safe).
- 7D precision molded luxury floor mats (all-weather, waterproof, raised edges, detachable wire coil carpet layer).
- OEM certified custom colored seatbelts (Porsche Red, Ferrari Yellow, M-Stripe, Tiffany Blue, safety certified).
- Rolls-Royce style starlight roof ceilings (450 to 1,200+ optical fiber stars, twinkle, shooting stars, app control).
- Android touchscreens (9-12.3", wireless Apple CarPlay, Android Auto, 360 birds-eye cameras).
- Laser LED headlights, app-controlled ambient RGB cabin lighting.
- Sagging roof headliner repair, steering wheel restitching, carbon fiber wheels.
- Showroom locations: Industrial Area 4 & Industrial Area 5, Sharjah, UAE.
- Working hours: Sat-Thu 8:00 AM - 9:00 PM (Break 1:30 PM - 3:30 PM), Friday Closed.
- Contact: Phone +971 55 887 5678 / +971 55 867 4927, WhatsApp +971 55 867 4927.
- Official up to 3 years written warranty on leather covers.
Always respond in the same language as the user (${isArabic ? "Arabic" : "English"}). Keep replies concise, inviting, formatted with markdown bullet points, and encourage the user to get an instant quote at /get-a-quote or chat on WhatsApp. Address the user by name if provided (${userInfo?.name || "valued customer"}).`;

      const promptHistory = messages.map((m) => ({
        role: m.sender === "user" ? "user" : "model",
        parts: [{ text: m.text }],
      }));

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: promptHistory,
            systemInstruction: {
              parts: [{ text: systemInstruction }],
            },
            generationConfig: {
              temperature: 0.6,
              maxOutputTokens: 600,
            },
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidate) {
          return {
            reply: candidate,
            quickActions: isArabic
              ? ["تفصيل مقاعد جلد", "دعاسات 7D فاخرة", "طلب عرض سعر فوري", "موقع المعرض بالشارقة"]
              : ["Custom Seat Covers", "7D Floor Mats", "Get an Instant Quote", "Sharjah Showroom"],
            source: "gemini",
          };
        }
      }
    } catch {
      // Fall through to default fallback
    }
  }

  // 3. Default Friendly Fallback
  return {
    reply: isArabic
      ? `أهلاً بك${userInfo?.name ? ` يا ${userInfo.name}` : ""} في شركة الرحمانية لإكسسوارات السيارات بالشارقة! يسعدنا خدمتك في تفصيل أغطية المقاعد الجلدية الفاخرة، ودعاسات 7D، وأحزمة الأمان الملونة، وسقف النجوم (ستار لايت)، وشاشات الأندرويد.

يسعدنا تزويدك بتسعيرة فورية أو يمكنك مراسلتنا مباشرة عبر الواتساب على الرقم **+971 55 867 4927** أو الاتصال على **+971 55 887 5678**.`
      : `Welcome${userInfo?.name ? ` ${userInfo.name}` : ""} to Al Rahmaniah Auto Accessories in Sharjah! We are delighted to assist with custom Napa leather seat covers, 7D precision floor mats, colored seatbelts, Rolls-Royce starlight ceilings, and Android screens.

Feel free to ask for a custom price quotation or chat directly with our specialists on WhatsApp at **+971 55 867 4927** or call **+971 55 887 5678**.`,
    quickActions: isArabic
      ? ["طلب عرض سعر فوري", "تفصيل مقاعد جلد نابا", "دعاسات 7D ليزرية", "تواصل عبر واتساب"]
      : ["Get Instant Price Quote", "Custom Leather Seats", "7D Floor Mats", "Chat on WhatsApp"],
    source: "fallback-knowledge-base",
  };
}

export async function POST(req: NextRequest) {
  try {
    const body: ChatRequestPayload = await req.json();

    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request payload. 'messages' array is required.",
          reply: "Please provide a valid inquiry.",
          quickActions: [],
          source: "fallback-knowledge-base",
        },
        { status: 400 }
      );
    }

    const { reply, quickActions, source } = await generateAiResponse(
      body.messages,
      body.userInfo,
      body.isArabic
    );

    const responsePayload: ChatApiResponse = {
      success: true,
      reply,
      quickActions,
      source,
    };

    return NextResponse.json(responsePayload, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        reply:
          "Welcome to Al Rahmaniah Auto Accessories! Please reach our advisors directly at +971 55 887 5678 or on WhatsApp at +971 55 867 4927.",
        quickActions: ["Call +971 55 887 5678", "Chat on WhatsApp", "Get Custom Quote"],
        source: "fallback-knowledge-base",
        error: error?.message || "Internal server error",
      },
      { status: 500 }
    );
  }
}
