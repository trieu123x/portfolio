import { useEffect, useRef } from 'react';
import { useLang } from '../i18n/LanguageContext';

export default function Hero() {
  const { t } = useLang();
  const titleRef = useRef(null);
  const rolesRef = useRef(t.hero.roles);

  /* Keep roles ref in sync with language */
  rolesRef.current = t.hero.roles;

  /* Typing effect – restarts whenever language changes */
  useEffect(() => {
    let ri = 0, ci = 0, deleting = false;
    let timer;

    function tick() {
      const el = titleRef.current;
      if (!el) return;
      const roles   = rolesRef.current;
      const current = roles[ri % roles.length];

      if (!deleting) {
        el.textContent = current.slice(0, ci + 1);
        ci++;
        if (ci === current.length) {
          deleting = true;
          timer = setTimeout(tick, 1800);
          return;
        }
      } else {
        el.textContent = current.slice(0, ci - 1);
        ci--;
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
        }
      }
      timer = setTimeout(tick, deleting ? 50 : 95);
    }

    /* Reset to first char on language switch */
    if (titleRef.current) titleRef.current.textContent = '';
    ri = 0; ci = 0; deleting = false;
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [t]); // re-run on language change

  const h = t.hero;
  const workingLines = h.workingOn.split('\n');

  return (
    <section className="hero section" id="home">
      <div className="container hero__grid flex justify-between items-center">

        {/* ── Left: Text ── */}
        <div className="hero__text">
          <p className="hero__greeting">
            Đinh Hải Triều <span className="accent">{h.greeting}</span>
          </p>

          <h1 className="hero__title">
            <span ref={titleRef}>{h.roles[0]}</span>
            <span className="cursor">|</span>
          </h1>

          <p className="hero__desc">
            {h.desc1}<br />
            {h.desc2}
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary" id="heroContactBtn">
              {h.contactBtn}
            </a>
            <a
              href="https://github.com/trieu123x"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
              id="heroGithubBtn"
            >
              {h.githubBtn} <span className="accent">~~&gt;</span>
            </a>
          </div>

          <div className="hero__status">
            <span className="status-dot" />
            <span className="mono">{h.status}</span>
          </div>
        </div>

        {/* ── Right: Illustration ── */}
        <div className="hero__illustration" aria-hidden="true">
          <div className="illustration-card">
            <div className="avatar-body">
              <div className="avatar-head" />
              <div className="avatar-torso">
                <span className="avatar-code">&lt;AI/&gt;</span>
              </div>
            </div>
            <div className="illustration-tag mono">
              [ {workingLines[0]}<br />
              &nbsp;&nbsp;{workingLines[1]} ]
            </div>
          </div>
          <div className="dot-grid dot-grid--hero" />
          <div className="outline-square outline-square--hero-1" />
          <div className="outline-square outline-square--hero-2" />
        </div>

      </div>
    </section>
  );
}
