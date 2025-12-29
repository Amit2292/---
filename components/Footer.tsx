
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  const triggerTip = () => {
    window.dispatchEvent(new CustomEvent('show-accessibility-tip'));
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-800 pb-12 mb-8">
          <div>
            <h2 className="text-xl font-bold mb-4">מיזם יחד - קהילה נגישה עכו</h2>
            <p className="text-slate-400 mb-6 max-w-sm">
              תכנית של משרד הרווחה ורשת המתנ"סים לקידום מודעות, נגישות וזכויות לאנשים עם מוגבלויות בעכו.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/groups/346180193063148/?locale=he_IL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors" 
                aria-label="לדף הפייסבוק של הקהילה - פתיחה בחלון חדש"
              >
                <span className="font-bold">f</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors" 
                aria-label="YouTube"
              >
                <span className="font-bold">Y</span>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">קישורים מהירים</h2>
            <ul className="space-y-3">
              <li><button onClick={() => navigateTo('home')} className="text-slate-400 hover:text-white transition-colors">דף הבית</button></li>
              <li><button onClick={() => navigateTo('about')} className="text-slate-400 hover:text-white transition-colors">אודות המיזם</button></li>
              <li><button onClick={() => navigateTo('podcast')} className="text-slate-400 hover:text-white transition-colors">הפודקאסט</button></li>
              <li><button onClick={() => navigateTo('rights')} className="text-slate-400 hover:text-white transition-colors">זכויות ונגישות</button></li>
              <li><button onClick={() => navigateTo('contact')} className="text-slate-400 hover:text-white transition-colors">צרו קשר</button></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">נגישות ושותפים</h2>
            <button 
              onClick={() => {
                triggerTip();
                navigateTo('accessibility');
              }}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-4 group"
            >
              <span className="text-2xl" role="img" aria-label="סמל נגישות">♿</span>
              <span>הצהרת נגישות</span>
            </button>
            <div className="space-y-2">
              <p className="text-sm text-slate-400">בשיתוף עם:</p>
              <p className="text-lg font-semibold">משרד הרווחה והביטחון החברתי</p>
              <p className="text-lg font-semibold">רשת המתנ"סים עכו</p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} מיזם יחד - קהילה נגישה עכו. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
