import './App.css';
import { LanguageProvider } from './i18n/LanguageContext';
import Header        from './components/Header';
import SocialSidebar from './components/SocialSidebar';
import Hero          from './components/Hero';
import QuoteBanner  from './components/QuoteBanner';
import Experience   from './components/Experience';
import Projects     from './components/Projects';
import Skills       from './components/Skills';
import About        from './components/About';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <Header />
      <SocialSidebar />
      <main>
        <Hero />
        <QuoteBanner />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
