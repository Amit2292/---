
import React from 'react';

const PartnerMarquee: React.FC = () => {
  // We represent the logos using high-quality UI recreations of the images uploaded by the user
  const partners = [
    { 
      id: 'akko',
      name: "עיריית עכו", 
      tagline: "חצי אי, עולם שלם",
      description: "לוגו עיריית עכו - פסיפס צבעוני וטקסט גיאומטרי"
    },
    { 
      id: 'yachad',
      name: "מיזם יחד", 
      tagline: "קהילה נגישה עכו",
      description: "לוגו מיזם יחד - כיסא גלגלים משולב עם קו הרקיע של עכו"
    },
    { 
      id: 'welfare',
      name: "משרד הרווחה", 
      tagline: "והביטחון החברתי",
      description: "לוגו משרד הרווחה - דמויות בקהילה מחובקות"
    }
  ];

  // Repeat items for seamless infinite scroll (doubled for the animation logic)
  const scrollItems = [...partners, ...partners, ...partners, ...partners, ...partners, ...partners];

  const renderLogo = (partner: typeof partners[0]) => {
    switch (partner.id) {
      case 'akko':
        return (
          <div className="flex flex-col items-center gap-2 group/logo">
            <div className="w-24 h-20 grid grid-cols-4 grid-rows-2 gap-0.5 opacity-90 group-hover/logo:opacity-100 transition-all">
              {/* Mosaic recreation of Akko Logo */}
              <div className="bg-[#f2c94c] rounded-tl-xl"></div>
              <div className="bg-[#f2994a]"></div>
              <div className="bg-[#56ccf2] rounded-tr-xl"></div>
              <div className="bg-[#2d9cdb]"></div>
              <div className="bg-[#eb5757] rounded-bl-xl"></div>
              <div className="bg-[#f2994a]"></div>
              <div className="bg-[#2f80ed]"></div>
              <div className="bg-[#27ae60] rounded-br-xl"></div>
            </div>
            <div className="text-center">
              <div className="font-extrabold text-[#2d4059] text-xl leading-none">עכו • AKKO</div>
              <div className="text-[11px] text-[#27ae60] font-black tracking-tighter mt-1">חצי אי, עולם שלם</div>
            </div>
          </div>
        );
      case 'yachad':
        return (
          <div className="flex flex-col items-center gap-1 group/logo">
            <div className="flex items-center gap-4 h-24">
              {/* Wheelchair + Skyline recreation */}
              <div className="relative w-20 h-20 flex items-center justify-center">
                <div className="absolute inset-0 border-[6px] border-teal-500 rounded-full border-t-transparent -rotate-45"></div>
                <div className="text-4xl text-teal-600 font-bold z-10">יחד</div>
              </div>
              <div className="h-full w-px bg-slate-200"></div>
              <div className="flex flex-col items-start">
                <span className="text-3xl font-black text-slate-800 leading-none">מיזם יחד</span>
                <span className="text-sm font-bold text-teal-600 mt-1">קהילה נגישה עכו</span>
              </div>
              {/* Lighthouse icon hint */}
              <div className="text-4xl opacity-20 grayscale group-hover/logo:grayscale-0 transition-all">🏰</div>
            </div>
          </div>
        );
      case 'welfare':
        return (
          <div className="flex flex-col items-center gap-2 group/logo">
            <div className="flex items-end justify-center gap-1.5 h-16 mb-2">
              <div className="w-5 h-10 bg-orange-400 rounded-t-full shadow-sm transform group-hover/logo:-translate-y-1 transition-transform"></div>
              <div className="w-5 h-14 bg-red-500 rounded-t-full shadow-md transform group-hover/logo:-translate-y-2 transition-transform"></div>
              <div className="w-5 h-11 bg-sky-500 rounded-t-full shadow-sm transform group-hover/logo:-translate-y-1 transition-transform"></div>
            </div>
            <div className="text-center border-t border-slate-100 pt-2 px-4">
              <div className="font-black text-slate-700 text-lg leading-tight">משרד הרווחה</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">והביטחון החברתי</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-white py-20 border-y border-slate-100 overflow-hidden relative marquee-container cursor-default">
      {/* Dynamic Background label */}
      <div className="absolute top-4 right-10 text-[10px] font-black text-slate-100 uppercase tracking-widest select-none">
        Collaborative Ecosystem • השותפים שלנו
      </div>

      {/* Soft fade masks for the edges */}
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      
      <div className="animate-marquee flex gap-32 md:gap-48 items-center">
        {scrollItems.map((partner, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 transition-all duration-700 hover:brightness-110"
            aria-label={partner.description}
          >
            {renderLogo(partner)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerMarquee;
