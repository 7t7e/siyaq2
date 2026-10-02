import { NewsCardItem, TrustedSource, ExampleCase, FaqItem, AnalysisResult } from '../types';

export interface PresetTestCase {
  id: string;
  label: string;
  type: 'video' | 'text' | 'url' | 'image' | 'audio';
  input: string;
  result: AnalysisResult;
}

// ARABIC DATA
export const INITIAL_NEWS_ITEMS_AR: NewsCardItem[] = [
  {
    id: 'news-1',
    title: 'اقتطاع تصريح مسؤول تعليمي حول "إلغاء الإجازات المطولة"',
    date: 'منذ يومين',
    contentType: 'video',
    status: 'misleading',
    statusLabel: 'سياق مُضلِّل',
    circulatedSummary: 'انتشر مقطع مدته ١٢ ثانية يقول فيه: "تقرر إعادة النظر في نظام الإجازات المطولة والعودة للتقويم الموحد فوراً".',
    truthSummary: 'التصريح الكامل كان إجابة على سؤال افتراضي يخص دراسة استطلاعية أجريت قبل عامين، وأكد في ختام حديثه اعتماد التقويم الحالي دون أي تعديل.',
    verificationSource: 'المؤتمر الصحفي لوزارة التعليم والناطق الرسمي',
    verificationUrl: 'https://spa.gov.sa',
    category: 'تعليم',
    engagement: '٢٤٠ ألف مشاهدة متداولة'
  },
  {
    id: 'news-2',
    title: 'تداول تحذير من "منخفض قطبي تاريخي يجمد المحاصيل"',
    date: 'منذ ٣ أيام',
    contentType: 'text',
    status: 'incomplete',
    statusLabel: 'سياق ناقص',
    circulatedSummary: 'رسالة واتساب تزعم: "المركز الوطني للأرصاد يحذر من كتلة قطبية غير مسبوقة تضرب جميع المناطق خلال ٤٨ ساعة".',
    truthSummary: 'التقرير الصادر من الأرصاد ذكر انخفاضاً معتاداً في درجات الحرارة بمعدل ٣ درجات على الأطراف الشمالية فقط ضمن المعدل الفصلي الطبيعي.',
    verificationSource: 'التقرير الدوري - المركز الوطني للأرصاد (NCM)',
    verificationUrl: 'https://ncm.gov.sa',
    category: 'أرصاد وبيئة',
    engagement: '١٥٠ ألف إعادة توجيه'
  },
  {
    id: 'news-3',
    title: 'صورة منشورة تزعم "فرض رسوم جديدة على الحوالات البنكية الشخصية"',
    date: 'منذ أسبوع',
    contentType: 'image',
    status: 'misleading',
    statusLabel: 'سياق مُضلِّل',
    circulatedSummary: 'لقطة شاشة لجدول رسوم يزعم فرض ضريبة إضافية قدرها ٥٪ على كل تحويل عائلي بين الحسابات المحلية.',
    truthSummary: 'الجدول مقتطع من لائحة تنظيمية قديمة للحوالات التجارية للشركات متعددة العملات، والحوالات الشخصية للأفراد معفاة تماماً.',
    verificationSource: 'بيان البنك المركزي السعودي (ساما) وهيئة الزكاة والضريبة والجمارك',
    verificationUrl: 'https://zatca.gov.sa',
    category: 'اقتصاد ومال',
    engagement: '٣١٠ آلاف تفاعل'
  },
  {
    id: 'news-4',
    title: 'تسجيل صوتي مجتزأ ينسب لقطاع الصحة "تحذير من منتج غذائي شهير"',
    date: 'منذ أسبوع',
    contentType: 'audio',
    status: 'misleading',
    statusLabel: 'سياق مُضلِّل',
    circulatedSummary: 'مقطع صوتي 20 ثانية يحذر من استهلاك نوع من الزيوت النباتية بدعوى تسببها المباشر في أضرار حادة.',
    truthSummary: 'المقطع جزء من ندوة توعوية مدتها ساعة حول الإفراط في الدهون المتحولة بشكل عام، وأكد المحاضر سلامة المنتجات المرخصة بالأسواق.',
    verificationSource: 'الهيئة العامة للغذاء والدواء (SFDA)',
    verificationUrl: 'https://sfda.gov.sa',
    category: 'صحة وغذاء',
    engagement: '١٨٠ ألف استماع'
  },
  {
    id: 'news-5',
    title: 'اقتطاع عبارة خبير اقتصادي حول "انخفاض القوة الشرائية بنسبة 30%"',
    date: 'منذ ١٠ أيام',
    contentType: 'video',
    status: 'incomplete',
    statusLabel: 'سياق ناقص',
    circulatedSummary: 'مقطع قصير يظهر الخبير وهو يقول: "الأسرة قد تفقد ٣٠٪ من قوتها الشرائية بحلول الربع القادم".',
    truthSummary: 'كان الخبير يطرح نموذجاً متشائماً في حال حدوث ركود عالمي في سلاسل التوريد عام 2020، واستدرك مباشرة بأن المؤشرات الوطنية تدل على استقرار الأسعار.',
    verificationSource: 'اللقاء الكامل على القناة الاقتصادية الرسمية',
    verificationUrl: 'https://stats.gov.sa',
    category: 'اقتصاد',
    engagement: '٤٢٠ ألف مشاهدة'
  },
  {
    id: 'news-6',
    title: 'تداول بطاقة رقمية تزعم "تغيير سن التقاعد الإلزامي"',
    date: 'منذ أسبوعين',
    contentType: 'image',
    status: 'incomplete',
    statusLabel: 'سياق ناقص',
    circulatedSummary: 'انفوجرافيك يزعم رفع سن التقاعد فوراً لكافة الفئات دون استثناء.',
    truthSummary: 'النص الأصلي من النظام يوضح التدرج الزمني على مدار عقدين لحماية المكتسبات مع استثناء من أمضى مدداً محددة في الخدمة.',
    verificationSource: 'المؤسسة العامة للتأمينات الاجتماعية',
    verificationUrl: 'https://gosi.gov.sa',
    category: 'أنظمة وقوانين',
    engagement: '١٩٠ ألف تداول'
  }
];

// ENGLISH DATA
export const INITIAL_NEWS_ITEMS_EN: NewsCardItem[] = [
  {
    id: 'news-1',
    title: 'Clipped Statement on "Immediate Cancellation of Extended Weekends"',
    date: '2 days ago',
    contentType: 'video',
    status: 'misleading',
    statusLabel: 'Misleading Context',
    circulatedSummary: 'A 12-second clip circulated claiming: "It was decided to reconsider the extended weekend calendar and immediately return to the old uniform system."',
    truthSummary: 'The full statement was an answer to a theoretical query regarding a survey conducted two years prior. The official concluded by confirming the current official calendar remains unchanged.',
    verificationSource: 'Ministry of Education Official Press Briefing',
    verificationUrl: 'https://spa.gov.sa',
    category: 'Education',
    engagement: '240K viral views'
  },
  {
    id: 'news-2',
    title: 'Viral Warning Claiming "Historic Polar Front Freezing Entire Crop Yields"',
    date: '3 days ago',
    contentType: 'text',
    status: 'incomplete',
    statusLabel: 'Incomplete Context',
    circulatedSummary: 'A WhatsApp message claims: "The National Meteorological Center warns of an unprecedented polar vortex striking all regions within 48 hours."',
    truthSummary: 'The published NCM bulletin described a routine seasonal temperature drop of 3 degrees restricted to northern borderline regions only, within regular seasonal norms.',
    verificationSource: 'National Center for Meteorology (NCM) Periodic Report',
    verificationUrl: 'https://ncm.gov.sa',
    category: 'Weather & Climate',
    engagement: '150K forwards'
  },
  {
    id: 'news-3',
    title: 'Screenshot Claiming "5% Tax on All Personal Bank Transfers"',
    date: '1 week ago',
    contentType: 'image',
    status: 'misleading',
    statusLabel: 'Misleading Context',
    circulatedSummary: 'A cropped fee schedule circulated claiming an additional 5% tax is imposed on family and peer-to-peer transfers between local personal bank accounts.',
    truthSummary: 'The schedule was clipped from an old commercial cross-border multi-currency business regulation. Domestic personal transfers between individuals remain 100% tax-free.',
    verificationSource: 'Central Bank (SAMA) & Zakat, Tax and Customs Authority',
    verificationUrl: 'https://zatca.gov.sa',
    category: 'Economy & Finance',
    engagement: '310K interactions'
  },
  {
    id: 'news-4',
    title: 'Truncated Voice Note Attributed to Health Sector Warning of Popular Food Item',
    date: '1 week ago',
    contentType: 'audio',
    status: 'misleading',
    statusLabel: 'Misleading Context',
    circulatedSummary: 'A 20-second audio clip warns against consuming common cooking oils, claiming they directly cause acute cellular breakdown.',
    truthSummary: 'The snippet was sliced from an hour-long nutritional seminar on industrial trans-fats moderation. The lecturer explicitly emphasized the certified safety of all licensed retail products.',
    verificationSource: 'Saudi Food and Drug Authority (SFDA)',
    verificationUrl: 'https://sfda.gov.sa',
    category: 'Health & Food',
    engagement: '180K listens'
  },
  {
    id: 'news-5',
    title: 'Economist Quote Clipped to Claim "Purchasing Power Dropping by 30%"',
    date: '10 days ago',
    contentType: 'video',
    status: 'incomplete',
    statusLabel: 'Incomplete Context',
    circulatedSummary: 'A short video shows an economist stating: "Households could lose up to 30% of purchasing power by next quarter."',
    truthSummary: 'The speaker was outlining a worst-case theoretical model during the 2020 global supply chain shock, and immediately followed by showing that national fiscal resilience keeps inflation minimal.',
    verificationSource: 'Full broadcast on National Economic Channel',
    verificationUrl: 'https://stats.gov.sa',
    category: 'Economy',
    engagement: '420K views'
  },
  {
    id: 'news-6',
    title: 'Digital Card Viral Claim: "Sudden Immediate Increase in Retirement Age"',
    date: '2 weeks ago',
    contentType: 'image',
    status: 'incomplete',
    statusLabel: 'Incomplete Context',
    circulatedSummary: 'An infographic claiming immediate blanket increase in retirement age for all demographic brackets without transition phases.',
    truthSummary: 'The statutory text details a phased transition over two decades to safeguard acquired rights, with clear grandfathering clauses for existing tenures.',
    verificationSource: 'General Organization for Social Insurance (GOSI)',
    verificationUrl: 'https://gosi.gov.sa',
    category: 'Regulations',
    engagement: '190K shares'
  }
];

export const TRUSTED_SOURCES_DATA_AR: TrustedSource[] = [
  {
    id: 'spa',
    name: 'Saudi Press Agency (SPA)',
    arabicName: 'وكالة الأنباء السعودية (واس)',
    category: 'government',
    description: 'المصدر الرسمي الأول للأوامر الملكية والبيانات الوزارية والقرارات الرسمية في المملكة العربية السعودية.',
    url: 'https://www.spa.gov.sa',
    iconType: 'newspaper',
    badge: 'مصدر حكومي رسمي'
  },
  {
    id: 'stats',
    name: 'General Authority for Statistics',
    arabicName: 'الهيئة العامة للإحصاء (GASTAT)',
    category: 'government',
    description: 'المرجع الإحصائي الرسمي الوحيد لكافة المؤشرات السكانية والاقتصادية والتضخم وسوق العمل.',
    url: 'https://www.stats.gov.sa',
    iconType: 'bar-chart',
    badge: 'بيانات رقمية موثقة'
  },
  {
    id: 'moh',
    name: 'Ministry of Health',
    arabicName: 'وزارة الصحة السعودية',
    category: 'government',
    description: 'الجهة المعتمدة لإصدار التحذيرات الصحية، البروتوكولات الطبية، وإعلانات الأدوية والأوبئة.',
    url: 'https://www.moh.gov.sa',
    iconType: 'heart-pulse',
    badge: 'مرجع صحي وطني'
  },
  {
    id: 'moi',
    name: 'Ministry of Interior',
    arabicName: 'وزارة الداخلية (أبشر والقطاعات الأمنية)',
    category: 'government',
    description: 'البيانات الأمنية، لوائح المرور، مكافحة الشائعات الجنائية، والأنظمة المدنية.',
    url: 'https://www.moi.gov.sa',
    iconType: 'shield',
    badge: 'بيانات أمنية وقانونية'
  },
  {
    id: 'ncm',
    name: 'National Center for Meteorology',
    arabicName: 'المركز الوطني للأرصاد (NCM)',
    category: 'government',
    description: 'المصدر الوطني المختص بإصدار الإنذار المبكر والتنبؤات الجوية وتحديثات المناخ.',
    url: 'https://www.ncm.gov.sa',
    iconType: 'cloud',
    badge: 'طقس وإنذار مبكر'
  },
  {
    id: 'zatca',
    name: 'Zakat, Tax and Customs Authority',
    arabicName: 'هيئة الزكاة والضريبة والجمارك (ZATCA)',
    category: 'government',
    description: 'المرجع الرسمي لكافة لوائح القيمة المضافة، التعريفات الجمركية، ورسوم الاستيراد والتجارة.',
    url: 'https://zatca.gov.sa',
    iconType: 'award',
    badge: 'ضرائب وجمارك'
  },
  {
    id: 'misbar',
    name: 'Misbar Fact Checking',
    arabicName: 'منصة مسبار للتحقق',
    category: 'independent',
    description: 'منصة تقصي حقائق مستقلة تتبع شبكة معايير دولية لكشف الأخبار المضللة والسياقات المجتزأة في العالم العربي.',
    url: 'https://misbar.com',
    iconType: 'check',
    badge: 'تقصي حقائق مستقل'
  },
  {
    id: 'fatabyyano',
    name: 'Fatabyyano Platform',
    arabicName: 'منصة فتبينوا',
    category: 'independent',
    description: 'مشروع عربي علمي مستقل لمكافحة الأخبار الكاذبة والمفبركة بالتعاون مع شبكات التدقيق الدولية.',
    url: 'https://fatabyyano.net',
    iconType: 'check',
    badge: 'تدقيق علمي معتمد'
  },
  {
    id: 'afp-factcheck',
    name: 'AFP Fact Check Arabic',
    arabicName: 'خدمة تقصي صحة الأخبار من وكالة فرانس برس',
    category: 'independent',
    description: 'فريق متخصص باللغة العربية يتبع للشبكة الدولية لتدقيق المعلومات (IFCN) لكشف الصور والمقاطع المعدلة.',
    url: 'https://factcheck.afp.com/ar',
    iconType: 'newspaper',
    badge: 'معتمد دولياً (IFCN)'
  },
  {
    id: 'reuters-factcheck',
    name: 'Reuters Fact Check',
    arabicName: 'رويترز لتقصي الحقائق',
    category: 'independent',
    description: 'تحقيقات صحفية معمقة لتقصي أصل الادعاءات والمقاطع العالمية المتداولة وسياقها الزمني.',
    url: 'https://www.reuters.com/fact-check',
    iconType: 'shield',
    badge: 'تحقق صحفي دولي'
  }
];

export const TRUSTED_SOURCES_DATA_EN: TrustedSource[] = [
  {
    id: 'spa',
    name: 'Saudi Press Agency (SPA)',
    arabicName: 'Saudi Press Agency (SPA)',
    category: 'government',
    description: 'The primary sovereign source for royal decrees, ministerial statements, and authorized official announcements.',
    url: 'https://www.spa.gov.sa',
    iconType: 'newspaper',
    badge: 'Official Sovereign Agency'
  },
  {
    id: 'stats',
    name: 'General Authority for Statistics (GASTAT)',
    arabicName: 'General Authority for Statistics',
    category: 'government',
    description: 'The sole official statistical reference for all population demographics, economic indicators, inflation, and labor market data.',
    url: 'https://www.stats.gov.sa',
    iconType: 'bar-chart',
    badge: 'Verified Numerical Data'
  },
  {
    id: 'moh',
    name: 'Ministry of Health (MOH)',
    arabicName: 'Ministry of Health',
    category: 'government',
    description: 'The certified authority for public health alerts, clinical protocols, vaccine safety notices, and epidemic updates.',
    url: 'https://www.moh.gov.sa',
    iconType: 'heart-pulse',
    badge: 'National Health Authority'
  },
  {
    id: 'moi',
    name: 'Ministry of Interior (MOI / Absher)',
    arabicName: 'Ministry of Interior',
    category: 'government',
    description: 'Security announcements, traffic regulations, cyber rumor combat enforcement, and civil governance directives.',
    url: 'https://www.moi.gov.sa',
    iconType: 'shield',
    badge: 'Legal & Security Authority'
  },
  {
    id: 'ncm',
    name: 'National Center for Meteorology (NCM)',
    arabicName: 'National Center for Meteorology',
    category: 'government',
    description: 'The national authority tasked with early warning weather alerts, forecasts, and climate observations.',
    url: 'https://www.ncm.gov.sa',
    iconType: 'cloud',
    badge: 'Early Warning Meteorology'
  },
  {
    id: 'zatca',
    name: 'Zakat, Tax and Customs Authority (ZATCA)',
    arabicName: 'Zakat, Tax and Customs Authority',
    category: 'government',
    description: 'The sovereign source for all VAT regulations, customs tariffs, import duties, and trade compliance.',
    url: 'https://zatca.gov.sa',
    iconType: 'award',
    badge: 'Tax & Customs Compliance'
  },
  {
    id: 'misbar',
    name: 'Misbar Fact Checking',
    arabicName: 'Misbar Fact Checking',
    category: 'independent',
    description: 'An independent Arab fact-checking network adhering to international standards to expose media spin and decontextualization.',
    url: 'https://misbar.com',
    iconType: 'check',
    badge: 'Independent Fact-Checking'
  },
  {
    id: 'fatabyyano',
    name: 'Fatabyyano Platform',
    arabicName: 'Fatabyyano Fact-Checking',
    category: 'independent',
    description: 'An independent scientific fact-checking initiative operating in partnership with international verification networks.',
    url: 'https://fatabyyano.net',
    iconType: 'check',
    badge: 'Scientific IFCN Signatory'
  },
  {
    id: 'afp-factcheck',
    name: 'AFP Fact Check (Arabic Desk)',
    arabicName: 'AFP Fact Check',
    category: 'independent',
    description: 'Dedicated professional verification desk by Agence France-Presse accredited by the International Fact-Checking Network.',
    url: 'https://factcheck.afp.com/ar',
    iconType: 'newspaper',
    badge: 'International IFCN Signatory'
  },
  {
    id: 'reuters-factcheck',
    name: 'Reuters Fact Check',
    arabicName: 'Reuters Fact Check',
    category: 'independent',
    description: 'Rigorous journalistic investigations verifying the origin, timestamp, and unedited video archives of viral claims.',
    url: 'https://www.reuters.com/fact-check',
    iconType: 'shield',
    badge: 'Global Journalism Standard'
  }
];

export const EXAMPLE_CASES_DATA_AR: ExampleCase[] = [
  {
    id: 'ex-1',
    title: 'اقتطاع تصريح الاستثمار: "الشركات ستتكبد خسائر"',
    category: 'اقتصاد وتنمية',
    status: 'misleading',
    tag: 'مقطع فيديو ١٥ ثانية',
    circulatedText: '"إذا دخلنا هذا القطاع الجديد فإن أغلب الشركات ستتكبد خسائر متتالية ولا يمكن الصمود..."',
    originalText: '"إذا دخلنا هذا القطاع الجديد دون إعداد البنية التحتية والكوادر الوطنية فإن أغلب الشركات ستتكبد خسائر؛ ولذلك قمنا بتمويل برامج التأهيل وتخفيض التكاليف لضمان أرباح فورية ونمو مستدام لكافة المستثمرين."',
    shiftExplanation: 'حذف الشرط (دون إعداد البنية التحتية) وحذف النتيجة الإيجابية والحل، حوّل التحذير المشروط إلى تشاؤم وانسحاب كامل.',
    source: 'جلسة المنتدى الاستثماري السنوي، الدقيقة 24:10'
  },
  {
    id: 'ex-2',
    title: 'تداول قرار الإسكان: "إيقاف الدعم عن فئات محددة"',
    category: 'خدمات ودعم',
    status: 'incomplete',
    tag: 'منشور واتساب منقول',
    circulatedText: '"تقرر إيقاف الدعم الشهري عن كافة المستفيدين الذين تتجاوز رواتبهم الحد المالي الجديد بدءاً من الشهر القادم."',
    originalText: '"تقرر إيقاف الدعم المباشر العيني والانتقال إلى برنامج التمويل الميسر بنسبة مرابحة صفرية لكافة المستفيدين لتمكينهم من ملكية الأصول بدلاً من الاستهلاك المؤقت."',
    shiftExplanation: 'تمت إزالة البديل التمويلي الجديد والهدف التمكيني، مما أوحى بحرمان المستفيدين بينما الواقع هو تطوير نمط الدعم.',
    source: 'المؤتمر الصحفي لبرنامج الإسكان الوطني'
  },
  {
    id: 'ex-3',
    title: 'مقطع الأمن والسلامة: "لا تتصل برقم الطوارئ في هذه الحالة"',
    category: 'أمن وسلامة',
    status: 'misleading',
    tag: 'مقطع تيك توك متداول',
    circulatedText: '"في الحوادث البسيطة داخل الأحياء، لا تتصل برقم الطوارئ إطلاقاً..."',
    originalText: '"في الحوادث البسيطة الخالية من الإصابات داخل الأحياء، لا تتصل برقم الطوارئ الميداني تفادياً لتعطيل البلاغات الحرجة، بل استخدم التطبيق الذكي المباشر لتوثيق الحادث في دقيقتين."',
    shiftExplanation: 'إسقاط التوجيه للتطبيق الذكي حوّل النصيحة التنظيمية إلى دعوة لإهمال الحوادث أو ضياع الحقوق.',
    source: 'الحملة التوعوية للإدارة العامة للمرور'
  },
  {
    id: 'ex-4',
    title: 'تصريح الصحة العامة: "هذا الدواء لم يعد فعالاً"',
    category: 'صحة ورعاية',
    status: 'incomplete',
    tag: 'صورة تغريدة مجتزأة',
    circulatedText: '"المضادات الحيوية التقليدية لم تعد فعالة وتشكل خطراً على مناعة الجسم."',
    originalText: '"المضادات الحيوية التقليدية عند استخدامها دون وصفة طبية لعلاج نزلات البرد الفيروسية لم تعد فعالة وتشكل عبئاً، بينما تظل علاجاً أساسياً ومنقذاً للحياة في الالتهابات البكتيرية المحددة."',
    shiftExplanation: 'إزالة التخصيص البكتيري/الفيروسي وشرط الوصفة الطبية أحدث هلعاً عاماً من دواء حيوي.',
    source: 'إرشادات الترشيد الدوائي - وزارة الصحة'
  }
];

export const EXAMPLE_CASES_DATA_EN: ExampleCase[] = [
  {
    id: 'ex-1',
    title: 'Clipped Investment Quote: "Companies Will Incur Severe Losses"',
    category: 'Economy & Growth',
    status: 'misleading',
    tag: '15-second Video Cut',
    circulatedText: '"If we enter this new sector, the majority of companies will suffer consecutive losses and cannot survive..."',
    originalText: '"If we enter this new sector without preparatory infrastructure and national talent, companies would incur losses; which is precisely why we established subsidy programs to ensure immediate profitability for all participants."',
    shiftExplanation: 'Dropping the condition ("without infrastructure") and omitting the actual incentive program inverted cautious planning into an alarmist crisis soundbite.',
    source: 'Annual Investment Forum, Minute 24:10'
  },
  {
    id: 'ex-2',
    title: 'Viral Housing Rumor: "Subsidies Halted for Target Beneficiaries"',
    category: 'Social Support',
    status: 'incomplete',
    tag: 'Forwarded Chat Post',
    circulatedText: '"It was decided to halt monthly subsidies for all beneficiaries whose salaries exceed the new threshold starting next month."',
    originalText: '"It was decided to transition from transient cash handouts to an accelerated zero-interest homeownership financing model, empowering citizens with equity assets rather than temporary consumption."',
    shiftExplanation: 'Removing the new zero-interest financing alternative made an institutional upgrade look like a punitive cancellation of citizen rights.',
    source: 'National Housing Program Press Briefing'
  },
  {
    id: 'ex-3',
    title: 'Public Safety Excerpt: "Never Call the Emergency Number in This Case"',
    category: 'Public Safety',
    status: 'misleading',
    tag: 'Viral Short Clip',
    circulatedText: '"In minor fender benders in residential streets, never call the emergency hotline..."',
    originalText: '"In minor property-only fender benders with no injuries, avoid dispatching field emergency units to keep lines open for critical trauma, and instead use the designated instant mobile app to file the report in two minutes."',
    shiftExplanation: 'Dropping the app guidance turned an efficiency streamlining directive into reckless negligence advice.',
    source: 'General Traffic Directorate Awareness Campaign'
  },
  {
    id: 'ex-4',
    title: 'Public Health Warning Clipped: "This Medication is No Longer Effective"',
    category: 'Healthcare',
    status: 'incomplete',
    tag: 'Cropped Tweet Card',
    circulatedText: '"Traditional antibiotics are no longer effective and pose a direct risk to human immune resilience."',
    originalText: '"Traditional antibiotics, when misused without a prescription for viral colds, are ineffective and strain the body, whereas they remain essential life-saving treatments for verified bacterial infections."',
    shiftExplanation: 'Stripping out the viral vs bacterial distinction caused unnecessary panic over an essential medication.',
    source: 'Rational Medicine Use Guidelines - Ministry of Health'
  }
];

export const PRESET_TEST_CASES_AR: PresetTestCase[] = [
  {
    id: 'preset-1',
    label: 'مقطع مجتزأ: تصريح الرسوم الإضافية (سياق مضلل)',
    type: 'video',
    input: 'مقطع متداول ١٨ ثانية: "سيتم فرض رسوم على كافة المعاملات الحكومية غير المؤتمتة بدءاً من الأسبوع القادم"',
    result: {
      id: 'res-preset-1',
      query: 'مقطع متداول ١٨ ثانية حول رسوم المعاملات',
      inputType: 'video',
      status: 'misleading',
      statusLabel: 'سياق مُضلِّل',
      confidence: 96,
      timestamp: 'الآن',
      originalSource: {
        name: 'هيئة كفاءة الإنفاق والمشروعات الحكومية',
        title: 'اللقاء التلفزيوني حول التحول الرقمي الشامل (الدقيقة 18:30)',
        url: 'https://spa.gov.sa',
        publishedDate: '14 سبتمبر 2026',
        type: 'interview'
      },
      timeline: {
        totalDuration: '00:58',
        segments: [
          {
            label: 'السياق السابق',
            startTime: '00:00',
            endTime: '00:18',
            text: 'نحن نضمن أن كافة الخدمات للمواطنين الأفراد مجانية تماماً عبر المنصة الوطنية الموحدة ولا يدفع المواطن ريالا واحدا...',
            type: 'previous'
          },
          {
            label: 'المقطع المتداول (المجتزأ)',
            startTime: '00:18',
            endTime: '00:36',
            text: '...أما الشركات الكبرى التي ترفض الربط الإلكتروني وتصر على المعاملات الورقية، فسيتم فرض رسوم تنظيمية على معاملاتها غير المؤتمتة لدفعها نحو التحول الرقمي.',
            type: 'shared'
          },
          {
            label: 'السياق اللاحق',
            startTime: '00:36',
            endTime: '00:58',
            text: 'وهذه الرسوم خاصة بالمؤسسات والشركات التجارية فقط، ولن تطال أفراد المجتمع أو المراجعين في أي دائرة حكومية.',
            type: 'next'
          }
        ]
      },
      sharedSegment: {
        quote: 'سيتم فرض رسوم على كافة المعاملات غير المؤتمتة بدءاً من الأسبوع القادم',
        circulatedClaim: 'الحكومة تفرض رسوماً جديدة على المواطنين في الدوائر الخدمية.',
        contextMissing: 'حذف التحديد الصريح بأن الرسوم مقتصرة فقط على الشركات الكبرى المتأخرة عن الربط الآلي، وأن المواطنين معفون مجاناً بالكامل.'
      },
      originalContext: {
        previousContext: 'التأكيد على مجانية الخدمات للأفراد المواطنين بنسبة 100% عبر المنصات الرقمية.',
        actualStatement: 'الرسوم موجهة كأداة حث تنظيمية على الشركات التجارية الكبرى فقط لتشجيع الربط الإلكتروني.',
        nextContext: 'تكرار التأكيد على عدم تأثر المواطن أو الخدمات الفردية.',
        fullMeaning: 'التنظيم يستهدف تسريع التحول الرقمي لقطاع الأعمال الكبيرة حصراً ولا يمس الأفراد بأي عبء مالي.'
      },
      meaningDifference: 'المقطع المتداول جعل المشاهد يعتقد بوجود جباية على عامة الناس، بينما النص الأصلي قرار تنظيمي على الشركات التجارية لحمايتها من الروتين الورقي.',
      intellectualImpact: 'إثارة القلق الاقتصادي وتشويه جهود التيسير على المواطنين يضعف الثقة المجتمعية؛ والعودة للسياق تعيد التوازن والاطمئنان للمواطن.',
      keyPoints: [
        'المعاملات الفردية للأفراد مجانية بالكامل.',
        'الرسوم تخص الشركات التجارية الكبرى غير الملتزمة بالربط الرقمي.',
        'تم اقتطاع أول 18 ثانية وآخر 22 ثانية عمداً لإخفاء الاستثناء.'
      ],
      recommendation: 'لا تنشر المقطع المجتزأ؛ انشر دائماً التوضيح المقترن بالمصدر الرسمي حفاظاً على وعي المجتمع.'
    }
  },
  {
    id: 'preset-2',
    label: 'رسالة واتساب: تحذير الأرصاد من موجة غبار خانقة (سياق ناقص)',
    type: 'text',
    input: 'عاجل ورسمي من الأرصاد: تجنبوا الخروج وإغلاق المدارس بسبب عاصفة رملية حمراء تشل الحركة غداً',
    result: {
      id: 'res-preset-2',
      query: 'رسالة واتساب حول عاصفة رملية وتوقف المدارس',
      inputType: 'text',
      status: 'incomplete',
      statusLabel: 'سياق ناقص',
      confidence: 93,
      timestamp: 'الآن',
      originalSource: {
        name: 'المركز الوطني للأرصاد (NCM)',
        title: 'التقرير التنبيهي اليومي للتقلبات الجوية الموسمية',
        url: 'https://ncm.gov.sa',
        publishedDate: 'الأمس',
        type: 'statement'
      },
      timeline: {
        totalDuration: 'تقرير نصي',
        segments: [
          {
            label: 'السياق الإقليمي',
            startTime: 'فقرة ١',
            endTime: 'فقرة ٢',
            text: 'نشاط سطحي معتاد للرياح المثيرة للأتربة على الطرق السريعة المكشوفة في بعض المحافظات الحدودية فقط.',
            type: 'previous'
          },
          {
            label: 'المقطع المتداول',
            startTime: 'اقتباس',
            endTime: 'رسالة',
            text: 'تجنبوا الخروج من المنازل لمرضى الحساسية الشديدة في المناطق المفتوحة.',
            type: 'shared'
          },
          {
            label: 'السياق اللاحق والتعليمي',
            startTime: 'الخاتمة',
            endTime: 'التعميم',
            text: 'الحالة خفيفة إلى متوسطة لا تستدعي تعليق الدراسة أو تعطيل الأعمال في أي مدينة رئيسية.',
            type: 'next'
          }
        ]
      },
      sharedSegment: {
        quote: 'تجنبوا الخروج وإغلاق المدارس بسبب عاصفة رملية حمراء تشل الحركة',
        circulatedClaim: 'وجود عاصفة استثنائية تشمل جميع المناطق مع تعليق رسمي للدراسة.',
        contextMissing: 'التحذير كان مخصصاً لمرضى الجهاز التنفسي في أطراف الطرق المفتوحة، ولم يرد أي ذكر لتعليق المدارس في البيان الرسمي.'
      },
      originalContext: {
        actualStatement: 'رياح سطحية مثيرة للغبار الخفيف على المناطق الصحراوية المكشوفة مع توصية اعتيادية لمرضى الحساسية.',
        fullMeaning: 'طقس ربيعي معتاد دون أي مؤشر لحالة طارئة تستدعي تعطيل الحياة اليومية.'
      },
      meaningDifference: 'إضافة عبارة "إغلاق المدارس" وتهويل الحالة الجوية يربك أولياء الأمور ويثير فوضى في قطاع النقل دون سند رسمي.',
      intellectualImpact: 'تكرار الشائعات الجوية غير الدقيقة يقلل من اكتراث المجتمع بالإنذارات الحقيقية عند حدوث كوارث فعلية (ظاهرة التبلد التحذيري).',
      keyPoints: [
        'تعليق الدراسة يصدر حصراً عبر إدارة التعليم المعنية أو منصة مدرستي.',
        'المركز الوطني للأرصاد لم يعلن اللون الأحمر لأي منطقة حضرية.',
        'البيان الأصلي نصيحة وقائية اعتيادية لمرضى الصدر.'
      ],
      recommendation: 'راجع صفحة الإنذار المبكر في تطبيق الأرصاد (أنواء) قبل إعادة توجيه رسائل الواتساب.'
    }
  },
  {
    id: 'preset-3',
    label: 'بيان موثق: تحديث بروتوكول الرعاية الصحية (سياق مكتمل)',
    type: 'url',
    input: 'https://www.moh.gov.sa/news/updates-2026-preventive-guidance',
    result: {
      id: 'res-preset-3',
      query: 'رابط بيان وزارة الصحة حول البروتوكولات الوقائية',
      inputType: 'url',
      status: 'complete',
      statusLabel: 'سياق مكتمل',
      confidence: 98,
      timestamp: 'الآن',
      originalSource: {
        name: 'وزارة الصحة السعودية (MOH)',
        title: 'البيان الصحفي للتحديثات السنوية لسلامة المنشآت الطبية',
        url: 'https://www.moh.gov.sa',
        publishedDate: 'قبل ٣ أيام',
        type: 'official'
      },
      timeline: {
        totalDuration: 'بيان متطابق',
        segments: [
          {
            label: 'المقدمة الرسمية',
            startTime: 'بداية',
            endTime: 'فقرة 1',
            text: 'ضمن استراتيجية تعزيز جودة الحياة والوقاية المبكرة في المستشفيات...',
            type: 'previous'
          },
          {
            label: 'المحتوى المتداول',
            startTime: 'متن الخبر',
            endTime: 'نهاية الخبر',
            text: 'تحديث معايير التعقيم في أقسام العناية بما يتوافق مع توصيات منظمة الصحة العالمية الحديثة.',
            type: 'shared'
          },
          {
            label: 'المصادر والاتصال',
            startTime: 'الخاتمة',
            endTime: 'الرابط',
            text: 'للاطلاع على اللائحة الفنية يرجى زيارة البوابة الرسمية أو التواصل عبر 937.',
            type: 'next'
          }
        ]
      },
      sharedSegment: {
        quote: 'تحديث معايير التعقيم الوقائي في المنشآت الصحية لعام 2026',
        circulatedClaim: 'الخبر المتداول يعكس البيان المنشور دون اجتزاء أو تشويه.',
        contextMissing: 'لا يوجد أي اقتطاع مخل؛ النقل أمين ويحافظ على المعنى الأصلي تماماً.'
      },
      originalContext: {
        actualStatement: 'تحديث دوري إيجابي لرفع جاهزية المستشفيات والمراكز التخصصية.',
        fullMeaning: 'محتوى موثوق صادر عن الجهة المختصة وينقل الوقائع بأمانة دون تهويل أو اجتزاء.'
      },
      meaningDifference: 'لا يوجد اختلاف في المعنى؛ المحتوى المتداول يعكس السياق الكامل للمصدر المعتمد.',
      intellectualImpact: 'نشر الأخبار بمهنية وسياق مكتمل يعزز الأمن الفكري ويسهم في بناء وعي عام رشيد.',
      keyPoints: [
        'المحتوى مطابق للبيان الرسمي الصادر على منصة واس وموقع الوزارة.',
        'لم يتم حذف أي شروط أو استثناءات تؤثر على الدلالة.',
        'مؤشر موثوقية مرتفع جداً.'
      ],
      recommendation: 'المحتوى آمن للنشر والتداول مع الاحتفاظ بالإحالة إلى الرابط الرسمي.'
    }
  }
];

export const PRESET_TEST_CASES_EN: PresetTestCase[] = [
  {
    id: 'preset-1',
    label: 'Clipped Clip: Imposition of Service Fees (Misleading)',
    type: 'video',
    input: '18-second viral video: "Regulatory fees will be imposed on all non-automated government transactions starting next week"',
    result: {
      id: 'res-preset-1-en',
      query: '18-second viral clip regarding administrative fees',
      inputType: 'video',
      status: 'misleading',
      statusLabel: 'Misleading Context',
      confidence: 96,
      timestamp: 'Just now',
      originalSource: {
        name: 'Expenditure & Projects Efficiency Authority',
        title: 'Televised Broadcast on National Digital Transformation (Minute 18:30)',
        url: 'https://spa.gov.sa',
        publishedDate: 'Sep 14, 2026',
        type: 'interview'
      },
      timeline: {
        totalDuration: '00:58',
        segments: [
          {
            label: 'Previous Context',
            startTime: '00:00',
            endTime: '00:18',
            text: 'We guarantee that all citizen services remain completely cost-free across the unified national platform...',
            type: 'previous'
          },
          {
            label: 'Circulated Excerpt (Clipped)',
            startTime: '00:18',
            endTime: '00:36',
            text: '...whereas major corporations refusing digital integration will face regulatory fees on paper transactions to accelerate automation.',
            type: 'shared'
          },
          {
            label: 'Subsequent Context',
            startTime: '00:36',
            endTime: '00:58',
            text: 'These compliance fees apply strictly to commercial enterprises and will never affect individual citizens or public services.',
            type: 'next'
          }
        ]
      },
      sharedSegment: {
        quote: 'Fees will be imposed on all non-automated transactions starting next week',
        circulatedClaim: 'The government is imposing new public service fees on individual citizens.',
        contextMissing: 'Omitting the explicit clarification that fees strictly target non-compliant commercial entities, while individual citizens are 100% exempt.'
      },
      originalContext: {
        previousContext: 'Affirming that services for individual citizens are 100% free across national digital channels.',
        actualStatement: 'The fee is an administrative incentive targeting major corporate backlog to mandate digital integration.',
        nextContext: 'Re-affirming zero fiscal burden on private individuals.',
        fullMeaning: 'The policy accelerates corporate digitization without touching any individual public citizen services.'
      },
      meaningDifference: 'The clipped video led viewers to believe public levies were introduced, whereas the complete statement was an enterprise technical efficiency directive.',
      intellectualImpact: 'Manufactured economic anxiety destabilizes public trust; restoring context re-establishes reassurance and civic equilibrium.',
      keyPoints: [
        'Personal citizen transactions remain completely free.',
        'The fees exclusively target delinquent commercial enterprises.',
        'The opening 18s and ending 22s were deliberately excised to fabricate an outcry.'
      ],
      recommendation: 'Do not forward the clipped soundbite; always refer to the official sovereign press release.'
    }
  },
  {
    id: 'preset-2',
    label: 'Viral Chat: Meteorologist Alert of Severe Dustfront (Incomplete)',
    type: 'text',
    input: 'Urgent & Official from Meteorology: Stay indoors and school closures ordered due to a red sandstorm paralyzing traffic tomorrow',
    result: {
      id: 'res-preset-2-en',
      query: 'Viral WhatsApp text claiming school closures due to red duststorm',
      inputType: 'text',
      status: 'incomplete',
      statusLabel: 'Incomplete Context',
      confidence: 93,
      timestamp: 'Just now',
      originalSource: {
        name: 'National Center for Meteorology (NCM)',
        title: 'Daily Advisory Bulletin on Seasonal Weather Shifts',
        url: 'https://ncm.gov.sa',
        publishedDate: 'Yesterday',
        type: 'statement'
      },
      timeline: {
        totalDuration: 'Text Bulletin',
        segments: [
          {
            label: 'Regional Setting',
            startTime: 'Sec 1',
            endTime: 'Sec 2',
            text: 'Routine seasonal surface wind activity stirring light sand on exposed highways in remote border governorates.',
            type: 'previous'
          },
          {
            label: 'Circulated Excerpt',
            startTime: 'Quote',
            endTime: 'Text',
            text: 'Patients with severe respiratory sensitivity are advised to avoid outdoor exposure in open desert areas.',
            type: 'shared'
          },
          {
            label: 'Official Conclusion',
            startTime: 'Wrap-up',
            endTime: 'Notice',
            text: 'The weather condition is mild-to-moderate and does not warrant suspension of classes or work in any metropolitan area.',
            type: 'next'
          }
        ]
      },
      sharedSegment: {
        quote: 'Stay indoors and school closures ordered due to a red sandstorm paralyzing traffic',
        circulatedClaim: 'An extreme emergency weather event shutting down schools across the nation.',
        contextMissing: 'The advisory was a routine precaution for respiratory patients in desert outposts; school closures were never issued in the bulletin.'
      },
      originalContext: {
        actualStatement: 'Mild seasonal winds in open desert stretches with routine health precautions for allergic patients.',
        fullMeaning: 'Normal seasonal weather with zero indicators of emergency disruptions.'
      },
      meaningDifference: 'Fabricating "school closures" created panic among parents and disruptions in commuter logistics without factual basis.',
      intellectualImpact: 'Chronic exaggerated weather alerts cause alert fatigue, blinding communities when real hazards occur.',
      keyPoints: [
        'School closures are solely issued by the Ministry of Education.',
        'The NCM never announced a red warning code for any urban center.',
        'The bulletin was an ordinary seasonal medical precaution.'
      ],
      recommendation: 'Check the official NCM Anwaa app early warning radar before forwarding social media warnings.'
    }
  },
  {
    id: 'preset-3',
    label: 'Verified Release: Healthcare Protocol Upgrades (Complete)',
    type: 'url',
    input: 'https://www.moh.gov.sa/news/updates-2026-preventive-guidance',
    result: {
      id: 'res-preset-3-en',
      query: 'Ministry of Health press link regarding preventive healthcare protocols',
      inputType: 'url',
      status: 'complete',
      statusLabel: 'Complete Context',
      confidence: 98,
      timestamp: 'Just now',
      originalSource: {
        name: 'Ministry of Health (MOH)',
        title: 'Press Briefing on Annual Medical Facility Safety Standards',
        url: 'https://www.moh.gov.sa',
        publishedDate: '3 days ago',
        type: 'official'
      },
      timeline: {
        totalDuration: 'Direct Match',
        segments: [
          {
            label: 'Official Prelude',
            startTime: 'Start',
            endTime: 'Para 1',
            text: 'Within the national strategy to enhance preventive quality of life across clinical facilities...',
            type: 'previous'
          },
          {
            label: 'Circulated Content',
            startTime: 'Body',
            endTime: 'End',
            text: 'Updating disinfection standards in intensive care units in full alignment with latest international guidelines.',
            type: 'shared'
          },
          {
            label: 'Inquiries & References',
            startTime: 'Ending',
            endTime: 'Link',
            text: 'To review technical provisions please visit the official portal or contact 937.',
            type: 'next'
          }
        ]
      },
      sharedSegment: {
        quote: 'Updating preventive sterilization standards across healthcare facilities for 2026',
        circulatedClaim: 'The viral post conveys the exact published bulletin without manipulative spin.',
        contextMissing: 'No omissions; reporting is faithful and preserves original intent.'
      },
      originalContext: {
        actualStatement: 'A routine positive upgrade enhancing clinical readiness across specialized centers.',
        fullMeaning: 'Authoritative data from the competent ministry reported without sensationalism.'
      },
      meaningDifference: 'Zero meaning divergence; the circulated material reflects the complete context.',
      intellectualImpact: 'Accurate reporting reinforces cognitive trust and builds healthy civic awareness.',
      keyPoints: [
        'Directly matches the official press release on SPA and MOH portal.',
        'No qualifying exceptions or clauses were excised.',
        'Extremely high reliability index.'
      ],
      recommendation: 'Content is completely safe to circulate with official attribution.'
    }
  }
];

export const VERIFICATION_TIPS_AR = [
  {
    step: '١',
    title: 'ابحث عن "ماذا قيل قبل وبعد"',
    description: 'إذا كان المقطع يبدأ فجأة بكلمة صادمة أو ينتهي في قمة الإثارة، فاعلم أنه اقتُطع لإخفاء الشرط أو الاستثناء.'
  },
  {
    step: '٢',
    title: 'تأكد من تاريخ النشر الأصلي',
    description: 'كثير من المقاطع المجتزأة تكون حقيقية وصحيحة تماماً لكنها قيلت قبل ٥ سنوات في ظروف استثنائية لم تعد قائمة اليوم.'
  },
  {
    step: '٣',
    title: 'احذر من العناوين التي تملي عليك مشاعرك',
    description: 'العناوين من نوع "شاهد الفضيحة"، "تصريح صادم"، أو "كارثة غير معلنة" هي فخاخ نفسية لتشتيت عقلك عن تدقيق السياق.'
  },
  {
    step: '٤',
    title: 'ابحث عن الكلمة المفتاحية في وكالة الأنباء (واس)',
    description: 'أي قرار حكومي أو تنظيمي رسمي لا بد أن يصدر ببيان مكتمل الكلمات والأسباب في المنصات الوطنية المعتمدة.'
  },
  {
    step: '٥',
    title: 'لا تجعل أصابعك أسرع من عقلك',
    description: 'توقف ٣٠ ثانية قبل الضغط على "إعادة التوجيه" (Forward)؛ فإن إيقاف سلسلة الشائعة عندك يحمي مجتمعك.'
  }
];

export const VERIFICATION_TIPS_EN = [
  {
    step: '1',
    title: 'Ask "What was said immediately before and after?"',
    description: 'If a clip abruptly begins on a shocking phrase or cuts off at peak tension, it was sliced specifically to bury the qualifying clause.'
  },
  {
    step: '2',
    title: 'Verify the true historical timestamp',
    description: 'Many decontextualized clips are 100% authentic footage, but were recorded 5 years ago under obsolete emergency conditions.'
  },
  {
    step: '3',
    title: 'Beware of titles dictating your emotional reaction',
    description: 'Headlines like "Shocking admission!", "Disaster uncovered!" are cognitive traps designed to bypass your rational critical thinking.'
  },
  {
    step: '4',
    title: 'Search the keyword in the National Press Agency (SPA)',
    description: 'Any genuine regulatory, legal, or ministerial decision is always documented in full wording on sovereign portals.'
  },
  {
    step: '5',
    title: 'Never let your fingers outrun your intellect',
    description: 'Pause for 30 seconds before tapping "Forward". Halting the contagion chain at your screen protects your community.'
  }
];

export const FAQ_DATA_AR: FaqItem[] = [
  {
    question: 'ما هو الفرق بين كشف "الأخبار الكاذبة" وبين كشف "السياق المجتزأ"؟',
    answer: 'أدوات كشف الكذب التقليدية تبحث عما إذا كان المقطع مفبركاً أو النص كاذباً تماماً. لكن الخطر الأكبر اليوم يأتي من مقاطع حقيقية ١٠٠٪ لكنها اقتُطعت لتغيير معناها بالكامل! «سياق» لا يكتفي بفحص الصحة الزائفة، بل يربط المقطع بأصله ليوضح ماذا قيل قبل الاقتطاع وبعده.'
  },
  {
    question: 'كيف يخدم مشروع «سياق» مفهوم الوسطية والأمن الفكري؟',
    answer: 'التطرف والانحياز الفكري لا ينموان إلا على المعلومات المشوهة والمبتورة. حين يرى الإنسان نصف الجملة يشعر بالغضب أو الخوف ويتخذ موقفاً حاداً. وعندما يرى الصورة كاملة بالسياق الأصلي يهدأ انفعاله ويدرك حقيقة الموقف، محققاً الوسطية والاتزان التلقائي.'
  },
  {
    question: 'هل يعتمد تحليل «سياق» على خوارزميات أجنبية؟',
    answer: 'يعتمد «سياق» على نماذج ذكاء اصطناعي متقدمة مخصصة للدلالة اللغوية العربية والسياق المحلي، تم تدريبها بضوابط صارمة لفهم اللهجات والتراكيب البلاغية العربية، والإحالة دائماً للأنظمة والمصادر الرسمية.'
  },
  {
    question: 'ماذا تعني الحالات الثلاث: مكتمل، ناقص، مضلل؟',
    answer: '• سياق مكتمل: المحتوى يعكس المصدر الأصلي بأمانة دون اقتطاع يخل بالمعنى.\n• سياق ناقص: هناك أجزاء حذفت تؤثر جزئياً على فهم التفاصيل أو الاستثناءات.\n• سياق مُضلِّل: المقطع صحيح بذاته لكن تركيبه أو اقتطاعه جعل دلالته معاكسة لنية المتحدث الأصلية.'
  },
  {
    question: 'هل التقرير الصادر من «سياق» يُعد وثيقة قانونية ملزمة؟',
    answer: 'تقارير «سياق» هي أدوات إرشادية وتوعوية مدعومة بالذكاء الاصطناعي لمساعدة المستخدمين على التثبت والتدبر، ونحث دائماً على الرجوع للجهات الحكومية المعتمدة والتواصل مع متحدثيها الرسميين.'
  }
];

export const FAQ_DATA_EN: FaqItem[] = [
  {
    question: 'What is the distinction between debunking "fake news" and revealing "decontextualized content"?',
    answer: 'Traditional fact-checkers look for fabricated footage or forged quotes. However, today’s most dangerous disinformation uses 100% authentic footage clipped strategically to alter its meaning completely. Siyaq does not just verify truth vs falsehood; it connects the clip to its source to show what was spoken before and after.'
  },
  {
    question: 'How does Siyaq foster moderation and intellectual security?',
    answer: 'Radical bias and extreme polarization thrive on truncated half-truths. When an individual only hears half a sentence, outrage or panic takes over. When they see the unclipped context, rational balance and natural moderation are restored.'
  },
  {
    question: 'Does Siyaq rely on localized linguistic semantics?',
    answer: 'Siyaq uses state-of-the-art multimodal reasoning models tuned to Arabic rhetoric, regional linguistic idioms, and sovereign regulatory frameworks, always anchoring conclusions to verified primary documentation.'
  },
  {
    question: 'What do the three context rulings mean?',
    answer: '• Complete Context: Faithfully represents the source without manipulative omissions.\n• Incomplete Context: Crucial qualifying conditions or exemptions were left out.\n• Misleading Context: The snippet is technically genuine, but selective editing inverts the speaker’s true intent.'
  },
  {
    question: 'Are Siyaq reports binding legal verdicts?',
    answer: 'Siyaq reports are educational and advisory tools designed to empower digital verification and critical discernment. They do not replace consulting official government authorities or their authorized spokespersons.'
  }
];

export const COUNTER_STATS = {
  totalAnalyzed: 28450,
  decontextualizedDetected: 14210,
  trustedSourcesCount: 42,
  intellectualSecurityScore: '99.4%'
};

// HELPER SELECTORS BASED ON LANGUAGE
export function getNewsItems(lang: 'ar' | 'en'): NewsCardItem[] {
  return lang === 'ar' ? INITIAL_NEWS_ITEMS_AR : INITIAL_NEWS_ITEMS_EN;
}

export function getTrustedSources(lang: 'ar' | 'en'): TrustedSource[] {
  return lang === 'ar' ? TRUSTED_SOURCES_DATA_AR : TRUSTED_SOURCES_DATA_EN;
}

export function getExampleCases(lang: 'ar' | 'en'): ExampleCase[] {
  return lang === 'ar' ? EXAMPLE_CASES_DATA_AR : EXAMPLE_CASES_DATA_EN;
}

export function getPresetTestCases(lang: 'ar' | 'en'): PresetTestCase[] {
  return lang === 'ar' ? PRESET_TEST_CASES_AR : PRESET_TEST_CASES_EN;
}

export function getVerificationTips(lang: 'ar' | 'en') {
  return lang === 'ar' ? VERIFICATION_TIPS_AR : VERIFICATION_TIPS_EN;
}

export function getFaqData(lang: 'ar' | 'en'): FaqItem[] {
  return lang === 'ar' ? FAQ_DATA_AR : FAQ_DATA_EN;
}
