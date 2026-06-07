/* ── script.js ── */

// ─── NAV: active link on scroll ───────────────────────────
const sections  = document.querySelectorAll('section[id], div[id]');
const navLinks  = document.querySelectorAll('.nav__link');
const header    = document.getElementById('header');
const navBurger = document.getElementById('navBurger');
const navList   = document.getElementById('navList');

window.addEventListener('scroll', () => {
  // scrolled class for header shadow
  header.classList.toggle('scrolled', window.scrollY > 20);

  // active nav link
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.toggle(
      'active',
      link.getAttribute('href') === `#${current}`
    );
  });
});

// ─── BURGER MENU ──────────────────────────────────────────
navBurger.addEventListener('click', () => {
  const open = navBurger.classList.toggle('open');
  navList.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

navList.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navBurger.classList.remove('open');
    navList.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ─── SCROLL REVEAL ────────────────────────────────────────
const revealTargets = document.querySelectorAll(
  '.project-card, .skill-group, .about__para, .fun-fact-tag, .contact__card, .hero__text, .quote'
);

revealTargets.forEach(el => el.setAttribute('data-reveal', ''));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealTargets.forEach(el => observer.observe(el));

// ─── LANGUAGE TOGGLE (stub) ───────────────────────────────
const content = {
  en: {
    greeting:  'Đinh Hải Triều <span class="accent">is a</span>',
    title:     'AI Engineer &amp;<br/>ML Developer',
    desc:      '// Passionate about Generative AI<br />// Building RAG systems &amp; Computer Vision',
    contact:   'Contact me !!',
    status:    'Currently working on AI projects',
  },
  vi: {
    greeting:  'Đinh Hải Triều <span class="accent">là</span>',
    title:     'Kỹ sư AI &amp;<br/>Lập trình viên ML',
    desc:      '// Đam mê với Generative AI<br />// Xây dựng hệ thống RAG &amp; Computer Vision',
    contact:   'Liên hệ tôi !!',
    status:    'Đang làm việc trên các dự án AI',
  }
};

function handleLang(sel) {
  const lang = sel.value;
  const c    = content[lang];
  if (!c) return;

  const greeting = document.querySelector('.hero__greeting');
  const title    = document.querySelector('.hero__title');
  const desc     = document.querySelector('.hero__desc');
  const contactBtn = document.getElementById('heroContactBtn');
  const status   = document.querySelector('.hero__status .mono');

  if (greeting) greeting.innerHTML = c.greeting;
  if (title)    title.innerHTML    = c.title;
  if (desc)     desc.innerHTML     = c.desc;
  if (contactBtn) contactBtn.textContent = c.contact;
  if (status)   status.textContent = c.status;
}

// ─── SMOOTH HIGHLIGHT ON PROJECT CARD HOVER ───────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.setProperty('--glow', '1');
  });
  card.addEventListener('mouseleave', () => {
    card.style.setProperty('--glow', '0');
  });
});

// ─── TYPING EFFECT on hero title ─────────────────────────
(function typingEffect() {
  const roles = [
    'AI Engineer & ML Developer',
    'RAG Systems Builder',
    'Computer Vision Developer',
    'FastAPI & Python Dev',
  ];
  let ri = 0, ci = 0, deleting = false;
  const el = document.querySelector('.hero__title');
  if (!el) return;

  function tick() {
    const current = roles[ri];
    if (!deleting) {
      el.innerHTML = current.slice(0, ci + 1).replace('&', '&amp;') + '<span class="cursor">|</span>';
      ci++;
      if (ci === current.length) { deleting = true; setTimeout(tick, 1800); return; }
    } else {
      el.innerHTML = current.slice(0, ci - 1).replace('&', '&amp;') + '<span class="cursor">|</span>';
      ci--;
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; }
    }
    setTimeout(tick, deleting ? 50 : 95);
  }
  tick();
})();

// cursor blink style
const style = document.createElement('style');
style.textContent = `.cursor { color: var(--accent); animation: blink 1s step-end infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`;
document.head.appendChild(style);
