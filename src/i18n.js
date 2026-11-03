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
    tag: "Services", title: "What we do, start to finish", visit: "Visit site ↗",
    cards: [
      { title: "Shooting & Editing", text: "From the first shot to the final cut: we film your brand, products and events, then edit them into videos people watch to the end.",
        tags: ["Product & brand shoots", "Reels & short videos", "Video editing", "Motion & subtitles"],
        alts: ["Video editing project by Cairo Creatives on Behance", "Reels Saudi Arabia project on Behance", "Vertical video edit for a photography studio", "Vertical video edit with an editing tutorial", "Vertical video edit for a promotional offer"] },
      { title: "Web Development", text: "Fast, modern websites that look great on every screen and turn visitors into customers.",
        tags: ["Landing pages", "Business websites", "Online stores", "Responsive design", "Speed & SEO", "Maintenance"],
        alts: ["Display Egypt website built by Cairo Creatives", "Switch On online store built by Cairo Creatives", "TAJ dental clinic website built by Cairo Creatives"] },
      { title: "Graphic Design", text: "Visuals that make your brand recognizable everywhere, from your logo to every post you share.",
        tags: ["Logo & identity", "Social media posts", "Ad creatives", "Brand guidelines", "Print & packaging", "Photo editing"],
        alts: ["Social media post for Consul Tourism about jobs in Italy", "Delivery ad for Abdel Aaty Pharmacy with a scooter rider", "Ad for Abdel Aaty Pharmacy with a pharmacist sitting on a clock"] },
    ],
  },
  pricing: {
    tag: "Pricing", title: ["Pick how", "we work together."], region: "Pricing plans, use the arrow keys to slide",
    currency: "EGP", monthly: "/ month",
    accounts: "Accounts:", start: "Get started", startWith: "Get started with",
    // every plan but Custom lists these; the first three take the plan's counts
    items: ["post designs", "reels", "post captions & copywriting", "Monthly content plan & scheduling", "Comment & message management", "Monthly performance report"],
    details: ["Platforms", "Moderation hours", "Revisions", "Reels"],
    hours: (n) => `${n} hour${n > 1 ? "s" : ""} a day`, footage: ["client footage", "includes shooting"],
    addons: {
      open: "+ Add-ons", title: "Add-ons", done: "Done", from: "from", oneTime: "one-time", perReel: "/ reel", perPost: "/ post",
      reels: "Extra reels", posts: "Extra posts", campaigns: "Ad campaign management", website: "Website design", identity: "Visual identity",
      chips: { campaigns: "Ad campaigns", website: "Website", identity: "Visual identity" },
      care: "Comment & message management + monthly report",
    },
    plans: {
      partners: { name: "Partners", line: "Your full creative team" },
      accounts: { name: "Accounts", line: "Most popular plan" },
      custom: { name: "Custom", line: "Build your own plan", sites: ["No website", "Landing page", "Business website", "Online store"],
        fields: { accounts: "Accounts", website: "Website", designs: "Post designs", reels: "Reels", captions: "Captions & copywriting", videos: "Long videos", platforms: "Platforms", hours: "Moderation hours a day", revisions: "Revisions", footage: "Reels" } },
      web: { name: "Web Development", line: "Best for going online" },
      design: { name: "Graphic Design", line: "Best for a sharp brand" },
    },
  },
  contact: {
    title: ["Tell us about", "your project"], name: "Name", email: "Email", company: "Company", optin: "Send me occasional updates",
    submit: "Submit", sending: "Sending…", sent: "Sent", thanks: "Thanks, we'll be in touch soon.",
  },
  faq: {
    tag: "FAQ", title: ["Common", "questions"], answer: "Placeholder answer. Replace with your own.",
    questions: ["How long does a project take?", "Do you work with early-stage teams?", "What do you need from us to start?", "Can we request changes after delivery?", "Do you build sites or only design them?", "Can you build on our existing brand?", "How does the monthly plan work?", "How do we know we're a good fit?"],
  },
  footer: { line: "Placeholder one-liner about who you are and what you stand for.", nav: "NAVIGATION", links: ["Home", "About", "Services", "Pricing", "FAQ", "Contact us"], connect: "CONNECT" },
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
    tag: "خدماتنا", title: "ما نقدمه، من البداية للنهاية", visit: "زيارة الموقع ↗",
    cards: [
      { title: "التصوير والمونتاج", text: "من أول لقطة لآخر تعديل: نصوّر براندك ومنتجاتك وفعالياتك، ونحوّلها لفيديوهات يشاهدها الناس حتى النهاية.",
        tags: ["تصوير المنتجات والبراند", "ريلز وفيديوهات قصيرة", "مونتاج الفيديو", "موشن وترجمة"],
        alts: ["مشروع مونتاج فيديو من Cairo Creatives على Behance", "مشروع ريلز السعودية على Behance", "فيديو رأسي لاستوديو تصوير", "فيديو رأسي يشرح خطوات المونتاج", "فيديو رأسي لعرض ترويجي"] },
      { title: "تطوير المواقع", text: "مواقع سريعة وحديثة تظهر بشكل رائع على كل الشاشات وتحوّل الزوار لعملاء.",
        tags: ["صفحات الهبوط", "مواقع الشركات", "متاجر إلكترونية", "تصميم متجاوب", "السرعة والـ SEO", "الصيانة"],
        alts: ["موقع Display Egypt من تنفيذ Cairo Creatives", "متجر Switch On من تنفيذ Cairo Creatives", "موقع عيادة TAJ للأسنان من تنفيذ Cairo Creatives"] },
      { title: "التصميم الجرافيكي", text: "تصميمات تجعل براندك معروفًا في كل مكان، من اللوجو لكل بوست تنشره.",
        tags: ["اللوجو والهوية", "بوستات السوشيال ميديا", "تصميمات إعلانية", "دليل الهوية", "المطبوعات والتغليف", "تعديل الصور"],
        alts: ["بوست لشركة Consul Tourism عن فرص العمل في إيطاليا", "إعلان توصيل لصيدلية عبد العاطي", "إعلان لصيدلية عبد العاطي لصيدلي جالس على ساعة"] },
    ],
  },
  pricing: {
    tag: "الأسعار", title: ["اختر", "طريقة عملنا معًا."], region: "خطط الأسعار، استخدم الأسهم للتنقل",
    currency: "جنيه", monthly: "/ شهريًا",
    accounts: "الحسابات:", start: "ابدأ الآن", startWith: "ابدأ مع خطة",
    items: ["تصميم بوست", "ريلز", "كتابة محتوى وكابشن للبوستات", "خطة محتوى شهرية وجدولة النشر", "إدارة التعليقات والرسائل", "تقرير أداء شهري"],
    details: ["عدد المنصات", "ساعات الموديريشن", "عدد التعديلات", "الريلز"],
    hours: (n) => `${n} ساعة يوميًا`, footage: ["خامات العميل", "تشمل تصوير"],
    addons: {
      open: "+ إضافات", title: "إضافات", done: "تم", from: "يبدأ من", oneTime: "مرة واحدة", perReel: "/ للريل", perPost: "/ للبوست",
      reels: "ريل إضافي", posts: "بوست إضافي", campaigns: "إدارة الحملات الإعلانية", website: "تصميم موقع إلكتروني", identity: "تصميم هوية بصرية",
      chips: { campaigns: "الحملات الإعلانية", website: "موقع إلكتروني", identity: "هوية بصرية" },
      care: "إدارة التعليقات والرسائل + تقرير شهري",
    },
    plans: {
      partners: { name: "الشركاء", line: "فريقك الإبداعي الكامل" },
      accounts: { name: "الحسابات", line: "الخطة الأكثر طلبًا" },
      custom: { name: "مخصص", line: "ابنِ خطتك بنفسك", sites: ["بدون موقع", "صفحة هبوط", "موقع شركة", "متجر إلكتروني"],
        fields: { accounts: "الحسابات", website: "الموقع", designs: "تصميم بوست", reels: "ريلز", captions: "كتابة محتوى وكابشن", videos: "فيديوهات طويلة", platforms: "عدد المنصات", hours: "ساعات الموديريشن يوميًا", revisions: "عدد التعديلات", footage: "الريلز" } },
      web: { name: "تطوير المواقع", line: "الأفضل لبداية أونلاين" },
      design: { name: "التصميم الجرافيكي", line: "الأفضل لبراند مميز" },
    },
  },
  contact: {
    title: ["احكِ لنا عن", "مشروعك"], name: "الاسم", email: "البريد الإلكتروني", company: "الشركة", optin: "أرسلوا لي تحديثات من حين لآخر",
    submit: "إرسال", sending: "جارٍ الإرسال…", sent: "تم الإرسال", thanks: "شكرًا، سنتواصل معك قريبًا.",
  },
  faq: {
    tag: "الأسئلة الشائعة", title: ["أسئلة", "شائعة"], answer: "إجابة مؤقتة. استبدلها بإجابتك.",
    questions: ["كم يستغرق المشروع؟", "هل تعملون مع الشركات الناشئة؟", "ماذا تحتاجون منا للبدء؟", "هل يمكننا طلب تعديلات بعد التسليم؟", "هل تبنون المواقع أم تصممونها فقط؟", "هل يمكنكم البناء على هويتنا الحالية؟", "كيف تعمل الخطة الشهرية؟", "كيف نعرف أننا مناسبون لبعض؟"],
  },
  footer: { line: "سطر مؤقت عن هويتكم وما تمثلونه.", nav: "التنقل", links: ["الرئيسية", "من نحن", "خدماتنا", "الأسعار", "الأسئلة", "تواصل معنا"], connect: "تابعنا" },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
// the Arabic copy lives under /ar/; everything else is English
export const getT = (Astro) => (Astro.url.pathname.startsWith(`${base}/ar`) ? ar : en);
export const homeHref = (lang) => (lang === "ar" ? `${base}/ar/` : `${base}/`);
