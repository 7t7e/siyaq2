import React, { useState } from 'react';
import { Share2, Copy, Check, MessageSquare, Twitter, Send } from 'lucide-react';
import { AnalysisResult } from '../types';
import { t, Language } from '../i18n/translations';

interface ShareModalProps {
  result: AnalysisResult;
  onClose: () => void;
  lang: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({ result, onClose, lang }) => {
  const strings = t[lang];
  const [copied, setCopied] = useState(false);

  const shareUrl = window.location.href;
  const shareText = lang === 'en'
    ? `Verify the context of this content on the "Siyaq" Intellectual Security Platform:\nStatus: ${result.statusLabel}\nSource: ${result.originalSource.name}\n${strings.brandMotto}`
    : `تحقق من سياق هذا المحتوى عبر منصة «سياق» للأمن الفكري:\nالحكم: ${result.statusLabel}\nالمصدر: ${result.originalSource.name}\n${strings.brandMotto}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank', 'width=600,height=400');
  };

  const shareToWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`;
    window.open(url, '_blank');
  };

  const shareToTelegram = () => {
    const url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div className="bg-white dark:bg-[#182234] rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Share2 className="w-5 h-5 text-[#2F6FB5]" />
            <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9]">
              {strings.shareModalTitle}
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

        {/* Summary Snippet */}
        <div className="my-4 p-4 rounded-xl bg-[#F7F4EE] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="font-bold text-[#14284B] dark:text-[#F1F5F9]">{result.statusLabel}</span>
            <span className="text-[11px] text-[#2F6FB5] font-semibold">{result.originalSource.name}</span>
          </div>
          <p className="text-[#6B7280] dark:text-[#94A3B8] line-clamp-2">
            "{result.sharedSegment.quote}"
          </p>
        </div>

        {/* Social Platforms */}
        <div className="grid grid-cols-3 gap-3 my-4">
          <button
            type="button"
            onClick={shareToWhatsApp}
            className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-400 text-xs font-bold flex flex-col items-center gap-1.5 border border-emerald-200 dark:border-emerald-800 cursor-pointer"
          >
            <MessageSquare className="w-5 h-5" />
            <span>{strings.shareModalWhatsApp}</span>
          </button>

          <button
            type="button"
            onClick={shareToTwitter}
            className="p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-100 text-sky-700 dark:text-sky-400 text-xs font-bold flex flex-col items-center gap-1.5 border border-sky-200 dark:border-sky-800 cursor-pointer"
          >
            <Twitter className="w-5 h-5" />
            <span>{strings.shareModalX}</span>
          </button>

          <button
            type="button"
            onClick={shareToTelegram}
            className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 text-blue-700 dark:text-blue-400 text-xs font-bold flex flex-col items-center gap-1.5 border border-blue-200 dark:border-blue-800 cursor-pointer"
          >
            <Send className="w-5 h-5" />
            <span>{strings.shareModalTelegram}</span>
          </button>
        </div>

        {/* Copy Link input */}
        <div className="pt-2">
          <label className="block text-[11px] font-semibold text-[#6B7280] dark:text-[#94A3B8] mb-1.5">
            {strings.shareModalCopyDirect}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={shareUrl}
              className="flex-1 p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] font-mono text-left"
              dir="ltr"
            />
            <button
              type="button"
              onClick={handleCopy}
              className="px-4 py-2.5 text-xs font-bold rounded-xl bg-[#14284B] hover:bg-[#1E3A6E] dark:bg-[#2F6FB5] text-white flex items-center gap-1.5 shrink-0 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? strings.shareModalCopiedBtn : strings.shareModalCopyBtn}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
