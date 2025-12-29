import React from 'react';
import PartnerMarquee from '../components/PartnerMarquee';

const About: React.FC = () => {
  const principles = [
    { title: "כבוד ושוויון", icon: "🤝", label: "סמל לחיצת ידיים המייצג כבוד הדדי ושוויון בין כל בני האדם", description: "אנחנו מאמינים שכל אדם זכאי ליחס מכבד ושווה, ללא קשר ליכולותיו הפיזיות או החושיות." },
    { title: "נגישות כזכות", icon: "♿", label: "סמל הנגישות הבינלאומי המייצג חופש תנועה ועצמאות", description: "נגישות היא לא חסד, היא זכות בסיסית המאפשרת עצמאות ושילוב מלא בחיי העיר." },
    { title: "קהילה מכילה", icon: "🏘️", label: "סמל בתי מגורים המייצג קהילה עירונית מאוחדת ומכילה", description: "בניית קהילה בעכו שרואה את כולם, מקשיבה לכולם ומחבקת את המגוון האנושי." },
    { title: "מידע נגיש", icon: "ℹ️", label: "סמל מידע המייצג את הזכות לקבל שירות ומידע ברור ופשוט", description: "הנגשת הידע והזכויות בצורה פשוטה וברורה היא המפתח להעצמה אישית וחברתית." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen animate-fade-in pb-20">
      {/* Hero Header */}
      <section className="bg-blue-900 text-white py-32 px-4 text-center relative overflow-hidden" aria-labelledby="about-title">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?auto=format&fit=crop&w=1600&q=80" 
            alt="קבוצת חברים מגוונת יושבים סביב שולחן עץ גדול בבית קפה קהילתי חם, משוחחים וצוחקים יחד באווירה של קרבה." 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/60 to-blue-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1 bg-sky-500/30 text-sky-200 rounded-full text-sm font-bold mb-6 border border-sky-400/20 uppercase tracking-widest backdrop-blur-sm" aria-hidden="true">
            הסיפור שלנו
          </div>
          <h1 id="about-title" className="text-5xl md:text-7xl font-black mb-6 drop-shadow-xl">מי אנחנו</h1>
          <p className="text-xl md:text-2xl text-sky-50 font-medium max-w-2xl mx-auto leading-relaxed opacity-90">
            יוצרים יחד מציאות נגישה, שוויונית ומחברת בעיר עכו.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 -mt-16 relative z-20">
        {/* Main Story Card */}
        <section className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-slate-100 mb-20 text-right" aria-labelledby="vision-title">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/3">
              <h2 id="vision-title" className="text-3xl font-black text-blue-950 mb-8 border-r-8 border-sky-500 pr-6">החזון שמאחורי המיזם</h2>
              <p className="text-xl text-slate-700 leading-relaxed mb-6">
                מיזם יחד - קהילה נגישה עכו הוא פרי שיתוף פעולה הדוק בין <span className="font-bold text-blue-900">משרד הרווחה והביטחון החברתי</span> לבין <span className="font-bold text-blue-900">רשת המתנ"סים עכו</span>.
              </p>
              <p className="text-xl text-slate-700 leading-relaxed">
                אנחנו פועלים בתוך הקהילה כדי להפוך את עכו לעיר שבה המוגבלות אינה מהווה מחסום להשתלבות. אנחנו מעלים מודעות, נלחמים בסטיגמות, ומספקים ידע מקצועי ונגיש לכל תושב ותושבת שפגשו מוגבלות - בין אם באופן אישי ובין אם דרך בן משפחה.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center" aria-hidden="true">
              <div className="w-48 h-48 bg-sky-50 rounded-full flex items-center justify-center text-8xl shadow-inner border-4 border-white">
                🤝
              </div>
            </div>
          </div>
        </section>

        {/* Principles Grid */}
        <section className="mb-24" aria-labelledby="principles-title">
          <div className="text-center mb-16">
            <h2 id="principles-title" className="text-3xl md:text-4xl font-black text-blue-950 mb-4">הערכים שמובילים אותנו</h2>
            <div className="w-20 h-2 bg-sky-500 mx-auto rounded-full" aria-hidden="true"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p, index) => (
              <div key={index} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-start gap-6">
                  <span 
                    className="text-5xl bg-slate-50 w-20 h-20 flex items-center justify-center rounded-2xl group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300 shadow-inner" 
                    role="img" 
                    aria-label={p.label}
                  >
                    {p.icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black text-blue-950 mb-3">{p.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mt-24 bg-white p-12 rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden" aria-labelledby="about-partners-title">
          <h3 id="about-partners-title" className="text-2xl font-black text-blue-900 mb-12 text-center uppercase tracking-widest">השותפים שלנו לדרך</h3>
          <PartnerMarquee />
        </section>
      </div>
    </div>
  );
};

export default About;