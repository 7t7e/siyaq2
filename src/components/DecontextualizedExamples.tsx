import React from 'react';
import { ShieldAlert, AlertTriangle, Scale } from 'lucide-react';
import { ExampleCase } from '../types';
import { t, Language } from '../i18n/translations';

interface DecontextualizedExamplesProps {
  examples: ExampleCase[];
  lang: Language;
}

export const DecontextualizedExamples: React.FC<DecontextualizedExamplesProps> = ({
  examples,
  lang,
}) => {
  const strings = t[lang];

  return (
    <section id="examples" className="py-14 scroll-mt-24 bg-[#DCE9F7]/25 dark:bg-slate-900/40 border-y border-[#14284B]/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 text-[#14284B] dark:text-[#93C5FD] text-xs font-semibold mb-3 border border-[#2F6FB5]/20 shadow-2xs">
            <Scale className="w-3.5 h-3.5 text-[#2F6FB5]" />
            <span>{strings.examplesBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14284B] dark:text-[#F1F5F9]">
            {strings.examplesHeading}
          </h2>
          <p className="text-sm text-[#6B7280] dark:text-[#94A3B8] mt-2">
            {strings.examplesSub}
          </p>
        </div>

        {/* Examples Grid: Before & After comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {examples.map((ex) => (
            <div
              key={ex.id}
              className="bg-white dark:bg-[#182234] rounded-2xl border border-[#14284B]/10 dark:border-white/10 p-6 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header Tag + Status */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#6B7280] dark:text-[#94A3B8]">
                    <span>{ex.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#2F6FB5] font-semibold">{ex.tag}</span>
                  </div>

                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                    ex.status === 'misleading'
                      ? 'text-[#C94A3F] bg-[#C94A3F]/10 border-[#C94A3F]/20'
                      : 'text-[#B87A14] dark:text-[#E0A030] bg-[#E0A030]/10 border-[#E0A030]/20'
                  }`}>
                    {ex.status === 'misleading' ? <ShieldAlert className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
                    {ex.status === 'misleading' ? strings.statusMisleading : strings.statusIncomplete}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9] mb-4">
                  {ex.title}
                </h3>

                {/* BEFORE vs AFTER Split */}
                <div className="space-y-3 mb-4">
                  {/* Circulated (Before) */}
                  <div className="p-3.5 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-xs">
                    <span className="font-bold text-rose-800 dark:text-rose-300 block mb-1">
                      {strings.exampleBefore}
                    </span>
                    <p className="text-[#1B2433] dark:text-[#CBD5E1] leading-relaxed font-medium">
                      "{ex.circulatedText}"
                    </p>
                  </div>

                  {/* Original Full Statement (After) */}
                  <div className="p-3.5 rounded-xl bg-[#DCE9F7]/40 dark:bg-[#1C2B42]/40 border border-[#2F6FB5]/20 text-xs">
                    <span className="font-bold text-[#2F6FB5] dark:text-[#4C8DD9] block mb-1">
                      {strings.exampleAfter}
                    </span>
                    <p className="text-[#1B2433] dark:text-[#F1F5F9] leading-relaxed">
                      "{ex.originalText}"
                    </p>
                  </div>
                </div>

                {/* The Shift in Meaning */}
                <div className="p-3 rounded-xl bg-[#F7F4EE] dark:bg-slate-900 text-xs text-[#1B2433] dark:text-[#CBD5E1] space-y-1">
                  <span className="font-bold text-[#14284B] dark:text-[#F1F5F9] block">
                    {strings.exampleImpact}
                  </span>
                  <p className="leading-relaxed">
                    {ex.shiftExplanation}
                  </p>
                </div>
              </div>

              {/* Source Footnote */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 text-[11px] text-[#6B7280] dark:text-[#94A3B8] flex items-center justify-between">
                <span>{strings.exampleSource} {ex.source}</span>
                <span className="text-[#2F6FB5] font-semibold">{strings.brandMotto}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
