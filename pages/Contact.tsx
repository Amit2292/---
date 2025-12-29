import React, { useState, useRef } from 'react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    email: '',
    subject: 'זכויות',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const statusRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Focus status message for screen readers
      setTimeout(() => statusRef.current?.focus(), 100);
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-4 animate-fade-in">
        <div 
          ref={statusRef}
          tabIndex={-1}
          className="max-w-md w-full bg-white p-12 rounded-[3rem] shadow-2xl text-center border border-sky-100 outline-none"
          role="status"
        >
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-5xl mx-auto mb-8 animate-bounce" aria-hidden="true">
            ✓
          </div>
          <h2 className="text-4xl font-black text-blue-900 mb-4">שלחנו!</h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed">
            תודה רבה על הפנייה. אנחנו במיזם יחד נקרא את הכל ונחזור אליך הכי מהר שאפשר.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-sky-600 font-black hover:text-blue-900 transition-colors text-lg underline underline-offset-8 focus-ring p-2 rounded-lg"
            aria-label="לחצו כאן כדי לשלוח הודעה נוספת"
          >
            שלח הודעה נוספת
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen animate-fade-in pb-20">
      {/* Hero Header */}
      <section className="bg-blue-900 text-white py-24 px-4 text-center relative overflow-hidden mb-12" aria-labelledby="contact-title">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1600&q=80" 
            alt="קבוצת אנשים מגוונת יושבים בשיחה קהילתית נינוחה ומחייכת, המסמלת את האוזן הקשבת והפתיחות של המיזם לקהל." 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 to-blue-900/90"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 id="contact-title" className="text-4xl lg:text-6xl font-black mb-6 drop-shadow-md">אנחנו כאן בשבילך</h1>
          <p className="text-xl md:text-2xl text-sky-100 font-medium max-w-2xl mx-auto leading-relaxed">
            יש לך שאלה? סיפור לשתף? או רעיון לשיתוף פעולה? נשמח לשמוע ממך.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* Contact Info Sidebar */}
          <section className="lg:col-span-2 space-y-8" aria-label="פרטי התקשרות">
            <div className="bg-blue-900 text-white p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden group">
              <div className="absolute top-[-20px] left-[-20px] w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" aria-hidden="true"></div>
              <h2 className="text-3xl font-black mb-8 relative z-10">בואו נדבר</h2>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-2xl flex items-center justify-center text-2xl border border-sky-400/20" aria-hidden="true">📍</div>
                  <div>
                    <h3 className="font-black text-sky-300 mb-1">איפה אנחנו?</h3>
                    <p className="text-lg">רשת המתנ"סים עכו, רחוב התמר 2, עכו</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-2xl flex items-center justify-center text-2xl border border-sky-400/20" aria-hidden="true">📧</div>
                  <div>
                    <h3 className="font-black text-sky-300 mb-1">כתבו לנו</h3>
                    <p className="text-lg font-medium">yachad.akko@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-2xl flex items-center justify-center text-2xl border border-sky-400/20" aria-hidden="true">💬</div>
                  <div>
                    <h3 className="font-black text-sky-300 mb-1">הצטרפו לקהילה</h3>
                    <p className="text-lg mb-4">חפשו אותנו בפייסבוק - "קהילה נגישה עכו"</p>
                    <a 
                      href="https://www.facebook.com/groups/346180193063148/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2 bg-white text-blue-900 rounded-full font-black text-sm hover:bg-sky-50 transition-colors shadow-lg focus-ring"
                      aria-label="לדף הפייסבוק הרשמי של הקהילה - פתיחה בחלון חדש"
                    >
                      <span>לדף הפייסבוק</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-sky-100 p-8 rounded-[2.5rem] border border-sky-200" aria-hidden="true">
              <p className="text-sky-900 font-bold text-center leading-relaxed italic">
                "כל שינוי גדול מתחיל בשיחה קטנה בגובה העיניים."
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="lg:col-span-3" aria-labelledby="form-title">
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl border border-slate-100">
              <h2 id="form-title" className="sr-only">טופס יצירת קשר</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label htmlFor="fullName" className="block text-sm font-black text-slate-500 mb-3 group-focus-within:text-blue-900 transition-colors">שם מלא *</label>
                    <input
                      required
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      autoComplete="name"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-sky-400 focus:ring-0 outline-none transition-all text-lg font-medium focus-ring"
                      placeholder="איך קוראים לך?"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="block text-sm font-black text-slate-500 mb-3 group-focus-within:text-blue-900 transition-colors">טלפון *</label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-sky-400 focus:ring-0 outline-none transition-all text-lg font-medium focus-ring"
                      placeholder="05X-XXXXXXX"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="email" className="block text-sm font-black text-slate-500 mb-3 group-focus-within:text-blue-900 transition-colors">אימייל (לא חובה)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-sky-400 focus:ring-0 outline-none transition-all text-lg font-medium focus-ring"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="group">
                  <label htmlFor="subject" className="block text-sm font-black text-slate-500 mb-3 group-focus-within:text-blue-900 transition-colors">מה נושא הפנייה?</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-sky-400 focus:ring-0 outline-none transition-all text-lg font-bold appearance-none cursor-pointer focus-ring"
                  >
                    <option value="זכויות">בירור זכויות</option>
                    <option value="נגישות בעכו">נגישות במרחב הציבורי בעכו</option>
                    <option value="שיתוף סיפור">רוצה לשתף סיפור לפודקאסט</option>
                    <option value="שיתוף פעולה">שיתוף פעולה או התנדבות</option>
                    <option value="אחר">נושא אחר</option>
                  </select>
                </div>

                <div className="group">
                  <label htmlFor="message" className="block text-sm font-black text-slate-500 mb-3 group-focus-within:text-blue-900 transition-colors">ההודעה שלך *</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-50 bg-slate-50 focus:bg-white focus:border-sky-400 focus:ring-0 outline-none transition-all text-lg font-medium resize-none focus-ring"
                    placeholder="נשמח לשמוע ממך הכל..."
                  ></textarea>
                </div>

                <button
                  disabled={loading}
                  type="submit"
                  className={`w-full py-6 bg-blue-900 text-white text-xl font-black rounded-2xl shadow-xl hover:bg-blue-800 transform hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 focus-ring ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>שולח את ההודעה...</span>
                    </>
                  ) : (
                    <>
                      <span>שלח פנייה</span>
                      <span className="text-2xl" role="img" aria-label="סמל מטוס נייר המייצג שליחה">🚀</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;