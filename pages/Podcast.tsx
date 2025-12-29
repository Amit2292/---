import React from 'react';
import { Page, Episode } from '../types';

interface PodcastProps {
  navigateTo: (page: Page) => void;
}

const AudioWave = ({ className = "", color = "currentColor", count = 30 }) => (
  <div className={`flex items-center justify-center gap-[4px] h-16 ${className}`} aria-hidden="true">
    {[...Array(count)].map((_, i) => (
      <div
        key={i}
        className="w-[3px] rounded-full animate-audio-wave"
        style={{
          backgroundColor: color,
          height: '100%',
          animationDelay: `${i * 0.1}s`,
          animationDuration: `${1.2 + Math.random() * 0.8}s`
        }}
      />
    ))}
  </div>
);

const Podcast: React.FC<PodcastProps> = ({ navigateTo }) => {
  const episodes: Episode[] = [
    {
      id: '1',
      title: "פרק 1: לפגוש מוגבלות באמצע החיים",
      summary: "שיחה כנה על ההתמודדות הראשונית עם שינוי פתאומי ביכולות הפיזיות, וההשפעה על המעגלים החברתיים והמשפחתיים.",
      tags: ["שינוי", "חוסן", "סיפור אישי"],
      spotifyUrl: "#",
      youtubeUrl: "#"
    },
    {
      id: '2',
      title: "פרק 2: נגישות זה לא רק רמפה",
      summary: "על נגישות חברתית, הבנה קהילתית ואיך יוצרים מרחב שמרגיש מזמין לכולם באמת, מעבר לתקנים היבשים.",
      tags: ["נגישות", "חברה", "קהילה"],
      spotifyUrl: "#",
      youtubeUrl: "#"
    },
    {
      id: '3',
      title: "פרק 3: זכויות בגובה העיניים",
      summary: "כלים פרקטיים ומידע על זכויות שחשוב להכיר כדי לקדם עצמאות והשתלבות מלאה במרחב הציבורי.",
      tags: ["זכויות", "מידע", "עצמאות"],
      spotifyUrl: "#",
      youtubeUrl: "#"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen animate-fade-in relative">
      <section className="bg-blue-900 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1600&q=80" 
            alt="מיקרופון מקצועי באולפן הקלטות" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-blue-900/80 to-sky-900/60"></div>
        </div>
        
        {/* Subtle Audio Wave Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-10 pointer-events-none scale-150 overflow-hidden">
          <AudioWave color="white" count={60} className="h-32" />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            הפודקאסט של מיזם יחד
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 font-medium leading-relaxed max-w-2xl mx-auto">
            שיחות בגובה העיניים עם אנשים שפגשו מוגבלות באמצע החיים, על שינוי, נגישות, זכויות ושייכות.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-black text-blue-950 border-r-8 border-sky-500 pr-5">פרקים אחרונים</h2>
        </div>
        
        <div className="grid gap-10">
          {episodes.map((ep) => (
            <article 
              key={ep.id} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row gap-8 p-8 items-stretch group"
            >
              <div 
                className="flex-shrink-0 w-full md:w-32 bg-blue-50 rounded-2xl flex flex-col items-center justify-center p-4 border border-blue-100 group-hover:bg-blue-900 group-hover:text-white transition-colors"
                aria-label={`פרק מספר ${ep.id}`}
              >
                <span className="text-sm font-bold opacity-60 uppercase mb-1" aria-hidden="true">פרק</span>
                <span className="text-5xl font-black" aria-hidden="true">{ep.id}</span>
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black text-blue-950 mb-4 group-hover:text-sky-600 transition-colors">{ep.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed mb-6">{ep.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-8" aria-label="תגיות נושא">
                    {ep.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 text-xs font-black rounded-full">#{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-50">
                  <a href={ep.spotifyUrl} className="flex items-center gap-3 px-8 py-3 bg-[#1DB954] text-white rounded-xl font-black hover:scale-105 transition-all shadow-md" aria-label={`האזנה לפרק ${ep.id} בספוטיפיי`}>
                    <span>Spotify</span>
                  </a>
                  <a href={ep.youtubeUrl} className="flex items-center gap-3 px-8 py-3 bg-[#FF0000] text-white rounded-xl font-black hover:scale-105 transition-all shadow-md" aria-label={`צפייה בפרק ${ep.id} ביוטיוב`}>
                    <span>YouTube</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24 bg-white p-12 rounded-[3rem] text-center border-2 border-dashed border-sky-200 shadow-sm relative overflow-hidden">
          {/* Secondary Subtle Audio Wave */}
          <div className="absolute bottom-0 left-0 w-full opacity-[0.03] pointer-events-none scale-y-150">
            <AudioWave color="#0369a1" count={80} className="h-24" />
          </div>

          <div className="text-5xl mb-6" role="img" aria-label="סמל מיקרופון">🎙️</div>
          <h2 className="text-3xl font-black text-blue-950 mb-6">רוצים לשתף סיפור או להציע נושא לפרק?</h2>
          <p className="text-slate-600 text-lg mb-10 max-w-lg mx-auto">אנחנו תמיד מחפשים קולות חדשים וסיפורים משמעותיים שיכולים להשפיע על הקהילה שלנו בעכו.</p>
          <button 
            onClick={() => navigateTo('contact')}
            className="px-12 py-5 bg-blue-900 text-white font-black rounded-2xl hover:bg-blue-800 transform hover:scale-105 transition-all focus-ring shadow-xl relative z-10"
          >
            צרו קשר להצעה
          </button>
        </div>
      </div>
    </div>
  );
};

export default Podcast;