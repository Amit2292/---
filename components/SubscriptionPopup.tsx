
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface SubscriptionPopupProps {
  navigateTo: (page: Page) => void;
}

const SubscriptionPopup: React.FC<SubscriptionPopupProps> = ({ navigateTo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShownOnExit, setHasShownOnExit] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves out of the top of the window
      if (e.clientY <= 0 && !hasShownOnExit && !isOpen) {
        setIsOpen(true);
        setHasShownOnExit(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShownOnExit, isOpen]);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Permanent Side Tab */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[60] hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-900 text-white py-4 px-2 rounded-r-none rounded-l-2xl shadow-2xl hover:bg-sky-600 transition-all transform hover:-translate-x-1 flex flex-col items-center gap-3 border-y border-l border-white/20 group"
          aria-label="הרשמה לעדכונים"
        >
          <span className="text-xl group-hover:scale-125 transition-transform">🔔</span>
          <span className="[writing-mode:vertical-rl] font-black text-sm tracking-widest py-2">עדכונים</span>
        </button>
      </div>

      {/* Mobile Floating Button */}
      <div className="fixed bottom-6 right-6 z-[60] md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-blue-900 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl animate-bounce"
          aria-label="הרשמה לעדכונים"
        >
          🔔
        </button>
      </div>

      {/* The Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 animate-fade-in">
          <div 
            className="absolute inset-0 bg-blue-950/60 backdrop-blur-md" 
            onClick={handleClose}
          />
          <div className="relative bg-white max-w-lg w-full rounded-[3rem] shadow-2xl p-10 md:p-14 text-center overflow-hidden border border-sky-100">
            {/* Decorative background elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-sky-50 rounded-full blur-2xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-50 rounded-full blur-2xl opacity-50" />
            
            <button 
              onClick={handleClose}
              className="absolute top-6 left-6 text-slate-400 hover:text-blue-900 transition-colors p-2 z-20"
              aria-label="סגור פופאפ"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative z-10">
              <div className="text-5xl mb-6 transform hover:scale-110 transition-transform duration-300 inline-block">🎙️</div>
              <h2 className="text-3xl md:text-4xl font-black text-blue-950 mb-6 leading-tight">
                רוצה לקבל פרק חדש כשעולה?
              </h2>
              <p className="text-xl text-slate-600 mb-10 font-bold">
                הצטרפו לקהילה שלנו וקבלו עדכון אישי ישר למכשיר שלכם.
              </p>
              
              <div className="flex flex-col gap-4">
                <button 
                  onClick={() => {
                    handleClose();
                    navigateTo('contact');
                  }}
                  className="w-full flex items-center justify-center gap-3 py-5 bg-blue-900 text-white rounded-2xl font-black text-xl hover:bg-blue-800 transition-all shadow-lg transform hover:-translate-y-1"
                >
                  <span>הרשמה במייל</span>
                  <span className="text-2xl">📧</span>
                </button>
                <button 
                  onClick={() => {
                    handleClose();
                    window.open('https://wa.me/message/YOUR_LINK', '_blank');
                  }}
                  className="w-full flex items-center justify-center gap-3 py-5 bg-[#25D366] text-white rounded-2xl font-black text-xl hover:bg-[#128C7E] transition-all shadow-lg transform hover:-translate-y-1"
                >
                  <span>עדכון בוואטסאפ</span>
                  <span className="text-2xl">💬</span>
                </button>
              </div>
              
              <button 
                onClick={handleClose}
                className="mt-8 text-slate-400 font-bold hover:text-slate-600 transition-colors text-sm uppercase tracking-widest"
              >
                אולי בפעם אחרת
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SubscriptionPopup;
