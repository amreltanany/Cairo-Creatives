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
      open: "+ Add-ons", title: "Add-ons", done: "Done", oneTime: "one-time", yearly: "/ year", perReel: "/ reel", perPost: "/ post",
      reels: "Extra reels", posts: "Extra posts", campaigns: "Ad campaign management", website: "Website (portfolio, landing page)", identity: "Visual identity",
      moderation: "Moderation, 6 hours a day", noSpend: "ad spend not included",
      chips: { moderation: "Moderation 6h/day", campaigns: "Ad campaigns", website: "Website (portfolio, landing page)", identity: "Visual identity" },
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
    tag: "FAQ", title: ["Common", "questions"], answer: "Placeholder answer. Replace with your own.",
    questions: ["How long does a project take?", "Do you work with early-stage teams?", "What do you need from us to start?", "Can we request changes after delivery?", "Do you build sites or only design them?", "Can you build on our existing brand?", "How does the monthly plan work?", "How do we know we're a good fit?"],
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
      open: "+ إضافات", title: "إضافات", done: "تم", oneTime: "مرة واحدة", yearly: "/ سنويًا", perReel: "/ للريل", perPost: "/ للبوست",
      reels: "ريل إضافي", posts: "بوست إضافي", campaigns: "إدارة الحملات الإعلانية", website: "موقع إلكتروني (بورتفوليو، صفحة هبوط)", identity: "تصميم هوية بصرية",
      moderation: "موديريشن 6 ساعات يوميًا", noSpend: "لا يشمل تكلفة الإعلان",
      chips: { moderation: "موديريشن 6 ساعات", campaigns: "الحملات الإعلانية", website: "موقع إلكتروني (بورتفوليو، صفحة هبوط)", identity: "هوية بصرية" },
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
    tag: "الأسئلة الشائعة", title: ["أسئلة", "شائعة"], answer: "إجابة مؤقتة. استبدلها بإجابتك.",
    questions: ["كم يستغرق المشروع؟", "هل تعملون مع الشركات الناشئة؟", "ماذا تحتاجون منا للبدء؟", "هل يمكننا طلب تعديلات بعد التسليم؟", "هل تبنون المواقع أم تصممونها فقط؟", "هل يمكنكم البناء على هويتنا الحالية؟", "كيف تعمل الخطة الشهرية؟", "كيف نعرف أننا مناسبون لبعض؟"],
  },
  footer: { line: ["الأفكار الكبيرة تبدأ بخطوة صغيرة.", "لنجعل خطوتك لا تُنسى."], nav: "التنقل", links: ["الرئيسية", "من نحن", "خدماتنا", "الأسعار", "الأسئلة", "تواصل معنا"], connect: "تابعنا" },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
// the Arabic copy lives under /ar/; everything else is English
export const getT = (Astro) => (Astro.url.pathname.startsWith(`${base}/ar`) ? ar : en);
export const homeHref = (lang) => (lang === "ar" ? `${base}/ar/` : `${base}/`);
