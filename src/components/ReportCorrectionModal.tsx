import React, { useState } from 'react';
import { Flag, Check } from 'lucide-react';
import { AnalysisResult } from '../types';
import { t, Language } from '../i18n/translations';

interface ReportCorrectionModalProps {
  result: AnalysisResult;
  onClose: () => void;
  lang: Language;
}

export const ReportCorrectionModal: React.FC<ReportCorrectionModalProps> = ({ result, onClose, lang }) => {
  const strings = t[lang];
  const [reason, setReason] = useState('incomplete_source');
  const [details, setDetails] = useState('');
  const [sourceEvidenceUrl, setSourceEvidenceUrl] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#182234] rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Flag className="w-5 h-5 text-[#C94A3F]" />
            <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9]">
              {strings.reportModalTitle}
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

        {submitted ? (
          <div className="py-8 text-center space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mx-auto text-emerald-600">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="text-sm font-bold text-[#14284B] dark:text-[#F1F5F9]">
              {strings.reportModalThankTitle}
            </h4>
            <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">
              {strings.reportModalThankDesc}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-4">
            <div>
              <label className="block text-xs font-semibold text-[#14284B] dark:text-[#F1F5F9] mb-1">
                {strings.reportModalReasonLabel}
              </label>
              <select
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#2F6FB5]"
              >
                <option value="incomplete_source">{strings.reportModalOpt1}</option>
                <option value="wrong_ruling">{strings.reportModalOpt2}</option>
                <option value="newer_update">{strings.reportModalOpt3}</option>
                <option value="other">{strings.reportModalOpt4}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#14284B] dark:text-[#F1F5F9] mb-1">
                {strings.reportModalUrlLabel}
              </label>
              <input
                type="url"
                value={sourceEvidenceUrl}
                onChange={(e) => setSourceEvidenceUrl(e.target.value)}
                placeholder="https://spa.gov.sa/..."
                dir="ltr"
                className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#2F6FB5] text-left"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#14284B] dark:text-[#F1F5F9] mb-1">
                {strings.reportModalDetailsLabel}
              </label>
              <textarea
                rows={3}
                required
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder={lang === 'en' ? 'Describe the omitted context or evidence...' : 'اشرح بدقة ما تم إغفاله أو سبب الاعتراض على النتيجة...'}
                className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#2F6FB5] resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer"
              >
                {strings.modalBtnCancel}
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-xs font-semibold text-white bg-[#C94A3F] hover:bg-rose-700 rounded-xl shadow-xs cursor-pointer"
              >
                {strings.reportModalSubmitBtn}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
