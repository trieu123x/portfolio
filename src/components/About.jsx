import { useLang } from '../i18n/LanguageContext';

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="accent">#</span>{a.title}
          </h2>
          <div className="section__line" />
        </div>

        {/* Bio + Code Card */}
        <div className="about__grid">

          <div className="about__text">
            <p className="about__para">
              {a.para1}{' '}
              <span className="accent">Đinh Hải Triều</span>{a.para1b}{' '}
              <strong>{a.para1c}</strong>
              {a.para1d}
            </p>
            <p className="about__para">
              {a.para2a}{' '}
              <span className="accent">{a.genAI}</span> {a.para2b}{' '}
              <span className="accent">{a.cv}</span>
              {a.para2c}
            </p>
            <p className="about__para">
              {a.para3}{' '}
              <span className="accent">{a.aiIntern}</span>{' '}
              {a.para3b}
            </p>
            <a href="#contact" className="btn btn--primary" id="aboutContactBtn">
              {a.readMore} <span className="accent">~~&gt;</span>
            </a>
          </div>

          <div className="about__illustration">
            <div className="about-avatar">
              <div className="about-avatar__code">
                <span className="mono accent">dev</span>
                <span className="mono"> = &#123;</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="mono accent">"name"</span>
                <span className="mono">: </span>
                <span className="mono">"Hải Triều",</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="mono accent">"role"</span>
                <span className="mono">: </span>
                <span className="mono">"AI Intern",</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="mono accent">"gpa"</span>
                <span className="mono">: </span>
                <span className="mono">3.51,</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="mono accent">"school"</span>
                <span className="mono">: </span>
                <span className="mono">"PTIT",</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="mono accent">"focus"</span>
                <span className="mono">: [</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="mono">"GenAI",</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="mono">"RAG",</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="mono">"CV"</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="mono">]</span>
                <br />
                <span className="mono">&#125;</span>
              </div>
            </div>
            <div className="dot-grid dot-grid--about" aria-hidden="true" />
          </div>

        </div>

        {/* Fun Facts */}
        <div className="fun-facts">
          <h3 className="section__title" style={{ marginTop: '3rem' }}>
            <span className="accent">#</span>{a.funFacts}
          </h3>
          <div className="fun-facts__grid">
            {a.facts.map((fact, i) => (
              <div className="fun-fact-tag" key={i} id={`fact-${i + 1}`}>
                {fact}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
