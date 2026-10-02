import React, { useState, useRef, useEffect } from 'react';
import { 
  Link2, FileText, Image as ImageIcon, Video, Mic, Upload, 
  Sparkles, AlertCircle, Square, Loader2
} from 'lucide-react';
import { getPresetTestCases, PresetTestCase } from '../data/mockData';
import { AnalysisResult } from '../types';
import { t, Language } from '../i18n/translations';

interface AnalysisToolProps {
  onAnalyze: (payload: {
    query: string;
    inputType: 'url' | 'text' | 'image' | 'video' | 'audio';
    fileData?: string;
    mediaType?: string;
    lang?: Language;
  }) => Promise<void>;
  onSelectPreset: (result: AnalysisResult) => void;
  isLoading: boolean;
  loadingStep: number;
  error: string | null;
  lang: Language;
}

type TabType = 'url' | 'text' | 'image' | 'video' | 'audio';

export const AnalysisTool: React.FC<AnalysisToolProps> = ({
  onAnalyze,
  onSelectPreset,
  isLoading,
  loadingStep,
  error,
  lang,
}) => {
  const strings = t[lang];
  const presets = getPresetTestCases(lang);

  const [activeTab, setActiveTab] = useState<TabType>('text');
  const [inputText, setInputText] = useState('');
  const [inputUrl, setInputUrl] = useState('');
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [fileMediaType, setFileMediaType] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const recordingTimerRef = useRef<any>(null);

  // Audio recording simulation
  useEffect(() => {
    if (isRecording) {
      recordingTimerRef.current = setInterval(() => {
        setRecordingSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
    }
    return () => {
      if (recordingTimerRef.current) clearInterval(recordingTimerRef.current);
    };
  }, [isRecording]);

  const toggleRecording = () => {
    if (isRecording) {
      setIsRecording(false);
      setInputText(
        lang === 'en'
          ? 'Recorded voice note via mic: Circulated statement recorded to verify source and speech context.'
          : 'تسجيل صوتي مسجل عبر الميكروفون: تصريح متداول تم تسجيله للتحقق من أصله وسياقه.'
      );
    } else {
      setRecordingSeconds(0);
      setIsRecording(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = (file: File) => {
    setFileName(file.name);
    setFileMediaType(file.type);
    const reader = new FileReader();
    reader.onload = (event) => {
      setFilePreview(event.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let query = '';
    if (activeTab === 'url') query = inputUrl.trim();
    else if (activeTab === 'text') query = inputText.trim();
    else if (activeTab === 'audio') query = inputText.trim() || `Audio recording (${recordingSeconds}s)`;
    else query = inputText.trim() || fileName || 'Attached media file';

    if (!query && !filePreview) return;

    onAnalyze({
      query,
      inputType: activeTab,
      fileData: filePreview || undefined,
      mediaType: fileMediaType || undefined,
      lang,
    });
  };

  const handlePresetClick = (preset: PresetTestCase) => {
    setActiveTab(preset.type);
    if (preset.type === 'url') {
      setInputUrl(preset.input);
    } else {
      setInputText(preset.input);
    }
    onSelectPreset(preset.result);
  };

  const loadingStepsText = [
    { title: strings.step1Title, subtitle: strings.step1Sub },
    { title: strings.step2Title, subtitle: strings.step2Sub },
    { title: strings.step3Title, subtitle: strings.step3Sub },
  ];

  return (
    <section id="analyzer" className="relative scroll-mt-24 py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCE9F7]/70 dark:bg-slate-800 text-[#14284B] dark:text-[#93C5FD] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2F6FB5]" />
            <span>{strings.toolSectionBadge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#14284B] dark:text-[#F1F5F9]">
            {strings.toolHeading}
          </h2>
          <p className="text-sm sm:text-base text-[#6B7280] dark:text-[#94A3B8] mt-2 max-w-xl mx-auto">
            {strings.toolSubheading}
          </p>
        </div>

        {/* Quick Presets Bar */}
        <div className="mb-6">
          <span className="block text-xs font-semibold text-[#14284B] dark:text-[#CBD5E1] mb-2">
            {strings.toolPresetLabel}
          </span>
          <div className="flex flex-wrap gap-2">
            {presets.map((preset) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => handlePresetClick(preset)}
                className="px-3.5 py-1.5 text-xs font-medium rounded-xl bg-white dark:bg-[#182234] border border-[#14284B]/10 dark:border-white/10 hover:border-[#2F6FB5] dark:hover:border-[#4C8DD9] text-[#1B2433] dark:text-[#F1F5F9] transition-all shadow-2xs hover:shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span className={`w-2 h-2 rounded-full ${preset.result.status === 'misleading' ? 'bg-[#C94A3F]' : (preset.result.status === 'incomplete' ? 'bg-[#E0A030]' : 'bg-[#2E8B6A]')}`} />
                <span>{preset.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Analysis Card */}
        <div className="bg-white dark:bg-[#182234] rounded-2xl border border-[#14284B]/10 dark:border-white/10 shadow-sm p-6 sm:p-8 transition-colors">
          
          {/* Tabs Navigation */}
          <div className="flex items-center gap-2 p-1 bg-[#F7F4EE] dark:bg-slate-900 rounded-xl mb-6 overflow-x-auto scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('text')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'text'
                  ? 'bg-white dark:bg-[#182234] text-[#14284B] dark:text-[#F1F5F9] shadow-xs'
                  : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B]'
              }`}
            >
              <FileText className="w-4 h-4 text-[#2F6FB5]" />
              <span>{strings.tabText}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('url')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'url'
                  ? 'bg-white dark:bg-[#182234] text-[#14284B] dark:text-[#F1F5F9] shadow-xs'
                  : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B]'
              }`}
            >
              <Link2 className="w-4 h-4 text-[#2F6FB5]" />
              <span>{strings.tabUrl}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('image')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'image'
                  ? 'bg-white dark:bg-[#182234] text-[#14284B] dark:text-[#F1F5F9] shadow-xs'
                  : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B]'
              }`}
            >
              <ImageIcon className="w-4 h-4 text-[#2F6FB5]" />
              <span>{strings.tabImage}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('video')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'video'
                  ? 'bg-white dark:bg-[#182234] text-[#14284B] dark:text-[#F1F5F9] shadow-xs'
                  : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B]'
              }`}
            >
              <Video className="w-4 h-4 text-[#2F6FB5]" />
              <span>{strings.tabVideo}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('audio')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === 'audio'
                  ? 'bg-white dark:bg-[#182234] text-[#14284B] dark:text-[#F1F5F9] shadow-xs'
                  : 'text-[#6B7280] dark:text-[#94A3B8] hover:text-[#14284B]'
              }`}
            >
              <Mic className="w-4 h-4 text-[#2F6FB5]" />
              <span>{strings.tabAudio}</span>
            </button>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* TAB: Text */}
            {activeTab === 'text' && (
              <div>
                <label className="block text-xs font-semibold text-[#14284B] dark:text-[#F1F5F9] mb-2">
                  {strings.labelTextInput}
                </label>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={strings.placeholderText}
                  rows={4}
                  className="w-full p-4 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F6FB5] transition-all resize-none"
                />
              </div>
            )}

            {/* TAB: URL */}
            {activeTab === 'url' && (
              <div>
                <label className="block text-xs font-semibold text-[#14284B] dark:text-[#F1F5F9] mb-2">
                  {strings.labelUrlInput}
                </label>
                <div className="relative">
                  <input
                    type="url"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder={strings.placeholderUrl}
                    dir="ltr"
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2F6FB5] transition-all text-left"
                  />
                  <Link2 className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
                </div>
              </div>
            )}

            {/* TAB: Image / Screenshot */}
            {activeTab === 'image' && (
              <div className="space-y-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="image/*"
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all ${
                    isDragging
                      ? 'border-[#2F6FB5] bg-[#DCE9F7]/30 dark:bg-slate-800'
                      : 'border-slate-200 dark:border-slate-700 hover:border-[#2F6FB5]'
                  }`}
                >
                  {filePreview ? (
                    <div className="space-y-3">
                      <img src={filePreview} alt="Preview" className="max-h-48 mx-auto rounded-lg object-contain shadow-xs" />
                      <p className="text-xs font-medium text-[#2F6FB5]">{fileName} {strings.dropzoneChange}</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="w-12 h-12 rounded-full bg-[#DCE9F7]/70 dark:bg-slate-800 flex items-center justify-center mx-auto text-[#2F6FB5]">
                        <Upload className="w-6 h-6" />
                      </div>
                      <p className="text-sm font-semibold text-[#14284B] dark:text-[#F1F5F9]">
                        {strings.dropzoneTitle}
                      </p>
                      <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">
                        {strings.dropzoneSub}
                      </p>
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={strings.imgNotePlaceholder}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#2F6FB5]"
                />
              </div>
            )}

            {/* TAB: Video */}
            {activeTab === 'video' && (
              <div className="space-y-3">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  accept="video/*"
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border-2 border-dashed border-slate-200 dark:border-slate-700 hover:border-[#2F6FB5] rounded-xl p-8 text-center cursor-pointer transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-[#DCE9F7]/70 dark:bg-slate-800 flex items-center justify-center mx-auto text-[#2F6FB5] mb-2">
                    <Video className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-semibold text-[#14284B] dark:text-[#F1F5F9]">
                    {fileName ? fileName : strings.videoDropTitle}
                  </p>
                  <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] mt-1">
                    {strings.videoDropSub}
                  </p>
                </div>
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={strings.videoNotePlaceholder}
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] focus:outline-none focus:ring-1 focus:ring-[#2F6FB5]"
                />
              </div>
            )}

            {/* TAB: Audio */}
            {activeTab === 'audio' && (
              <div className="space-y-4">
                <div className="p-6 rounded-xl bg-[#F7F4EE] dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={toggleRecording}
                      className={`w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer ${
                        isRecording
                          ? 'bg-rose-600 text-white animate-pulse'
                          : 'bg-[#14284B] dark:bg-[#2F6FB5] text-white hover:scale-105'
                      }`}
                    >
                      {isRecording ? <Square className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                    </button>
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[#14284B] dark:text-[#F1F5F9] block">
                      {isRecording ? `${strings.micRecording} 00:${recordingSeconds < 10 ? '0' : ''}${recordingSeconds}` : strings.micClickToRecord}
                    </span>
                    <span className="text-xs text-[#6B7280] dark:text-[#94A3B8]">
                      {isRecording ? strings.micDescActive : strings.micDescIdle}
                    </span>
                  </div>
                </div>

                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder={strings.micTranscriptionPlaceholder}
                  rows={2}
                  className="w-full p-3 text-xs rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-[#1B2433] dark:text-[#F1F5F9] resize-none"
                />
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                <span>{error}</span>
              </div>
            )}

            {/* Loading Indicator with 3 Progressive Stages */}
            {isLoading ? (
              <div className="p-6 rounded-xl bg-[#F7F4EE] dark:bg-slate-900 border border-[#2F6FB5]/20 space-y-4 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Loader2 className="w-5 h-5 text-[#2F6FB5] animate-spin" />
                    <span className="text-sm font-bold text-[#14284B] dark:text-[#F1F5F9]">
                      {loadingStepsText[loadingStep]?.title || strings.step1Title}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#2F6FB5]">
                    {strings.stepProgress} {loadingStep + 1} {strings.stepOf} 3
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-[#2F6FB5] transition-all duration-700 ease-out"
                    style={{ width: `${((loadingStep + 1) / 3) * 100}%` }}
                  />
                </div>

                <p className="text-xs text-[#6B7280] dark:text-[#94A3B8]">
                  {loadingStepsText[loadingStep]?.subtitle}
                </p>
              </div>
            ) : (
              /* Submit Button */
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#14284B] hover:bg-[#1E3A6E] dark:bg-[#2F6FB5] dark:hover:bg-[#1E3A6E] text-white text-base font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Sparkles className="w-5 h-5 text-[#DCE9F7]" />
                  <span>{strings.btnSubmitAnalysis}</span>
                </button>
              </div>
            )}
          </form>

        </div>

      </div>
    </section>
  );
};
