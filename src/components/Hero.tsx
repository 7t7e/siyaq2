import React from 'react';
import { ArrowDown, Eye, Compass, Scale, ShieldAlert } from 'lucide-react';
import { t, Language } from '../i18n/translations';

interface HeroProps {
  onStartAnalysis: () => void;
  onExploreExamples: () => void;
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({
  onStartAnalysis,
  onExploreExamples,
  lang,
}) => {
  const strings = t[lang];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20">
        <div className="absolute -top-24 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#14284B]/15 via-[#2F6FB5]/10 to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-10 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#DCE9F7]/40 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Vision & Motto Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DCE9F7]/70 dark:bg-[#1E293B] border border-[#2F6FB5]/20 text-[#14284B] dark:text-[#93C5FD] text-xs sm:text-sm font-medium">
            <Compass className="w-4 h-4 text-[#2F6FB5]" />
            <span>{strings.heroPill}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#14284B] dark:text-[#F1F5F9] leading-[1.25]">
            {strings.heroTitlePrefix}
            <span className="text-[#2F6FB5] underline decoration-[#DCE9F7] decoration-wavy underline-offset-8">
              {strings.heroTitleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#1B2433]/85 dark:text-[#94A3B8] max-w-3xl mx-auto leading-relaxed font-normal">
            {strings.heroDesc}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onStartAnalysis}
              className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-[#14284B] hover:bg-[#1E3A6E] dark:bg-[#2F6FB5] dark:hover:bg-[#1E3A6E] rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>{strings.heroCtaAnalyze}</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>

            <button
              onClick={onExploreExamples}
              className="w-full sm:w-auto px-6 py-3.5 text-base font-medium text-[#14284B] dark:text-[#F1F5F9] bg-white dark:bg-[#182234] border border-[#14284B]/15 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#2F6FB5]" />
              <span>{strings.heroCtaExamples}</span>
            </button>
          </div>
        </div>

        {/* Visual Conceptual Demonstration: "Expanding the Picture" */}
        <div className="mt-14 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-[#182234] rounded-2xl border border-[#14284B]/10 dark:border-white/10 p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <span className="w-3 h-3 rounded-full bg-[#2F6FB5] animate-pulse" />
                <span className="text-sm font-bold text-[#14284B] dark:text-[#F1F5F9]">
                  {strings.heroDemoTitle}
                </span>
              </div>
              <span className="text-xs text-[#6B7280] dark:text-[#94A3B8]">
                {strings.heroDemoSubtitle}
              </span>
            </div>

            {/* Visual Timeline Bar */}
            <div className="pt-6 space-y-4">
              <div className="grid grid-cols-12 gap-2 text-center text-xs font-medium">
                {/* Pre-context (Muted) */}
                <div className="col-span-3 sm:col-span-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-[#6B7280] dark:text-[#94A3B8] transition-colors">
                  <span className="block font-bold text-[11px] mb-1 font-mono">{strings.heroDemoPreTitle}</span>
                  <span className="text-[12px] leading-tight block">{strings.heroDemoPreText}</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 inline-block">{strings.heroDemoPreBadge}</span>
                </div>

                {/* Circulated clip (Highlighted in Clear Blue #2F6FB5) */}
                <div className="col-span-6 sm:col-span-6 p-3.5 rounded-xl bg-[#2F6FB5] text-white shadow-md border-2 border-[#14284B]/20 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#14284B] text-[#DCE9F7] text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                    {strings.heroDemoClipBadge}
                  </div>
                  <span className="block font-bold text-[11px] mb-1 text-[#DCE9F7] font-mono">{strings.heroDemoClipTitle}</span>
                  <span className="text-[12px] leading-snug font-semibold block">
                    {strings.heroDemoClipText}
                  </span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded mt-1.5 inline-block">
                    {strings.heroDemoClipSub}
                  </span>
                </div>

                {/* Post-context (Muted) */}
                <div className="col-span-3 sm:col-span-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-[#6B7280] dark:text-[#94A3B8] transition-colors">
                  <span className="block font-bold text-[11px] mb-1 font-mono">{strings.heroDemoPostTitle}</span>
                  <span className="text-[12px] leading-tight block">{strings.heroDemoPostText}</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold mt-1 inline-block">{strings.heroDemoPostBadge}</span>
                </div>
              </div>

              {/* Bottom Insight explanation */}
              <div className="flex items-center justify-between flex-wrap gap-3 pt-3 text-xs text-[#1B2433]/80 dark:text-[#CBD5E1] bg-[#F7F4EE] dark:bg-slate-900/60 px-4 py-3 rounded-xl">
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4 text-[#2F6FB5] shrink-0" />
                  <span>
                    <strong>{strings.heroDemoResultTitle}</strong> {strings.heroDemoResultText}
                  </span>
                </div>
                <span className="text-[#C94A3F] font-bold shrink-0 flex items-center gap-1">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  {strings.heroDemoVerdict}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition Tickers */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
          <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/40 border border-[#14284B]/5 dark:border-white/5">
            <span className="text-2xl font-bold text-[#14284B] dark:text-[#F1F5F9]">{strings.stat1Number}</span>
            <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mt-1">{strings.stat1Label}</p>
          </div>
          <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/40 border border-[#14284B]/5 dark:border-white/5">
            <span className="text-2xl font-bold text-[#2F6FB5]">{strings.stat2Number}</span>
            <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mt-1">{strings.stat2Label}</p>
          </div>
          <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/40 border border-[#14284B]/5 dark:border-white/5">
            <span className="text-2xl font-bold text-[#2E8B6A]">{strings.stat3Number}</span>
            <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mt-1">{strings.stat3Label}</p>
          </div>
          <div className="p-4 rounded-xl bg-white/70 dark:bg-slate-900/40 border border-[#14284B]/5 dark:border-white/5">
            <span className="text-2xl font-bold text-[#14284B] dark:text-[#F1F5F9]">{strings.stat4Number}</span>
            <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mt-1">{strings.stat4Label}</p>
          </div>
        </div>

      </div>
    </section>
  );
};
