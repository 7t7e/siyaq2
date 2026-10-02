import React, { useState } from 'react';
import { Moon, Sun, Globe, Menu, X, Search } from 'lucide-react';
import { t, Language } from '../i18n/translations';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  lang: Language;
  onToggleLang: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onNavigate,
  lang,
  onToggleLang,
  darkMode,
  onToggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const strings = t[lang];

  const navLinks = [
    { id: 'analyzer', label: strings.navAnalyzer },
    { id: 'latest-news', label: strings.navLatestNews },
    { id: 'trusted-sources', label: strings.navTrustedSources },
    { id: 'examples', label: strings.navExamples },
    { id: 'how-it-works', label: strings.navHowItWorks },
    { id: 'moderation-mission', label: strings.navIntellectualSecurity },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#F7F4EE]/90 dark:bg-[#0F172A]/90 border-b border-[#14284B]/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('hero')}>
            <div className="relative w-11 h-11 rounded-xl bg-[#14284B] dark:bg-[#1E3A6E] flex items-center justify-center text-white shadow-sm border border-[#2F6FB5]/20 group-hover:scale-105 transition-transform">
              <div className="w-5 h-5 rounded-full border-2 border-[#DCE9F7] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#2F6FB5]" />
              </div>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#2E8B6A]" title="Ready" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-[#14284B] dark:text-[#F1F5F9]">
                  {strings.brandName}
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-[#2F6FB5] dark:text-[#4C8DD9] bg-[#DCE9F7]/70 dark:bg-[#1C2B42] px-2 py-0.5 rounded-md">
                  {strings.brandBadge}
                </span>
              </div>
              <span className="text-xs text-[#6B7280] dark:text-[#94A3B8] font-normal hidden sm:inline">
                {strings.brandTagline}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-sm font-medium text-[#1B2433] dark:text-[#F1F5F9] hover:text-[#2F6FB5] dark:hover:text-[#4C8DD9] transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2F6FB5] rounded cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions & Utilities */}
          <div className="flex items-center gap-3">
            {/* Quick Analyze Button */}
            <button
              onClick={() => handleNavClick('analyzer')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#14284B] hover:bg-[#1E3A6E] dark:bg-[#2F6FB5] dark:hover:bg-[#1E3A6E] rounded-xl shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#2F6FB5] cursor-pointer"
            >
              <Search className="w-4 h-4 text-[#DCE9F7]" />
              <span>{strings.btnAnalyzeNow}</span>
            </button>

            {/* Dark Mode Switch */}
            <button
              onClick={onToggleDarkMode}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-[#1B2433] dark:text-[#F1F5F9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label={darkMode ? strings.lightMode : strings.darkMode}
              title={darkMode ? strings.lightMode : strings.darkMode}
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Language Switch */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 text-[#1B2433] dark:text-[#F1F5F9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Switch Language / تبديل اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-[#2F6FB5]" />
              <span className="font-bold">{lang === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-[#1B2433] dark:text-[#F1F5F9] hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-2 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full ${lang === 'ar' ? 'text-right' : 'text-left'} px-4 py-2.5 text-sm font-medium text-[#1B2433] dark:text-[#F1F5F9] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 px-4">
              <button
                onClick={() => handleNavClick('analyzer')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-[#14284B] dark:bg-[#2F6FB5] rounded-xl shadow-sm cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>{strings.btnAnalyzeNow}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
