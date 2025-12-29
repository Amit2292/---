import React from 'react';
import { Page } from '../types';
import PartnerMarquee from '../components/PartnerMarquee';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const triggerTip = () => {
    window.dispatchEvent(new CustomEvent('show-accessibility-tip'));
  };

  const goals = [
    { text: "העלאת מודעות לנגישות ולזכויות", icon: "📢", label: "סמל מגפון להפצת מידע" },
    { text: "חיזוק שייכות והשתלבות בקהילה", icon: "🤝", label: "סמל לחיצת ידיים לשיתוף פעולה" },
    { text: "הנגשת מידע וכלים לציבור", icon: "💡", label: "סמל נורה לרעיונות ומידע" },
    { text: "קידום שיח מכבד שמוביל לשינוי", icon: "🔄", label: "סמל חצים לשינוי והתפתחות" }
  ];

  const activities = [
    { 
      title: "תוכן והסברה לקהילה", 
      description: "יצירת חומרים נגישים ומעוררי מחשבה לכלל תושבי עכו.",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
      alt: "מרצה מול קהל המדגים עקרונות נגישות"
    },
    { 
      title: "שיתוף סיפורים וחוויות בגובה העיניים", 
      description: "סיפורים אישיים שמחברים אותנו למציאות של אחרים.",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04844?auto=format&fit=crop&w=800&q=80",
      alt: "אנשים משתפים סיפורים בקהילה"
    },
    { 
      title: "פודקאסטים ושיחות עומק", 
      description: "שיחות כנות עם אנשים שחיים ונושמים נגישות ביום-יום.",
      image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=800&q=80",
      alt: "מיקרופון באולפן הקלטות"
    },
    { 
      title: "שיתופי פעולה מקומיים בעכו", 
      description: "עבודה צמודה עם העירייה והמתנ\"סים לשיפור הנגישות הפיזית והחברתית.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      alt: "צוות עבודה מקומי בעכו"
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-blue-950 text-white py-24 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80" 
            alt="קבוצת אנשים מחייכת בקהילה" 
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-blue-900/90 to-blue-950/95"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl lg:text-8xl font-black mb-10 leading-[1.1] tracking-tight">
              מיזם יחד - <br/> קהילה נגישה עכו
            </h1>
            <p className="text-2xl lg:text-4xl text-sky-50 mb-14 font-bold leading-relaxed max-w-5xl mx-auto">
              תכנית של משרד הרווחה ורשת המתנ"סים לקידום מודעות, נגישות וזכויות לאנשים עם מוגבלויות בעכו.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-8 justify-center">
              <button 
                onClick={() => navigateTo('podcast')}
                className="px-14 py-6 bg-[#0088cc] text-white font-black rounded-2xl shadow-2xl hover:bg-sky-500 transform hover:-translate-y-1 transition-all focus-ring text-2xl active:scale-95"
              >
                להאזנה לפודקאסט
              </button>
              <button 
                onClick={() => navigateTo('rights')}
                className="px-14 py-6 bg-white text-blue-900 font-black rounded-2xl shadow-2xl hover:bg-slate-50 transform hover:-translate-y-1 transition-all focus-ring text-2xl active:scale-95"
              >
                למידע על זכויות ונגישות
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-blue-950">מה המטרה שלנו?</h2>
            <button 
              onClick={() => {
                triggerTip();
                navigateTo('accessibility');
              }}
              className="text-5xl hover:scale-110 transition-transform focus-ring rounded-full p-2"
              title="לחצו למידע על נגישות"
            >
              <span role="img" aria-label="נגישות">♿</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-blue-950 hover:text-white transition-all duration-300 hover:shadow-2xl">
                <div 
                  className="text-5xl mb-6 transform group-hover:scale-110 transition-transform"
                  role="img"
                  aria-label={goal.label}
                >
                  {goal.icon}
                </div>
                <p className="text-xl font-bold leading-relaxed">{goal.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black text-blue-950 mb-6">הפעילות שלנו</h2>
            <div className="w-24 h-2 bg-sky-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {activities.map((act, index) => (
              <article key={index} className="bg-white rounded-[2.5rem] shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-500 group flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={act.image} 
                    alt={act.alt} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-10 flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-900 group-hover:text-white transition-colors shadow-inner">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-blue-950 mb-4">{act.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{act.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <h3 className="text-xl font-black text-slate-400 uppercase tracking-widest">השותפים שלנו לדרך</h3>
        </div>
        <PartnerMarquee />
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-400 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-10 leading-tight">
            רוצים לשתף סיפור, לשאול שאלה או להציע שיתוף פעולה?
          </h2>
          <button 
            onClick={() => navigateTo('contact')}
            className="px-16 py-6 bg-sky-500 text-white font-black rounded-2xl shadow-2xl hover:bg-sky-400 transform hover:-translate-y-1 transition-all focus-ring text-2xl active:scale-95"
          >
            צרו קשר איתנו
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;