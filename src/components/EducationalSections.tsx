import React, { useState } from 'react';
import { 
  Send, Search, Cpu, CheckCircle2, AlertOctagon, HelpCircle, 
  ChevronDown, ChevronUp, Check, ShieldCheck, HeartHandshake, 
  Scale, Compass, Award
} from 'lucide-react';
import { getVerificationTips, getFaqData, COUNTER_STATS } from '../data/mockData';
import { t, Language } from '../i18n/translations';

interface EducationalSectionsProps {
  lang: Language;
}

export const EducationalSections: React.FC<EducationalSectionsProps> = ({ lang }) => {
  const strings = t[lang];
  const tips = getVerificationTips(lang);
  const faqs = getFaqData(lang);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [checkedTips, setCheckedTips] = useState<Record<number, boolean>>({});

  const toggleTip = (index: number) => {
    setCheckedTips((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const steps = [
    {
      num: lang === 'en' ? '01' : '٠١',
      title: lang === 'en' ? 'Submit Content' : 'أرسل المحتوى',
      desc: lang === 'en' ? 'Paste the link, text, screenshot, or upload the audio/video clip in question.' : 'الصق الرابط، النص، لقطة الشاشة، أو ارفع المقطع الصوتي/المرئي المشكوك في دقته.',
      icon: <Send className="w-5 h-5 text-[#2F6FB5]" />,
    },
    {
      num: lang === 'en' ? '02' : '٠٢',
      title: lang === 'en' ? 'Uncover Origin' : 'نبحث عن الأصل',
      desc: lang === 'en' ? 'Our AI matches acoustic and textual fingerprints against authorized sovereign archives.' : 'يطابق محرك الذكاء الاصطناعي البصمات الصوتية والنصية مع الأرشيفات والبيانات المعتمدة.',
      icon: <Search className="w-5 h-5 text-[#2F6FB5]" />,
    },
    {
      num: lang === 'en' ? '03' : '٠٣',
      title: lang === 'en' ? 'Semantic Analysis' : 'نحلل المعنى',
      desc: lang === 'en' ? 'We dissect what was spoken before and after the cut, identifying dropped exemptions.' : 'نفكك ما قيل قبل الاقتطاع وما بعده، ونكشف الشروط والاستثناءات التي تم إسقاطها.',
      icon: <Cpu className="w-5 h-5 text-[#2F6FB5]" />,
    },
    {
      num: lang === 'en' ? '04' : '٠٤',
      title: lang === 'en' ? 'Full Context View' : 'نعرض السياق كاملًا',
      desc: lang === 'en' ? 'A standardized report with an interactive timeline and intellectual security impact.' : 'تقرير معياري بشريط زمني، ومقارنة جنبًا إلى جنب، وتحديد أثر الاقتطاع على الأمن الفكري.',
      icon: <CheckCircle2 className="w-5 h-5 text-[#2E8B6A]" />,
    },
  ];

  return (
    <div className="space-y-16 py-10">
      
      {/* 1. HOW IT WORKS */}
      <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE9F7]/70 dark:bg-slate-800 text-[#14284B] dark:text-[#93C5FD] text-xs font-semibold mb-2">
            <Compass className="w-3.5 h-3.5 text-[#2F6FB5]" />
            <span>{strings.howBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14284B] dark:text-[#F1F5F9]">
            {strings.howHeading}
          </h2>
          <p className="text-sm text-[#6B7280] dark:text-[#94A3B8] mt-1">
            {strings.howSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#182234] rounded-2xl border border-[#14284B]/10 dark:border-white/10 p-6 shadow-2xs hover:shadow-sm transition-all relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#DCE9F7]/60 dark:bg-slate-800 flex items-center justify-center border border-[#2F6FB5]/20">
                  {step.icon}
                </div>
                <span className="text-2xl font-black text-[#14284B]/20 dark:text-white/10 font-mono">
                  {step.num}
                </span>
              </div>
              <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9] mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. WHY DECONTEXTUALIZATION IS MORE DANGEROUS THAN A LIE */}
      <section className="bg-white dark:bg-[#182234] py-14 border-y border-[#14284B]/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 text-[#C94A3F] text-xs font-semibold border border-rose-200/60">
                <AlertOctagon className="w-3.5 h-3.5" />
                <span>{strings.whyBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14284B] dark:text-[#F1F5F9] leading-snug">
                {strings.whyHeading}
              </h2>
              <p className="text-sm text-[#1B2433]/80 dark:text-[#CBD5E1] leading-relaxed">
                {strings.whyP1}
              </p>
              <p className="text-sm text-[#1B2433]/80 dark:text-[#CBD5E1] leading-relaxed">
                {strings.whyP2}
              </p>

              <div className="pt-2">
                <blockquote className={`p-4 rounded-xl bg-[#F7F4EE] dark:bg-slate-900 ${lang === 'ar' ? 'border-r-4' : 'border-l-4'} border-[#2F6FB5] text-xs font-medium text-[#14284B] dark:text-[#F1F5F9] italic leading-relaxed`}>
                  {strings.whyQuote}
                </blockquote>
              </div>
            </div>

            {/* Statistics & Insight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#F7F4EE] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-3xl font-extrabold text-[#C94A3F] font-mono block">
                  {strings.whyStat1Num}
                </span>
                <h4 className="text-sm font-bold text-[#14284B] dark:text-[#F1F5F9]">
                  {strings.whyStat1Title}
                </h4>
                <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
                  {strings.whyStat1Desc}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F4EE] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-3xl font-extrabold text-[#2F6FB5] font-mono block">
                  {strings.whyStat2Num}
                </span>
                <h4 className="text-sm font-bold text-[#14284B] dark:text-[#F1F5F9]">
                  {strings.whyStat2Title}
                </h4>
                <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
                  {strings.whyStat2Desc}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#F7F4EE] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 sm:col-span-2">
                <div className="flex items-center gap-2 mb-1">
                  <HeartHandshake className="w-5 h-5 text-[#2E8B6A]" />
                  <h4 className="text-sm font-bold text-[#14284B] dark:text-[#F1F5F9]">
                    {strings.whyStat3Title}
                  </h4>
                </div>
                <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
                  {strings.whyStat3Desc}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. VERIFICATION TIPS CHECKLIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#182234] rounded-2xl border border-[#14284B]/10 dark:border-white/10 p-6 sm:p-8 shadow-xs">
          
          <div className="text-center mb-6">
            <span className="text-xs font-bold text-[#2F6FB5] uppercase tracking-wider block mb-1">
              {strings.tipsBadge}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#14284B] dark:text-[#F1F5F9]">
              {strings.tipsHeading}
            </h3>
            <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mt-1">
              {strings.tipsSub}
            </p>
          </div>

          <div className="space-y-3">
            {tips.map((tip, idx) => {
              const isChecked = !!checkedTips[idx];

              return (
                <div
                  key={idx}
                  onClick={() => toggleTip(idx)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                    isChecked
                      ? 'bg-emerald-50/60 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800'
                      : 'bg-slate-50/70 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-[#2F6FB5]'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                    isChecked
                      ? 'bg-[#2E8B6A] border-[#2E8B6A] text-white'
                      : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                  }`}>
                    {isChecked && <Check className="w-3.5 h-3.5" />}
                  </div>

                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-xs text-[#14284B] dark:text-[#F1F5F9]">
                        {tip.step}. {tip.title}
                      </span>
                    </div>
                    <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. ACHIEVEMENTS & COUNTER BANNER */}
      <section className="bg-[#14284B] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#DCE9F7] font-mono">
                {lang === 'ar' ? COUNTER_STATS.totalAnalyzed.toLocaleString('ar-SA') : COUNTER_STATS.totalAnalyzed.toLocaleString('en-US')}
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {lang === 'en' ? 'Analyzed Media Items' : 'محتوى ومقطع تم تحليله'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#E0A030] font-mono">
                {lang === 'ar' ? COUNTER_STATS.decontextualizedDetected.toLocaleString('ar-SA') : COUNTER_STATS.decontextualizedDetected.toLocaleString('en-US')}
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {lang === 'en' ? 'Omissions Detected' : 'اجتزاء واقتطاع تم كشفه'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#DCE9F7] font-mono">
                {COUNTER_STATS.trustedSourcesCount}
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {lang === 'en' ? 'Indexed Sovereign Bodies' : 'جهة وهيئة رسمية مفهرسة'}
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-black text-[#2E8B6A] font-mono">
                {COUNTER_STATS.intellectualSecurityScore}
              </span>
              <p className="text-xs text-slate-300 font-medium">
                {lang === 'en' ? 'Source Alignment Index' : 'دقة مطابقة السياق الأصلي'}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MODERATION & INTELLECTUAL SECURITY PILLARS */}
      <section id="moderation-mission" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE9F7]/70 dark:bg-slate-800 text-[#14284B] dark:text-[#93C5FD] text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2F6FB5]" />
            <span>{strings.pillarsBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14284B] dark:text-[#F1F5F9]">
            {strings.pillarsHeading}
          </h2>
          <p className="text-sm text-[#6B7280] dark:text-[#94A3B8] mt-1">
            {strings.pillarsSub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-[#182234] border border-[#14284B]/10 dark:border-white/10 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#2F6FB5]/10 flex items-center justify-center text-[#2F6FB5]">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9]">
              {strings.pillar1Title}
            </h3>
            <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
              {strings.pillar1Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#182234] border border-[#14284B]/10 dark:border-white/10 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#2E8B6A]/10 flex items-center justify-center text-[#2E8B6A]">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9]">
              {strings.pillar2Title}
            </h3>
            <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
              {strings.pillar2Desc}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-[#182234] border border-[#14284B]/10 dark:border-white/10 space-y-3 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-[#E0A030]/10 flex items-center justify-center text-[#E0A030]">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9]">
              {strings.pillar3Title}
            </h3>
            <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
              {strings.pillar3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS (Accordion) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE9F7]/70 dark:bg-slate-800 text-[#14284B] dark:text-[#93C5FD] text-xs font-semibold mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#2F6FB5]" />
            <span>{strings.faqBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14284B] dark:text-[#F1F5F9]">
            {strings.faqHeading}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;

            return (
              <div
                key={index}
                className="bg-white dark:bg-[#182234] rounded-2xl border border-[#14284B]/10 dark:border-white/10 overflow-hidden shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className={`w-full ${lang === 'ar' ? 'text-right' : 'text-left'} p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#14284B] dark:text-[#F1F5F9] cursor-pointer`}
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#2F6FB5] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed border-t border-slate-100 dark:border-slate-800 whitespace-pre-line animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
