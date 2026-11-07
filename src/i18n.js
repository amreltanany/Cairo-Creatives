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
  clients: { title: "Brands we have worked with" },
  services: {
    tag: "Services", title: "What we do, start to finish", visit: "Visit site ↗", behance: "See our work on Behance ↗",
    cards: [
      { title: "Shooting & Editing", text: "From the first shot to the final cut: we film your brand, products and events, then edit them into videos people watch to the end.",
        tags: ["Product & brand shoots", "Reels & short videos", "Video editing", "Motion & subtitles"],
        alts: ["Vertical video edit for a photography studio", "Vertical video edit with an editing tutorial", "Vertical video edit for a promotional offer", "Video editing timeline"] },
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
  about: {
    "meta": {
      "title": "About Cairo Creatives — Company profile",
      "description": "Cairo Creatives is a creative agency in Cairo: graphic design and branding, video and reels, and websites, made by one team under one roof."
    },
    "tag": "About us",
    "title": [
      "One studio.",
      "Every part of your brand."
    ],
    "lead": "Cairo Creatives is a creative agency based in Cairo, Egypt. We bring graphic design, video and web development together in one team, so a brand's posts, reels and website look and sound like the same company.",
    "stats": [
      [
        "35+",
        "brands we have worked with"
      ],
      [
        "15",
        "websites built"
      ],
      [
        "12+",
        "industries served"
      ],
      [
        "3",
        "creative teams, one studio"
      ]
    ],
    "storyTag": "Who we are",
    "story": [
      "Cairo Creatives brings three teams together: graphic design and branding, video and reels, and web development. Each one has its own portfolio of real clients, and together they cover everything a brand needs to show up online.",
      "Today a brand that works with Cairo Creatives gets its visual identity, its social media designs, its reels and its website from the same people. One brief, one direction, and nobody lost between agencies."
    ],
    "whatTag": "What we do",
    "whatTitle": "Three teams. One direction.",
    "teams": [
      {
        "name": "Graphic design & branding",
        "text": "Social media designs, campaigns and visual identities for brands in real estate, healthcare, education, food, tourism, shipping, fashion and more. Every post is built to stop the scroll and carry the brand.",
        "points": [
          "Social media designs",
          "Visual identity & logos",
          "Campaign artwork",
          "Print & packaging"
        ]
      },
      {
        "name": "Video & reels",
        "text": "Short-form reels and video edits for clinics, coaches, personal brands and businesses in Egypt and Saudi Arabia, plus YouTube thumbnails and seasonal campaigns for Ramadan and Eid.",
        "points": [
          "Reels & short videos",
          "Video editing",
          "Motion & subtitles",
          "YouTube thumbnails"
        ]
      },
      {
        "name": "Web development",
        "text": "Websites and digital systems for clinics, construction firms, online stores and growing businesses, from the first wireframe to launch day, then hosting, security and updates after it.",
        "points": [
          "Landing pages & portfolios",
          "Business websites",
          "Online stores",
          "Website management"
        ]
      }
    ],
    "clientsTag": "Some of our clients",
    "clientsTitle": "Brands that trusted us",
    "howTag": "How we work",
    "howTitle": "From the first brief to launch day",
    "steps": [
      [
        "Discover",
        "We learn the business, the audience and the goal before we design anything."
      ],
      [
        "Plan",
        "We agree on the direction, the content and a clear timeline, so you know what is coming and when."
      ],
      [
        "Create",
        "Designers, editors and developers work from the same brief, so every piece matches."
      ],
      [
        "Launch & grow",
        "We publish, measure and keep improving, month after month."
      ]
    ],
    "valuesTag": "What we believe",
    "values": [
      [
        "Content with a job",
        "Every post, reel and page we make has one job: bring you more attention and more customers."
      ],
      [
        "One team, no handoffs",
        "You talk to the people who make the work. Nothing gets lost between agencies."
      ],
      [
        "Clear scope, clear price",
        "Plans and prices are on our site. A custom plan is priced before we start."
      ]
    ],
    "cta": "Start a project"
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
  clients: { title: "علامات تجارية عملنا معها" },
  services: {
    tag: "خدماتنا", title: "ما نقدمه، من البداية للنهاية", visit: "زيارة الموقع ↗", behance: "شاهد أعمالنا على Behance ↗",
    cards: [
      { title: "التصوير والمونتاج", text: "من أول لقطة لآخر تعديل: نصوّر براندك ومنتجاتك وفعالياتك، ونحوّلها لفيديوهات يشاهدها الناس حتى النهاية.",
        tags: ["تصوير المنتجات والبراند", "ريلز وفيديوهات قصيرة", "مونتاج الفيديو", "موشن وترجمة"],
        alts: ["فيديو رأسي لاستوديو تصوير", "فيديو رأسي يشرح خطوات المونتاج", "فيديو رأسي لعرض ترويجي", "خط زمني لمونتاج فيديو"] },
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
  about: {
    "meta": {
      "title": "عن Cairo Creatives — ملف الشركة",
      "description": "Cairo Creatives وكالة إبداعية في القاهرة: تصميم جرافيك وهوية بصرية، فيديو وريلز، ومواقع إلكترونية، بفريق واحد تحت سقف واحد."
    },
    "tag": "من نحن",
    "title": [
      "استوديو واحد.",
      "لكل جزء في علامتك."
    ],
    "lead": "Cairo Creatives وكالة إبداعية مقرها القاهرة. بنجمع التصميم الجرافيكي والفيديو وتطوير المواقع في فريق واحد، عشان البوستات والريلز والموقع بتوعك يبانوا ويتكلموا كأنهم من نفس الشركة.",
    "stats": [
      [
        "+35",
        "علامة تجارية اشتغلنا معاها"
      ],
      [
        "15",
        "موقع إلكتروني نفذناه"
      ],
      [
        "+12",
        "مجال خدمناه"
      ],
      [
        "3",
        "فرق إبداعية في استوديو واحد"
      ]
    ],
    "storyTag": "مين إحنا",
    "story": [
      "Cairo Creatives بتجمع تلات فرق: تصميم جرافيك وهوية بصرية، وفيديو وريلز، وتطوير مواقع. كل فريق ليه شغل حقيقي مع عملاء حقيقيين، ومع بعض بيغطوا كل اللي أي علامة محتاجاه عشان تظهر أونلاين.",
      "النهارده أي علامة بتشتغل مع Cairo Creatives بتاخد هويتها البصرية وتصميمات السوشيال ميديا والريلز والموقع من نفس الناس. بريف واحد، واتجاه واحد، ومفيش حاجة بتضيع بين وكالات."
    ],
    "whatTag": "بنعمل إيه",
    "whatTitle": "تلات فرق. اتجاه واحد.",
    "teams": [
      {
        "name": "تصميم جرافيك وهوية بصرية",
        "text": "تصميمات سوشيال ميديا وحملات وهويات بصرية لعلامات في العقارات والصحة والتعليم والمطاعم والسياحة والشحن والأزياء وغيرها. كل بوست معمول عشان يوقف السكرول ويوصّل العلامة.",
        "points": [
          "تصميمات سوشيال ميديا",
          "هوية بصرية ولوجوهات",
          "تصميمات الحملات",
          "مطبوعات وتغليف"
        ]
      },
      {
        "name": "فيديو وريلز",
        "text": "ريلز وفيديوهات قصيرة ومونتاج للعيادات والكوتشز والعلامات الشخصية والشركات في مصر والسعودية، وكمان صور مصغرة ليوتيوب وحملات موسمية لرمضان والعيد.",
        "points": [
          "ريلز وفيديوهات قصيرة",
          "مونتاج فيديو",
          "موشن وترجمة",
          "صور مصغرة ليوتيوب"
        ]
      },
      {
        "name": "تطوير المواقع",
        "text": "مواقع وأنظمة رقمية للعيادات وشركات المقاولات والمتاجر الإلكترونية والشركات اللي بتكبر، من أول تخطيط لحد يوم الإطلاق، وبعدها الاستضافة والحماية والتحديثات.",
        "points": [
          "صفحات هبوط وبورتفوليو",
          "مواقع شركات",
          "متاجر إلكترونية",
          "إدارة المواقع"
        ]
      }
    ],
    "clientsTag": "من عملائنا",
    "clientsTitle": "علامات وثقت فينا",
    "howTag": "إزاي بنشتغل",
    "howTitle": "من أول بريف لحد يوم الإطلاق",
    "steps": [
      [
        "نفهم",
        "بنفهم الشغل والجمهور والهدف قبل ما نصمم أي حاجة."
      ],
      [
        "نخطط",
        "بنتفق على الاتجاه والمحتوى وجدول زمني واضح، عشان تعرف إيه اللي جاي وإمتى."
      ],
      [
        "ننفذ",
        "المصممين والمونتيرز والمطورين بيشتغلوا من نفس البريف، فكل حاجة شبه بعضها."
      ],
      [
        "نطلق ونكبر",
        "بننشر ونقيس ونطوّر شهر ورا شهر."
      ]
    ],
    "valuesTag": "بنؤمن بإيه",
    "values": [
      [
        "محتوى ليه هدف",
        "كل بوست وريل وصفحة بنعملها ليها هدف واحد: تجيبلك انتباه أكتر وعملاء أكتر."
      ],
      [
        "فريق واحد من غير وسطاء",
        "بتتكلم مع الناس اللي بتعمل الشغل نفسه. مفيش حاجة بتضيع بين وكالات."
      ],
      [
        "نطاق واضح وسعر واضح",
        "الباقات والأسعار على موقعنا، والباقة المخصصة بتتسعّر قبل ما نبدأ."
      ]
    ],
    "cta": "ابدأ مشروعك"
  },
  footer: { line: ["الأفكار الكبيرة تبدأ بخطوة صغيرة.", "لنجعل خطوتك لا تُنسى."], nav: "التنقل", links: ["الرئيسية", "من نحن", "خدماتنا", "الأسعار", "الأسئلة", "تواصل معنا"], connect: "تابعنا" },
};

const base = import.meta.env.BASE_URL.replace(/\/$/, "");
// the Arabic copy lives under /ar/; everything else is English
export const getT = (Astro) => (Astro.url.pathname.startsWith(`${base}/ar`) ? ar : en);
export const homeHref = (lang) => (lang === "ar" ? `${base}/ar/` : `${base}/`);
export const aboutHref = (lang) => `${homeHref(lang)}about/`;
// true on the About page (nav and footer links then point back to the home page sections)
export const isAbout = (Astro) => /\/about\/?$/.test(Astro.url.pathname);
