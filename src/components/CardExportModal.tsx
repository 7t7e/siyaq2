import React, { useRef } from 'react';
import { Download, Printer } from 'lucide-react';
import { AnalysisResult } from '../types';
import { t, Language } from '../i18n/translations';

interface CardExportModalProps {
  result: AnalysisResult;
  onClose: () => void;
  lang: Language;
}

export const CardExportModal: React.FC<CardExportModalProps> = ({ result, onClose, lang }) => {
  const strings = t[lang];
  const cardRef = useRef<HTMLDivElement>(null);

  const handlePrintOrDownload = () => {
    window.print();
  };

  const getStatusColor = () => {
    switch (result.status) {
      case 'complete': return '#2E8B6A';
      case 'incomplete': return '#E0A030';
      case 'misleading':
      default: return '#C94A3F';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white dark:bg-[#182234] rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 my-8">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Download className="w-5 h-5 text-[#2F6FB5]" />
            <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9]">
              {strings.cardModalTitle}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* The Printable / Exportable Certificate Card */}
        <div
          ref={cardRef}
          className="my-5 p-6 rounded-2xl border-2 border-[#14284B] bg-[#F7F4EE] text-[#1B2433] space-y-4 shadow-md relative overflow-hidden"
        >
          {/* Top Brand Header */}
          <div className="flex items-center justify-between border-b border-[#14284B]/20 pb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#14284B] flex items-center justify-center text-white font-bold text-xs">
                س
              </div>
              <div>
                <span className="text-base font-black text-[#14284B] block leading-none">
                  {strings.brandName}
                </span>
                <span className="text-[9px] text-[#6B7280] font-sans font-medium">
                  {strings.cardCertBadge}
                </span>
              </div>
            </div>

            <div
              className="px-3 py-1 rounded-full text-white text-xs font-bold"
              style={{ backgroundColor: getStatusColor() }}
            >
              {result.statusLabel}
            </div>
          </div>

          {/* Quotation & Context */}
          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-xl bg-white border border-slate-200">
              <span className="text-[10px] font-bold text-rose-700 block mb-0.5">
                {strings.cardCirculatedLabel}
              </span>
              <p className="font-semibold text-slate-800">
                "{result.sharedSegment.quote}"
              </p>
            </div>

            <div className="p-3 rounded-xl bg-[#DCE9F7]/50 border border-[#2F6FB5]/30">
              <span className="text-[10px] font-bold text-[#14284B] block mb-0.5">
                {strings.cardOriginalLabel}
              </span>
              <p className="font-medium text-slate-900 leading-relaxed">
                "{result.originalContext.actualStatement}"
              </p>
            </div>
          </div>

          {/* Difference & Source */}
          <div className="text-[11px] text-slate-700 space-y-1">
            <p>
              <strong>{strings.cardSummaryLabel}</strong> {result.meaningDifference}
            </p>
            <p className="text-[10px] text-slate-500 pt-1">
              <strong>{strings.cardSourceLabel}</strong> {result.originalSource.name} ({result.originalSource.title})
            </p>
          </div>

          {/* Bottom Card Footer */}
          <div className="pt-3 border-t border-[#14284B]/15 flex items-center justify-between text-[9px] text-slate-500">
            <span>{strings.brandMotto}</span>
            <span className="font-mono font-bold text-[#14284B]">SIYAQ.SA</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-[11px] text-[#6B7280] dark:text-[#94A3B8]">
            {strings.cardInstruction}
          </span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrintOrDownload}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-[#14284B] dark:bg-[#2F6FB5] hover:bg-[#1E3A6E] text-white flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{strings.cardPrintBtn}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
