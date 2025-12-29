import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Podcast from './pages/Podcast';
import Rights from './pages/Rights';
import Contact from './pages/Contact';
import AccessibilityStatement from './pages/AccessibilityStatement';
import CursorGlow from './components/CursorGlow';
import SubscriptionPopup from './components/SubscriptionPopup';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeTip, setActiveTip] = useState<string | null>(null);
  const [isTipVisible, setIsTipVisible] = useState(false);
  
  const fadeTimeoutRef = useRef<number | null>(null);
  const clearTipRef = useRef<number | null>(null);

  const accessibilityTips = [
    "הנגשת אתר היא לא רק חובה חוקית, היא זכות בסיסית לשוויון.",
    "שימוש בניגודיות צבעים גבוהה עוזר לאנשים עם לקויות ראייה לקרוא טוב יותר.",
    "תיאור טקסטואלי לתמונות (Alt Text) מאפשר לעיוורים 'לראות' את התוכן.",
    "ניווט מקלדת מלא הוא קריטי לאנשים שלא יכולים להשתמש בעכבר.",
    "שפה פשוטה וברורה הופכת את המידע לנגיש לאנשים עם מוגבלות קוגניטיבית.",
    "הוספת כתוביות לסרטונים עוזרת לא רק לחירשים, אלא לכולם בסביבה רועשת.",
    "כפתורים גדולים וברורים מקלים על אנשים עם מוגבלות מוטורית בניווט.",
    "סדר כותרות הגיוני (H1, H2...) עוזר לקוראי מסך להבין את מבנה הדף.",
    "הימנעו משימוש בצבע בלבד כדי להעביר מידע (למשל: 'לחצו על הכפתור האדום').",
    "הקפידו על גודל גופן מינימלי של 16px לקריאות אופטימלית.",
    "תנו למשתמשים מספיק זמן לקרוא תוכן לפני שהוא נעלם או מתחלף.",
    "ספקו אלטרנטיבה טקסטואלית לקבצי אודיו (תמלול).",
    "ודאו שכל הקישורים מתארים את היעד שלהם (לא רק 'לחץ כאן').",
    "הימנעו מניגון אוטומטי של וידאו או אודיו שעלול להבהיל משתמשים.",
    "השתמשו בטפסים עם תוויות (Labels) ברורות המשויכות לשדות הקלט.",
    "אפשרו למשתמשים להגדיל את הטקסט ב-200% בלי לאבד תוכן או פונקציונליות.",
    "הקפידו על רווח מספק בין שורות ובין פסקאות לשיפור הריכוז.",
    "ודאו שפוקוס המקלדת נראה לעין בבירור (Focus Ring).",
    "השתמשו ב-ARIA Landmarks כדי לעזור למשתמשים לנווט בין אזורי האתר.",
    "ודאו שפלטפורמת האתר מגיבה (Responsive) ועובדת היטב גם בזום גבוה.",
    "ספקו דרך לעקוף גושי תוכן חוזרים באמצעות קישור 'דלג לתוכן'.",
    "בדקו את האתר עם קורא מסך כדי להבין את חווית המשתמש העיוור.",
    "הימנעו מהבהובים מהירים בתוכן שעלולים לגרום להתקפי אפילפסיה.",
    "ודאו שסדר הטאבים (Tab Order) הגיוני ותואם את הסדר החזותי.",
    "השתמשו בשפה סמנטית (כמו main, nav, article).",
    "ספקו הודעות שגיאה ברורות בטפסים שמסבירות איך לתקן את הטעות.",
    "ודאו שכל האלמנטים האינטראקטיביים הם בעלי תפקיד (Role) מוגדר.",
    "התחשבו במשתמשים המשתמשים בטכנולוגיות מסייעות כמו מקלדת ברייל.",
    "נגישות משפרת את הקידום בגוגל (SEO) כיוון שמנועי חיפוש אוהבים סדר.",
    "זכרו: עיצוב נגיש הוא עיצוב טוב יותר עבור כולם!"
  ];

  const showRandomTip = useCallback(() => {
    if (fadeTimeoutRef.current) window.clearTimeout(fadeTimeoutRef.current);
    if (clearTipRef.current) window.clearTimeout(clearTipRef.current);

    const randomIndex = Math.floor(Math.random() * accessibilityTips.length);
    setActiveTip(accessibilityTips[randomIndex]);
    setIsTipVisible(true);
    
    fadeTimeoutRef.current = window.setTimeout(() => {
      setIsTipVisible(false);
      clearTipRef.current = window.setTimeout(() => {
        setActiveTip(null);
      }, 500);
    }, 20000);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as Page;
      if (['home', 'about', 'podcast', 'rights', 'contact', 'accessibility'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
    };

    const handleTipEvent = () => showRandomTip();

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('show-accessibility-tip', handleTipEvent);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('show-accessibility-tip', handleTipEvent);
    };
  }, [showRandomTip]);

  useEffect(() => {
    const handleRipple = (e: PointerEvent | KeyboardEvent) => {
      const target = (e.target as HTMLElement).closest('button, a[role="button"], .btn, .cta');
      if (!target || !(target instanceof HTMLElement)) return;

      const isKeyboard = e instanceof KeyboardEvent;
      if (isKeyboard && e.key !== 'Enter' && e.key !== ' ') return;

      const style = getComputedStyle(target);
      if (style.position === 'static') target.style.position = 'relative';
      target.style.overflow = 'hidden';

      const rect = target.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.className = 'ripple-effect';
      const size = Math.max(rect.width, rect.height);
      ripple.style.width = ripple.style.height = `${size}px`;

      let x, y;
      if (isKeyboard) {
        x = rect.width / 2;
        y = rect.height / 2;
      } else {
        x = (e as PointerEvent).clientX - rect.left;
        y = (e as PointerEvent).clientY - rect.top;
      }

      ripple.style.left = `${x - size / 2}px`;
      ripple.style.top = `${y - size / 2}px`;

      const isDark = target.classList.contains('bg-blue-900') || target.classList.contains('bg-blue-950');
      ripple.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.35)' : 'rgba(0, 0, 0, 0.12)';

      target.appendChild(ripple);
      ripple.addEventListener('animationend', () => ripple.remove());
      setTimeout(() => ripple.parentNode && ripple.remove(), 600);
    };

    window.addEventListener('pointerdown', handleRipple as EventListener);
    window.addEventListener('keydown', handleRipple as EventListener);
    return () => {
      window.removeEventListener('pointerdown', handleRipple as EventListener);
      window.removeEventListener('keydown', handleRipple as EventListener);
    };
  }, []);

  const navigateTo = (page: Page) => {
    window.location.hash = page;
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home navigateTo={navigateTo} />;
      case 'about': return <About />;
      case 'podcast': return <Podcast navigateTo={navigateTo} />;
      case 'rights': return <Rights />;
      case 'contact': return <Contact />;
      case 'accessibility': return <AccessibilityStatement />;
      default: return <Home navigateTo={navigateTo} />;
    }
  };

  const handleCloseTip = () => {
    setIsTipVisible(false);
    if (clearTipRef.current) window.clearTimeout(clearTipRef.current);
    clearTipRef.current = window.setTimeout(() => setActiveTip(null), 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden relative" dir="rtl">
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-sky-100 rounded-full blur-[120px] animate-soft-pulse"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[60%] h-[60%] bg-blue-50 rounded-full blur-[100px] animate-soft-pulse" style={{ animationDelay: '-5s' }}></div>
      </div>

      <CursorGlow />
      <SubscriptionPopup navigateTo={navigateTo} />
      <Header currentPage={currentPage} navigateTo={navigateTo} />
      
      {activeTip && (
        <div 
          className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000] px-4 w-full max-w-md transition-all duration-500 ease-in-out ${isTipVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        >
          <div className="bg-blue-900 text-white p-6 rounded-3xl shadow-2xl border-2 border-sky-400 flex items-center gap-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10 text-6xl" aria-hidden="true">♿</div>
            <div className="bg-sky-500 w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0" aria-hidden="true">💡</div>
            <div className="relative z-10">
              <div className="text-xs font-black text-sky-300 uppercase tracking-widest mb-1">טיפ נגישות יומי</div>
              <p className="font-bold leading-tight">{activeTip}</p>
            </div>
            <button 
              onClick={handleCloseTip}
              className="absolute top-2 left-2 text-white/50 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
              aria-label="סגור טיפ נגישות"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <main className="flex-grow relative z-10">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;