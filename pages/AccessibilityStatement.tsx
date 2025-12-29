
import React from 'react';

const AccessibilityStatement: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-4xl" role="img" aria-label="סמל נגישות">♿</span>
          <h1 className="text-4xl font-bold text-blue-900">הצהרת נגישות</h1>
        </div>
        
        <div className="prose prose-slate prose-lg max-w-none text-slate-700 leading-relaxed space-y-6">
          <p>
            מיזם יחד - קהילה נגישה עכו פועל כדי להנגיש מידע ושירותים לציבור. האתר נבנה מתוך מטרה לאפשר שימוש נוח וברור לכלל המשתמשים, כולל אנשים עם מוגבלויות.
          </p>
          
          <p>
            האתר הונגש בהתאם לתקנות שוויון זכויות לאנשים עם מוגבלויות (התאמות נגישות לשירות), התשע"ג-2013, וברמת הנגישות הנדרשת. אנו שואפים לשמור על סטנדרטים גבוהים של נגישות בכל דפי האתר.
          </p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">נתקלתם בבעיה?</h2>
          <p>
            אם נתקלתם בקושי בגלישה או שיש לכם הצעה לשיפור נגישות האתר, נשמח שתפנו אלינו דרך עמוד "צרו קשר". אנו רואים בנגישות תהליך מתמשך ומחויבים לשיפור מתמיד.
          </p>

          <div className="mt-12 pt-8 border-t border-slate-100 italic text-slate-500">
            <p>הצהרה זו עודכנה לאחרונה ב-2024.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityStatement;
