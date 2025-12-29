import React, { useState } from 'react';

const Rights: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const sections = [
    {
      title: "נגישות במרחב הציבורי: מה חשוב לדעת",
      content: "נגישות במרחב הציבורי כוללת התאמות פיזיות (רמפות, מעליות, שירותים נגישים), התאמות חושיות (שילוט בברייל, מערכות שמע) והנגשה שירותית. המטרה היא לאפשר לכל אדם להגיע לכל מקום ולהשתמש בכל שירות באופן עצמאי ומכבד."
    },
    {
      title: "זכויות בסיסיות שכדאי להכיר",
      content: "זכויות לאנשים עם מוגבלות מעוגנות בחוק שוויון זכויות לאנשים עם מוגבלות. הן כוללות זכות לתעסוקה, דיור בקהילה, נגישות תחבורה ציבורית, פנאי וחינוך. חשוב להכיר את הזכויות הרפואיות והכלכליות מול הביטוח הלאומי ומשרד הרווחה."
    },
    {
      title: "איך מתחילים? 3 צעדים פשוטים",
      content: "1. להבין צורך: הגדירו מהו הקושי או הצורך הספציפי. 2. לשאול: פנו לגורמים רלוונטיים (עובדים סוציאליים, ארגוני סיוע). 3. לפעול: הגשת בקשות מסודרות ומעקב אחר הטיפול בהן."
    }
  ];

  const links = [
    { 
      name: "אתר כל זכות - מדריך מוגבלויות", 
      url: "https://www.kolzchut.org.il/he/%D7%90%D7%A0%D7%A9%D7%99%D7%9D_%D7%A2%D7%9D_%D7%9E%D7%95%D7%92%D7%91%D7%9C%D7%95%D7%99%D7%95%D7%AA" 
    },
    { 
      name: "נציבות שוויון זכויות לאנשים עם מוגבלות", 
      url: "https://www.gov.il/he/departments/moj_disability_rights/govil-landing-page" 
    },
    { 
      name: "אתר עיריית עכו - אגף רווחה", 
      url: "https://www.akko.muni.il/142/" 
    }
  ];

  return (
    <div className="bg-white min-h-screen animate-fade-in">
      <section className="bg-blue-900 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1600&q=80" 
            alt="ספרייה ומידע" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/70 to-blue-900/90"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl lg:text-6xl font-black mb-6 drop-shadow-md">מידע שימושי</h1>
          <p className="text-xl md:text-2xl text-sky-100 font-medium max-w-2xl mx-auto leading-relaxed">
            ריכזנו כאן נקודות התחלה וכלים שיעזרו להבין זכויות, נגישות ואפשרויות לקבלת מידע וסיוע.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-16">
        <section className="space-y-4 mb-16">
          {sections.map((section, index) => (
            <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <button 
                onClick={() => setActiveItem(activeItem === index ? null : index)}
                className="w-full flex justify-between items-center p-6 bg-white hover:bg-slate-50 transition-colors text-right focus-ring"
              >
                <span className="text-xl font-bold text-blue-950">{section.title}</span>
                <svg 
                  className={`w-6 h-6 transform transition-transform text-sky-600 ${activeItem === index ? 'rotate-180' : ''}`} 
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeItem === index && (
                <div className="p-8 bg-slate-50 text-slate-700 text-lg leading-relaxed border-t border-slate-100 animate-fade-in">
                  {section.content}
                </div>
              )}
            </div>
          ))}
        </section>

        <section className="bg-sky-50 p-10 rounded-[2.5rem] mb-12 border border-sky-100">
          <h2 className="text-2xl font-black text-blue-950 mb-8">קישורים שימושיים</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {links.map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.url} 
                  className="text-sky-700 hover:text-sky-900 font-bold flex items-center gap-3 p-4 bg-white rounded-2xl border border-sky-100 hover:border-sky-300 transition-all hover:shadow-md h-full focus-ring"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-2xl" role="img" aria-label="קישור">🔗</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div className="p-8 bg-slate-100 rounded-2xl text-base text-slate-600 italic border-r-4 border-slate-300">
          <p>
            <strong>דיסקליימר:</strong> המידע באתר הוא כללי ומטרתו הסברה. לקבלת מידע מותאם אישית וייעוץ מקצועי מומלץ לפנות לגורמים הרשמיים ומשרדי הממשלה הרלוונטיים.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rights;