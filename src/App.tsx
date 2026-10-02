import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AnalysisTool } from './components/AnalysisTool';
import { AnalysisResultView } from './components/AnalysisResultView';
import { LatestDebunkedNews } from './components/LatestDebunkedNews';
import { TrustedSourcesSection } from './components/TrustedSourcesSection';
import { DecontextualizedExamples } from './components/DecontextualizedExamples';
import { EducationalSections } from './components/EducationalSections';
import { Footer } from './components/Footer';
import { ShareModal } from './components/ShareModal';
import { ReportCorrectionModal } from './components/ReportCorrectionModal';
import { CardExportModal } from './components/CardExportModal';
import { 
  getNewsItems, 
  getTrustedSources, 
  getExampleCases, 
  getPresetTestCases 
} from './data/mockData';
import { AnalysisResult, TrustedSource } from './types';
import { analyzeContextWithAPI } from './services/geminiService';
import { Language } from './i18n/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(() => getPresetTestCases('ar')[0].result);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingStep, setLoadingStep] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  // Modals state
  const [shareResult, setShareResult] = useState<AnalysisResult | null>(null);
  const [reportResult, setReportResult] = useState<AnalysisResult | null>(null);
  const [exportCardResult, setExportCardResult] = useState<AnalysisResult | null>(null);

  // Suggested community sources added during session
  const [userAddedSources, setUserAddedSources] = useState<TrustedSource[]>([]);

  // Sync dark mode class with root html
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync lang direction and attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  // When switching language, if analysisResult is showing a preset, update it to the matching language version
  const handleToggleLang = () => {
    const nextLang: Language = lang === 'ar' ? 'en' : 'ar';
    setLang(nextLang);

    // If currently displaying preset 1, 2, or 3, translate it automatically
    if (analysisResult?.id?.includes('preset-1')) {
      setAnalysisResult(getPresetTestCases(nextLang)[0].result);
    } else if (analysisResult?.id?.includes('preset-2')) {
      setAnalysisResult(getPresetTestCases(nextLang)[1].result);
    } else if (analysisResult?.id?.includes('preset-3')) {
      setAnalysisResult(getPresetTestCases(nextLang)[2].result);
    }
  };

  const handleStartAnalysis = () => {
    const el = document.getElementById('analyzer');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreExamples = () => {
    const el = document.getElementById('examples');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnalyze = async (payload: {
    query: string;
    inputType: 'url' | 'text' | 'image' | 'video' | 'audio';
    fileData?: string;
    mediaType?: string;
    lang?: Language;
  }) => {
    setIsLoading(true);
    setError(null);
    setLoadingStep(0);

    // Multi-stage loader visual feedback
    const step1 = setTimeout(() => setLoadingStep(1), 800);
    const step2 = setTimeout(() => setLoadingStep(2), 1700);

    try {
      const data = await analyzeContextWithAPI({
        ...payload,
        lang,
      });
      clearTimeout(step1);
      clearTimeout(step2);
      setAnalysisResult(data);

      // Smooth scroll to result
      setTimeout(() => {
        const resultEl = document.getElementById('analysis-result');
        resultEl?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err: any) {
      setError(err.message || (lang === 'en' ? 'Failed to process context analysis.' : 'حدث خطأ أثناء الاتصال بمحرك التحليل الذكي.'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectPreset = (result: AnalysisResult) => {
    setAnalysisResult(result);
    setTimeout(() => {
      const resultEl = document.getElementById('analysis-result');
      resultEl?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSuggestSource = (newSourceData: Partial<TrustedSource>) => {
    const newSource: TrustedSource = {
      id: 'source-' + Date.now(),
      name: newSourceData.name || (lang === 'en' ? 'Verified Agency' : 'جهة معتمدة'),
      arabicName: newSourceData.arabicName || (lang === 'en' ? 'Verified Agency' : 'جهة مقترحة'),
      category: newSourceData.category || 'government',
      description: newSourceData.description || (lang === 'en' ? 'Community suggested source' : 'مصدر مقترح من المستخدمين'),
      url: newSourceData.url || 'https://spa.gov.sa',
      iconType: newSourceData.iconType || 'shield',
      badge: lang === 'en' ? 'Verified Suggestion' : 'مقترح معتمد',
    };
    setUserAddedSources((prev) => [newSource, ...prev]);
  };

  // Dynamic language data sources
  const currentNews = getNewsItems(lang);
  const currentSources = [...userAddedSources, ...getTrustedSources(lang)];
  const currentExamples = getExampleCases(lang);

  return (
    <div className="min-h-screen bg-[#F7F4EE] dark:bg-[#0F172A] text-[#1B2433] dark:text-[#F1F5F9] bg-dot-pattern transition-colors">
      
      {/* Header */}
      <Header
        onNavigate={handleNavigate}
        lang={lang}
        onToggleLang={handleToggleLang}
        darkMode={darkMode}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      <main>
        {/* Hero Section */}
        <Hero
          onStartAnalysis={handleStartAnalysis}
          onExploreExamples={handleExploreExamples}
          lang={lang}
        />

        {/* Core Analysis Tool */}
        <AnalysisTool
          onAnalyze={handleAnalyze}
          onSelectPreset={handleSelectPreset}
          isLoading={isLoading}
          loadingStep={loadingStep}
          error={error}
          lang={lang}
        />

        {/* Analysis Result (if available) */}
        {analysisResult && (
          <AnalysisResultView
            result={analysisResult}
            onOpenShareModal={(res) => setShareResult(res)}
            onOpenReportModal={(res) => setReportResult(res)}
            onExportCard={(res) => setExportCardResult(res)}
            lang={lang}
          />
        )}

        {/* Latest Debunked & Decontextualized News */}
        <LatestDebunkedNews
          newsItems={currentNews}
          lang={lang}
        />

        {/* Trusted Verification Sources Directory */}
        <TrustedSourcesSection
          sources={currentSources}
          onSuggestSource={handleSuggestSource}
          lang={lang}
        />

        {/* Exposed Decontextualized Cases (Before / After) */}
        <DecontextualizedExamples
          examples={currentExamples}
          lang={lang}
        />

        {/* Educational, Intellectual Security & FAQ Sections */}
        <EducationalSections
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        onScrollToTop={handleScrollToTop}
        lang={lang}
      />

      {/* Modals */}
      {shareResult && (
        <ShareModal
          result={shareResult}
          onClose={() => setShareResult(null)}
          lang={lang}
        />
      )}

      {reportResult && (
        <ReportCorrectionModal
          result={reportResult}
          onClose={() => setReportResult(null)}
          lang={lang}
        />
      )}

      {exportCardResult && (
        <CardExportModal
          result={exportCardResult}
          onClose={() => setExportCardResult(null)}
          lang={lang}
        />
      )}

    </div>
  );
}
