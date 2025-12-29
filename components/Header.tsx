import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const progress = (window.scrollY / scrollHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const triggerTip = () => {
    window.dispatchEvent(new CustomEvent('show-accessibility-tip'));
  };

  const navItems = [
    { id: 'home', label: 'דף הבית' },
    { id: 'about', label: 'אודות המיזם' },
    { id: 'podcast', label: 'הפודקאסט' },
    { id: 'rights', label: 'זכויות ונגישות' },
    { id: 'contact', label: 'צרו קשר' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div 
        className="absolute bottom-0 right-0 h-1 bg-gradient-to-l from-sky-400 to-blue-600 transition-all duration-150 ease-out z-[60]"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigateTo('home')}
              className="flex items-center gap-3 group focus-ring p-1 rounded-lg transition-transform hover:scale-[1.02]"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-blue-900 text-white rounded-full font-bold text-xl shadow-md" aria-hidden="true">
                י
              </div>
              <div className="flex flex-col text-right">
                <span className="text-xl font-extrabold text-blue-900 leading-tight">מיזם יחד</span>
                <span className="text-xs text-sky-600 font-bold">קהילה נגישה עכו</span>
              </div>
            </button>
            <button 
              onClick={() => {
                triggerTip();
                navigateTo('accessibility');
              }}
              className="mr-2 text-blue-800 hover:text-sky-600 transition-colors focus-ring p-1 rounded-full bg-slate-100 hover:bg-sky-50"
              title="הצהרת נגישות"
            >
              <span className="text-2xl" role="img" aria-label="נגישות">♿</span>
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id as Page)}
                className={`px-4 py-2 rounded-lg font-bold text-base transition-all focus-ring ${
                  currentPage === item.id 
                    ? 'bg-blue-900 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-sky-50 hover:text-blue-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-blue-900 focus-ring p-2 rounded-lg"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 py-4 px-4 space-y-2 shadow-inner">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigateTo(item.id as Page);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-right px-6 py-4 rounded-xl font-bold text-lg transition-colors ${
                currentPage === item.id 
                  ? 'bg-blue-900 text-white shadow-sm' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;