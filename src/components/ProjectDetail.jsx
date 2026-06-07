import { useState, useEffect, useCallback } from 'react';
import { useLang } from '../i18n/LanguageContext';

/* ── Chevron icons ── */
const ChevLeft  = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>;
const ChevRight = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>;
const CloseIcon = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>;
const GitHubIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12"/></svg>;
const ExternalIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>;

export default function ProjectDetail({ project, pTrans, onClose }) {
  const { t } = useLang();
  const p = t.projects;
  const [imgIdx, setImgIdx] = useState(0);
  const imgs = project.images || [];
  const detail = project.detail;

  const prev = useCallback(() => setImgIdx(i => (i - 1 + imgs.length) % imgs.length), [imgs.length]);
  const next = useCallback(() => setImgIdx(i => (i + 1) % imgs.length), [imgs.length]);

  /* keyboard navigation */
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, prev, next]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  return (
    <div className="pd-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="pd-modal" onClick={e => e.stopPropagation()}>

        {/* Close */}
        <button className="pd-close" onClick={onClose} aria-label="Close"><CloseIcon /></button>

        {/* ── Image gallery ── */}
        {imgs.length > 0 && (
          <div className="pd-gallery">
            <img
              src={imgs[imgIdx]}
              alt={`${pTrans.title} screenshot ${imgIdx + 1}`}
              className="pd-gallery__img"
            />
            {imgs.length > 1 && (
              <>
                <button className="pd-gallery__nav pd-gallery__nav--prev" onClick={prev} aria-label="Previous image">
                  <ChevLeft />
                </button>
                <button className="pd-gallery__nav pd-gallery__nav--next" onClick={next} aria-label="Next image">
                  <ChevRight />
                </button>
                <div className="pd-gallery__dots">
                  {imgs.map((_, i) => (
                    <button
                      key={i}
                      className={`pd-dot${i === imgIdx ? ' pd-dot--active' : ''}`}
                      onClick={() => setImgIdx(i)}
                      aria-label={`Image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* ── Content ── */}
        <div className="pd-content">

          {/* Header */}
          <div className="pd-header">
            <div>
              <span className="pd-icon">{project.icon}</span>
              <h2 className="pd-title">{pTrans.title}</h2>
              {detail && <p className="pd-role mono">{detail.role}</p>}
            </div>
            <div className="pd-actions">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--primary" id={`pd-live-${project.id}`}>
                  {p.live} <ExternalIcon />
                </a>
              )}
              {project.codeUrl && (
                <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="btn btn--sm btn--ghost" id={`pd-code-${project.id}`}>
                  <GitHubIcon /> GitHub
                </a>
              )}
            </div>
          </div>

          {/* Tech tags */}
          <div className="pd-tech">
            {project.tech.map(t => (
              <span key={t} className="pd-tech-tag mono">{t}</span>
            ))}
          </div>

          {/* Description */}
          <p className="pd-desc">{pTrans.desc}</p>

          {/* Highlights */}
          {detail?.highlights && (
            <div className="pd-section">
              <h3 className="pd-section__title">Key Highlights</h3>
              <ul className="pd-highlights">
                {detail.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Stack breakdown */}
          {detail?.stack && (
            <div className="pd-section">
              <h3 className="pd-section__title">Tech Stack</h3>
              <div className="pd-stack-grid">
                {Object.entries(detail.stack).map(([cat, items]) => (
                  <div key={cat} className="pd-stack-group">
                    <span className="pd-stack-cat mono accent">{cat}</span>
                    <div className="pd-stack-items">
                      {items.map(item => (
                        <span key={item} className="pd-tech-tag mono">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
