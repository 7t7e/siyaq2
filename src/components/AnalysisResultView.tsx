import React, { useState } from 'react';
import { 
  CheckCircle2, AlertTriangle, AlertOctagon, AlertCircle, ExternalLink, Share2, 
  Copy, Download, Flag, Volume2, ShieldCheck, Check, Info
} from 'lucide-react';
import { AnalysisResult, ContextStatus } from '../types';
import confetti from 'canvas-confetti';
import { t, Language } from '../i18n/translations';

interface AnalysisResultViewProps {
  result: AnalysisResult;
  onOpenShareModal: (result: AnalysisResult) => void;
  onOpenReportModal: (result: AnalysisResult) => void;
  onExportCard: (result: AnalysisResult) => void;
  lang: Language;
}

export const AnalysisResultView: React.FC<AnalysisResultViewProps> = ({
  result,
  onOpenShareModal,
  onOpenReportModal,
  onExportCard,
  lang,
}) => {
  const strings = t[lang];
  const [copied, setCopied] = useState(false);
  const [activeSegmentIndex, setActiveSegmentIndex] = useState<number>(1);

  // Status visual attributes
  const getStatusBadgeConfig = (status: ContextStatus) => {
    switch (status) {
      case 'complete':
        return {
          bg: 'bg-[#2E8B6A]/10 text-[#2E8B6A] border-[#2E8B6A]/30',
          badgeColor: 'bg-[#2E8B6A]',
          icon: <CheckCircle2 className="w-6 h-6 text-[#2E8B6A]" />,
          title: strings.statusComplete,
          summary: strings.statusCompleteSummary,
        };
      case 'incomplete':
        return {
          bg: 'bg-[#E0A030]/10 text-[#B87A14] dark:text-[#E0A030] border-[#E0A030]/30',
          badgeColor: 'bg-[#E0A030]',
          icon: <AlertTriangle className="w-6 h-6 text-[#E0A030]" />,
          title: strings.statusIncomplete,
          summary: strings.statusIncompleteSummary,
        };
      case 'misleading':
      default:
        return {
          bg: 'bg-[#C94A3F]/10 text-[#C94A3F] border-[#C94A3F]/30',
          badgeColor: 'bg-[#C94A3F]',
          icon: <AlertOctagon className="w-6 h-6 text-[#C94A3F]" />,
          title: strings.statusMisleading,
          summary: strings.statusMisleadingSummary,
        };
    }
  };

  const statusConfig = getStatusBadgeConfig(result.status);

  // Trigger celebration confetti if complete
  React.useEffect(() => {
    if (result.status === 'complete') {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#2E8B6A', '#2F6FB5', '#DCE9F7'],
      });
    }
  }, [result.id, result.status]);

  const handleCopyReport = () => {
    const reportText = `[${strings.brandName} - ${strings.brandTagline}]
${strings.statusComplete}: ${result.statusLabel} (${strings.confidenceLabel} ${result.confidence}%)
${strings.approvedSource} ${result.originalSource.name} - ${result.originalSource.title}
${strings.circulatedHeading}: "${result.sharedSegment.quote}"
${strings.officialHeading}: "${result.originalContext.actualStatement}"
${strings.meaningShiftTitle} ${result.meaningDifference}
${strings.cardSourceLabel} ${result.originalSource.url || 'https://spa.gov.sa'}
${strings.brandMotto}`;

    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const segments = result.timeline?.segments || [
    {
      label: lang === 'en' ? 'Previous Context' : 'السياق السابق',
      startTime: '00:00',
      endTime: '00:15',
      text: result.originalContext.previousContext || (lang === 'en' ? 'Preamble and condition.' : 'مقدمة الحديث والتمهيد لموضوع النقاش.'),
      type: 'previous' as const,
    },
    {
      label: lang === 'en' ? 'Circulated Clip' : 'المقطع المتداول (المجتزأ)',
      startTime: '00:15',
      endTime: '00:30',
      text: result.sharedSegment.quote,
      type: 'shared' as const,
    },
    {
      label: lang === 'en' ? 'Subsequent Context' : 'السياق اللاحق',
      startTime: '00:30',
      endTime: '00:52',
      text: result.originalContext.nextContext || (lang === 'en' ? 'Subsequent exemptions and clarification.' : 'الاستدراك والضوابط المكملة للجملة.'),
      type: 'next' as const,
    },
  ];

  return (
    <section id="analysis-result" className="py-8 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Status Banner Card */}
        <div className="bg-white dark:bg-[#182234] rounded-2xl border border-[#14284B]/10 dark:border-white/10 shadow-md p-6 sm:p-8 overflow-hidden relative">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
            {/* Status Badge + Icon */}
            <div className="flex items-center gap-4">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border shadow-xs" 
                style={{ 
                  backgroundColor: `${result.status === 'complete' ? '#2E8B6A15' : (result.status === 'incomplete' ? '#E0A03015' : '#C94A3F15')}`, 
                  borderColor: `${result.status === 'complete' ? '#2E8B6A40' : (result.status === 'incomplete' ? '#E0A03040' : '#C94A3F40')}` 
                }}
              >
                {statusConfig.icon}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-extrabold text-[#14284B] dark:text-[#F1F5F9]">
                    {result.statusLabel || statusConfig.title}
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[#1B2433] dark:text-[#CBD5E1]">
                    {strings.confidenceLabel} {result.confidence}%
                  </span>
                </div>
                <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mt-1">
                  {strings.verificationDate} {result.timestamp} · {strings.intellectualSecurityStandard}
                </p>
              </div>
            </div>

            {/* Source Reference Quick Tag */}
            <div className={lang === 'ar' ? 'text-left sm:text-right' : 'text-right sm:text-left'}>
              <span className="text-[11px] font-medium text-[#6B7280] dark:text-[#94A3B8] block">
                {strings.approvedSource}
              </span>
              <a
                href={result.originalSource.url || 'https://spa.gov.sa'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#2F6FB5] dark:text-[#4C8DD9] hover:underline inline-flex items-center gap-1 mt-0.5"
              >
                <span>{result.originalSource.name}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Ruling Executive Summary */}
          <div className="py-4">
            <p className="text-sm sm:text-base font-medium text-[#1B2433] dark:text-[#F1F5F9] leading-relaxed">
              {statusConfig.summary}
            </p>
          </div>

          {/* INTERACTIVE TIMELINE (Previous, Shared, Next) */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Volume2 className="w-4 h-4 text-[#2F6FB5]" />
                <span className="text-xs font-bold text-[#14284B] dark:text-[#F1F5F9]">
                  {strings.timelineLabel}
                </span>
              </div>
              <span className="text-[11px] text-[#6B7280] dark:text-[#94A3B8]">
                {strings.totalDurationLabel} {result.timeline?.totalDuration || '00:52'}
              </span>
            </div>

            {/* Timeline Visual Bars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {segments.map((seg, idx) => {
                const isShared = seg.type === 'shared';
                const isSelected = activeSegmentIndex === idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveSegmentIndex(idx)}
                    className={`${lang === 'ar' ? 'text-right' : 'text-left'} p-4 rounded-xl transition-all border text-xs cursor-pointer relative ${
                      isShared
                        ? 'bg-[#2F6FB5] text-white border-[#14284B]/20 shadow-md ring-2 ring-[#2F6FB5]/40'
                        : (isSelected
                            ? 'bg-slate-200 dark:bg-slate-700 border-slate-400 text-[#1B2433] dark:text-white'
                            : 'bg-slate-100/80 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-[#6B7280] dark:text-[#94A3B8] hover:bg-slate-200/60')
                    }`}
                  >
                    {isShared && (
                      <span className={`absolute -top-2.5 ${lang === 'ar' ? 'right-3' : 'left-3'} bg-[#14284B] text-[#DCE9F7] text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/20`}>
                        {strings.circulatedBadge}
                      </span>
                    )}
                    <div className="flex items-center justify-between mb-1.5 font-bold">
                      <span>{seg.label}</span>
                      <span className="font-mono text-[11px] opacity-90">{seg.startTime} - {seg.endTime}</span>
                    </div>
                    <p className="line-clamp-2 text-[11px] leading-relaxed opacity-95">
                      "{seg.text}"
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Detailed Selected Segment Inspection Box */}
            <div className="p-4 rounded-xl bg-[#F7F4EE] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
              <span className="font-bold text-[#14284B] dark:text-[#CBD5E1] block">
                {strings.activeSegmentTranscript} ({segments[activeSegmentIndex]?.label}):
              </span>
              <p className="text-sm font-medium text-[#1B2433] dark:text-[#F1F5F9] leading-relaxed">
                "{segments[activeSegmentIndex]?.text}"
              </p>
              {activeSegmentIndex === 1 && result.sharedSegment.contextMissing && (
                <div className="text-[11px] text-[#C94A3F] font-semibold pt-1 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{strings.missingOmission} {result.sharedSegment.contextMissing}</span>
                </div>
              )}
            </div>
          </div>

          {/* SIDE-BY-SIDE COMPARISON: Circulated vs Original Truth */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* What was circulated */}
            <div className="p-5 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-rose-800 dark:text-rose-300">
                <span>{strings.circulatedHeading}</span>
                <span className="text-[10px] bg-rose-100 dark:bg-rose-900/60 px-2 py-0.5 rounded">{strings.clippedTag}</span>
              </div>
              <p className="text-sm font-medium text-rose-950 dark:text-rose-100 leading-relaxed">
                "{result.sharedSegment.quote}"
              </p>
              <p className="text-xs text-rose-800/80 dark:text-rose-300/80 pt-1">
                <strong>{strings.falseImpression}</strong> {result.sharedSegment.circulatedClaim}
              </p>
            </div>

            {/* What was actually said */}
            <div className="p-5 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/40 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-emerald-800 dark:text-emerald-300">
                <span>{strings.officialHeading}</span>
                <span className="text-[10px] bg-emerald-100 dark:bg-emerald-900/60 px-2 py-0.5 rounded">{strings.fullContextTag}</span>
              </div>
              <p className="text-sm font-medium text-emerald-950 dark:text-emerald-100 leading-relaxed">
                "{result.originalContext.actualStatement}"
              </p>
              <p className="text-xs text-emerald-800/80 dark:text-emerald-300/80 pt-1">
                <strong>{strings.actualMeaning}</strong> {result.originalContext.fullMeaning}
              </p>
            </div>

          </div>

          {/* Semantic Meaning Shift Explanation */}
          <div className="mt-6 p-5 rounded-xl bg-[#DCE9F7]/40 dark:bg-slate-800/60 border border-[#2F6FB5]/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-[#14284B] dark:text-[#93C5FD]">
              <Info className="w-4 h-4 text-[#2F6FB5]" />
              <span>{strings.meaningShiftTitle}</span>
            </div>
            <p className="text-sm text-[#1B2433] dark:text-[#F1F5F9] leading-relaxed">
              {result.meaningDifference}
            </p>
          </div>

          {/* Intellectual Security & Moderation Impact Section */}
          <div className="mt-4 p-5 rounded-xl bg-white dark:bg-[#182234] border border-[#14284B]/10 dark:border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#14284B] dark:text-[#CBD5E1]">
              <ShieldCheck className="w-4 h-4 text-[#2E8B6A]" />
              <span>{strings.impactTitle}</span>
            </div>
            <p className="text-xs sm:text-sm text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
              {result.intellectualImpact}
            </p>
            
            {/* Checklist of key points */}
            {result.keyPoints && result.keyPoints.length > 0 && (
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                <span className="text-[11px] font-bold text-[#14284B] dark:text-[#CBD5E1] block">{strings.keyFactsTitle}</span>
                {result.keyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#1B2433] dark:text-[#CBD5E1]">
                    <Check className="w-3.5 h-3.5 text-[#2E8B6A] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Toolbar */}
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              
              {/* Share Report */}
              <button
                type="button"
                onClick={() => onOpenShareModal(result)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#2F6FB5] hover:bg-[#1E3A6E] text-white transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{strings.btnShareReport}</span>
              </button>

              {/* Copy Report */}
              <button
                type="button"
                onClick={handleCopyReport}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[#1B2433] dark:text-[#F1F5F9] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
                <span>{copied ? strings.btnCopied : strings.btnCopyReport}</span>
              </button>

              {/* Save As Image Card */}
              <button
                type="button"
                onClick={() => onExportCard(result)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-[#1B2433] dark:text-[#F1F5F9] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-slate-500" />
                <span>{strings.btnSaveCard}</span>
              </button>
            </div>

            {/* Report Correction Button */}
            <button
              type="button"
              onClick={() => onOpenReportModal(result)}
              className="text-xs text-[#6B7280] dark:text-[#94A3B8] hover:text-[#C94A3F] transition-colors flex items-center gap-1.5 cursor-pointer py-1"
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{strings.btnReportError}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
