import React, { useState } from 'react';
import { 
  Video, FileText, Image as ImageIcon, Mic, ExternalLink, 
  Calendar, ShieldAlert, AlertTriangle
} from 'lucide-react';
import { NewsCardItem } from '../types';
import { t, Language } from '../i18n/translations';

interface LatestDebunkedNewsProps {
  newsItems: NewsCardItem[];
  lang: Language;
}

export const LatestDebunkedNews: React.FC<LatestDebunkedNewsProps> = ({
  newsItems,
  lang,
}) => {
  const strings = t[lang];
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const filteredItems = newsItems.filter((item) => {
    if (selectedType !== 'all' && item.contentType !== selectedType) return false;
    if (selectedStatus !== 'all' && item.status !== selectedStatus) return false;
    return true;
  });

  const getContentTypeIcon = (type: NewsCardItem['contentType']) => {
    switch (type) {
      case 'video': return <Video className="w-3.5 h-3.5 text-[#2F6FB5]" />;
      case 'text': return <FileText className="w-3.5 h-3.5 text-[#2F6FB5]" />;
      case 'image': return <ImageIcon className="w-3.5 h-3.5 text-[#2F6FB5]" />;
      case 'audio': return <Mic className="w-3.5 h-3.5 text-[#2F6FB5]" />;
    }
  };

  const getStatusBadge = (status: NewsCardItem['status']) => {
    switch (status) {
      case 'misleading':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C94A3F] bg-[#C94A3F]/10 px-2.5 py-0.5 rounded-full border border-[#C94A3F]/20">
            <ShieldAlert className="w-3 h-3" />
            {strings.statusMisleading}
          </span>
        );
      case 'incomplete':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B87A14] dark:text-[#E0A030] bg-[#E0A030]/10 px-2.5 py-0.5 rounded-full border border-[#E0A030]/20">
            <AlertTriangle className="w-3 h-3" />
            {strings.statusIncomplete}
          </span>
        );
      case 'false':
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#C94A3F] bg-[#C94A3F]/10 px-2.5 py-0.5 rounded-full border border-[#C94A3F]/20">
            <ShieldAlert className="w-3 h-3" />
            {lang === 'en' ? 'Completely False' : 'مغلوط بالكامل'}
          </span>
        );
    }
  };

  return (
    <section id="latest-news" className="py-14 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE9F7]/70 dark:bg-slate-800 text-[#14284B] dark:text-[#93C5FD] text-xs font-semibold mb-2">
              <Calendar className="w-3.5 h-3.5 text-[#2F6FB5]" />
              <span>{strings.newsSectionBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14284B] dark:text-[#F1F5F9]">
              {strings.newsSectionHeading}
            </h2>
            <p className="text-sm text-[#6B7280] dark:text-[#94A3B8] mt-1 max-w-xl">
              {strings.newsSectionSub}
            </p>
          </div>

          {/* Interactive Filter Bars */}
          <div className="flex flex-wrap items-center gap-2">
            
            {/* Filter by Type */}
            <div className="flex items-center p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-medium">
              <button
                type="button"
                onClick={() => setSelectedType('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedType === 'all'
                    ? 'bg-[#14284B] text-white shadow-2xs'
                    : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B]'
                }`}
              >
                {strings.filterAll}
              </button>
              <button
                type="button"
                onClick={() => setSelectedType('video')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  selectedType === 'video'
                    ? 'bg-[#14284B] text-white shadow-2xs'
                    : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B]'
                }`}
              >
                <Video className="w-3 h-3" />
                {strings.filterVideo}
              </button>
              <button
                type="button"
                onClick={() => setSelectedType('text')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  selectedType === 'text'
                    ? 'bg-[#14284B] text-white shadow-2xs'
                    : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B]'
                }`}
              >
                <FileText className="w-3 h-3" />
                {strings.filterText}
              </button>
              <button
                type="button"
                onClick={() => setSelectedType('image')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  selectedType === 'image'
                    ? 'bg-[#14284B] text-white shadow-2xs'
                    : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B]'
                }`}
              >
                <ImageIcon className="w-3 h-3" />
                {strings.filterImage}
              </button>
              <button
                type="button"
                onClick={() => setSelectedType('audio')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1 ${
                  selectedType === 'audio'
                    ? 'bg-[#14284B] text-white shadow-2xs'
                    : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B]'
                }`}
              >
                <Mic className="w-3 h-3" />
                {strings.filterAudio}
              </button>
            </div>

            {/* Filter by Status */}
            <div className="flex items-center p-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-medium">
              <button
                type="button"
                onClick={() => setSelectedStatus('all')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedStatus === 'all'
                    ? 'bg-[#2F6FB5] text-white shadow-2xs'
                    : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#2F6FB5]'
                }`}
              >
                {strings.filterAllStatuses}
              </button>
              <button
                type="button"
                onClick={() => setSelectedStatus('misleading')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedStatus === 'misleading'
                    ? 'bg-[#C94A3F] text-white shadow-2xs'
                    : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#C94A3F]'
                }`}
              >
                {strings.filterMisleading}
              </button>
              <button
                type="button"
                onClick={() => setSelectedStatus('incomplete')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  selectedStatus === 'incomplete'
                    ? 'bg-[#E0A030] text-white shadow-2xs'
                    : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#E0A030]'
                }`}
              >
                {strings.filterIncomplete}
              </button>
            </div>

          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#182234] rounded-2xl border border-[#14284B]/10 dark:border-white/10 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Metadata Line */}
                <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1.5 text-xs text-[#6B7280] dark:text-[#94A3B8]">
                    {getContentTypeIcon(item.contentType)}
                    <span>{item.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.date}</span>
                  </div>
                  {getStatusBadge(item.status)}
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-[#14284B] dark:text-[#F1F5F9] leading-snug mb-3">
                  {item.title}
                </h3>

                {/* What was circulated */}
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800/80 mb-2.5 text-xs">
                  <span className="font-bold text-[#C94A3F] block mb-1">
                    {strings.cardCirculated}
                  </span>
                  <p className="text-[#1B2433] dark:text-[#CBD5E1] line-clamp-3">
                    {item.circulatedSummary}
                  </p>
                </div>

                {/* The Truth & Full Context */}
                <div className="p-3 rounded-xl bg-[#DCE9F7]/30 dark:bg-[#1C2B42]/50 border border-[#2F6FB5]/20 mb-3 text-xs">
                  <span className="font-bold text-[#2E8B6A] block mb-1">
                    {strings.cardTruth}
                  </span>
                  <p className="text-[#1B2433] dark:text-[#F1F5F9] leading-relaxed">
                    {item.truthSummary}
                  </p>
                </div>
              </div>

              {/* Bottom Source & Engagement */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                <div className="truncate pr-2">
                  <span className="text-[10px] text-[#6B7280] dark:text-[#94A3B8] block">
                    {strings.cardSource}
                  </span>
                  <a
                    href={item.verificationUrl || 'https://spa.gov.sa'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#2F6FB5] dark:text-[#4C8DD9] hover:underline inline-flex items-center gap-1"
                  >
                    <span className="truncate">{item.verificationSource}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>
                </div>

                <span className="text-[10px] text-[#6B7280] dark:text-[#94A3B8] shrink-0 font-medium">
                  {item.engagement}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-[#182234] rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <p className="text-sm font-medium text-[#6B7280] dark:text-[#94A3B8]">
              {strings.emptyNews}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
