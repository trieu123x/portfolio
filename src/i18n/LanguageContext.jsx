import { createContext, useContext, useState } from 'react';
import translations from './translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const t = translations[lang];
  const toggleLang = () => setLang(prev => (prev === 'en' ? 'vi' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Custom hook – dùng trong mọi component */
export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>');
  return ctx;
}
