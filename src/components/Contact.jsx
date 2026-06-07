import { useLang } from '../i18n/LanguageContext';

const CONTACTS = [
  {
    id: 'email',
    icon: '✉',
    label: 'trieudh14@gmail.com',
    href: 'mailto:trieudh14@gmail.com',
  },
  {
    id: 'phone',
    icon: '☎',
    label: '0878883316',
    href: 'tel:0878883316',
  },
  {
    id: 'github',
    icon: '⌥',
    label: 'github.com/trieu123x',
    href: 'https://github.com/trieu123x',
    external: true,
  },
  {
    id: 'facebook',
    icon: '◈',
    label: 'facebook.com/unknown9029',
    href: 'https://www.facebook.com/unknown9029',
    external: true,
  },
  {
    id: 'address',
    icon: '◎',
    label: 'Bắc Từ Liêm, Hà Nội',
    href: null,
  },
];

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">
            <span className="accent">#</span>{c.title}
          </h2>
          <div className="section__line" />
        </div>

        <div className="contact__grid">
          <p className="contact__intro">
            {c.intro1}
            <br />
            {c.intro2}
          </p>

          <div className="contact__card" id="contactCard">
            <h3 className="contact__card-title mono">{c.cardTitle}</h3>
            <ul className="contact__list">
              {CONTACTS.map(({ id, icon, label, href, external }) => (
                <li className="contact__item" key={id} id={`contact-${id}`}>
                  <span className="contact__icon">{icon}</span>
                  {href ? (
                    <a
                      href={href}
                      className="contact__link"
                      {...(external
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="contact__link">{label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
