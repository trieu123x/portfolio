# 🚀 Đinh Hải Triều — AI Engineer Portfolio

> Personal portfolio website built with **React + Vite**, featuring bilingual EN/VI support, project detail modals, and a premium dark-mode design.

🔗 **Live:** [trieu123x.github.io/portfolio](https://trieu123x.github.io/portfolio) &nbsp;|&nbsp; **GitHub:** [@trieu123x](https://github.com/trieu123x) &nbsp;|&nbsp; **Facebook:** [unknown9029](https://www.facebook.com/unknown9029)

---

## ✨ Features

| Feature | Details |
|---|---|
| 🌐 **Bilingual** | Full EN / VI toggle — all text, nav labels, facts, project descriptions |
| 🖼️ **Project Detail Modal** | Gallery with keyboard navigation (← → Esc), highlights, tech stack breakdown |
| 🎨 **Animated Squares** | Decorative outline squares cycle through white → purple with staggered delays |
| 📌 **Social Sidebar** | Fixed left-side strip with GitHub + Facebook icons |
| ⌨️ **Typing Effect** | Hero role animator restarts cleanly on language switch |
| 📱 **Responsive** | Mobile-friendly, sidebar hidden on small screens |

---

## 🗂️ Projects

### 🏥 K-Hospital – MediCare
Full-stack hospital appointment platform — my focus was the **AI / RAG backend**:
- End-to-end RAG pipeline (query rewriting → embedding → hybrid vector search → LLM generation)
- Hybrid search: pgvector cosine similarity + keyword fallback
- Real-time SSE streaming with Gemini API + multi-layer fallback
- Embedding cache (MD5 hashing) to reduce API calls

**Stack:** Python · FastAPI · Gemini · pgvector · Next.js · Node.js · Prisma

---

### ♻️ Garbage Classification System *(Solo)*
Real-time 12-class garbage detection & classification — two-stage CV pipeline.
- YOLOv8 detection + ResNet50 classification — mAP@50: **0.83**, accuracy: **0.84**
- Flask web app with webcam + image upload, CUDA-accelerated inference

**Stack:** PyTorch · YOLOv8 · ResNet50 · Flask · OpenCV · CUDA

---

### 🔍 AI Pattern Detection *(Solo)*
Zero-shot technical symbol detector — **no training data required**, just 1 template image.
- Multi-scale × multi-angle template matching (TM_CCOEFF_NORMED) + two-level NMS
- Gradio UI with spotlight visualization
- DINOv2 feature embeddings as alternative approach

**Stack:** Python · OpenCV · DINOv2 · Gradio · NumPy · PyTorch

---

### 🛒 Exclusive – E-Commerce Platform *(Solo)*
Full-stack e-commerce with advanced inventory and payment features:
- Dynamic sales system (time-based discounts, auto price updates)
- Row-level DB locking to prevent race conditions / overselling
- COD / VNPay / Stripe payment gateways
- Admin analytics dashboard (monthly / weekly / daily stacked bar charts)
- 40+ REST endpoints · 14 DB tables · JWT role-based auth

**Stack:** Next.js · Node.js · Express · PostgreSQL · Sequelize · Stripe · VNPay · Recharts

---

### 🌦️ Premium Weather Dashboard *(Solo)*
Sophisticated React weather app with premium UX:
- Custom Framer Motion animations (snow, rain, storms, sun rays) at 60fps (GPU-accelerated)
- Hierarchical country → city search via OpenWeatherMap Geocoding API
- Pinned Favorites with `useFavorites` hook + LocalStorage persistence
- Glassmorphism dark/light theme, full EN/VI i18n, 5-day forecast

**Stack:** React 18 · Vite · Tailwind CSS · Framer Motion · Axios · OpenWeatherMap API

---

## 🛠️ Tech Stack

```
Frontend   React 18 · Vite · Vanilla CSS
i18n       Custom LanguageContext + translations.js (EN/VI)
Routing    Single-page, scroll-based sections
Assets     Vite static imports for all project screenshots
```

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── assets/              # Project screenshots (k-hospital, garbage, etc.)
│   ├── components/
│   │   ├── Header.jsx       # Nav with EN/VI toggle
│   │   ├── Hero.jsx         # Typing animation, restarts on lang switch
│   │   ├── Projects.jsx     # Card grid with thumbnail + detail modal trigger
│   │   ├── ProjectDetail.jsx# Modal: gallery, highlights, tech stack
│   │   ├── Skills.jsx       # Skill groups with translated titles
│   │   ├── About.jsx        # Bio + Python-style code card + fun facts
│   │   ├── Contact.jsx      # Contact links (email, phone, GitHub, FB)
│   │   ├── Footer.jsx       # Social icons (GitHub + Facebook)
│   │   └── SocialSidebar.jsx# Fixed left sidebar with social icons
│   ├── data/
│   │   ├── projects.js      # All project data + images + detail content
│   │   └── skills.js        # Skill groups data
│   └── i18n/
│       ├── LanguageContext.jsx  # React Context + useLang() hook
│       └── translations.js     # All EN + VI strings
├── public/
└── index.html
```

---

## 🚀 Running Locally

```bash
npm install
npm run dev       # → http://localhost:5173
```

---

## 📬 Contact

| Channel | Link |
|---|---|
| Email | trieudh14@gmail.com |
| GitHub | [@trieu123x](https://github.com/trieu123x) |
| Facebook | [unknown9029](https://www.facebook.com/unknown9029) |
| Location | Bắc Từ Liêm, Hà Nội |

---

<p align="center">Made with ☕ by <strong>Đinh Hải Triều</strong></p>
