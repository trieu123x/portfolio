import { useLang } from '../i18n/LanguageContext';

export default function QuoteBanner() {
  const { t } = useLang();
  const q = t.quote;

  return (
    <div className="quote-banner">
      <div className="container">
        <blockquote className="quote mono">
          <span className="accent">"</span>
          {q.text}
          <span className="accent">"</span>
          <cite> {q.author}</cite>
        </blockquote>
      </div>
    </div>
  );
}
