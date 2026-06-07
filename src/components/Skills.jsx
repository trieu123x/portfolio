import skills from '../data/skills';
import { useLang } from '../i18n/LanguageContext';

/* ── Single skill group card ── */
function SkillGroup({ group, titleOverride }) {
  const { id, items } = group;
  return (
    <div className="skill-group" id={`skill-${id}`}>
      <h3 className="skill-group__title">{titleOverride || group.title}</h3>
      <ul className="skill-list">
        {items.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/* Mapping between skills data IDs and translation group order */
const GROUP_ORDER = ['ai-ml', 'languages', 'frameworks', 'data-db', 'tools', 'model-eval'];

/* ── Skills section ── */
export default function Skills() {
  const { t } = useLang();
  const s = t.skills;

  /* Build a translated title map by id */
  const titleMap = {
    'ai-ml':        s.groups[0]?.title,
    'languages':    s.groups[1]?.title,
    'frameworks':   s.groups[2]?.title,
    'data-db':      s.groups[3]?.title,
    'tools':        s.groups[4]?.title || skills.find(g => g.id === 'tools')?.title,
    'model-eval':   s.groups[5]?.title || skills.find(g => g.id === 'model-eval')?.title,
  };

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="accent">#</span>{s.title}
          </h2>
          <div className="section__line" />
        </div>

        <div className="skills__layout">
          {/* Decorative illustration */}
          <div className="skills__illustration" aria-hidden="true">
            <div className="dot-grid dot-grid--skills" />
            <div className="outline-square outline-square--skills-1" />
            <div className="outline-square outline-square--skills-2" />
            <div className="outline-square outline-square--skills-1" />
          </div>

          {/* Skill groups grid */}
          <div className="skills__grid">
            {skills.map(group => (
              <SkillGroup
                key={group.id}
                group={group}
                titleOverride={titleMap[group.id]}
              />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
