// every piece of page text in both languages; components pick theirs with getT(Astro)
const en = {
  lang: "en", dir: "ltr",
  meta: {
    title: "Cairo Creatives — Creative Agency",
    description: "Your vision, our creativity. Shooting & editing, web development and graphic design from Cairo.",
    ogAlt: "Cairo Creatives logo",
  },
  loader: "Creative Agency",
  toTop: "Back to top",
  nav: {
    home: "Home", links: ["Home", "About us", "Services", "Pricing", "FAQ"], contact: "Contact us",
    other: "AR", otherLabel: "النسخة العربية", open: "Open menu", close: "Close menu",
  },
  hero: { before: "Your", words: ["Branding", "Marketing", "Creative"], after: "Agency", line: "Your vision, our creativity" },
  intro: {
    tag: "Who we are",
    big: "We make content people stop scrolling for",
    lead: "We shoot, design, edit and build for brands that want to be noticed. Every photo, video and web page we make has one job: bring you more attention and more customers.",
    more: "Know more about us",
  },
  services: {
    tag: "Services", title: "What we do, start to finish", visit: "Visit site ↗", behance: "See our work on Behance ↗",
    cards: [
      { title: "Shooting & Editing", text: "From the first shot to the final cut: we film your brand, products and events, then edit them into videos people watch to the end.",
        tags: ["Product & brand shoots", "Reels & short videos", "Video editing", "Motion & subtitles"],
        alts: ["Vertical video edit for a photography studio", "Vertical video edit with an editing tutorial", "Vertical video edit for a promotional offer"] },
      { title: "Web Development", text: "Fast, modern websites that look great on every screen and turn visitors into customers.",
        tags: ["Landing pages", "Business websites", "Online stores", "Responsive design", "Speed & SEO", "Maintenance"],
        alts: ["Display Egypt website built by Cairo Creatives", "Switch On online store built by Cairo Creatives", "TAJ dental clinic website built by Cairo Creatives"] },
      { title: "Graphic Design", text: "Visuals that make your brand recognizable everywhere, from your logo to every post you share.",
        tags: ["Logo & identity", "Social media posts", "Ad creatives", "Brand guidelines", "Print & packaging", "Photo editing"],
        alts: ["Al Wahab Center post about a motivating learning space", "TALHA real estate post about a strategic location", "DeutschElite White Friday sale post", "EStores post for the Carrier X-Cool air conditioner"] },
    ],
  },
  pricing: {
    tag: "Pricing", title: ["Pick how", "we work together."], region: "Pricing plans, use the arrow keys to slide",
    currency: "EGP", monthly: "/ month",
    accounts: "Accounts:", start: "Get started", startWith: "Get started with",
    // plan contents; the first two take the plan's counts, the monthly report shows on Partners and Custom only
    items: ["post designs", "reels", "Monthly performance report"],
    details: ["Platforms"], perAccount: "/ account", allPlatforms: "All", contentPlan: "Monthly content plan & scheduling", site: "Website", siteKinds: "portfolio, landing page",
    footage: "client footage",
    addons: {
      open: "+ Add-ons", title: "Add-ons", done: "Done", oneTime: "one-time", yearly: "/ year", perReel: "/ reel", perPost: "/ post", perPlatform: "/ platform",
      reels: "Extra reels", posts: "Extra posts", platforms: "Extra platforms", campaigns: "Ad campaign management", website: "Website (portfolio, landing page)", identity: "Visual identity",
      moderation: "Moderation, 6 hours a day", webcare: "Website management", webcareKinds: "hosting, design, security", noSpend: "ad spend not included",
      chips: { moderation: "Moderation 6h/day", campaigns: "Ad campaigns", website: "Website (portfolio, landing page)", webcare: "Website management", identity: "Visual identity" },
    },
    plans: {
      partners: { name: "Partners", line: "Your full creative team" },
      accounts: { name: "Accounts", line: "Most popular plan" },
      custom: { name: "Custom", line: "Build your own plan",
        fields: { accounts: "Accounts", designs: "Post designs", reels: "Reels", videos: "Long video, minutes", platforms: "Platforms" },
        // unit price notes under each calculator option
        per: { designs: "/ post", reels: "/ reel", videos: "/ minute", platforms: "/ platform" },
        accountsNote: "+80% on monthly services for each extra account", need: "Choose at least 1 account" },
      web: { name: "Stability Zone", line: "Steady content, every month" },
      design: { name: "Ready to Grow", line: "For brands ready to scale" },
    },
  },
  contact: {
    title: ["Tell us about", "your project"], text: "Message us on WhatsApp and we'll get back to you fast.",
    button: "Chat on WhatsApp", message: "Hi Cairo Creatives, I'd like to talk about a project.",
  },
  faq: {
    tag: "FAQ", title: ["Common", "questions"],
    questions: [["What services does your agency provide?","We offer a wide range of digital services, including social media design, branding, logo design, paid advertising, video editing, photography, website development, and more."],["Why should I choose your agency?","We combine creativity, strategy, and professional execution to help businesses build a strong brand presence and achieve their marketing goals."],["Do you work with startups and small businesses?","Yes! We work with startups, small businesses, and established brands across different industries."],["Can I request a custom package?","Absolutely! We can create customized packages based on your business needs, goals, and budget."],["Can you help me choose the right service for my business?","Yes! Our team can understand your business needs and recommend the most suitable solutions."],["Do you work with international clients?","Yes, we work with clients from different countries and markets."],["Can I see your previous work?","Of course! You can explore our portfolio to discover some of our previous projects."],["How much do your services cost?","Our pricing depends on the type of service, project requirements, and scope of work. Contact us to receive a customized quotation."],["Do you offer monthly packages?","Yes, we offer flexible monthly packages for businesses looking for ongoing design, marketing, and social media services."],["What payment methods do you accept?","We offer convenient payment options. Contact our team to learn about the available payment methods."],["How do I get started with your agency?","Simply contact us, tell us about your project, and our team will guide you through the next steps."],["How long does it take to complete a project?","Delivery time depends on the type and complexity of the project. We always agree on a timeline before starting."],["Can I request revisions to my designs?","Yes, revisions are available according to the agreed project scope and package."]],
  },
  footer: { line: ["Big ideas start with a small step.", "Let's make yours unforgettable."], nav: "NAVIGATION", links: ["Home", "About", "Services", "Pricing", "FAQ", "Contact us"], connect: "CONNECT" },
};

const ar = {
  lang: "ar", dir: "rtl",
  meta: {
    title: "Cairo Creatives — وكالة إبداعية",
    description: "رؤيتك، إبداعنا. تصوير ومونتاج، تطوير مواقع، وتصميم جرافيك من القاهرة.",
    ogAlt: "لوجو Cairo Creatives",
  },
  loader: "وكالة إبداعية",
  toTop: "العودة للأعلى",
  nav: {
    home: "الرئيسية", links: ["الرئيسية", "من نحن", "خدماتنا", "الأسعار", "الأسئلة"], contact: "تواصل معنا",
    other: "EN", otherLabel: "English version", open: "فتح القائمة", close: "إغلاق القائمة",
  },
  hero: { before: "شريكك في", words: ["البراندينج", "التسويق", "الإبداع"], after: "", line: "رؤيتك، إبداعنا" },
  intro: {
    tag: "من نحن",
    big: "نصنع محتوى يوقف السكرول",
    lead: "نصوّر ونصمّم ونمنتج ونبني المواقع للبراندات التي تريد أن تُلاحَظ. كل صورة وفيديو وصفحة نصنعها لها مهمة واحدة: أن تجلب لك اهتمامًا أكثر وعملاء أكثر.",
    more: "اعرف المزيد عنا",
  },
  services: {
    tag: "خدماتنا", title: "ما نقدمه، من البداية للنهاية", visit: "زيارة الموقع ↗", behance: "شاهد أعمالنا على Behance ↗",
    cards: [
      { title: "التصوير والمونتاج", text: "من أول لقطة لآخر تعديل: نصوّر براندك ومنتجاتك وفعالياتك، ونحوّلها لفيديوهات يشاهدها الناس حتى النهاية.",
        tags: ["تصوير المنتجات والبراند", "ريلز وفيديوهات قصيرة", "مونتاج الفيديو", "موشن وترجمة"],
        alts: ["فيديو رأسي لاستوديو تصوير", "فيديو رأسي يشرح خطوات المونتاج", "فيديو رأسي لعرض ترويجي"] },
      { title: "تطوير المواقع", text: "مواقع سريعة وحديثة تظهر بشكل رائع على كل الشاشات وتحوّل الزوار لعملاء.",
        tags: ["صفحات الهبوط", "مواقع الشركات", "متاجر إلكترونية", "تصميم متجاوب", "السرعة والـ SEO", "الصيانة"],
        alts: ["موقع Display Egypt من تنفيذ Cairo Creatives", "متجر Switch On من تنفيذ Cairo Creatives", "موقع عيادة TAJ للأسنان من تنفيذ Cairo Creatives"] },
      { title: "التصميم الجرافيكي", text: "تصميمات تجعل براندك معروفًا في كل مكان، من اللوجو لكل بوست تنشره.",
        tags: ["اللوجو والهوية", "بوستات السوشيال ميديا", "تصميمات إعلانية", "دليل الهوية", "المطبوعات والتغليف", "تعديل الصور"],
        alts: ["بوست لسنتر الوهاب عن بيئة تعليمية محفزة", "بوست لشركة TALHA العقارية عن موقع استراتيجي", "بوست عرض White Friday لـ DeutschElite", "بوست EStores لتكييف Carrier X-Cool"] },
    ],
  },
  pricing: {
    tag: "الأسعار", title: ["اختر", "طريقة عملنا معًا."], region: "خطط الأسعار، استخدم الأسهم للتنقل",
    currency: "جنيه", monthly: "/ شهريًا",
    accounts: "الحسابات:", start: "ابدأ الآن", startWith: "ابدأ مع خطة",
    items: ["تصميم بوست", "ريلز", "تقرير أداء شهري"],
    details: ["عدد المنصات"], perAccount: "/ لكل حساب", allPlatforms: "كل المنصات", contentPlan: "خطة محتوى شهرية وجدولة النشر", site: "موقع إلكتروني", siteKinds: "بورتفوليو، صفحة هبوط",
    footage: "خامات العميل",
    addons: {
      open: "+ إضافات", title: "إضافات", done: "تم", oneTime: "مرة واحدة", yearly: "/ سنويًا", perReel: "/ للريل", perPost: "/ للبوست", perPlatform: "/ للمنصة",
      reels: "ريل إضافي", posts: "بوست إضافي", platforms: "منصة إضافية", campaigns: "إدارة الحملات الإعلانية", website: "موقع إلكتروني (بورتفوليو، صفحة هبوط)", identity: "تصميم هوية بصرية",
      moderation: "موديريشن 6 ساعات يوميًا", webcare: "إدارة الموقع", webcareKinds: "استضافة، تصميم، حماية", noSpend: "لا يشمل تكلفة الإعلان",
      chips: { moderation: "موديريشن 6 ساعات", campaigns: "الحملات الإعلانية", website: "موقع إلكتروني (بورتفوليو، صفحة هبوط)", webcare: "إدارة الموقع", identity: "هوية بصرية" },
    },
    plans: {
      partners: { name: "الشركاء", line: "فريقك الإبداعي الكامل" },
      accounts: { name: "الحسابات", line: "الخطة الأكثر طلبًا" },
      custom: { name: "مخصص", line: "ابنِ خطتك بنفسك",
        fields: { accounts: "الحسابات", designs: "تصميم بوست", reels: "ريلز", videos: "فيديو طويل بالدقيقة", platforms: "عدد المنصات" },
        per: { designs: "/ للبوست", reels: "/ للريل", videos: "/ للدقيقة", platforms: "/ للمنصة" },
        accountsNote: "+80% على الخدمات الشهرية لكل حساب زيادة", need: "اختر حسابًا واحدًا على الأقل" },
      web: { name: "منطقة الاستقرار", line: "محتوى ثابت كل شهر" },
      design: { name: "جاهز للنمو", line: "للبراندات الجاهزة للتوسع" },
    },
  },
  contact: {
    title: ["احكِ لنا عن", "مشروعك"], text: "راسلنا على واتساب وهنرد عليك بسرعة.",
    button: "تواصل على واتساب", message: "أهلًا Cairo Creatives، عايز أتكلم معاكم عن مشروع.",
  },
  faq: {
    tag: "الأسئلة الشائعة", title: ["أسئلة", "شائعة"],
    questions: [["ما الخدمات التي تقدمها وكالتكم؟","نقدم مجموعة واسعة من الخدمات الرقمية، منها تصميم السوشيال ميديا، والهوية البصرية، وتصميم اللوجو، والإعلانات الممولة، ومونتاج الفيديو، والتصوير، وتطوير المواقع، وغيرها."],["لماذا تختار وكالتنا؟","نجمع بين الإبداع والاستراتيجية والتنفيذ الاحترافي لنساعد الشركات على بناء حضور قوي لعلامتها وتحقيق أهدافها التسويقية."],["هل تعملون مع الشركات الناشئة والصغيرة؟","نعم! نعمل مع الشركات الناشئة والصغيرة والعلامات الكبيرة في مجالات مختلفة."],["هل يمكنني طلب باقة مخصصة؟","بالتأكيد! نصمم باقات مخصصة حسب احتياجات عملك وأهدافك وميزانيتك."],["هل يمكنكم مساعدتي في اختيار الخدمة المناسبة لعملي؟","نعم! فريقنا يفهم احتياجات عملك ويرشح لك أنسب الحلول."],["هل تعملون مع عملاء من خارج مصر؟","نعم، نعمل مع عملاء من دول وأسواق مختلفة."],["هل يمكنني رؤية أعمالكم السابقة؟","طبعًا! تقدر تتصفح معرض أعمالنا وتشوف بعض مشاريعنا السابقة."],["كم تكلفة خدماتكم؟","تعتمد الأسعار على نوع الخدمة ومتطلبات المشروع وحجم العمل. تواصل معنا لتحصل على عرض سعر مخصص."],["هل تقدمون باقات شهرية؟","نعم، نقدم باقات شهرية مرنة للشركات التي تحتاج خدمات تصميم وتسويق وسوشيال ميديا بشكل مستمر."],["ما طرق الدفع المتاحة؟","نوفر طرق دفع سهلة. تواصل مع فريقنا لمعرفة طرق الدفع المتاحة."],["كيف أبدأ العمل مع وكالتكم؟","تواصل معنا وأخبرنا عن مشروعك، وفريقنا سيرشدك للخطوات التالية."],["كم يستغرق تنفيذ المشروع؟","مدة التسليم تعتمد على نوع المشروع ودرجة تعقيده، ونتفق دائمًا على جدول زمني قبل البدء."],["هل يمكنني طلب تعديلات على التصميمات؟","نعم، التعديلات متاحة حسب نطاق المشروع والباقة المتفق عليها."]],
  },
  footer: { line: ["الأفكار الكبيرة تبدأ بخطوة صغيرة.", "لنجعل خطوتك لا تُنسى."], nav: "التنقل", links: ["الرئيسية", "من نحن", "خدماتنا", "الأسعار", "الأسئلة", "تواصل معنا"], connect: "تابعنا" },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
// the Arabic copy lives under /ar/; everything else is English
export const getT = (Astro) => (Astro.url.pathname.startsWith(`${base}/ar`) ? ar : en);
export const homeHref = (lang) => (lang === "ar" ? `${base}/ar/` : `${base}/`);
