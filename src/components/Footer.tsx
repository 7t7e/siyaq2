import React from 'react';
import { ExternalLink, ArrowUp } from 'lucide-react';
import { t, Language } from '../i18n/translations';

interface FooterProps {
  onScrollToTop: () => void;
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, lang }) => {
  const strings = t[lang];

  return (
    <footer className="bg-[#14284B] text-white pt-14 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#2F6FB5] flex items-center justify-center text-white font-bold text-base shadow-sm">
                س
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {strings.brandName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed font-normal">
              {strings.footerDesc}
            </p>

            <div className="pt-1">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-[#DCE9F7]">
                {strings.brandMotto}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#DCE9F7] uppercase tracking-wider">
              {strings.footerSectionsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#analyzer" className="hover:text-white transition-colors">
                  {strings.navAnalyzer}
                </a>
              </li>
              <li>
                <a href="#latest-news" className="hover:text-white transition-colors">
                  {strings.navLatestNews}
                </a>
              </li>
              <li>
                <a href="#trusted-sources" className="hover:text-white transition-colors">
                  {strings.navTrustedSources}
                </a>
              </li>
              <li>
                <a href="#examples" className="hover:text-white transition-colors">
                  {strings.navExamples}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  {strings.navHowItWorks}
                </a>
              </li>
            </ul>
          </div>

          {/* Official Verification Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-[#DCE9F7] uppercase tracking-wider">
              {strings.footerRefsTitle}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="https://www.spa.gov.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>{lang === 'en' ? 'Saudi Press Agency (SPA)' : 'وكالة الأنباء السعودية (واس)'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.stats.gov.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>{lang === 'en' ? 'General Authority for Statistics' : 'الهيئة العامة للإحصاء'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.moh.gov.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>{lang === 'en' ? 'Ministry of Health' : 'وزارة الصحة'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.ncm.gov.sa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>{lang === 'en' ? 'National Center for Meteorology' : 'المركز الوطني للأرصاد'}</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="py-6 border-b border-white/10">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300 leading-relaxed space-y-1">
            <span className="font-bold text-white block">{strings.footerDisclaimerTitle}</span>
            <p>{strings.footerDisclaimerText}</p>
          </div>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>{strings.footerCopyright}</span>
          </div>

          <button
            type="button"
            onClick={onScrollToTop}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            title={strings.footerBackToTop}
          >
            <span>{strings.footerBackToTop}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
