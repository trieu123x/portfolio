import { useState, useEffect } from 'react';
import { useLang } from '../i18n/LanguageContext';

const NAV_HREF = ['#home', '#projects', '#skills', '#about', '#contact'];

export default function Header() {
  const { lang, t, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = NAV_HREF.map((href, i) => ({
    href,
    label: Object.values(t.nav)[i],
  }));

  /* header shadow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* active section via IntersectionObserver */
  useEffect(() => {
    const ids = ['home', 'projects', 'skills', 'about', 'contact'];
    const observers = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  /* lock body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`} id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={closeMenu}>
          <span className="accent">#</span>triều
        </a>

        {/* Desktop nav */}
        <ul className={`nav__list${menuOpen ? ' open' : ''}`}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav__link${active === href.slice(1) ? ' active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}

          {/* Language toggle – inside nav list for mobile */}
          <li className="nav__lang-item">
            <button
              className="lang-toggle"
              id="langToggleBtn"
              onClick={toggleLang}
              aria-label="Toggle language"
            >
              <span className={lang === 'en' ? 'lang-toggle__active' : ''}>EN</span>
              <span className="lang-toggle__sep">/</span>
              <span className={lang === 'vi' ? 'lang-toggle__active' : ''}>VI</span>
            </button>
          </li>
        </ul>

        {/* Burger */}
        <button
          className={`nav__burger${menuOpen ? ' open' : ''}`}
          id="navBurger"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(v => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}
