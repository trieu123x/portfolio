import { useState } from 'react';
import projects from '../data/projects';
import { useLang } from '../i18n/LanguageContext';
import ProjectDetail from './ProjectDetail';

/* ── Single project card ── */
function ProjectCard({ project, pTrans, btnLive, btnCode, btnSoon, onOpenDetail }) {
  const { id, tech, icon, liveUrl, codeUrl, wip, images } = project;
  const { title, desc } = pTrans;
  const thumb = images?.[0];

  return (
    <article
      className={`project-card${wip ? ' project-card--wip' : ''}`}
      id={`project-${id}`}
    >
      {/* Header bar */}
      <div className="project-card__header">
        <div className="project-card__dots">
          <span /><span /><span />
        </div>

        {/* Thumbnail or fallback art */}
        <div className="project-card__preview">
          {thumb ? (
            <img
              src={thumb}
              alt={title}
              className="project-card__thumb"
              loading="lazy"
            />
          ) : (
            <div className={`project-preview-art project-preview-art--${id}`}>
              <span className="preview-icon">{icon}</span>
              <div className="preview-lines">
                <span /><span /><span />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <div className="project-card__tech mono">
          {tech.join('\u00a0\u00a0')}
        </div>
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__desc">{desc}</p>

        <div className="project-card__actions">
          {/* Detail button — only if project has detail info */}
          {project.detail && !wip && (
            <button
              className="btn btn--sm btn--primary"
              id={`btn-${id}-detail`}
              onClick={() => onOpenDetail(project)}
            >
              Details <span className="accent">|&gt;</span>
            </button>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--sm btn--ghost"
              id={`btn-${id}-live`}
            >
              {btnLive} <span className="accent">|&gt;</span>
            </a>
          )}
          {codeUrl ? (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--sm btn--ghost"
              id={`btn-${id}-code`}
            >
              {btnCode} <span className="accent">&gt;=</span>
            </a>
          ) : (
            !project.detail && !wip && (
              <span className="btn btn--sm btn--ghost disabled">{btnSoon}</span>
            )
          )}
          {wip && (
            <span className="btn btn--sm btn--ghost disabled">{btnSoon}</span>
          )}
        </div>
      </div>
    </article>
  );
}

/* ── Projects section ── */
export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  const [activeProject, setActiveProject] = useState(null);

  /* Find translation by index matching projects array */
  const getTranslation = (idx) => p.items[idx] || { title: projects[idx].title, desc: projects[idx].desc };

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="accent">#</span>{p.title}
          </h2>
          <div className="section__line" />
          <a href="https://github.com/trieu123x" target="_blank" rel="noopener noreferrer" className="section__link mono">
            {p.viewAll} <span className="accent">~~&gt;</span>
          </a>
        </div>

        <div className="projects__grid">
          {projects.map((proj, i) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              pTrans={getTranslation(i)}
              btnLive={p.live}
              btnCode={p.code}
              btnSoon={p.comingSoon}
              onOpenDetail={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {activeProject && (
        <ProjectDetail
          project={activeProject}
          pTrans={getTranslation(projects.findIndex(p => p.id === activeProject.id))}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
