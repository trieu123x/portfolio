/**
 * PROJECTS DATA
 * images[0] = thumbnail hiển thị trên card
 * images[1..] = gallery trong detail modal
 * detail.role / detail.highlights / detail.bullets dùng cho modal
 */

/* ── Image imports ── */
import khImg1 from '../assets/k-hospital1.png';
import khImg2 from '../assets/k-hospital2.png';
import khImg3 from '../assets/k-hospital3.png';
import khImg4 from '../assets/k-hospital4.png';
import khImg5 from '../assets/k-hospital5.png';

import gbImg1 from '../assets/garbage1.png';
import gbImg2 from '../assets/garbage2.png';
import gbImg3 from '../assets/garbage3.png';
import gbImg4 from '../assets/garbage4.png';

import pdImg1 from '../assets/pattern-detect1.webp';

import exImg1 from '../assets/exclusive.png';
import exImg2 from '../assets/exclusive2.png';
import exImg3 from '../assets/exclusive3.png';

import weatherImg1 from '../assets/weather.png';

const projects = [
  {
    id: 'k-hospital',
    title: 'K-Hospital – MediCare',
    desc: 'Full-stack hospital appointment platform with an end-to-end RAG pipeline: query rewriting, hybrid vector search (pgvector + keyword), and real-time LLM streaming with Gemini fallback handling.',
    tech: ['Python', 'FastAPI', 'Gemini', 'pgvector', 'Next.js', 'Node.js', 'Prisma'],
    icon: '🏥',
    liveUrl: 'https://k-hospital.vercel.app',
    codeUrl: 'https://github.com/trieu123x/k-hospital',
    wip: false,
    images: [khImg1, khImg2, khImg3, khImg4, khImg5],
    detail: {
      role: 'AI / Backend Engineer (Team project)',
      highlights: [
        'Designed and implemented the full RAG pipeline — from query rewriting to answer generation',
        'Built hybrid vector search combining pgvector cosine similarity with keyword fallback',
        'Integrated Gemini API with real-time SSE streaming and multi-layer fallback handling',
        'Developed embedding cache using MD5 hashing to reduce redundant Gemini API calls',
        'Created doctor/disease/medicine retrieval with semantic similarity thresholds',
        'Implemented appointment booking REST API with role-based JWT authorization (FastAPI)',
      ],
      stack: {
        AI: ['Gemini API', 'pgvector', 'RAG Pipeline', 'SSE Streaming', 'Embedding Cache'],
        Backend: ['FastAPI', 'Python', 'PostgreSQL', 'Prisma', 'Node.js'],
        Frontend: ['Next.js', 'React'],
      },
    },
  },
  {
    id: 'garbage-classify',
    title: 'Garbage Classification System',
    desc: 'Real-time 12-class garbage detection & classification. Two-stage pipeline: YOLOv8 for detection + ResNet50 for classification. Achieved mAP@50: 0.83, accuracy: 0.84.',
    tech: ['PyTorch', 'YOLOv8', 'ResNet50', 'Flask', 'OpenCV', 'CUDA'],
    icon: '♻️',
    liveUrl: null,
    codeUrl: 'https://github.com/trieu123x/Garbage_detect_and_classify',
    wip: false,
    images: [gbImg1, gbImg2, gbImg3, gbImg4],
    detail: {
      role: 'Solo Project',
      highlights: [
        'Trained YOLOv8 on custom dataset for object detection across 12 garbage classes',
        'Fine-tuned ResNet50 for classification stage, achieving 84% accuracy on test set',
        'Built two-stage pipeline: YOLO detects bounding boxes → ResNet classifies crop',
        'Deployed as Flask web app with real-time webcam and image upload support',
        'Optimized inference with CUDA acceleration on GPU',
        'Achieved mAP@50 of 0.83 on validation set',
      ],
      stack: {
        'Computer Vision': ['YOLOv8', 'ResNet50', 'OpenCV', 'CUDA'],
        'ML Framework': ['PyTorch', 'Ultralytics'],
        'Deployment': ['Flask', 'Python'],
      },
    },
  },
  {
    id: 'ai-pattern-detection',
    title: 'AI Pattern Detection',
    desc: 'Zero-shot technical symbol detector for engineering drawings. Uses multi-scale × multi-angle template matching (TM_CCOEFF_NORMED) + two-level NMS. No training data required — just 1 template image.',
    tech: ['Python', 'OpenCV', 'DINOv2', 'Gradio', 'NumPy', 'PyTorch'],
    icon: '🔍',
    liveUrl: 'https://huggingface.co/spaces/trieu123x/AI-Pattern-Detection',
    codeUrl: 'https://github.com/trieu123x/AI-Pattern-Detection',
    wip: false,
    images: [pdImg1],
    detail: {
      role: 'Solo Project',
      highlights: [
        'Zero-shot detection — works with just 1 template image, no training data required',
        'Multi-scale × multi-angle template matching using TM_CCOEFF_NORMED correlation',
        'Two-level NMS (Non-Maximum Suppression) to eliminate duplicate detections',
        'Spotlight visualization to highlight detected symbols in dense engineering drawings',
        'Gradio UI for easy drag-and-drop template + drawing input',
        'Explored DINOv2 feature embeddings as an alternative detection approach',
      ],
      stack: {
        'Vision': ['OpenCV', 'NumPy', 'Template Matching', 'NMS'],
        'AI / Research': ['DINOv2', 'PyTorch'],
        'UI': ['Gradio', 'Python'],
      },
    },
  },
  {
    id: 'exclusive-ecommerce',
    title: 'Exclusive – E-Commerce Platform',
    desc: 'Full-stack e-commerce with dynamic sales pricing, inventory locking, COD/VNPay/Stripe payments, admin revenue analytics (monthly/weekly/daily charts), wishlist, reviews, and VIP program.',
    tech: ['Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Stripe', 'VNPay', 'JWT', 'Recharts'],
    icon: '🛒',
    liveUrl: null,
    codeUrl: 'https://github.com/trieu123x/e-commerce-1',
    wip: false,
    images: [exImg1, exImg2, exImg3],
    detail: {
      role: 'Solo Project',
      highlights: [
        'Dynamic sales system: admin creates time-based promotions with discount %, products auto-display sale price',
        'Inventory locking with row-level DB locks to prevent race conditions and overselling',
        'Multi-gateway payment: COD instant confirmation, VNPay redirect flow, Stripe card processing',
        'Admin analytics dashboard with stacked bar charts (monthly/weekly/daily) per payment method',
        'Stock validation pipeline: frontend disables buy button → cart pre-checkout check → backend atomic deduction',
        'VIP program, wishlist, product reviews/ratings, multi-address management',
        '40+ REST API endpoints, 14 database tables, JWT role-based auth',
      ],
      stack: {
        Frontend: ['Next.js 13+', 'React Hooks', 'Tailwind CSS', 'Recharts', 'Framer Motion'],
        Backend: ['Node.js', 'Express.js', 'Sequelize ORM', 'JWT', 'Bcrypt'],
        Database: ['PostgreSQL', 'Migrations'],
        Payments: ['Stripe', 'VNPay', 'COD'],
      },
    },
  },
  {
    id: 'weather-dashboard',
    title: 'Premium Weather Dashboard',
    desc: 'Sophisticated weather app with realistic Framer Motion animations (snow, rain, storms, sun rays), glassmorphism UI, hierarchical country→city search, pinned favorites, and full EN/VI i18n support.',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Axios', 'OpenWeatherMap API'],
    icon: '🌦️',
    liveUrl: 'https://weather-app-iota-taupe-16.vercel.app/',
    codeUrl: 'https://github.com/trieu123x/weather-app',
    wip: false,
    images: [weatherImg1],
    detail: {
      role: 'Solo Project',
      highlights: [
        'Custom-built weather animations (snow, rain, storms, sun rays) using Framer Motion at 60fps via GPU acceleration (will-change, translateZ)',
        'Hierarchical search flow: filter by Country first, then City — powered by OpenWeatherMap Geocoding API',
        'Pinned Favorites system with custom hook (useFavorites) and LocalStorage persistence',
        'Dark/Light dynamic theme switching with glassmorphism design system',
        'Context API for global i18n (EN/VI) and favorites state management',
        '5-day forecast with 3-hour interval data and visual trend charts',
        'Optimized SVG rendering and scroll micro-interactions for premium UX',
      ],
      stack: {
        Core: ['React 18', 'Vite'],
        Styling: ['Tailwind CSS', 'Custom CSS (Glassmorphism)'],
        Animation: ['Framer Motion'],
        'Data & API': ['Axios', 'OpenWeatherMap API'],
        'State & Persistence': ['React Context API', 'LocalStorage'],
      },
    },
  },
  {
    id: 'coming-soon',
    title: 'Next Project',
    desc: 'Always building something new. Stay tuned for the next AI-powered project coming soon.',
    tech: ['TBD'],
    icon: '🚀',
    liveUrl: null,
    codeUrl: null,
    wip: true,
    images: [],
    detail: null,
  },
];

export default projects;
