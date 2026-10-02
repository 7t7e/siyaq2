import React, { useState } from 'react';
import { 
  Building2, ShieldCheck, Search, ExternalLink, PlusCircle, 
  Newspaper, BarChart3, HeartPulse, Cloud, Award, Check
} from 'lucide-react';
import { TrustedSource } from '../types';
import { t, Language } from '../i18n/translations';

interface TrustedSourcesSectionProps {
  sources: TrustedSource[];
  onSuggestSource: (newSource: Partial<TrustedSource>) => void;
  lang: Language;
}

export const TrustedSourcesSection: React.FC<TrustedSourcesSectionProps> = ({
  sources,
  onSuggestSource,
  lang,
}) => {
  const strings = t[lang];
  const [activeTab, setActiveTab] = useState<'government' | 'independent'>('government');
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [newSourceName, setNewSourceName] = useState('');
  const [newSourceUrl, setNewSourceUrl] = useState('');
  const [newSourceCategory, setNewSourceCategory] = useState<'government' | 'independent'>('government');
  const [newSourceDesc, setNewSourceDesc] = useState('');
  const [submittedFeedback, setSubmittedFeedback] = useState(false);

  const filteredSources = sources.filter((s) => {
    if (s.category !== activeTab) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        s.arabicName.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const getSourceIcon = (iconType: TrustedSource['iconType']) => {
    switch (iconType) {
      case 'newspaper': return <Newspaper className="w-5 h-5 text-[#2F6FB5]" />;
      case 'bar-chart': return <BarChart3 className="w-5 h-5 text-[#2F6FB5]" />;
      case 'heart-pulse': return <HeartPulse className="w-5 h-5 text-[#2F6FB5]" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-[#2F6FB5]" />;
      case 'award': return <Award className="w-5 h-5 text-[#2F6FB5]" />;
      case 'shield': return <Building2 className="w-5 h-5 text-[#2F6FB5]" />;
      case 'check':
      default: return <ShieldCheck className="w-5 h-5 text-[#2E8B6A]" />;
    }
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSourceName.trim() || !newSourceUrl.trim()) return;

    onSuggestSource({
      arabicName: newSourceName.trim(),
      name: newSourceName.trim(),
      url: newSourceUrl.trim(),
      category: newSourceCategory,
      description: newSourceDesc.trim() || (lang === 'en' ? 'Community suggested source under official review.' : 'مصدر مقترح من مستخدمي المنصة قيد المراجعة الرسمية.'),
      iconType: newSourceCategory === 'government' ? 'shield' : 'check',
      badge: lang === 'en' ? 'Verified Suggestion' : 'مقترح معتمد',
    });

    setSubmittedFeedback(true);
    setTimeout(() => {
      setSubmittedFeedback(false);
      setShowModal(false);
      setNewSourceName('');
      setNewSourceUrl('');
      setNewSourceDesc('');
    }, 1800);
  };

  return (
    <section id="trusted-sources" className="py-14 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE9F7]/70 dark:bg-slate-800 text-[#14284B] dark:text-[#93C5FD] text-xs font-semibold mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-[#2F6FB5]" />
              <span>{strings.sourcesSectionBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14284B] dark:text-[#F1F5F9]">
              {strings.sourcesSectionHeading}
            </h2>
            <p className="text-sm text-[#6B7280] dark:text-[#94A3B8] mt-1 max-w-xl">
              {strings.sourcesSectionSub}
            </p>
          </div>

          {/* Action: Suggest Source Button & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={strings.sourcesSearchPlaceholder}
                className={`w-full ${lang === 'ar' ? 'pl-3 pr-9' : 'pr-3 pl-9'} py-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#2F6FB5]`}
              />
              <Search className={`w-4 h-4 text-slate-400 absolute ${lang === 'ar' ? 'right-3' : 'left-3'} top-2.5`} />
            </div>

            {/* Suggest button */}
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#14284B] hover:bg-[#1E3A6E] dark:bg-[#2F6FB5] text-white transition-all flex items-center justify-center gap-1.5 shadow-2xs cursor-pointer shrink-0"
            >
              <PlusCircle className="w-3.5 h-3.5 text-[#DCE9F7]" />
              <span>{strings.btnSuggestSource}</span>
            </button>
          </div>
        </div>

        {/* Categorization Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3 mb-6 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('government')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'government'
                ? 'bg-[#14284B] text-white shadow-xs'
                : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B] hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>{strings.tabGovSources}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('independent')}
            className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
              activeTab === 'independent'
                ? 'bg-[#14284B] text-white shadow-xs'
                : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B] hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>{strings.tabIndependentSources}</span>
          </button>
        </div>

        {/* Source Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSources.map((source) => (
            <div
              key={source.id}
              className="bg-white dark:bg-[#182234] rounded-2xl border border-[#14284B]/10 dark:border-white/10 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header with Icon + Category badge */}
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#DCE9F7]/60 dark:bg-slate-800 flex items-center justify-center shrink-0 border border-[#2F6FB5]/20">
                    {getSourceIcon(source.iconType)}
                  </div>
                  <span className="text-[10px] font-semibold text-[#2F6FB5] dark:text-[#4C8DD9] bg-[#DCE9F7]/40 dark:bg-slate-800/80 px-2.5 py-0.5 rounded-full">
                    {source.badge}
                  </span>
                </div>

                {/* Names */}
                <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9] leading-snug">
                  {lang === 'en' ? source.name : source.arabicName}
                </h3>
                {lang === 'ar' && (
                  <p className="text-[11px] text-[#6B7280] dark:text-[#94A3B8] font-mono mt-0.5 mb-2.5">
                    {source.name}
                  </p>
                )}

                {/* Description */}
                <p className="text-xs text-[#1B2433]/80 dark:text-[#CBD5E1] leading-relaxed line-clamp-3 mt-2">
                  {source.description}
                </p>
              </div>

              {/* Link CTA */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#6B7280] dark:text-[#94A3B8]">
                  {source.url.replace('https://', '').replace('www.', '')}
                </span>

                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2F6FB5] dark:text-[#4C8DD9] hover:underline group-hover:translate-x-[-2px] transition-transform"
                >
                  <span>{strings.visitSource}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredSources.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-[#182234] rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-sm text-[#6B7280] dark:text-[#94A3B8]">
              {strings.emptySources}
            </p>
          </div>
        )}

        {/* Suggest Source Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
            <div className="bg-white dark:bg-[#182234] rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <PlusCircle className="w-5 h-5 text-[#2F6FB5]" />
                  <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9]">
                    {strings.modalSuggestTitle}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {submittedFeedback ? (
                <div className="py-8 text-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center mx-auto text-emerald-600">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-[#14284B] dark:text-[#F1F5F9]">
                    {strings.modalThankTitle}
                  </h4>
                  <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">
                    {strings.modalThankDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit} className="space-y-4 pt-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#14284B] dark:text-[#F1F5F9] mb-1">
                      {strings.modalSourceName}
                    </label>
                    <input
                      type="text"
                      required
                      value={newSourceName}
                      onChange={(e) => setNewSourceName(e.target.value)}
                      placeholder={lang === 'en' ? 'e.g. Ministry of Economy' : 'مثال: وزارة الاقتصاد والتخطيط'}
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#2F6FB5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#14284B] dark:text-[#F1F5F9] mb-1">
                      {strings.modalSourceUrl}
                    </label>
                    <input
                      type="url"
                      required
                      value={newSourceUrl}
                      onChange={(e) => setNewSourceUrl(e.target.value)}
                      placeholder="https://mep.gov.sa"
                      dir="ltr"
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#2F6FB5] text-left"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#14284B] dark:text-[#F1F5F9] mb-1">
                      {strings.modalSourceCat}
                    </label>
                    <select
                      value={newSourceCategory}
                      onChange={(e) => setNewSourceCategory(e.target.value as any)}
                      className="w-full p-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#2F6FB5]"
                    >
                      <option value="government">{strings.modalCatGov}</option>
                      <option value="independent">{strings.modalCatIndep}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#14284B] dark:text-[#F1F5F9] mb-1">
                      {strings.modalSourceDesc}
                    </label>
                    <textarea
                      rows={2}
                      value={newSourceDesc}
                      onChange={(e) => setNewSourceDesc(e.target.value)}
                      placeholder={lang === 'en' ? 'Brief scope description...' : 'توضيح مختصر لمجال المصدر ونوع البيانات الصادرة عنه...'}
                      className="w-full p-2 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#2F6FB5] resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl cursor-pointer"
                    >
                      {strings.modalBtnCancel}
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#2F6FB5] hover:bg-[#1E3A6E] rounded-xl shadow-xs cursor-pointer"
                    >
                      {strings.modalBtnSubmit}
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
