import { useLang } from '../i18n/LanguageContext';

/* ── Single experience entry ── */
function ExperienceItem({ item, idx }) {
  const { company, role, team, period, location, summary, bullets, tech } = item;

  return (
    <article className="exp-item" id={`exp-${idx + 1}`}>
      <span className="exp-item__dot" aria-hidden="true" />

      <div className="exp-card">
        <div className="exp-card__head">
          <div>
            <h3 className="exp-card__role">
              {role} <span className="accent">@{company}</span>
            </h3>
            <p className="exp-card__team mono">{team} · {location}</p>
          </div>
          <span className="exp-card__period mono">{period}</span>
        </div>

        <p className="exp-card__summary">{summary}</p>

        <ul className="exp-card__bullets">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        <div className="exp-card__tech">
          {tech.map(tag => (
            <span key={tag} className="pd-tech-tag mono">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ── Experience section ── */
export default function Experience() {
  const { t } = useLang();
  const e = t.experience;

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="accent">#</span>{e.title}
          </h2>
          <div className="section__line" />
        </div>

        <div className="exp-timeline">
          {e.items.map((item, i) => (
            <ExperienceItem key={`${item.company}-${item.period}`} item={item} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
